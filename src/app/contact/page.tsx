'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa';

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
  preferredContact: 'email' | 'text';
  aiAssist: boolean;
};

export default function ContactPage() {
  // Primary affiliate link for Beckett Grading
  const beckettAffiliateLink = "https://www.tkqlhce.com/click-9083409-15435040";
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  
  // Speech recognition states
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const [interimTranscript, setInterimTranscript] = useState('');
  
  // References
  const recognitionRef = useRef<any>(null);
  const transcriptRef = useRef('');
  const messageRef = useRef('');
  
  const { register, handleSubmit, formState: { errors }, watch, reset, setValue } = useForm<ContactFormData>({
    defaultValues: {
      preferredContact: 'email',
      aiAssist: true
    }
  });

  const preferredContact = watch('preferredContact');
  const aiAssistEnabled = watch('aiAssist');
  const message = watch('message', '');
  
  // Update ref when message changes
  useEffect(() => {
    messageRef.current = message;
  }, [message]);

  // Handle speech recognition results without causing infinite loops
  const handleSpeechResult = useCallback((event: any) => {
    let interimText = '';
    let finalText = '';

    // Loop through the results to get the transcription
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        finalText += event.results[i][0].transcript;
      } else {
        interimText += event.results[i][0].transcript;
      }
    }

    // Update the message with the final transcript
    if (finalText !== '') {
      // Use the ref to maintain state between callbacks
      transcriptRef.current += ' ' + finalText;
      const cleanedTranscript = transcriptRef.current.trim();
      
      // Update form value without triggering infinite updates
      setValue('message', cleanedTranscript);
    }
    
    // Show the interim results
    setInterimTranscript(interimText);
  }, [setValue]);

  // Initialize speech recognition once - no dependencies to avoid re-initialization
  useEffect(() => {
    // Check if browser supports speech recognition
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';
      
      // Use the callback ref to avoid closures over changing state
      recognitionRef.current.onresult = handleSpeechResult;

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        if (isListening) {
          // Try to restart if we're still supposed to be listening
          try {
            recognitionRef.current.start();
          } catch (e) {
            console.log('Recognition failed to restart');
            setIsListening(false);
          }
        }
      };

      setSpeechSupported(true);
    }

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (e) {
          // Ignore errors if not started
        }
      }
    };
  }, [handleSpeechResult]);

  // Control the speech recognition based on isListening state
  useEffect(() => {
    if (!recognitionRef.current) return;
    
    if (isListening) {
      transcriptRef.current = messageRef.current; // Initialize with current message
      try {
        recognitionRef.current.start();
      } catch (e) {
        console.log('Recognition already started');
      }
    } else {
      try {
        recognitionRef.current.stop();
      } catch (e) {
        console.log('Recognition already stopped');
      }
    }
  }, [isListening]);

  // Toggle speech recognition
  const toggleListening = () => {
    setIsListening(!isListening);
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // If AI assistance is enabled, generate an OpenAI response
      if (data.aiAssist) {
        try {
          const aiResponseData = await generateOpenAIResponse(data);
          setAiResponse(aiResponseData);
        } catch (error) {
          console.error('Error generating AI response:', error);
          // Fallback to default response if AI generation fails
          setAiResponse(`Thank you for your message, ${data.firstName}. Our team will review your inquiry about ${data.topic.toLowerCase()} and get back to you soon.`);
        }
      }
      
      // Submit form data to your backend
      await submitContactForm(data);
      
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("There was a problem submitting your message. Please try again.");
    } finally {
      setIsSubmitting(false);
      
      // Stop listening if still active
      if (isListening) {
        setIsListening(false);
      }
    }
  };

  // Function to generate response using OpenAI
  const generateOpenAIResponse = async (data: ContactFormData) => {
    try {
      // In a real implementation, you'd make an API call to your backend which interfaces with OpenAI
      const response = await fetch('/api/generate-ai-response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.firstName,
          topic: data.topic,
          message: data.message,
        }),
      });
      
      // If the API call fails, use our fallback responses
      if (!response.ok) {
        return getFallbackResponse(data);
      }
      
      const result = await response.json();
      return result.response;
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      return getFallbackResponse(data);
    }
  };
  
  // Fallback responses when API is not available
  const getFallbackResponse = (data: ContactFormData) => {
    const responses: Record<string, string> = {
      'General Inquiry': `Thanks for reaching out, ${data.firstName}. We've received your general inquiry and will get back to you shortly. In the meantime, you might find our FAQ section useful for common questions.`,
      'Card Collecting Questions': `Hi ${data.firstName}, thanks for your question about card collecting. While we review your specific inquiry, you might want to check out our beginner's guide at cardconnecthub.com/blog/card-collecting-beginners-guide.`,
      'Storage & Protection': `Thanks for your question about card storage, ${data.firstName}. Proper storage is crucial for maintaining card condition. While we prepare a detailed response, you might find immediate answers in our comprehensive guide at cardconnecthub.com/blog/properly-store-valuable-card-collection.`,
      'Card Grading': `Hi ${data.firstName}, we've received your inquiry about card grading. This is an important topic for serious collectors. While our team prepares a response, you might be interested in our professional grading services through Beckett Grading.`,
      'Blog Topic Suggestion': `Thanks for suggesting a blog topic, ${data.firstName}! We appreciate your input and are always looking for new content ideas that interest our collector community.`,
      'Advertising & Partnerships': `Thank you for your interest in partnering with CardConnect Hub, ${data.firstName}. Our partnerships team will review your inquiry and get back to you soon with more information.`,
      'Other': `Thanks for contacting us, ${data.firstName}. We've received your message and will respond as soon as possible.`
    };
    
    return responses[data.topic] || responses['Other'];
  };

  // Function to submit the form data
  const submitContactForm = async (data: ContactFormData) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real implementation, you would send this data to your backend
    console.log('Form submitted with data:', data);
    
    // For this example, we'll just return a successful response
    return { success: true };
  };

  const handleNewMessage = () => {
    setSubmitSuccess(false);
    setAiResponse(null);
    reset();
  };

  if (submitSuccess) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
              <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h2>
            {aiResponse && (
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">AI Assistant Response:</h3>
                <div className="bg-gray-50 p-4 rounded-md text-left">
                  <p className="text-gray-700">{aiResponse}</p>
                </div>
              </div>
            )}
            <p className="text-gray-600 mb-6">
              {aiResponse 
                ? "We've sent this automated response to your preferred contact method. Our team will follow up with more information soon."
                : "Thank you for contacting us. We've received your message and will get back to you soon."}
            </p>
            <button 
              onClick={handleNewMessage}
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-6 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Contact Us</h1>
        <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
          Have questions about card collecting? We're here to help.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Contact Form with AI Integration */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3 flex-1 md:flex md:justify-between">
                <p className="text-sm text-blue-700">
                  Use voice dictation or text to share your card collecting questions and get instant AI-powered answers.
                </p>
              </div>
            </div>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                <input
                  type="text"
                  id="first-name"
                  className={`mt-1 block w-full rounded-md ${errors.firstName ? 'border-red-300' : 'border-gray-300'} shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
                  {...register('firstName', { required: 'First name is required' })}
                />
                {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>}
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                <input
                  type="text"
                  id="last-name"
                  className={`mt-1 block w-full rounded-md ${errors.lastName ? 'border-red-300' : 'border-gray-300'} shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
                  {...register('lastName', { required: 'Last name is required' })}
                />
                {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className={`mt-1 block w-full rounded-md ${errors.email ? 'border-red-300' : 'border-gray-300'} shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone number (for text responses)</label>
              <input
                type="tel"
                id="phone"
                className={`mt-1 block w-full rounded-md ${errors.phone ? 'border-red-300' : 'border-gray-300'} shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
                {...register('phone', { 
                  required: preferredContact === 'text' ? 'Phone number is required for text responses' : false,
                  pattern: preferredContact === 'text' ? {
                    value: /^\d{10}$/,
                    message: "Please enter a valid 10-digit phone number"
                  } : undefined
                })}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
            </div>

            <div>
              <label htmlFor="topic" className="block text-sm font-medium text-gray-700">Topic</label>
              <select
                id="topic"
                className={`mt-1 block w-full rounded-md ${errors.topic ? 'border-red-300' : 'border-gray-300'} shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
                {...register('topic', { required: 'Please select a topic' })}
              >
                <option value="">Select a topic</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Card Collecting Questions">Card Collecting Questions</option>
                <option value="Storage & Protection">Storage & Protection</option>
                <option value="Card Grading">Card Grading</option>
                <option value="Blog Topic Suggestion">Blog Topic Suggestion</option>
                <option value="Advertising & Partnerships">Advertising & Partnerships</option>
                <option value="Other">Other</option>
              </select>
              {errors.topic && <p className="mt-1 text-sm text-red-600">{errors.topic.message}</p>}
            </div>

            <div>
              <div className="flex justify-between items-center">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                {speechSupported && (
                  <button 
                    type="button"
                    onClick={toggleListening}
                    className={`inline-flex items-center px-3 py-1 border ${isListening ? 'border-red-300 bg-red-50 text-red-600' : 'border-green-300 bg-green-50 text-green-600'} rounded-md text-sm font-medium`}
                  >
                    {isListening ? (
                      <>
                        <FaMicrophoneSlash className="h-4 w-4 mr-1" />
                        Stop Dictation
                      </>
                    ) : (
                      <>
                        <FaMicrophone className="h-4 w-4 mr-1" />
                        Start Dictation
                      </>
                    )}
                  </button>
                )}
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  rows={4}
                  className={`mt-1 block w-full rounded-md ${errors.message ? 'border-red-300' : 'border-gray-300'} shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
                  placeholder={speechSupported ? "Type or dictate your message here..." : "How can we help?"}
                  {...register('message', { 
                    required: 'Please enter your message',
                    minLength: {
                      value: 20,
                      message: 'Your message should be at least 20 characters'
                    }
                  })}
                />
                {isListening && interimTranscript && (
                  <div className="absolute bottom-2 left-2 right-2 bg-gray-100 text-gray-600 p-2 rounded text-sm">
                    {interimTranscript}...
                  </div>
                )}
              </div>
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
              
              {isListening && (
                <p className="mt-2 text-xs text-green-600 flex items-center">
                  <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-1 animate-pulse"></span>
                  Listening... Speak clearly into your microphone
                </p>
              )}
            </div>

            {/* AI Assistance Options */}
            <div className="bg-gray-50 rounded-md p-4">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Response Preferences</h3>
              
              <div className="mb-4">
                <div className="flex items-center">
                  <input
                    id="ai-assist"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    {...register('aiAssist')}
                  />
                  <label htmlFor="ai-assist" className="ml-2 block text-sm text-gray-900">
                    Enable AI assistant (get an immediate automated response)
                  </label>
                </div>
                <p className="mt-1 text-sm text-gray-500 ml-6">
                  Our AI can provide helpful information while you wait for a personalized response from our team.
                </p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700">Preferred contact method</label>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center">
                    <input
                      id="contact-email"
                      type="radio"
                      value="email"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                      {...register('preferredContact')}
                    />
                    <label htmlFor="contact-email" className="ml-2 block text-sm text-gray-900">
                      Email
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="contact-text"
                      type="radio"
                      value="text"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                      {...register('preferredContact')}
                    />
                    <label htmlFor="contact-text" className="ml-2 block text-sm text-gray-900">
                      Text Message
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex justify-center rounded-md border border-transparent py-2 px-6 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                  isSubmitting 
                    ? 'bg-indigo-400 cursor-not-allowed' 
                    : 'bg-indigo-600 hover:bg-indigo-700'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">CardConnect Hub Support</h3>
              <p className="mt-2 text-gray-600">
                For general inquiries and customer support regarding the content on CardConnect Hub.
              </p>
              <p className="mt-2 text-gray-600">
                <strong>Email:</strong> support@cardconnecthub.com
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900">Partnerships & Advertising</h3>
              <p className="mt-2 text-gray-600">
                Interested in partnering with CardConnect Hub or advertising opportunities?
              </p>
              <p className="mt-2 text-gray-600">
                <strong>Email:</strong> partners@cardconnecthub.com
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900">Content Suggestions</h3>
              <p className="mt-2 text-gray-600">
                Have ideas for articles or topics you'd like to see covered on CardConnect Hub?
              </p>
              <p className="mt-2 text-gray-600">
                <strong>Email:</strong> content@cardconnecthub.com
              </p>
            </div>
          </div>
        </div>

        {/* Professional Grading */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Professional Card Grading Services</h2>
          <p className="mb-6">
            Looking for professional card grading services? Beckett Grading Services provides expert authentication and grading for your valuable cards.
          </p>
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <a 
              href={beckettAffiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-indigo-700 px-6 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors text-center"
            >
              Visit Beckett Grading
            </a>
            <p className="text-sm text-white text-opacity-90">
              For direct inquiries about card grading services and processes
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">What is CardConnect Hub?</h3>
              <p className="mt-2 text-gray-600">
                CardConnect Hub is a comprehensive resource for card collectors, offering guides, tips, and product recommendations for collecting, storing, and investing in sports cards and trading cards.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900">Do you provide personalized card appraisals?</h3>
              <p className="mt-2 text-gray-600">
                We don't currently offer individual card appraisal services. However, our guides can help you understand factors that affect card values, and we recommend professional grading services for valuable cards.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900">How quickly will you respond to my inquiry?</h3>
              <p className="mt-2 text-gray-600">
                With AI assistance enabled, you'll receive an immediate automated response. Our human team strives to follow up on all inquiries within 1-2 business days for more detailed assistance.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900">Can I use voice dictation to submit my message?</h3>
              <p className="mt-2 text-gray-600">
                Yes! Our contact form includes voice dictation capabilities on compatible browsers. Simply click the "Start Dictation" button and speak clearly into your microphone to compose your message hands-free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
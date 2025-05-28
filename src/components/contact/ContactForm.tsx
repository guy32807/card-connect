'use client';

import { useState, useRef, useEffect } from 'react';

export default function ContactForm() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Validation and submission state
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // AI assistant state
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [aiMessage, setAiMessage] = useState('');
  const [aiThinking, setAiThinking] = useState(false);
  
  // Speech recognition state
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const speechRecognitionRef = useRef<any>(null);

  // Check if speech recognition is supported
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      setSpeechSupported(true);
      speechRecognitionRef.current = new SpeechRecognition();
      speechRecognitionRef.current.continuous = true;
      speechRecognitionRef.current.interimResults = true;
      
      speechRecognitionRef.current.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map(result => result.transcript)
          .join('');
        
        if (event.results[0].isFinal) {
          setFormData(prev => ({
            ...prev,
            message: prev.message + ' ' + transcript
          }));
        }
      };
      
      speechRecognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
      };
    }
    
    return () => {
      if (speechRecognitionRef.current) {
        speechRecognitionRef.current.abort();
      }
    };
  }, []);
  
  // Toggle speech recognition
  const toggleListening = () => {
    if (isListening) {
      speechRecognitionRef.current.stop();
      setIsListening(false);
    } else {
      speechRecognitionRef.current.start();
      setIsListening(true);
    }
  };
  
  // Generate AI response based on user's input using OpenAI API
  const generateAIResponse = async () => {
    if (!formData.message.trim()) return;
    
    setAiThinking(true);
    setShowAIAssistant(true);
    
    try {
      // Call our OpenAI API route
      const response = await fetch('/api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: formData.message,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }
      
      const data = await response.json();
      setAiMessage(data.response);
    } catch (error) {
      console.error('AI response generation error:', error);
      setAiMessage("I'm sorry, I couldn't generate a proper response at the moment. Our team will respond to your message as soon as possible.");
    } finally {
      setAiThinking(false);
    }
  };
  
  // General form handling
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  // Form validation
  const validate = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    // Stop speech recognition if it's active
    if (isListening) {
      speechRecognitionRef.current.stop();
      setIsListening(false);
    }
    
    try {
      // Simulate form submission with a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Hide AI assistant when form is successfully submitted
      setShowAIAssistant(false);
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({
        form: 'An error occurred. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="contact-form-wrapper">
      <form onSubmit={handleSubmit} className="contact-form">
        {submitSuccess && (
          <div className="success-message mb-6">
            Thank you! Your message has been sent successfully. Our team will get back to you soon.
          </div>
        )}
        
        {errors.form && (
          <div className="error-message mb-6">
            {errors.form}
          </div>
        )}
        
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`form-control ${errors.name ? 'error' : ''}`}
            placeholder="Your name"
            disabled={isSubmitting}
          />
          {errors.name && <div className="form-error">{errors.name}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-control ${errors.email ? 'error' : ''}`}
            placeholder="your.email@example.com"
            disabled={isSubmitting}
          />
          {errors.email && <div className="form-error">{errors.email}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="subject" className="form-label">
            Subject <span className="text-red-500">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`form-control ${errors.subject ? 'error' : ''}`}
            disabled={isSubmitting}
          >
            <option value="" disabled>Select a subject</option>
            <option value="Authentication Question">Authentication Question</option>
            <option value="Grading Inquiry">Grading Inquiry</option>
            <option value="Price Guide Question">Price Guide Question</option>
            <option value="Partnership Opportunity">Partnership Opportunity</option>
            <option value="Other">Other</option>
          </select>
          {errors.subject && <div className="form-error">{errors.subject}</div>}
        </div>
        
        <div className="form-group">
          <div className="message-input-header">
            <label htmlFor="message" className="form-label">
              Message <span className="text-red-500">*</span>
            </label>
            
            <div className="message-actions">
              <button 
                type="button" 
                className="ai-suggest-btn" 
                onClick={generateAIResponse} 
                disabled={!formData.message.trim() || isSubmitting}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
                <span>AI Assist</span>
              </button>
              
              {speechSupported && (
                <button 
                  type="button" 
                  className={`speech-btn ${isListening ? 'active' : ''}`}
                  onClick={toggleListening}
                  disabled={isSubmitting}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" y1="19" x2="12" y2="23"></line>
                    <line x1="8" y1="23" x2="16" y2="23"></line>
                  </svg>
                  <span>{isListening ? 'Stop' : 'Dictate'}</span>
                </button>
              )}
            </div>
          </div>
          
          <div className={`textarea-container ${isListening ? 'listening' : ''}`}>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`form-control ${errors.message ? 'error' : ''}`}
              rows={5}
              placeholder={isListening ? "Speak now... I'm listening" : "How can we help you?"}
              disabled={isSubmitting}
            ></textarea>
            
            {isListening && (
              <div className="listening-indicator">
                <div className="listening-waves">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>
          
          {errors.message && <div className="form-error">{errors.message}</div>}
        </div>
        
        {showAIAssistant && (
          <div className="ai-assistant-container mb-6">
            <div className="ai-assistant-header">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="4"></circle>
                <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
                <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
                <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
                <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line>
                <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
              </svg>
              <span>AI Assistant</span>
              <button 
                type="button" 
                className="close-btn" 
                onClick={() => setShowAIAssistant(false)}
              >
                &times;
              </button>
            </div>
            
            <div className="ai-assistant-body">
              {aiThinking ? (
                <div className="ai-thinking">
                  <span className="ai-dot"></span>
                  <span className="ai-dot"></span>
                  <span className="ai-dot"></span>
                </div>
              ) : (
                <p>{aiMessage}</p>
              )}
            </div>
          </div>
        )}
        
        <div className="mt-6">
          <button 
            type="submit" 
            className="btn btn-primary w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="loading-spinner"></span>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
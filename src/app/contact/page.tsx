import { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | CardConnect',
  description: 'Get in touch with the CardConnect team for questions about card authentication, grading, and valuation.',
};

export default function Contact() {
  return (
    <div className="container section">
      <div className="text-center mb-12">
        <h1 className="mb-4">Contact Us</h1>
        <p className="text-gray max-w-2xl mx-auto">
          Have questions about our services or need assistance with your collection? 
          Our team is here to help you navigate the world of sports card collecting.
        </p>
      </div>
      
      <div className="grid md:grid-2 gap-12">
        <div>
          <div className="card mb-8">
            <div className="card-body">
              <h2 className="card-title">Get In Touch</h2>
              <p className="mb-2">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              <div className="mb-6 flex items-center gap-2 p-3 rounded bg-gray-50">
                <div className="text-primary text-xl flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                  </svg>
                </div>
                <p className="text-sm m-0">
                  <strong>Try our AI features:</strong> Use the AI Assistant for instant feedback on your inquiry, or dictate your message using speech-to-text.
                </p>
              </div>
              
              <ContactForm />
            </div>
          </div>
        </div>
        
        <div>
          <div className="card mb-8">
            <div className="card-body">
              <h2 className="card-title">Contact Information</h2>
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3>Phone</h3>
                    <p>(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3>Email</h3>
                    <p>support@cardconnect.com</p>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3>Location</h3>
                    <p>123 Card Street, Suite 100</p>
                    <p>Dallas, TX 75001</p>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3>Business Hours</h3>
                    <p>Monday - Friday: 9am - 5pm</p>
                    <p>Saturday: 10am - 2pm</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">About Our AI Features</h2>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">AI Assistant</h3>
                <p className="text-sm">
                  Our AI Assistant analyzes your message in real-time to provide instant feedback and answers to common questions. It helps you get information quickly while waiting for our team's response.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Speech-to-Text</h3>
                <p className="text-sm">
                  The dictation feature uses your browser's built-in speech recognition to convert your spoken words into text. Available in Chrome, Edge, and Safari browsers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import Hero from '@/components/home/Hero';
import ProductShowcase from '@/components/home/ProductShowcase';
import AICollectionAnalyzer from '@/components/AI/AICollectionAnalyzer';
import { Metadata } from 'next';
import './custom.css';

export const metadata: Metadata = {
  title: 'CardConnect Hub | Premium Sports Cards & Collectibles',
  description: 'Discover premium sports cards, price guides, and collectibles resources - your trusted source for sports memorabilia and collecting expertise.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <section className="section bg-white relative">
        <div className="blob blob-1"></div>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">AI-Powered Collection Analysis</h2>
            <p className="text-gray max-w-2xl mx-auto">Get insights into your collection's value and rarity with our advanced AI tool.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="ai-analyzer">
              <div className="analyzer-header">
                <h3 className="analyzer-title">Collection Analyzer</h3>
                <p className="analyzer-subtitle">Powered by advanced AI to assess your card collection</p>
              </div>
              <div className="analyzer-body">
                <AICollectionAnalyzer />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-50 relative">
        <div className="blob blob-2"></div>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose CardConnect</h2>
            <p className="text-gray max-w-2xl mx-auto">
              Industry-leading tools and expertise at your fingertips
            </p>
          </div>
          
          <div className="grid grid-3">
            <div className="feature">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" />
                  <path d="M22 4L12 14.01L9 11.01" />
                </svg>
              </div>
              <h3 className="feature-title">Expert Authentication</h3>
              <p className="feature-text">Our team of experts authenticates your cards with precision and care.</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                  <path d="M12 6V12L16 14" />
                </svg>
              </div>
              <h3 className="feature-title">Fast Turnaround</h3>
              <p className="feature-text">Get your cards graded and returned quickly with our efficient service.</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" />
                  <path d="M16 2V6" />
                  <path d="M8 2V6" />
                  <path d="M3 10H21" />
                </svg>
              </div>
              <h3 className="feature-title">Up-to-date Pricing</h3>
              <p className="feature-text">Access real-time pricing data to make informed collecting decisions.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import { Metadata } from 'next';
import AboutContent from '@/components/about/AboutContent';

export const metadata: Metadata = {
  title: 'About Us | CardConnect',
  description: 'Learn about CardConnect, the premier destination for sports card collectors.',
};

export default function About() {
  return (
    <div className="container section">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="mb-4">About CardConnect</h1>
        <p className="text-gray max-w-3xl mx-auto">
          Your trusted partner for sports card authentication, grading, and valuation.
          We connect collectors with the resources they need to make informed decisions.
        </p>
      </div>
      
      {/* Mission Statement Card */}
      <div className="card mb-12">
        <div className="card-body">
          <h2 className="card-title">Our Mission</h2>
          <p className="card-text">
            CardConnect is dedicated to providing collectors with the most comprehensive 
            resources for sports card collecting, authentication, and valuation. Our mission
            is to connect collectors with the tools they need to make informed decisions about their collections.
          </p>
        </div>
      </div>
      
      {/* Client Component with Team Cards, Benefits Cards, and FAQs */}
      <AboutContent />
    </div>
  );
}
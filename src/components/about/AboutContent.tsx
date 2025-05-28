'use client';

import { useState } from 'react';

export default function AboutContent() {
  // Fallback images if team images fail to load
  const [imageError1, setImageError1] = useState(false);
  const [imageError2, setImageError2] = useState(false);

  // Base64 SVG placeholder for team members
  const teamPlaceholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTVlN2ViIi8+PGNpcmNsZSBjeD0iMjAwIiBjeT0iMTQwIiByPSI4MCIgZmlsbD0iIzljYTNhZiIvPjxyZWN0IHg9IjEyMCIgeT0iMjQwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjE4MCIgcng9IjUiIGZpbGw9IiM5Y2EzYWYiLz48Y2lyY2xlIGN4PSIyMDAiIGN5PSIxMjAiIHI9IjMwIiBmaWxsPSIjZTVlN2ViIi8+PHJlY3QgeD0iMTcwIiB5PSIxNTAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcng9IjUiIGZpbGw9IiNlNWU3ZWIiLz48L3N2Zz4=";
  
  return (
    <>
      {/* Benefits in Cards */}
      <div className="mb-12">
        <h2 className="mb-6 text-center">Why Collectors Choose Us</h2>
        <div className="grid grid-3 gap-6">
          <div className="card h-full">
            <div className="card-body">
              <div className="mb-4 text-primary text-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 11.08-2.37-2.63a3 3 0 1 0-4.26 4.26L22 19.34"></path>
                  <path d="M14.96 11.71A3 3 0 1 0 9.11 5.86"></path>
                  <path d="M7.34 6.78A3 3 0 1 0 2.49 11.64L13.01 22.14"></path>
                </svg>
              </div>
              <h3 className="card-title">Expert Authentication</h3>
              <p className="card-text">
                Every card authenticated through our service receives rigorous inspection by industry experts with decades of experience.
              </p>
            </div>
          </div>
          
          <div className="card h-full">
            <div className="card-body">
              <div className="mb-4 text-primary text-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20v-6"></path>
                  <path d="M6 20v-6"></path>
                  <path d="M18 20v-6"></path>
                  <path d="M6 14h12a2 2 0 0 0 2-2 3 3 0 0 0-3-3H7a3 3 0 0 0-3 3 2 2 0 0 0 2 2z"></path>
                  <path d="M4 9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2"></path>
                </svg>
              </div>
              <h3 className="card-title">Accurate Valuations</h3>
              <p className="card-text">
                Get precise market values based on actual sales data, ensuring you know the true worth of your collection.
              </p>
            </div>
          </div>
          
          <div className="card h-full">
            <div className="card-body">
              <div className="mb-4 text-primary text-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20"></path>
                  <path d="m9 4 3-2 3 2"></path>
                  <path d="m9 20 3 2 3-2"></path>
                  <path d="M3 12h18"></path>
                  <path d="M4 9c2-2.3 4-3 6-3a8 8 0 0 1 6 3c2-2.3 4-3 6-3"></path>
                  <path d="M4 15c2 2.3 4 3 6 3a8 8 0 0 0 6-3c2 2.3 4 3 6 3"></path>
                </svg>
              </div>
              <h3 className="card-title">Global Network</h3>
              <p className="card-text">
                Connect with collectors and industry experts worldwide to expand your collection and knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Team Section in Cards */}
      <div className="mb-12">
        <h2 className="mb-6 text-center">Our Team</h2>
        <div className="grid grid-2 gap-8">
          <div className="card">
            <div className="card-body flex items-center">
              <div className="w-28 h-28 rounded-full overflow-hidden mr-6 flex-shrink-0">
                <img 
                  src={imageError1 ? teamPlaceholder : "/images/team/placeholder.jpg"}
                  alt="John Doe"
                  className="w-full h-full object-cover"
                  onError={() => setImageError1(true)}
                />
              </div>
              <div>
                <h3 className="card-title mb-1">John Doe</h3>
                <p className="text-primary font-medium mb-3">Founder & CEO</p>
                <p className="card-text">
                  John has been collecting sports cards for over 20 years and founded CardConnect to help fellow collectors navigate the authentication and valuation process.
                </p>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="card-body flex items-center">
              <div className="w-28 h-28 rounded-full overflow-hidden mr-6 flex-shrink-0">
                <img 
                  src={imageError2 ? teamPlaceholder : "/images/team/placeholder.jpg"}
                  alt="Jane Smith"
                  className="w-full h-full object-cover"
                  onError={() => setImageError2(true)}
                />
              </div>
              <div>
                <h3 className="card-title mb-1">Jane Smith</h3>
                <p className="text-primary font-medium mb-3">Chief Authentication Officer</p>
                <p className="card-text">
                  With 15 years of experience at major grading companies, Jane leads our team of authentication specialists to ensure accurate and consistent results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section in Cards */}
      <div className="mb-12">
        <h2 className="mb-6 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-1 gap-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">How long does the authentication process take?</h3>
              <p className="card-text">
                Standard authentication typically takes 15-20 business days from receipt of your cards. Express services are available with turnaround times as quick as 5 business days.
              </p>
            </div>
          </div>
          
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">What information is included in the price guide?</h3>
              <p className="card-text">
                Our price guide includes current market values based on recent sales, historical pricing trends, population reports, and condition-specific valuations for over 1 million sports cards.
              </p>
            </div>
          </div>
          
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">How are the cards shipped back after grading?</h3>
              <p className="card-text">
                All cards are returned via insured shipping methods. Domestic orders use USPS with tracking and insurance, while international shipments use DHL or FedEx with full insurance coverage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
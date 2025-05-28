'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-grid">
            {/* Column 1: Brand and About */}
            <div className="footer-brand">
              <a href="/" className="footer-logo">CardConnect</a>
              <p className="footer-tagline">
                Connecting collectors with trusted authentication, grading, and pricing services for sports cards.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Column 2: Quick Links */}
            <div>
              <h3 className="footer-heading">Quick Links</h3>
              <div className="footer-links">
                <a href="/">Home</a>
                <a href="/about">About Us</a>
                <a href="/contact">Contact Us</a>
                <a href="/blog">Blog</a>
              </div>
            </div>
            
            {/* Column 3: Services */}
            <div>
              <h3 className="footer-heading">Services</h3>
              <div className="footer-links">
                <a href="#">Card Authentication</a>
                <a href="#">Professional Grading</a>
                <a href="#">Price Guide</a>
                <a href="#">Collection Tools</a>
              </div>
            </div>
            
            {/* Column 4: Newsletter */}
            <div>
              <h3 className="footer-heading">Subscribe to Our Newsletter</h3>
              <p className="text-sm mb-4">
                Stay updated with the latest news, pricing trends, and collecting tips.
              </p>
              <form className="newsletter-form">
                <div className="newsletter-input-group">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="newsletter-input" 
                    required
                  />
                  <button type="submit" className="newsletter-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {currentYear} CardConnect. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Affiliate Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
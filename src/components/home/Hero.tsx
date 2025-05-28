'use client';

import Link from 'next/link';

export default function Hero() {
  const affiliateLink = "https://www.tkqlhce.com/click-9083409-15435040";
  
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Authenticate & Value Your <span className="text-gradient">Sports Card</span> Collection</h1>
          <p>Trusted by collectors worldwide for expert authentication, grading, and the most accurate pricing information.</p>
          <div className="hero-buttons">
            <a href={affiliateLink} className="btn btn-secondary">
              Get Started
            </a>
            <Link href="/learn-more" className="btn btn-outline">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
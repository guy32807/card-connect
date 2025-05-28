'use client';

import AppImage from '@/components/shared/AppImage';

export default function ProductShowcase() {
  const affiliateLink = "https://www.tkqlhce.com/click-9083409-15435040";
  
  // Base64-encoded SVG placeholders as fallbacks
  const placeholders = {
    authentication: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQwIiBoZWlnaHQ9IjM2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM0ZjQ2ZTUiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM3YzNhZWQiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIi8+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSI4IiB4PSIyMjAiIHk9IjE1MCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOCIvPjxyZWN0IHdpZHRoPSIxNjAiIGhlaWdodD0iOCIgeD0iMjQwIiB5PSIyMTAiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjYiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjMyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkF1dGhlbnRpY2F0aW9uPC90ZXh0Pjwvc3ZnPg==",
    grading: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQwIiBoZWlnaHQ9IjM2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmNTllMGIiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNkOTc3MDYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIi8+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSI4IiB4PSIyMjAiIHk9IjE1MCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOCIvPjxyZWN0IHdpZHRoPSIxNjAiIGhlaWdodD0iOCIgeD0iMjQwIiB5PSIyMTAiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjYiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjMyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkdyYWRpbmc8L3RleHQ+PC9zdmc+",
    priceGuide: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQwIiBoZWlnaHQ9IjM2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxMGI5ODEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwNTk2NjkiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIi8+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSI4IiB4PSIyMjAiIHk9IjE1MCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuOCIvPjxyZWN0IHdpZHRoPSIxNjAiIGhlaWdodD0iOCIgeD0iMjQwIiB5PSIyMTAiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjYiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjMyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPlByaWNlIEd1aWRlPC90ZXh0Pjwvc3ZnPg=="
  };
  
  const products = [
    {
      title: "Beckett Authentication",
      description: "Get your cards professionally authenticated by the industry's most trusted experts.",
      image: "/images/products/authentication.jpg",
      fallbackSrc: placeholders.authentication,
      link: affiliateLink,
    },
    {
      title: "Beckett Grading",
      description: "Professional grading services to determine the condition and value of your cards.",
      image: "/images/products/grading.jpg",
      fallbackSrc: placeholders.grading,
      link: affiliateLink,
    },
    {
      title: "Price Guide Subscription",
      description: "Access up-to-date pricing information for over 1 million sports cards.",
      image: "/images/products/price-guide.jpg",
      fallbackSrc: placeholders.priceGuide,
      link: affiliateLink,
    },
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Our Premium Services</h2>
          <p className="text-gray max-w-2xl mx-auto">
            Comprehensive solutions for collectors of all levels. From authentication and grading to pricing guides.
          </p>
        </div>
        
        <div className="grid grid-3">
          {products.map((product, index) => (
            <div key={index} className="card animate-fadeIn">
              <div className="card-img-wrapper">
                <img 
                  src={product.fallbackSrc} 
                  alt={product.title} 
                  className="card-img"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">{product.title}</h3>
                <p className="card-text">{product.description}</p>
                <a href={product.link} className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import Link from 'next/link'
import { Metadata } from 'next'
import PlaceholderImage from '@/components/shared/PlaceholderImage'

export const metadata: Metadata = {
  title: 'Card Collecting Products & Supplies | CardConnect Hub',
  description: 'Shop the best card collecting products and supplies. From storage solutions to grading services, find everything you need for your collection.',
  keywords: 'card collecting supplies, card storage, card sleeves, card toploaders, grading supplies, card display, sports card supplies',
}

export default function ProductsPage() {
  // Primary affiliate link for Beckett Grading
  const beckettAffiliateLink = "https://www.tkqlhce.com/click-9083409-15435040";
  
  // Product listings with affiliate links
  const products = [
    {
      id: 'card-storage',
      name: 'Card Storage & Protection',
      description: 'Keep your valuable cards safe with premium storage and protection supplies',
      imagePath: '/images/products/card-storage-products.jpg',
      placeholderType: 'sports-card',
      featured: true,
      products: [
        {
          name: 'Ultra Pro Penny Sleeves (500 Count)',
          price: '$8.99',
          rating: 4.8,
          link: 'https://www.amazon.com/Ultra-Pro-Sleeves-2-Sleeves-Standard/dp/B08CV8GSPN?tag=cardconnect08-20&linkCode=ur2'
        },
        {
          name: 'BCW Premium Toploaders (25 Count)',
          price: '$10.99',
          rating: 4.7,
          link: 'https://www.amazon.com/BCW-Toploader-Standard-Trading-Toploaders/dp/B08Z4XPR8V?tag=cardconnect08-20&linkCode=ur2'
        },
        {
          name: 'Ultra Pro Magnetic Card Holders (5 Count)',
          price: '$19.99',
          rating: 4.9,
          link: 'https://www.amazon.com/Ultra-Pro-Screwdown-Recessed-Standard/dp/B00AF01QK4?tag=cardconnect08-20&linkCode=ur2'
        }
      ]
    },
    {
      id: 'display-cases',
      name: 'Card Display Cases',
      description: 'Showcase your most valuable cards with premium display solutions',
      imagePath: '/images/products/card-display-cases.jpg',
      placeholderType: 'sports-card',
      products: [
        {
          name: 'Collector Card Display Case with UV Protection',
          price: '$39.99',
          rating: 4.6,
          link: 'https://www.amazon.com/Display-Trading-Football-Baseball-Protection/dp/B07GYZS5TB?tag=cardconnect08-20&linkCode=ur2'
        },
        {
          name: 'Graded Card Display Frame (PSA, BGS Compatible)',
          price: '$29.99',
          rating: 4.5,
          link: 'https://www.amazon.com/DisplayGifts-Trading-Display-Cabinet-Horizontal/dp/B00IZCYSRQ?tag=cardconnect08-20&linkCode=ur2'
        }
      ]
    },
    {
      id: 'grading-services',
      name: 'Professional Grading Services',
      description: 'Get your valuable cards authenticated, graded, and protected by professionals',
      imagePath: '/images/products/card-grading-services.jpg',
      placeholderType: 'grading',
      featured: true,
      products: [
        {
          name: 'Beckett Grading Service - Standard Submission',
          price: 'From $20/card',
          rating: 4.7,
          link: beckettAffiliateLink
        },
        {
          name: 'PSA Grading - Economy Service',
          price: 'From $50/card',
          rating: 4.8,
          link: 'https://www.psacard.com/pricing?id=cardconnect2025'
        }
      ]
    },
    {
      id: 'storage-boxes',
      name: 'Storage Boxes & Organization',
      description: 'Organize and store your collection with quality storage boxes and solutions',
      imagePath: '/images/products/card-storage-boxes.jpg',
      placeholderType: 'sports-card',
      products: [
        {
          name: 'BCW Card Storage Box (3200 Count)',
          price: '$12.99',
          rating: 4.6,
          link: 'https://www.amazon.com/BCW-3200-Card-Storage-Box/dp/B0002TT3LG?tag=cardconnect08-20&linkCode=ur2'
        },
        {
          name: 'Ultra Pro Graded Card Storage Box (20 Count)',
          price: '$19.99',
          rating: 4.7,
          link: 'https://www.amazon.com/Ultra-Pro-2-Piece-Plastic-Storage/dp/B005LWL8KC?tag=cardconnect08-20&linkCode=ur2'
        },
        {
          name: 'Card Dividers with Tabs (50 Pack)',
          price: '$8.99',
          rating: 4.4,
          link: 'https://www.amazon.com/Trading-Dividers-Horizontal-Vertical-Divider/dp/B09BDLGJMZ?tag=cardconnect08-20&linkCode=ur2'
        }
      ]
    },
    {
      id: 'card-shipping',
      name: 'Card Shipping Supplies',
      description: 'Safely ship cards to buyers or grading services with proper packaging',
      imagePath: '/images/products/card-shipping-supplies.jpg',
      placeholderType: 'generic',
      products: [
        {
          name: 'Card Team Bags Sleeves (100 Count)',
          price: '$7.99',
          rating: 4.5,
          link: 'https://www.amazon.com/Ultra-Pro-Sleeves-2-Inch-1000ct/dp/B00095M5CE?tag=cardconnect08-20&linkCode=ur2'
        },
        {
          name: 'Bubble Mailers for Card Shipping (25 Pack)',
          price: '$13.99',
          rating: 4.7,
          link: 'https://www.amazon.com/Bubble-Mailers-Padded-Envelopes-Shipping/dp/B07TMQVYW5?tag=cardconnect08-20&linkCode=ur2'
        },
        {
          name: 'Card Shipping Kit (Includes All Basics)',
          price: '$24.99',
          rating: 4.8,
          link: 'https://www.amazon.com/s?k=card+shipping+kit&tag=cardconnect08-20&linkCode=ur2'
        }
      ]
    },
    {
      id: 'card-cleaning',
      name: 'Card Cleaning & Maintenance',
      description: 'Keep your cards in pristine condition with proper cleaning supplies',
      imagePath: '/images/products/card-cleaning-supplies.jpg',
      placeholderType: 'generic',
      products: [
        {
          name: 'Premium Microfiber Cleaning Cloths (Pack of 6)',
          price: '$9.99',
          rating: 4.6,
          link: 'https://www.amazon.com/MagicFiber-Microfiber-Cleaning-Cloths-PACK/dp/B0050R67U0?tag=cardconnect08-20&linkCode=ur2'
        },
        {
          name: 'Dust-Off Compressed Gas Duster',
          price: '$12.99',
          rating: 4.5,
          link: 'https://www.amazon.com/Dust-Off-Disposable-Compressed-Gas-Duster/dp/B00DZYEXPQ?tag=cardconnect08-20&linkCode=ur2'
        }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Card Collecting Products</h1>
        <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
          Premium supplies and services to protect, preserve, and enhance your card collection.
        </p>
      </div>

      {/* Featured Products */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {products.filter(category => category.featured).map(category => (
            <div key={category.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <div className="relative h-60">
                <PlaceholderImage
                  src={category.imagePath}
                  alt={category.name}
                  fill
                  className="object-cover"
                  placeholderType={category.placeholderType as any}
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{category.description}</p>
                <Link 
                  href={`#${category.id}`}
                  className="text-indigo-600 font-medium hover:text-indigo-500"
                >
                  View Products <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Product Categories */}
      {products.map(category => (
        <section key={category.id} id={category.id} className="mb-20 scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{category.name}</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-60 lg:h-80">
              <PlaceholderImage
                src={category.imagePath}
                alt={category.name}
                fill
                className="object-cover"
                placeholderType={category.placeholderType as any}
              />
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-8">{category.description}</p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products.map((product, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-500">{product.rating}/5</span>
                    </div>
                    <p className="text-lg font-bold text-gray-900 mb-4">{product.price}</p>
                    <div className="mt-auto">
                      <a 
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Collection Care Guide Callout */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl shadow-xl p-8 mb-16">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-4">Protect Your Collection</h2>
            <p className="text-white text-opacity-90 mb-6">
              Not sure which supplies are right for your collection? Our comprehensive guide to card storage and protection explains everything you need to know.
            </p>
            <Link 
              href="/blog/properly-store-valuable-card-collection"
              className="inline-block bg-white text-emerald-700 px-6 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors"
            >
              Read Collection Care Guide
            </Link>
          </div>
          <div className="mt-6 md:mt-0 md:ml-8 md:w-1/3">
            <div className="relative h-60 w-full rounded-lg overflow-hidden">
              <PlaceholderImage
                src="/images/blog/card-storage-header.jpg"
                alt="Card storage guide"
                fill
                className="object-cover"
                placeholderType="sports-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
        <div className="bg-white rounded-lg shadow divide-y divide-gray-200">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">What supplies do I need as a beginner collector?</h3>
            <p className="text-gray-600">
              New collectors should start with penny sleeves and toploaders for valuable cards, along with a storage box. As your collection grows, you can invest in more specialized supplies like magnetic holders and display cases.
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Are professional grading services worth the cost?</h3>
            <p className="text-gray-600">
              For cards valued over $100, professional grading often makes financial sense. Graded cards typically sell for a premium, are better protected, and have verified authenticity. For lower value cards, proper storage supplies are usually sufficient.
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">What's the difference between penny sleeves and toploaders?</h3>
            <p className="text-gray-600">
              Penny sleeves are thin, flexible plastic sleeves that protect cards from fingerprints and minor scratches. Toploaders are rigid plastic holders that provide protection from bending and edge/corner damage. For optimal protection, use both: place cards in penny sleeves first, then insert them into toploaders.
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">How should I store valuable cards long-term?</h3>
            <p className="text-gray-600">
              For long-term storage of valuable cards, use acid-free sleeves inside rigid holders (toploaders or magnetic cases), store in a climate-controlled environment away from direct sunlight, and consider professional grading for your most valuable pieces. Maintaining consistent temperature and humidity levels is crucial.
            </p>
          </div>
        </div>
      </section>

      {/* Expert Recommendations */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Expert Recommendations</h2>
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg">
                JS
              </div>
            </div>
            <div>
              <p className="text-gray-600 italic mb-4">
                "For serious collectors, I always recommend investing in a complete protection system: acid-free penny sleeves, premium toploaders or magnetic cases, and proper storage boxes kept in a climate-controlled environment. This minimal investment can preserve thousands in card value over time."
              </p>
              <p className="font-medium text-gray-900">John Smith, Card Collection Specialist</p>
              <p className="text-sm text-gray-500">15+ years in sports card preservation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Grading CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl shadow-xl p-8 mt-16">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-3/4">
            <h2 className="text-3xl font-bold mb-4">Get Your Cards Professionally Graded</h2>
            <p className="text-white text-opacity-90 mb-6 text-lg">
              Protect your investment with professional authentication and grading from Beckett Grading Services. Encapsulated cards maintain their condition and typically command higher prices in the market.
            </p>
            <a 
              href={beckettAffiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-indigo-700 px-6 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors"
            >
              Submit Your Cards to Beckett →
            </a>
          </div>
          <div className="mt-6 md:mt-0 md:ml-8 md:w-1/4 hidden md:block">
            <div className="relative h-32 w-32 mx-auto">
              <div className="absolute inset-0 bg-white rounded-full opacity-20"></div>
              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                <span className="text-indigo-700 font-bold text-2xl">BGS</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
import Link from 'next/link'
import { Metadata } from 'next'
import PlaceholderImage from '@/components/shared/PlaceholderImage'

export const metadata: Metadata = {
  title: 'Card Collecting Blog | CardConnect Hub',
  description: 'Explore articles, guides, and tips about sports card collecting, storage, grading, and investment strategies.',
  keywords: 'sports card blog, card collecting guides, trading card articles, card investment tips, sports card grading',
}

export default function BlogPage() {
  // Primary affiliate link for Beckett Grading
  const beckettAffiliateLink = "https://www.tkqlhce.com/click-9083409-15435040";
  
  // Blog post data
  const blogPosts = [
    {
      slug: 'properly-store-valuable-card-collection',
      title: 'How to Properly Store Your Valuable Card Collection',
      excerpt: 'Learn the best methods and supplies for storing valuable sports cards and trading cards to preserve condition and maximize long-term value.',
      date: 'May 20, 2025',
      readTime: '12 min read',
      image: '/images/blog/card-storage-header.jpg',
      placeholderType: 'sports-card',
      featured: true,
      categories: ['Card Collecting', 'Storage & Protection']
    },
    {
      slug: 'top-basketball-rookie-cards-2023',
      title: 'Top Basketball Rookie Cards of 2023',
      excerpt: 'Discover the best basketball rookie cards of 2023, including Victor Wembanyama, Chet Holmgren, and other top NBA prospects. Learn which cards to invest in now.',
      date: 'May 15, 2025',
      readTime: '10 min read',
      image: '/images/blog/basketball-rookie-cards-2023-header.jpg',
      placeholderType: 'sports-card',
      featured: true,
      categories: ['Basketball Cards', 'Rookie Cards', 'Investment']
    },
    {
      slug: 'ultimate-guide-sports-card-grading',
      title: 'The Ultimate Guide to Sports Card Grading',
      excerpt: 'Everything you need to know about sports card grading services, including PSA, BGS, and SGC. Learn how to maximize your card value through professional grading.',
      date: 'May 10, 2025',
      readTime: '15 min read',
      image: '/images/blog/card-grading-guide-header.jpg',
      placeholderType: 'grading',
      categories: ['Card Grading', 'Investment']
    },
    {
      slug: 'best-baseball-cards-invest-2025',
      title: 'Best Baseball Cards to Invest in for 2025',
      excerpt: 'Looking for smart baseball card investments? Our experts analyze the market and recommend the top cards to consider adding to your portfolio this year.',
      date: 'May 5, 2025',
      readTime: '9 min read',
      image: '/images/blog/baseball-card-investment-header.jpg',
      placeholderType: 'sports-card',
      categories: ['Baseball Cards', 'Investment']
    },
    {
      slug: 'card-collecting-beginners-guide',
      title: 'Card Collecting: A Complete Beginner\'s Guide',
      excerpt: 'New to card collecting? This comprehensive guide covers everything you need to know to start your collection on the right foot.',
      date: 'April 30, 2025',
      readTime: '14 min read',
      image: '/images/blog/beginners-guide-header.jpg',
      placeholderType: 'sports-card',
      categories: ['Card Collecting', 'Guides']
    },
    {
      slug: 'sports-card-market-trends-2025',
      title: 'Sports Card Market Trends to Watch in 2025',
      excerpt: 'Analyze current market conditions and discover which segments of the sports card hobby are heating up or cooling down this year.',
      date: 'April 25, 2025',
      readTime: '11 min read',
      image: '/images/blog/market-trends-header.jpg',
      placeholderType: 'generic',
      categories: ['Market Analysis', 'Investment']
    }
  ];

  // Category filters for the blog
  const categories = [
    'All Posts',
    'Card Collecting',
    'Storage & Protection',
    'Card Grading',
    'Investment',
    'Basketball Cards',
    'Baseball Cards',
    'Football Cards',
    'Rookie Cards',
    'Guides',
    'Market Analysis'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Card Collecting Blog</h1>
        <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
          Expert insights, guides, and analysis for card collectors and investors.
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-12 overflow-x-auto">
        <div className="flex space-x-4 pb-2 min-w-max">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                category === 'All Posts'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Posts */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.filter(post => post.featured).map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow"
            >
              <div className="relative h-60">
                <PlaceholderImage
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  placeholderType={post.placeholderType as any}
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.categories.map((category, i) => (
                    <span 
                      key={i}
                      className="inline-block bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-indigo-600">{post.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-3">{post.date}</span>
                  <span className="mr-3">•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All Blog Posts */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">All Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="bg-white rounded-lg shadow overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <PlaceholderImage
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  placeholderType={post.placeholderType as any}
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.categories.slice(0, 2).map((category, i) => (
                    <span 
                      key={i}
                      className="inline-block bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-indigo-600">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">{post.excerpt}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span className="mr-2">{post.date}</span>
                  <span className="mr-2">•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-50 rounded-xl p-8 mt-16 shadow-sm">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Get the latest card collecting tips, market insights, and guides delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 border border-gray-300 rounded-md flex-1 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <button 
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Grading Services Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl shadow-xl p-8 my-16">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-3/4">
            <h2 className="text-2xl font-bold mb-4">Professional Card Grading Services</h2>
            <p className="text-white text-opacity-90 mb-6">
              Ready to maximize your card value? Beckett Grading Services provides professional authentication, grading, and protective cases for your most valuable cards.
            </p>
            <a 
              href={beckettAffiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-indigo-700 px-6 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors"
            >
              Learn About Beckett Grading →
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

      {/* Popular Topics */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Topics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Card Storage', 'Rookie Cards', 'Card Grading', 'Market Trends', 'Card Authentication', 'Card Investment', 'Collection Management', 'Valuable Sets'].map((topic, index) => (
            <Link 
              key={index}
              href={`/blog?topic=${topic.toLowerCase().replace(' ', '-')}`}
              className="bg-white shadow rounded-lg p-6 text-center hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium text-gray-900">{topic}</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
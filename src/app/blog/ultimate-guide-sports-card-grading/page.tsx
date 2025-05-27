import Link from 'next/link'
import { Metadata } from 'next'
import ShareButtons from '@/components/shared/ShareButtons'
import PlaceholderImage from '@/components/shared/PlaceholderImage'

export const metadata: Metadata = {
  title: 'The Ultimate Guide to Sports Card Grading | CardConnect Hub',
  description: 'Learn everything about sports card grading: the process, top grading companies, costs, benefits, and how grading can maximize your collection value.',
  keywords: 'sports card grading, PSA grading, BGS grading, SGC grading, card grading guide, card investment, grading costs, card protection',
  openGraph: {
    title: 'The Ultimate Guide to Sports Card Grading | CardConnect Hub',
    description: 'Learn everything about sports card grading: the process, top grading companies, costs, benefits, and how grading can maximize your collection value.',
    url: 'https://cardconnecthub.com/blog/ultimate-guide-sports-card-grading',
    type: 'article',
    publishedTime: '2025-05-01T00:00:00.000Z',
    images: [
      {
        url: '/images/blog/card-grading-guide-header.jpg',
        width: 1200,
        height: 630,
        alt: 'Sports card grading guide featuring professionally graded cards',
      }
    ],
  }
}

export default function UltimateCardGradingGuide() {
  const affiliateLink = "https://www.psacard.com/pricing?id=cardconnect2025";
  
  // Alternative method using placeholder.com if you prefer
  const usePlaceholderService = false; // Set to true to use placeholder.com instead
  
  // Image paths - will use placeholder if images don't exist
  const imagePaths = {
    header: usePlaceholderService 
      ? "https://via.placeholder.com/1200x630/4f46e5/ffffff?text=Card+Grading+Guide" 
      : "/images/blog/card-grading-guide-header.jpg",
    comparison: usePlaceholderService 
      ? "https://via.placeholder.com/800x400/3b82f6/ffffff?text=Grading+Companies+Comparison" 
      : "/images/blog/grading-companies-comparison.jpg",
    gradingScale: usePlaceholderService 
      ? "https://via.placeholder.com/800x400/6366f1/ffffff?text=Grading+Scale+Visual" 
      : "/images/blog/grading-scale-visual.jpg",
    authorPhoto: usePlaceholderService 
      ? "https://via.placeholder.com/64x64/4b5563/ffffff?text=JS" 
      : "/images/authors/john-smith.jpg"
  };
  
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Featured Image */}
      <div className="relative w-full h-80 mb-8 rounded-xl overflow-hidden">
        <PlaceholderImage 
          src={imagePaths.header}
          alt="Professionally graded sports cards" 
          fill
          priority
          className="object-cover"
          placeholderType="blog-header"
        />
      </div>
      
      {/* Article Header */}
      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">The Ultimate Guide to Sports Card Grading</h1>
        <div className="flex items-center text-gray-500 text-sm mb-6">
          <span>May 1, 2025</span>
          <span className="mx-2">•</span>
          <span>15 min read</span>
          <span className="mx-2">•</span>
          <Link href="/blog/category/card-investment" className="text-blue-500 hover:underline">Card Investment</Link>
        </div>
        <p className="text-xl text-gray-600">
          Learn everything you need to know about sports card grading: how the process works, top grading companies, costs, benefits, and how professional grading can maximize the value of your collection.
        </p>
        
        {/* Share buttons */}
        <div className="mt-6">
          <ShareButtons title="The Ultimate Guide to Sports Card Grading" />
        </div>
      </header>

      {/* Table of Contents */}
      <div className="bg-gray-50 p-6 rounded-lg mb-10">
        <h2 className="text-lg font-semibold mb-4">In This Article:</h2>
        <ul className="space-y-2">
          <li>
            <a href="#what-is-card-grading" className="text-blue-600 hover:underline">What Is Sports Card Grading?</a>
          </li>
          <li>
            <a href="#why-grade" className="text-blue-600 hover:underline">Why Grade Your Sports Cards?</a>
          </li>
          <li>
            <a href="#top-companies" className="text-blue-600 hover:underline">Top Card Grading Companies Compared</a>
          </li>
          <li>
            <a href="#grading-process" className="text-blue-600 hover:underline">The Card Grading Process Explained</a>
          </li>
          <li>
            <a href="#grading-scale" className="text-blue-600 hover:underline">Understanding The Grading Scale</a>
          </li>
          <li>
            <a href="#costs" className="text-blue-600 hover:underline">Grading Costs & Service Levels</a>
          </li>
          <li>
            <a href="#what-to-grade" className="text-blue-600 hover:underline">Which Cards Should You Grade?</a>
          </li>
          <li>
            <a href="#preparing" className="text-blue-600 hover:underline">Preparing Your Cards For Grading</a>
          </li>
          <li>
            <a href="#faq" className="text-blue-600 hover:underline">Frequently Asked Questions</a>
          </li>
        </ul>
      </div>
      
      {/* Main Content */}
      <div className="prose prose-lg max-w-none">
        <section id="what-is-card-grading">
          <h2>What Is Sports Card Grading?</h2>
          <p>
            Card grading is a professional service that evaluates, authenticates, and encapsulates sports cards according to standardized criteria. Expert graders assess the condition of cards for centering, corners, edges, surface quality, and overall appearance, assigning a numerical grade (typically on a scale of 1-10) that represents the card's condition.
          </p>
          <p>
            The graded card is then sealed in a tamper-evident case (often called a "slab") that protects the card and displays its grade, certification number, and other relevant details. This process transforms raw cards into professionally authenticated collectibles with standardized condition assessments.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
            <p className="text-blue-700 font-medium">
              "Professional grading has revolutionized the sports card industry by creating a universal standard for condition assessment, enabling collectors and investors to make more informed decisions."
            </p>
          </div>
        </section>
        
        <section id="top-companies" className="mt-12">
          <h2>Top Card Grading Companies Compared</h2>
          <p>
            Several companies offer professional sports card grading services, each with their own standards, reputation, and pricing structure. Here's a breakdown of the top grading companies:
          </p>
          
          {/* Comparison Image */}
          <div className="relative w-full h-64 my-6 rounded-lg overflow-hidden">
            <PlaceholderImage 
              src={imagePaths.comparison}
              alt="Comparison of PSA, BGS, and SGC slabs" 
              fill
              className="object-cover"
              placeholderType="comparison"
            />
          </div>
        </section>
        
        <section id="grading-scale" className="mt-12">
          <h2>Understanding The Grading Scale</h2>
          <p>
            Most grading companies use a 1-10 scale, with 10 being perfect. Here's a general interpretation of the PSA scale, which is the industry standard:
          </p>
          
          <div className="relative w-full h-60 my-8 rounded-lg overflow-hidden">
            <PlaceholderImage 
              src={imagePaths.gradingScale}
              alt="Visual representation of card grades from 1-10" 
              fill
              className="object-cover"
              placeholderType="grading"
            />
          </div>
        </section>
        
        {/* Author bio */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="flex items-center">
            <div className="rounded-full overflow-hidden h-16 w-16 mr-4">
              <PlaceholderImage 
                src={imagePaths.authorPhoto}
                alt="John Smith" 
                width={64}
                height={64}
                placeholderType="author"
              />
            </div>
            <div>
              <h3 className="font-bold">John Smith</h3>
              <p className="text-gray-600 text-sm">
                Card collecting expert with 15+ years experience in sports card investing and authentication. Former grader at PSA with special expertise in basketball and baseball cards.
              </p>
            </div>
          </div>
        </div>
        
        {/* Share buttons */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <h3 className="font-bold mb-4">Share this guide:</h3>
          <ShareButtons title="The Ultimate Guide to Sports Card Grading" />
        </div>
        
        {/* Related posts */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <h3 className="font-bold text-xl mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/blog/how-to-invest-sports-cards" className="group">
              <div className="bg-gray-100 rounded-lg p-4 h-full hover:bg-gray-200 transition-colors">
                <h4 className="font-bold group-hover:text-blue-600 transition-colors">How to Invest in Sports Cards: A Beginner's Guide</h4>
                <p className="text-gray-600 text-sm mt-2">Learn the fundamentals of sports card investing and how to build a profitable collection.</p>
              </div>
            </Link>
            <Link href="/blog/vintage-vs-modern-cards" className="group">
              <div className="bg-gray-100 rounded-lg p-4 h-full hover:bg-gray-200 transition-colors">
                <h4 className="font-bold group-hover:text-blue-600 transition-colors">Vintage vs. Modern Cards: Where to Put Your Money</h4>
                <p className="text-gray-600 text-sm mt-2">Compare the investment potential of vintage cards against modern releases in today's market.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
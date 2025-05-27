import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us | CardConnect Hub',
  description: 'Learn about CardConnect Hub, your premier resource for sports card collecting, analysis, and market insights.',
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="relative h-64 md:h-96 bg-blue-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-90"></div>
        <div className="relative container mx-auto h-full px-4 flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">About Beckett Hub</h1>
          <p className="text-blue-100 max-w-2xl">Your trusted source for premium sports card resources and collecting expertise.</p>
        </div>
      </div>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Beckett Hub was founded by passionate collectors with a mission to connect sports card enthusiasts with the best resources in the industry.
              </p>
              <p className="text-gray-700 mb-4">
                As long-time collectors ourselves, we understand the importance of accurate pricing information, professional authentication, and market insights in making informed collecting decisions.
              </p>
              <p className="text-gray-700">
                That's why we've partnered with Beckett Media, the industry leader in sports card pricing, authentication, and collecting resources, to bring you access to premium tools and services that enhance your collecting experience.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg h-72 flex items-center justify-center">
              <span className="text-gray-600 text-lg">About Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Beckett Hub</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Trusted Resources</h3>
              <p className="text-gray-700">
                We only recommend industry-leading products and services from Beckett Media that we use and trust ourselves.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Insights</h3>
              <p className="text-gray-700">
                Our blog provides the latest market trends, collecting strategies, and expert advice to help you build a valuable collection.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Focus</h3>
              <p className="text-gray-700">
                We're building a community of passionate collectors who share knowledge, experiences, and a love for the hobby.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Ready to Enhance Your Collection?</h2>
          <p className="max-w-2xl mx-auto text-gray-700 mb-8">
            Explore our curated selection of products and services designed to help you assess, protect, and grow your sports card collection.
          </p>
          <a 
            href="https://www.tkqlhce.com/click-9083409-15435040" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-md shadow-md transition-colors"
          >
            Explore Premium Products
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}
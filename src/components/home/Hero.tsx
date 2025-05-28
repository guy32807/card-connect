'use client'

import { motion } from 'framer-motion'
import AppLink from '@/components/shared/AppLink'
import AppImage from '@/components/shared/AppImage'
import { getBasePath } from '@/utils/path'

export default function Hero() {
  const affiliateLink = "https://www.tkqlhce.com/click-9083409-15435040"
  const basePath = getBasePath();
  
  return (
    <div 
      className="bg-cover bg-center" 
      style={{ 
        backgroundImage: `url(${basePath}/images/background.jpg)` 
      }}
    >
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Discover Premium 
                <span className="text-amber-400"> Sports Collectibles</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 max-w-lg">
                Access Beckett Media's world-class price guides, authentication services, and rare collectibles to enhance your collection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-blue-900 font-bold rounded-md shadow-lg flex items-center justify-center"
                  >
                    Explore Products
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.button>
                </a>
                <AppLink href="/collections">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold rounded-md flex items-center justify-center"
                  >
                    View Collections
                  </motion.button>
                </AppLink>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[400px] md:h-[500px] w-full">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-800 rounded-lg"></div>
                <div className="absolute top-4 left-4 right-4 bottom-4 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                  {/* If you have an actual card image, uncomment this */}
                  {/* <AppImage 
                    src="/images/card-collection.jpg" 
                    alt="Premium Sports Cards Collection" 
                    fill 
                    className="object-cover rounded-lg"
                  /> */}
                  Premium Sports Cards Collection
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="bg-green-500 h-3 w-3 rounded-full mr-2"></div>
                  <span className="text-gray-800 font-medium text-sm">Authentication Verified</span>
                </div>
                <p className="text-gray-600 text-xs mt-1">Beckett Grading Services</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
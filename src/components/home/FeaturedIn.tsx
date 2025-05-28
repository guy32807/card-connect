'use client';

import { motion } from 'framer-motion';
import { getBasePath } from '@/utils/path';

export default function FeaturedIn() {
  const basePath = getBasePath();
  
  const logos = [
    { name: 'Sports Illustrated', src: '/images/logos/sports-illustrated.svg' },
    { name: 'ESPN', src: '/images/logos/espn.svg' },
    { name: 'Forbes', src: '/images/logos/forbes.svg' },
    { name: 'Bleacher Report', src: '/images/logos/bleacher-report.svg' },
    { name: 'CBS Sports', src: '/images/logos/cbs-sports.svg' },
  ];
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-gray-500 text-sm font-medium mb-8 uppercase tracking-wider">Featured In</h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all"
            >
              {/* If you have actual logo images, uncomment this */}
              {/* <img 
                src={`${basePath}${logo.src}`} 
                alt={logo.name} 
                className="h-8 md:h-10" 
              /> */}
              
              {/* Placeholder for missing logos */}
              <div className="h-8 md:h-10 flex items-center justify-center">
                <span className="text-gray-400 text-lg font-semibold">{logo.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
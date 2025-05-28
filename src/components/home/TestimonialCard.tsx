'use client';

import { motion } from 'framer-motion';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  avatarSrc?: string;
}

export default function TestimonialCard({ quote, name, title, avatarSrc }: TestimonialProps) {
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <svg className="h-8 w-8 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 32 32">
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>
      
      <p className="text-gray-600 mb-4">{quote}</p>
      
      <div className="flex items-center">
        {avatarSrc ? (
          <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
            <img src={avatarSrc} alt={name} className="h-full w-full object-cover" />
          </div>
        ) : (
          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
            <span className="text-blue-600 font-medium text-sm">
              {name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        )}
        
        <div>
          <h4 className="font-medium text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </motion.div>
  );
}
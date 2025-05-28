'use client'

import { motion } from 'framer-motion';
import AppImage from '@/components/shared/AppImage';
import AppLink from '@/components/shared/AppLink';
import { FiExternalLink, FiTag } from 'react-icons/fi';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  url: string;
  rating?: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-xl border border-gray-100"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-64 overflow-hidden group">
        <AppImage 
          src={product.image || '/images/placeholder.jpg'}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-2 left-2">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <FiTag className="mr-1" size={12} />
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-lg mb-2 text-gray-800 line-clamp-1">{product.title}</h3>
        <p className="text-gray-600 mb-4 text-sm line-clamp-2">{product.description}</p>
        
        {product.rating && (
          <div className="flex items-center mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-2">({product.rating.toFixed(1)})</span>
          </div>
        )}
        
        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
          <span className="text-blue-700 font-bold text-lg">${product.price.toFixed(2)}</span>
          <a 
            href={product.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-colors flex items-center text-sm font-medium"
          >
            View Details
            <FiExternalLink className="ml-1.5" size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
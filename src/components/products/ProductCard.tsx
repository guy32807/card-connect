'use client'

import AppImage from '@/components/shared/AppImage'
import AppLink from '@/components/shared/AppLink'

// Assuming you have a Product type/interface
interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  url: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-64">
        <AppImage 
          src={product.image} 
          alt={product.title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-blue-700 font-bold">${product.price.toFixed(2)}</span>
          <a href={product.url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}
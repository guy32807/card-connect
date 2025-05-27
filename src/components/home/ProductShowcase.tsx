'use client'

import { useState, useEffect } from 'react'
import ProductCard from '@/components/products/ProductCard'
import { ProductRepository } from '@/infrastructure/repositories/ProductRepository'
import { FetchProductsUseCase } from '@/core/usecases/FetchProductsUseCase'
import { Product } from '@/core/domain/models/Product'
import { motion } from 'framer-motion'

export default function ProductShowcase() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const fetchProducts = async () => {
      const repository = new ProductRepository()
      const useCase = new FetchProductsUseCase(repository)
      
      try {
        const featuredProducts = await useCase.getFeaturedProducts()
        setProducts(featuredProducts)
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchProducts()
  }, [])
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Beckett Products</h2>
          <p className="max-w-2xl mx-auto text-gray-600">Discover our handpicked selection of premium collectibles and services from Beckett Media.</p>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        )}
        
        <div className="text-center mt-10">
          <a 
            href="https://www.tkqlhce.com/click-9083409-15435040" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-800 text-white font-medium rounded-md hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            View All Products
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
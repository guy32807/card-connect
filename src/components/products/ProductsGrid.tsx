'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import ProductCard from '@/components/products/ProductCard'
import { ProductRepository } from '@/infrastructure/repositories/ProductRepository'
import { FetchProductsUseCase } from '@/core/usecases/FetchProductsUseCase'
import { Product } from '@/core/domain/models/Product'

export default function ProductsGrid() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const searchParams = useSearchParams()
  
  const category = searchParams.get('category')
  const query = searchParams.get('q')
  
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true)
      const repository = new ProductRepository()
      const useCase = new FetchProductsUseCase(repository)
      
      try {
        let fetchedProducts: Product[]
        
        if (category) {
          fetchedProducts = await useCase.getProductsByCategory(category)
        } else if (query) {
          fetchedProducts = await useCase.searchProducts(query)
        } else {
          const allProducts = await Promise.all([
            useCase.getFeaturedProducts(),
            useCase.getProductsByCategory('price-guides'),
            useCase.getProductsByCategory('services')
          ])
          // Combine and remove duplicates
          const productMap = new Map<string, Product>()
          allProducts.flat().forEach(product => {
            productMap.set(product.id, product)
          })
          fetchedProducts = Array.from(productMap.values())
        }
        
        setProducts(fetchedProducts)
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchProducts()
  }, [category, query])
  
  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
      </div>
    )
  }
  
  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
        <p className="text-gray-600">Try adjusting your filters or search terms.</p>
      </div>
    )
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function ProductsFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '')
  const [priceRange, setPriceRange] = useState(searchParams.get('price') || '')
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'featured')
  
  const categories = [
    { id: 'price-guides', name: 'Price Guides' },
    { id: 'services', name: 'Authentication & Grading' },
    { id: 'supplies', name: 'Storage & Protection' },
    { id: 'digital', name: 'Digital Services' }
  ]
  
  const priceRanges = [
    { id: 'under-10', name: 'Under $10' },
    { id: '10-20', name: '$10 to $20' },
    { id: '20-50', name: '$20 to $50' },
    { id: 'over-50', name: 'Over $50' }
  ]
  
  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-asc', name: 'Price: Low to High' },
    { id: 'price-desc', name: 'Price: High to Low' },
    { id: 'rating', name: 'Average Rating' }
  ]
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category === selectedCategory ? '' : category)
    updateFilters(category === selectedCategory ? '' : category, priceRange, sortBy)
  }
  
  const handlePriceRangeChange = (price: string) => {
    setPriceRange(price === priceRange ? '' : price)
    updateFilters(selectedCategory, price === priceRange ? '' : price, sortBy)
  }
  
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value)
    updateFilters(selectedCategory, priceRange, e.target.value)
  }
  
  const updateFilters = (category: string, price: string, sort: string) => {
    const params = new URLSearchParams()
    
    if (category) params.set('category', category)
    if (price) params.set('price', price)
    if (sort && sort !== 'featured') params.set('sort', sort)
    
    router.push(`/products${params.toString() ? '?' + params.toString() : ''}`)
  }
  
  const resetFilters = () => {
    setSelectedCategory('')
    setPriceRange('')
    setSortBy('featured')
    router.push('/products')
  }
  
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Filters</h3>
        <button 
          onClick={resetFilters}
          className="text-sm text-blue-700 hover:text-blue-900"
        >
          Reset All
        </button>
      </div>
      
      <div className="mb-6">
        <h4 className="font-medium text-gray-800 mb-2">Category</h4>
        <div className="space-y-1">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center">
              <input
                id={`category-${category.id}`}
                type="checkbox"
                checked={selectedCategory === category.id}
                onChange={() => handleCategoryChange(category.id)}
                className="h-4 w-4 text-blue-700 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor={`category-${category.id}`} className="ml-2 text-sm text-gray-700">
                {category.name}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="font-medium text-gray-800 mb-2">Price Range</h4>
        <div className="space-y-1">
          {priceRanges.map((range) => (
            <div key={range.id} className="flex items-center">
              <input
                id={`price-${range.id}`}
                type="checkbox"
                checked={priceRange === range.id}
                onChange={() => handlePriceRangeChange(range.id)}
                className="h-4 w-4 text-blue-700 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor={`price-${range.id}`} className="ml-2 text-sm text-gray-700">
                {range.name}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="font-medium text-gray-800 mb-2">Sort By</h4>
        <select
          value={sortBy}
          onChange={handleSortChange}
          className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-blue-500 focus:border-blue-500"
        >
          {sortOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
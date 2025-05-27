'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BlogRepository } from '@/infrastructure/repositories/BlogRepository'
import { FetchBlogPostsUseCase } from '@/core/usecases/FetchBlogPostsUseCase'

export default function BlogSidebar() {
  const [tags, setTags] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const fetchTags = async () => {
      const repository = new BlogRepository()
      const useCase = new FetchBlogPostsUseCase(repository)
      
      try {
        const posts = await useCase.getLatestPosts(20)
        // Extract all tags and count occurrences
        const tagCounts: Record<string, number> = {}
        posts.forEach(post => {
          post.tags.forEach(tag => {
            tagCounts[tag] = (tagCounts[tag] || 0) + 1
          })
        })
        
        // Sort tags by occurrence count
        const sortedTags = Object.keys(tagCounts).sort((a, b) => 
          tagCounts[b] - tagCounts[a]
        )
        
        setTags(sortedTags.slice(0, 10)) // Get top 10 tags
      } catch (error) {
        console.error('Error fetching tags:', error)
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchTags()
  }, [])
  
  const affiliateLink = "https://www.tkqlhce.com/click-9083409-15435040"
  
  return (
    <div className="space-y-8">
      <div className="bg-white p-5 rounded-lg border border-gray-200">
        <h3 className="font-semibold text-lg text-gray-800 mb-4">Popular Topics</h3>
        
        {isLoading ? (
          <div className="flex justify-center py-4">
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-900"></div>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link key={tag} href={`/blog?tag=${tag}`}>
                <span className="inline-block px-3 py-1 bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-medium rounded-full transition-colors">
                  {tag}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
      
      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-5 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-lg text-blue-900 mb-3">Collector Resources</h3>
        <p className="text-sm text-blue-800 mb-4">Get the most accurate prices and trusted grading services for your collection.</p>
        
        <a 
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-3 bg-blue-700 hover:bg-blue-800 text-white text-center font-medium rounded-md transition-colors"
        >
          Explore Beckett Services
        </a>
      </div>
      
      <div className="bg-white p-5 rounded-lg border border-gray-200">
        <h3 className="font-semibold text-lg text-gray-800 mb-4">Newsletter</h3>
        <p className="text-sm text-gray-600 mb-4">Get the latest collecting tips and market insights directly to your inbox.</p>
        
        <form className="space-y-3">
          <div>
            <label htmlFor="sidebar-email" className="sr-only">Email address</label>
            <input
              id="sidebar-email"
              name="email"
              type="email"
              required
              className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
              placeholder="Your email address"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-gray-800 text-white font-medium text-sm rounded-md hover:bg-gray-700"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}
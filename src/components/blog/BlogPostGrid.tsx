'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import BlogPostCard from '@/components/blog/BlogPostCard'
import { BlogRepository } from '@/infrastructure/repositories/BlogRepository'
import { FetchBlogPostsUseCase } from '@/core/usecases/FetchBlogPostsUseCase'
import { BlogPost } from '@/core/domain/models/BlogPost'

export default function BlogPostGrid() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const searchParams = useSearchParams()
  
  const tag = searchParams.get('tag')
  
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true)
      const repository = new BlogRepository()
      const useCase = new FetchBlogPostsUseCase(repository)
      
      try {
        let fetchedPosts: BlogPost[]
        
        if (tag) {
          fetchedPosts = await useCase.getPostsByTag(tag)
        } else {
          fetchedPosts = await useCase.getLatestPosts(10)
        }
        
        setPosts(fetchedPosts)
      } catch (error) {
        console.error('Error fetching blog posts:', error)
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchPosts()
  }, [tag])
  
  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
      </div>
    )
  }
  
  if (posts.length === 0) {
    return (
      <div className="text-center py-20">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">No blog posts found</h3>
        <p className="text-gray-600">Try a different tag or check back later for new content.</p>
      </div>
    )
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
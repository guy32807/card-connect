import Link from 'next/link'
import Image from 'next/image'
import { BlogPost } from '@/core/domain/models/BlogPost'

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(post.publishedDate)
  
  return (
    <div className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative h-48 w-full bg-blue-100">
          {post.imageUrl ? (
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-blue-100">
              <span className="text-blue-900 font-bold">{post.title[0]}</span>
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-5">
        <div className="flex items-center mb-3">
          <span className="text-xs text-gray-500">{formattedDate}</span>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-xs font-medium text-blue-700">{post.tags[0]}</span>
        </div>
        
        <Link href={`/blog/${post.slug}`}>
          <h3 className="font-semibold text-xl text-gray-800 mb-2 hover:text-blue-700 transition-colors">{post.title}</h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
        
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold text-sm">
            {post.author[0]}
          </div>
          <span className="ml-2 text-sm font-medium text-gray-700">{post.author}</span>
        </div>
      </div>
    </div>
  )
}
'use client';

import { useState } from 'react';
import AppImage from '@/components/shared/AppImage';
import AppLink from '@/components/shared/AppLink';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  slug: string;
  date: string;
  category: string;
}

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const [imgSrc, setImgSrc] = useState(post.coverImage || '/images/blog/default-cover.svg');
  
  // Handle image load error
  const handleImageError = () => {
    setImgSrc('/images/blog/default-cover.svg');
  };
  
  return (
    <div className="blog-card">
      <div className="blog-image-container">
        <AppImage 
          src={imgSrc}
          alt={post.title} 
          fill
          className="blog-image"
          onError={handleImageError}
        />
      </div>
      
      <div className="blog-content">
        <span className="blog-category">
          {post.category}
        </span>
        <AppLink href={`/blog/${post.slug}`}>
          <h3 className="blog-title">{post.title}</h3>
        </AppLink>
        <p className="blog-excerpt">{post.excerpt}</p>
        
        <div className="blog-footer">
          <time className="blog-date">{post.date}</time>
          <AppLink 
            href={`/blog/${post.slug}`}
            className="blog-read-more"
          >
            Read more
            <svg className="blog-arrow-icon" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </AppLink>
        </div>
      </div>
    </div>
  );
}
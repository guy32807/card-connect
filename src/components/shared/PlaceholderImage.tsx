'use client'

import { useState } from 'react'
import Image from 'next/image'

type PlaceholderImageProps = {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
  // Add colors for different placeholder types
  placeholderType?: 'sports-card' | 'blog-header' | 'grading' | 'comparison' | 'author' | 'generic'
}

export default function PlaceholderImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = '',
  priority = false,
  placeholderType = 'generic'
}: PlaceholderImageProps) {
  const [imgError, setImgError] = useState(false)
  
  // Generate background colors based on placeholder type
  const getBgColor = () => {
    switch (placeholderType) {
      case 'sports-card': return 'bg-gradient-to-br from-blue-500 to-blue-700'
      case 'blog-header': return 'bg-gradient-to-r from-purple-500 to-blue-600'
      case 'grading': return 'bg-gradient-to-br from-amber-400 to-amber-600'
      case 'comparison': return 'bg-gradient-to-br from-blue-400 to-indigo-600'
      case 'author': return 'bg-gradient-to-br from-gray-400 to-gray-600'
      case 'generic': 
      default: return 'bg-gradient-to-br from-gray-300 to-gray-400'
    }
  }

  // Get icon based on placeholder type
  const getIcon = () => {
    switch (placeholderType) {
      case 'sports-card':
        return (
          <svg className="w-12 h-12 text-white opacity-60" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 4v16h16V4H4zm2 14V6h12v12H6z" />
            <path d="M8 8h8v8H8z" />
          </svg>
        )
      case 'blog-header':
        return (
          <svg className="w-12 h-12 text-white opacity-60" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 5v14H5V5h14zm2-2H3v18h18V3z" />
            <path d="M14.5 11c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zM7 16l2.38-3.17L11 15l2.62-3.5L17 16H7z" />
          </svg>
        )
      case 'grading':
        return (
          <svg className="w-12 h-12 text-white opacity-60" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
            <path d="M7.5 10h9v1.5h-9zM7.5 13h9v1.5h-9zM7.5 7h9v1.5h-9z" />
          </svg>
        )
      case 'comparison':
        return (
          <svg className="w-12 h-12 text-white opacity-60" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z" />
          </svg>
        )
      case 'author':
        return (
          <svg className="w-12 h-12 text-white opacity-60" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        )
      default:
        return (
          <svg className="w-12 h-12 text-white opacity-60" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
          </svg>
        )
    }
  }

  // If using real image and it hasn't failed, try to load it
  if (!imgError) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className={className}
        priority={priority}
        onError={() => setImgError(true)}
      />
    )
  }

  // If image failed or we know it doesn't exist yet, use placeholder
  if (fill) {
    return (
      <div 
        className={`absolute inset-0 flex items-center justify-center ${getBgColor()} ${className}`}
        aria-label={alt}
      >
        {getIcon()}
        <span className="text-white text-opacity-80 text-sm absolute bottom-3">
          {alt}
        </span>
      </div>
    )
  }

  // For non-fill images
  return (
    <div 
      className={`flex items-center justify-center ${getBgColor()} ${className}`}
      style={{ width: width || '100%', height: height || '300px' }}
      aria-label={alt}
    >
      {getIcon()}
      <span className="text-white text-opacity-80 text-sm absolute bottom-3">
        {alt}
      </span>
    </div>
  )
}
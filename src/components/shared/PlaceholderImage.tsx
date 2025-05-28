'use client'

import { useState } from 'react'
import AppImage from '@/components/shared/AppImage';

interface PlaceholderImageProps {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
  [x: string]: any; // Allow any other props
}

export default function PlaceholderImage({ 
  width = 300, 
  height = 200, 
  className = "",
  alt = "Placeholder image", 
  ...props 
}: PlaceholderImageProps) {
  // Filter out any non-standard HTML attributes
  const { placeholderType, ...validProps } = props;
  
  return (
    <AppImage
      src="/images/placeholder.jpg"
      alt={alt}
      width={width}
      height={height}
      className={`bg-gray-200 ${className}`}
      {...validProps} // Only pass valid props
    />
  );
}
'use client'

import { useState } from 'react'
import AppImage from '@/components/shared/AppImage';

interface PlaceholderImageProps {
  width?: number;
  height?: number;
  className?: string;
  [x: string]: any; // Allow any other props
}

export default function PlaceholderImage({ 
  width = 300, 
  height = 200, 
  className = "", 
  ...props 
}: PlaceholderImageProps) {
  return (
    <AppImage
      src="/images/placeholder.jpg"
      alt="Placeholder"
      width={width}
      height={height}
      className={`bg-gray-200 ${className}`}
      {...props}
    />
  );
}
'use client';

import Image from 'next/image';

interface AppImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  onError?: () => void;
}

export default function AppImage({ 
  src, 
  alt, 
  width, 
  height, 
  fill = false,
  className = '',
  onError
}: AppImageProps) {
  // Handle missing src
  const imageSrc = src || '/images/blog/default-cover.svg';
  
  // Common props
  const imageProps = {
    src: imageSrc,
    alt,
    className,
    onError: onError
  };

  // If fill is true, use fill mode
  if (fill) {
    return (
      <div className="image-container">
        <Image 
          {...imageProps}
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
        />
      </div>
    );
  }

  // Otherwise, use explicit dimensions
  return (
    <Image 
      {...imageProps}
      width={width || 300} 
      height={height || 200} 
    />
  );
}
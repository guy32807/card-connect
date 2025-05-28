/**
 * Gets the base path depending on environment
 */
export function getBasePath(): string {
  // Default to empty string for development
  if (process.env.NODE_ENV === 'development') {
    return '';
  }
  
  // For production, check for environment variables
  return process.env.NEXT_PUBLIC_BASE_PATH || '';
}

export function getImagePath(src: string) {
  const basePath = getBasePath();
  return src.startsWith('/') ? `${basePath}${src}` : src;
}
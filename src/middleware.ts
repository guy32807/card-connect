import { NextRequest } from 'next/server';

// This won't work for static export but keeps the file for deployment on Vercel
export function middleware(req: NextRequest) {
  // This code won't run in static export mode
  // Your middleware logic here
}

// Only include specific paths
export const config = {
  matcher: [
    // Paths that need middleware
    '/api/:path*',
    // Add other paths that need middleware
  ],
};
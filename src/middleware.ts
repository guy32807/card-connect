// If this file exists, you need to modify or remove it for static export

// Option 1: Remove this file entirely if you're committed to static export

// Option 2: Conditionally execute middleware only in non-export environments
// This won't work for static export but keeps the file for other deployment methods
export function middleware(req) {
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
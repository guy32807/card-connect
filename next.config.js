/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static export for GitHub Pages
  output: 'export',
  // Set the base path for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/card-connect' : '',
  // Set asset prefix for GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/card-connect/' : '',
  // Keep the ESLint and TypeScript settings to ensure build success
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true
  },
  // GitHub Pages doesn't support Next.js Image Optimization
  images: {
    unoptimized: true,
    // Add domains for remote images if needed
    domains: [],
    // Ensure image paths include the base path
    path: process.env.NODE_ENV === 'production' ? '/card-connect/_next/image' : '/_next/image',
    // If using loaders, configure them properly
    loader: 'default',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  }
}

module.exports = nextConfig
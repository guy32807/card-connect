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
  // GitHub Pages doesn't support some features
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
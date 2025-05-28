/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Required for static site generation for GitHub Pages
  images: {
    unoptimized: true,  // Required for 'export'
    domains: [],
    formats: ['image/webp'],
    // Allow SVG
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Updated base path for GitHub Pages
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true
  },
  // Fix trailing slash issues when deployed to GitHub Pages
  trailingSlash: true,
}

module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Static HTML export
  images: {
    unoptimized: true, // For GitHub Pages deployment
  },
  // Required for GitHub Pages which serves from a subdirectory
  // Change 'beckett-affiliate-hub' to your repo name
  basePath: process.env.NODE_ENV === 'production' ? '/beckett-affiliate-hub' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/beckett-affiliate-hub/' : '',
}

module.exports = nextConfig
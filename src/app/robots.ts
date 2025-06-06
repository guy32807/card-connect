import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', 
    },
    sitemap: 'https://beckettcollectibles.com/sitemap.xml', // Replace with your actual domain
  }
}
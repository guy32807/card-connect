'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://cardconnecthub.com'
  const currentUrl = `${baseUrl}${pathname}`
  const siteName = "CardConnect Hub"
  const siteDescription = "Your premier destination for sports card collecting resources, market insights, and collection analysis."
  
  // Popular categories
  const categories = [
    { name: "Card Investment", slug: "/blog/category/card-investment" },
    { name: "Grading Tips", slug: "/blog/category/grading-tips" },
    { name: "Market Analysis", slug: "/blog/category/market-analysis" },
    { name: "Collector Stories", slug: "/blog/category/collector-stories" },
    { name: "New Releases", slug: "/blog/category/new-releases" }
  ]
  
  // Recent posts
  const recentPosts = [
    { title: "Top 10 Basketball Cards to Invest In", slug: "/blog/top-basketball-cards-invest" },
    { title: "The Ultimate Guide to Card Grading", slug: "/blog/ultimate-guide-card-grading" },
    { title: "How to Spot Counterfeit Trading Cards", slug: "/blog/spot-counterfeit-trading-cards" }
  ]

  // Quick links
  const quickLinks = [
    { name: "About Us", slug: "/about" },
    { name: "Contact", slug: "/contact" },
    { name: "Privacy Policy", slug: "/privacy" },
    { name: "Terms of Service", slug: "/terms" },
    { name: "Affiliate Disclosure", slug: "/affiliate-disclosure" }
  ]

  // Generate share URLs with proper encoding
  const getSocialShareUrl = (platform: string) => {
    const encodedUrl = encodeURIComponent(currentUrl)
    const encodedTitle = encodeURIComponent(siteName)
    const encodedDesc = encodeURIComponent(siteDescription)
    
    switch(platform) {
      case 'Facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
      case 'Twitter':
        return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedDesc}`
      case 'LinkedIn':
        return `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDesc}`
      case 'Pinterest':
        return `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedDesc}`
      case 'Reddit':
        return `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`
      case 'WhatsApp':
        return `https://wa.me/?text=${encodedDesc}%20${encodedUrl}`
      case 'Email':
        return `mailto:?subject=${encodedTitle}&body=${encodedDesc}%20${encodedUrl}`
      default:
        return '#'
    }
  }

  const socialIcons = [
    { name: "Facebook", icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z", sharable: true },
    { name: "Twitter", icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84", sharable: true },
    { name: "Instagram", icon: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z", sharable: false },
    { name: "LinkedIn", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", sharable: true },
    { name: "Pinterest", icon: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z", sharable: true }
  ]

  // Create a SocialIcon component for all social media icons
  const SocialIcon = ({ platform, icon, shareUrl }: { platform: string; icon: string; shareUrl?: string }) => {
    const handleShare = (e: React.MouseEvent) => {
      if (!shareUrl) return
      e.preventDefault()
      window.open(shareUrl, `Share on ${platform}`, 'width=600,height=400,resizable=yes,scrollbars=yes')
    }
    
    return (
      <a 
        href={shareUrl || "#"}
        aria-label={shareUrl ? `Share on ${platform}` : `Follow us on ${platform}`}
        onClick={shareUrl ? handleShare : undefined}
        className="text-gray-400 hover:text-white transition-colors hover:bg-gray-800 rounded-full p-2 group"
        target={shareUrl ? "_blank" : undefined}
        rel={shareUrl ? "noopener noreferrer" : undefined}
      >
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d={icon} />
        </svg>
      </a>
    )
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-lg font-bold mb-4">CardConnect Hub</h3>
            <p className="text-gray-400 mb-6">
              Your premier destination for sports card collecting resources, market insights, and collection analysis.
            </p>
            <div className="flex space-x-3">
              {socialIcons.map((social, index) => (
                <SocialIcon 
                  key={index}
                  platform={social.name}
                  icon={social.icon}
                  shareUrl={social.sharable ? getSocialShareUrl(social.name) : undefined}
                />
              ))}
            </div>
          </div>
          
          {/* Column 2 - Latest Articles */}
          <div>
            <h3 className="text-lg font-bold mb-4">Latest Articles</h3>
            <ul className="space-y-2">
              {recentPosts.map((post, index) => (
                <li key={index}>
                  <Link 
                    href={post.slug} 
                    className="text-gray-400 hover:text-white block transition-colors"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                <Link href="/blog" className="text-blue-400 hover:text-blue-300 text-sm font-medium inline-flex items-center">
                  View all articles
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link 
                    href={category.slug} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4 - Quick Links & Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 mb-6">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.slug} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-bold mb-3">Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 bg-gray-800 text-white rounded-l-md flex-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-r-md text-sm font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Share Section */}
        <div className="border-t border-gray-800 pt-6 pb-4 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">Share this page:</p>
            <div className="flex space-x-4">
              {socialIcons.filter(s => s.sharable).slice(0, 5).map((social, index) => (
                <SocialIcon 
                  key={index}
                  platform={social.name}
                  icon={social.icon}
                  shareUrl={getSocialShareUrl(social.name)}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} CardConnect Hub. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            This site contains affiliate links. We may earn a commission on qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  )
}
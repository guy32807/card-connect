'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

type ShareButtonsProps = {
  title?: string
  description?: string
  hashtags?: string[]
  className?: string
}

export default function ShareButtons({
  title = '',
  description = '',
  hashtags = [],
  className = ''
}: ShareButtonsProps) {
  const pathname = usePathname()
  const [currentUrl, setCurrentUrl] = useState('')
  
  // Set the URL when component mounts (client-side only)
  useEffect(() => {
    setCurrentUrl(window.location.href)
  }, [])
  
  // Prepare share URLs
  const pageTitle = title || document.title
  const pageDescription = description || ''
  const hashtagString = hashtags.length > 0 ? hashtags.join(',') : 'cardcollecting,sportscards,cardgrading'
  
  // Encode parameters for sharing
  const encodedUrl = encodeURIComponent(currentUrl)
  const encodedTitle = encodeURIComponent(pageTitle)
  const encodedDescription = encodeURIComponent(pageDescription)
  const encodedHashtags = encodeURIComponent(hashtagString)
  
  // Generate share URLs
  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&hashtags=${encodedHashtags}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
    reddit: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%20${encodedUrl}`
  }
  
  // Handle share click
  const handleShare = (e: React.MouseEvent<HTMLAnchorElement>, platform: string) => {
    e.preventDefault()
    
    // For email, just use default behavior
    if (platform === 'email') {
      window.location.href = shareUrls.email
      return
    }
    
    // For social platforms, open popup window
    const url = shareUrls[platform as keyof typeof shareUrls]
    window.open(url, `Share on ${platform}`, 'width=600,height=400,resizable=yes,scrollbars=yes')
  }

  // Icons for platforms
  const icons = {
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
    facebook: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    reddit: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
      </svg>
    ),
    email: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
      </svg>
    )
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <span className="text-gray-500 text-sm mr-1">Share:</span>
      
      <a 
        href={shareUrls.twitter}
        aria-label="Share on Twitter"
        onClick={(e) => handleShare(e, 'twitter')}
        className="text-gray-500 hover:text-blue-400 transition-colors"
      >
        {icons.twitter}
        <span className="sr-only">Twitter</span>
      </a>
      
      <a 
        href={shareUrls.facebook}
        aria-label="Share on Facebook"
        onClick={(e) => handleShare(e, 'facebook')}
        className="text-gray-500 hover:text-blue-600 transition-colors"
      >
        {icons.facebook}
        <span className="sr-only">Facebook</span>
      </a>
      
      <a 
        href={shareUrls.linkedin}
        aria-label="Share on LinkedIn"
        onClick={(e) => handleShare(e, 'linkedin')}
        className="text-gray-500 hover:text-blue-700 transition-colors"
      >
        {icons.linkedin}
        <span className="sr-only">LinkedIn</span>
      </a>
      
      <a 
        href={shareUrls.reddit}
        aria-label="Share on Reddit"
        onClick={(e) => handleShare(e, 'reddit')}
        className="text-gray-500 hover:text-orange-600 transition-colors"
      >
        {icons.reddit}
        <span className="sr-only">Reddit</span>
      </a>
      
      <a 
        href={shareUrls.email}
        aria-label="Share via Email"
        onClick={(e) => handleShare(e, 'email')}
        className="text-gray-500 hover:text-gray-700 transition-colors"
      >
        {icons.email}
        <span className="sr-only">Email</span>
      </a>
    </div>
  )
}
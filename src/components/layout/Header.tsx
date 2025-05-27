'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            {/* Logo */}
            <div className="w-10 h-10 relative">
              <Image 
                src="/images/logo.png" 
                alt="CardConnect Hub" 
                fill
                sizes="(max-width: 768px) 40px, 40px"
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-gray-900">CardConnect Hub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-700 font-medium">
              Home
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-blue-700 font-medium">
              Products
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-700 font-medium">
              Blog
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-700 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-700 font-medium">
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center"
          >
            <span className="sr-only">Open main menu</span>
            <svg 
              className="h-6 w-6 text-gray-900" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 px-4 py-2">
          <div className="flex flex-col space-y-3 py-3">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-blue-700 font-medium px-3 py-2 rounded-md hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className="text-gray-600 hover:text-blue-700 font-medium px-3 py-2 rounded-md hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-600 hover:text-blue-700 font-medium px-3 py-2 rounded-md hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-blue-700 font-medium px-3 py-2 rounded-md hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-600 hover:text-blue-700 font-medium px-3 py-2 rounded-md hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import AppLink from '@/components/shared/AppLink';
import AppImage from '@/components/shared/AppImage';
import { getBasePath } from '@/utils/path';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const basePath = getBasePath();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <AppLink href="/" className="flex items-center">
            <AppImage
              src="/images/logo.png"  
              alt="CardConnect Logo"
              width={140}
              height={40}
              priority
            />
          </AppLink>

          {/* Mobile menu button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Hamburger icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-6">
            <AppLink href="/" className={`text-gray-700 hover:text-blue-600 ${pathname === '/' ? 'font-semibold' : 'font-medium'}`}>
              Home
            </AppLink>
            <AppLink href="/blog" className={`text-gray-700 hover:text-blue-600 ${pathname === '/blog' || pathname?.startsWith('/blog/') ? 'font-semibold' : 'font-medium'}`}>
              Blog
            </AppLink>
            <AppLink href="/products" className={`text-gray-700 hover:text-blue-600 ${pathname === '/products' ? 'font-semibold' : 'font-medium'}`}>
              Products
            </AppLink>
            <AppLink href="/contact" className={`text-gray-700 hover:text-blue-600 ${pathname === '/contact' ? 'font-semibold' : 'font-medium'}`}>
              Contact
            </AppLink>
            <AppLink href="/about" className={`text-gray-700 hover:text-blue-600 ${pathname === '/about' ? 'font-semibold' : 'font-medium'}`}>
              About
            </AppLink>
          </nav>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pb-4`}>
          <nav className="flex flex-col space-y-4">
            <AppLink href="/" className={`text-gray-700 hover:text-blue-600 ${pathname === '/' ? 'font-semibold' : 'font-medium'}`}>
              Home
            </AppLink>
            <AppLink href="/blog" className={`text-gray-700 hover:text-blue-600 ${pathname === '/blog' || pathname?.startsWith('/blog/') ? 'font-semibold' : 'font-medium'}`}>
              Blog
            </AppLink>
            <AppLink href="/products" className={`text-gray-700 hover:text-blue-600 ${pathname === '/products' ? 'font-semibold' : 'font-medium'}`}>
              Products
            </AppLink>
            <AppLink href="/contact" className={`text-gray-700 hover:text-blue-600 ${pathname === '/contact' ? 'font-semibold' : 'font-medium'}`}>
              Contact
            </AppLink>
            <AppLink href="/about" className={`text-gray-700 hover:text-blue-600 ${pathname === '/about' ? 'font-semibold' : 'font-medium'}`}>
              About
            </AppLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
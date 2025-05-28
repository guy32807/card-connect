'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="container">
        <div className="navbar">
          <Link href="/" className="logo">
            CardConnect
          </Link>
          
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span className="menu-toggle-bar"></span>
            <span className="menu-toggle-bar"></span>
            <span className="menu-toggle-bar"></span>
          </button>
          
          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <Link 
                  href="/" 
                  className={`nav-link ${isActive('/')}`} 
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  href="/about" 
                  className={`nav-link ${isActive('/about')}`}
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  href="/contact" 
                  className={`nav-link ${isActive('/contact')}`}
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  href="/blog" 
                  className={`nav-link ${isActive('/blog')}`}
                  onClick={closeMenu}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
          
          <a href="https://www.tkqlhce.com/click-9083409-15435040" className="btn btn-primary btn-sm">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Helper to check active state
  const isActive = (path) => pathname === path ? 'active' : '';

  return (
    <nav className="navbar">
      <div className="container">
        
        {/* --- 1. LOGO (Far Left) --- */}
        <Link href="/" className="logo" onClick={() => setIsOpen(false)}>
          Faheem<span>.</span>
        </Link>

        {/* --- 2. LINKS (Far Right) --- */}
        {/* We use 'desktop-menu' for large screens */}
        <div className={`nav-elements ${isOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link href="/" className={isActive('/')} onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={isActive('/about')} onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/experience" className={isActive('/experience')} onClick={() => setIsOpen(false)}>
                Experience
              </Link>
            </li>
            <li>
              <Link href="/projects" className={isActive('/projects')} onClick={() => setIsOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/education" className={isActive('/education')} onClick={() => setIsOpen(false)}>
                Education
              </Link>
            </li>
            {/* Contact Button */}
            <li>
              <Link href="/contact" className="contact-btn" onClick={() => setIsOpen(false)}>
                Contact Me
              </Link>
            </li>
          </ul>
        </div>

        {/* --- 3. HAMBURGER (Mobile Only) --- */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div className={`bar ${isOpen ? 'toggle' : ''}`}></div>
          <div className={`bar ${isOpen ? 'toggle' : ''}`}></div>
          <div className={`bar ${isOpen ? 'toggle' : ''}`}></div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
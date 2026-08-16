'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './theme-toggle';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/education', label: 'Education' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => (pathname === path ? 'active' : '');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container">
        <Link href="/" className="brand" onClick={() => setIsOpen(false)}>
          faheem<span className="dot">.</span>
        </Link>

        <div className={`links ${isOpen ? 'open' : ''}`}>
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href)}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={isActive('/contact')}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>

        <div className="right">
          <ThemeToggle />
          <Link href="/contact" className="cta">
            Let&apos;s talk
          </Link>
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <div className={`bar ${isOpen ? 'toggle' : ''}`}></div>
            <div className={`bar ${isOpen ? 'toggle' : ''}`}></div>
            <div className={`bar ${isOpen ? 'toggle' : ''}`}></div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

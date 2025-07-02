import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-6">
        {/* Logo */}
        <Link href="/" className="text-white text-2xl font-bold tracking-wide">
          Ampe Ai
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-semibold">
          <li>
            <Link href="/#about" className="hover:text-purple-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/#services" className="hover:text-purple-400 transition">
              Services
            </Link>
          </li>
          <li>
            <Link href="/#pricing" className="hover:text-purple-400 transition">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="hover:text-purple-400 transition">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="hover:text-purple-400 transition">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="absolute top-full left-0 w-full bg-black bg-opacity-90 flex flex-col md:hidden text-white font-semibold p-4 space-y-4">
            <li>
              <Link href="#about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="#services" onClick={() => setMenuOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link href="#pricing" onClick={() => setMenuOpen(false)}>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#blog" onClick={() => setMenuOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={() => setMenuOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

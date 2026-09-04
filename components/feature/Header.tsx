'use client';

import { useState, useEffect } from 'react';

const leftNav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Showcase', href: '#results' },
];

const rightNav = [
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#080808]/85 backdrop-blur-xl border-b border-white/[0.06] ${
        scrolled ? 'shadow-[0_1px_40px_rgba(0,0,0,0.3)]' : ''
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-[96px]">
          {/* Left Nav - Desktop */}
          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-end pr-12 xl:pr-16">
            {leftNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-white font-medium tracking-wide py-2 rounded-lg hover:bg-white/[0.06] transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Logo - Center */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center group">
              <img
                src="https://ericanalytics.net/images/log.png"
                alt="Eric Analytics"
                className="h-20 w-auto object-contain"
              />
            </a>
          </div>

          {/* Right Nav - Desktop */}
          <nav className="hidden lg:flex items-center gap-8 flex-1 pl-12 xl:pl-16">
            {rightNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-white font-medium tracking-wide py-2 rounded-lg hover:bg-white/[0.06] transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex-1 flex justify-end lg:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white hover:bg-white/[0.08] transition-all cursor-pointer"
              aria-label="Toggle menu"
            >
              <i className={`text-lg ${mobileOpen ? 'ri-close-line' : 'ri-menu-line'}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#080808]/95 backdrop-blur-xl border-t border-white/[0.06]">
          <div className="px-4 py-6 space-y-1">
            {[...leftNav, ...rightNav].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-base text-white font-medium hover:bg-white/[0.06] rounded-lg px-3 transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
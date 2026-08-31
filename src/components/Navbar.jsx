'use client';

import React, { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Classes', href: '#classes' },
    { name: 'Eligibility', href: '#eligibility' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-sm group-hover:bg-blue-900 transition-colors font-black text-lg tracking-wider">
              JMT
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-slate-900 uppercase">
                JMT
              </span>
              <span className="text-xs sm:text-sm text-slate-500 font-medium tracking-wide">
                Public Higher Secondary School & College
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-blue-900 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-900 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Enquire Now Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#enquiry"
              className="bg-slate-900 hover:bg-blue-950 text-white text-sm font-semibold px-6 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 active:scale-95"
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-900"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {isOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded-md text-base font-semibold text-slate-700 hover:text-blue-900 hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <a
              href="#enquiry"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-slate-900 hover:bg-blue-950 text-white font-semibold px-5 py-3 rounded-lg shadow-sm transition-all"
            >
              Enquire Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

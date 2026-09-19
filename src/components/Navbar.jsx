'use client';

import React, { useState } from 'react';
import { Menu, X, GraduationCap, PenSquare } from 'lucide-react';

export default function Navbar({ onOpenEnroll }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#classes' },
    { name: 'Why JMT', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Eligibility', href: '#eligibility' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Name with Ring Mark */}
          <a href="#home" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 via-blue-700 to-slate-900 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-all">
              <div className="absolute inset-0 rounded-full border-2 border-amber-400/60 animate-spin-slow pointer-events-none" />
              <GraduationCap className="w-6 h-6 text-amber-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-none">
                JMT Public
              </span>
              <em className="text-xs sm:text-sm text-slate-500 font-medium tracking-wide not-italic mt-0.5">
                School &amp; College Karachi
              </em>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-blue-900 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-900 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header CTAs & Badge */}
          <div className="hidden lg:flex items-center gap-3">
            <span className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Admissions Open</span>
            </span>

            <button
              type="button"
              onClick={onOpenEnroll}
              className="btn-shine bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 hover:from-blue-800 hover:to-indigo-950 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer flex items-center gap-2 border border-blue-800/40"
            >
              <PenSquare className="w-4 h-4 text-amber-400" />
              <span>Enroll Now</span>
            </button>
          </div>

          {/* Mobile Right CTAs & Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenEnroll}
              className="bg-blue-900 hover:bg-blue-950 text-white text-xs font-bold px-3.5 py-2 rounded-full shadow-xs transition-all active:scale-95 flex items-center gap-1.5"
            >
              <PenSquare className="w-3.5 h-3.5 text-amber-400" />
              <span>Enroll</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-900"
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
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-blue-900 hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-100 space-y-2">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                if (onOpenEnroll) onOpenEnroll();
              }}
              className="w-full text-center bg-blue-900 hover:bg-blue-950 text-white font-bold px-5 py-2.5 rounded-full shadow-sm transition-all text-sm flex items-center justify-center gap-2"
            >
              <PenSquare className="w-4 h-4 text-amber-400" />
              <span>Enroll Now for Admissions</span>
            </button>
            <a
              href="#enquiry"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold px-5 py-2 rounded-full transition-all text-xs"
            >
              Admission Enquiry Form
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

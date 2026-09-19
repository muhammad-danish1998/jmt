'use client';

import React, { useState } from 'react';
import { Menu, X, GraduationCap, Sparkles, Send } from 'lucide-react';

export default function Navbar({ onOpenEnroll }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about-leadership' },
    { name: 'Process', href: '#about' },
    { name: 'Classes', href: '#classes' },
    { name: 'Eligibility', href: '#eligibility' },
    { name: 'Why JMT', href: '#why-us' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-900 to-slate-900 text-white flex items-center justify-center shadow-sm group-hover:from-blue-800 group-hover:to-blue-950 transition-all font-black text-lg tracking-wider border border-blue-950/20">
              JMT
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 uppercase leading-none">
                JMT
              </span>
              <span className="text-[11px] sm:text-xs text-slate-500 font-medium tracking-wide mt-1">
                Public Higher Secondary School & College
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
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

          {/* Header CTAs & Badge */}
          <div className="hidden lg:flex items-center gap-3">
            <span className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Admissions Open</span>
            </span>

            <button
              type="button"
              onClick={onOpenEnroll}
              className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 text-xs sm:text-sm font-extrabold px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 active:scale-95 cursor-pointer flex items-center gap-1.5"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Enroll Now</span>
            </button>
          </div>

          {/* Mobile Right CTAs & Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenEnroll}
              className="bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-bold px-3.5 py-2 rounded-lg shadow-xs transition-all active:scale-95"
            >
              Enroll
            </button>
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
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-semibold text-slate-700 hover:text-blue-900 hover:bg-slate-50 transition-colors"
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
              className="w-full text-center bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-5 py-2.5 rounded-lg shadow-sm transition-all text-sm"
            >
              ⚡ Enroll Now for Admissions
            </button>
            <a
              href="#enquiry"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-slate-900 hover:bg-blue-950 text-white font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-all text-sm"
            >
              Admission Enquiry Form
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

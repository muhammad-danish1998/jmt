'use client';

import React, { useState } from 'react';
import { Menu, X, GraduationCap, PenSquare } from 'lucide-react';

export default function Navbar({ onOpenEnroll }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Eligibility', href: '#eligibility' },
    { name: 'Contact us', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Name with Cursive Subtitle */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-800 text-white flex items-center justify-center shadow-md shadow-purple-500/20 group-hover:scale-105 transition-all">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-none">
                JMT School
              </span>
              <span className="font-dancing text-sm sm:text-base text-purple-700 font-bold -mt-0.5 tracking-wide">
                Academy &amp; College
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors py-1 relative ${
                  idx === 0
                    ? 'text-indigo-600 font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-indigo-600'
                    : 'text-slate-700 hover:text-indigo-600'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header CTAs matching screenshot pills */}
          <div className="hidden lg:flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-700 text-xs font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Admissions Open</span>
            </span>

            <button
              type="button"
              onClick={onOpenEnroll}
              className="btn-shine bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-700 hover:to-purple-800 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full shadow-md shadow-indigo-500/25 transition-all duration-200 active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <PenSquare className="w-4 h-4 text-amber-300" />
              <span>Enroll Now</span>
            </button>
          </div>

          {/* Mobile Right CTAs & Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenEnroll}
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-3.5 py-2 rounded-full shadow-xs transition-all active:scale-95 flex items-center gap-1.5"
            >
              <PenSquare className="w-3.5 h-3.5 text-amber-300" />
              <span>Enroll</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-600"
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

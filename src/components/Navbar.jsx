'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { SITE } from '../lib/site';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState('');
  const pathname = usePathname();
  const drawerRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Monitor scroll for elevation and height adjustment
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section on the home page via scroll and hash
  useEffect(() => {
    if (pathname !== '/') return undefined;

    const updateActiveSection = () => {
      const scrollPos = window.scrollY + 220;
      const aboutEl = document.getElementById('about');
      const contactEl = document.getElementById('contact');

      const isBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120;

      if (contactEl && (isBottom || scrollPos >= contactEl.offsetTop)) {
        setActiveHash('#contact');
      } else if (
        aboutEl &&
        scrollPos >= aboutEl.offsetTop &&
        (!contactEl || scrollPos < contactEl.offsetTop)
      ) {
        setActiveHash('#about');
      } else {
        setActiveHash('#home');
      }
    };

    const rafId = requestAnimationFrame(updateActiveSection);

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('hashchange', updateActiveSection, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('hashchange', updateActiveSection);
    };
  }, [pathname]);

  // Lock body scroll and handle Escape key for accessibility focus trap
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setIsOpen(false);
          menuButtonRef.current?.focus();
        }

        // Trap focus inside drawer
        if (e.key === 'Tab' && drawerRef.current) {
          const focusableElements = drawerRef.current.querySelectorAll(
            'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusableElements.length > 0) {
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey && document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Eligibility', href: '/eligibility' },
    { name: 'Date Sheet', href: '/date-sheet' },
    { name: 'Contact', href: '/#contact' },
    { name: 'Blogs', href: '/blogs' },
  ];

  const isLinkActive = (href) => {
    if (pathname.startsWith('/eligibility')) {
      return href === '/eligibility';
    }
    if (pathname.startsWith('/date-sheet')) {
      return href === '/date-sheet';
    }
    if (pathname.startsWith('/blogs')) {
      return href === '/blogs';
    }
    if (pathname === '/') {
      if (href === '/#about') return activeHash === '#about';
      if (href === '/#contact') return activeHash === '#contact';
      if (href === '/') return activeHash === '#home' || !activeHash;
      return false;
    }
    return pathname === href;
  };

  const handleLinkClick = (href) => {
    if (href === '/') setActiveHash('#home');
    if (href === '/#about') setActiveHash('#about');
    if (href === '/#contact') setActiveHash('#contact');
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(11,61,38,0.08)] border-b border-[#E5E7EB]'
          : 'bg-white border-b border-[#E5E7EB]/70'
      }`}
    >
      <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 lg:px-12 xl:px-16">
        <div
          className={`flex items-center justify-between gap-4 transition-all duration-300 ${
            isScrolled ? 'h-[68px] sm:h-[72px]' : 'h-[76px] sm:h-[82px]'
          }`}
        >
          {/* Brand Logo Only - College name text removed per user specification */}
          <Link
            href="/"
            onClick={() => handleLinkClick('/')}
            aria-label="JMT Public Higher Secondary School & College Home"
            className="group relative flex items-center py-1 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C] transition-transform duration-200"
          >
            <Image
              src="/jmt-logo.png"
              alt="JMT School and College"
              width={128}
              height={140}
              priority
              className="h-11 sm:h-13 lg:h-14 w-auto block object-contain transition-transform duration-300 ease-out group-hover:scale-105 group-active:scale-95 drop-shadow-[0_2px_8px_rgba(11,61,38,0.06)]"
            />
          </Link>

          {/* Desktop Navigation with Smooth Animated Pills & Indicators */}
          <nav aria-label="Main" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`group relative px-4 py-2 rounded-full text-[15px] font-semibold transition-all duration-200 ease-out flex items-center justify-center ${
                    active
                      ? 'text-[#0B3D26] bg-[#0B3D26]/[0.06]'
                      : 'text-[#4A5568] hover:text-[#0B3D26] hover:bg-[#0B3D26]/[0.04]'
                  }`}
                >
                  <span className="relative z-10 transition-transform duration-200 group-hover:scale-[1.02]">
                    {link.name}
                  </span>

                  {/* Animated Gold Bottom Indicator Bar */}
                  <span
                    className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[2.5px] rounded-full bg-[#C89B3C] transition-all duration-300 ease-out ${
                      active
                        ? 'w-6 opacity-100 shadow-[0_1px_6px_rgba(200,155,60,0.45)]'
                        : 'w-0 opacity-0 group-hover:w-4 group-hover:opacity-75'
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTAs: Phone & Apply Now */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            <a
              href={SITE.phoneHref}
              className="group flex items-center gap-2.5 px-3 py-1.5 rounded-full text-[14.5px] font-bold text-[#17202A] hover:text-[#0B3D26] hover:bg-[#EAF2ED]/60 border border-transparent hover:border-[#CFE0D6]/80 transition-all duration-200"
              aria-label={`Call admissions at ${SITE.phone}`}
            >
              <span className="w-8 h-8 rounded-full bg-[#EAF2ED] text-[#2E6B4A] group-hover:bg-[#0B3D26] group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-xs">
                <Phone className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" strokeWidth={2} />
              </span>
              <span className="tracking-tight transition-colors duration-200">{SITE.phone}</span>
            </a>

            <a
              href={SITE.whatsappApplyMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#0B3D26] hover:bg-[#082d1c] text-white text-[14.5px] font-bold transition-all duration-200 shadow-[0_2px_10px_rgba(11,61,38,0.22)] hover:shadow-[0_6px_20px_rgba(11,61,38,0.32)] hover:-translate-y-0.5 active:translate-y-0 active:scale-98 overflow-hidden"
            >
              {/* Animated shimmer sweep on hover */}
              <span
                className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-out pointer-events-none"
                aria-hidden="true"
              />
              <span className="relative z-10 flex items-center gap-1.5">
                Apply Now
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.2} />
              </span>
            </a>
          </div>

          {/* Mobile Action Controls (44px Minimum Touch Target) */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={SITE.phoneHref}
              aria-label="Call Admissions"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-[#CFE0D6] bg-white text-[#0B3D26] hover:bg-[#EAF2ED] active:scale-95 transition-all shadow-xs"
            >
              <Phone className="w-4.5 h-4.5" strokeWidth={2} />
            </a>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-[#CFE0D6] bg-white text-[#17202A] hover:bg-[#EAF2ED] hover:text-[#0B3D26] active:scale-95 transition-all shadow-xs cursor-pointer"
            >
              <Menu className="w-5 h-5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Drawer with Backdrop Blur */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300 ease-out"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer container */}
          <aside
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
            className="fixed inset-y-0 right-0 w-full max-w-[340px] bg-white shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out overflow-y-auto"
          >
            {/* Drawer Header */}
            <div>
              <div className="p-4 flex items-center justify-between border-b border-[#E5E7EB]">
                <Link
                  href="/"
                  onClick={() => {
                    setIsOpen(false);
                    handleLinkClick('/');
                  }}
                  className="flex items-center focus:outline-none"
                  aria-label="JMT School and College Home"
                >
                  <Image
                    src="/jmt-logo.png"
                    alt="JMT School logo"
                    width={96}
                    height={105}
                    className="h-10 sm:h-11 w-auto block object-contain"
                  />
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    menuButtonRef.current?.focus();
                  }}
                  aria-label="Close navigation menu"
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-[#CFE0D6] bg-white text-[#17202A] hover:bg-slate-100 hover:text-[#0B3D26] active:scale-95 transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" strokeWidth={2} />
                </button>
              </div>

              {/* Drawer Links */}
              <nav aria-label="Mobile Navigation" className="p-4 flex flex-col gap-1.5">
                {navLinks.map((link) => {
                  const active = isLinkActive(link.href);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => {
                        setIsOpen(false);
                        handleLinkClick(link.href);
                      }}
                      className={`min-h-[46px] flex items-center justify-between px-4 py-3 rounded-xl text-[15px] font-semibold transition-all ${
                        active
                          ? 'bg-[#EAF2ED] text-[#0B3D26] font-bold border-l-4 border-[#C89B3C]'
                          : 'text-[#17202A] hover:bg-slate-100/80 hover:text-[#0B3D26]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowRight
                        className={`w-4 h-4 transition-transform duration-200 ${
                          active ? 'text-[#0B3D26] translate-x-0.5' : 'text-[#8291A3]'
                        }`}
                      />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-4 border-t border-[#E5E7EB] bg-[#FAFAF7] space-y-3">
              <a
                href={SITE.phoneHref}
                className="min-h-[44px] flex items-center justify-center gap-2.5 w-full py-2.5 px-4 rounded-xl border border-[#CFE0D6] bg-white text-sm font-bold text-[#17202A] hover:bg-[#EAF2ED] hover:text-[#0B3D26] transition-all"
              >
                <Phone className="w-4 h-4 text-[#2E6B4A]" strokeWidth={2} />
                <span>Call {SITE.phone}</span>
              </a>

              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] flex items-center justify-center gap-2.5 w-full py-2.5 px-4 rounded-xl border-1.5 border-[#2E6B4A] text-[#2E6B4A] bg-white text-sm font-bold hover:bg-[#EAF2ED] transition-all"
              >
                <svg
                  aria-hidden="true"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2E6B4A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={SITE.whatsappApplyMessage}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="relative group flex items-center justify-center gap-2 w-full h-[50px] px-6 rounded-xl bg-[#0B3D26] hover:bg-[#082d1c] text-white text-base font-bold shadow-md active:scale-98 transition-all overflow-hidden"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2} />
              </a>

              <p className="text-[12px] text-center text-[#5E6873] pt-1">
                Admissions 2026–27 open · Karachi
              </p>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}

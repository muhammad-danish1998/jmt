'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ArrowRight, Clock, MessageCircle } from 'lucide-react';
import { SITE } from '../lib/site';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  const pathname = usePathname();
  const drawerRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Monitor scroll: hide top bar smoothly as soon as user scrolls down a little
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section on home page
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

  // Lock body scroll and trap focus for mobile drawer
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setIsOpen(false);
          menuButtonRef.current?.focus();
        }

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
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/#contact' },
  ];

  const isLinkActive = (href) => {
    if (pathname.startsWith('/eligibility')) return href === '/eligibility';
    if (pathname.startsWith('/date-sheet')) return href === '/date-sheet';
    if (pathname.startsWith('/blogs')) return href === '/blogs';
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
    <header className="sticky top-0 z-40 w-full font-sans">
      {/* 1. TOP BAR — Smooth hide when scrolled down, re-appears when back at top */}
      <div
        className={`w-full bg-[#0B3D26] text-white overflow-hidden transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'max-h-0 opacity-0 -translate-y-full pointer-events-none'
            : 'max-h-14 opacity-100 translate-y-0 border-b border-[#2E6B4A]/50'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-2 flex items-center justify-between text-xs sm:text-[13px] font-medium">
          {/* Announcement pill with live pulse dot */}
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C89B3C] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C89B3C]" />
            </span>
            <span className="text-white/90">
              <strong className="text-[#C89B3C] font-bold">Admissions 2026–27 Open:</strong> Ziauddin Examination Board (ZUEB) Matric &amp; Intermediate
            </span>
          </div>

          {/* Quick Contact & Office Hours */}
          <div className="hidden md:flex items-center gap-5 text-white/80">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C89B3C]" />
              <span>{SITE.officeHours}</span>
            </div>
            <span className="text-white/30">|</span>
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-1.5 hover:text-[#C89B3C] transition-colors font-semibold text-white"
            >
              <Phone className="w-3.5 h-3.5 text-[#C89B3C]" />
              <span>{SITE.phone}</span>
            </a>
            <span className="text-white/30">|</span>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#EAF2ED] hover:text-[#C89B3C] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR — Clean, professional, border bottom, NO shadow */}
      <div
        className={`w-full transition-colors duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#CFE0D6]'
            : 'bg-white border-b border-[#E5E7EB]'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div
            className={`flex items-center justify-between gap-4 transition-all duration-300 ${
              isScrolled ? 'h-[68px] sm:h-[72px]' : 'h-[76px] sm:h-[82px]'
            }`}
          >
            {/* Logo */}
            <Link
              href="/"
              onClick={() => handleLinkClick('/')}
              aria-label="JMT Public Higher Secondary School & College Home"
              className="group relative flex items-center py-1 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3D26] shrink-0"
            >
              <Image
                src="/jmt-logo.png"
                alt="JMT School & College"
                width={128}
                height={140}
                priority
                className="h-11 sm:h-13 lg:h-14 w-auto block object-contain transition-transform duration-300 ease-out group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation Links with Animated Border Bottom (No Dot, No Pill Background) */}
            <nav aria-label="Main" className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={`group relative px-3.5 py-2 text-[15px] font-bold tracking-tight transition-colors duration-200 flex items-center justify-center ${
                      active
                        ? 'text-[#0B3D26]'
                        : 'text-[#3A4551] hover:text-[#0B3D26]'
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>

                    {/* Animated Border Bottom */}
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full transition-all duration-300 ease-out origin-left ${
                        active
                          ? 'opacity-100 bg-[#0B3D26] scale-x-100'
                          : 'opacity-0 group-hover:opacity-100 bg-[#C89B3C] scale-x-0 group-hover:scale-x-100'
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right Side: Admissions Callout Box & Apply CTA */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
              {/* Admissions Desk Contact Box */}
              <a
                href={SITE.phoneHref}
                className="group flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#FAFAF7] hover:bg-[#EAF2ED] border border-[#CFE0D6] transition-all duration-200"
                aria-label={`Call admissions at ${SITE.phone}`}
              >
                <span className="w-8 h-8 rounded-xl bg-[#0B3D26] text-[#C89B3C] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0">
                  <Phone className="w-4 h-4" strokeWidth={2.2} />
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#2E6B4A] leading-tight">
                    Admissions Desk
                  </span>
                  <span className="text-xs font-bold text-[#17202A] leading-tight">
                    {SITE.phone}
                  </span>
                </div>
              </a>

              {/* Apply Now CTA — Clean, Professional, No Heavy Shadow */}
              <a
                href={SITE.whatsappApplyMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-[12px_24px_12px_24px] bg-[#0B3D26] hover:bg-[#082d1c] text-white text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Apply Now
                  <ArrowRight className="w-4 h-4 text-[#C89B3C] transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.5} />
                </span>
              </a>
            </div>

            {/* Mobile Actions: Phone & Hamburger Menu (No Search Button) */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={SITE.phoneHref}
                aria-label="Call Admissions"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#CFE0D6] bg-[#0B3D26] text-[#C89B3C] active:scale-95 transition-all"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setIsOpen(true)}
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isOpen}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#CFE0D6] bg-white text-[#17202A] hover:bg-[#EAF2ED] hover:text-[#0B3D26] active:scale-95 transition-all cursor-pointer"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. MOBILE ACCESSIBLE DRAWER */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
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
            <div>
              {/* Drawer Header */}
              <div className="p-4 flex items-center justify-between border-b border-[#E5E7EB] bg-[#FAFAF7]">
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
                    className="h-10 w-auto block object-contain"
                  />
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    menuButtonRef.current?.focus();
                  }}
                  aria-label="Close navigation menu"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-[#CFE0D6] bg-white text-[#17202A] hover:bg-slate-100 hover:text-[#0B3D26] active:scale-95 transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
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
                      className={`min-h-[46px] flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                        active
                          ? 'bg-[#EAF2ED] text-[#0B3D26] border-l-4 border-[#0B3D26]'
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
                <Phone className="w-4 h-4 text-[#2E6B4A]" />
                <span>Call {SITE.phone}</span>
              </a>

              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] flex items-center justify-center gap-2.5 w-full py-2.5 px-4 rounded-xl border border-[#2E6B4A] text-[#2E6B4A] bg-white text-sm font-bold hover:bg-[#EAF2ED] transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={SITE.whatsappApplyMessage}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="relative group flex items-center justify-center gap-2 w-full h-[48px] px-6 rounded-[12px_24px_12px_24px] bg-[#0B3D26] hover:bg-[#082d1c] text-white text-sm font-bold active:scale-98 transition-all overflow-hidden"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4 text-[#C89B3C] transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <p className="text-[11px] text-center text-[#5E6873] pt-1 font-medium">
                Admissions 2026–27 open · Karachi
              </p>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}

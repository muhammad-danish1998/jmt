'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Clock, MessageCircle, ArrowUp } from 'lucide-react';
import { SITE } from '../lib/site';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About JMT', href: '/#about' },
    { name: 'Eligibility Criteria', href: '/eligibility' },
    { name: 'Date Sheet 2026', href: '/date-sheet' },
    { name: 'Why Choose JMT', href: '/#why' },
    { name: 'FAQ & Help', href: '/#faq' },
    { name: 'Admissions & Contact', href: '/#contact' },
    { name: 'News & Blogs', href: '/blogs' },
  ];

  const programs = [
    { name: 'Matric (SSC Part I & II)', href: '/eligibility' },
    { name: 'Intermediate (HSSC Part I & II)', href: '/eligibility' },
    { name: 'Combined SSC (Gap Candidates)', href: '/eligibility' },
    { name: 'Combined HSSC (Gap Candidates)', href: '/eligibility' },
    { name: 'Fee Scholarships & Aid', href: '/#scholarship' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="relative bg-[#0B3D26] text-white overflow-hidden">
      {/* Subtle ambient gradient lighting */}
      <div
        className="absolute -top-10 right-20 w-80 h-80 rounded-full bg-[#2E6B4A]/30 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 lg:px-16 pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-12 relative z-10">
        
        {/* Main Grid: Desktop 4 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1.2fr_1.3fr] gap-8 lg:gap-12 items-start">
          
          {/* Column 1: Brand & Affiliation */}
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-3.5 text-white no-underline group">
              <span className="shrink-0 w-16 h-16 rounded-2xl bg-white flex items-center justify-center p-2 shadow-md group-hover:scale-105 transition-transform">
                <Image
                  src="/jmt-logo.png"
                  alt="JMT School logo"
                  width={100}
                  height={110}
                  className="h-12 w-auto block object-contain"
                />
              </span>
              <div className="flex flex-col text-left">
                <span className="font-extrabold text-lg leading-snug text-white tracking-tight">
                  JMT Public Higher Secondary
                </span>
                <span className="font-bold text-sm text-[#C89B3C] leading-tight">
                  School &amp; College Karachi
                </span>
              </div>
            </Link>

            <p className="m-0 max-w-[340px] text-sm sm:text-[15px] leading-6 text-[#CFE0D6] font-medium text-left">
              Official examination center affiliated with Ziauddin University Examination Board (ZUEB). Empowering students to complete their Matric &amp; Intermediate.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#C89B3C] animate-pulse" />
              <span className="text-xs font-bold tracking-wide text-white">
                ZUEB-Affiliated Center · Karachi
              </span>
            </div>

            {/* Quick WhatsApp Action Button */}
            <a
              href={SITE.whatsappApplyMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-[12px_24px_12px_24px] bg-[#C89B3C] hover:bg-white text-[#0B3D26] text-xs font-bold transition-all shadow-md active:scale-98"
            >
              <MessageCircle className="w-4 h-4 text-[#0B3D26]" />
              <span>Direct WhatsApp Counseling</span>
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-left">
            <h3 className="m-0 mb-3.5 sm:mb-4 text-xs font-bold tracking-[0.1em] uppercase text-[#C89B3C]">
              Quick Links
            </h3>
            <ul className="m-0 p-0 list-none flex flex-col gap-1.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center text-sm font-medium text-[#CFE0D6] hover:text-white hover:translate-x-1 transition-all"
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Examination Programs */}
          <div className="text-left">
            <h3 className="m-0 mb-3.5 sm:mb-4 text-xs font-bold tracking-[0.1em] uppercase text-[#C89B3C]">
              Academic Programs
            </h3>
            <ul className="m-0 p-0 list-none flex flex-col gap-1.5">
              {programs.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center text-sm font-medium text-[#CFE0D6] hover:text-white hover:translate-x-1 transition-all"
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="text-left">
            <h3 className="m-0 mb-3.5 sm:mb-4 text-xs font-bold tracking-[0.1em] uppercase text-[#C89B3C]">
              Campus Contact
            </h3>
            <ul className="m-0 p-0 list-none flex flex-col gap-3 text-sm text-[#CFE0D6] font-medium">
              
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-[#C89B3C] shrink-0 mt-0.5" />
                <a
                  href={SITE.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors leading-relaxed"
                >
                  {SITE.address}
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <Phone className="w-4.5 h-4.5 text-[#C89B3C] shrink-0 mt-0.5" />
                <a
                  href={SITE.phoneHref}
                  className="hover:text-white transition-colors font-bold text-white"
                >
                  {SITE.phone}
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <Clock className="w-4.5 h-4.5 text-[#C89B3C] shrink-0 mt-0.5" />
                <span>{SITE.officeHours}</span>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6 mt-10 sm:mt-14 pt-6 border-t border-white/15 text-xs sm:text-sm text-[#CFE0D6] font-medium">
          <p className="m-0">
            &copy; 2026 JMT Public Higher Secondary School &amp; College. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/70">
              ZUEB Affiliated Institution · Karachi
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold cursor-pointer transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3 text-[#C89B3C]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Clock } from 'lucide-react';
import { SITE } from '../lib/site';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Eligibility', href: '/eligibility' },
    { name: 'Date Sheet', href: '/date-sheet' },
    { name: 'Why JMT', href: '/#why' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Contact', href: '/#contact' },
    { name: 'Blogs', href: '/blogs' },
  ];

  const programs = [
    { name: 'Matric (SSC Part I & II)', href: '/eligibility' },
    { name: 'Intermediate (HSSC Part I & II)', href: '/eligibility' },
    { name: 'Combined SSC (Gap)', href: '/eligibility#combined-ssc' },
    { name: 'Combined HSSC (Gap)', href: '/eligibility#combined-hssc' },
    { name: 'Scholarships', href: '/#scholarship' },
  ];

  return (
    <footer id="footer" className="bg-[#0B3D26] text-white">
      <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 lg:px-16 pt-12 sm:pt-16 lg:pt-[72px] pb-24 sm:pb-12 lg:pb-8">
        
        {/* Main Grid: Desktop 4 columns, Mobile stacked with 2-col links */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1.2fr_1.5fr] gap-9 lg:gap-12 items-start">
          
          {/* Column 1: Brand & Affiliation */}
          <div className="flex flex-col items-start gap-4.5">
            <Link href="/" className="flex items-center gap-3.5 text-white no-underline group">
              <span className="shrink-0 w-16 h-16 rounded-[14px] bg-white flex items-center justify-center p-1.5 shadow-xs">
                <Image
                  src="/jmt-logo.png"
                  alt="JMT School logo"
                  width={100}
                  height={110}
                  className="h-[52px] w-auto block object-contain"
                />
              </span>
              <span className="font-extrabold text-lg leading-[26px] text-white tracking-tight">
                JMT Public Higher Secondary<br />School &amp; College
              </span>
            </Link>

            <p className="m-0 max-w-[340px] text-[15px] leading-6 text-[#CFE0D6]">
              Matric and Intermediate examinations under the Ziauddin University Examination Board (ZUEB), in Karachi.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-white/30">
              <span className="w-2 h-2 rounded-full bg-[#C89B3C] block" />
              <span className="text-[13px] leading-[18px] font-semibold tracking-[0.02em] text-white">
                ZUEB-affiliated institution
              </span>
            </div>

            {/* Social Icons (WhatsApp only until verified Facebook/Instagram URLs exist) */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 rounded-full border border-white/35 flex items-center justify-center text-white hover:bg-white/10 hover:border-white transition-colors"
              >
                <svg
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
              </a>

              {SITE.facebookUrl && SITE.facebookUrl !== '#' && (
                <a
                  href={SITE.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-11 h-11 rounded-full border border-white/35 flex items-center justify-center text-white hover:bg-white/10 hover:border-white transition-colors"
                >
                  <svg
                    aria-hidden="true"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              )}

              {SITE.instagramUrl && SITE.instagramUrl !== '#' && (
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-full border border-white/35 flex items-center justify-center text-white hover:bg-white/10 hover:border-white transition-colors"
                >
                  <svg
                    aria-hidden="true"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Mobile links container: 2-column grid on mobile, separate columns on desktop */}
          <div className="grid grid-cols-2 lg:contents gap-6">
            
            {/* Column 2: Quick Links */}
            <div>
              <h3 className="m-0 mb-3.5 sm:mb-4.5 text-xs leading-4 font-bold tracking-[0.12em] uppercase text-[#C89B3C]">
                Quick links
              </h3>
              <ul className="m-0 p-0 list-none flex flex-col gap-0.5 sm:gap-1">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center min-h-[40px] sm:min-h-[32px] text-[15px] leading-6 text-white hover:text-[#CFE0D6] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Programs */}
            <div>
              <h3 className="m-0 mb-3.5 sm:mb-4.5 text-xs leading-4 font-bold tracking-[0.12em] uppercase text-[#C89B3C]">
                Programs
              </h3>
              <ul className="m-0 p-0 list-none flex flex-col gap-0.5 sm:gap-1">
                {programs.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="inline-flex items-center min-h-[40px] sm:min-h-[32px] text-[15px] leading-6 text-white hover:text-[#CFE0D6] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h3 className="m-0 mb-3.5 sm:mb-4.5 text-xs leading-4 font-bold tracking-[0.12em] uppercase text-[#C89B3C]">
              Contact
            </h3>
            <ul className="m-0 p-0 list-none flex flex-col gap-3.5 text-[15px] leading-6 text-white">
              
              <li className="flex items-start gap-3">
                <MapPin className="w-4.5 h-4.5 text-[#C89B3C] shrink-0 mt-1" strokeWidth={1.75} />
                <a
                  href={SITE.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#CFE0D6] transition-colors"
                >
                  {SITE.address}
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-4.5 h-4.5 text-[#C89B3C] shrink-0 mt-1" strokeWidth={1.75} />
                <a
                  href={SITE.phoneHref}
                  className="text-white hover:text-[#CFE0D6] transition-colors font-bold"
                >
                  {SITE.phone}
                </a>
              </li>

              <li className="flex items-start gap-3">
                <span className="shrink-0 mt-1">
                  <svg
                    aria-hidden="true"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C89B3C"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  </svg>
                </span>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#CFE0D6] transition-colors font-semibold"
                >
                  Chat on WhatsApp
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="w-4.5 h-4.5 text-[#C89B3C] shrink-0 mt-1" strokeWidth={1.75} />
                <span className="text-white">
                  {SITE.officeHours}
                </span>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-6 mt-9 sm:mt-14 pt-6 border-t border-white/18 text-sm leading-[22px] text-[#CFE0D6]">
          <p className="m-0">
            &copy; 2026 JMT Public Higher Secondary School &amp; College. All rights reserved.
          </p>
          <p className="m-0 text-xs sm:text-sm">
            Exam rules and dates are set by the Ziauddin University Examination Board.
          </p>
        </div>

      </div>
    </footer>
  );
}

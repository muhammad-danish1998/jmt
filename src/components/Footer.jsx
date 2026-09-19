'use client';

import React from 'react';
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  MessageCircle,
} from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About Us', href: '/#about' },
    { name: 'Eligibility Criteria', href: '/#eligibility' },
    { name: 'Why Choose JMT', href: '/#why-us' },
    { name: 'Student Reviews', href: '/#testimonials' },
    { name: 'Latest Blogs', href: '/blogs' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Contact Us', href: '/#contact' },
  ];

  const programs = [
    { name: 'Ziauddin Board (ZUEB)', href: '/#eligibility' },
    { name: 'Matric Board (SSC I & II)', href: '/#eligibility' },
    { name: 'Intermediate (FSC Pre-Med / Eng)', href: '/#eligibility' },
    { name: 'Commerce (I.Com)', href: '/#eligibility' },
    { name: 'General Science (ICS)', href: '/#eligibility' },
    { name: 'Combine Gap (SSC & HSSC)', href: '/#eligibility' },
  ];

  return (
    <footer id="colophon" className="bg-[#0b132b] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Institution Overview */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="inline-flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-600 to-blue-800 text-white flex items-center justify-center shadow-md">
                <GraduationCap className="w-6 h-6 text-amber-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white leading-none">
                  JMT Public
                </span>
                <span className="text-xs text-slate-400 font-medium mt-0.5">
                  School &amp; College Karachi
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              JMT Public Higher Secondary School &amp; College is a trusted educational institution offering quality Secondary and Higher Secondary education under the <strong>Ziauddin Examination Board (ZUEB)</strong> in Karachi. We are committed to academic excellence, experienced faculty, and a supportive learning environment.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://wa.me/923424049132"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Academic Programs
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {programs.map((prog) => (
                <li key={prog.name}>
                  <a
                    href={prog.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                    <span>{prog.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>House 381, Street 9, Qazzafi Town, Quaidabad, Bin Qasim, Malir, Karachi</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:03424049132" className="hover:text-white transition-colors font-medium">
                  0342 4049132
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:danishbrothers1998@gmail.com" className="hover:text-white transition-colors break-all">
                  danishbrothers1998@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Office Hours</strong>
                  <span>Mon - Sat: 9:00 am till 5:00 pm</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 JMT Public Higher Secondary School &amp; College. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-slate-400 transition-colors">
              About
            </a>
            <span>|</span>
            <a href="#contact" className="hover:text-slate-400 transition-colors">
              Contact
            </a>
            <span>|</span>
            <a href="/admin" className="hover:text-slate-300 transition-colors font-medium text-slate-400">
              Admin Portal
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

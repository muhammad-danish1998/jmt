'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, MapPin, Clock, MessageCircle, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { SITE } from '../lib/site';

const INTEREST_OPTIONS = [
  'Combined SSC (Gap)',
  'Combined HSSC (Gap)',
  'Grade IX (SSC Part I)',
  'Grade XI (HSSC Part I)',
  'Grade X (SSC Part II)',
  'Grade XII (HSSC Part II)',
  'Other / Not sure',
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'Combined SSC (Gap)',
    year: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage('Please fill in your name and WhatsApp number.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentName: formData.name.trim(),
          contactNumber: formData.phone.trim(),
          classInterested: formData.interest,
          message: formData.year.trim()
            ? `Last exam year: ${formData.year.trim()}${formData.message.trim() ? ` | ${formData.message.trim()}` : ''}`
            : (formData.message.trim() || 'Admissions Enquiry via Contact Form'),
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit enquiry. Please try again.');
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error('Contact form submission error:', err);
      setErrorMessage(err.message || 'Something went wrong. Please try again or chat on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative w-full bg-[#FAFAF7] text-[#17202A] overflow-hidden scroll-mt-20 sm:scroll-mt-24 pt-14 sm:pt-20 lg:pt-24">
      {/* Anchor for external links to enquiry */}
      <span id="enquiry" className="sr-only" />

      {/* Subtle Ambient Background Gradient Orbs */}
      <div
        className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#EAF2ED] blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-[#C89B3C]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 lg:px-16 pb-14 sm:pb-20 lg:pb-24 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EAF2ED] border border-[#CFE0D6] shadow-xs">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C89B3C] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C89B3C]" />
            </span>
            <p className="m-0 text-xs sm:text-[13px] leading-none font-bold tracking-[0.06em] uppercase text-[#0B3D26]">
              Admissions Desk &amp; Campus
            </p>
          </div>

          <h2 className="m-0 mt-4 sm:mt-5 text-[28px] sm:text-[36px] lg:text-[42px] leading-[36px] sm:leading-[44px] lg:leading-[50px] font-extrabold tracking-[-0.015em] text-[#17202A]">
            Talk to our{' '}
            <span className="text-[#0B3D26] bg-[#EAF2ED] px-2.5 py-0.5 rounded-2xl border border-[#CFE0D6]/80 shadow-xs inline-block my-1">
              admissions team
            </span>
          </h2>

          <p className="m-0 mt-3 sm:mt-4 max-w-[560px] text-base sm:text-lg leading-[26px] sm:leading-[29px] text-[#3A4551] font-medium">
            Message us on WhatsApp for the fastest reply, or visit our campus in Quaidabad, Malir, Karachi.
          </p>
        </div>

        {/* 2-Column Contact Info + Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 sm:gap-8 items-start mt-8 sm:mt-12 lg:mt-14">
          
          {/* Left Column: WhatsApp Card + Info Rows + Documents Note */}
          <div className="reveal flex flex-col gap-4 sm:gap-5">
            
            {/* Fastest Reply WhatsApp Card — Smarty-styled rounded container */}
            <div className="flex flex-col gap-4 p-6 sm:p-8 rounded-[28px] sm:rounded-[34px] bg-gradient-to-br from-[#0B3D26] to-[#2E6B4A] text-white shadow-xl border border-white/10 relative overflow-hidden">
              <div
                className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-[#C89B3C]/15 blur-2xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 w-fit">
                <span className="w-2 h-2 rounded-full bg-[#C89B3C] animate-pulse" />
                <p className="m-0 text-xs font-bold tracking-[0.06em] uppercase text-[#C89B3C]">
                  Fastest reply
                </p>
              </div>

              <h3 className="m-0 text-2xl sm:text-[28px] leading-8 sm:leading-9 font-extrabold text-white">
                Chat with admissions on WhatsApp
              </h3>

              <p className="m-0 text-sm sm:text-[15px] leading-6 text-[#CFE0D6] font-medium">
                Send the year of your last exam and your age. Our counselor will confirm your exact category in minutes.
              </p>

              <a
                href={SITE.whatsappApplyMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 flex items-center justify-center gap-2.5 h-14 px-6 rounded-[14px_30px_14px_30px] bg-white hover:bg-[#EAF2ED] text-[#0B3D26] text-base font-bold transition-all shadow-md active:scale-98"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Contact Details Card */}
            <div className="px-5 sm:px-7 py-2 rounded-[28px] bg-white border border-[#CFE0D6] shadow-sm">
              
              {/* Call Admissions Row */}
              <div className="flex items-start gap-4 py-4.5">
                <span className="w-11 h-11 rounded-2xl bg-[#EAF2ED] text-[#0B3D26] flex items-center justify-center shrink-0 shadow-2xs">
                  <Phone className="w-5 h-5" />
                </span>
                <div className="flex flex-col gap-0.5 min-w-0 text-left">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5E6873]">Call admissions desk</span>
                  <span className="text-base font-bold text-[#17202A]">{SITE.phone}</span>
                  <a
                    href={SITE.phoneHref}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3D26] hover:text-[#2E6B4A] transition-colors mt-0.5"
                  >
                    <span>Call helpline</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C89B3C]" />
                  </a>
                </div>
              </div>

              {/* Campus Address Row */}
              <div className="border-t border-[#E5E7EB] flex items-start gap-4 py-4.5">
                <span className="w-11 h-11 rounded-2xl bg-[#EAF2ED] text-[#0B3D26] flex items-center justify-center shrink-0 shadow-2xs">
                  <MapPin className="w-5 h-5" />
                </span>
                <div className="flex flex-col gap-0.5 min-w-0 text-left">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5E6873]">Campus address</span>
                  <span className="text-sm sm:text-base font-bold text-[#17202A] leading-snug">
                    {SITE.address}
                  </span>
                  <a
                    href={SITE.mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3D26] hover:text-[#2E6B4A] transition-colors mt-0.5"
                  >
                    <span>Get Google Maps directions</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C89B3C]" />
                  </a>
                </div>
              </div>

              {/* Office Hours Row */}
              <div className="border-t border-[#E5E7EB] flex items-start gap-4 py-4.5">
                <span className="w-11 h-11 rounded-2xl bg-[#EAF2ED] text-[#0B3D26] flex items-center justify-center shrink-0 shadow-2xs">
                  <Clock className="w-5 h-5" />
                </span>
                <div className="flex flex-col gap-0.5 min-w-0 text-left">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5E6873]">Office hours</span>
                  <span className="text-base font-bold text-[#17202A]">
                    {SITE.officeHours}
                  </span>
                  <span className="text-xs text-[#5E6873] font-medium">Sunday closed</span>
                </div>
              </div>

            </div>

            {/* Document Reminder Tip Box */}
            <div className="flex items-start gap-3 p-4 sm:p-4.5 rounded-2xl bg-[#EAF2ED] border border-[#CFE0D6] shadow-2xs">
              <span className="shrink-0 mt-0.5 text-[#0B3D26]">
                <CheckCircle2 className="w-5 h-5 text-[#2E6B4A]" />
              </span>
              <p className="m-0 text-sm leading-[22px] text-[#17202A] font-medium">
                <strong className="font-bold text-[#0B3D26]">Visiting for admission?</strong> Please bring your original B-Form/CNIC and past transcript documents.{' '}
                <Link
                  href="/eligibility"
                  className="font-bold text-[#0B3D26] hover:underline"
                >
                  See full checklist
                </Link>
              </p>
            </div>

          </div>

          {/* Right Column: Admission Enquiry Form Card */}
          <div className="reveal p-6 sm:p-10 rounded-[28px] sm:rounded-[36px] bg-white border border-[#CFE0D6] shadow-xl" style={{ '--i': 1 }}>
            
            {/* Form Title & SLA Chip */}
            <div className="flex flex-col items-start gap-2.5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2ED] border border-[#CFE0D6]">
                <span className="w-2 h-2 rounded-full bg-[#C89B3C]" />
                <p className="m-0 text-xs font-bold tracking-[0.06em] uppercase text-[#0B3D26]">
                  Online Admission Form
                </p>
              </div>

              <h3 className="m-0 text-2xl sm:text-[28px] leading-snug font-extrabold text-[#17202A]">
                Submit your enquiry
              </h3>

              <p className="m-0 text-xs sm:text-[13px] font-semibold text-[#5E6873]">
                Our academic counselor reviews your submission and replies within 24 hours.
              </p>
            </div>

            {/* Submission Status Alerts */}
            {isSubmitted ? (
              <div className="my-8 p-6 rounded-2xl bg-[#EAF2ED] border border-[#CFE0D6] text-center flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#0B3D26] text-[#C89B3C] flex items-center justify-center font-bold text-xl shadow-xs">
                  ✓
                </div>
                <h4 className="m-0 text-xl font-bold text-[#17202A]">
                  Enquiry Received!
                </h4>
                <p className="m-0 text-sm leading-6 text-[#3A4551] max-w-sm font-medium">
                  Thank you, <strong>{formData.name}</strong>. Our admissions counselor will review your eligibility and message you on WhatsApp shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      interest: 'Combined SSC (Gap)',
                      year: '',
                      message: '',
                    });
                  }}
                  className="mt-2 inline-flex items-center justify-center h-11 px-5 rounded-full border border-[#0B3D26] text-[#0B3D26] text-sm font-bold hover:bg-[#0B3D26]/5 cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-4.5 mt-6">
                
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm leading-5 flex items-start gap-2.5">
                    <span className="font-bold">Notice:</span>
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* 2-Column Fields Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Full Name */}
                  <label className="flex flex-col gap-1.5 text-left">
                    <span className="text-xs font-bold text-[#17202A] uppercase tracking-wider">
                      Full name <span className="text-[#B42318]">*</span>
                    </span>
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ahmed Ali"
                      required
                      className="h-12 w-full px-4 rounded-xl border border-[#CFE0D6] bg-[#FAFAF7] text-[#17202A] text-sm font-medium placeholder:text-[#8291A3] focus:border-[#0B3D26] focus:bg-white focus:outline-hidden transition-colors shadow-2xs"
                    />
                  </label>

                  {/* WhatsApp Number */}
                  <label className="flex flex-col gap-1.5 text-left">
                    <span className="text-xs font-bold text-[#17202A] uppercase tracking-wider">
                      WhatsApp number <span className="text-[#B42318]">*</span>
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0300 0000000"
                      required
                      className="h-12 w-full px-4 rounded-xl border border-[#CFE0D6] bg-[#FAFAF7] text-[#17202A] text-sm font-medium placeholder:text-[#8291A3] focus:border-[#0B3D26] focus:bg-white focus:outline-hidden transition-colors shadow-2xs"
                    />
                  </label>

                  {/* Class / Interest Dropdown */}
                  <label className="flex flex-col gap-1.5 text-left">
                    <span className="text-xs font-bold text-[#17202A] uppercase tracking-wider">
                      Interested In <span className="text-[#B42318]">*</span>
                    </span>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="h-12 w-full px-3.5 rounded-xl border border-[#CFE0D6] bg-[#FAFAF7] text-[#17202A] text-sm font-medium focus:border-[#0B3D26] focus:bg-white focus:outline-hidden transition-colors shadow-2xs"
                    >
                      {INTEREST_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </label>

                  {/* Pass Year */}
                  <label className="flex flex-col gap-1.5 text-left">
                    <span className="text-xs font-bold text-[#17202A] uppercase tracking-wider">
                      Last Exam Year <span className="text-xs font-normal text-[#5E6873]">(optional)</span>
                    </span>
                    <input
                      type="text"
                      inputMode="numeric"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      placeholder="e.g. 2023"
                      className="h-12 w-full px-4 rounded-xl border border-[#CFE0D6] bg-[#FAFAF7] text-[#17202A] text-sm font-medium placeholder:text-[#8291A3] focus:border-[#0B3D26] focus:bg-white focus:outline-hidden transition-colors shadow-2xs"
                    />
                  </label>

                </div>

                {/* Message Field */}
                <label className="flex flex-col gap-1.5 text-left">
                  <span className="text-xs font-bold text-[#17202A] uppercase tracking-wider">
                    Message / Questions <span className="text-xs font-normal text-[#5E6873]">(optional)</span>
                  </span>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your previous subjects or specific questions..."
                    className="w-full h-24 p-3.5 rounded-xl border border-[#CFE0D6] bg-[#FAFAF7] text-[#17202A] text-sm font-medium placeholder:text-[#8291A3] resize-none focus:border-[#0B3D26] focus:bg-white focus:outline-hidden transition-colors shadow-2xs"
                  />
                </label>

                {/* Smarty Playful Asymmetric Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 inline-flex items-center justify-center gap-2.5 h-14 w-full rounded-[14px_30px_14px_30px] bg-[#0B3D26] hover:bg-[#082d1c] active:scale-98 text-white text-base font-bold transition-all shadow-[0_4px_16px_rgba(11,61,38,0.25)] hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting Enquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#C89B3C]" />
                      <span>Submit Admission Enquiry</span>
                    </>
                  )}
                </button>

                <p className="m-0 text-xs leading-5 text-[#5E6873] text-center font-medium">
                  We respect your privacy. Prefer instant reply?{' '}
                  <a
                    href={SITE.whatsappApplyMessage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#0B3D26] hover:underline"
                  >
                    Chat on WhatsApp
                  </a>
                </p>

              </form>
            )}

          </div>

        </div>

        {/* Campus Location Map & Directions Card */}
        <div className="flex flex-col gap-4 mt-10 sm:mt-14">
          
          <div className="relative overflow-hidden h-[260px] sm:h-[340px] lg:h-[380px] rounded-[28px] sm:rounded-[36px] border border-[#CFE0D6] bg-[#EAEFEA] shadow-md">
            <iframe
              title="JMT School Campus Location Map"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3314.024309388065!2d67.22149307537047!3d24.848751977936953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDUwJzU1LjUiTiA2N8KwMTMnMjYuNiJF!5e0!3m2!1sen!2s!4v1788024660199!5m2!1sen!2s"
              className="w-full h-full border-0 block"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-5 sm:px-7 sm:py-6 rounded-2xl bg-white border border-[#CFE0D6] shadow-xs">
            <div className="flex items-start gap-4 text-left">
              <span className="w-11 h-11 rounded-2xl bg-[#EAF2ED] text-[#0B3D26] flex items-center justify-center shrink-0 shadow-2xs">
                <MapPin className="w-5 h-5" />
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="text-base font-bold text-[#17202A]">
                  {SITE.name}
                </span>
                <span className="text-xs sm:text-sm text-[#5E6873] font-medium">
                  {SITE.address}
                </span>
              </div>
            </div>

            <a
              href={SITE.mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center justify-center gap-2.5 h-12 px-6 rounded-full border-2 border-[#0B3D26] text-[#0B3D26] hover:bg-[#EAF2ED]/60 text-sm font-bold transition-all"
            >
              <MapPin className="w-4 h-4 text-[#C89B3C]" />
              <span>Get Directions</span>
            </a>
          </div>

        </div>

      </div>

      {/* Smarty Organic Wave Divider transitioning into Footer (#0B3D26) */}
      <div className="w-full overflow-hidden leading-none -mb-[1px]" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-12 lg:h-16 text-[#0B3D26] block"
        >
          <path
            d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}

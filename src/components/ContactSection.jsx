'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
    <section id="contact" className="w-full bg-[#FAFAF7] text-[#17202A] overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      {/* Anchor for external links to enquiry */}
      <span id="enquiry" className="sr-only" />

      <div className="max-w-[1440px] mx-auto box-border px-4 sm:px-8 lg:px-16 py-14 sm:py-20 lg:py-24">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="w-5 sm:w-7 h-[2px] bg-[#C89B3C] block" />
            <p className="m-0 text-xs sm:text-[13px] leading-5 font-bold tracking-[0.1em] sm:tracking-[0.12em] uppercase text-[#2E6B4A]">
              Contact
            </p>
            <span className="w-5 sm:w-7 h-[2px] bg-[#C89B3C] block" />
          </div>

          <h2 className="m-0 mt-3 sm:mt-4 text-[28px] sm:text-[32px] lg:text-[36px] leading-[36px] sm:leading-[40px] lg:leading-[44px] font-extrabold tracking-[-0.01em] text-[#17202A]">
            Talk to our admissions team
          </h2>

          <p className="m-0 mt-2.5 sm:mt-3 max-w-[560px] text-base sm:text-[17px] leading-[26px] sm:leading-7 text-[#3A4551]">
            Message us on WhatsApp for the fastest reply, or visit our campus in Malir, Karachi.
          </p>
        </div>

        {/* 2-Column Contact Info + Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 sm:gap-8 items-start mt-8 sm:mt-12 lg:mt-14">
          
          {/* Left Column: WhatsApp Card + Info Rows + Documents Note */}
          <div className="reveal flex flex-col gap-4 sm:gap-5">
            
            {/* Fastest Reply WhatsApp Card */}
            <div className="flex flex-col gap-4 p-6 sm:p-8 rounded-2xl bg-[#0B3D26] text-white">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="w-6 h-[2px] bg-[#C89B3C] block" />
                <p className="m-0 text-xs sm:text-[13px] leading-5 font-bold tracking-[0.1em] sm:tracking-[0.12em] uppercase text-[#C89B3C]">
                  Fastest reply
                </p>
              </div>

              <h3 className="m-0 text-2xl sm:text-[28px] leading-8 sm:leading-9 font-extrabold text-white">
                Chat with admissions on WhatsApp
              </h3>

              <p className="m-0 text-sm sm:text-[15px] leading-6 text-[#CFE0D6]">
                Send the year of your last exam and your age. We confirm your category.
              </p>

              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn mt-1 flex items-center justify-center gap-2.5 h-14 px-6 rounded-lg bg-white text-[#0B3D26] text-base leading-5 font-bold transition-all shadow-xs"
              >
                <svg
                  aria-hidden="true"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0B3D26"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Contact Details Card (Email row hidden per requirement) */}
            <div className="px-5 sm:px-7 py-1 rounded-2xl bg-white border border-[#E5E7EB]">
              
              {/* Call Admissions Row */}
              <div className="flex items-start gap-4 py-5">
                <span className="w-11 h-11 rounded-10 bg-[#EAF2ED] flex items-center justify-center shrink-0">
                  <svg
                    aria-hidden="true"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0B3D26"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-sm leading-5 text-[#5E6873]">Call admissions</span>
                  <span className="text-base leading-6 font-bold text-[#17202A]">{SITE.phone}</span>
                  <a
                    href={SITE.phoneTel}
                    className="btn inline-flex items-center gap-1.5 min-h-[44px] text-sm leading-5 font-bold text-[#0B3D26] hover:underline"
                  >
                    <span>Call now</span>
                    <svg
                      aria-hidden="true"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0B3D26"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="arrow"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Campus Address Row */}
              <div className="border-t border-[#E5E7EB] flex items-start gap-4 py-5">
                <span className="w-11 h-11 rounded-10 bg-[#EAF2ED] flex items-center justify-center shrink-0">
                  <svg
                    aria-hidden="true"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0B3D26"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-sm leading-5 text-[#5E6873]">Campus address</span>
                  <span className="text-base leading-6 font-bold text-[#17202A]">
                    {SITE.address}
                  </span>
                  <a
                    href={SITE.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn inline-flex items-center gap-1.5 min-h-[44px] text-sm leading-5 font-bold text-[#0B3D26] hover:underline"
                  >
                    <span>Get directions</span>
                    <svg
                      aria-hidden="true"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0B3D26"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="arrow"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Note: Email row is hidden because school email is unknown */}

              {/* Office Hours Row */}
              <div className="border-t border-[#E5E7EB] flex items-start gap-4 py-5">
                <span className="w-11 h-11 rounded-10 bg-[#EAF2ED] flex items-center justify-center shrink-0">
                  <svg
                    aria-hidden="true"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0B3D26"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </span>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-sm leading-5 text-[#5E6873]">Office hours</span>
                  <span className="text-base leading-6 font-bold text-[#17202A]">
                    {SITE.officeHours}
                  </span>
                </div>
              </div>

            </div>

            {/* Document Reminder Tip Box */}
            <div className="flex items-start gap-3 p-4 sm:p-4.5 rounded-xl bg-[#EAF2ED] border border-[#CFE0D6]">
              <span className="shrink-0 mt-0.5">
                <svg
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0B3D26"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="m9 15 2 2 4-4" />
                </svg>
              </span>
              <p className="m-0 text-sm leading-[22px] text-[#17202A]">
                <strong className="font-bold">Visiting for admission?</strong> Bring your documents. They depend on your category.{' '}
                <Link
                  href="/eligibility"
                  className="btn inline-flex items-center gap-1 font-bold text-[#0B3D26] hover:underline"
                >
                  <span>See Eligibility</span>
                  <svg
                    aria-hidden="true"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0B3D26"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="arrow"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </p>
            </div>

          </div>

          {/* Right Column: Admission Enquiry Form Card */}
          <div className="reveal p-6 sm:p-10 rounded-2xl bg-white border border-[#E5E7EB]" style={{ '--i': 1 }}>
            
            {/* Form Title & SLA Chip */}
            <div className="flex flex-col items-start gap-3">
              <div className="flex items-center gap-3">
                <span className="w-6 h-[2px] bg-[#C89B3C] block" />
                <p className="m-0 text-xs sm:text-[13px] leading-5 font-bold tracking-[0.1em] sm:tracking-[0.12em] uppercase text-[#2E6B4A]">
                  Send us a message
                </p>
              </div>

              <h3 className="m-0 text-2xl sm:text-[28px] leading-8 sm:leading-9 font-extrabold text-[#17202A]">
                Tell us what you need
              </h3>

              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EAF2ED] border border-[#CFE0D6] text-xs sm:text-[13px] leading-[18px] font-semibold text-[#17202A]">
                <span className="w-2 h-2 rounded-full bg-[#C89B3C] block" />
                We reply within 24 hours
              </span>
            </div>

            {/* Submission Status Alerts */}
            {isSubmitted ? (
              <div className="my-8 p-6 rounded-xl bg-[#EAF2ED] border border-[#CFE0D6] text-center flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#0B3D26] text-white flex items-center justify-center">
                  <svg
                    aria-hidden="true"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h4 className="m-0 text-xl leading-7 font-bold text-[#17202A]">
                  Enquiry Received!
                </h4>
                <p className="m-0 text-sm leading-6 text-[#3A4551] max-w-sm">
                  Thank you, <strong>{formData.name}</strong>. Our admissions counselor will review your details and contact you on WhatsApp within 24 hours.
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
                  className="btn mt-2 inline-flex items-center justify-center h-11 px-5 rounded-lg border border-[#0B3D26] text-[#0B3D26] text-sm font-bold hover:bg-[#0B3D26]/5"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5 mt-6">
                
                {errorMessage && (
                  <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm leading-5 flex items-start gap-2.5">
                    <svg
                      aria-hidden="true"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0 mt-0.5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" x2="12" y1="8" y2="12" />
                      <line x1="12" x2="12.01" y1="16" y2="16" />
                    </svg>
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* 2-Column Fields Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Full Name */}
                  <label className="flex flex-col gap-1.5">
                    <span className="text-sm leading-5 font-semibold text-[#17202A]">
                      Full name <span className="text-[#B42318]" aria-hidden="true">*</span>
                    </span>
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ahmed Ali"
                      required
                      className="h-12 w-full px-3.5 rounded-lg border border-[#8291A3] bg-white text-[#17202A] text-sm leading-6 placeholder:text-[#6B7580] focus:border-[#0B3D26] focus:outline-hidden"
                    />
                  </label>

                  {/* WhatsApp Number */}
                  <label className="flex flex-col gap-1.5">
                    <span className="text-sm leading-5 font-semibold text-[#17202A]">
                      WhatsApp number <span className="text-[#B42318]" aria-hidden="true">*</span>
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0300 0000000"
                      required
                      className="h-12 w-full px-3.5 rounded-lg border border-[#8291A3] bg-white text-[#17202A] text-sm leading-6 placeholder:text-[#6B7580] focus:border-[#0B3D26] focus:outline-hidden"
                    />
                  </label>

                  {/* Class / Interest Dropdown */}
                  <label className="flex flex-col gap-1.5">
                    <span className="text-sm leading-5 font-semibold text-[#17202A]">
                      I am interested in <span className="text-[#B42318]" aria-hidden="true">*</span>
                    </span>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="h-12 w-full px-3.5 rounded-lg border border-[#8291A3] bg-white text-[#17202A] text-sm leading-6 focus:border-[#0B3D26] focus:outline-hidden"
                    >
                      {INTEREST_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </label>

                  {/* Pass Year */}
                  <label className="flex flex-col gap-1.5">
                    <span className="text-sm leading-5 font-semibold text-[#17202A]">
                      Year you passed your last exam{' '}
                      <span className="font-normal text-[#5E6873]">(optional)</span>
                    </span>
                    <input
                      type="text"
                      inputMode="numeric"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      placeholder="e.g. 2023"
                      className="h-12 w-full px-3.5 rounded-lg border border-[#8291A3] bg-white text-[#17202A] text-sm leading-6 placeholder:text-[#6B7580] focus:border-[#0B3D26] focus:outline-hidden"
                    />
                  </label>

                </div>

                {/* Message Field */}
                <label className="flex flex-col gap-1.5">
                  <span className="text-sm leading-5 font-semibold text-[#17202A]">
                    Message <span className="font-normal text-[#5E6873]">(optional)</span>
                  </span>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your question here"
                    className="w-full h-28 p-3.5 rounded-lg border border-[#8291A3] bg-white text-[#17202A] text-sm leading-6 placeholder:text-[#6B7580] resize-none focus:border-[#0B3D26] focus:outline-hidden"
                  />
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn inline-flex items-center justify-center gap-2.5 h-14 w-full rounded-lg bg-[#0B3D26] hover:bg-[#082d1c] active:scale-98 text-white text-base leading-5 font-bold transition-all shadow-xs disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Sending Enquiry...</span>
                  ) : (
                    <>
                      <svg
                        aria-hidden="true"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                        <path d="m21.854 2.147-10.94 10.939" />
                      </svg>
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <p className="m-0 text-xs sm:text-[13px] leading-5 text-[#5E6873]">
                  We use your details only to contact you about admission. Prefer to chat?{' '}
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#0B3D26] hover:underline"
                  >
                    Message us on WhatsApp
                  </a>
                </p>

              </form>
            )}

          </div>

        </div>

        {/* Campus Map & Navigation Strip */}
        <div className="flex flex-col gap-4 mt-8 sm:mt-12">
          
          {/* Lazy-loaded Google Maps Iframe */}
          <div className="relative overflow-hidden h-[240px] sm:h-[320px] lg:h-[380px] rounded-2xl border border-[#E5E7EB] bg-[#EAEFEA]">
            <iframe
              title="JMT School Campus Location Map"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3314.024309388065!2d67.22149307537047!3d24.848751977936953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDUwJzU1LjUiTiA2N8KwMTMnMjYuNiJF!5e0!3m2!1sen!2s!4v1788024660199!5m2!1sen!2s"
              className="w-full h-full border-0 block"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          {/* Directions & School Badge Under Map */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-5 sm:px-7 sm:py-6 rounded-2xl bg-white border border-[#E5E7EB]">
            <div className="flex items-start gap-4">
              <span className="w-11 h-11 rounded-10 bg-[#EAF2ED] flex items-center justify-center shrink-0">
                <svg
                  aria-hidden="true"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0B3D26"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="text-base leading-6 font-bold text-[#17202A]">
                  {SITE.name}
                </span>
                <span className="text-sm sm:text-[15px] leading-6 text-[#5E6873]">
                  {SITE.address}
                </span>
              </div>
            </div>

            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn shrink-0 inline-flex items-center justify-center gap-2.5 h-13 px-6 rounded-lg border-[1.5px] border-[#0B3D26] text-[#0B3D26] hover:bg-[#0B3D26]/5 active:scale-98 text-[15px] leading-5 font-bold transition-all bg-transparent"
            >
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0B3D26"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
              </svg>
              <span>Get Directions</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

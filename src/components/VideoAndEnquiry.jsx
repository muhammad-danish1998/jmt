'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Play,
  X,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ExternalLink,
  Video,
  User,
  MessageSquare,
} from 'lucide-react';

export default function VideoAndEnquiry() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    classInterested: 'Class IX (SSC I)',
    contactNumber: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.studentName || !formData.contactNumber) {
      setErrorMessage('Please fill out your Name and Contact Number.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentName: formData.studentName,
          parentName: formData.fatherName || formData.studentName,
          classInterested: formData.classInterested,
          contactNumber: formData.contactNumber,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit enquiry. Please try again.');
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMessage(err.message || 'Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200 relative scroll-mt-20">
      {/* Anchor for enquiry target */}
      <span id="enquiry" className="absolute -top-20 opacity-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Head */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-700">
            <Mail className="w-4 h-4" />
            <span>Get In Touch</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact Us &amp; Find Our Campus
          </h2>
          <div className="w-16 h-1 bg-blue-900 mx-auto rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base italic">
            "We'd love to hear from you. Reach out for admissions, programs, or any enquiries — our team responds promptly."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: 4 Info Cards + Google Map + Campus Video Walkthrough */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* 4 Info Cards matching Reference Site */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Info Card 1: Address (Purple) */}
              <div className="bg-white rounded-2xl p-4.5 border border-slate-200 shadow-xs flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-xs font-bold text-slate-900 block">Our Address</strong>
                  <span className="text-xs text-slate-600 leading-snug">
                    House 381, Street 9, Qazzafi Town, Quaidabad, Bin Qasim, Malir, Karachi
                  </span>
                </div>
              </div>

              {/* Info Card 2: Call Us (Green) */}
              <div className="bg-white rounded-2xl p-4.5 border border-slate-200 shadow-xs flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-xs font-bold text-slate-900 block">Call Us</strong>
                  <a href="tel:03424049132" className="text-xs text-slate-700 hover:text-blue-900 font-bold block mt-0.5">
                    0342-4049132
                  </a>
                </div>
              </div>

              {/* Info Card 3: Email Us (Amber) */}
              <div className="bg-white rounded-2xl p-4.5 border border-slate-200 shadow-xs flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-xs font-bold text-slate-900 block">Email Us</strong>
                  <a href="mailto:danishbrothers1998@gmail.com" className="text-xs text-slate-600 hover:text-blue-900 block break-all mt-0.5">
                    danishbrothers1998@gmail.com
                  </a>
                </div>
              </div>

              {/* Info Card 4: Office Hours (Pink) */}
              <div className="bg-white rounded-2xl p-4.5 border border-slate-200 shadow-xs flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-xs font-bold text-slate-900 block">Office Hours</strong>
                  <span className="text-xs text-slate-600 block mt-0.5">
                    Mon - Sat: 9:00 AM - 5:00 PM
                  </span>
                </div>
              </div>

            </div>

            {/* Campus Video Player Preview */}
            <div
              onClick={() => setIsPlaying(true)}
              className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-video shadow-md border border-slate-200 group flex items-center justify-center cursor-pointer"
            >
              <video
                src="/video.mp4#t=0.5"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-all duration-500"
                preload="metadata"
                muted
                playsInline
              />

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPlaying(true);
                }}
                className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 group-hover:bg-white text-slate-900 flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300 focus:outline-none"
                aria-label="Play Campus Tour Video"
              >
                <div className="absolute inset-0 rounded-full bg-white/40 animate-ping"></div>
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-slate-900 translate-x-0.5" />
              </button>

              <div className="absolute bottom-3 left-3 right-3 z-10 bg-slate-950/75 backdrop-blur-xs p-2.5 rounded-lg flex items-center justify-between text-white text-xs">
                <span className="flex items-center gap-1.5">
                  <Video className="w-3.5 h-3.5 text-amber-400" />
                  <span>Campus Video Walkthrough</span>
                </span>
                <span className="font-bold text-blue-300">Click to Watch in HD</span>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-200 border border-slate-300 h-52 w-full shadow-inner group">
              <iframe
                title="JMT School Campus Location Map"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3314.024309388065!2d67.22149307537047!3d24.848751977936953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDUwJzU1LjUiTiA2N8KwMTMnMjYuNiJF!5e1!3m2!1sen!2s!4v1788024660199!5m2!1sen!2s"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <a
                href="https://maps.google.com/?q=24.848751977936953,67.22149307537047"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 bg-white/95 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 hover:bg-white"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3 text-blue-700" />
              </a>
            </div>

          </div>

          {/* RIGHT: Contact Form matching Reference Site */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="pb-4 border-b border-slate-100">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-700">
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Us a Message</span>
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">
                  We Reply Within 24 Hours
                </h3>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900">Enquiry Submitted!</h4>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you! Our admission counsellor will reach out to <strong className="text-slate-900">{formData.contactNumber}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        studentName: '',
                        fatherName: '',
                        classInterested: 'Class IX (SSC I)',
                        contactNumber: '',
                        email: '',
                        message: '',
                      });
                    }}
                    className="inline-block text-xs font-bold text-blue-900 underline hover:text-blue-950 mt-2"
                  >
                    Submit another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {errorMessage && (
                    <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-lg flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          name="studentName"
                          value={formData.studentName}
                          onChange={handleChange}
                          placeholder="e.g. Ahmed Ali"
                          required
                          className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          name="contactNumber"
                          value={formData.contactNumber}
                          onChange={handleChange}
                          placeholder="0300 0000000"
                          required
                          className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Class Interested
                      </label>
                      <select
                        name="classInterested"
                        value={formData.classInterested}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 font-medium"
                      >
                        <option value="Class IX (SSC I)">Class IX (SSC Part I)</option>
                        <option value="Class X (SSC II)">Class X (SSC Part II)</option>
                        <option value="Class XI (HSSC I)">Class XI (HSSC Part I)</option>
                        <option value="Class XII (HSSC II)">Class XII (HSSC Part II)</option>
                        <option value="Combine Gap SSC">Combine Gap SSC (I &amp; II)</option>
                        <option value="Combine Gap HSSC">Combine Gap HSSC (I &amp; II)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Message <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Write your enquiry or question here..."
                        required
                        className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 resize-none"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-shine w-full bg-gradient-to-r from-blue-900 to-indigo-900 hover:from-blue-950 hover:to-indigo-950 text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-amber-400" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>

      {/* Full HD Video Modal */}
      {isPlaying && (
        <div
          onClick={() => setIsPlaying(false)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-800"
          >
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors shadow-md"
              aria-label="Close Video"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video w-full bg-black flex items-center justify-center">
              <video
                className="w-full h-full object-contain"
                src="/video.mp4"
                controls
                autoPlay
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

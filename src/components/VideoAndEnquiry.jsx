'use client';

import React, { useState } from 'react';
import { Play, Send, CheckCircle2, Video, Sparkles, X, Loader2, AlertCircle } from 'lucide-react';

export default function VideoAndEnquiry() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    age: '',
    classInterested: '',
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

    if (!formData.studentName || !formData.contactNumber || !formData.classInterested) {
      setErrorMessage('Please fill out the required fields (Student Name, Contact Number, and Class).');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          studentName: formData.studentName,
          parentName: formData.fatherName || formData.studentName,
          age: formData.age,
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
    <section id="enquiry" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Split: Campus Video (Left) & Enquiry Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* LEFT: Watch Our Campus Video */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Video className="w-6 h-6 text-blue-900" />
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Watch Our Campus Video
                </h3>
              </div>
              <p className="mt-3 text-slate-600 text-sm sm:text-base">
                Take a 2-minute virtual walkthrough of our academic wings, science labs, libraries, and athletic arenas.
              </p>
            </div>

            {/* Video Player Container */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-video shadow-md border border-slate-200 group flex items-center justify-center flex-grow">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80"
                alt="Campus Video Thumbnail"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
              />

              {/* Pulsing Play Button */}
              <button
                onClick={() => setIsPlaying(true)}
                className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/90 group-hover:bg-white text-slate-900 flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300 focus:outline-none"
                aria-label="Play Campus Tour Video"
              >
                <div className="absolute inset-0 rounded-full bg-white/40 animate-ping"></div>
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-slate-900 translate-x-1" />
              </button>

              <div className="absolute bottom-4 left-4 right-4 z-10 bg-slate-950/60 backdrop-blur-xs p-3 rounded-lg flex items-center justify-between text-white text-xs">
                <span>Campus Tour • 3:45 mins</span>
                <span className="font-semibold text-blue-300">Click to Watch in HD</span>
              </div>
            </div>

            {/* Feature Note */}
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <p className="text-xs text-slate-600">
                <span className="font-bold text-slate-900">Want an in-person tour?</span> Visit our campus from Monday to Saturday between 9:00 AM and 4:00 PM.
              </p>
            </div>
          </div>

          {/* RIGHT: Admission Enquiry Form */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="pb-3 border-b border-slate-100">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Admission Enquiry Form
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill out the form below and our admissions counsellor will get back to you within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Enquiry Submitted!</h4>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    Thank you for showing interest in JMT Public Higher Secondary School & College. Our counsellor will reach out to <strong className="text-slate-900">{formData.contactNumber}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        studentName: '',
                        fatherName: '',
                        age: '',
                        classInterested: '',
                        contactNumber: '',
                        email: '',
                        message: '',
                      });
                    }}
                    className="inline-block text-xs font-semibold text-blue-900 underline hover:text-blue-950"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {errorMessage && (
                    <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-800 rounded-lg text-xs sm:text-sm flex items-start gap-2 animate-in fade-in">
                      <AlertCircle className="w-4 h-4 text-rose-600 mt-0.5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Row 1: Student Name & Father's Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="studentName" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Student Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="studentName"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm text-slate-900 transition-colors placeholder:text-slate-400 bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="fatherName" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Father's Name
                      </label>
                      <input
                        type="text"
                        id="fatherName"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleChange}
                        placeholder="e.g. Robert Doe"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm text-slate-900 transition-colors placeholder:text-slate-400 bg-white"
                      />
                    </div>
                  </div>

                  {/* Row 2: Age & Class Interested In */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="age" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Age
                      </label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="e.g. 14"
                        min="10"
                        max="22"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm text-slate-900 transition-colors placeholder:text-slate-400 bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="classInterested" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Class Interested In <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="classInterested"
                        name="classInterested"
                        value={formData.classInterested}
                        onChange={handleChange}
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm text-slate-900 transition-colors bg-white"
                      >
                        <option value="">Select Class / Group</option>
                        <optgroup label="Class IX">
                          <option value="Class IX - Science Group">Class IX - Science Group</option>
                          <option value="Class IX - Computer Science Group">Class IX - Computer Science Group</option>
                          <option value="Class IX - General Group">Class IX - General Group</option>
                        </optgroup>
                        <optgroup label="Class X">
                          <option value="Class X - Science Group">Class X - Science Group</option>
                          <option value="Class X - Computer Science Group">Class X - Computer Science Group</option>
                          <option value="Class X - General Group">Class X - General Group</option>
                        </optgroup>
                        <optgroup label="Class XI">
                          <option value="Class XI - Pre-Medical">Class XI - Pre-Medical</option>
                          <option value="Class XI - Pre-Engineering">Class XI - Pre-Engineering</option>
                          <option value="Class XI - General Science">Class XI - General Science</option>
                          <option value="Class XI - Commerce">Class XI - Commerce</option>
                          <option value="Class XI - Humanities">Class XI - Humanities</option>
                          <option value="Class XI - Medical Technology">Class XI - Medical Technology</option>
                          <option value="Class XI - Pre-Nursing">Class XI - Pre-Nursing</option>
                        </optgroup>
                        <optgroup label="Class XII">
                          <option value="Class XII - Pre-Medical">Class XII - Pre-Medical</option>
                          <option value="Class XII - Pre-Engineering">Class XII - Pre-Engineering</option>
                          <option value="Class XII - General Science">Class XII - General Science</option>
                          <option value="Class XII - Commerce">Class XII - Commerce</option>
                          <option value="Class XII - Humanities">Class XII - Humanities</option>
                          <option value="Class XII - Medical Technology">Class XII - Medical Technology</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Contact Number & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contactNumber" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Contact Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="contactNumber"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        placeholder="0342-4049132"
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm text-slate-900 transition-colors placeholder:text-slate-400 bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Email (Optional)
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="danishbrothers1998@gmail.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm text-slate-900 transition-colors placeholder:text-slate-400 bg-white"
                      />
                    </div>
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm text-slate-900 transition-colors placeholder:text-slate-400 bg-white resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-950 text-white font-semibold px-8 py-3 rounded-lg shadow-sm hover:shadow transition-all duration-200 active:scale-95 text-sm cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Enquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>

      {/* Video Modal Player */}
      {isPlaying && (
        <div
          onClick={() => setIsPlaying(false)}
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-800"
          >
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors"
              aria-label="Close Video"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="JMT Public School & College Campus Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

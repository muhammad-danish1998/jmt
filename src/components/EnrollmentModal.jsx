'use client';

import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  GraduationCap,
  Loader2,
  AlertCircle,
  Send,
  User,
  Phone,
  Mail,
  BookOpen,
  Calendar,
} from 'lucide-react';

export default function EnrollmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    age: '',
    classInterested: 'Class IX (SSC I)',
    contactNumber: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.studentName || !formData.contactNumber || !formData.classInterested) {
      setErrorMessage('Please fill in all required fields (Student Name, Contact Number, and Class).');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentName: formData.studentName,
          parentName: formData.fatherName || formData.studentName,
          age: formData.age,
          classInterested: formData.classInterested,
          contactNumber: formData.contactNumber,
          email: formData.email,
          message: formData.message || 'Quick Enrollment Request via Modal',
        }),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit admission enquiry. Please try again.');
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error('Modal submit error:', err);
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setErrorMessage('');
    setFormData({
      studentName: '',
      fatherName: '',
      age: '',
      classInterested: 'Class IX (SSC I)',
      contactNumber: '',
      email: '',
      message: '',
    });
    onClose();
  };

  return (
    <div
      onClick={handleResetAndClose}
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-lg w-full bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in zoom-in-95 duration-200"
      >
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white p-6 relative">
          <button
            onClick={handleResetAndClose}
            type="button"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-amber-400">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Admissions 2026–2027 Open
              </span>
              <h3 className="text-xl font-black text-white">
                Apply for Admission
              </h3>
            </div>
          </div>
          <p className="text-xs text-slate-300 mt-2">
            Complete the form below to register with <strong>Ziauddin Examination Board (ZUEB)</strong>.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4 animate-in fade-in">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-slate-900">Application Submitted!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you! Our admission officer will contact you at{' '}
                <strong className="text-slate-900">{formData.contactNumber}</strong> shortly to guide you through the enrollment process.
              </p>
              <button
                type="button"
                onClick={handleResetAndClose}
                className="mt-4 inline-flex items-center justify-center bg-blue-900 hover:bg-blue-950 text-white text-sm font-semibold px-6 py-2.5 rounded-lg shadow-sm transition-all"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-lg flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Student Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      placeholder="e.g. Muhammad Ali"
                      required
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Father / Guardian Name
                  </label>
                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    placeholder="Father Name"
                    className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Contact / WhatsApp Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      placeholder="0342-0000000"
                      required
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Program / Class Interested <span className="text-rose-500">*</span>
                  </label>
                  <select
                    name="classInterested"
                    value={formData.classInterested}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 font-medium"
                  >
                    <option value="Class IX (SSC I) - Science / General">Class IX (SSC I) - Matric</option>
                    <option value="Class X (SSC II) - Science / General">Class X (SSC II) - Matric</option>
                    <option value="Class XI (HSSC I) - Pre-Medical">Class XI (HSSC I) - Pre-Medical</option>
                    <option value="Class XI (HSSC I) - Pre-Engineering">Class XI (HSSC I) - Pre-Engineering</option>
                    <option value="Class XI (HSSC I) - ICS / Commerce / Arts">Class XI (HSSC I) - ICS / Commerce</option>
                    <option value="Class XII (HSSC II) - Intermediate">Class XII (HSSC II) - Intermediate</option>
                    <option value="Combine Gap (SSC Part I & II)">Combine Gap (SSC Part I & II)</option>
                    <option value="Combine Gap (HSSC Part I & II)">Combine Gap (HSSC Part I & II)</option>
                    <option value="Improvement / Additional Subject">Improvement / Additional Subject</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address (Optional)
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="student@example.com"
                    className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Additional Notes or Questions
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Write any previous board marks, gap years, or questions..."
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting Application...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Admission Application</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

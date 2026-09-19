'use client';

import React, { useState, useRef } from 'react';
import {
  X,
  CheckCircle2,
  GraduationCap,
  Loader2,
  AlertCircle,
  Send,
  CloudUpload,
  Calendar,
} from 'lucide-react';

export default function EnrollmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    classProgram: '',
    address: '',
    contactNumber: '',
    email: '',
  });

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedPhoto(file);
      const previewUrl = URL.createObjectURL(file);
      setPhotoPreview(previewUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.dob ||
      !formData.gender ||
      !formData.classProgram ||
      !formData.address.trim() ||
      !formData.contactNumber.trim()
    ) {
      setErrorMessage('Please fill in all required fields marked with (*)');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          dob: formData.dob,
          gender: formData.gender,
          classProgram: formData.classProgram,
          address: formData.address,
          contactNumber: formData.contactNumber,
          email: formData.email,
          photoName: selectedPhoto ? selectedPhoto.name : null,
        }),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit admission form to database. Please try again.');
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
    setSelectedPhoto(null);
    setPhotoPreview(null);
    setFormData({
      firstName: '',
      lastName: '',
      dob: '',
      gender: '',
      classProgram: '',
      address: '',
      contactNumber: '',
      email: '',
    });
    onClose();
  };

  return (
    <div
      onClick={handleResetAndClose}
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-lg w-full bg-white rounded-[24px] sm:rounded-[28px] shadow-2xl p-5 sm:p-7 border border-slate-100 my-6 animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          type="button"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100/90 hover:bg-slate-200 text-slate-400 hover:text-slate-700 flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-5 pb-3">
          <div className="relative">
            <div className="w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-gradient-to-br from-[#4323b6] via-[#6335d8] to-[#361a99] text-white flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div className="absolute -inset-1 rounded-full bg-indigo-500/20 blur-sm -z-10" />
          </div>
          <div className="text-left">
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Beacon Academy
            </h3>
            <div className="font-dancing text-lg sm:text-xl text-[#6335d8] font-bold leading-none mt-0.5">
              &amp; College
            </div>
            <p className="text-[11px] sm:text-xs text-slate-400 italic mt-0.5">
              &ldquo;Play Group, Kindergarten, Matric, O-Level &amp; Inter&rdquo;
            </p>
          </div>
        </div>

        {/* Form Body or Success Confirmation */}
        {isSubmitted ? (
          <div className="py-8 text-center space-y-4 animate-in fade-in">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-black text-slate-900">Admission Submitted!</h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-slate-900">{formData.firstName} {formData.lastName}</strong>! Your application has been saved to our database. Our admission officer will contact you at{' '}
              <strong className="text-slate-900">{formData.contactNumber}</strong> shortly.
            </p>
            <button
              type="button"
              onClick={handleResetAndClose}
              className="mt-4 inline-flex items-center justify-center bg-[#4f27d8] hover:bg-[#3f1db8] text-white text-sm font-semibold px-7 py-2.5 rounded-full shadow-md transition-all cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
            {errorMessage && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Row 1: First Name & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  First Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Last Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
                />
              </div>
            </div>

            {/* Row 2: Date of Birth & Gender */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Date of Birth <span className="text-rose-500">*</span>
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-slate-700"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Gender <span className="text-rose-500">*</span>
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-slate-700 font-medium"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Row 3: Class / Program */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                Class / Program <span className="text-rose-500">*</span>
              </label>
              <select
                name="classProgram"
                value={formData.classProgram}
                onChange={handleChange}
                required
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-slate-700 font-medium"
              >
                <option value="">Select Program</option>
                <option value="Play Group / Kindergarten">Play Group / Kindergarten</option>
                <option value="Primary & Middle Section">Primary &amp; Middle Section</option>
                <option value="Class IX (SSC I) - Science">Class IX (SSC I) - Matric Science</option>
                <option value="Class IX (SSC I) - General">Class IX (SSC I) - Matric General</option>
                <option value="Class X (SSC II) - Science">Class X (SSC II) - Matric Science</option>
                <option value="Class X (SSC II) - General">Class X (SSC II) - Matric General</option>
                <option value="Class XI (HSSC I) - Pre-Medical">Class XI (HSSC I) - Pre-Medical</option>
                <option value="Class XI (HSSC I) - Pre-Engineering">Class XI (HSSC I) - Pre-Engineering</option>
                <option value="Class XI (HSSC I) - ICS (Computer Science)">Class XI (HSSC I) - ICS</option>
                <option value="Class XI (HSSC I) - I.Com (Commerce)">Class XI (HSSC I) - I.Com</option>
                <option value="Class XI (HSSC I) - Humanities / Arts">Class XI (HSSC I) - Humanities</option>
                <option value="Class XII (HSSC II) - Intermediate">Class XII (HSSC II) - Intermediate</option>
                <option value="Combine Gap Fast Track (SSC Part I & II)">Combine Gap Fast Track (SSC Part I &amp; II)</option>
                <option value="Combine Gap Fast Track (HSSC Part I & II)">Combine Gap Fast Track (HSSC Part I &amp; II)</option>
              </select>
            </div>

            {/* Row 4: Address */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                Address <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Your full address..."
                required
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
              />
            </div>

            {/* Row 5: Contact Number & Email Address */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Contact Number <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="0300 0000000"
                  required
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
                />
              </div>
            </div>

            {/* Row 6: Upload Student Photo */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                Upload Student Photo
              </label>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handlePhotoChange}
                accept="image/*"
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-2.5 px-4 bg-slate-50 hover:bg-slate-100 border border-dashed border-slate-300 rounded-xl text-xs text-slate-700 font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <CloudUpload className="w-4 h-4 text-indigo-600" />
                <span>{selectedPhoto ? selectedPhoto.name : 'Choose Photo'}</span>
              </button>
            </div>

            {/* Submit Admission Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-shine w-full mt-3 bg-gradient-to-r from-[#4f27d8] via-[#5c2eec] to-[#4320bf] hover:from-[#4320bf] hover:to-[#3816a8] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-indigo-500/25 text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98] disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Saving to Database...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 fill-white -rotate-12" />
                  <span>Submit Admission</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}


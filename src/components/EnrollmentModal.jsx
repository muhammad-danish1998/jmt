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
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-lg w-full bg-white rounded-[28px] sm:rounded-[32px] shadow-2xl p-5 sm:p-7 border border-[#CFE0D6] my-6 animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          type="button"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#FAFAF7] hover:bg-[#EAF2ED] text-[#5E6873] hover:text-[#0B3D26] flex items-center justify-center transition-colors focus:outline-none cursor-pointer border border-[#CFE0D6]"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-5 pb-3 border-b border-[#EAF2ED]">
          <div className="relative">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#0B3D26] text-[#C89B3C] flex items-center justify-center shadow-md">
              <GraduationCap className="w-7 h-7 text-[#C89B3C]" />
            </div>
          </div>
          <div className="text-left">
            <h3 className="text-lg sm:text-xl font-extrabold text-[#17202A] tracking-tight leading-tight">
              JMT Public School
            </h3>
            <div className="text-sm sm:text-base text-[#C89B3C] font-bold leading-none mt-0.5">
              &amp; College Karachi
            </div>
            <p className="text-[11px] sm:text-xs text-[#5E6873] font-medium mt-1">
              Ziauddin Examination Board (ZUEB) Admissions
            </p>
          </div>
        </div>

        {/* Form Body or Success Confirmation */}
        {isSubmitted ? (
          <div className="py-8 text-center space-y-4 animate-in fade-in">
            <div className="w-16 h-16 bg-[#EAF2ED] text-[#0B3D26] rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10 text-[#0B3D26]" />
            </div>
            <h4 className="text-2xl font-extrabold text-[#17202A]">Admission Submitted!</h4>
            <p className="text-xs sm:text-sm text-[#3A4551] max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-[#17202A]">{formData.firstName} {formData.lastName}</strong>! Your application has been saved. Our admission officer will contact you at{' '}
              <strong className="text-[#0B3D26]">{formData.contactNumber}</strong> shortly.
            </p>
            <button
              type="button"
              onClick={handleResetAndClose}
              className="mt-4 inline-flex items-center justify-center bg-[#0B3D26] hover:bg-[#082d1c] text-white text-sm font-bold px-7 py-2.5 rounded-full shadow-md transition-all cursor-pointer"
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
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAFAF7] border border-[#CFE0D6] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B3D26]/20 focus:border-[#0B3D26] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#17202A] mb-1">
                  Last Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAFAF7] border border-[#CFE0D6] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B3D26]/20 focus:border-[#0B3D26] transition-all"
                />
              </div>
            </div>

            {/* Row 2: Date of Birth & Gender */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#17202A] mb-1">
                  Date of Birth <span className="text-rose-500">*</span>
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAFAF7] border border-[#CFE0D6] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B3D26]/20 focus:border-[#0B3D26] transition-all text-[#17202A]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#17202A] mb-1">
                  Gender <span className="text-rose-500">*</span>
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAFAF7] border border-[#CFE0D6] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B3D26]/20 focus:border-[#0B3D26] transition-all text-[#17202A] font-medium"
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
              <label className="block text-xs font-bold text-[#17202A] mb-1">
                Class / Program <span className="text-rose-500">*</span>
              </label>
              <select
                name="classProgram"
                value={formData.classProgram}
                onChange={handleChange}
                required
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAFAF7] border border-[#CFE0D6] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B3D26]/20 focus:border-[#0B3D26] transition-all text-[#17202A] font-medium"
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
              <label className="block text-xs font-bold text-[#17202A] mb-1">
                Address <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Your full address..."
                required
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAFAF7] border border-[#CFE0D6] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B3D26]/20 focus:border-[#0B3D26] transition-all"
              />
            </div>

            {/* Row 5: Contact Number & Email Address */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#17202A] mb-1">
                  Contact Number <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="0300 0000000"
                  required
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAFAF7] border border-[#CFE0D6] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B3D26]/20 focus:border-[#0B3D26] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#17202A] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAFAF7] border border-[#CFE0D6] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B3D26]/20 focus:border-[#0B3D26] transition-all"
                />
              </div>
            </div>

            {/* Row 6: Upload Student Photo */}
            <div>
              <label className="block text-xs font-bold text-[#17202A] mb-1">
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
                className="w-full py-2.5 px-4 bg-[#FAFAF7] hover:bg-[#EAF2ED] border border-dashed border-[#CFE0D6] rounded-xl text-xs text-[#3A4551] font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <CloudUpload className="w-4 h-4 text-[#0B3D26]" />
                <span>{selectedPhoto ? selectedPhoto.name : 'Choose Photo'}</span>
              </button>
            </div>

            {/* Submit Admission Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-3 bg-[#C89B3C] hover:bg-[#b5892f] active:bg-[#a67a24] text-[#0B3D26] font-bold py-3.5 px-6 rounded-[14px_30px_14px_30px] shadow-md text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98] disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#0B3D26]" />
                  <span>Saving to Database...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 fill-current -rotate-12" />
                  <span>Submit Admission Application</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}



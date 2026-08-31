'use client';

import React, { useState } from 'react';
import { Image as ImageIcon, Maximize2, X } from 'lucide-react';

export default function CampusGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 'campus',
      title: 'Campus',
      tag: 'Architecture & Grounds',
      image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'classrooms',
      title: 'Classrooms',
      tag: 'Smart Learning Spaces',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'laboratory',
      title: 'Laboratory',
      tag: 'Science & Robotics',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'library',
      title: 'Library',
      tag: 'Knowledge Resource Center',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'sports',
      title: 'Sports',
      tag: 'Athletics & Fitness Arena',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'events',
      title: 'Events',
      tag: 'Cultural Fests & Seminars',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Campus Gallery
          </h2>
          <div className="w-16 h-1 bg-blue-900 mx-auto rounded-full"></div>
          <p className="text-slate-600 text-base sm:text-lg">
            Experience our vibrant campus infrastructure, modern classrooms, labs, and student activities.
          </p>
        </div>

        {/* 6-Item Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group cursor-pointer flex flex-col items-center"
            >
              {/* Image Box */}
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs relative group-hover:shadow-md transition-all duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Title under image matching wireframe */}
              <h3 className="mt-3 text-sm sm:text-base font-bold text-slate-800 group-hover:text-blue-900 transition-colors text-center">
                {item.title}
              </h3>
              <span className="text-[11px] text-slate-400 font-medium hidden sm:inline-block">
                {item.tag}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 animate-in zoom-in-95 duration-200"
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] w-full bg-black">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Modal Caption */}
            <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <h4 className="text-xl font-bold">{selectedImage.title}</h4>
                <p className="text-sm text-slate-400">{selectedImage.tag}</p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300">
                JMT Campus Tour
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

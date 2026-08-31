import React from 'react';
import { ArrowRight, BookOpen, Layers, Compass, Award } from 'lucide-react';

export default function ClassesWeOffer() {
  const classesData = [
    {
      id: 'class-ix',
      title: 'Class IX',
      badge: 'Secondary (Matric Part I)',
      icon: BookOpen,
      description: 'Build a strong academic foundation with your chosen group.',
      subjects: ['Science Group', 'Computer Science Group', 'General Group'],
      bgAccent: 'from-blue-600 to-indigo-700',
    },
    {
      id: 'class-x',
      title: 'Class X',
      badge: 'Secondary (Matric Part II)',
      icon: Layers,
      description: 'Rigorous board preparation and practical labs.',
      subjects: ['Science Group', 'Computer Science Group', 'General Group'],
      bgAccent: 'from-slate-800 to-slate-950',
    },
    {
      id: 'class-xi',
      title: 'Class XI',
      badge: 'Higher Secondary (Inter Part I)',
      icon: Compass,
      description: 'Specialized disciplines for higher career tracks.',
      subjects: [
        'Pre - Medical',
        'Pre - Engineering',
        'General Science',
        'Commerce',
        'Humanities',
        'Medical Technology',
        'Pre-Nursing',
      ],
      bgAccent: 'from-blue-700 to-slate-900',
    },
    {
      id: 'class-xii',
      title: 'Class XII',
      badge: 'Higher Secondary (Inter Part II)',
      icon: Award,
      description: 'Final board exams and university entrance preparation.',
      subjects: [
        'Pre - Medical',
        'Pre - Engineering',
        'General Science',
        'Commerce',
        'Humanities',
        'Medical Technology',
      ],
      bgAccent: 'from-indigo-900 to-slate-950',
    },
  ];

  return (
    <section id="classes" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Classes We Offer
          </h2>
          <div className="w-16 h-1 bg-blue-900 mx-auto rounded-full"></div>
          <p className="text-slate-600 text-base sm:text-lg">
            Structured academic programs designed to guide students from foundational learning to college excellence.
          </p>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {classesData.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex flex-col bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-lg hover:border-slate-300 transition-all duration-300 group overflow-hidden"
              >
                {/* Header Banner / Icon Placeholder area */}
                <div className="p-6 bg-slate-50 border-b border-slate-100 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-slate-200 group-hover:bg-slate-900 group-hover:text-white text-slate-700 flex items-center justify-center transition-all duration-300 shadow-xs">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-900">
                      {item.badge}
                    </span>
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-900 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Key Highlights
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.subjects.map((sub, i) => (
                        <span
                          key={i}
                          className="inline-block text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Details Link matching wireframe */}
                  <div className="pt-4 border-t border-slate-100">
                    <a
                      href="#eligibility"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 group-hover:text-blue-900 transition-colors"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

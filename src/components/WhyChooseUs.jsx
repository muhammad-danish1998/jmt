import React from 'react';
import {
  GraduationCap,
  BookOpen,
  Building2,
  Trophy,
  Users2,
  Target,
} from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: GraduationCap,
      title: 'Experienced Faculty',
      description: 'Highly qualified and dedicated educators with proven mentoring track records.',
    },
    {
      icon: BookOpen,
      title: 'Quality Education',
      description: 'Comprehensive curriculum focused on conceptual clarity and analytical thinking.',
    },
    {
      icon: Building2,
      title: 'Modern Infrastructure',
      description: 'High-tech labs, digital smart classrooms, and extensive library resources.',
    },
    {
      icon: Trophy,
      title: 'Holistic Development',
      description: 'Balanced focus on academics, athletics, leadership skills, and cultural arts.',
    },
    {
      icon: Users2,
      title: 'Personalized Attention',
      description: 'Optimal teacher-to-student ratio ensuring tailored guidance and individual care.',
    },
    {
      icon: Target,
      title: 'Career Guidance',
      description: 'Dedicated mentorship, entrance exam preparation, and career counselling seminars.',
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Us?
          </h2>
          <div className="w-16 h-1 bg-blue-900 mx-auto rounded-full"></div>
          <p className="text-slate-600 text-base sm:text-lg">
            Empowering students with exceptional academic standards, ethical values, and modern facilities.
          </p>
        </div>

        {/* Features 6-Item Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-8 border border-slate-200 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200 group text-center flex flex-col items-center"
              >
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-xl bg-slate-100 group-hover:bg-blue-50 text-slate-800 group-hover:text-blue-900 flex items-center justify-center mb-5 transition-colors border border-slate-200 group-hover:border-blue-200">
                  <Icon className="w-8 h-8 transition-transform group-hover:scale-110" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

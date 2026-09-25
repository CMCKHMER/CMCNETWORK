import React, { useState } from 'react';
import { Star, Quote, Award, CheckCircle, Play, X } from 'lucide-react';
import { TESTIMONIALS } from '../data/landingData';

export const Testimonials: React.FC = () => {
  const [activeBadgeFilter, setActiveBadgeFilter] = useState<string>('All');
  const [activeVideoModal, setActiveVideoModal] = useState(false);

  const filterOptions = ['All', 'TOEFL Coordinator', 'Curriculum Director', 'Early Ed Specialist'];

  const filteredTestimonials = activeBadgeFilter === 'All'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.badge === activeBadgeFilter);

  return (
    <section className="py-20 lg:py-28 relative bg-slate-900/30 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-xs font-semibold text-cyan-400">
            <Award className="w-3.5 h-3.5" />
            <span>Real Classroom Outcomes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Loved by Teachers, Trusted by Principals
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Hear directly from educators around the world who transformed their prep routines and empowered students with CMC Network.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setActiveBadgeFilter(opt)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                  activeBadgeFilter === opt
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Video Feature Highlight Card */}
        <div className="mb-12 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-cyan-950/40 via-slate-900/80 to-indigo-950/40 border border-cyan-500/30 shadow-2xl flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-full md:w-5/12 rounded-2xl overflow-hidden aspect-video bg-slate-950 group cursor-pointer border border-slate-700/80" onClick={() => setActiveVideoModal(true)}>
            <img 
              src="https://images.pexels.com/photos/5212340/pexels-photo-5212340.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
              alt="Teacher classroom demo"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-90 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shadow-lg shadow-cyan-500/40 group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 fill-slate-950 ml-0.5" />
              </div>
            </div>
            <span className="absolute bottom-3 left-3 text-[11px] font-semibold bg-slate-900/90 text-white px-2 py-0.5 rounded backdrop-blur-sm">
              Watch 2-Min Educator Story
            </span>
          </div>

          <div className="w-full md:w-7/12 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 px-2.5 py-0.5 rounded-full bg-cyan-950 border border-cyan-800">
                School Spotlight
              </span>
              <span className="text-xs text-slate-400">Pacific Gateway International</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white">
              "How Our ESL Department Boosted TOEFL Exam Pass Rates by 22% While Cutting Weekend Grading to Zero"
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              When Pacific Gateway adopted the Creative Minds Network hub, their 14-member English faculty recovered over 160 collective hours per month. Students receive targeted prefix/suffix drills and instant TOEFL speaking feedback right when motivation is highest.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs">
              <div>
                <span className="block text-xl font-bold text-cyan-400 font-mono">+22%</span>
                <span className="text-slate-400">Score Improvement</span>
              </div>
              <div className="h-8 w-[1px] bg-slate-800" />
              <div>
                <span className="block text-xl font-bold text-indigo-400 font-mono">14 hrs</span>
                <span className="text-slate-400">Saved / Teacher / Week</span>
              </div>
              <div className="h-8 w-[1px] bg-slate-800" />
              <div>
                <span className="block text-xl font-bold text-emerald-400 font-mono">100%</span>
                <span className="text-slate-400">Faculty Adoption</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl p-6 sm:p-7 bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Metric badge & stars */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-cyan-400 bg-cyan-950/80 border border-cyan-800/60 px-2.5 py-1 rounded-lg">
                    {item.metric}
                  </span>
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-cyan-500/20 absolute -top-3 -left-2 -z-0" />
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed relative z-10 italic">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                <img
                  src={item.avatarUrl}
                  alt={item.author}
                  className="w-11 h-11 rounded-full object-cover border-2 border-cyan-500/40 shrink-0"
                />
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-white truncate flex items-center gap-1.5">
                    <span>{item.author}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  </h4>
                  <p className="text-[11px] text-cyan-400 truncate">{item.role}</p>
                  <p className="text-[10px] text-slate-500 truncate">{item.school} • {item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={() => setActiveVideoModal(false)}
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
          />

          <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-2xl z-10">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <h3 className="font-bold text-white text-base">Educator Walkthrough: CMC Network in Action</h3>
              <button 
                onClick={() => setActiveVideoModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 aspect-video rounded-2xl overflow-hidden bg-slate-950 flex flex-col items-center justify-center relative text-center p-6">
              <img 
                src="https://images.pexels.com/photos/5212331/pexels-photo-5212331.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                alt="Classroom"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="relative z-10 max-w-md space-y-3">
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center mx-auto text-cyan-300">
                  <Play className="w-8 h-8 fill-cyan-400" />
                </div>
                <h4 className="text-lg font-bold text-white">Full Classroom Demonstration</h4>
                <p className="text-xs text-slate-300">
                  Observe teacher Sarah Lin administering a 15-minute diagnostic TOEFL Junior reading session and receiving immediate automated analytics across 28 student tablets.
                </p>
                <button
                  onClick={() => setActiveVideoModal(false)}
                  className="px-4 py-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs"
                >
                  Close & Explore Tools
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

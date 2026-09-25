import React from 'react';
import { Award, CheckCircle, Shield, Star, BookMarked, GraduationCap } from 'lucide-react';
import { STATS_DATA } from '../data/landingData';

export const SocialProof: React.FC = () => {
  const standards = [
    { name: 'TOEFL Junior & Primary', tag: 'ETS Aligned', icon: GraduationCap },
    { name: 'CEFR Standards A1-C1', tag: 'Council of Europe', icon: BookMarked },
    { name: 'Cambridge English', tag: 'Curriculum Ready', icon: Award },
    { name: 'FERPA & COPPA', tag: 'Privacy Certified', icon: Shield },
    { name: 'Google Classroom API', tag: 'One-Click Sync', icon: CheckCircle },
  ];

  const partnerSchools = [
    'International School of Phnom Penh',
    'St. Andrews International Academy',
    'Singapore Anglo-Chinese Academy',
    'Bright Future Bilingual Institute',
    'Global Horizons Language College',
    'Metropolitan Cambridge Grammar'
  ];

  return (
    <section className="relative py-12 border-y border-slate-800/80 bg-slate-900/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric Cards Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {STATS_DATA.map((stat, i) => (
            <div 
              key={i} 
              className="relative p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/30 transition group text-center"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 tracking-tight group-hover:scale-105 transition-transform duration-200">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-white mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Accreditation and Standards Badges */}
        <div className="text-center mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Engineered in alignment with world-class language benchmarks
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
          {standards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition"
              >
                <div className="p-1.5 rounded-lg bg-cyan-950/60 text-cyan-400">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold text-slate-200">{item.name}</span>
                  <span className="block text-[10px] text-cyan-400/80 font-medium">{item.tag}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* School Names */}
        <div className="pt-6 border-t border-slate-800/60">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              <span>Trusted By Top International Schools:</span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400">
              {partnerSchools.map((school, i) => (
                <span key={i} className="hover:text-cyan-300 transition cursor-default">
                  • {school}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold">4.9/5</span>
              <span className="text-slate-400 text-[11px]">(4,800+ Educator Reviews)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

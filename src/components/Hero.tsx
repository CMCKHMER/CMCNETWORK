import React, { useState } from 'react';
import { 
  Sparkles, ArrowRight, Play, CheckCircle2, ShieldCheck, 
  BarChart2, Users, FileText, Award,
  Check, Copy, ChevronRight, Globe
} from 'lucide-react';

interface HeroProps {
  onExploreTools: () => void;
  onOpenStudentDemo: () => void;
  onOpenTeacherPass: () => void;
  onSelectFeatureCard: (feature: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreTools,
  onOpenStudentDemo,
  onOpenTeacherPass,
  onSelectFeatureCard
}) => {
  const [copiedRule, setCopiedRule] = useState(false);

  const handleCopyPrefix = () => {
    navigator.clipboard?.writeText('Prefix: un- (unhappy, unlock) | Suffix: -able (reliable, playable)');
    setCopiedRule(true);
    setTimeout(() => setCopiedRule(false), 2000);
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Background ambient gradient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-600/20 via-indigo-600/20 to-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-soft" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-2/3 -right-20 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Decorative Grid Mesh */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Top Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 shadow-lg shadow-cyan-950/40 text-xs font-medium text-cyan-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-semibold tracking-wide uppercase text-[11px]">CMC Network Hub</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300">Empowering Educators, Engaging Students</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-800/40 text-[11px] font-medium text-indigo-300">
            <Globe className="w-3.5 h-3.5 text-indigo-400" />
            <span>International & Local Standards</span>
          </div>

          <div className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/40 text-[11px] font-medium text-emerald-300">
            <Award className="w-3.5 h-3.5 text-emerald-400" />
            <span>Learners of All Ages (Pre-K to TOEFL)</span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
              CMC NETWORK
            </span>
            <span className="block text-3xl sm:text-5xl lg:text-6xl mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Empowering Educators, Engaging Students
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            The ultimate platform for teachers to assign, track, and grade <span className="text-white font-semibold underline decoration-cyan-400/50 underline-offset-4">TOEFL practice tests</span> with automated scoring, instant worksheet generation, and detailed classroom analytics.
          </p>

          {/* Curriculum Pills Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {['Pre-Kid', 'Kid Program', 'TOEFL Prep', 'Chinese & ESL', 'Prefix & Suffix Lab', 'Instant Worksheets'].map((pill, i) => (
              <span 
                key={i} 
                className="text-xs px-2.5 py-1 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 font-medium"
              >
                {pill}
              </span>
            ))}
          </div>

          {/* High-Converting CTA Buttons matching screenshot */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-6">
            <button
              onClick={onExploreTools}
              className="w-full sm:w-auto px-7 py-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-xl shadow-cyan-500/20 hover:shadow-cyan-400/30 flex items-center justify-center gap-2 group active:scale-95 cursor-pointer uppercase tracking-wider"
            >
              <Sparkles className="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
              <span>Explore Teacher Tools</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenStudentDemo}
              className="w-full sm:w-auto px-7 py-4 rounded-xl font-bold text-sm text-amber-300 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 hover:border-amber-400/70 transition-all flex items-center justify-center gap-2 group active:scale-95 cursor-pointer uppercase tracking-wider"
            >
              <Play className="w-4 h-4 text-amber-400 fill-amber-400 group-hover:scale-110 transition-transform" />
              <span>View Student Demo</span>
            </button>

            <button
              onClick={onOpenTeacherPass}
              className="w-full sm:w-auto px-6 py-4 rounded-xl font-semibold text-sm text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Get Free Teacher Pass</span>
            </button>
          </div>

          {/* Micro trust guarantee */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-3 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-cyan-400" /> No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-cyan-400" /> 100% Free Individual Plan
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> FERPA & COPPA Compliant
            </span>
          </div>
        </div>

        {/* 4 Feature Cards directly corresponding to the user screenshot! */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Auto-Grading */}
          <div 
            onClick={() => onSelectFeatureCard('auto-grading')}
            className="group relative rounded-2xl p-5 bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-cyan-500/30 hover:border-cyan-400 shadow-xl shadow-cyan-950/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition">
              <BarChart2 className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition">
                Auto-Grading
              </h3>
              <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                Instant
              </span>
            </div>
            <p className="text-xs font-semibold text-cyan-400 mt-0.5">Instant Scoring & Rubrics</p>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Automated scoring for TOEFL essays, grammar drills, and reading diagnostics with human-level accuracy.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300 group-hover:text-cyan-300">
              <span className="font-medium">Try Live Sandbox</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Class Management */}
          <div 
            onClick={() => onSelectFeatureCard('class-mgmt')}
            className="group relative rounded-2xl p-5 bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-indigo-500/30 hover:border-indigo-400 shadow-xl shadow-indigo-950/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-950/80 border border-indigo-800/60 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition">
              <Users className="w-6 h-6 text-indigo-400" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition">
                Class Mgmt
              </h3>
              <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
                Rosters
              </span>
            </div>
            <p className="text-xs font-semibold text-indigo-400 mt-0.5">Track Student Progress</p>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Organize multiple grade levels, assign differentiated homework packets, and monitor submission rates live.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300 group-hover:text-indigo-300">
              <span className="font-medium">Explore Roster Tools</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Analytics */}
          <div 
            onClick={() => onSelectFeatureCard('analytics')}
            className="group relative rounded-2xl p-5 bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-amber-500/30 hover:border-amber-400 shadow-xl shadow-amber-950/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-800/60 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition">
              <FileText className="w-6 h-6 text-amber-400" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition">
                Analytics
              </h3>
              <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">
                Reports
              </span>
            </div>
            <p className="text-xs font-semibold text-amber-400 mt-0.5">Detailed Reports & Heatmaps</p>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Identify student weaknesses in specific CEFR skills like listening inference or past tense irregulars.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300 group-hover:text-amber-300">
              <span className="font-medium">View Diagnostic Demo</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Prefix & Suffix Practice (Exact feature shown on screenshot with beginner/advanced rules) */}
          <div 
            onClick={() => onSelectFeatureCard('prefix-suffix')}
            className="group relative rounded-2xl p-5 bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-teal-500/30 hover:border-teal-400 shadow-xl shadow-teal-950/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-teal-950/80 border border-teal-800/60 flex items-center justify-center group-hover:bg-teal-500/20 transition">
                <span className="font-black text-sm text-teal-400 font-mono">abc</span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopyPrefix();
                }}
                className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition text-[11px] flex items-center gap-1"
                title="Copy sample rule"
              >
                {copiedRule ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedRule ? 'Copied' : 'Rule'}</span>
              </button>
            </div>

            <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition">
              Prefix & Suffix Practice
            </h3>
            
            {/* Beginner preview card snippet matching screenshot */}
            <div className="mt-2.5 p-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-[11px] font-sans space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-amber-400 font-bold uppercase text-[10px]">Beginner Module</span>
                <span className="text-[10px] text-slate-500">A1-A2</span>
              </div>
              <p className="text-slate-300 leading-tight">
                Prefixes: <span className="text-cyan-300 font-mono font-bold">un-, re-, pre-</span>
              </p>
              <p className="text-slate-300 leading-tight">
                Suffixes: <span className="text-teal-300 font-mono font-bold">-ing, -ed, -ly</span>
              </p>
              <p className="text-[10px] text-slate-400 pt-0.5 border-t border-slate-800">
                Example: <span className="text-emerald-400 font-mono">happy → unhappy</span>, <span className="text-emerald-400 font-mono">teach → teacher</span>
              </p>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-slate-300 group-hover:text-teal-300">
              <span className="font-medium">Test Interactive Drills</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

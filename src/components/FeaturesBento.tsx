import React from 'react';
import { 
  Sparkles, CheckCircle2, GraduationCap, 
  UploadCloud, ArrowRight, ShieldCheck,
  Zap, Headphones, Volume2, Globe, Cpu
} from 'lucide-react';

interface FeaturesBentoProps {
  onOpenTeacherPass: () => void;
  onExploreWorksheets: () => void;
}

export const FeaturesBento: React.FC<FeaturesBentoProps> = ({
  onOpenTeacherPass,
  onExploreWorksheets
}) => {
  return (
    <section id="features" className="py-20 lg:py-28 relative bg-slate-900/30 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-xs font-semibold text-indigo-300">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span>Comprehensive Teacher Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built by Educators, Powered by Intelligent Tech
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            From early childhood phonics to rigorous TOEFL Junior examination preparation, Creative Minds Network equips teachers with the exact tools needed to elevate every student.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          
          {/* Bento Item 1: Large Card - TOEFL Suite (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950/90 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 shadow-xl group relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/15 transition-all" />
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-cyan-950/80 border border-cyan-800/60 text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-xs uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800">
                  Primary & Junior Aligned
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition">
                End-to-End TOEFL Practice Suite
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Assign official format Reading, Listening, Speaking, and Writing practice tests. Complete with authentic audio recordings, timers, and automatic speech pronunciation diagnostics.
              </p>

              {/* TOEFL Sub-skills Pill Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                  <div className="flex items-center justify-center gap-1 text-cyan-400 mb-1">
                    <Headphones className="w-4 h-4" />
                    <span className="text-xs font-bold">Listening</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Audio playback & speed ctrl</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                  <div className="flex items-center justify-center gap-1 text-indigo-400 mb-1">
                    <Zap className="w-4 h-4" />
                    <span className="text-xs font-bold">Reading</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Lexile-tiered passages</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                  <div className="flex items-center justify-center gap-1 text-emerald-400 mb-1">
                    <Volume2 className="w-4 h-4" />
                    <span className="text-xs font-bold">Speaking</span>
                  </div>
                  <span className="text-[11px] text-slate-400">AI audio acoustic rubric</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                  <div className="flex items-center justify-center gap-1 text-amber-400 mb-1">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-xs font-bold">Writing</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Grammar & cohesion AI</span>
                </div>
              </div>
            </div>

            {/* Bottom visual preview */}
            <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-cyan-300 font-semibold">Test #TJ-2026-04</span>
                <span className="hidden sm:inline text-slate-500">|</span>
                <span className="hidden sm:inline text-slate-400">Average Student Score: 88.4% (CEFR B2)</span>
              </div>
              <button 
                onClick={onOpenTeacherPass}
                className="font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
              >
                <span>Preview Mock Bank</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Bento Item 2: Medium Card - Worksheet OCR & Upload (5 Cols) */}
          <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950/90 border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 shadow-xl group relative flex flex-col justify-between">
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/15 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-indigo-950/80 border border-indigo-800/60 text-indigo-400">
                  <UploadCloud className="w-6 h-6" />
                </div>
                <span className="text-xs uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800">
                  OCR Engine
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition">
                Legacy Worksheet Digitizer
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Have existing paper worksheets or PDF files? Upload them directly. Our OCR extracts questions, generates answer keys, and turns static paper into auto-graded assignments.
              </p>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 mb-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Supported Formats:</span>
                  <span className="text-indigo-300 font-mono font-medium">PDF, JPG, PNG, DOCX</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Conversion Time:</span>
                  <span className="text-emerald-400 font-semibold">Under 4 seconds</span>
                </div>
              </div>
            </div>

            <button
              onClick={onExploreWorksheets}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <span>Explore Converted Worksheets</span>
              <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
            </button>
          </div>

          {/* Bento Item 3: Prefix & Suffix Vocabulary Lab (4 Cols) */}
          <div className="lg:col-span-4 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-teal-500/40 transition-all duration-300 shadow-xl group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-black text-teal-400 px-2.5 py-1 rounded-lg bg-teal-950 border border-teal-800">
                  Prefix & Suffix Lab
                </span>
                <span className="text-xs text-slate-400">All Levels</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition">
                Morphology Mastery
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Targeted drills for affixes: <span className="text-teal-300 font-mono">un-, re-, dis-, -able, -tion, -ment</span>. Helps students decipher unfamiliar academic words effortlessly.
              </p>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-400">Root:</span>
                  <span className="text-teal-300 font-bold">courage</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">+ Prefix en-:</span>
                  <span className="text-cyan-300">encourage (v)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">+ Suffix -ment:</span>
                  <span className="text-emerald-300">encouragement (n)</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>240+ Interactive Drills</span>
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
            </div>
          </div>

          {/* Bento Item 4: Multilingual & International Standards (4 Cols) */}
          <div className="lg:col-span-4 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 shadow-xl group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-purple-950/80 border border-purple-800/60 text-purple-400">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded">
                  Dual-Language
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition">
                International & Local Curricula
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Designed for global classrooms. Includes Chinese (中文) and Khmer (ខ្មែរ) bilingual assistance modes so ESL students bridge language gaps faster.
              </p>

              <div className="flex flex-wrap gap-2 text-[11px]">
                <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300">
                  English / Chinese Prompts
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300">
                  Khmer Bilingual Scaffolding
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300">
                  CEFR A1 through C1
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Standard Mapping Ready</span>
              <ShieldCheck className="w-4 h-4 text-purple-400" />
            </div>
          </div>

          {/* Bento Item 5: Automated Rubrics & LMS Sync (4 Cols) */}
          <div className="lg:col-span-4 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-xl group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-800/60 text-cyan-400">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded">
                  LMS Ready
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition">
                Zero-Friction Sync
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Works seamlessly with Google Classroom, Canvas LMS, Microsoft Teams, and Apple School Manager. Grades sync back automatically with zero double entry.
              </p>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Sync Status:</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 2-Way Sync Active
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Canvas & Google Certified</span>
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

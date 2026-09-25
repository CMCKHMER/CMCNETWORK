import React from 'react';
import { Check, X, Sparkles, Zap, ArrowRight } from 'lucide-react';

interface ComparisonTableProps {
  onOpenTeacherPass: () => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onOpenTeacherPass }) => {
  const comparisons = [
    {
      feature: 'TOEFL Practice Grading & Rubrics',
      traditional: 'Stack of paper essays, 15-20 mins per student, 3 to 5 day delay before feedback is returned.',
      cmc: 'Instant 3-second scoring with official ETS & CEFR rubrics, grammar corrections, and actionable feedback.',
      highlight: true
    },
    {
      feature: 'Worksheet Creation & Differentiation',
      traditional: 'Endless Googling for clip art and formatting Word tables manually for each ability group.',
      cmc: '1-Click Smart Worksheet Generator with Lexile tiers, answer keys, and dual-language vocabulary support.',
      highlight: false
    },
    {
      feature: 'Student Diagnostic Heatmaps',
      traditional: 'Cluttered spreadsheets or guess-work about which students struggle with specific prefixes or tenses.',
      cmc: 'Automated skill heatmaps highlighting at-risk students and recommending tailored intervention exercises.',
      highlight: false
    },
    {
      feature: 'Legacy Test Digitization',
      traditional: 'Retyping old textbook tests or scanning low-quality PDFs without any automated scoring.',
      cmc: 'Smart OCR converter instantly transforms textbook scans and PDFs into interactive, auto-graded quizzes.',
      highlight: true
    },
    {
      feature: 'Learning Management System (LMS) Sync',
      traditional: 'Manual double entry of student scores between paper gradebooks and school portals.',
      cmc: 'Automated two-way gradebook synchronization with Google Classroom, Canvas, and Microsoft Teams.',
      highlight: false
    }
  ];

  return (
    <section className="py-20 lg:py-28 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-xs font-semibold text-cyan-400">
            <Zap className="w-3.5 h-3.5" />
            <span>The CMC Network Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Stop Grading in the Dark Ages
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Compare the friction of traditional classroom administration with the streamlined intelligence of Creative Minds Network.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
          
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-950/80 border-b border-slate-800 text-xs uppercase font-bold tracking-wider">
            <div className="md:col-span-4 p-4 sm:p-5 text-slate-400">
              Capability
            </div>
            <div className="md:col-span-4 p-4 sm:p-5 text-rose-400/80 bg-rose-950/10 border-x border-slate-800/60 flex items-center gap-1.5">
              <X className="w-4 h-4 text-rose-400" />
              <span>Traditional Manual Workflow</span>
            </div>
            <div className="md:col-span-4 p-4 sm:p-5 text-cyan-300 bg-cyan-950/20 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>CMC Network Platform</span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-slate-800/60 text-xs sm:text-sm">
            {comparisons.map((row, idx) => (
              <div 
                key={idx}
                className={`grid grid-cols-1 md:grid-cols-12 transition ${
                  row.highlight ? 'bg-cyan-950/10' : 'hover:bg-slate-800/30'
                }`}
              >
                {/* Capability Title */}
                <div className="md:col-span-4 p-4 sm:p-5 font-bold text-white flex items-center">
                  <span>{row.feature}</span>
                </div>

                {/* Traditional */}
                <div className="md:col-span-4 p-4 sm:p-5 text-slate-400 bg-rose-950/5 border-x border-slate-800/60 flex items-start gap-2.5">
                  <span className="p-1 rounded-full bg-rose-950 text-rose-400 shrink-0 mt-0.5">
                    <X className="w-3 h-3" />
                  </span>
                  <span>{row.traditional}</span>
                </div>

                {/* CMC Network */}
                <div className="md:col-span-4 p-4 sm:p-5 text-slate-200 bg-cyan-950/15 flex items-start gap-2.5 font-medium">
                  <span className="p-1 rounded-full bg-cyan-950 text-cyan-400 shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </span>
                  <span className="text-cyan-100">{row.cmc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Callout */}
          <div className="p-6 bg-slate-950/90 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400 text-center sm:text-left">
              Join 38,000+ educators worldwide modernizing their classrooms.
            </span>
            <button
              onClick={onOpenTeacherPass}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20 active:scale-95 transition cursor-pointer"
            >
              <span>Switch to CMC Free</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

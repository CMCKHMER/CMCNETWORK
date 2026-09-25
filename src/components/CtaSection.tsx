import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CtaSectionProps {
  onSuccess: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // Fallback
    }

    setIsSubmitted(true);
    setTimeout(() => {
      onSuccess();
    }, 1200);
  };

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-slate-950">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-cyan-600/20 via-indigo-600/20 to-purple-600/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl p-8 sm:p-14 lg:p-16 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950/90 border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 relative overflow-hidden text-center">
          
          <div className="max-w-3xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-xs font-semibold text-cyan-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant Setup • No Credit Card Required</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Ready to Give Your Students the Ultimate Edge?
            </h2>

            <p className="text-base sm:text-xl text-slate-300 font-normal max-w-2xl mx-auto">
              Start auto-grading TOEFL exams and generating standard-aligned worksheets today. Free forever for individual teachers.
            </p>

            {/* Form */}
            {isSubmitted ? (
              <div className="p-5 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-sm font-semibold max-w-md mx-auto animate-in zoom-in-95 duration-200 flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Welcome to CMC Network! Launching your teacher portal...</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2.5 pt-4">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your school or personal email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 hover:to-teal-200 text-slate-950 font-bold text-sm tracking-wide transition shadow-lg shadow-cyan-500/25 active:scale-95 cursor-pointer shrink-0 flex items-center justify-center gap-2 uppercase"
                >
                  <span>Get Teacher Pass</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* Subtext Guarantees */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> 100% Free Starter Tier
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> 60 Free Student Slots
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> FERPA & COPPA Certified
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

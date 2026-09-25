import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, School, Mail, User, BookOpen } from 'lucide-react';
import { useModalA11y } from '../hooks/useModalA11y';

interface TeacherPassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const fireConfetti = async (options: import('canvas-confetti').Options) => {
  try {
    const { default: confetti } = await import('canvas-confetti');
    confetti(options);
  } catch {
    // Confetti is decorative only — ignore failures.
  }
};

export const TeacherPassModal: React.FC<TeacherPassModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [school, setSchool] = useState('');
  const [role, setRole] = useState('ESL / TOEFL Teacher');
  const [isSuccess, setIsSuccess] = useState(false);

  const dialogRef = useModalA11y(isOpen, onClose);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    void fireConfetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 }
    });
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setName('');
    setEmail('');
    setSchool('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        aria-hidden="true"
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      />

      {/* Modal Container */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="teacher-pass-title"
        tabIndex={-1}
        className="relative w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 animate-in zoom-in-95 duration-200"
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6 space-y-4" role="status" aria-live="polite">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-black text-white">
                Teacher Pass Activated!
              </h3>
              <p className="text-sm text-cyan-400 font-medium">
                Welcome to Creative Minds Network, {name || 'Educator'}.
              </p>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
              Your free educator workspace for <strong className="text-white">{school || 'your school'}</strong> has been created. You can now access auto-grading, download 200+ worksheets, and invite your students.
            </p>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">Account Tier:</span>
                <span className="text-cyan-400 font-bold">Individual Teacher (Free Forever)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Student Capacity:</span>
                <span className="text-white font-semibold">60 Students</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Monthly Auto-Grading:</span>
                <span className="text-white font-semibold">150 Free Tests</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-600 hover:from-cyan-300 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/20 active:scale-95 transition cursor-pointer"
            >
              Enter Teacher Dashboard
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-xs text-white">
                CMC
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Creative Minds Network
              </span>
            </div>

            <h3 id="teacher-pass-title" className="text-2xl font-extrabold text-white tracking-tight mb-1">
              Claim Your Free Teacher Pass
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Full access to auto-grading, standard worksheets, and student roster management. No credit card required.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="tp-name" className="text-xs font-semibold text-slate-300 block mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    id="tp-name"
                    type="text"
                    required
                    placeholder="e.g. Maria Chen"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="tp-email" className="text-xs font-semibold text-slate-300 block mb-1">
                  School or Teaching Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    id="tp-email"
                    type="email"
                    required
                    placeholder="maria.chen@school.org"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    School / Center
                  </label>
                  <div className="relative">
                    <School className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      id="tp-school"
                      type="text"
                      placeholder="e.g. Cambridge Academy"
                      value={school}
                      onChange={(e) => setSchool(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Primary Role
                  </label>
                  <div className="relative">
                    <BookOpen className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <select
                      id="tp-role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-cyan-400"
                    >
                      <option>ESL / TOEFL Teacher</option>
                      <option>Kindergarten / Pre-Kid</option>
                      <option>Elementary Kid Program</option>
                      <option>Curriculum Director</option>
                      <option>Independent Tutor</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 hover:to-teal-200 text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 active:scale-95 transition cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Activate Free Teacher Pass</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center">
                By activating, you agree to our Educational Terms & FERPA Privacy Standards.
              </p>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};

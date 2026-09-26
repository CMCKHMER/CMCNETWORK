import React, { useState } from 'react';
import { Sparkles, Shield, Heart, Send, Check, Lock } from 'lucide-react';

interface FooterProps {
  onOpenQuickLinks: () => void;
  onOpenTeacherPass: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuickLinks, onOpenTeacherPass }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setNewsletterSubscribed(false);
    }, 3500);
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Newsletter & Brand Bar */}
        <div className="pb-12 border-b border-slate-800/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-sky-400 flex items-center justify-center font-black text-white text-sm shadow-md shadow-cyan-500/20">
                CMC
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                Creative Minds Network
              </span>
            </div>
            <p className="text-slate-400 max-w-md text-xs leading-relaxed">
              Empowering educators, engaging students. Standard-aligned TOEFL preparation, AI-assisted grading, and curriculum tools engineered for teachers of all ages.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-4 sm:p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  Weekly Teacher Resource Dispatch
                </span>
                <span className="text-[10px] text-cyan-400 font-semibold bg-cyan-950 px-2 py-0.5 rounded">
                  Free Worksheets Every Friday
                </span>
              </div>

              {newsletterSubscribed ? (
                <div className="p-2.5 rounded-xl bg-emerald-950 border border-emerald-800 text-emerald-300 text-xs font-semibold flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Subscribed! Check your inbox for this week's 10-page TOEFL Junior activity pack.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter educator email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition active:scale-95 cursor-pointer shrink-0"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Links Grid */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* Col 1 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Teacher Tools</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#interactive-demo" className="hover:text-cyan-300 transition">AI Auto-Grading Engine</a>
              </li>
              <li>
                <a href="#interactive-demo" className="hover:text-cyan-300 transition">Smart Worksheet Generator</a>
              </li>
              <li>
                <a href="#features" className="hover:text-cyan-300 transition">TOEFL Practice Suite (Junior/iBT)</a>
              </li>
              <li>
                <a href="#features" className="hover:text-cyan-300 transition">Prefix & Suffix Morphology Lab</a>
              </li>
              <li>
                <a href="#features" className="hover:text-cyan-300 transition">Legacy PDF & OCR Digitizer</a>
              </li>
              <li>
                <button onClick={onOpenQuickLinks} className="hover:text-cyan-300 transition text-left cursor-pointer text-cyan-400 font-semibold">
                  Open Quick Links Menu →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Curriculum Levels</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#resources" className="hover:text-cyan-300 transition">Pre-Kid Early Phonics</a>
              </li>
              <li>
                <a href="#resources" className="hover:text-cyan-300 transition">Kid Program (Grades 1-3)</a>
              </li>
              <li>
                <a href="#resources" className="hover:text-cyan-300 transition">Upper Elementary (Grades 4-6)</a>
              </li>
              <li>
                <a href="#resources" className="hover:text-cyan-300 transition">TOEFL Junior Reading & Listening</a>
              </li>
              <li>
                <a href="#resources" className="hover:text-cyan-300 transition">Academic Writing & Paraphrasing</a>
              </li>
              <li>
                <a href="#resources" className="hover:text-cyan-300 transition">Chinese & ESL Multilingual Support</a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Schools & Admin</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={onOpenTeacherPass} className="hover:text-cyan-300 transition text-left cursor-pointer">
                  School Campus Licenses
                </button>
              </li>
              <li>
                <a href="#features" className="hover:text-cyan-300 transition">Google Classroom Integration</a>
              </li>
              <li>
                <a href="#features" className="hover:text-cyan-300 transition">Canvas LMS Grade Sync</a>
              </li>
              <li>
                <a href="#roi-calc" className="hover:text-cyan-300 transition">Faculty Time ROI Calculator</a>
              </li>
              <li>
                <button onClick={onOpenTeacherPass} className="hover:text-cyan-300 transition text-left cursor-pointer">
                  School Purchase Orders & Invoicing
                </button>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-300 transition">District Pricing Plans</a>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Standards & Safety</h4>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <span>FERPA & COPPA Compliant</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <span>GDPR Student Privacy SLA</span>
              </li>
              <li>
                <span>CEFR Levels Pre-A1 through C1</span>
              </li>
              <li>
                <span>ETS Aligned Rubric Specifications</span>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-300 transition">Teacher Help Center & FAQ</a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-300 transition">Terms of Service & Privacy Policy</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col lg:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-1.5 text-center sm:text-left">
            <span>© 2026 Creative Minds Network (CMC Network Hub). Empowering teachers with</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline" />
            <span>worldwide.</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center">
            <div className="flex items-center gap-1.5 text-slate-400">
              <Lock className="w-3 h-3 text-cyan-400" />
              <span>All code, design & content are proprietary. Unauthorized copying is prohibited.</span>
            </div>
            <div className="hidden sm:block text-slate-700">|</div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-slate-300">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-slate-300">Student Data Rights</a>
              <span>•</span>
              <a href="#" className="hover:text-slate-300">System Status (99.98%)</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

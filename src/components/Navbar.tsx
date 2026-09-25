import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Sparkles, ChevronDown, 
  ExternalLink, ArrowRight, 
  Languages, Compass
} from 'lucide-react';

interface NavbarProps {
  onOpenQuickLinks: () => void;
  onOpenTeacherPass: () => void;
  onOpenStudentDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQuickLinks,
  onOpenTeacherPass,
  onOpenStudentDemo
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('English');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'zh', name: '中文 (Chinese)', flag: '🇨🇳' },
    { code: 'km', name: 'ភាសាខ្មែរ (Khmer)', flag: '🇰🇭' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      {bannerVisible && (
        <div className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 text-white text-xs sm:text-sm py-2 px-4 text-center font-medium relative z-50 flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 bg-white/20 px-2 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase">
            <Sparkles className="w-3 h-3 text-cyan-200 animate-spin" style={{ animationDuration: '4s' }} /> 2026 Academic Edition
          </span>
          <span className="hidden sm:inline">Empowering K-12 & TOEFL educators with instant AI auto-grading and standard worksheets.</span>
          <span className="sm:hidden">Empowering K-12 & TOEFL educators.</span>
          <button 
            onClick={onOpenTeacherPass}
            className="underline font-semibold hover:text-cyan-100 transition inline-flex items-center gap-0.5 ml-1"
          >
            Claim Free Teacher Access <ArrowRight className="w-3.5 h-3.5 inline" />
          </button>
          <button 
            onClick={() => setBannerVisible(false)}
            aria-label="Close notification"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-1 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Sticky Navbar */}
      <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-2xl shadow-cyan-950/20 py-3' 
          : 'bg-slate-950/50 backdrop-blur-sm border-b border-white/5 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Left: Quick Links button + Logo */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenQuickLinks}
                className="group relative flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-700/60 hover:border-cyan-500/50 text-slate-200 hover:text-white transition shadow-sm hover:shadow-cyan-500/10 active:scale-95 cursor-pointer"
                title="Open Quick Navigation Menu"
              >
                <div className="flex flex-col gap-1 w-4">
                  <span className="h-0.5 w-4 bg-cyan-400 rounded-full transition group-hover:w-3"></span>
                  <span className="h-0.5 w-3 bg-indigo-400 rounded-full transition group-hover:w-4"></span>
                  <span className="h-0.5 w-4 bg-cyan-400 rounded-full"></span>
                </div>
                <span className="text-xs font-semibold tracking-wide uppercase text-slate-300 group-hover:text-cyan-300 hidden sm:inline">Quick Links</span>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
              </button>

              {/* Brand Logo matching the original screenshot */}
              <a href="#" className="flex items-center gap-2.5 group">
                <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-sky-400 p-[2px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-400/30 transition-all">
                  <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-indigo-200 text-sm">
                    CMC
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-cyan-200 transition">
                      CMC Network Hub
                    </span>
                    <span className="hidden md:inline-flex text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/40">
                      v3.2
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 -mt-1 font-medium hidden sm:inline">
                    Creative Minds Network • Education
                  </span>
                </div>
              </a>
            </div>

            {/* Middle Nav Links - Desktop */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-300">
              <a 
                href="#features" 
                className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition"
              >
                Features
              </a>
              <a 
                href="#interactive-demo" 
                className="px-3 py-1.5 rounded-lg hover:text-cyan-300 hover:bg-cyan-950/30 transition flex items-center gap-1.5 text-cyan-400"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Live Demo
              </a>
              <a 
                href="#resources" 
                className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition"
              >
                Teacher Resources
              </a>
              <a 
                href="#roi-calc" 
                className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition"
              >
                Time Savings
              </a>
              <a 
                href="#pricing" 
                className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition"
              >
                Pricing
              </a>
              <a 
                href="#faq" 
                className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition"
              >
                FAQ
              </a>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-2.5 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition"
                  aria-label="Select Language"
                >
                  <Languages className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="hidden sm:inline font-medium">{currentLang}</span>
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </button>

                {langDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-44 rounded-xl bg-slate-900 border border-slate-700/80 shadow-2xl py-1 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 border-b border-slate-800 uppercase tracking-wider">
                      Select Language
                    </div>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLang(lang.name.split(' ')[0]);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-cyan-950/40 hover:text-cyan-200 transition ${
                          currentLang.startsWith(lang.name.split(' ')[0]) ? 'text-cyan-400 font-semibold bg-cyan-950/20' : 'text-slate-300'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{lang.flag}</span>
                          <span>{lang.name}</span>
                        </span>
                        {currentLang.startsWith(lang.name.split(' ')[0]) && (
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* View Student Demo Button */}
              <button
                onClick={onOpenStudentDemo}
                className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-750 border border-slate-700/80 transition active:scale-95"
              >
                <Compass className="w-3.5 h-3.5 text-indigo-400" />
                Student Demo
              </button>

              {/* Primary CTA - Join CMC */}
              <button
                onClick={onOpenTeacherPass}
                className="relative inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-sky-500 hover:from-cyan-400 hover:via-indigo-500 hover:to-sky-400 shadow-md shadow-indigo-600/30 hover:shadow-cyan-500/40 transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
                <span>Join CMC</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition"
                aria-label="Toggle Mobile Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-800/80 bg-slate-950/95 backdrop-blur-xl px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-2 pb-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuickLinks();
                }}
                className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-300"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Quick Links Hub
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStudentDemo();
                }}
                className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-indigo-300"
              >
                <Compass className="w-3.5 h-3.5" />
                Student Demo
              </button>
            </div>

            <nav className="flex flex-col space-y-1 text-sm font-medium">
              <a 
                href="#features" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-900 transition"
              >
                Platform Features
              </a>
              <a 
                href="#interactive-demo" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-cyan-300 hover:bg-cyan-950/30 transition flex items-center justify-between"
              >
                <span>Live Interactive Sandbox</span>
                <span className="text-[10px] bg-cyan-900/60 px-2 py-0.5 rounded text-cyan-300">Try Live</span>
              </a>
              <a 
                href="#resources" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-900 transition"
              >
                Teacher Resource Library
              </a>
              <a 
                href="#roi-calc" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-900 transition"
              >
                Time Savings Calculator
              </a>
              <a 
                href="#pricing" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-900 transition"
              >
                Pricing Plans
              </a>
              <a 
                href="#faq" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-900 transition"
              >
                FAQ & Support
              </a>
            </nav>

            <div className="pt-2 border-t border-slate-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTeacherPass();
                }}
                className="w-full py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 flex items-center justify-center gap-2 shadow-lg"
              >
                <Sparkles className="w-4 h-4" />
                Claim Free Teacher Access
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

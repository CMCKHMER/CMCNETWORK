import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { QuickDrawer } from './components/QuickDrawer';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { InteractiveShowcase } from './components/InteractiveShowcase';
import { FeaturesBento } from './components/FeaturesBento';
import { ResourceLibrary } from './components/ResourceLibrary';
import { RoiCalculator } from './components/RoiCalculator';
import { ComparisonTable } from './components/ComparisonTable';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { TeacherPassModal } from './components/TeacherPassModal';
import { StudentDemoModal } from './components/StudentDemoModal';
import { Sparkles, ArrowUp } from 'lucide-react';

export function App() {
  const [quickDrawerOpen, setQuickDrawerOpen] = useState(false);
  const [teacherPassModalOpen, setTeacherPassModalOpen] = useState(false);
  const [studentDemoModalOpen, setStudentDemoModalOpen] = useState(false);

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickLinkSelect = (toolId: string) => {
    if (toolId === 'toefl-suite' || toolId === 'worksheet-uploads') {
      scrollToSection('features');
    } else if (toolId === 'auto-grading' || toolId === 'worksheets' || toolId === 'prefix-suffix') {
      scrollToSection('interactive-demo');
    } else if (toolId === 'pre-kid' || toolId === 'kid-program' || toolId === 'chinese-language') {
      scrollToSection('resources');
    } else {
      scrollToSection('features');
    }
  };

  const handleHeroFeatureSelect = (feature: string) => {
    if (feature === 'auto-grading' || feature === 'prefix-suffix' || feature === 'analytics') {
      scrollToSection('interactive-demo');
    } else {
      scrollToSection('features');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative selection:bg-cyan-500 selection:text-white">
      
      {/* Sticky Top Navbar */}
      <Navbar
        onOpenQuickLinks={() => setQuickDrawerOpen(true)}
        onOpenTeacherPass={() => setTeacherPassModalOpen(true)}
        onOpenStudentDemo={() => setStudentDemoModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Quick Feature Cards */}
        <Hero
          onExploreTools={() => scrollToSection('features')}
          onOpenStudentDemo={() => setStudentDemoModalOpen(true)}
          onOpenTeacherPass={() => setTeacherPassModalOpen(true)}
          onSelectFeatureCard={handleHeroFeatureSelect}
        />

        {/* Social Proof & Accredited Standards */}
        <SocialProof />

        {/* Live Interactive Sandbox: Auto-Grader, Worksheet Generator & Roster */}
        <InteractiveShowcase />

        {/* Core Features Bento Grid */}
        <FeaturesBento
          onOpenTeacherPass={() => setTeacherPassModalOpen(true)}
          onExploreWorksheets={() => scrollToSection('resources')}
        />

        {/* Teacher Resource Library & Download Vault */}
        <ResourceLibrary
          onOpenTeacherPass={() => setTeacherPassModalOpen(true)}
        />

        {/* Time Savings / ROI Calculator */}
        <RoiCalculator
          onOpenTeacherPass={() => setTeacherPassModalOpen(true)}
        />

        {/* Traditional vs. CMC Comparison Matrix */}
        <ComparisonTable
          onOpenTeacherPass={() => setTeacherPassModalOpen(true)}
        />

        {/* Verified Educator Testimonials & Video Story */}
        <Testimonials />

        {/* Transparent Teacher & School Pricing */}
        <Pricing
          onOpenTeacherPass={() => setTeacherPassModalOpen(true)}
        />

        {/* Searchable FAQ */}
        <FaqSection
          onOpenTeacherPass={() => setTeacherPassModalOpen(true)}
        />

        {/* High-Impact Final CTA */}
        <CtaSection
          onSuccess={() => setTeacherPassModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenQuickLinks={() => setQuickDrawerOpen(true)}
        onOpenTeacherPass={() => setTeacherPassModalOpen(true)}
      />

      {/* Slide-out Quick Links Drawer (matching the user's screenshot) */}
      <QuickDrawer
        isOpen={quickDrawerOpen}
        onClose={() => setQuickDrawerOpen(false)}
        onSelectAction={handleQuickLinkSelect}
      />

      {/* Teacher Free Pass Modal */}
      <TeacherPassModal
        isOpen={teacherPassModalOpen}
        onClose={() => setTeacherPassModalOpen(false)}
      />

      {/* Live Student Experience Demo Modal */}
      <StudentDemoModal
        isOpen={studentDemoModalOpen}
        onClose={() => setStudentDemoModalOpen(false)}
        onOpenTeacherPass={() => setTeacherPassModalOpen(true)}
      />

      {/* Floating Quick Action Dock */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <button
          onClick={() => setQuickDrawerOpen(true)}
          className="hidden sm:flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/40 text-cyan-300 text-xs font-semibold shadow-xl backdrop-blur-md transition hover:scale-105 active:scale-95 cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Quick Links</span>
        </button>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white shadow-xl backdrop-blur-md transition hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
export default App;

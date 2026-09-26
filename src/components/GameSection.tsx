import React from 'react';
import { Gamepad2, ArrowLeft, Sparkles } from 'lucide-react';
import TenseGame from './game/TenseGame';

interface GameSectionProps {
  /** Returns the visitor to the landing page content */
  onBackToLanding: () => void;
}

/**
 * Game Section — hosts the "Tense Master" verb-tenses game inside the
 * landing page shell (sticky navbar + footer stay visible).
 *
 * The visual frame follows the main page's design language:
 *  - slate-950 base with cyan / indigo / violet accents
 *  - glass panels with soft borders and glow shadows
 *  - rounded-2xl containers and Space Grotesk display headings
 */
export const GameSection: React.FC<GameSectionProps> = ({ onBackToLanding }) => {
  return (
    <section
      id="game"
      className="relative py-16 lg:py-20 border-t border-slate-800/80 bg-slate-950 overflow-hidden"
    >
      {/* Ambient background orbs (matches Hero / Features styling) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[420px] h-[420px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse-soft" />
        <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse-soft" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header — same eyebrow / title / subtitle rhythm as other sections */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-5">
            <Gamepad2 className="w-3.5 h-3.5" />
            Interactive Learning Game
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-glow leading-tight">
            Tense Master:{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Verb Tenses Arcade
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-400 text-base sm:text-lg">
            Practice all 12 English verb tenses through a gamified quiz journey — earn XP,
            keep streaks alive, unlock levels, and watch your grammar mastery grow.
          </p>
        </div>

        {/* Glass-framed game viewport */}
        <div className="glass-panel rounded-3xl p-2 sm:p-3 shadow-2xl shadow-cyan-950/30 border-slate-700/60">
          {/* Mini toolbar matching the navbar's pill-button style */}
          <div className="flex items-center justify-between gap-3 px-3 sm:px-4 py-3 rounded-2xl bg-slate-900/80 border border-slate-700/60 mb-2 sm:mb-3">
            <div className="flex items-center gap-2 min-w-0">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 shrink-0">
                <Sparkles className="w-4 h-4" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-bold text-white truncate">Tense Master</p>
                <p className="text-[11px] text-slate-400 truncate">Learn · Quiz · Level Up</p>
              </div>
            </div>
            <button
              onClick={onBackToLanding}
              className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-600/60 hover:border-cyan-500/50 text-slate-200 hover:text-white text-xs font-semibold transition active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-cyan-400" />
              Back to Page
            </button>
          </div>

          {/* Rounded "screen" containing the game itself */}
          <div className="rounded-2xl overflow-hidden border border-slate-800/80 shadow-inner shadow-black/40">
            <TenseGame />
          </div>
        </div>

        <p className="text-center text-xs text-slate-500 mt-6">
          Tip: your progress (XP, unlocked levels &amp; completed tenses) is saved automatically in this browser.
        </p>
      </div>
    </section>
  );
};

export default GameSection;

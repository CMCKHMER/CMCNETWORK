import React, { useState } from 'react';
import { Check, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../data/landingData';

interface PricingProps {
  onOpenTeacherPass: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenTeacherPass }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-20 lg:py-28 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-xs font-semibold text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Teacher-First Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Invest in Better Teaching, Not More Admin
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Free forever for individual classroom teachers. Affordable departmental upgrades for schools and academies.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 p-1.5 rounded-2xl bg-slate-900 border border-slate-800 mt-4">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                !isAnnual 
                  ? 'bg-slate-800 text-white shadow' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center gap-2 cursor-pointer ${
                isAnnual 
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-700/60">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const isPro = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPro
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border-2 border-cyan-500 shadow-2xl shadow-cyan-950/40 -translate-y-2'
                    : 'bg-slate-900/50 border border-slate-800 hover:border-slate-700 shadow-xl'
                }`}
              >
                {/* Popular Pill */}
                {isPro && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-cyan-400 to-teal-300 text-slate-950 shadow-md">
                      Most Popular for Educators
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                      <p className="text-xs text-cyan-400 font-medium mt-0.5">{plan.targetUser}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 mb-6 leading-relaxed min-h-[36px]">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-slate-800 flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-black text-white">
                      ${price}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-400">
                      {plan.monthlyPrice === 0 ? 'forever' : isAnnual ? '/ month, billed yearly' : '/ month'}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Included with this plan:
                    </span>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div>
                  <button
                    onClick={onOpenTeacherPass}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 active:scale-95 transition cursor-pointer shadow-lg ${
                      isPro
                        ? 'bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 hover:to-teal-200 text-slate-950 shadow-cyan-500/25'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-slate-500 text-center mt-3 flex items-center justify-center gap-1">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>Cancel or switch tiers anytime</span>
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* School Purchase Orders Box */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-900/40 border border-slate-800 text-center max-w-2xl mx-auto space-y-2">
          <p className="text-xs sm:text-sm text-slate-300 font-medium">
            Are you a School Principal or District Academic Coordinator?
          </p>
          <p className="text-xs text-slate-400">
            We accept school Purchase Orders (PO), wire transfers, and provide custom volume discounts for multi-campus deployments.
          </p>
          <button
            onClick={onOpenTeacherPass}
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
          >
            Request Institutional Quote & Invoice
          </button>
        </div>

      </div>
    </section>
  );
};

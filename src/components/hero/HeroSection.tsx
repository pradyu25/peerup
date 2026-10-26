import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { GenerativeSculpture } from './GenerativeSculpture';
import { SITE_METADATA } from '../../data/site-content';

interface HeroSectionProps {
  onStartProject: () => void;
  onViewWork: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartProject,
  onViewWork
}) => {
  return (
    <section className="relative min-h-screen pt-24 pb-8 flex flex-col justify-between border-b border-[#E3E8F0] dark:border-[#293451] overflow-hidden">
      {/* Soft atmospheric ambient glow lights */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] ambient-glow-cyan pointer-events-none -z-10 blur-3xl opacity-70 dark:opacity-40" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 right-1/4 w-[450px] h-[300px] ambient-glow-violet pointer-events-none -z-10 blur-3xl opacity-60 dark:opacity-30" 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col justify-between relative z-10">
        
        {/* 01: TOP METADATA STRIP ABOVE THE IMAGE — AT BOTH TOP CORNERS */}
        <div className="flex justify-between items-start font-mono-tech text-[10px] sm:text-[11px] tracking-widest text-[#5D6680] dark:text-[#A7B2CD] uppercase pt-2 pb-4">
          <div className="space-y-1">
            {SITE_METADATA.taglineLeft.map((item, idx) => (
              <div key={idx}>{item}</div>
            ))}
          </div>
          <div className="text-right space-y-1">
            {SITE_METADATA.taglineRight.map((item, idx) => (
              <div key={idx}>{item}</div>
            ))}
          </div>
        </div>

        {/* 02: SCULPTURE ANIMATION — SEAMLESS ON PAGE BACKGROUND WITH PEERUP BACKDROP TEXT */}
        <div className="relative w-full h-[360px] sm:h-[440px] md:h-[500px] lg:h-[560px] flex items-center justify-center my-2 select-none">
          {/* Peerup backdrop text behind animation — unclipped, fitting 100% cleanly */}
          <div 
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-visible px-2 sm:px-4"
          >
            <span className="font-display font-black text-[13vw] sm:text-[13.8vw] md:text-[14.2vw] lg:text-[14.8vw] leading-none tracking-tighter uppercase text-[#0F1221]/[0.05] dark:text-[#F5F7FF]/[0.08] select-none transform scale-y-105 transition-colors duration-400 whitespace-nowrap text-center max-w-full">
              PEERUP
            </span>
          </div>

          {/* Interactive sculpture canvas */}
          <div className="relative z-10 w-full h-full flex items-center justify-center overflow-visible">
            <GenerativeSculpture interactive={true} />
          </div>
        </div>

        {/* 03: LOWER TWO-COLUMN EDITORIAL REGION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pt-6 pb-6">
          {/* Left Column: Descriptor and Main Headline */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-0.5 bg-gradient-to-r from-[#00D9F5] to-[#702BFF] rounded-full" />
              <p className="font-mono-tech text-[10px] sm:text-xs tracking-widest uppercase text-[#5D6680] dark:text-[#A7B2CD]">
                FOUNDER-LED PRODUCT LAB & VENTURES
              </p>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-[#0F1221] dark:text-[#F5F7FF] leading-[1.05]">
              Ideas into{' '}
              <span className="font-editorial italic font-normal text-[#0F1221] dark:text-[#F5F7FF] transition-colors">
                products.
              </span>
              <br className="hidden sm:inline" /> Products into{' '}
              <span className="font-editorial italic font-normal text-[#0F1221] dark:text-[#F5F7FF] transition-colors">
                businesses.
              </span>
            </h1>
          </div>

          {/* Right Column: Paragraph, Actions, and Chapter Indicators */}
          <div className="lg:col-span-5 flex flex-col justify-end space-y-6">
            <p className="text-sm md:text-base text-[#5D6680] dark:text-[#A7B2CD] font-normal leading-relaxed max-w-xl">
              {SITE_METADATA.supportingStatement}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
              <div className="flex items-center gap-3">
                <button
                  onClick={onViewWork}
                  type="button"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-brand-gradient text-xs font-semibold tracking-wide hover:opacity-95 active:scale-95 transition-all cursor-pointer shadow-sm group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D9F5]"
                >
                  <span>Explore Products</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-white" />
                </button>

                <button
                  onClick={onStartProject}
                  type="button"
                  className="px-5 py-3 text-xs font-semibold tracking-wide text-[#0F1221] dark:text-[#F5F7FF] rounded-full border border-[#E3E8F0] dark:border-[#293451] hover:border-[#075BFF] dark:hover:border-[#00D9F5] hover:bg-[#F2F4F8] dark:hover:bg-[#10182F] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00D9F5]"
                >
                  About & Founder
                </button>
              </div>

              {/* Number indicators */}
              <div className="hidden sm:flex items-center gap-3 font-mono-tech text-xs text-[#7C86A0] tabular-nums">
                <span className="text-[#075BFF] dark:text-[#00D9F5] font-semibold">01</span>
                <span>02</span>
                <span>03</span>
                <span>04</span>
                <span>05</span>
              </div>
            </div>
          </div>
        </div>

        {/* 04: BOTTOM BAR (LOCATION & SCROLL INDICATOR) */}
        <div className="pt-6 border-t border-[#E3E8F0] dark:border-[#293451] flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono-tech text-[#5D6680] dark:text-[#A7B2CD] gap-3">
          <div className="flex items-center gap-2">
            <span>{SITE_METADATA.founded}</span>
            <span>—</span>
            <span>{SITE_METADATA.location}</span>
          </div>

          <button
            onClick={onViewWork}
            className="flex items-center gap-2 hover:text-[#075BFF] dark:hover:text-[#00D9F5] transition-colors cursor-pointer group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00D9F5]"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={13} className="group-hover:translate-y-0.5 transition-transform animate-bounce text-[#00D9F5]" />
          </button>
        </div>
      </div>
    </section>
  );
};

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
    <section className="relative min-h-screen pt-24 pb-8 flex flex-col justify-between overflow-hidden border-b border-neutral-300/60 dark:border-neutral-800/60">
      {/* Background oversized watermark typography matching moodboard */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none text-center opacity-[0.04] dark:opacity-[0.06] font-display font-black tracking-tighter text-[16vw] leading-none z-0 overflow-hidden"
      >
        PEERUP®
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col justify-between relative z-10">
        {/* Top Metadata Strip */}
        <div className="flex justify-between items-start font-mono-tech text-[10px] sm:text-[11px] tracking-widest text-neutral-500 dark:text-neutral-400 uppercase pt-4 pb-2">
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

        {/* Center Generative ASCII / Ribbon 3D Centerpiece */}
        <div className="relative w-full h-[320px] sm:h-[400px] md:h-[460px] lg:h-[500px] my-auto flex items-center justify-center">
          <GenerativeSculpture interactive={true} />
        </div>

        {/* Lower Two-Column Editorial Region */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pt-4 pb-8">
          {/* Left Column: Descriptor and Headline */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-neutral-400 dark:bg-neutral-600" />
              <p className="font-mono-tech text-[10px] sm:text-xs tracking-widest uppercase text-neutral-600 dark:text-neutral-400">
                INDEPENDENT CREATIVE TECHNOLOGY COLLECTIVE
              </p>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-[#111110] dark:text-[#F2F0E9] leading-[1.05]">
              We make ideas{' '}
              <span className="font-editorial italic font-normal text-[#111110] dark:text-[#F2F0E9] transition-colors">
                move.
              </span>
            </h1>
          </div>

          {/* Right Column: Paragraph, Actions, and Chapter Indicators */}
          <div className="lg:col-span-5 flex flex-col justify-end space-y-6">
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed max-w-xl">
              {SITE_METADATA.supportingStatement}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
              <div className="flex items-center gap-3">
                <button
                  onClick={onStartProject}
                  type="button"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111110] text-[#F2F0E9] dark:bg-[#F2F0E9] dark:text-[#111110] text-xs font-semibold tracking-wide hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-sm group"
                >
                  <span>Start a project</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <button
                  onClick={onViewWork}
                  type="button"
                  className="px-4 py-2.5 text-xs font-semibold tracking-wide text-[#111110] dark:text-[#F2F0E9] hover:underline underline-offset-4 transition-all cursor-pointer"
                >
                  View our work
                </button>
              </div>

              {/* Number indicators */}
              <div className="hidden sm:flex items-center gap-3 font-mono-tech text-xs text-neutral-400 dark:text-neutral-600 tabular-nums">
                <span className="text-[#111110] dark:text-[#F2F0E9] font-semibold">01</span>
                <span>02</span>
                <span>03</span>
                <span>04</span>
                <span>05</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Location & Scroll Indicator */}
        <div className="pt-6 border-t border-neutral-300/60 dark:border-neutral-800/60 flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono-tech text-neutral-500 dark:text-neutral-400 gap-3">
          <div className="flex items-center gap-2">
            <span>{SITE_METADATA.founded}</span>
            <span>—</span>
            <span>{SITE_METADATA.location}</span>
          </div>

          <button
            onClick={onViewWork}
            className="flex items-center gap-2 hover:text-[#111110] dark:hover:text-[#F2F0E9] transition-colors cursor-pointer group"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={13} className="group-hover:translate-y-0.5 transition-transform animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

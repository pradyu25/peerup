import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { APPROACH_STEPS } from '../../data/site-content';

export const ApproachSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="approach" className="py-24 md:py-32 border-b border-neutral-300/60 dark:border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-12 border-b border-neutral-300/60 dark:border-neutral-800/60 gap-4">
          <div className="font-mono-tech text-xs tracking-widest text-neutral-500 uppercase">
            / 04 APPROACH
          </div>
          <div className="font-mono-tech text-xs tracking-widest text-neutral-500 uppercase">
            A CLEAR PROCESS / A BRIGHTER TOMORROW
          </div>
        </div>

        {/* Main Grid: Left Headline, Right Interactive 4-Stage Process List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-[#111110] dark:text-[#F2F0E9] leading-tight">
              From<br />
              idea to<br />
              <span className="font-editorial italic font-normal text-[#111110] dark:text-[#F2F0E9]">
                impact.
              </span>
            </h2>

            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed max-w-md">
              We turn complex problems into simple, thoughtful solutions through a blend of strategy, design and engineering.
            </p>

            {/* Currently Active Step Highlight Box */}
            <div className="pt-6 border-t border-neutral-300/60 dark:border-neutral-800/60">
              <div className="font-mono-tech text-xs text-[#B39A73] tracking-wider uppercase mb-2">
                ACTIVE PHASE: {APPROACH_STEPS[activeStep].number} — {APPROACH_STEPS[activeStep].title}
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {APPROACH_STEPS[activeStep].description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {APPROACH_STEPS[activeStep].deliverables.map((d, i) => (
                  <span
                    key={i}
                    className="font-mono-tech text-[10px] text-neutral-500 dark:text-neutral-400 border border-neutral-300 dark:border-neutral-700 px-2 py-0.5 rounded-xs"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 4-Step List matching moodboard */}
          <div className="lg:col-span-7 flex flex-col justify-center divide-y divide-neutral-300/60 dark:divide-neutral-800/60 border-y border-neutral-300/60 dark:border-neutral-800/60">
            {APPROACH_STEPS.map((step, index) => {
              const isSelected = activeStep === index;
              return (
                <div
                  key={step.number}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isSelected}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveStep(index);
                    }
                  }}
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setActiveStep(index)}
                  onFocus={() => setActiveStep(index)}
                  className={`group py-6 sm:py-8 cursor-pointer transition-colors duration-200 flex flex-col justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B39A73] ${
                    isSelected ? 'bg-neutral-200/30 dark:bg-neutral-800/20 px-4 -mx-4 rounded-xs' : ''
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-baseline gap-6 sm:gap-10">
                      <span className="font-mono-tech text-xs sm:text-sm text-neutral-400 dark:text-neutral-500 group-hover:text-[#B39A73] transition-colors tabular-nums">
                        {step.number}
                      </span>
                      <span className="font-mono-tech text-sm sm:text-base font-bold tracking-wider text-[#111110] dark:text-[#F2F0E9] uppercase group-hover:text-[#B39A73] transition-colors">
                        {step.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="hidden sm:inline font-display text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-[#111110] dark:group-hover:text-[#F2F0E9] transition-colors text-right">
                        {step.headline}
                      </span>
                      <ArrowUpRight
                        size={16}
                        className={`transition-all duration-300 text-neutral-400 group-hover:text-[#111110] dark:group-hover:text-[#F2F0E9] ${
                          isSelected ? 'rotate-45 text-[#B39A73]' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expandable mobile sub-text */}
                  <div className="sm:hidden pt-2 pl-12 text-xs text-neutral-500">
                    {step.headline}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Tag Strip */}
        <div className="pt-8 border-t border-neutral-300/60 dark:border-neutral-800/60 flex flex-wrap justify-between items-center text-xs font-mono-tech text-neutral-500 dark:text-neutral-400 gap-4">
          <div className="flex items-center gap-4">
            <span>STRATEGY</span>
            <span>—</span>
            <span>DESIGN</span>
            <span>—</span>
            <span>ENGINEERING</span>
            <span>—</span>
            <span>AI</span>
          </div>
          <div>ESTIMATED 8–12 WEEKS TYPICAL ENGAGEMENT</div>
        </div>
      </div>
    </section>
  );
};

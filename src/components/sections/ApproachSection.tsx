import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { APPROACH_STEPS } from '../../data/site-content';

export const ApproachSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="approach" className="py-24 md:py-32 border-b border-[#E3E8F0] dark:border-[#293451]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-12 border-b border-[#E3E8F0] dark:border-[#293451] gap-4">
          <div className="font-mono-tech text-xs tracking-widest text-[#5D6680] dark:text-[#A7B2CD] uppercase">
            / 04 APPROACH
          </div>
          <div className="font-mono-tech text-xs tracking-widest text-[#5D6680] dark:text-[#A7B2CD] uppercase">
            A CLEAR PROCESS / A BRIGHTER TOMORROW
          </div>
        </div>

        {/* Main Grid: Left Headline, Right Interactive 4-Stage Process List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-[#0F1221] dark:text-[#F5F7FF] leading-tight">
              From<br />
              idea to<br />
              <span className="font-editorial italic font-normal text-[#0F1221] dark:text-[#F5F7FF]">
                impact.
              </span>
            </h2>

            <p className="text-sm md:text-base text-[#5D6680] dark:text-[#A7B2CD] font-normal leading-relaxed max-w-md">
              We turn complex problems into simple, thoughtful solutions through a blend of strategy, design and engineering.
            </p>

            {/* Currently Active Step Highlight Box */}
            <div className="pt-6 border-t border-[#E3E8F0] dark:border-[#293451]">
              <div className="font-mono-tech text-xs text-[#00D9F5] tracking-wider uppercase mb-2 font-semibold">
                ACTIVE PHASE: {APPROACH_STEPS[activeStep].number} — {APPROACH_STEPS[activeStep].title}
              </div>
              <p className="text-xs text-[#5D6680] dark:text-[#A7B2CD] leading-relaxed">
                {APPROACH_STEPS[activeStep].description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {APPROACH_STEPS[activeStep].deliverables.map((d, i) => (
                  <span
                    key={i}
                    className="font-mono-tech text-[10px] text-[#5D6680] dark:text-[#A7B2CD] border border-[#E3E8F0] dark:border-[#293451] px-2 py-0.5 rounded-xs bg-[#F2F4F8] dark:bg-[#10182F]"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 4-Step List */}
          <div className="lg:col-span-7 flex flex-col justify-center divide-y divide-[#E3E8F0] dark:divide-[#293451] border-y border-[#E3E8F0] dark:border-[#293451]">
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
                  className={`group py-6 sm:py-8 cursor-pointer transition-colors duration-200 flex flex-col justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00D9F5] ${
                    isSelected ? 'bg-[#F2F4F8] dark:bg-[#0A0F2C] px-4 -mx-4 rounded-xs border-l-2 border-[#00D9F5]' : ''
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-baseline gap-6 sm:gap-10">
                      <span className="font-mono-tech text-xs sm:text-sm text-[#7C86A0] group-hover:text-[#00D9F5] transition-colors tabular-nums">
                        {step.number}
                      </span>
                      <span className="font-mono-tech text-sm sm:text-base font-bold tracking-wider text-[#0F1221] dark:text-[#F5F7FF] uppercase group-hover:text-[#075BFF] dark:group-hover:text-[#00D9F5] transition-colors">
                        {step.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="hidden sm:inline font-display text-xs sm:text-sm text-[#5D6680] dark:text-[#A7B2CD] group-hover:text-[#0F1221] dark:group-hover:text-[#F5F7FF] transition-colors text-right">
                        {step.headline}
                      </span>
                      <ArrowUpRight
                        size={16}
                        className={`transition-all duration-300 text-[#7C86A0] group-hover:text-[#075BFF] dark:group-hover:text-[#00D9F5] ${
                          isSelected ? 'rotate-45 text-[#00D9F5]' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expandable mobile sub-text */}
                  <div className="sm:hidden pt-2 pl-12 text-xs text-[#7C86A0]">
                    {step.headline}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Tag Strip */}
        <div className="pt-8 border-t border-[#E3E8F0] dark:border-[#293451] flex flex-wrap justify-between items-center text-xs font-mono-tech text-[#5D6680] dark:text-[#A7B2CD] gap-4">
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

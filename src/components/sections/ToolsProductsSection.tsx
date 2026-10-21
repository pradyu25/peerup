import React, { useState } from 'react';
import { TOOLS } from '../../data/site-content';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';

export const ToolsProductsSection: React.FC = () => {
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [submittedTool, setSubmittedTool] = useState<string | null>(null);

  const handleWaitlistSubmit = (toolId: string, e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail || !waitlistEmail.includes('@')) return;
    setSubmittedTool(toolId);
    setTimeout(() => {
      setSubmittedTool(null);
      setWaitlistEmail('');
    }, 4500);
  };

  return (
    <section id="tools" className="py-24 md:py-32 border-b border-neutral-300/60 dark:border-neutral-800/60 bg-[#EAE7E0]/20 dark:bg-[#161514]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-12 border-b border-neutral-300/60 dark:border-neutral-800/60 gap-4">
          <div className="font-mono-tech text-xs tracking-widest text-neutral-500 uppercase">
            INTERNAL LABS & PRODUCTS
          </div>
          <div className="font-mono-tech text-xs tracking-widest text-neutral-500 uppercase">
            THOUGHTFUL ENGINEERING
          </div>
        </div>

        {/* Headline */}
        <div className="py-12 space-y-4 max-w-2xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-[#111110] dark:text-[#F2F0E9] leading-tight">
            Useful tools.{' '}
            <span className="font-editorial italic font-normal text-[#111110] dark:text-[#F2F0E9]">
              Thoughtfully made.
            </span>
          </h2>
          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
            Focused products designed to solve real problems through thoughtful engineering and considered design.
          </p>
        </div>

        {/* Tools Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          {TOOLS.map((tool) => {
            const isSubmitted = submittedTool === tool.id;
            return (
              <div
                key={tool.id}
                className="bg-[#FFFFFF] dark:bg-[#1A1918] p-8 rounded-xs border border-neutral-300/60 dark:border-neutral-800/60 flex flex-col justify-between space-y-6 shadow-xs hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono-tech text-[10px] uppercase tracking-widest text-[#B39A73] font-semibold">
                      {tool.badge}
                    </span>
                    <span className="font-mono-tech text-[10px] text-neutral-400 uppercase">
                      STATUS: {tool.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-display text-[#111110] dark:text-[#F2F0E9]">
                    {tool.name}
                  </h3>

                  <p className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                    {tool.tagline}
                  </p>

                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                    {tool.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="pt-2 space-y-2 border-t border-neutral-200 dark:border-neutral-800">
                    {tool.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] font-mono-tech text-neutral-500 dark:text-neutral-400">
                        <Check size={12} className="text-[#B39A73]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action / Waitlist Form */}
                <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
                  {isSubmitted ? (
                    <div className="p-3 rounded-xs bg-[#B39A73]/15 text-[#B39A73] font-mono-tech text-xs flex items-center justify-center gap-2">
                      <Sparkles size={14} />
                      <span>Waitlist recorded for preview release.</span>
                    </div>
                  ) : (
                    <form onSubmit={(e) => handleWaitlistSubmit(tool.id, e)} className="flex items-center gap-2">
                      <input
                        type="email"
                        placeholder="Get developer access..."
                        value={waitlistEmail}
                        onChange={(e) => setWaitlistEmail(e.target.value)}
                        required
                        className="flex-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 px-3 py-2 text-xs rounded-xs text-[#111110] dark:text-[#F2F0E9] focus:outline-none focus:border-[#B39A73]"
                      />
                      <button
                        type="submit"
                        className="px-3 py-2 bg-[#111110] text-[#F2F0E9] dark:bg-[#F2F0E9] dark:text-[#111110] rounded-xs text-xs font-semibold hover:opacity-90 transition-opacity shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B39A73]"
                        title="Submit email"
                      >
                        <ArrowUpRight size={14} />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

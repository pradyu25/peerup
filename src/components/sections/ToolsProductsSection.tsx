import React, { useState } from 'react';
import { TOOLS } from '../../data/site-content';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';

export const ToolsProductsSection: React.FC = () => {
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [submittedTool, setSubmittedTool] = useState<string | null>(null);

  const handleWaitlistSubmit = (toolId: string, e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail || !waitlistEmail.includes('@')) return;

    // Real local persistence in browser localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('peerup_labs_waitlist') || '[]');
      existing.push({
        email: waitlistEmail,
        toolId,
        date: new Date().toISOString()
      });
      localStorage.setItem('peerup_labs_waitlist', JSON.stringify(existing));
    } catch {
      // LocalStorage fallback
    }

    setSubmittedTool(toolId);
  };

  return (
    <section id="tools" className="py-24 md:py-32 border-b border-[#E3E8F0] dark:border-[#293451] bg-[#F2F4F8]/40 dark:bg-[#0A0F2C]/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-12 border-b border-[#E3E8F0] dark:border-[#293451] gap-4">
          <div className="font-mono-tech text-xs tracking-widest text-[#5D6680] dark:text-[#A7B2CD] uppercase">
            / 02 LABS & DEVELOPER TOOLKITS
          </div>
          <div className="font-mono-tech text-xs tracking-widest text-[#5D6680] dark:text-[#A7B2CD] uppercase">
            R&D EXPERIMENTS & ENGINES
          </div>
        </div>

        {/* Headline */}
        <div className="py-12 space-y-4 max-w-2xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-[#0F1221] dark:text-[#F5F7FF] leading-tight">
            Developer tools.{' '}
            <span className="font-editorial italic font-normal text-[#0F1221] dark:text-[#F5F7FF]">
              R&D experiments.
            </span>
          </h2>
          <p className="text-sm md:text-base text-[#5D6680] dark:text-[#A7B2CD] font-normal leading-relaxed">
            Open toolkits, shader engines, and developer profilers created inside PeerUp Labs for creative engineering and software optimization.
          </p>
        </div>

        {/* Tools Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          {TOOLS.map((tool) => {
            const isSubmitted = submittedTool === tool.id;
            return (
              <div
                key={tool.id}
                className="bg-[#FFFFFF] dark:bg-[#0A0F2C] p-8 rounded-xs border border-[#E3E8F0] dark:border-[#293451] flex flex-col justify-between space-y-6 shadow-xs hover:border-[#00D9F5]/50 dark:hover:border-[#00D9F5]/50 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono-tech text-[10px] uppercase tracking-widest text-[#00D9F5] font-semibold">
                      {tool.badge}
                    </span>
                    <span className="font-mono-tech text-[10px] text-[#7C86A0] uppercase">
                      {tool.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-display text-[#0F1221] dark:text-[#F5F7FF]">
                    {tool.name}
                  </h3>

                  <p className="text-xs font-semibold text-[#075BFF] dark:text-[#00D9F5]">
                    {tool.tagline}
                  </p>

                  <p className="text-xs text-[#5D6680] dark:text-[#A7B2CD] leading-relaxed font-normal">
                    {tool.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="pt-2 space-y-2 border-t border-[#E3E8F0] dark:border-[#293451]">
                    {tool.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] font-mono-tech text-[#5D6680] dark:text-[#A7B2CD]">
                        <Check size={12} className="text-[#00D9F5]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action / Waitlist Form */}
                <div className="pt-4 border-t border-[#E3E8F0] dark:border-[#293451]">
                  {isSubmitted ? (
                    <div className="p-3 rounded-xs bg-[#00D9F5]/10 text-[#0F1221] dark:text-[#F5F7FF] font-mono-tech text-xs space-y-2 border border-[#00D9F5]/30">
                      <div className="flex items-center gap-2 font-semibold text-[#00D9F5]">
                        <Sparkles size={14} />
                        <span>Request Recorded</span>
                      </div>
                      <p className="text-[11px] text-[#5D6680] dark:text-[#A7B2CD]">
                        Saved in local session. Email us at{' '}
                        <a href={`mailto:hello@peerup.in?subject=Beta%20Access%20Request%20for%20${tool.name}`} className="underline text-[#075BFF] dark:text-[#00D9F5]">
                          hello@peerup.in
                        </a>
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={(e) => handleWaitlistSubmit(tool.id, e)} className="flex items-center gap-2">
                      <input
                        type="email"
                        placeholder="Register for developer beta..."
                        value={waitlistEmail}
                        onChange={(e) => setWaitlistEmail(e.target.value)}
                        required
                        className="flex-1 bg-[#F2F4F8] dark:bg-[#10182F] border border-[#E3E8F0] dark:border-[#293451] px-3 py-2 text-xs rounded-xs text-[#0F1221] dark:text-[#F5F7FF] focus:outline-none focus:border-[#00D9F5]"
                      />
                      <button
                        type="submit"
                        className="p-2 btn-brand-gradient rounded-xs text-xs font-semibold hover:opacity-95 transition-opacity shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00D9F5]"
                        title="Submit developer interest"
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

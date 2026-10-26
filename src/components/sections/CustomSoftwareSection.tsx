import React, { useState } from 'react';
import { ArrowUpRight, Cpu, Layers, Database, Zap, GitBranch } from 'lucide-react';

interface CustomSoftwareSectionProps {
  onDiscussProject?: () => void;
}

export const CustomSoftwareSection: React.FC<CustomSoftwareSectionProps> = ({ onDiscussProject }) => {
  const [activeModule, setActiveModule] = useState<number>(0);

  const modules = [
    {
      icon: Layers,
      title: 'Full-Stack Web Applications',
      tag: 'ARCHITECTURE',
      description: 'Zero-bloat TypeScript applications built with resilient state management, sub-second initial load, and accessible keyboard navigation.',
      specs: ['Next.js / Vite / React', 'Node & Edge Functions', 'GraphQL / REST / tRPC', 'Tailwind & Motion Engines']
    },
    {
      icon: Database,
      title: 'Internal Tools & Operations Cockpits',
      tag: 'SYSTEMS',
      description: 'Bespoke dashboards and control consoles that aggregate distributed company data into clean, actionable, high-bandwidth interfaces.',
      specs: ['Role-Based Access (RBAC)', 'Real-time WebSocket Feeds', 'Tabular Numerical Views', 'Audit Logging & Encryption']
    },
    {
      icon: Zap,
      title: 'Workflow Automation & Middleware',
      tag: 'PIPELINES',
      description: 'Connecting disconnected third-party services and proprietary databases into deterministic, error-tolerant background automation pipelines.',
      specs: ['Event-Driven Queues', 'Webhook Reconciliation', 'Failure Self-Healing', 'Automated Scheduled Cron']
    },
    {
      icon: Cpu,
      title: 'AI-Assisted Workflows & Agent RAG',
      tag: 'INTELLIGENCE',
      description: 'Grounded vector retrieval systems and specialized LLM agents trained on proprietary institutional context to automate repetitive cognitive tasks.',
      specs: ['Sub-50ms Vector Search', 'Multimodal Parsing', 'Context Window Packing', 'Hallucination Guardrails']
    }
  ];

  return (
    <section id="custom-software" className="py-24 md:py-32 border-b border-[#E3E8F0] dark:border-[#293451]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-12 border-b border-[#E3E8F0] dark:border-[#293451] gap-4">
          <div className="font-mono-tech text-xs tracking-widest text-[#5D6680] dark:text-[#A7B2CD] uppercase">
            SOFTWARE ENGINEERING
          </div>
          <div className="font-mono-tech text-xs tracking-widest text-[#5D6680] dark:text-[#A7B2CD] uppercase">
            RESILIENT ARCHITECTURES
          </div>
        </div>

        {/* Section Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12 items-end">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-[#0F1221] dark:text-[#F5F7FF] leading-tight">
              Software that fits{' '}
              <span className="font-editorial italic font-normal text-[#0F1221] dark:text-[#F5F7FF]">
                forward.
              </span>
            </h2>
            <p className="text-sm md:text-base text-[#5D6680] dark:text-[#A7B2CD] font-normal leading-relaxed max-w-xl">
              Purpose-built software designed around real workflows, practical constraints, and what comes next.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <button
              onClick={onDiscussProject}
              type="button"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-brand-gradient text-xs font-semibold tracking-wide hover:opacity-95 active:scale-95 transition-all cursor-pointer shadow-sm group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D9F5]"
            >
              <span>Discuss a software project</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-white" />
            </button>
          </div>
        </div>

        {/* Interactive Architecture Schema Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
          {/* Left: Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {modules.map((mod, idx) => {
              const isSelected = activeModule === idx;
              const IconComp = mod.icon;
              return (
                <div
                  key={idx}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isSelected}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveModule(idx);
                    }
                  }}
                  onClick={() => setActiveModule(idx)}
                  className={`p-5 rounded-xs border transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00D9F5] ${
                    isSelected
                      ? 'border-[#00D9F5] bg-[#F2F4F8] dark:bg-[#10182F] shadow-xs'
                      : 'border-[#E3E8F0] dark:border-[#293451] hover:border-[#075BFF]/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-3">
                      <IconComp size={16} className={isSelected ? 'text-[#00D9F5]' : 'text-[#7C86A0]'} />
                      <h4 className="text-sm font-bold font-display text-[#0F1221] dark:text-[#F5F7FF]">
                        {mod.title}
                      </h4>
                    </div>
                    <span className="font-mono-tech text-[10px] text-[#7C86A0] uppercase tracking-widest">
                      {mod.tag}
                    </span>
                  </div>
                  <p className="text-xs text-[#5D6680] dark:text-[#A7B2CD] pl-7">
                    {mod.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Technical Blueprint Console */}
          <div className="lg:col-span-7 bg-[#050712] text-[#F5F7FF] p-6 sm:p-8 rounded-xs border border-[#293451] flex flex-col justify-between font-mono-tech relative overflow-hidden transition-colors shadow-lg">
            {/* Ambient console glow */}
            <div 
              aria-hidden="true" 
              className="absolute -top-12 -right-12 w-48 h-48 bg-[#00D9F5]/10 rounded-full blur-2xl pointer-events-none" 
            />

            {/* Top Bar of Console */}
            <div className="flex items-center justify-between border-b border-[#293451] pb-4 text-xs text-[#A7B2CD]">
              <div className="flex items-center gap-2">
                <GitBranch size={14} className="text-[#00D9F5]" />
                <span className="text-[#00D9F5]">ARCH_MODULE // {modules[activeModule].tag}</span>
              </div>
              <span className="text-[10px] text-[#7C86A0]">PEERUP ARCH SPEC 2024</span>
            </div>

            {/* Middle: Schematic Code & Architecture Layout */}
            <div className="py-8 space-y-6 relative z-10">
              <div className="space-y-2">
                <span className="text-xs text-[#7C86A0] uppercase tracking-wider">Module Specification</span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
                  {modules[activeModule].title}
                </h3>
                <p className="text-xs text-[#A7B2CD] font-sans leading-relaxed pt-1">
                  {modules[activeModule].description}
                </p>
              </div>

              {/* Stack Specs */}
              <div className="pt-2">
                <span className="text-[11px] text-[#7C86A0] uppercase tracking-wider block mb-3">Verified Tech Stack</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {modules[activeModule].specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-[#A7B2CD] bg-[#0A0F2C] p-2.5 rounded-xs border border-[#293451]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D9F5]" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Terminal Status */}
            <div className="pt-4 border-t border-[#293451] flex justify-between items-center text-[10px] text-[#7C86A0]">
              <span className="text-[#00D9F5]">● LATENCY BUDGET: SUB-16MS</span>
              <span>TYPE-SAFE × PRODUCTION TESTED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

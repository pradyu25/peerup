import React, { useState } from 'react';
import { ArrowUpRight, Cpu, Layers, Database, Shield, Zap, GitBranch } from 'lucide-react';

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
    <section id="custom-software" className="py-24 md:py-32 border-b border-neutral-300/60 dark:border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-12 border-b border-neutral-300/60 dark:border-neutral-800/60 gap-4">
          <div className="font-mono-tech text-xs tracking-widest text-neutral-500 uppercase">
            SOFTWARE ENGINEERING
          </div>
          <div className="font-mono-tech text-xs tracking-widest text-neutral-500 uppercase">
            RESILIENT ARCHITECTURES
          </div>
        </div>

        {/* Section Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12 items-end">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-[#111110] dark:text-[#F2F0E9] leading-tight">
              Software that fits{' '}
              <span className="font-editorial italic font-normal text-[#111110] dark:text-[#F2F0E9]">
                forward.
              </span>
            </h2>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed max-w-xl">
              Purpose-built software designed around real workflows, practical constraints, and what comes next.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <button
              onClick={onDiscussProject}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111110] text-[#F2F0E9] dark:bg-[#F2F0E9] dark:text-[#111110] text-xs font-semibold tracking-wide hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-sm group"
            >
              <span>Discuss a software project</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
                  onClick={() => setActiveModule(idx)}
                  className={`p-5 rounded-xs border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'border-[#111110] dark:border-[#F2F0E9] bg-neutral-200/40 dark:bg-neutral-800/40 shadow-xs'
                      : 'border-neutral-300/60 dark:border-neutral-800/60 hover:border-neutral-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-3">
                      <IconComp size={16} className={isSelected ? 'text-[#C59B27]' : 'text-neutral-400'} />
                      <h4 className="text-sm font-bold font-display text-[#111110] dark:text-[#F2F0E9]">
                        {mod.title}
                      </h4>
                    </div>
                    <span className="font-mono-tech text-[10px] text-neutral-400 uppercase tracking-widest">
                      {mod.tag}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 pl-7">
                    {mod.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Technical Blueprint Console */}
          <div className="lg:col-span-7 bg-[#111110] text-[#F2F0E9] p-6 sm:p-8 rounded-xs border border-neutral-800 flex flex-col justify-between font-mono-tech relative overflow-hidden">
            {/* Top Bar of Console */}
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <GitBranch size={14} className="text-[#C59B27]" />
                <span>ARCH_MODULE // {modules[activeModule].tag}</span>
              </div>
              <span className="text-[10px] text-neutral-500">PEERUP ENGINE SPEC v2.4</span>
            </div>

            {/* Middle: Schematic Code & Architecture Layout */}
            <div className="py-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs text-neutral-500 uppercase tracking-wider">Module Identification</span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  {modules[activeModule].title}
                </h3>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  {modules[activeModule].description}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-neutral-800/80">
                <span className="text-xs text-[#C59B27] tracking-wider uppercase">Key Engineering Specifications:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {modules[activeModule].specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-neutral-300 bg-neutral-900/80 p-2.5 rounded-xs border border-neutral-800">
                      <Shield size={12} className="text-[#C59B27] shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="border-t border-neutral-800 pt-4 flex justify-between items-center text-[10px] text-neutral-500">
              <span>ZERO MOCK DATA · DIRECT ARCHITECTURE</span>
              <button
                onClick={onDiscussProject}
                className="text-[#C59B27] hover:underline underline-offset-4 cursor-pointer flex items-center gap-1"
              >
                <span>INITIATE BLUEPRINT INQUIRY</span>
                <ArrowUpRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

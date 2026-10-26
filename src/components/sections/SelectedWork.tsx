import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { PROJECTS } from '../../data/site-content';
import { Project } from '../../types';
import { ProjectCardVisual } from '../ui/ProjectCardVisual';

interface SelectedWorkProps {
  onSelectProject?: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [selectedProjectModal, setSelectedProjectModal] = useState<Project | null>(null);
  const [betaEmail, setBetaEmail] = useState('');
  const [betaSubmitted, setBetaSubmitted] = useState(false);

  const categories = ['All', 'Digital Products', 'AI & Automation', 'Developer Tools', 'Brand & Web'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  const handleBetaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!betaEmail.trim()) return;

    // Save inquiry to localStorage for reliable local persistence
    try {
      const existing = JSON.parse(localStorage.getItem('peerup_product_inquiries') || '[]');
      existing.push({
        email: betaEmail.trim(),
        product: selectedProjectModal?.title || 'General Product Interest',
        date: new Date().toISOString()
      });
      localStorage.setItem('peerup_product_inquiries', JSON.stringify(existing));
    } catch {
      // LocalStorage fallback
    }

    setBetaSubmitted(true);
    setTimeout(() => {
      setBetaSubmitted(false);
      setBetaEmail('');
    }, 4000);
  };

  return (
    <section id="work" className="py-24 md:py-32 border-b border-[#E3E8F0] dark:border-[#293451]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-12 border-b border-[#E3E8F0] dark:border-[#293451] gap-4">
          <div className="font-mono-tech text-xs tracking-widest text-[#5D6680] dark:text-[#A7B2CD] uppercase">
            / 01 FEATURED PRODUCTS & SYSTEMS
          </div>
          <div className="font-mono-tech text-xs tracking-widest text-[#5D6680] dark:text-[#A7B2CD] uppercase">
            IDEAS INTO PRODUCTS
          </div>
        </div>

        {/* Headline & Filter Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 items-end">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-[#0F1221] dark:text-[#F5F7FF] leading-tight">
              Featured{' '}
              <span className="font-editorial italic font-normal text-[#0F1221] dark:text-[#F5F7FF]">
                products.
              </span>
            </h2>
            <p className="text-sm md:text-base text-[#5D6680] dark:text-[#A7B2CD] max-w-xl font-normal leading-relaxed">
              Utility-driven software applications, AI processing engines, and developer tools built from initial concept to active development.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="lg:col-span-5 flex flex-wrap gap-2 justify-start lg:justify-end items-center">
            {categories.map(cat => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  type="button"
                  className={`px-3.5 py-1.5 text-xs font-mono-tech tracking-wider uppercase rounded-full transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00D9F5] ${
                    isActive
                      ? 'bg-gradient-to-r from-[#00D9F5] to-[#075BFF] text-white font-semibold shadow-xs'
                      : 'bg-transparent text-[#5D6680] dark:text-[#A7B2CD] hover:text-[#0F1221] dark:hover:text-[#F5F7FF] border border-transparent hover:border-[#E3E8F0] dark:hover:border-[#293451]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {filteredProjects.map((project) => {
            const isHovered = hoveredProjectId === project.id;
            return (
              <div
                key={project.id}
                tabIndex={0}
                role="button"
                aria-label={`View ${project.title} details`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProjectModal(project);
                  }
                }}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                onClick={() => setSelectedProjectModal(project)}
                className="group cursor-pointer flex flex-col space-y-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D9F5] rounded-xs p-1"
              >
                {/* Visual Container */}
                <div className="relative aspect-16/10 w-full overflow-hidden rounded-xs border border-[#E3E8F0] dark:border-[#293451] transition-transform duration-500 group-hover:-translate-y-1">
                  <ProjectCardVisual projectId={project.id} isHovered={isHovered} />

                  {/* Corner Status Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#050712]/85 text-[#F5F7FF] px-2.5 py-1 rounded-xs font-mono-tech text-[10px] tracking-widest backdrop-blur-xs">
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      project.status === 'Live' ? 'bg-[#00D9F5]' :
                      project.status === 'Beta' ? 'bg-[#702BFF]' : 'bg-[#7C86A0]'
                    }`} />
                    <span>{project.status.toUpperCase()}</span>
                  </div>

                  {/* Platform Badge */}
                  <div className="absolute bottom-3 right-3 bg-[#050712]/75 text-[#F5F7FF] px-2 py-0.5 rounded-xs font-mono-tech text-[9px] tracking-wider backdrop-blur-xs">
                    {project.platform}
                  </div>
                </div>

                {/* Card Metadata */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono-tech text-xs sm:text-sm font-semibold tracking-wider text-[#0F1221] dark:text-[#F5F7FF] flex items-center gap-2 group-hover:text-[#075BFF] dark:group-hover:text-[#00D9F5] transition-colors">
                      <span>{project.number} / {project.title}</span>
                    </h3>
                    <ArrowUpRight
                      size={16}
                      className="text-[#7C86A0] group-hover:text-[#075BFF] dark:group-hover:text-[#00D9F5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </div>
                  <p className="text-xs text-[#5D6680] dark:text-[#A7B2CD] font-normal leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProjectModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#050712]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => {
            setSelectedProjectModal(null);
            setBetaSubmitted(false);
          }}
        >
          <div
            className="bg-[#FAFAFC] dark:bg-[#0A0F2C] text-[#0F1221] dark:text-[#F5F7FF] w-full max-w-2xl rounded-sm border border-[#E3E8F0] dark:border-[#293451] shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-[#E3E8F0] dark:border-[#293451] pb-4">
              <div>
                <div className="flex items-center gap-2 font-mono-tech text-xs text-[#00D9F5] tracking-widest uppercase">
                  <span>{selectedProjectModal.number}</span>
                  <span>·</span>
                  <span>{selectedProjectModal.platform}</span>
                  <span>·</span>
                  <span className="text-[#5D6680] dark:text-[#A7B2CD]">{selectedProjectModal.status}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight mt-1">
                  {selectedProjectModal.title}
                </h3>
              </div>
              <button
                onClick={() => {
                  setSelectedProjectModal(null);
                  setBetaSubmitted(false);
                }}
                aria-label="Close product modal"
                className="w-8 h-8 rounded-full border border-[#E3E8F0] dark:border-[#293451] hover:border-[#075BFF] dark:hover:border-[#00D9F5] flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00D9F5]"
              >
                <X size={16} />
              </button>
            </div>

            {/* Visual preview */}
            <div className="w-full aspect-16/9 rounded-xs overflow-hidden border border-[#E3E8F0] dark:border-[#293451]">
              <ProjectCardVisual projectId={selectedProjectModal.id} isHovered={true} />
            </div>

            {/* Description & Status */}
            <div className="space-y-4 text-sm text-[#5D6680] dark:text-[#A7B2CD] leading-relaxed">
              <p className="font-medium text-base text-[#0F1221] dark:text-[#F5F7FF]">
                {selectedProjectModal.subtitle}
              </p>
              <p>{selectedProjectModal.description}</p>
              
              {selectedProjectModal.pricing && (
                <div className="inline-block px-3 py-1 rounded bg-[#F2F4F8] dark:bg-[#10182F] font-mono-tech text-xs text-[#0F1221] dark:text-[#F5F7FF] border border-[#E3E8F0] dark:border-[#293451]">
                  Model: <span className="font-semibold text-[#075BFF] dark:text-[#00D9F5]">{selectedProjectModal.pricing}</span>
                </div>
              )}
            </div>

            {/* Deliverables / Capabilities */}
            <div className="pt-2">
              <h4 className="font-mono-tech text-xs tracking-wider uppercase text-[#7C86A0] mb-3">
                Core Architecture & Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedProjectModal.deliverables.map((del, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs font-mono-tech text-[#5D6680] dark:text-[#A7B2CD] py-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D9F5]" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* In-Modal Beta / Early Access Interest Form */}
            <div className="p-4 rounded border border-[#E3E8F0] dark:border-[#293451] bg-[#F2F4F8]/70 dark:bg-[#10182F]/70 space-y-3">
              <div className="font-mono-tech text-xs font-semibold uppercase tracking-wider text-[#0F1221] dark:text-[#F5F7FF]">
                Request Updates or Early Access
              </div>
              {betaSubmitted ? (
                <div className="text-xs font-mono-tech text-[#00D9F5] py-1">
                  ✓ Inquiry saved locally. We will contact you at {betaEmail} for updates.
                </div>
              ) : (
                <form onSubmit={handleBetaSubmit} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={betaEmail}
                    onChange={e => setBetaEmail(e.target.value)}
                    className="flex-1 px-3 py-2 rounded bg-white dark:bg-[#050712] border border-[#E3E8F0] dark:border-[#293451] text-xs text-[#0F1221] dark:text-[#F5F7FF] focus:outline-none focus:border-[#00D9F5]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded btn-brand-gradient font-mono-tech text-xs font-semibold hover:opacity-95 transition-opacity whitespace-nowrap cursor-pointer"
                  >
                    Register Interest
                  </button>
                </form>
              )}
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-[#E3E8F0] dark:border-[#293451] flex justify-between items-center text-xs font-mono-tech text-[#7C86A0]">
              <span>EST. {selectedProjectModal.year} · HYDERABAD</span>
              <button
                onClick={() => {
                  setSelectedProjectModal(null);
                  setBetaSubmitted(false);
                }}
                className="px-4 py-2 rounded-full border border-[#E3E8F0] dark:border-[#293451] text-[#0F1221] dark:text-[#F5F7FF] font-semibold text-xs hover:bg-[#F2F4F8] dark:hover:bg-[#10182F] transition-colors cursor-pointer focus-visible:outline-none"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

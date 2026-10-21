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

  const categories = ['All', 'Digital Products', 'AI & Automation', 'Brand & Identity', 'Web Experiences'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="py-24 md:py-32 border-b border-neutral-300/60 dark:border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-12 border-b border-neutral-300/60 dark:border-neutral-800/60 gap-4">
          <div className="font-mono-tech text-xs tracking-widest text-neutral-500 uppercase">
            / 02 WORK
          </div>
          <div className="font-mono-tech text-xs tracking-widest text-neutral-500 uppercase">
            IDEAS INTO REAL IMPACT
          </div>
        </div>

        {/* Headline & Filter Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 items-end">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-[#111110] dark:text-[#F2F0E9] leading-tight">
              Selected{' '}
              <span className="font-editorial italic font-normal text-[#111110] dark:text-[#F2F0E9]">
                work.
              </span>
            </h2>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 max-w-xl font-normal">
              A selection of projects where design, engineering and technology come together to create real impact.
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
                  className={`px-3 py-1.5 text-xs font-mono-tech tracking-wider uppercase rounded-full transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B39A73] ${
                    isActive
                      ? 'bg-[#111110] text-[#F2F0E9] dark:bg-[#F2F0E9] dark:text-[#111110] font-semibold'
                      : 'bg-transparent text-neutral-500 hover:text-[#111110] dark:hover:text-[#F2F0E9] border border-transparent hover:border-neutral-300 dark:hover:border-neutral-700'
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
                aria-label={`View ${project.title} case study details`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProjectModal(project);
                  }
                }}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                onClick={() => setSelectedProjectModal(project)}
                className="group cursor-pointer flex flex-col space-y-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B39A73] rounded-xs p-1"
              >
                {/* Visual Container */}
                <div className="relative aspect-16/10 w-full overflow-hidden rounded-xs border border-neutral-300/60 dark:border-neutral-800/60 transition-transform duration-500 group-hover:-translate-y-1">
                  <ProjectCardVisual projectId={project.id} isHovered={isHovered} />

                  {/* Corner Index Tag */}
                  <div className="absolute top-3 left-3 bg-[#111110]/85 text-[#F2F0E9] px-2 py-0.5 rounded-xs font-mono-tech text-[10px] tracking-widest backdrop-blur-xs">
                    {project.category}
                  </div>
                </div>

                {/* Card Metadata */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono-tech text-xs sm:text-sm font-semibold tracking-wider text-[#111110] dark:text-[#F2F0E9] flex items-center gap-2 group-hover:text-[#B39A73] transition-colors">
                      <span>{project.number} / {project.title}</span>
                    </h3>
                    <ArrowUpRight
                      size={16}
                      className="text-neutral-400 group-hover:text-[#111110] dark:group-hover:text-[#F2F0E9] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProjectModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#111110]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedProjectModal(null)}
        >
          <div
            className="bg-[#F2F0E9] dark:bg-[#1A1918] text-[#111110] dark:text-[#F2F0E9] w-full max-w-2xl rounded-sm border border-neutral-300 dark:border-neutral-700 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-neutral-300 dark:border-neutral-800 pb-4">
              <div>
                <span className="font-mono-tech text-xs text-[#B39A73] tracking-widest uppercase">
                  {selectedProjectModal.number} — {selectedProjectModal.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight mt-1">
                  {selectedProjectModal.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProjectModal(null)}
                aria-label="Close project modal"
                className="w-8 h-8 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-300 flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B39A73]"
              >
                <X size={16} />
              </button>
            </div>

            {/* Visual preview */}
            <div className="w-full aspect-16/9 rounded-xs overflow-hidden border border-neutral-300 dark:border-neutral-800">
              <ProjectCardVisual projectId={selectedProjectModal.id} isHovered={true} />
            </div>

            {/* Description */}
            <div className="space-y-4 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              <p className="font-medium text-base text-[#111110] dark:text-[#F2F0E9]">
                {selectedProjectModal.subtitle}
              </p>
              <p>{selectedProjectModal.description}</p>
            </div>

            {/* Deliverables */}
            <div className="pt-2">
              <h4 className="font-mono-tech text-xs tracking-wider uppercase text-neutral-500 mb-3">
                Key Architecture & Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedProjectModal.deliverables.map((del, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs font-mono-tech text-neutral-600 dark:text-neutral-400 py-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B39A73]" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-neutral-300 dark:border-neutral-800 flex justify-between items-center text-xs font-mono-tech text-neutral-500">
              <span>{selectedProjectModal.clientType}</span>
              <button
                onClick={() => setSelectedProjectModal(null)}
                className="px-4 py-2 rounded-full bg-[#111110] text-[#F2F0E9] dark:bg-[#F2F0E9] dark:text-[#111110] font-semibold text-xs hover:opacity-90 transition-opacity cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B39A73]"
              >
                Close Project
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

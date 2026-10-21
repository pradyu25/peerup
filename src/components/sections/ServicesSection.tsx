import React, { useState } from 'react';
import { SERVICES } from '../../data/site-content';
import { ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  onInquireService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onInquireService }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section id="services" className="py-24 md:py-32 border-b border-neutral-300/60 dark:border-neutral-800/60 bg-[#EAE7E0]/30 dark:bg-[#161514]/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-12 border-b border-neutral-300/60 dark:border-neutral-800/60 gap-4">
          <div className="font-mono-tech text-xs tracking-widest text-neutral-500 uppercase">
            SERVICES & EXPERTISE
          </div>
          <div className="font-mono-tech text-xs tracking-widest text-neutral-500 uppercase">
            END-TO-END EXECUTION
          </div>
        </div>

        {/* Section Title */}
        <div className="py-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-[#111110] dark:text-[#F2F0E9] max-w-2xl leading-tight">
            Interdisciplinary capabilities for modern products.
          </h2>
        </div>

        {/* Editorial Service Accordion List */}
        <div className="divide-y divide-neutral-300/60 dark:divide-neutral-800/60 border-y border-neutral-300/60 dark:border-neutral-800/60">
          {SERVICES.map((service, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={service.number}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`py-8 md:py-12 transition-colors duration-300 cursor-pointer ${
                  isHovered ? 'bg-neutral-200/20 dark:bg-neutral-800/20 px-4 -mx-4 rounded-xs' : ''
                }`}
                onClick={() => onInquireService?.(service.title)}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left: Number & Title */}
                  <div className="lg:col-span-5 flex items-baseline gap-6">
                    <span className="font-mono-tech text-xs sm:text-sm text-neutral-400 dark:text-neutral-500 tabular-nums">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-[#111110] dark:text-[#F2F0E9] group-hover:text-[#C59B27] transition-colors flex items-center gap-3">
                        <span>{service.title}</span>
                        <ArrowUpRight size={18} className="text-neutral-400 group-hover:text-[#111110] dark:group-hover:text-[#F2F0E9] transition-transform" />
                      </h3>
                      <p className="font-mono-tech text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Middle: Description */}
                  <div className="lg:col-span-4 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                    {service.description}
                  </div>

                  {/* Right: Specific Capabilities */}
                  <div className="lg:col-span-3 space-y-1.5 font-mono-tech text-[11px] text-neutral-500 dark:text-neutral-400">
                    {service.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#C59B27]" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

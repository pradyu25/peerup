import React, { useState } from 'react';
import { SERVICES } from '../../data/site-content';
import { ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  onInquireService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onInquireService }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section id="services" className="py-24 md:py-32 border-b border-[#E3E8F0] dark:border-[#293451] bg-[#F2F4F8]/30 dark:bg-[#0A0F2C]/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-12 border-b border-[#E3E8F0] dark:border-[#293451] gap-4">
          <div className="font-mono-tech text-xs tracking-widest text-[#5D6680] dark:text-[#A7B2CD] uppercase">
            / 04 TECHNICAL COMMISSIONS & ADVISORY
          </div>
          <div className="font-mono-tech text-xs tracking-widest text-[#5D6680] dark:text-[#A7B2CD] uppercase">
            SELECT COLLABORATIONS
          </div>
        </div>

        {/* Section Title */}
        <div className="py-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-[#0F1221] dark:text-[#F5F7FF] max-w-2xl leading-tight">
            Selective technical commissions for ambitious teams.
          </h2>
          <p className="text-sm md:text-base text-[#5D6680] dark:text-[#A7B2CD] mt-3 max-w-xl font-normal">
            While PeerUp primarily builds internal products and ventures, we partner with founders and product teams on select software commissions.
          </p>
        </div>

        {/* Editorial Service Accordion List */}
        <div className="divide-y divide-[#E3E8F0] dark:divide-[#293451] border-y border-[#E3E8F0] dark:border-[#293451]">
          {SERVICES.map((service, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={service.number}
                tabIndex={0}
                role="button"
                aria-label={`Inquire about ${service.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onInquireService?.(service.title);
                  }
                }}
                onFocus={() => setHoveredIndex(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`py-8 md:py-12 transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00D9F5] ${
                  isHovered ? 'bg-[#F2F4F8] dark:bg-[#10182F] px-4 -mx-4 rounded-xs border-l-2 border-[#00D9F5]' : ''
                }`}
                onClick={() => onInquireService?.(service.title)}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left: Number & Title */}
                  <div className="lg:col-span-5 flex items-baseline gap-6">
                    <span className="font-mono-tech text-xs sm:text-sm text-[#7C86A0] tabular-nums">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-[#0F1221] dark:text-[#F5F7FF] group-hover:text-[#075BFF] dark:group-hover:text-[#00D9F5] transition-colors flex items-center gap-3">
                        <span>{service.title}</span>
                        <ArrowUpRight size={18} className="text-[#00D9F5] transition-transform" />
                      </h3>
                      <p className="font-mono-tech text-xs text-[#5D6680] dark:text-[#A7B2CD] mt-1">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Middle: Description */}
                  <div className="lg:col-span-4 text-xs sm:text-sm text-[#5D6680] dark:text-[#A7B2CD] leading-relaxed font-normal">
                    {service.description}
                  </div>

                  {/* Right: Specific Capabilities */}
                  <div className="lg:col-span-3 space-y-1.5 font-mono-tech text-[11px] text-[#5D6680] dark:text-[#A7B2CD]">
                    {service.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00D9F5]" />
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

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { SITE_METADATA } from '../../data/site-content';

interface SiteFooterProps {
  onNavigate: (sectionId: string) => void;
}

export const SiteFooter: React.FC<SiteFooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Work', id: 'work' },
    { label: 'Studio', id: 'studio' },
    { label: 'Approach', id: 'approach' },
    { label: 'Services', id: 'services' },
    { label: 'Custom Software', id: 'custom-software' },
    { label: 'Tools', id: 'tools' },
    { label: 'Journal', id: 'journal' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <footer className="bg-[#111110] text-[#F2F0E9] pt-20 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-800">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="text-2xl font-bold font-display tracking-tight text-white flex items-center gap-1">
              <span>{SITE_METADATA.brandName}</span>
            </div>
            <p className="text-xs text-neutral-400 font-normal leading-relaxed max-w-sm">
              An independent creative and technology collective combining design, software engineering, and emerging technology to build meaningful digital products and useful experiences.
            </p>
            <div className="pt-2 font-mono-tech text-xs text-neutral-500">
              <p>{SITE_METADATA.founded} — {SITE_METADATA.location}</p>
              <p>DESIGN × ENGINEERING × AI</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 font-mono-tech text-xs">
            <span className="text-neutral-500 uppercase tracking-widest block mb-2">INDEX</span>
            <div className="grid grid-cols-2 gap-2 text-neutral-400">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Status */}
          <div className="md:col-span-3 space-y-3 font-mono-tech text-xs flex flex-col justify-between">
            <div>
              <span className="text-neutral-500 uppercase tracking-widest block mb-2">CONNECT</span>
              <a
                href={`mailto:${SITE_METADATA.contactEmail}`}
                className="text-neutral-300 hover:text-white transition-colors underline underline-offset-4 block mb-2"
              >
                {SITE_METADATA.contactEmail}
              </a>
              <span className="text-[11px] text-neutral-500 block">
                Open for Q3/Q4 collaboration inquiries.
              </span>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-xs self-start pt-4 cursor-pointer group"
            >
              <span>BACK TO TOP</span>
              <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Large Oversized Typographic Brandmark */}
        <div className="py-12 select-none pointer-events-none text-center">
          <span className="font-display font-black tracking-tighter text-[13vw] leading-none text-neutral-800/60 block">
            PEERUP®
          </span>
        </div>

        {/* Bottom Legal / Dynamic Year */}
        <div className="pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono-tech text-neutral-500 gap-3">
          <div>
            PEERUP COLLECTIVE © {currentYear}. ALL RIGHTS RESERVED.
          </div>
          <div>
            “MATTER BECOMES MEANING. IDEAS BECOME EXPERIENCES.”
          </div>
        </div>
      </div>
    </footer>
  );
};

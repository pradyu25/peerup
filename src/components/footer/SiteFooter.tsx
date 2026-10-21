import React from 'react';
import { ArrowUp } from 'lucide-react';
import { SITE_METADATA } from '../../data/site-content';
import { BrandLogo } from '../ui/BrandLogo';

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
    <footer className="bg-[#EAE7E0] dark:bg-[#111110] text-[#111110] dark:text-[#F2F0E9] pt-20 pb-12 border-t border-neutral-300 dark:border-neutral-800 transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-300 dark:border-neutral-800">
          {/* Brand Info with Official Emblem */}
          <div className="md:col-span-6 space-y-5">
            <BrandLogo variant="footer" />
            <p className="text-xs text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed max-w-sm">
              An independent creative and technology collective combining design, software engineering, and emerging technology to build meaningful digital products and useful experiences.
            </p>
            <div className="pt-2 font-mono-tech text-xs text-neutral-500 dark:text-neutral-400">
              <p>{SITE_METADATA.founded} — {SITE_METADATA.location}</p>
              <p className="text-[#B39A73]">DESIGN × ENGINEERING × AI</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 font-mono-tech text-xs">
            <span className="text-neutral-500 uppercase tracking-widest block mb-2">INDEX</span>
            <div className="grid grid-cols-2 gap-2 text-neutral-600 dark:text-neutral-400">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="hover:text-black dark:hover:text-white transition-colors text-left cursor-pointer focus-visible:outline-none focus-visible:text-[#B39A73]"
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
                className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors underline underline-offset-4 block mb-2"
              >
                {SITE_METADATA.contactEmail}
              </a>
              <span className="text-[11px] text-neutral-500 block">
                Open for select collaborations and technology commissions.
              </span>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors text-xs self-start pt-4 cursor-pointer group focus-visible:outline-none focus-visible:text-[#B39A73]"
            >
              <span>BACK TO TOP</span>
              <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform text-[#B39A73]" />
            </button>
          </div>
        </div>

        {/* Large Oversized Typographic Brandmark */}
        <div className="py-12 select-none pointer-events-none text-center overflow-hidden">
          <span className="font-display font-black tracking-tighter text-[14vw] leading-none text-neutral-300/70 dark:text-neutral-800/60 block uppercase transition-colors">
            PEERUP
          </span>
        </div>

        {/* Bottom Legal / Dynamic Year */}
        <div className="pt-6 border-t border-neutral-300 dark:border-neutral-800/80 flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono-tech text-neutral-500 gap-3">
          <div>
            PEERUP COLLECTIVE © {currentYear}. ALL RIGHTS RESERVED.
          </div>
          <div className="text-neutral-600 dark:text-neutral-400">
            “MATTER BECOMES MEANING. IDEAS BECOME EXPERIENCES.”
          </div>
        </div>
      </div>
    </footer>
  );
};

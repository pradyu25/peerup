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
    { label: 'Products', id: 'work' },
    { label: 'Labs', id: 'tools' },
    { label: 'About & Founder', id: 'studio' },
    { label: 'Services', id: 'services' },
    { label: 'Journal', id: 'journal' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <footer className="bg-[#F2F4F8] dark:bg-[#0A0F2C] text-[#0F1221] dark:text-[#F5F7FF] pt-20 pb-12 border-t border-[#E3E8F0] dark:border-[#293451] transition-colors duration-400 relative overflow-hidden">
      {/* Subtle bottom gradient accent line */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00D9F5] via-[#075BFF] via-[#702BFF] to-[#F000E8]" 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#E3E8F0] dark:border-[#293451]">
          {/* Brand Info with Official Emblem */}
          <div className="md:col-span-6 space-y-5">
            <BrandLogo variant="footer" />
            <p className="text-xs text-[#5D6680] dark:text-[#A7B2CD] font-normal leading-relaxed max-w-sm">
              A founder-led product company and technology lab focused on building, launching, and growing useful digital products, AI processing engines, and developer tools into sustainable businesses.
            </p>
            <div className="pt-2 font-mono-tech text-xs text-[#5D6680] dark:text-[#A7B2CD]">
              <p>{SITE_METADATA.founded} — {SITE_METADATA.location}</p>
              <p className="text-[#00D9F5] font-semibold mt-0.5">PRODUCTS × AI & ML × VENTURE BUILDING</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 font-mono-tech text-xs">
            <span className="text-[#7C86A0] uppercase tracking-widest block mb-2">INDEX</span>
            <div className="grid grid-cols-2 gap-2 text-[#5D6680] dark:text-[#A7B2CD]">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="hover:text-[#075BFF] dark:hover:text-[#00D9F5] transition-colors text-left cursor-pointer focus-visible:outline-none focus-visible:text-[#00D9F5]"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Status */}
          <div className="md:col-span-3 space-y-3 font-mono-tech text-xs flex flex-col justify-between">
            <div>
              <span className="text-[#7C86A0] uppercase tracking-widest block mb-2">CONNECT</span>
              <a
                href={`mailto:${SITE_METADATA.contactEmail}`}
                className="text-[#0F1221] dark:text-[#F5F7FF] hover:text-[#075BFF] dark:hover:text-[#00D9F5] transition-colors underline underline-offset-4 block mb-2 font-medium"
              >
                {SITE_METADATA.contactEmail}
              </a>
              <span className="text-[11px] text-[#5D6680] dark:text-[#A7B2CD] block">
                Open for product inquiries, beta feedback, and select technical commissions.
              </span>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-[#5D6680] dark:text-[#A7B2CD] hover:text-[#075BFF] dark:hover:text-[#00D9F5] transition-colors text-xs self-start pt-4 cursor-pointer group focus-visible:outline-none focus-visible:text-[#00D9F5]"
            >
              <span>BACK TO TOP</span>
              <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform text-[#00D9F5]" />
            </button>
          </div>
        </div>

        {/* Large Oversized Typographic Brandmark */}
        <div className="py-12 select-none pointer-events-none text-center overflow-hidden">
          <span className="font-display font-black tracking-tighter text-[18vw] sm:text-[20vw] md:text-[22vw] leading-none text-[#0F1221]/[0.05] dark:text-[#F5F7FF]/[0.08] block uppercase transition-colors">
            PEERUP
          </span>
        </div>

        {/* Bottom Legal / Dynamic Year */}
        <div className="pt-6 border-t border-[#E3E8F0] dark:border-[#293451] flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono-tech text-[#7C86A0] gap-3">
          <div>
            PEERUP PRODUCT LAB © {currentYear}. ALL RIGHTS RESERVED.
          </div>
          <div className="text-[#5D6680] dark:text-[#A7B2CD]">
            “IDEAS INTO PRODUCTS. PRODUCTS INTO BUSINESSES.”
          </div>
        </div>
      </div>
    </footer>
  );
};

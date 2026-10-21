import React, { useEffect, useRef } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { GenerativeSculpture } from '../hero/GenerativeSculpture';
import { BrandLogo } from '../ui/BrandLogo';
import { SITE_METADATA } from '../../data/site-content';

interface FullscreenNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export const FullscreenNavigation: React.FC<FullscreenNavigationProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  // Focus trap and focus restoration
  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.getElementById('nav-menu-trigger');
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
          return;
        }

        // Trap focus inside modal
        if (e.key === 'Tab' && containerRef.current) {
          const focusable = containerRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusable.length === 0) return;
          const first = focusable[0];
          const last = focusable[focusable.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === first) {
              last.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === last) {
              first.focus();
              e.preventDefault();
            }
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => closeBtnRef.current?.focus(), 50);

      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
        triggerRef.current?.focus();
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navItems = [
    { number: '01', label: 'Work', target: 'work' },
    { number: '02', label: 'Studio', target: 'studio' },
    { number: '03', label: 'Approach', target: 'approach' },
    { number: '04', label: 'Journal', target: 'journal' },
    { number: '05', label: 'Contact', target: 'contact' }
  ];

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label="Site Navigation Menu"
      className="fixed inset-0 z-50 bg-[#F2F0E9] dark:bg-[#111110] text-[#111110] dark:text-[#F2F0E9] flex flex-col justify-between p-6 md:p-12 lg:p-16 animate-in fade-in duration-300 overflow-hidden transition-colors duration-400"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-neutral-300 dark:border-neutral-800/80 pb-6 w-full">
        {/* Brand with official emblem */}
        <button
          onClick={() => {
            onClose();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="hover:opacity-85 transition-opacity text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B39A73] rounded-sm"
          aria-label="PeerUp Collective Homepage"
        >
          <BrandLogo variant="nav-modal" />
        </button>

        {/* Close Button */}
        <button
          ref={closeBtnRef}
          onClick={onClose}
          type="button"
          aria-label="Close navigation menu"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-200 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer text-[#111110] dark:text-[#F2F0E9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B39A73]"
        >
          <X size={20} strokeWidth={1.5} />
        </button>
      </div>

      {/* Main Content Grid: Left Links, Right Generative Visual */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto py-8 items-center w-full max-w-7xl mx-auto">
        {/* Left Column: Numbered Navigation */}
        <div className="lg:col-span-6 space-y-6 md:space-y-8">
          <p className="font-mono-tech text-[11px] md:text-xs tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
            INDEPENDENT CREATIVE TECHNOLOGY COLLECTIVE
          </p>

          <nav className="space-y-4 md:space-y-6">
            {navItems.map((item, index) => (
              <button
                key={item.target}
                onClick={() => {
                  onNavigate(item.target);
                  onClose();
                }}
                className="group flex items-baseline gap-6 md:gap-8 w-full text-left transition-transform duration-300 hover:translate-x-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B39A73] cursor-pointer"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <span className="font-mono-tech text-sm md:text-base text-neutral-400 dark:text-neutral-500 group-hover:text-[#B39A73] transition-colors tabular-nums">
                  {item.number}
                </span>
                <span className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#111110] dark:text-[#F2F0E9] group-hover:text-black dark:group-hover:text-white transition-colors group-hover:italic">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          <div className="pt-4 border-t border-neutral-300 dark:border-neutral-800/60 font-mono-tech text-xs text-neutral-500 dark:text-neutral-400 space-y-1">
            <p>{SITE_METADATA.founded}</p>
            <p>{SITE_METADATA.location}</p>
          </div>
        </div>

        {/* Right Column: Generative ASCII stream visual */}
        <div className="hidden lg:flex lg:col-span-6 flex-col justify-between h-[420px] relative border-l border-neutral-300 dark:border-neutral-800/60 pl-12">
          {/* Metadata Top */}
          <div className="flex justify-between items-start font-mono-tech text-[11px] tracking-widest text-neutral-500 dark:text-neutral-400 uppercase">
            <span>IDEAS / PEOPLE</span>
            <span>PRODUCTS / EXPERIENCES</span>
          </div>

          {/* Generative Interactive Canvas */}
          <div className="w-full h-[280px] my-auto">
            <GenerativeSculpture interactive={false} />
          </div>

          {/* Bottom Prompt */}
          <button
            onClick={() => {
              onNavigate('contact');
              onClose();
            }}
            className="flex items-center gap-2 font-mono-tech text-xs tracking-wider uppercase text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors self-end group cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B39A73]"
          >
            <span>LET'S BUILD A BRIGHTER TOMORROW</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#B39A73]" />
          </button>
        </div>
      </div>

      {/* Footer Strip */}
      <div className="border-t border-neutral-300 dark:border-neutral-800/80 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500 dark:text-neutral-400 font-mono-tech gap-4">
        <span>PEERUP COLLECTIVE © {new Date().getFullYear()}</span>
        <span>DESIGN × ENGINEERING × ARTIFICIAL INTELLIGENCE</span>
        <button
          onClick={() => {
            navigator.clipboard.writeText(SITE_METADATA.contactEmail);
          }}
          className="hover:text-black dark:hover:text-white transition-colors underline underline-offset-4 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B39A73]"
          title="Click to copy email address"
        >
          {SITE_METADATA.contactEmail}
        </button>
      </div>
    </div>
  );
};

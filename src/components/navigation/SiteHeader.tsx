import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { BrandLogo } from '../ui/BrandLogo';

interface SiteHeaderProps {
  onOpenMenu: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({
  onOpenMenu,
  activeSection,
  onNavigate
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORK', id: 'work' },
    { label: 'STUDIO', id: 'studio' },
    { label: 'APPROACH', id: 'approach' },
    { label: 'JOURNAL', id: 'journal' },
    { label: 'CONTACT', id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#F2F0E9]/92 dark:bg-[#111110]/92 backdrop-blur-md border-b border-neutral-300/40 dark:border-neutral-800/60 shadow-xs'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark with Official Emblem */}
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="hover:opacity-85 transition-opacity whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 rounded-sm"
          aria-label="PeerUp Collective Homepage"
        >
          <BrandLogo variant="header" />
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-xs font-semibold tracking-wider font-display text-neutral-600 dark:text-neutral-400">
          {navLinks.map(link => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 cursor-pointer hover:text-[#111110] dark:hover:text-[#F2F0E9] ${
                  isActive ? 'text-[#111110] dark:text-[#F2F0E9] font-bold' : ''
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-[#B39A73]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Circular Theme Toggle & Fullscreen Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <ThemeToggle size="md" />

          {/* Fullscreen Overlay Trigger */}
          <button
            onClick={onOpenMenu}
            type="button"
            aria-label="Open fullscreen navigation menu"
            id="nav-menu-trigger"
            className="w-9 h-9 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-200 flex items-center justify-center text-[#111110] dark:text-[#F2F0E9] transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B39A73]"
            title="Open navigation menu"
          >
            <Menu size={16} strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </header>
  );
};

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
    { label: 'PRODUCTS', id: 'work' },
    { label: 'LABS', id: 'tools' },
    { label: 'ABOUT', id: 'studio' },
    { label: 'SERVICES', id: 'services' },
    { label: 'CONTACT', id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#FAFAFC]/90 dark:bg-[#050712]/90 backdrop-blur-md border-b border-[#E3E8F0] dark:border-[#293451] shadow-xs'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark with Official Emblem */}
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="hover:opacity-85 transition-opacity whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D9F5] rounded-sm"
          aria-label="PeerUp Collective Homepage"
        >
          <BrandLogo variant="header" />
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-xs font-semibold tracking-wider font-display text-[#5D6680] dark:text-[#A7B2CD]">
          {navLinks.map(link => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 cursor-pointer hover:text-[#0F1221] dark:hover:text-[#F5F7FF] ${
                  isActive ? 'text-[#0F1221] dark:text-[#F5F7FF] font-bold' : ''
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00D9F5] via-[#075BFF] to-[#702BFF] rounded-full" />
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
            className="w-9 h-9 rounded-full border border-[#E3E8F0] dark:border-[#293451] hover:border-[#075BFF] dark:hover:border-[#00D9F5] flex items-center justify-center text-[#0F1221] dark:text-[#F5F7FF] transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D9F5]"
            title="Open navigation menu"
          >
            <Menu size={16} strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </header>
  );
};

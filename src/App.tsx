import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { SiteHeader } from './components/navigation/SiteHeader';
import { FullscreenNavigation } from './components/navigation/FullscreenNavigation';
import { HeroSection } from './components/hero/HeroSection';
import { SelectedWork } from './components/sections/SelectedWork';
import { StudioSection } from './components/sections/StudioSection';
import { ApproachSection } from './components/sections/ApproachSection';
import { CustomSoftwareSection } from './components/sections/CustomSoftwareSection';
import { ToolsProductsSection } from './components/sections/ToolsProductsSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { JournalSection } from './components/sections/JournalSection';
import { ContactSection } from './components/sections/ContactSection';
import { SiteFooter } from './components/footer/SiteFooter';

import { ScrollReveal } from './components/ui/ScrollReveal';

export const AppContent: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section for header indicators
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['work', 'studio', 'approach', 'custom-software', 'tools', 'services', 'journal', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 400) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F0E9] dark:bg-[#111110] text-[#111110] dark:text-[#F2F0E9] selection:bg-[#242321] selection:text-[#F2F0E9] transition-colors duration-400 font-sans relative">
      {/* Primary Header */}
      <SiteHeader
        onOpenMenu={() => setIsMenuOpen(true)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Fullscreen Navigation Modal */}
      <FullscreenNavigation
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections with Framer Motion Reveal Animations */}
      <main>
        {/* Hero Section */}
        <ScrollReveal yOffset={24} duration={0.8}>
          <HeroSection
            onStartProject={() => handleNavigate('contact')}
            onViewWork={() => handleNavigate('work')}
          />
        </ScrollReveal>

        {/* 02 Selected Work */}
        <ScrollReveal yOffset={40} duration={0.8}>
          <SelectedWork />
        </ScrollReveal>

        {/* 03 Studio */}
        <ScrollReveal yOffset={40} duration={0.8}>
          <StudioSection />
        </ScrollReveal>

        {/* 04 Approach */}
        <ScrollReveal yOffset={40} duration={0.8}>
          <ApproachSection />
        </ScrollReveal>

        {/* Software Engineering / Custom Software */}
        <ScrollReveal yOffset={40} duration={0.8}>
          <CustomSoftwareSection
            onDiscussProject={() => handleNavigate('contact')}
          />
        </ScrollReveal>

        {/* Digital Products & Internal Tools */}
        <ScrollReveal yOffset={40} duration={0.8}>
          <ToolsProductsSection />
        </ScrollReveal>

        {/* Capabilities & Services */}
        <ScrollReveal yOffset={40} duration={0.8}>
          <ServicesSection
            onInquireService={() => handleNavigate('contact')}
          />
        </ScrollReveal>

        {/* 05 Journal */}
        <ScrollReveal yOffset={40} duration={0.8}>
          <JournalSection />
        </ScrollReveal>

        {/* 06 Contact */}
        <ScrollReveal yOffset={40} duration={0.8}>
          <ContactSection />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <ScrollReveal yOffset={20} duration={0.6}>
        <SiteFooter onNavigate={handleNavigate} />
      </ScrollReveal>
    </div>
  );
};

export function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

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

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection
          onStartProject={() => handleNavigate('contact')}
          onViewWork={() => handleNavigate('work')}
        />

        {/* 02 Selected Work */}
        <SelectedWork />

        {/* 03 Studio */}
        <StudioSection />

        {/* 04 Approach */}
        <ApproachSection />

        {/* Software Engineering / Custom Software */}
        <CustomSoftwareSection
          onDiscussProject={() => handleNavigate('contact')}
        />

        {/* Digital Products & Internal Tools */}
        <ToolsProductsSection />

        {/* Capabilities & Services */}
        <ServicesSection
          onInquireService={() => handleNavigate('contact')}
        />

        {/* 05 Journal */}
        <JournalSection />

        {/* 06 Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <SiteFooter onNavigate={handleNavigate} />
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

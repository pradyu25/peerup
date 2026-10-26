import React, { useRef, useEffect, useState } from 'react';
import { ArrowUpRight, X, Cpu, Code2, Bot } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { FOUNDER, SITE_METADATA } from '../../data/site-content';

export const StudioSection: React.FC = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;
    const width = (canvas.width = canvas.offsetWidth * 2 || 600);
    const height = (canvas.height = canvas.offsetHeight * 2 || 600);

    const render = () => {
      t += 0.01;
      ctx.clearRect(0, 0, width, height);

      const isDark = theme === 'dark';
      const cx = width / 2;
      const cy = height / 2;

      // Draw orbiting wireframe ellipsoid cage with electric cyan/blue lighting
      const cageLines = 14;
      for (let i = 0; i < cageLines; i++) {
        const angle = (i / cageLines) * Math.PI + t * 0.2;
        ctx.beginPath();
        ctx.ellipse(cx, cy, 180, 180 * Math.abs(Math.sin(angle)), angle + t * 0.1, 0, Math.PI * 2);
        ctx.strokeStyle = isDark ? 'rgba(0, 217, 245, 0.35)' : 'rgba(7, 91, 255, 0.25)';
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      // Draw stacked spiral architectural plates
      const layers = 16;
      for (let i = layers; i >= 0; i--) {
        const layerProgress = i / layers;
        const layerY = cy + (layerProgress - 0.5) * 160 + Math.sin(t + i * 0.3) * 6;
        const layerWidth = 140 - Math.abs(layerProgress - 0.5) * 45;
        const layerHeight = 22;
        const layerAngle = Math.sin(t * 0.4 + i * 0.25) * 0.35 + (i * 0.08);

        ctx.save();
        ctx.translate(cx, layerY);
        ctx.rotate(layerAngle);

        // Plate shadow
        ctx.fillStyle = isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(15, 18, 33, 0.08)';
        ctx.fillRect(-layerWidth / 2 + 4, -layerHeight / 2 + 4, layerWidth, layerHeight);

        // Plate face
        const grad = ctx.createLinearGradient(-layerWidth / 2, 0, layerWidth / 2, 0);
        if (isDark) {
          grad.addColorStop(0, '#10182F');
          grad.addColorStop(0.5, '#0A0F2C');
          grad.addColorStop(1, '#1A2342');
        } else {
          grad.addColorStop(0, '#FFFFFF');
          grad.addColorStop(0.5, '#F2F4F8');
          grad.addColorStop(1, '#E3E8F0');
        }

        ctx.fillStyle = grad;
        ctx.fillRect(-layerWidth / 2, -layerHeight / 2, layerWidth, layerHeight);

        // Rim border with electric hue
        ctx.strokeStyle = isDark ? 'rgba(0, 217, 245, 0.35)' : 'rgba(7, 91, 255, 0.25)';
        ctx.lineWidth = 1;
        ctx.strokeRect(-layerWidth / 2, -layerHeight / 2, layerWidth, layerHeight);

        // Typography textures on edges of plates
        ctx.fillStyle = isDark ? 'rgba(0, 217, 245, 0.6)' : 'rgba(7, 91, 255, 0.6)';
        ctx.font = '10px "JetBrains Mono", monospace';
        if (i % 2 === 0) {
          ctx.fillText('PEERUP // VENTURES', -layerWidth / 2 + 10, 4);
        } else {
          ctx.fillText('EST.2024', -layerWidth / 2 + 10, 4);
        }

        ctx.restore();
      }

      // Floating particle points in brand colors
      for (let p = 0; p < 24; p++) {
        const pAngle = (p / 24) * Math.PI * 2 + t * 0.5;
        const pDist = 170 + Math.sin(t * 2 + p) * 20;
        const px = cx + Math.cos(pAngle) * pDist;
        const py = cy + Math.sin(pAngle) * (pDist * 0.7);

        ctx.beginPath();
        ctx.arc(px, py, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = p % 4 === 0 ? '#00D9F5' : p % 4 === 1 ? '#075BFF' : p % 4 === 2 ? '#702BFF' : '#F000E8';
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [theme]);

  return (
    <section id="studio" className="py-24 md:py-32 border-b border-[#E3E8F0] dark:border-[#293451] bg-[#F2F4F8]/40 dark:bg-[#0A0F2C]/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-12 border-b border-[#E3E8F0] dark:border-[#293451] gap-4">
          <div className="font-mono-tech text-xs tracking-widest text-[#5D6680] dark:text-[#A7B2CD] uppercase">
            / 03 ABOUT & FOUNDER
          </div>
          <div className="font-mono-tech text-xs tracking-widest text-[#5D6680] dark:text-[#A7B2CD] uppercase">
            FOUNDER-LED PRODUCT LAB · EST. 2024
          </div>
        </div>

        {/* Sub-label strip */}
        <div className="pt-6 font-mono-tech text-xs tracking-widest text-[#7C86A0] uppercase">
          CS FUNDAMENTALS × AI/ML × SOFTWARE CRAFTSMANSHIP
        </div>

        {/* Main Grid: Left Copy, Right 3D Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-[#0F1221] dark:text-[#F5F7FF] leading-tight">
              Ideas into products.<br />
              Products into<br />
              <span className="font-editorial italic font-normal text-[#0F1221] dark:text-[#F5F7FF]">
                businesses.
              </span>
            </h2>

            <p className="text-sm md:text-base text-[#5D6680] dark:text-[#A7B2CD] font-normal leading-relaxed max-w-lg">
              PeerUp is a founder-led product company and technology lab focused on building, launching, and growing useful digital products into sustainable software businesses.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setIsStoryModalOpen(true)}
                type="button"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-brand-gradient text-xs font-semibold tracking-wide hover:opacity-95 active:scale-95 transition-all cursor-pointer shadow-sm group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D9F5]"
              >
                <span>Read Founder Story</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-white" />
              </button>
            </div>
          </div>

          {/* Right Column: 3D Stacked Procedural Sculpture */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            <div className="w-full max-w-md aspect-square relative">
              <canvas ref={canvasRef} className="w-full h-full block" />
            </div>
          </div>
        </div>

        {/* Founder Profile Section */}
        <div className="mt-8 pt-12 border-t border-[#E3E8F0] dark:border-[#293451]">
          <div className="p-6 md:p-8 rounded-sm bg-[#FFFFFF] dark:bg-[#0A0F2C] border border-[#E3E8F0] dark:border-[#293451] space-y-6 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E3E8F0] dark:border-[#293451]">
              <div>
                <span className="font-mono-tech text-xs text-[#00D9F5] uppercase tracking-widest block mb-1">
                  FOUNDER PROFILE
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#0F1221] dark:text-[#F5F7FF]">
                  {FOUNDER.name}
                </h3>
                <p className="font-mono-tech text-xs text-[#5D6680] dark:text-[#A7B2CD] mt-1">
                  {FOUNDER.title} · {FOUNDER.location}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#F2F4F8] dark:bg-[#10182F] font-mono-tech text-xs text-[#0F1221] dark:text-[#F5F7FF] border border-[#E3E8F0] dark:border-[#293451]">
                  <Code2 size={13} className="text-[#00D9F5]" />
                  <span>Computer Science</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#F2F4F8] dark:bg-[#10182F] font-mono-tech text-xs text-[#0F1221] dark:text-[#F5F7FF] border border-[#E3E8F0] dark:border-[#293451]">
                  <Bot size={13} className="text-[#075BFF]" />
                  <span>AI & Machine Learning</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#F2F4F8] dark:bg-[#10182F] font-mono-tech text-xs text-[#0F1221] dark:text-[#F5F7FF] border border-[#E3E8F0] dark:border-[#293451]">
                  <Cpu size={13} className="text-[#702BFF]" />
                  <span>Process Automation</span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-7 space-y-3">
                <p className="text-sm text-[#5D6680] dark:text-[#A7B2CD] leading-relaxed">
                  {FOUNDER.bio}
                </p>
                <p className="text-xs text-[#7C86A0] font-mono-tech">
                  Focus: Building software products with direct utility, sub-16ms latency budgets, and sustainable long-term architecture.
                </p>
              </div>

              <div className="md:col-span-5 space-y-2 font-mono-tech text-xs border-t md:border-t-0 md:border-l border-[#E3E8F0] dark:border-[#293451] pt-4 md:pt-0 md:pl-6">
                <span className="text-[#7C86A0] uppercase tracking-wider block mb-2">TECHNICAL FOCUS</span>
                {FOUNDER.expertise.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[#5D6680] dark:text-[#A7B2CD]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D9F5]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Location & Collaboration Strip */}
        <div className="pt-8 border-t border-[#E3E8F0] dark:border-[#293451] flex flex-wrap justify-between items-center text-xs font-mono-tech text-[#5D6680] dark:text-[#A7B2CD] gap-4 mt-8">
          <div className="flex items-center gap-3">
            <span>HYDERABAD</span>
            <span>—</span>
            <span>INDIA</span>
            <span>—</span>
            <span>EST. 2024</span>
          </div>
          <div className="tracking-wider uppercase text-[#075BFF] dark:text-[#00D9F5] font-semibold">
            FOUNDER-LED PRODUCT BUILDING
          </div>
        </div>
      </div>

      {/* Founder Story Modal */}
      {isStoryModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#050712]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setIsStoryModalOpen(false)}
        >
          <div
            className="bg-[#FAFAFC] dark:bg-[#0A0F2C] text-[#0F1221] dark:text-[#F5F7FF] w-full max-w-2xl rounded-sm border border-[#E3E8F0] dark:border-[#293451] shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-[#E3E8F0] dark:border-[#293451] pb-4">
              <div>
                <span className="font-mono-tech text-xs text-[#00D9F5] tracking-widest uppercase">
                  FOUNDER & MISSION
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight mt-1">
                  The PeerUp Product Mission
                </h3>
              </div>
              <button
                onClick={() => setIsStoryModalOpen(false)}
                aria-label="Close story modal"
                className="w-8 h-8 rounded-full border border-[#E3E8F0] dark:border-[#293451] hover:border-[#075BFF] dark:hover:border-[#00D9F5] flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00D9F5]"
              >
                <X size={16} />
              </button>
            </div>

            <div className="space-y-4 text-sm text-[#5D6680] dark:text-[#A7B2CD] leading-relaxed">
              <p className="font-medium text-base text-[#0F1221] dark:text-[#F5F7FF]">
                “Ideas into products. Products into businesses.”
              </p>
              <p>
                Founded in Hyderabad, India in 2024, PeerUp was established as a founder-led product lab driven by a simple principle: software should solve genuine user problems with undeniable clarity and performance.
              </p>
              <p>
                Led by M. Pradyumna—with a background in Computer Science, Artificial Intelligence, Machine Learning, and software engineering—PeerUp approaches product development with hands-on technical discipline.
              </p>
              <p>
                Rather than rushing into premature venture scaling or generating superficial AI wrappers, we build software products through rigorous prototyping, local-first architecture, and iterative user testing.
              </p>
              <p>
                From speech transcription engines and financial workspaces to developer toolkits, our goal is to evolve each product into a self-sustaining business.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E3E8F0] dark:border-[#293451] flex justify-between items-center text-xs font-mono-tech text-[#7C86A0]">
              <span>PEERUP PRODUCT LAB // EST. 2024</span>
              <button
                onClick={() => setIsStoryModalOpen(false)}
                className="px-5 py-2.5 rounded-full btn-brand-gradient font-semibold text-xs hover:opacity-95 transition-opacity cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00D9F5]"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

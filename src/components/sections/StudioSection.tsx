import React, { useRef, useEffect, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

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

      // Draw orbiting wireframe ellipsoid cage
      const cageLines = 14;
      for (let i = 0; i < cageLines; i++) {
        const angle = (i / cageLines) * Math.PI + t * 0.2;
        ctx.beginPath();
        ctx.ellipse(cx, cy, 180, 180 * Math.abs(Math.sin(angle)), angle + t * 0.1, 0, Math.PI * 2);
        ctx.strokeStyle = isDark ? 'rgba(179, 154, 115, 0.25)' : 'rgba(179, 154, 115, 0.30)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw stacked spiral architectural book/plates
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
        ctx.fillStyle = isDark ? 'rgba(0, 0, 0, 0.4)' : 'rgba(36, 35, 33, 0.08)';
        ctx.fillRect(-layerWidth / 2 + 4, -layerHeight / 2 + 4, layerWidth, layerHeight);

        // Plate face
        const grad = ctx.createLinearGradient(-layerWidth / 2, 0, layerWidth / 2, 0);
        if (isDark) {
          grad.addColorStop(0, '#2A2926');
          grad.addColorStop(0.5, '#1A1918');
          grad.addColorStop(1, '#33312D');
        } else {
          grad.addColorStop(0, '#FFFFFF');
          grad.addColorStop(0.5, '#EAE7E0');
          grad.addColorStop(1, '#D9D5CC');
        }

        ctx.fillStyle = grad;
        ctx.fillRect(-layerWidth / 2, -layerHeight / 2, layerWidth, layerHeight);

        // Rim border
        ctx.strokeStyle = isDark ? 'rgba(242, 240, 233, 0.2)' : 'rgba(36, 35, 33, 0.15)';
        ctx.lineWidth = 1;
        ctx.strokeRect(-layerWidth / 2, -layerHeight / 2, layerWidth, layerHeight);

        // Typography textures on edges of plates
        ctx.fillStyle = isDark ? 'rgba(242, 240, 233, 0.4)' : 'rgba(36, 35, 33, 0.4)';
        ctx.font = '10px "JetBrains Mono", monospace';
        if (i % 2 === 0) {
          ctx.fillText('PEERUP // CORE', -layerWidth / 2 + 10, 4);
        } else {
          ctx.fillText('01011001', -layerWidth / 2 + 10, 4);
        }

        ctx.restore();
      }

      // Floating particle points
      for (let p = 0; p < 24; p++) {
        const pAngle = (p / 24) * Math.PI * 2 + t * 0.5;
        const pDist = 170 + Math.sin(t * 2 + p) * 20;
        const px = cx + Math.cos(pAngle) * pDist;
        const py = cy + Math.sin(pAngle) * (pDist * 0.7);

        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = '#B39A73'; // Subdued bronze
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [theme]);

  return (
    <section id="studio" className="py-24 md:py-32 border-b border-neutral-300/60 dark:border-neutral-800/60 bg-[#EAE7E0]/40 dark:bg-[#161514]/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-12 border-b border-neutral-300/60 dark:border-neutral-800/60 gap-4">
          <div className="font-mono-tech text-xs tracking-widest text-neutral-500 uppercase">
            / 03 STUDIO
          </div>
          <div className="font-mono-tech text-xs tracking-widest text-neutral-500 uppercase">
            INDEPENDENT BY DESIGN / GLOBAL BY NATURE
          </div>
        </div>

        {/* Sub-label strip */}
        <div className="pt-6 font-mono-tech text-xs tracking-widest text-neutral-400 dark:text-neutral-500 uppercase">
          PEOPLE × TECHNOLOGY × CRAFT
        </div>

        {/* Main Grid: Left Copy, Right 3D Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-[#111110] dark:text-[#F2F0E9] leading-tight">
              A small team<br />
              with a bigger<br />
              <span className="font-editorial italic font-normal text-[#111110] dark:text-[#F2F0E9]">
                curiosity.
              </span>
            </h2>

            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed max-w-lg">
              PeerUp Collective is an independent studio bringing together design, software engineering and emerging technology to turn ambitious ideas into meaningful products and brands.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setIsStoryModalOpen(true)}
                type="button"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111110] text-[#F2F0E9] dark:bg-[#F2F0E9] dark:text-[#111110] text-xs font-semibold tracking-wide hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-sm group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B39A73]"
              >
                <span>Our story</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#B39A73]" />
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

        {/* Bottom Location & Collaboration Strip */}
        <div className="pt-8 border-t border-neutral-300/60 dark:border-neutral-800/60 flex flex-wrap justify-between items-center text-xs font-mono-tech text-neutral-500 dark:text-neutral-400 gap-4">
          <div className="flex items-center gap-3">
            <span>HYDERABAD</span>
            <span>—</span>
            <span>INDIA</span>
            <span>—</span>
            <span>REMOTE</span>
          </div>
          <div className="tracking-wider uppercase text-[#B39A73]">
            SELECT COLLABORATIONS ONLY
          </div>
        </div>
      </div>

      {/* Our Story Modal */}
      {isStoryModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#111110]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setIsStoryModalOpen(false)}
        >
          <div
            className="bg-[#F2F0E9] dark:bg-[#1A1918] text-[#111110] dark:text-[#F2F0E9] w-full max-w-2xl rounded-sm border border-neutral-300 dark:border-neutral-700 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-neutral-300 dark:border-neutral-800 pb-4">
              <div>
                <span className="font-mono-tech text-xs text-[#B39A73] tracking-widest uppercase">
                  OUR PHILOSOPHY
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight mt-1">
                  The PeerUp Ethos
                </h3>
              </div>
              <button
                onClick={() => setIsStoryModalOpen(false)}
                aria-label="Close story modal"
                className="w-8 h-8 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-300 flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B39A73]"
              >
                <X size={16} />
              </button>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              <p className="font-medium text-base text-[#111110] dark:text-[#F2F0E9]">
                “Matter becomes meaning. Ideas become experiences.”
              </p>
              <p>
                Founded in Hyderabad, India in 2019, PeerUp was born from a fundamental frustration: the artificial wall separating creative art direction from rigorous technical architecture.
              </p>
              <p>
                Too often, creative agencies design visual fantasies that collapse upon implementation, while software factories ship technically sound code devoid of human warmth, taste, and aesthetic discipline.
              </p>
              <p>
                We operate as a compact collective of designers, creative technologists, and engineers who work directly with founders, product leaders, and visionary institutions. We take on a strictly limited number of engagements per quarter to ensure our undivided focus.
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-300 dark:border-neutral-800 flex justify-between items-center text-xs font-mono-tech text-neutral-500">
              <span>PEERUP COLLECTIVE // EST. 2019</span>
              <button
                onClick={() => setIsStoryModalOpen(false)}
                className="px-4 py-2 rounded-full bg-[#111110] text-[#F2F0E9] dark:bg-[#F2F0E9] dark:text-[#111110] font-semibold text-xs hover:opacity-90 transition-opacity cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B39A73]"
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

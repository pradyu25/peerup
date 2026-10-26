import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../../data/site-content';
import { JournalArticle } from '../../types';

export const JournalSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  return (
    <section id="journal" className="py-24 md:py-32 border-b border-[#E3E8F0] dark:border-[#293451]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-12 border-b border-[#E3E8F0] dark:border-[#293451] gap-4">
          <div className="font-mono-tech text-xs tracking-widest text-[#5D6680] dark:text-[#A7B2CD] uppercase">
            / 05 JOURNAL
          </div>
          <div className="font-mono-tech text-xs tracking-widest text-[#5D6680] dark:text-[#A7B2CD] uppercase">
            IDEAS / DISCUSSIONS / BEHIND THE SCENES
          </div>
        </div>

        {/* Headline & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 items-end">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-[#0F1221] dark:text-[#F5F7FF] leading-tight">
              Ideas,<br />
              updates and<br />
              <span className="font-editorial italic font-normal text-[#0F1221] dark:text-[#F5F7FF]">
                perspectives.
              </span>
            </h2>
            <p className="text-sm md:text-base text-[#5D6680] dark:text-[#A7B2CD] font-normal leading-relaxed max-w-xl">
              Thoughts on design, technology, products and the creative process from the PeerUp team.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <button
              onClick={() => setSelectedArticle(JOURNAL_ARTICLES[0])}
              type="button"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-brand-gradient text-xs font-semibold tracking-wide hover:opacity-95 active:scale-95 transition-all cursor-pointer shadow-sm group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D9F5]"
            >
              <span>Read the journal</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-white" />
            </button>
          </div>
        </div>

        {/* 3 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {JOURNAL_ARTICLES.map((article, idx) => (
            <div
              key={article.id}
              tabIndex={0}
              role="button"
              aria-label={`Read article: ${article.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedArticle(article);
                }
              }}
              onClick={() => setSelectedArticle(article)}
              className="group cursor-pointer flex flex-col justify-between space-y-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D9F5] rounded-xs p-1"
            >
              {/* Visual Thumbnail */}
              <div className="relative aspect-16/10 w-full overflow-hidden rounded-xs border border-[#E3E8F0] dark:border-[#293451] group-hover:-translate-y-1 transition-transform duration-500">
                <JournalCardCanvas index={idx} />
                <div className="absolute top-3 left-3 bg-[#050712]/85 text-[#F5F7FF] px-2 py-0.5 rounded-xs font-mono-tech text-[10px] tracking-widest uppercase">
                  {article.category}
                </div>
              </div>

              {/* Title & Date */}
              <div className="space-y-2 pt-1">
                <h3 className="text-lg font-bold font-display text-[#0F1221] dark:text-[#F5F7FF] group-hover:text-[#075BFF] dark:group-hover:text-[#00D9F5] transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-xs text-[#5D6680] dark:text-[#A7B2CD] line-clamp-2 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="pt-2 flex items-center justify-between font-mono-tech text-[11px] text-[#7C86A0]">
                  <span>{article.date}</span>
                  <span className="flex items-center gap-1 group-hover:text-[#075BFF] dark:group-hover:text-[#00D9F5] transition-colors">
                    <span>{article.readTime}</span>
                    <ArrowUpRight size={12} className="text-[#00D9F5]" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      {selectedArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#050712]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-[#FAFAFC] dark:bg-[#0A0F2C] text-[#0F1221] dark:text-[#F5F7FF] w-full max-w-2xl rounded-sm border border-[#E3E8F0] dark:border-[#293451] shadow-2xl p-6 sm:p-10 space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-[#E3E8F0] dark:border-[#293451] pb-4">
              <div>
                <span className="font-mono-tech text-xs text-[#00D9F5] tracking-widest uppercase">
                  {selectedArticle.category} · {selectedArticle.date}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight mt-1 leading-snug">
                  {selectedArticle.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                aria-label="Close article"
                className="w-8 h-8 rounded-full border border-[#E3E8F0] dark:border-[#293451] hover:border-[#075BFF] dark:hover:border-[#00D9F5] flex items-center justify-center transition-colors cursor-pointer shrink-0 ml-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00D9F5]"
              >
                <X size={16} />
              </button>
            </div>

            {/* Article Content */}
            <div className="space-y-5 text-sm sm:text-base text-[#5D6680] dark:text-[#A7B2CD] leading-relaxed font-normal">
              {selectedArticle.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-[#E3E8F0] dark:border-[#293451] flex justify-between items-center text-xs font-mono-tech text-[#7C86A0]">
              <span>PEERUP JOURNAL // {selectedArticle.readTime}</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 rounded-full btn-brand-gradient font-semibold text-xs hover:opacity-95 transition-opacity cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00D9F5]"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Procedural art renderer for journal cards matching brand moodboard
const JournalCardCanvas: React.FC<{ index: number }> = ({ index }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;
    const w = (canvas.width = canvas.offsetWidth * 2 || 400);
    const h = (canvas.height = canvas.offsetHeight * 2 || 250);

    const render = () => {
      t += 0.01;
      ctx.clearRect(0, 0, w, h);

      if (index === 0) {
        // Deep navy with electric cyan & blue ribbons
        const bgGrad = ctx.createLinearGradient(0, 0, w, h);
        bgGrad.addColorStop(0, '#050712');
        bgGrad.addColorStop(1, '#0A0F2C');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, w, h);

        const cx = w / 2;
        const cy = h / 2;

        for (let i = 0; i < 7; i++) {
          ctx.beginPath();
          const angle = (i / 7) * Math.PI * 2 + t * 0.2;
          ctx.moveTo(cx, cy);
          ctx.bezierCurveTo(
            cx + Math.cos(angle) * 120,
            cy + Math.sin(angle) * 70,
            cx + Math.cos(angle + 0.5) * 80,
            cy + Math.sin(angle + 0.5) * 110,
            cx + Math.cos(angle + 1) * 40,
            cy + Math.sin(angle + 1) * 40
          );
          ctx.fillStyle = i % 2 === 0 ? 'rgba(0, 217, 245, 0.45)' : 'rgba(7, 91, 255, 0.35)';
          ctx.fill();
          ctx.strokeStyle = 'rgba(0, 217, 245, 0.6)';
          ctx.stroke();
        }
      } else if (index === 1) {
        // Violet and cyan blooming geometry
        const bgGrad = ctx.createLinearGradient(0, 0, w, h);
        bgGrad.addColorStop(0, '#0A0F2C');
        bgGrad.addColorStop(1, '#10182F');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, w, h);

        const cx = w / 2;
        const cy = h / 2;

        for (let r = 80; r > 10; r -= 10) {
          ctx.beginPath();
          for (let a = 0; a < Math.PI * 2; a += 0.1) {
            const rad = r + Math.sin(a * 6 + t * 2) * 8;
            const x = cx + Math.cos(a) * rad;
            const y = cy + Math.sin(a) * rad;
            if (a === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.fillStyle = r % 20 === 0 ? 'rgba(112, 43, 255, 0.35)' : 'rgba(0, 217, 245, 0.18)';
          ctx.fill();
          ctx.strokeStyle = 'rgba(0, 217, 245, 0.4)';
          ctx.stroke();
        }
      } else {
        // Particle burst vortex with cyan, violet, and magenta
        ctx.fillStyle = '#050712';
        ctx.fillRect(0, 0, w, h);

        const cx = w / 2;
        const cy = h / 2;

        for (let p = 0; p < 80; p++) {
          const angle = (p / 80) * Math.PI * 4 + t * 0.5;
          const dist = (p * 1.8) % 110;
          const x = cx + Math.cos(angle) * dist;
          const y = cy + Math.sin(angle) * (dist * 0.7);

          ctx.beginPath();
          ctx.arc(x, y, 1.6, 0, Math.PI * 2);
          ctx.fillStyle = p % 3 === 0 ? '#00D9F5' : p % 3 === 1 ? '#702BFF' : '#F000E8';
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [index]);

  return <canvas ref={canvasRef} className="w-full h-full block" />;
};

import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../../data/site-content';
import { JournalArticle } from '../../types';

export const JournalSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  return (
    <section id="journal" className="py-24 md:py-32 border-b border-neutral-300/60 dark:border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-12 border-b border-neutral-300/60 dark:border-neutral-800/60 gap-4">
          <div className="font-mono-tech text-xs tracking-widest text-neutral-500 uppercase">
            / 05 JOURNAL
          </div>
          <div className="font-mono-tech text-xs tracking-widest text-neutral-500 uppercase">
            IDEAS / DISCUSSIONS / BEHIND THE SCENES
          </div>
        </div>

        {/* Headline & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 items-end">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-[#111110] dark:text-[#F2F0E9] leading-tight">
              Ideas,<br />
              updates and<br />
              <span className="font-editorial italic font-normal text-[#111110] dark:text-[#F2F0E9]">
                perspectives.
              </span>
            </h2>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed max-w-xl">
              Thoughts on design, technology, products and the creative process from the PeerUp team.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <button
              onClick={() => setSelectedArticle(JOURNAL_ARTICLES[0])}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111110] text-[#F2F0E9] dark:bg-[#F2F0E9] dark:text-[#111110] text-xs font-semibold tracking-wide hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-sm group"
            >
              <span>Read the journal</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* 3 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {JOURNAL_ARTICLES.map((article, idx) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group cursor-pointer flex flex-col justify-between space-y-4"
            >
              {/* Visual Thumbnail */}
              <div className="relative aspect-16/10 w-full overflow-hidden rounded-xs border border-neutral-300/60 dark:border-neutral-800/60 group-hover:-translate-y-1 transition-transform duration-500">
                <JournalCardCanvas index={idx} />
                <div className="absolute top-3 left-3 bg-[#111110]/80 text-[#F2F0E9] px-2 py-0.5 rounded-xs font-mono-tech text-[10px] tracking-widest uppercase">
                  {article.category}
                </div>
              </div>

              {/* Title & Date */}
              <div className="space-y-2 pt-1">
                <h3 className="text-lg font-bold font-display text-[#111110] dark:text-[#F2F0E9] group-hover:text-[#C59B27] transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="pt-2 flex items-center justify-between font-mono-tech text-[11px] text-neutral-400">
                  <span>{article.date}</span>
                  <span className="flex items-center gap-1 group-hover:text-[#111110] dark:group-hover:text-[#F2F0E9] transition-colors">
                    <span>{article.readTime}</span>
                    <ArrowUpRight size={12} />
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
          className="fixed inset-0 z-50 bg-[#111110]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-[#F2F0E9] dark:bg-[#1A1918] text-[#111110] dark:text-[#F2F0E9] w-full max-w-2xl rounded-sm border border-neutral-300 dark:border-neutral-700 shadow-2xl p-6 sm:p-10 space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-neutral-300 dark:border-neutral-800 pb-4">
              <div>
                <span className="font-mono-tech text-xs text-[#C59B27] tracking-widest uppercase">
                  {selectedArticle.category} · {selectedArticle.date}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight mt-1 leading-snug">
                  {selectedArticle.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                aria-label="Close article"
                className="w-8 h-8 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-300 flex items-center justify-center transition-colors cursor-pointer shrink-0 ml-4"
              >
                <X size={16} />
              </button>
            </div>

            {/* Article Content */}
            <div className="space-y-5 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
              {selectedArticle.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-neutral-300 dark:border-neutral-800 flex justify-between items-center text-xs font-mono-tech text-neutral-500">
              <span>PEERUP JOURNAL // {selectedArticle.readTime}</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 rounded-full bg-[#111110] text-[#F2F0E9] dark:bg-[#F2F0E9] dark:text-[#111110] font-semibold text-xs hover:opacity-90 transition-opacity cursor-pointer"
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

// Procedural art renderer for journal cards matching moodboard
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
        // Warm paper origami folded ribbons
        ctx.fillStyle = '#EAE7E0';
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
          ctx.fillStyle = i % 2 === 0 ? 'rgba(217, 213, 204, 0.7)' : 'rgba(255, 255, 255, 0.85)';
          ctx.fill();
          ctx.strokeStyle = 'rgba(119, 115, 109, 0.2)';
          ctx.stroke();
        }
      } else if (index === 1) {
        // Blooming organic metallic bloom
        ctx.fillStyle = '#F2F0E9';
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
          ctx.fillStyle = r % 20 === 0 ? 'rgba(197, 155, 39, 0.25)' : 'rgba(36, 35, 33, 0.12)';
          ctx.fill();
          ctx.strokeStyle = 'rgba(163, 131, 66, 0.4)';
          ctx.stroke();
        }
      } else {
        // Particle burst vortex
        ctx.fillStyle = '#111110';
        ctx.fillRect(0, 0, w, h);

        const cx = w / 2;
        const cy = h / 2;

        for (let p = 0; p < 80; p++) {
          const angle = (p / 80) * Math.PI * 4 + t * 0.5;
          const dist = (p * 1.8) % 110;
          const x = cx + Math.cos(angle) * dist;
          const y = cy + Math.sin(angle) * (dist * 0.7);

          ctx.beginPath();
          ctx.arc(x, y, 1.4, 0, Math.PI * 2);
          ctx.fillStyle = p % 3 === 0 ? '#C59B27' : 'rgba(242, 240, 233, 0.6)';
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

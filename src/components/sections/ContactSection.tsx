import React, { useRef, useEffect, useState } from 'react';
import { ArrowUpRight, Copy, Check, X, Send } from 'lucide-react';
import { SITE_METADATA } from '../../data/site-content';
import { useTheme } from '../../context/ThemeContext';

export const ContactSection: React.FC = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web & Digital Experiences',
    budget: '$15k - $30k',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;
    const width = (canvas.width = canvas.offsetWidth * 2 || 600);
    const height = (canvas.height = canvas.offsetHeight * 2 || 600);
    const isDark = theme === 'dark';

    const render = () => {
      t += 0.012;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Draw Glowing Torus / Particle Accelerator Ring
      const rings = 12;
      for (let r = 0; r < rings; r++) {
        const rad = 70 + r * 14;
        const tilt = Math.sin(t * 0.3 + r * 0.2) * 0.4;
        ctx.beginPath();
        ctx.ellipse(cx, cy, rad, rad * 0.55 + tilt * 20, t * 0.15 + r * 0.1, 0, Math.PI * 2);
        ctx.strokeStyle = r % 3 === 0
          ? 'rgba(179, 154, 115, 0.45)'
          : isDark
            ? 'rgba(242, 240, 233, 0.12)'
            : 'rgba(36, 35, 33, 0.12)';
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      // ASCII and Particle swirl around torus
      const particles = 120;
      const chars = ['0', '1', '•', '+', 'P', 'E', 'E', 'R', 'U', 'P'];
      for (let p = 0; p < particles; p++) {
        const angle = (p / particles) * Math.PI * 2 + t * 0.8;
        const ringRad = 110 + Math.sin(p * 3 + t) * 35;
        const px = cx + Math.cos(angle) * ringRad;
        const py = cy + Math.sin(angle) * (ringRad * 0.55);

        if (p % 4 === 0) {
          ctx.font = '10px "JetBrains Mono", monospace';
          ctx.fillStyle = p % 2 === 0
            ? '#B39A73'
            : isDark
              ? 'rgba(242, 240, 233, 0.7)'
              : 'rgba(36, 35, 33, 0.7)';
          ctx.fillText(chars[p % chars.length], px, py);
        } else {
          ctx.beginPath();
          ctx.arc(px, py, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = isDark ? 'rgba(242, 240, 233, 0.5)' : 'rgba(36, 35, 33, 0.4)';
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [theme]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_METADATA.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionSuccess(true);
      setTimeout(() => {
        setSubmissionSuccess(false);
        setIsModalOpen(false);
        setFormData({
          name: '',
          email: '',
          projectType: 'Web & Digital Experiences',
          budget: '$15k - $30k',
          message: ''
        });
      }, 3500);
    }, 800);
  };

  return (
    <section id="contact" className="bg-[#EAE7E0] dark:bg-[#111110] text-[#111110] dark:text-[#F2F0E9] py-24 md:py-32 relative overflow-hidden transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-12 border-b border-neutral-300 dark:border-neutral-800 gap-4">
          <div className="font-mono-tech text-xs tracking-widest text-neutral-500 dark:text-neutral-400 uppercase">
            / 06 CONTACT
          </div>
          <div className="font-mono-tech text-xs tracking-widest text-neutral-500 dark:text-neutral-400 uppercase">
            IDEAS / PEOPLE / PRODUCTS / A BRIGHTER TOMORROW
          </div>
        </div>

        {/* Main Grid: Left Inquiry, Right Torus Accelerator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-neutral-400 dark:bg-neutral-600" />
              <p className="font-mono-tech text-xs tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
                LET'S BUILD TOGETHER
              </p>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-[#111110] dark:text-white leading-tight">
              Have something<br />
              <span className="font-editorial italic font-normal text-[#111110] dark:text-white">
                worth building?
              </span>
            </h2>

            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed max-w-lg">
              Tell us about your idea, project or challenge. We'd love to explore how we can work together.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <button
                onClick={() => setIsModalOpen(true)}
                type="button"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111110] text-[#F2F0E9] dark:bg-[#F2F0E9] dark:text-[#111110] text-xs font-semibold tracking-wide hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-sm group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B39A73]"
              >
                <span>Start a conversation</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#B39A73]" />
              </button>

              <button
                onClick={handleCopyEmail}
                type="button"
                className="font-mono-tech text-xs text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors underline underline-offset-4 flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B39A73]"
                title="Click to copy email address"
              >
                <span>{SITE_METADATA.contactEmail}</span>
                {copied ? <Check size={14} className="text-[#B39A73]" /> : <Copy size={13} />}
              </button>
            </div>
          </div>

          {/* Right Column: Glowing Particle Torus Visual */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="w-full max-w-sm aspect-square relative">
              <canvas ref={canvasRef} className="w-full h-full block" />
            </div>
          </div>
        </div>

        {/* Bottom Details Strip */}
        <div className="pt-8 border-t border-neutral-300 dark:border-neutral-800 flex flex-wrap justify-between items-center text-xs font-mono-tech text-neutral-500 dark:text-neutral-400 gap-4">
          <div>
            HYDERABAD, INDIA · WORKING EVERYWHERE
          </div>
          <div>
            EST. 2019 — PEERUP COLLECTIVE
          </div>
        </div>
      </div>

      {/* Interactive Project Inquiry Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/60 dark:bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-[#F2F0E9] dark:bg-[#1A1918] text-[#111110] dark:text-[#F2F0E9] w-full max-w-xl rounded-sm border border-neutral-300 dark:border-neutral-700 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-neutral-300 dark:border-neutral-800 pb-4">
              <div>
                <span className="font-mono-tech text-xs text-[#B39A73] tracking-widest uppercase">
                  START A PROJECT
                </span>
                <h3 className="text-2xl font-bold font-display tracking-tight text-[#111110] dark:text-white mt-1">
                  Tell us about your challenge
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
                className="w-8 h-8 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-300 flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B39A73]"
              >
                <X size={16} />
              </button>
            </div>

            {submissionSuccess ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#B39A73]/20 text-[#B39A73] flex items-center justify-center mx-auto">
                  <Check size={24} />
                </div>
                <h4 className="text-xl font-bold font-display text-[#111110] dark:text-white">Inquiry Received</h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 font-mono-tech max-w-sm mx-auto">
                  Thank you for reaching out. We review all inquiries carefully and will get back to you within 24–48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono-tech text-[11px] text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white dark:bg-[#111110] border border-neutral-300 dark:border-neutral-700 rounded-xs px-3.5 py-2.5 text-xs text-[#111110] dark:text-white focus:outline-none focus:border-[#B39A73]"
                    />
                  </div>
                  <div>
                    <label className="block font-mono-tech text-[11px] text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-1.5">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white dark:bg-[#111110] border border-neutral-300 dark:border-neutral-700 rounded-xs px-3.5 py-2.5 text-xs text-[#111110] dark:text-white focus:outline-none focus:border-[#B39A73]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono-tech text-[11px] text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-1.5">
                    Engagement Category
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-white dark:bg-[#111110] border border-neutral-300 dark:border-neutral-700 rounded-xs px-3.5 py-2.5 text-xs text-[#111110] dark:text-white focus:outline-none focus:border-[#B39A73]"
                  >
                    <option value="Web & Digital Experiences">Web & Digital Experiences</option>
                    <option value="Brand & Design System">Brand & Design System</option>
                    <option value="AI & Automation">AI & Automation</option>
                    <option value="Custom Software">Custom Software</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono-tech text-[11px] text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-1.5">
                    Estimated Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={e => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-white dark:bg-[#111110] border border-neutral-300 dark:border-neutral-700 rounded-xs px-3.5 py-2.5 text-xs text-[#111110] dark:text-white focus:outline-none focus:border-[#B39A73]"
                  >
                    <option value="$10k - $25k">$10k – $25k</option>
                    <option value="$25k - $50k">$25k – $50k</option>
                    <option value="$50k+">$50k+</option>
                    <option value="Advisory / Exploration">Advisory / Exploration</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono-tech text-[11px] text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-1.5">
                    Project Overview
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about the problem, timeline, and what you aim to achieve..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white dark:bg-[#111110] border border-neutral-300 dark:border-neutral-700 rounded-xs px-3.5 py-2.5 text-xs text-[#111110] dark:text-white focus:outline-none focus:border-[#B39A73]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <a
                    href={`mailto:${SITE_METADATA.contactEmail}?subject=Project%20Inquiry%20via%20PeerUp`}
                    className="font-mono-tech text-[11px] text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white underline underline-offset-4"
                  >
                    Or open email client
                  </a>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#111110] text-[#F2F0E9] dark:bg-[#F2F0E9] dark:text-[#111110] text-xs font-semibold hover:opacity-90 active:scale-95 transition-all cursor-pointer disabled:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B39A73]"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <span>Submit inquiry</span>
                        <Send size={13} className="text-[#B39A73]" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

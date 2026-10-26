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

      // Draw Glowing Torus / Particle Accelerator Ring with electric palette
      const rings = 12;
      for (let r = 0; r < rings; r++) {
        const rad = 70 + r * 14;
        const tilt = Math.sin(t * 0.3 + r * 0.2) * 0.4;
        ctx.beginPath();
        ctx.ellipse(cx, cy, rad, rad * 0.55 + tilt * 20, t * 0.15 + r * 0.1, 0, Math.PI * 2);
        if (r % 3 === 0) {
          ctx.strokeStyle = 'rgba(0, 217, 245, 0.45)'; // Electric Cyan
        } else if (r % 3 === 1) {
          ctx.strokeStyle = 'rgba(7, 91, 255, 0.35)'; // Electric Blue
        } else {
          ctx.strokeStyle = isDark ? 'rgba(112, 43, 255, 0.28)' : 'rgba(112, 43, 255, 0.22)'; // Electric Violet
        }
        ctx.lineWidth = 1.3;
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
          ctx.fillStyle = p % 3 === 0
            ? '#00D9F5'
            : p % 3 === 1
              ? '#075BFF'
              : '#702BFF';
          ctx.fillText(chars[p % chars.length], px, py);
        } else {
          ctx.beginPath();
          ctx.arc(px, py, 1.4, 0, Math.PI * 2);
          ctx.fillStyle = p % 3 === 0 ? '#00D9F5' : isDark ? 'rgba(245, 247, 255, 0.6)' : 'rgba(15, 18, 33, 0.5)';
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

    // Save inquiry to localStorage for local browser persistence
    try {
      const existing = JSON.parse(localStorage.getItem('peerup_contact_inquiries') || '[]');
      existing.push({
        ...formData,
        date: new Date().toISOString()
      });
      localStorage.setItem('peerup_contact_inquiries', JSON.stringify(existing));
    } catch {
      // LocalStorage fallback
    }

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
    <section id="contact" className="bg-[#FAFAFC] dark:bg-[#050712] text-[#0F1221] dark:text-[#F5F7FF] py-24 md:py-32 relative overflow-hidden transition-colors duration-400 border-b border-[#E3E8F0] dark:border-[#293451]">
      {/* Ambient gradient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[400px] ambient-glow-cyan pointer-events-none -z-10 blur-3xl opacity-50 dark:opacity-30" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 left-1/4 w-[400px] h-[300px] ambient-glow-magenta pointer-events-none -z-10 blur-3xl opacity-40 dark:opacity-20" 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-12 border-b border-[#E3E8F0] dark:border-[#293451] gap-4">
          <div className="font-mono-tech text-xs tracking-widest text-[#5D6680] dark:text-[#A7B2CD] uppercase">
            / 05 CONTACT & INQUIRIES
          </div>
          <div className="font-mono-tech text-xs tracking-widest text-[#5D6680] dark:text-[#A7B2CD] uppercase">
            IDEAS / PRODUCTS / VENTURES / SUSTAINABLE BUSINESSES
          </div>
        </div>

        {/* Main Grid: Left Inquiry, Right Torus Accelerator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-8 h-0.5 bg-gradient-to-r from-[#00D9F5] to-[#702BFF] rounded-full" />
              <p className="font-mono-tech text-xs tracking-widest uppercase text-[#5D6680] dark:text-[#A7B2CD]">
                GET IN TOUCH
              </p>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-[#0F1221] dark:text-[#F5F7FF] leading-tight">
              Have a product idea<br />
              <span className="font-editorial italic font-normal text-[#0F1221] dark:text-[#F5F7FF]">
                worth building?
              </span>
            </h2>

            <p className="text-sm md:text-base text-[#5D6680] dark:text-[#A7B2CD] font-normal leading-relaxed max-w-lg">
              Whether you're interested in our products, developer tools, or exploring technical commissions, we'd love to connect.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <button
                onClick={() => setIsModalOpen(true)}
                type="button"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-brand-gradient text-xs font-semibold tracking-wide hover:opacity-95 active:scale-95 transition-all cursor-pointer shadow-sm group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D9F5]"
              >
                <span>Send message</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-white" />
              </button>

              <button
                onClick={handleCopyEmail}
                type="button"
                className="font-mono-tech text-xs text-[#5D6680] dark:text-[#A7B2CD] hover:text-[#075BFF] dark:hover:text-[#00D9F5] transition-colors underline underline-offset-4 flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00D9F5]"
                title="Click to copy email address"
              >
                <span>{SITE_METADATA.contactEmail}</span>
                {copied ? <Check size={14} className="text-[#00D9F5]" /> : <Copy size={13} />}
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
        <div className="pt-8 border-t border-[#E3E8F0] dark:border-[#293451] flex flex-wrap justify-between items-center text-xs font-mono-tech text-[#5D6680] dark:text-[#A7B2CD] gap-4">
          <div>
            HYDERABAD, INDIA · WORKING GLOBALLY
          </div>
          <div className="text-[#075BFF] dark:text-[#00D9F5] font-semibold">
            EST. 2024 — PEERUP PRODUCT LAB & VENTURES
          </div>
        </div>
      </div>

      {/* Interactive Project Inquiry Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#050712]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-[#FAFAFC] dark:bg-[#0A0F2C] text-[#0F1221] dark:text-[#F5F7FF] w-full max-w-xl rounded-sm border border-[#E3E8F0] dark:border-[#293451] shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-[#E3E8F0] dark:border-[#293451] pb-4">
              <div>
                <span className="font-mono-tech text-xs text-[#00D9F5] tracking-widest uppercase">
                  START A PROJECT
                </span>
                <h3 className="text-2xl font-bold font-display tracking-tight text-[#0F1221] dark:text-[#F5F7FF] mt-1">
                  Tell us about your challenge
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
                className="w-8 h-8 rounded-full border border-[#E3E8F0] dark:border-[#293451] hover:border-[#075BFF] dark:hover:border-[#00D9F5] flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00D9F5]"
              >
                <X size={16} />
              </button>
            </div>

            {submissionSuccess ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#00D9F5]/20 text-[#00D9F5] flex items-center justify-center mx-auto">
                  <Check size={24} />
                </div>
                <h4 className="text-xl font-bold font-display text-[#0F1221] dark:text-[#F5F7FF]">Inquiry Received</h4>
                <p className="text-xs text-[#5D6680] dark:text-[#A7B2CD] font-mono-tech max-w-sm mx-auto">
                  Thank you for reaching out. We review all inquiries carefully and will get back to you within 24–48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono-tech text-[11px] text-[#5D6680] dark:text-[#A7B2CD] uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white dark:bg-[#10182F] border border-[#E3E8F0] dark:border-[#293451] rounded-xs px-3.5 py-2.5 text-xs text-[#0F1221] dark:text-[#F5F7FF] focus:outline-none focus:border-[#00D9F5]"
                    />
                  </div>
                  <div>
                    <label className="block font-mono-tech text-[11px] text-[#5D6680] dark:text-[#A7B2CD] uppercase tracking-wider mb-1.5">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white dark:bg-[#10182F] border border-[#E3E8F0] dark:border-[#293451] rounded-xs px-3.5 py-2.5 text-xs text-[#0F1221] dark:text-[#F5F7FF] focus:outline-none focus:border-[#00D9F5]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono-tech text-[11px] text-[#5D6680] dark:text-[#A7B2CD] uppercase tracking-wider mb-1.5">
                    Engagement Category
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-white dark:bg-[#10182F] border border-[#E3E8F0] dark:border-[#293451] rounded-xs px-3.5 py-2.5 text-xs text-[#0F1221] dark:text-[#F5F7FF] focus:outline-none focus:border-[#00D9F5]"
                  >
                    <option value="Web & Digital Experiences">Web & Digital Experiences</option>
                    <option value="Brand & Design System">Brand & Design System</option>
                    <option value="AI & Automation">AI & Automation</option>
                    <option value="Custom Software">Custom Software</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono-tech text-[11px] text-[#5D6680] dark:text-[#A7B2CD] uppercase tracking-wider mb-1.5">
                    Estimated Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={e => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-white dark:bg-[#10182F] border border-[#E3E8F0] dark:border-[#293451] rounded-xs px-3.5 py-2.5 text-xs text-[#0F1221] dark:text-[#F5F7FF] focus:outline-none focus:border-[#00D9F5]"
                  >
                    <option value="$10k - $25k">$10k – $25k</option>
                    <option value="$25k - $50k">$25k – $50k</option>
                    <option value="$50k+">$50k+</option>
                    <option value="Advisory / Exploration">Advisory / Exploration</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono-tech text-[11px] text-[#5D6680] dark:text-[#A7B2CD] uppercase tracking-wider mb-1.5">
                    Project Overview
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about the problem, timeline, and what you aim to achieve..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white dark:bg-[#10182F] border border-[#E3E8F0] dark:border-[#293451] rounded-xs px-3.5 py-2.5 text-xs text-[#0F1221] dark:text-[#F5F7FF] focus:outline-none focus:border-[#00D9F5]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <a
                    href={`mailto:${SITE_METADATA.contactEmail}?subject=Project%20Inquiry%20via%20PeerUp`}
                    className="font-mono-tech text-[11px] text-[#5D6680] dark:text-[#A7B2CD] hover:text-[#075BFF] dark:hover:text-[#00D9F5] underline underline-offset-4"
                  >
                    Or open email client
                  </a>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full btn-brand-gradient text-xs font-semibold hover:opacity-95 active:scale-95 transition-all cursor-pointer disabled:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00D9F5]"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <span>Submit inquiry</span>
                        <Send size={13} className="text-white" />
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

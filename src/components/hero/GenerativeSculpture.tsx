import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface GenerativeSculptureProps {
  className?: string;
  interactive?: boolean;
}

export const GenerativeSculpture: React.FC<GenerativeSculptureProps> = ({
  className = '',
  interactive = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  // Mouse interaction state
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio || 800);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio || 500);

    const handleResize = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.width = rect.width * dpr;
      height = canvas.height = rect.height * dpr;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // ASCII characters ramp matching creative technology theme
    const glyphs = ['0', '1', 'P', 'E', 'R', 'U', 'P', '+', '×', '•', '·', '~', ':', '¬', '■', '▫', '▲', '1', '0'];

    // Define 3D Parametric Ribbon strands
    const STRAND_COUNT = 5;
    const POINTS_PER_STRAND = 240;
    
    interface Point3D {
      x: number;
      y: number;
      z: number;
      screenX: number;
      screenY: number;
      scale: number;
      alpha: number;
      glyph: string;
      color: string;
      size: number;
    }

    let time = 0;

    const render = () => {
      time += 0.007;

      // Smooth pointer interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const isDark = theme === 'dark';
      const centerX = width / 2;
      const centerY = height / 2;
      const baseRadius = Math.min(width, height) * 0.28;

      // Dynamic rotation angles based on time and mouse
      const rotX = time * 0.4 + mouseRef.current.y * 0.6;
      const rotY = time * 0.6 + mouseRef.current.x * 0.8;
      const rotZ = Math.sin(time * 0.2) * 0.2;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosZ = Math.cos(rotZ);
      const sinZ = Math.sin(rotZ);

      const points: Point3D[] = [];

      // Generate intertwined Mobius / Trefoil vortex ribbon
      for (let s = 0; s < STRAND_COUNT; s++) {
        const strandOffset = (s / STRAND_COUNT) * Math.PI * 2;
        const widthOffset = (s - (STRAND_COUNT - 1) / 2) * 18;

        for (let i = 0; i < POINTS_PER_STRAND; i++) {
          const t = (i / POINTS_PER_STRAND) * Math.PI * 4 + time * 0.2;
          
          // Trefoil Knot / Torus Vortex Formula
          const p = 2;
          const q = 3;
          const r = 0.55 + 0.15 * Math.sin(t * 3 + strandOffset);
          
          let x0 = baseRadius * (Math.sin(t * p) + 2 * Math.sin(t * q * 0.5)) * 0.55;
          let y0 = baseRadius * (Math.cos(t * p) - 2 * Math.cos(t * q * 0.5)) * 0.45;
          let z0 = baseRadius * (-Math.sin(t * q)) * 0.6;

          // Ribbon ribbon cross-section offset
          const normalX = Math.cos(t * 2 + strandOffset) * widthOffset;
          const normalY = Math.sin(t * 2 + strandOffset) * widthOffset;
          x0 += normalX;
          y0 += normalY;

          // 3D Rotation Matrix
          // Rotate around Y
          let x1 = x0 * cosY - z0 * sinY;
          let z1 = x0 * sinY + z0 * cosY;

          // Rotate around X
          let y2 = y0 * cosX - z1 * sinX;
          let z2 = y0 * sinX + z1 * cosX;

          // Rotate around Z
          let x3 = x1 * cosZ - y2 * sinZ;
          let y3 = x1 * sinZ + y2 * cosZ;

          // Perspective projection
          const fov = 650;
          const cameraZ = 700;
          const perspective = fov / (cameraZ + z2);

          const screenX = centerX + x3 * perspective;
          const screenY = centerY + y3 * perspective;
          const depth = (z2 + baseRadius) / (baseRadius * 2); // 0 (back) to 1 (front)
          const clampedDepth = Math.max(0.1, Math.min(1.2, depth));

          // Character selection based on curve position & time
          const glyphIndex = Math.abs(Math.floor((i + s * 17 + time * 10) % glyphs.length));
          const glyph = glyphs[glyphIndex];

          // Color palette selection (Ivory, Graphite, Charcoal, Bronze/Gold highlights)
          let color: string;
          const isHighlight = (i + s * 4) % 11 === 0 || (i % 29 === 0);

          if (isDark) {
            if (isHighlight) {
              color = `rgba(212, 175, 55, ${Math.min(1, 0.4 + clampedDepth * 0.6)})`; // Warm gold highlight
            } else {
              const alpha = Math.min(1, 0.15 + clampedDepth * 0.85);
              color = `rgba(242, 240, 233, ${alpha})`; // Soft ivory
            }
          } else {
            if (isHighlight) {
              color = `rgba(163, 131, 66, ${Math.min(1, 0.5 + clampedDepth * 0.5)})`; // Muted bronze
            } else {
              const alpha = Math.min(1, 0.2 + clampedDepth * 0.8);
              const tone = Math.floor(25 + (1 - clampedDepth) * 60);
              color = `rgba(${tone}, ${tone}, ${tone}, ${alpha})`; // Deep charcoal to graphite
            }
          }

          points.push({
            x: x3,
            y: y3,
            z: z2,
            screenX,
            screenY,
            scale: perspective,
            alpha: clampedDepth,
            glyph,
            color,
            size: Math.max(6, Math.floor(10 * perspective))
          });
        }
      }

      // Sort points by depth (back to front) for accurate 3D rendering
      points.sort((a, b) => a.z - b.z);

      // Draw ribbon spine lines
      ctx.lineWidth = 0.75;
      for (let s = 0; s < STRAND_COUNT; s++) {
        const strandPoints = points.filter((_, idx) => Math.floor(idx / POINTS_PER_STRAND) === s);
        if (strandPoints.length > 1) {
          ctx.beginPath();
          ctx.moveTo(strandPoints[0].screenX, strandPoints[0].screenY);
          for (let i = 1; i < strandPoints.length; i += 3) {
            ctx.lineTo(strandPoints[i].screenX, strandPoints[i].screenY);
          }
          ctx.strokeStyle = isDark ? 'rgba(242, 240, 233, 0.08)' : 'rgba(36, 35, 33, 0.07)';
          ctx.stroke();
        }
      }

      // Draw ASCII glyphs and particle halos
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (let i = 0; i < points.length; i++) {
        const pt = points[i];
        
        // Skip some background points to keep visual airy and avoid clutter
        if (pt.z < -180 && i % 2 !== 0) continue;

        ctx.font = `${Math.floor(pt.size)}px 'JetBrains Mono', monospace`;
        ctx.fillStyle = pt.color;
        ctx.fillText(pt.glyph, pt.screenX, pt.screenY);

        // Occasional luminous micro-particles
        if (i % 7 === 0) {
          ctx.beginPath();
          ctx.arc(pt.screenX + 4, pt.screenY - 3, 1.2 * pt.scale, 0, Math.PI * 2);
          ctx.fillStyle = isDark ? 'rgba(212, 175, 55, 0.5)' : 'rgba(163, 131, 66, 0.4)';
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      mouseRef.current.targetX = relX * 2.0;
      mouseRef.current.targetY = relY * 2.0;
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
      setIsHovered(false);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    if (interactive && containerRef.current) {
      containerRef.current.addEventListener('mousemove', handleMouseMove);
      containerRef.current.addEventListener('mouseleave', handleMouseLeave);
      containerRef.current.addEventListener('mouseenter', handleMouseEnter);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
        containerRef.current.removeEventListener('mouseleave', handleMouseLeave);
        containerRef.current.removeEventListener('mouseenter', handleMouseEnter);
      }
    };
  }, [theme, interactive]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full flex items-center justify-center select-none cursor-grab active:cursor-grabbing ${className}`}
    >
      {/* Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block relative z-10 transition-opacity duration-300"
      />

      {/* Subtle coordinate marker on hover */}
      <div
        className={`absolute bottom-3 right-4 font-mono-tech text-[10px] tracking-wider text-neutral-400 dark:text-neutral-500 transition-opacity duration-300 pointer-events-none z-20 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        [GEN_SCULPTURE // 60 FPS // KNOT_PARAMETRIC]
      </div>
    </div>
  );
};

import React, { useRef, useEffect } from 'react';

interface ProjectCardVisualProps {
  projectId: string;
  isHovered: boolean;
}

export const ProjectCardVisual: React.FC<ProjectCardVisualProps> = ({ projectId, isHovered }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;
    const width = (canvas.width = canvas.offsetWidth * 2 || 600);
    const height = (canvas.height = canvas.offsetHeight * 2 || 380);

    const render = () => {
      t += isHovered ? 0.025 : 0.01;
      ctx.clearRect(0, 0, width, height);

      if (projectId === 'voicenote') {
        // Deep midnight navy background with cyan/violet ambient lighting
        const bgGrad = ctx.createLinearGradient(0, 0, width, height);
        bgGrad.addColorStop(0, '#050712');
        bgGrad.addColorStop(0.5, '#0A0F2C');
        bgGrad.addColorStop(1, '#10182F');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, width, height);

        // Soundwave ribbon in space using brand gradient hues
        ctx.lineWidth = 1.6;
        const waves = 18;
        for (let w = 0; w < waves; w++) {
          ctx.beginPath();
          const progress = w / waves;
          const baseY = height * 0.5 + Math.sin(t + progress * Math.PI) * 20;
          ctx.moveTo(30, baseY);

          for (let x = 30; x < width - 30; x += 6) {
            const normX = (x - 30) / (width - 60);
            const freq = 3.5;
            const amp = (Math.sin(normX * Math.PI) * 75) * Math.sin(t * 1.5 + normX * freq * Math.PI + progress * 2.5);
            ctx.lineTo(x, baseY + amp);
          }

          const alpha = 0.2 + (1 - Math.abs(progress - 0.5) * 2) * 0.7;
          // Gradient hue transition from cyan to violet
          if (w % 3 === 0) {
            ctx.strokeStyle = `rgba(0, 217, 245, ${alpha * 0.9})`; // Electric Cyan
          } else if (w % 3 === 1) {
            ctx.strokeStyle = `rgba(7, 91, 255, ${alpha * 0.8})`; // Electric Blue
          } else {
            ctx.strokeStyle = `rgba(112, 43, 255, ${alpha * 0.75})`; // Electric Violet
          }
          ctx.stroke();
        }

        // Technical audio scale markers
        ctx.fillStyle = 'rgba(0, 217, 245, 0.6)';
        ctx.font = '16px "JetBrains Mono", monospace';
        ctx.fillText('0.00ms // 48kHz PCM', 40, height - 35);
        ctx.fillStyle = 'rgba(245, 247, 255, 0.5)';
        ctx.fillText('INFERENCE LATENCY: 14ms', width - 240, height - 35);
      } else if (projectId === 'financedesk') {
        // Futuristic ledger gradient
        const bgGrad = ctx.createLinearGradient(0, 0, width, height);
        bgGrad.addColorStop(0, '#0A0F2C');
        bgGrad.addColorStop(1, '#050712');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, width, height);

        // Isometric titanium hardware cube on stone pedestal
        const cx = width / 2;
        const cy = height / 2 + 10;
        const size = 95 + (isHovered ? 6 : 0);

        // Glow shadow
        ctx.beginPath();
        ctx.ellipse(cx, cy + size * 0.9, size * 1.1, size * 0.35, 0, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 217, 245, 0.15)';
        ctx.fill();

        // 3D Isometric Cube faces
        const drawIsoCube = () => {
          // Top face
          ctx.beginPath();
          ctx.moveTo(cx, cy - size * 0.6);
          ctx.lineTo(cx + size * 0.86, cy - size * 0.1);
          ctx.lineTo(cx, cy + size * 0.4);
          ctx.lineTo(cx - size * 0.86, cy - size * 0.1);
          ctx.closePath();
          ctx.fillStyle = '#10182F';
          ctx.fill();
          ctx.strokeStyle = 'rgba(0, 217, 245, 0.4)';
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Left face
          ctx.beginPath();
          ctx.moveTo(cx - size * 0.86, cy - size * 0.1);
          ctx.lineTo(cx, cy + size * 0.4);
          ctx.lineTo(cx, cy + size * 1.0);
          ctx.lineTo(cx - size * 0.86, cy + size * 0.5);
          ctx.closePath();
          ctx.fillStyle = '#075BFF'; // Electric Blue
          ctx.fill();
          ctx.stroke();

          // Right face
          ctx.beginPath();
          ctx.moveTo(cx, cy + size * 0.4);
          ctx.lineTo(cx + size * 0.86, cy - size * 0.1);
          ctx.lineTo(cx + size * 0.86, cy + size * 0.5);
          ctx.lineTo(cx, cy + size * 1.0);
          ctx.closePath();
          ctx.fillStyle = '#702BFF'; // Electric Violet
          ctx.fill();
          ctx.stroke();

          // Glowing display ring on top face
          ctx.beginPath();
          ctx.ellipse(cx, cy - size * 0.1, size * 0.32, size * 0.18, 0, 0, Math.PI * 2);
          ctx.fillStyle = '#050712';
          ctx.fill();

          ctx.beginPath();
          ctx.ellipse(cx, cy - size * 0.1, size * 0.22, size * 0.12, 0, 0, Math.PI * 2);
          ctx.strokeStyle = '#00D9F5'; // Electric Cyan
          ctx.lineWidth = 2.5;
          ctx.stroke();
        };

        drawIsoCube();

        ctx.fillStyle = 'rgba(0, 217, 245, 0.7)';
        ctx.font = '16px "JetBrains Mono", monospace';
        ctx.fillText('FINANCEDESK // V1.0', 40, height - 35);
      } else if (projectId === 'sxpress') {
        // Dark navy and printing plates with cyan/violet accents
        const bgGrad = ctx.createLinearGradient(0, 0, width, height);
        bgGrad.addColorStop(0, '#050712');
        bgGrad.addColorStop(1, '#0A0F2C');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, width, height);

        // Tactile layered printing plates
        const cx = width / 2;
        const cy = height / 2;

        for (let i = 4; i >= 0; i--) {
          const offset = i * 18 - 36 + Math.sin(t + i) * 6;
          const w = 240 - i * 14;
          const h = 150 - i * 10;

          ctx.save();
          ctx.translate(cx + offset, cy + offset * 0.6);
          ctx.rotate((-0.08 + i * 0.04));

          ctx.fillStyle = i === 0 ? '#FAFAFC' : i % 2 === 0 ? '#10182F' : '#075BFF';
          ctx.fillRect(-w / 2, -h / 2, w, h);
          ctx.strokeStyle = i === 0 ? 'rgba(0, 217, 245, 0.6)' : 'rgba(112, 43, 255, 0.3)';
          ctx.strokeRect(-w / 2, -h / 2, w, h);

          if (i === 0) {
            // Embossed typography specimen
            ctx.fillStyle = '#0F1221';
            ctx.font = 'bold 24px "Manrope", sans-serif';
            ctx.fillText('SXPRESS', -w / 2 + 25, 0);
            ctx.font = 'italic 16px "Cormorant Garamond", serif';
            ctx.fillStyle = '#075BFF';
            ctx.fillText('RAPID PRODUCTION ENGINE', -w / 2 + 25, 25);
          }

          ctx.restore();
        }

        ctx.fillStyle = '#A7B2CD';
        ctx.font = '16px "JetBrains Mono", monospace';
        ctx.fillText('PRESS AUTOMATION // 350 GSM', 40, height - 35);
      } else if (projectId === 'synapse-core') {
        // Neural Graph with electric cyan and magenta
        ctx.fillStyle = '#050712';
        ctx.fillRect(0, 0, width, height);

        const nodes: { x: number; y: number }[] = [];
        const count = 28;
        for (let i = 0; i < count; i++) {
          const angle = (i / count) * Math.PI * 2 + t * 0.3;
          const dist = 60 + ((i * 19) % 110);
          nodes.push({
            x: width / 2 + Math.cos(angle) * dist,
            y: height / 2 + Math.sin(angle) * dist * 0.65
          });
        }

        ctx.strokeStyle = 'rgba(7, 91, 255, 0.25)';
        ctx.lineWidth = 1;
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 90) {
              ctx.beginPath();
              ctx.moveTo(nodes[i].x, nodes[i].y);
              ctx.lineTo(nodes[j].x, nodes[j].y);
              ctx.stroke();
            }
          }
        }

        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          ctx.beginPath();
          ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = i % 3 === 0 ? '#00D9F5' : i % 3 === 1 ? '#702BFF' : '#F000E8';
          ctx.fill();
        }
      } else {
        // Kinesis dynamic kinetic curves in electric brand gradient
        ctx.fillStyle = '#050712';
        ctx.fillRect(0, 0, width, height);

        for (let i = 0; i < 20; i++) {
          ctx.beginPath();
          const y = (height / 20) * i;
          ctx.moveTo(0, y);
          for (let x = 0; x < width; x += 10) {
            const sinY = Math.sin(x * 0.015 + t + i * 0.2) * 25;
            ctx.lineTo(x, y + sinY);
          }
          const alpha = 0.15 + (i / 20) * 0.45;
          ctx.strokeStyle = i % 2 === 0 ? `rgba(0, 217, 245, ${alpha})` : `rgba(112, 43, 255, ${alpha})`;
          ctx.lineWidth = 1.3;
          ctx.stroke();
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [projectId, isHovered]);

  return (
    <div className="w-full h-full relative overflow-hidden bg-[#050712] rounded-xs">
      <canvas ref={canvasRef} className="w-full h-full block object-cover" />
    </div>
  );
};

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  color: string;
  angle: number;
  rotationSpeed: number;
}

interface Wave {
  y: number;
  amplitude: number;
  frequency: number;
  phase: number;
  speed: number;
  color: string;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const wavesRef = useRef<Wave[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const colors = [
      'rgba(168, 85, 247, 0.8)',
      'rgba(59, 130, 246, 0.8)',
      'rgba(236, 72, 153, 0.8)',
      'rgba(139, 92, 246, 0.7)',
      'rgba(6, 182, 212, 0.7)',
    ];
    
    particlesRef.current = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 1500,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      vz: (Math.random() - 0.5) * 2,
      size: Math.random() * 4 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      angle: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
    }));

    wavesRef.current = [
      {
        y: canvas.height * 0.3,
        amplitude: 80,
        frequency: 0.008,
        phase: 0,
        speed: 0.015,
        color: 'rgba(168, 85, 247, 0.1)',
      },
      {
        y: canvas.height * 0.5,
        amplitude: 60,
        frequency: 0.01,
        phase: Math.PI,
        speed: 0.02,
        color: 'rgba(59, 130, 246, 0.08)',
      },
      {
        y: canvas.height * 0.7,
        amplitude: 100,
        frequency: 0.006,
        phase: Math.PI * 0.5,
        speed: 0.01,
        color: 'rgba(236, 72, 153, 0.06)',
      },
    ];

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      timeRef.current += 0.01;

      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.1;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.1;

      ctx.fillStyle = 'rgba(15, 16, 20, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      wavesRef.current.forEach((wave) => {
        wave.phase += wave.speed;
        ctx.beginPath();
        ctx.moveTo(0, wave.y);

        for (let x = 0; x <= canvas.width; x += 5) {
          const y = wave.y + Math.sin(x * wave.frequency + wave.phase) * wave.amplitude;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(0, wave.y - wave.amplitude, 0, wave.y + wave.amplitude);
        gradient.addColorStop(0, wave.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      particlesRef.current.forEach((particle) => {
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 250) {
          const force = (250 - dist) / 250;
          particle.vx -= (dx / dist) * force * 0.5;
          particle.vy -= (dy / dist) * force * 0.5;
        }

        particle.angle += particle.rotationSpeed;
        particle.z += particle.vz;
        
        if (particle.z > 1500 || particle.z < 0) {
          particle.vz *= -1;
        }

        particle.x += particle.vx + Math.cos(particle.angle) * 0.2;
        particle.y += particle.vy + Math.sin(particle.angle) * 0.2;
        particle.vx *= 0.98;
        particle.vy *= 0.98;

        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;

        const scale = 1000 / (1000 + particle.z);
        const size = particle.size * scale;
        const opacity = scale * 1.5;

        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.angle);

        ctx.shadowBlur = 30 * scale;
        ctx.shadowColor = particle.color;

        ctx.beginPath();
        ctx.arc(0, 0, size, 0, Math.PI * 2);
        
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 2);
        gradient.addColorStop(0, particle.color.replace(/[\d.]+\)/, `${opacity})`));
        gradient.addColorStop(1, particle.color.replace(/[\d.]+\)/, '0)'));
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.shadowBlur = 0;
        ctx.restore();
      });

      particlesRef.current.forEach((p1, i) => {
        particlesRef.current.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            const opacity = 0.3 * (1 - dist / 180);
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            gradient.addColorStop(0, p1.color.replace(/[\d.]+\)/, `${opacity})`));
            gradient.addColorStop(1, p2.color.replace(/[\d.]+\)/, `${opacity})`));

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}

"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  dx: number;
  dy: number;
  life: number;
  maxLife: number;
}

export default function EmberCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId: number;
    let particles: Particle[] = [];

    function resize() {
      canvas!.width  = canvas!.offsetWidth;
      canvas!.height = canvas!.offsetHeight;
    }

    function newParticle(randomY = false): Particle {
      const maxLife = 160 + Math.random() * 120;
      return {
        x:       Math.random() * (canvas?.width ?? 800),
        y:       randomY ? Math.random() * (canvas?.height ?? 600) : (canvas?.height ?? 600) + 10,
        radius:  1 + Math.random() * 1.2,
        opacity: 0.25 + Math.random() * 0.25,
        dx:      (Math.random() - 0.5) * 0.4,
        dy:      -(0.25 + Math.random() * 0.45),
        life:    randomY ? Math.random() * maxLife : 0,
        maxLife,
      };
    }

    function init() {
      particles = Array.from({ length: 50 }, () => newParticle(true));
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      for (const p of particles) {
        const lifeRatio = p.life / p.maxLife;
        const alpha = p.opacity * Math.sin(lifeRatio * Math.PI);

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(212, 120, 42, ${alpha.toFixed(3)})`;
        ctx!.fill();

        p.x   += p.dx;
        p.y   += p.dy;
        p.life += 1;

        if (p.life >= p.maxLife) Object.assign(p, newParticle(false));
      }

      rafId = requestAnimationFrame(draw);
    }

    resize();
    init();
    draw();

    window.addEventListener("resize", resize, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

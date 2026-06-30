"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { fadeUp, slideInLeft, VIEWPORT, EASE } from "@/lib/motion";

// CSS 3D tilt effect for the profile image card
function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({});

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setStyle({
      transform: `perspective(1000px) rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg)`,
    });
  }

  function onMouseLeave() {
    setStyle({ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)" });
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="tilt-card rounded-2xl overflow-hidden"
      style={style}
    >
      {children}
    </div>
  );
}

export default function AboutTeaser() {
  return (
    <section
      id="about-teaser"
      className="relative py-24 md:py-32 px-6"
      aria-labelledby="about-teaser-heading"
    >
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">
        {/* Left — bio */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          custom={0}
        >
          <p className="text-xs tracking-widest uppercase text-cafe-accent font-medium mb-3">
            About
          </p>
          <h2
            id="about-teaser-heading"
            className="font-display opsz-md text-4xl md:text-5xl font-semibold text-cafe-text mb-6 leading-tight"
          >
            Builder at the edge of software and machines
          </h2>
          <p className="text-cafe-muted leading-relaxed mb-4 text-[15px]">
            I am a Georgia Tech Computer Science graduate with a passion for integrating
            engineering, business, and robotics to drive innovation and outcomes.
          </p>
          <p className="text-cafe-muted leading-relaxed mb-8 text-[15px]">
            With hands-on experience in AI-driven projects, web development, and embedded
            systems, I thrive on complex problems at the intersection of disciplines.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-medium text-cafe-accent hover:text-cafe-accent-h transition-colors duration-200 group cursor-pointer"
          >
            Read more about me
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
          </Link>
        </motion.div>

        {/* Right — profile image with 3D tilt */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          custom={1}
          className="flex justify-center md:justify-end"
        >
          <TiltCard>
            <div
              className="relative w-[320px] h-[380px] md:w-[380px] md:h-[460px] rounded-2xl border border-cafe-border overflow-hidden"
              style={{ background: "var(--cafe-surface)", boxShadow: "var(--cafe-shadow-card)" }}
            >
              <Image
                src="/portfolio-image.png"
                alt="Aryan Bhatia"
                fill
                sizes="(max-width: 768px) 320px, 380px"
                className="object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              {/* Warm gradient overlay at bottom */}
              <div
                className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
                style={{ background: "linear-gradient(to top, #241a10 0%, transparent 100%)" }}
                aria-hidden="true"
              />
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}

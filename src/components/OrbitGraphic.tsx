"use client";

import Image from "next/image";

interface OrbitRingConfig {
  items: string[];
  sizePct: number;
  duration: number;
  direction: "cw" | "ccw";
}

const RINGS: OrbitRingConfig[] = [
  { items: ["Python", "TypeScript", "React", "Next.js"], sizePct: 48, duration: 22, direction: "cw" },
  { items: ["PyTorch", "TensorFlow", "FastAPI", "Node.js", "PostgreSQL"], sizePct: 74, duration: 32, direction: "ccw" },
  { items: ["AWS", "Docker", "Embedded C", "MATLAB", "Git", "MongoDB"], sizePct: 100, duration: 44, direction: "cw" },
];

function OrbitRing({ items, sizePct, duration, direction }: OrbitRingConfig) {
  const radius = `calc(var(--orbit-size) * ${sizePct / 200})`;
  const ringAnimation = direction === "cw" ? "orbit-spin-cw" : "orbit-spin-ccw";
  const counterAnimation = direction === "cw" ? "orbit-counter-cw" : "orbit-counter-ccw";

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cafe-border"
      style={{
        width: `${sizePct}%`,
        height: `${sizePct}%`,
        animation: `${ringAnimation} ${duration}s linear infinite`,
      }}
    >
      {items.map((label, i) => {
        const angle = (360 / items.length) * i;
        return (
          <div
            key={label}
            className="absolute top-1/2 left-1/2 w-0 h-0"
            style={{ transform: `rotate(${angle}deg) translateX(${radius})` }}
          >
            <span
              className="tech-pill absolute top-0 left-0 whitespace-nowrap"
              style={{
                "--orbit-angle": `${angle}deg`,
                animation: `${counterAnimation} ${duration}s linear infinite`,
              } as React.CSSProperties}
            >
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default function OrbitGraphic() {
  return (
    <div
      className="relative mx-auto"
      style={{
        "--orbit-size": "clamp(240px, 36vw, 460px)",
        width: "var(--orbit-size)",
        height: "var(--orbit-size)",
      } as React.CSSProperties}
      role="img"
      aria-label="Animated orbit of my core skills: Python, TypeScript, React, Next.js, PyTorch, TensorFlow, FastAPI, Node.js, PostgreSQL, AWS, Docker, Embedded C, MATLAB, Git, MongoDB"
    >
      {/* Center hub */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border border-cafe-border overflow-hidden"
        style={{
          width: "17%",
          height: "17%",
          background: "var(--cafe-surface)",
          boxShadow: "var(--cafe-shadow-card)",
        }}
      >
        <Image
          src="/Logo/Icon.png"
          alt="Aryan Bhatia"
          fill
          sizes="(max-width: 768px) 80px, 120px"
          className="object-cover rounded-full"
        />
      </div>

      {RINGS.map((ring) => (
        <OrbitRing key={ring.sizePct} {...ring} />
      ))}
    </div>
  );
}

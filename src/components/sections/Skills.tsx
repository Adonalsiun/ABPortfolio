"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { skills } from "@/lib/data";

// Lucide doesn't have brand icons; we use text-only pills with group labels
export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 px-6"
      aria-labelledby="skills-heading"
    >
      {/* Subtle divider line */}
      <div className="absolute top-0 left-6 right-6 max-w-6xl mx-auto h-px bg-cafe-border opacity-50" />

      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <AnimatedSection>
          <div className="mb-14">
            <p className="text-xs tracking-widest uppercase text-cafe-accent font-medium mb-3">
              Toolbox
            </p>
            <h2
              id="skills-heading"
              className="font-display text-4xl md:text-5xl font-bold text-cafe-text"
            >
              Skills &amp; Technologies
            </h2>
          </div>
        </AnimatedSection>

        {/* Skill groups grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, gi) => (
            <AnimatedSection key={group.group} delay={gi * 0.07}>
              <div
                className="rounded-xl border border-cafe-border p-5 md:p-6 h-full"
                style={{ background: "var(--cafe-surface)" }}
              >
                {/* Group label */}
                <p className="text-[11px] font-semibold tracking-widest uppercase text-cafe-accent mb-4">
                  {group.group}
                </p>

                {/* Skill pills */}
                <ul className="flex flex-wrap gap-2" role="list">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="tech-pill hover:bg-cafe-accent/20 hover:text-cafe-text transition-colors duration-200 inline-block">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

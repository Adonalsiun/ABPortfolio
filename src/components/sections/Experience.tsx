"use client";

import Image from "next/image";
import { MapPin, CalendarDays, Award, GraduationCap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { experiences, education, certifications } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 px-6"
      aria-labelledby="experience-heading"
    >
      <div className="absolute top-0 left-6 right-6 max-w-6xl mx-auto h-px bg-cafe-border opacity-50" />

      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <AnimatedSection>
          <div className="mb-14">
            <p className="text-xs tracking-widest uppercase text-cafe-accent font-medium mb-3">
              Career
            </p>
            <h2
              id="experience-heading"
              className="font-display text-4xl md:text-5xl font-bold text-cafe-text"
            >
              Experience
            </h2>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom, #3a2a1a, transparent)" }}
            aria-hidden="true"
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <AnimatedSection key={`${exp.company}-${i}`} delay={i * 0.07}>
                <div className="md:pl-16 relative">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-3.5 top-6 w-3 h-3 rounded-full border-2 border-cafe-accent hidden md:block"
                    style={{ background: "var(--cafe-bg)" }}
                    aria-hidden="true"
                  />

                  <article
                    className="rounded-xl border border-cafe-border p-6 md:p-7"
                    style={{ background: "var(--cafe-surface)" }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      {/* Logo */}
                      {exp.logo && (
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-cafe-border flex-shrink-0 bg-cafe-bg">
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            fill
                            sizes="48px"
                            className="object-contain p-1"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = "none";
                            }}
                          />
                        </div>
                      )}

                      {/* Header */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                          <h3 className="font-display text-lg font-semibold text-cafe-text">
                            {exp.title}
                          </h3>
                          <span className="text-cafe-accent text-sm font-medium">
                            {exp.company}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-xs text-cafe-muted mb-4">
                          <span className="flex items-center gap-1.5">
                            <CalendarDays size={12} aria-hidden="true" />
                            {exp.dates}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin size={12} aria-hidden="true" />
                            {exp.location}
                          </span>
                        </div>

                        <p className="text-sm text-cafe-muted leading-relaxed mb-4">
                          {exp.description}
                        </p>

                        <ul className="space-y-2">
                          {exp.bullets.map((bullet, bi) => (
                            <li key={bi} className="flex items-start gap-2.5 text-sm text-cafe-muted">
                              <span
                                className="w-1.5 h-1.5 rounded-full bg-cafe-accent flex-shrink-0 mt-1.5"
                                aria-hidden="true"
                              />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Education */}
        <AnimatedSection delay={0.1} className="mt-20">
          <div className="mb-8">
            <p className="text-xs tracking-widest uppercase text-cafe-accent font-medium mb-3">
              Academic Background
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-cafe-text">
              Education
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {education.map((edu, i) => (
              <div
                key={i}
                className="rounded-xl border border-cafe-border p-5 md:p-6"
                style={{ background: "var(--cafe-surface)" }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <GraduationCap size={18} className="text-cafe-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-cafe-text text-sm">{edu.degree}</p>
                    <p className="text-cafe-accent text-sm">{edu.school}</p>
                    <p className="text-cafe-border text-xs mt-1">{edu.dates}</p>
                  </div>
                </div>
                {edu.description && (
                  <p className="text-xs text-cafe-muted leading-relaxed">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Certifications */}
        <AnimatedSection delay={0.15} className="mt-14">
          <div className="mb-8">
            <p className="text-xs tracking-widest uppercase text-cafe-accent font-medium mb-3">
              Credentials
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-cafe-text">
              Certifications
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="rounded-xl border border-cafe-border p-4 md:p-5"
                style={{ background: "var(--cafe-surface)" }}
              >
                <Award size={18} className="text-cafe-accent mb-3" aria-hidden="true" />
                <p className="text-sm font-medium text-cafe-text leading-snug mb-1">{cert.name}</p>
                <p className="text-xs text-cafe-muted">{cert.issuer}</p>
                <p className="text-xs text-cafe-border mt-1">{cert.date}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

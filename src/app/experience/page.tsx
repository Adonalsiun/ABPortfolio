"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CalendarDays, MapPin, Award, GraduationCap } from "lucide-react";
import Footer from "@/components/sections/Footer";
import { experiences, education, certifications } from "@/lib/data";
import { fadeUp, slideInLeft, VIEWPORT, EASE } from "@/lib/motion";
import type { Metadata } from "next";

export default function ExperiencePage() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 20%"],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <div className="min-h-screen px-6 pt-28 pb-20">
        <div className="mx-auto max-w-6xl">

          {/* Heading */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="mb-16"
          >
            <p className="text-xs tracking-widest uppercase text-cafe-accent font-medium mb-3">Career</p>
            <h1 className="font-display opsz-xl text-5xl md:text-6xl font-semibold text-cafe-text">Experience</h1>
          </motion.div>

          {/* Animated timeline */}
          <div ref={timelineRef} className="relative mb-24">
            {/* Vertical connecting line */}
            <motion.div
              className="absolute hidden md:block top-8 bottom-8 w-px origin-top"
              style={{
                left: "calc(50% - 0.5px)",
                background: "linear-gradient(to bottom, #d4782a, #3a2a1a)",
                scaleY: lineScaleY,
              }}
              aria-hidden="true"
            />

            <div className="space-y-10">
              {experiences.map((exp, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={`${exp.company}-${i}`}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT}
                    custom={i}
                    className={`relative md:grid md:grid-cols-2 md:gap-12 items-start ${isLeft ? "" : "md:direction-rtl"}`}
                  >
                    {/* Timeline dot */}
                    <div
                      className="absolute hidden md:flex left-1/2 -translate-x-1/2 top-6 items-center justify-center w-4 h-4 rounded-full border-2 border-cafe-accent z-10"
                      style={{ background: "var(--cafe-bg)" }}
                      aria-hidden="true"
                    />

                    {/* Card — alternates sides */}
                    <div className={`md:col-span-1 ${isLeft ? "md:pr-8" : "md:col-start-2 md:pl-8"}`}>
                      <article
                        className="rounded-xl border border-cafe-border p-5 md:p-6"
                        style={{ background: "var(--cafe-surface)", boxShadow: "var(--cafe-shadow-card)" }}
                      >
                        <div className="flex items-start gap-3 mb-4">
                          {exp.logo && (
                            <div className="relative w-10 h-10 rounded-lg border border-cafe-border bg-cafe-bg flex-shrink-0 overflow-hidden">
                              <Image
                                src={exp.logo}
                                alt={`${exp.company} logo`}
                                fill
                                sizes="40px"
                                className="object-contain p-1"
                                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                              />
                            </div>
                          )}
                          <div>
                            <h3 className="font-display text-base font-semibold text-cafe-text leading-snug">
                              {exp.title}
                            </h3>
                            <p className="text-cafe-accent text-sm">{exp.company}</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4 text-xs text-cafe-muted mb-4">
                          <span className="flex items-center gap-1.5">
                            <CalendarDays size={11} aria-hidden="true" />
                            {exp.dates}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin size={11} aria-hidden="true" />
                            {exp.location}
                          </span>
                        </div>

                        <p className="text-sm text-cafe-muted leading-relaxed mb-3">{exp.description}</p>

                        <ul className="space-y-2">
                          {exp.bullets.map((b, bi) => (
                            <li key={bi} className="flex items-start gap-2.5 text-sm text-cafe-muted">
                              <span className="w-1.5 h-1.5 rounded-full bg-cafe-accent flex-shrink-0 mt-1.5" aria-hidden="true" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </article>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Education */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="mb-16">
            <p className="text-xs tracking-widest uppercase text-cafe-accent font-medium mb-3">Academic Background</p>
            <h2 className="font-display text-3xl font-semibold text-cafe-text mb-8">Education</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {education.map((edu, i) => (
                <div key={i} className="rounded-xl border border-cafe-border p-5 md:p-6" style={{ background: "var(--cafe-surface)" }}>
                  <GraduationCap size={18} className="text-cafe-accent mb-3" aria-hidden="true" />
                  <p className="font-semibold text-cafe-text text-sm mb-0.5">{edu.degree}</p>
                  <p className="text-cafe-accent text-sm">{edu.school}</p>
                  <p className="text-cafe-border text-xs mt-1 mb-3">{edu.dates}</p>
                  {edu.description && <p className="text-xs text-cafe-muted leading-relaxed">{edu.description}</p>}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Relevant coursework */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="mb-16">
            <p className="text-xs tracking-widest uppercase text-cafe-accent font-medium mb-3">Curriculum</p>
            <h2 className="font-display text-3xl font-semibold text-cafe-text mb-8">Relevant Coursework</h2>
            <div className="rounded-xl border border-cafe-border overflow-hidden" style={{ background: "var(--cafe-surface)" }}>
              {[
                ["Data Structures & Algorithms", "Computer Science"],
                ["Object-Oriented Programming", "Computer Science"],
                ["Artificial Intelligence (CS3600)", "Computer Science"],
                ["Design Capstone (CS3803)", "Computer Science"],
                ["Objects and Design (CS2340)", "Computer Science"],
                ["Linear Algebra", "Foundation / Math"],
                ["Multivariable Calculus", "Foundation / Math"],
                ["Statics & Solid Mechanics", "Mechanical Engineering"],
                ["Thermodynamics", "Mechanical Engineering"],
              ].map(([course, major], i) => (
                <div
                  key={course}
                  className={`flex items-center justify-between px-5 py-3.5 text-sm ${
                    i !== 0 ? "border-t border-cafe-border" : ""
                  }`}
                >
                  <span className="text-cafe-text">{course}</span>
                  <span className="text-xs text-cafe-muted">{major}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
            <p className="text-xs tracking-widest uppercase text-cafe-accent font-medium mb-3">Credentials</p>
            <h2 className="font-display text-3xl font-semibold text-cafe-text mb-8">Certifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {certifications.map((cert, i) => (
                <div key={i} className="rounded-xl border border-cafe-border p-5" style={{ background: "var(--cafe-surface)" }}>
                  <Award size={18} className="text-cafe-accent mb-3" aria-hidden="true" />
                  <p className="text-sm font-medium text-cafe-text leading-snug mb-1">{cert.name}</p>
                  <p className="text-xs text-cafe-muted">{cert.issuer}</p>
                  <p className="text-xs text-cafe-border mt-1">{cert.date}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
      <Footer />
    </>
  );
}

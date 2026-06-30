"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import Footer from "@/components/sections/Footer";
import RadarChart from "@/components/RadarChart";
import { skills, certifications } from "@/lib/data";
import { fadeUp, slideInLeft, VIEWPORT } from "@/lib/motion";

export default function SkillsPage() {
  return (
    <>
      <div className="min-h-screen px-6 pt-28 pb-20">
        <div className="mx-auto max-w-6xl">

          <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="mb-16">
            <p className="text-xs tracking-widest uppercase text-cafe-accent font-medium mb-3">Toolbox</p>
            <h1 className="font-display opsz-xl text-5xl md:text-6xl font-semibold text-cafe-text">
              Skills &amp; Technologies
            </h1>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}
            className="flex flex-col md:flex-row items-center gap-12 mb-20 p-8 rounded-2xl border border-cafe-border"
            style={{ background: "var(--cafe-surface)" }}
          >
            <div className="flex-shrink-0" aria-hidden="true">
              <RadarChart maxR={130} />
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-cafe-text mb-3">Skill Profile</h2>
              <p className="text-cafe-muted leading-relaxed text-sm max-w-md">
                A radar snapshot of expertise depth across six engineering domains. Scores reflect
                project depth, professional experience, and years of practice.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {skills.map((group, gi) => (
              <motion.div key={group.group} variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT} custom={gi}
                className="rounded-xl border border-cafe-border p-5 md:p-6"
                style={{ background: "var(--cafe-surface)" }}
              >
                <p className="text-[11px] font-semibold tracking-widest uppercase text-cafe-accent mb-4">{group.group}</p>
                <ul className="flex flex-wrap gap-2" role="list">
                  {group.items.map((item) => (
                    <li key={item}><span className="tech-pill">{item}</span></li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
            <p className="text-xs tracking-widest uppercase text-cafe-accent font-medium mb-3">Credentials</p>
            <h2 className="font-display text-3xl font-semibold text-cafe-text mb-8">Certifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {certifications.map((cert, i) => (
                <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT} custom={i}
                  className="rounded-xl border border-cafe-border p-5"
                  style={{ background: "var(--cafe-surface)" }}
                >
                  <Award size={18} className="text-cafe-accent mb-3" aria-hidden="true" />
                  <p className="text-sm font-medium text-cafe-text leading-snug mb-1">{cert.name}</p>
                  <p className="text-xs text-cafe-muted">{cert.issuer}</p>
                  <p className="text-xs text-cafe-border mt-1">{cert.date}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
      <Footer />
    </>
  );
}

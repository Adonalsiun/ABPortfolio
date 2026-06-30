"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fadeUp, slideInLeft, VIEWPORT } from "@/lib/motion";
import { motion } from "framer-motion";
import RadarChart from "@/components/RadarChart";

const TOP_SKILLS = [
  "Python", "TypeScript", "React", "Next.js", "PyTorch", "TensorFlow",
  "Node.js", "FastAPI", "Docker", "AWS", "Embedded C", "OpenCV",
];

export default function SkillsSnapshot() {
  return (
    <section
      id="skills-snapshot"
      className="relative py-24 md:py-28 px-6"
      aria-labelledby="skills-snapshot-heading"
    >
      <div className="absolute top-0 left-6 right-6 max-w-6xl mx-auto h-px bg-cafe-border opacity-50" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mb-12"
        >
          <p className="text-xs tracking-widest uppercase text-cafe-accent font-medium mb-3">
            Toolbox
          </p>
          <h2
            id="skills-snapshot-heading"
            className="font-display opsz-md text-4xl md:text-5xl font-semibold text-cafe-text"
          >
            Skills &amp; Technologies
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Compact radar */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="flex-shrink-0 flex items-center justify-center"
            aria-hidden="true"
          >
            <RadarChart compact maxR={100} />
          </motion.div>

          {/* Skills pills + link */}
          <div className="flex-1">
            <motion.ul
              className="flex flex-wrap gap-2 mb-8"
              role="list"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.04 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              {TOP_SKILLS.map((s) => (
                <motion.li
                  key={s}
                  variants={fadeUp}
                >
                  <span className="tech-pill">{s}</span>
                </motion.li>
              ))}
            </motion.ul>

            <Link
              href="/skills"
              className="inline-flex items-center gap-2 text-sm font-medium text-cafe-accent hover:text-cafe-accent-h transition-colors duration-200 group cursor-pointer"
            >
              View all skills
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

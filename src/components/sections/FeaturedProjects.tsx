"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { GithubIcon } from "@/components/SocialIcons";
import { projects } from "@/lib/data";
import { fadeUp, VIEWPORT } from "@/lib/motion";

const FEATURED_IDS = ["01", "04", "09"];
const featured = projects.filter((p) => FEATURED_IDS.includes(p.id));

const CATEGORY_COLORS: Record<string, string> = {
  AI:                "text-cafe-accent bg-[rgba(212,120,42,0.12)] border-[rgba(212,120,42,0.2)]",
  Robotics:          "text-cafe-muted  bg-[rgba(160,128,96,0.1)]  border-[rgba(160,128,96,0.18)]",
  "Web Development": "text-cafe-text   bg-[rgba(240,230,204,0.07)] border-[rgba(240,230,204,0.12)]",
};

export default function FeaturedProjects() {
  return (
    <section
      id="featured-projects"
      className="relative py-24 md:py-32 px-6"
      aria-labelledby="featured-heading"
    >
      <div className="absolute top-0 left-6 right-6 max-w-6xl mx-auto h-px bg-cafe-border opacity-50" />

      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex items-end justify-between flex-wrap gap-4 mb-12"
        >
          <div>
            <p className="text-xs tracking-widest uppercase text-cafe-accent font-medium mb-3">
              Portfolio
            </p>
            <h2
              id="featured-heading"
              className="font-display opsz-md text-4xl md:text-5xl font-semibold text-cafe-text"
            >
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-cafe-accent hover:text-cafe-accent-h transition-colors duration-200 group cursor-pointer"
          >
            See all projects
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
          </Link>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project, i) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              custom={i}
              className={`card-lift group relative flex flex-col rounded-xl border border-cafe-border overflow-hidden cursor-default ${
                project.id === "04" ? "md:row-span-2" : ""
              }`}
              style={{
                background: "var(--cafe-surface)",
                boxShadow: "var(--cafe-shadow-card)",
              }}
            >
              {/* Thumbnail */}
              <div className={`relative w-full overflow-hidden flex-shrink-0 bg-cafe-bg ${
                project.id === "04" ? "h-64" : "h-44"
              }`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                {/* Warm tint overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(212,120,42,0.08)" }}
                  aria-hidden="true"
                />
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${CATEGORY_COLORS[project.category]}`}>
                    {project.category}
                  </span>
                </div>
                {/* Featured badge */}
                <div className="absolute top-3 right-3">
                  <span className="flex items-center gap-1 text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-cafe-accent/90 text-cafe-bg">
                    <Trophy size={9} aria-hidden="true" />
                    Featured
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-5 md:p-6">
                {project.achievement && (
                  <p className="text-[11px] font-medium tracking-wide uppercase text-cafe-accent mb-2">
                    {project.achievement}
                  </p>
                )}
                <h3 className="font-display text-lg font-semibold text-cafe-text leading-snug mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-cafe-muted leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.slice(0, 5).map((t) => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>

                {/* Hover-reveal drawer */}
                <div className="flex items-center gap-4 pt-4 border-t border-cafe-border">
                  <span className="text-xs text-cafe-border flex-1">{project.timeframe}</span>
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-xs font-medium text-cafe-accent hover:text-cafe-accent-h transition-colors cursor-pointer"
                  >
                    View details →
                  </Link>
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-cafe-muted hover:text-cafe-accent transition-colors cursor-pointer">
                      <GithubIcon size={14} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo" className="text-cafe-accent hover:text-cafe-accent-h transition-colors cursor-pointer">
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

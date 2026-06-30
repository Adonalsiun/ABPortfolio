import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, CalendarDays, Trophy } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import Footer from "@/components/sections/Footer";
import { projects } from "@/lib/data";
import type { Metadata } from "next";

interface Props { params: Promise<{ id: string }> }

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetail({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const isSensi = project.id === "09";

  return (
    <>
      <div className="min-h-screen px-6 pt-28 pb-20">
        <div className="mx-auto max-w-6xl">

          {/* Back */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-cafe-muted hover:text-cafe-accent transition-colors duration-200 mb-12 group cursor-pointer"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-200" aria-hidden="true" />
            Back to Projects
          </Link>

          {/* Hero */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-medium tracking-widest uppercase px-2.5 py-0.5 rounded-full border text-cafe-accent border-cafe-accent/30 bg-cafe-accent/10">
                {project.category}
              </span>
              {project.achievement && (
                <span className="flex items-center gap-1 text-xs font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-cafe-accent/90 text-cafe-bg">
                  <Trophy size={10} aria-hidden="true" />
                  {project.achievement}
                </span>
              )}
            </div>
            <h1 className="font-display opsz-xl text-4xl md:text-5xl lg:text-6xl font-semibold text-cafe-text leading-tight mb-4">
              {project.title}
            </h1>
            <div className="flex items-center gap-3 text-sm text-cafe-muted">
              <CalendarDays size={14} aria-hidden="true" />
              {project.timeframe}
            </div>
          </div>

          {/* Thumbnail */}
          {project.image && (
            <div className="relative w-full h-56 md:h-80 rounded-2xl overflow-hidden border border-cafe-border mb-12 bg-cafe-bg">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Main — description + deep dive */}
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="font-display text-2xl font-semibold text-cafe-text mb-4">Overview</h2>
                <p className="text-cafe-muted leading-relaxed">{project.description}</p>
              </section>

              {/* Sensi-specific detail sections */}
              {isSensi && project.details && (
                <>
                  {project.details.problem && (
                    <section>
                      <h2 className="font-display text-xl font-semibold text-cafe-text mb-3">The Problem</h2>
                      <p className="text-cafe-muted leading-relaxed">{project.details.problem}</p>
                    </section>
                  )}
                  {project.details.solution && (
                    <section>
                      <h2 className="font-display text-xl font-semibold text-cafe-text mb-3">The Solution</h2>
                      <p className="text-cafe-muted leading-relaxed">{project.details.solution}</p>
                    </section>
                  )}
                  {project.details.features && (
                    <section>
                      <h2 className="font-display text-xl font-semibold text-cafe-text mb-5">Key Features</h2>
                      <ul className="space-y-4">
                        {project.details.features.map((f) => (
                          <li
                            key={f.title}
                            className="flex gap-4 p-4 rounded-xl border border-cafe-border"
                            style={{ background: "#241a10" }}
                          >
                            <span className="w-2 h-2 rounded-full bg-cafe-accent flex-shrink-0 mt-2" aria-hidden="true" />
                            <div>
                              <p className="text-sm font-semibold text-cafe-text mb-1">{f.title}</p>
                              <p className="text-sm text-cafe-muted leading-relaxed">{f.description}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}
                  {project.details.reflections && (
                    <section>
                      <h2 className="font-display text-xl font-semibold text-cafe-text mb-3">Hackathon Reflections</h2>
                      <p className="text-cafe-muted leading-relaxed">{project.details.reflections}</p>
                    </section>
                  )}
                </>
              )}

              {/* Deep Dive for all projects */}
              <section>
                <h2 className="font-display text-xl font-semibold text-cafe-text mb-3">Deep Dive</h2>
                <p className="text-cafe-muted leading-relaxed">{project.deepDive}</p>
              </section>
            </div>

            {/* Sidebar — metadata */}
            <aside className="space-y-6">
              {/* Links */}
              <div
                className="rounded-xl border border-cafe-border p-5"
                style={{ background: "#241a10" }}
              >
                <h3 className="text-xs font-semibold uppercase tracking-widest text-cafe-border mb-4">Links</h3>
                <div className="flex flex-col gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-cafe-muted hover:text-cafe-accent transition-colors cursor-pointer"
                    >
                      <GithubIcon size={15} />
                      View on GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-cafe-accent hover:text-cafe-accent-h transition-colors cursor-pointer"
                    >
                      <ExternalLink size={15} aria-hidden="true" />
                      Live demo / video
                    </a>
                  )}
                </div>
              </div>

              {/* Tech stack */}
              <div
                className="rounded-xl border border-cafe-border p-5"
                style={{ background: "#241a10" }}
              >
                <h3 className="text-xs font-semibold uppercase tracking-widest text-cafe-border mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>
              </div>

              {/* Meta */}
              <div
                className="rounded-xl border border-cafe-border p-5"
                style={{ background: "#241a10" }}
              >
                <h3 className="text-xs font-semibold uppercase tracking-widest text-cafe-border mb-4">Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-cafe-muted">Timeframe</span>
                    <span className="text-cafe-text">{project.timeframe}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cafe-muted">Category</span>
                    <span className="text-cafe-text">{project.category}</span>
                  </div>
                  {project.achievement && (
                    <div className="flex justify-between">
                      <span className="text-cafe-muted">Achievement</span>
                      <span className="text-cafe-accent text-right text-xs">{project.achievement}</span>
                    </div>
                  )}
                </div>
              </div>
            </aside>
          </div>

          {/* Bottom back */}
          <div className="mt-16 pt-8 border-t border-cafe-border">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-cafe-muted hover:text-cafe-accent transition-colors duration-200 group cursor-pointer"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-200" aria-hidden="true" />
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

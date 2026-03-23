"use client";

import { projects } from "../data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUpRight, Github, Calendar, Target } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

export default function ProjectDetail({ params }) {
  const { id } = params;
  
  // Find the matching project by 'num' which acts as our 'id'
  const project = projects.find((p) => p.num === id);

  if (!project) {
    notFound();
  }

  return (
    <PageTransition>
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Back Button */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link href="/projects" className="text-accent flex items-center gap-2 hover:underline w-fit">
              <ArrowLeft size={20} />
              <span>Back to Projects</span>
            </Link>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full h-[300px] md:h-[500px] relative rounded-2xl overflow-hidden mb-12 shadow-2xl border border-white/10"
          >
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
              <span className="text-accent font-mono text-xl mb-2 block">{project.num} {"//"} {project.category}</span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white">{project.title}</h1>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content Area */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="col-span-1 lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-4 border-b border-white/10 pb-2">Overview</h2>
                <p className="text-white/80 leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>

              {project.details && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 border-b border-white/10 pb-2">Deep Dive</h2>
                  <p className="text-white/80 leading-relaxed text-lg whitespace-pre-line">
                    {project.details}
                  </p>
                </div>
              )}
            </motion.div>

            {/* Sidebar Stats & Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="col-span-1 space-y-8"
            >
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-6">Project Info</h3>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-full text-accent mt-1">
                      <Target size={20} />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm mb-1">Achievement</p>
                      <p className="font-medium text-white/90">{project.achievement}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-full text-accent mt-1">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm mb-1">Timeline</p>
                      <p className="font-medium text-white/90">{project.timeframe}</p>
                    </div>
                  </li>
                </ul>

                <hr className="my-8 border-white/10" />

                <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((item, index) => (
                    <span 
                      key={index} 
                      className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-accent"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-4">
                  {project.live !== "#" && (
                    <Button asChild className="w-full flex items-center justify-center gap-2 group">
                      <Link href={project.live} target="_blank">
                        View Live Project
                        <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Link>
                    </Button>
                  )}
                  {project.github !== "#" && (
                    <Button asChild variant="outline" className="w-full flex items-center justify-center gap-2 hover:bg-white/5 group">
                      <Link href={project.github} target="_blank">
                        <Github size={18} />
                        View Source Code
                      </Link>
                    </Button>
                  )}
                </div>

              </div>
            </motion.div>
            
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

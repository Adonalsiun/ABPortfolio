"use client";

import { ArrowUpRight, Github, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const projects = [
  // Your existing projects...
];

const ProjectsPage = () => {
  const [visibleProjects, setVisibleProjects] = useState(4); // Start with 4 visible
  const categories = ["All", "AI", "Robotics", "Web"]; // Add your categories

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header with filtering */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-accent text-lg">Portfolio</span>
            <h1 className="h1 mt-2 mb-4">Project Showcase</h1>
            <p className="text-white/80 max-w-2xl">
              Explore my technical work across AI, robotics, and software engineering
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="rounded-full hover:bg-accent hover:text-primary"
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid - Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {projects.slice(0, visibleProjects).map((project) => (
            <div
              key={project.num}
              className="border border-white/10 rounded-xl overflow-hidden hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full gap-x-2 hover:bg-accent hover:text-primary"
                  >
                    <Link href={`/projects/${project.num}`}> {/* Add detail pages later */}
                      View Project
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-accent text-sm font-medium">
                    {project.category}
                  </span>
                  <span className="text-white/50 text-xs">#{project.num}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                
                <p className="text-white/70 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech.name}
                      className="px-2 py-1 bg-white/5 rounded-full text-xs text-white/80"
                    >
                      {tech.name}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="px-2 py-1 bg-white/5 rounded-full text-xs text-white/50">
                      +{project.stack.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex gap-3">
                  {project.live !== "#" && (
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="gap-x-1 text-xs px-3"
                    >
                      <Link href={project.live} target="_blank">
                        <ArrowUpRight className="h-3 w-3" />
                        Demo
                      </Link>
                    </Button>
                  )}
                  {project.github !== "#" && (
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="gap-x-1 text-xs px-3"
                    >
                      <Link href={project.github} target="_blank">
                        <Github className="h-3 w-3" />
                        Code
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < projects.length && (
          <div className="text-center">
            <Button
              onClick={() => setVisibleProjects(prev => prev + 4)}
              variant="outline"
              className="rounded-full hover:bg-accent hover:text-primary"
            >
              Load More Projects
            </Button>
          </div>
        )}

        {/* Stats Bar */}
        <div className="mt-16 p-6 bg-white/5 rounded-xl border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-accent">{projects.length}+</div>
              <div className="text-white/70 text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">5+</div>
              <div className="text-white/70 text-sm">Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">3+</div>
              <div className="text-white/70 text-sm">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">100%</div>
              <div className="text-white/70 text-sm">Passion</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
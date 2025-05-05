"use client";

import { ArrowUpRight, Github, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

const projects = [
  {
    num: "01",
    category: "Artificial Intelligence",
    title: "Mir.AI – AI Powered MRI Enhancement",
    description: "Developed an AI model leveraging Generative Adversarial Networks to enhance 1.5T MRI scans to 3T scans and up, improving accessibility while reducing costs. Engineered a fast and efficient image processing pipeline with FastAPI, achieving up to 50 epochs in an hour for training models. Applied insights from Cycle-Free CycleGAN using invertible generators to refine unsupervised image enhancements.",
    stack: [
      { name: "Python" },
      { name: "TensorFlow" },
      { name: "PyTorch Lightning" },
      { name: "GANs" },
      { name: "FastAPI" },
      { name: "React" }
    ],
    image: "/assets/projects/MRI.png",
    timeframe: "Feb 2025 - Present",
    achievement: "Hackalytics 2025 Healthcare Track Winner",
    live: "#",
    github: "#"
  },
  {
    num: "02",
    category: "Robotics",
    title: "GTXR Kalman Filter Implementation",
    description: "Implemented multivariate Kalman Filter in C for state estimation in GTXR flight computer, integrating a complementary filter for acceleration and angular velocity resulting in decreased estimation errors. Created Java matrix operations library to enhance understanding of Kalman Filter mathematics, with data handling in both Euler angle and quaternion formats.",
    stack: [
      { name: "Java" },
      { name: "C" },
      { name: "MATLAB" }
    ],
    image: "/assets/projects/gtxr.png",
    timeframe: "Aug 2024 - Dec 2024",
    achievement: "Applications of Robotics",
    live: "#",
    github: "#"
  },
  {
    num: "03",
    category: "Computer Engineering",
    title: "Studio Camera Restoration",
    description: "Diagnosed and repaired hardware issues, including PCB damage, to fully restore a malfunctioning Fujifilm XS-10 studio camera. Utilized Embedded C programming and real-time operating systems to develop custom firmware implementing computer vision solutions using OpenCV, resulting in a 20% enhancement in accuracy and restoration of studio-grade functionality.",
    stack: [
      { name: "C++" },
      { name: "Python" },
      { name: "OpenCV" },
      { name: "SolidWorks" },
      { name: "Autodesk" },
      { name: "Embedded C" }
    ],
    image: "/assets/projects/camera.png",
    timeframe: "Aug 2024 - Dec 2024",
    achievement: "Applications of Computer Engineering",
    live: "#",
    github: "#"
  },
  {
    num: "04",
    category: "Artificial Intelligence",
    title: "AI-Driven MRI Super-Resolution",
    description: "Leveraged advanced AI techniques to enhance MRI image quality, reduce scanning times, and lower costs. Developed a machine learning model to upscale MRI scans from 1.5T to 3T, improving diagnostic accuracy and accessibility in healthcare.",
    stack: [
      { name: "Python" },
      { name: "PyTorch Lightning" },
      { name: "Matplotlib" },
      { name: "Contrastive Unpaired Translation" }
    ],
    image: "/assets/projects/mri-superres.jpg",
    timeframe: "Jan 2025 - Mar 2025",
    achievement: "Hacklytics 2025 Finalist",
    live: "https://www.youtube.com/watch?v=W0isckv7zg4",
    github: "https://github.com/venkat1596/Hacklytics_Hackathon"
  }
];

const ProjectsPage = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);
  const categories = ["All", "AI", "Robotics", "Web"];

  return (
    <PageTransition>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Animated Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6"
          >
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-accent text-lg"
              >
                Portfolio
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="h1 mt-2 mb-4"
              >
                Project Showcase
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-white/80 max-w-2xl"
              >
                Explore my technical work across AI, robotics, and software engineering
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-2"
            >
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
            </motion.div>
          </motion.div>

          {/* Projects Grid with staggered animations */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {projects.slice(0, visibleProjects).map((project, index) => (
              <motion.div
                key={project.num}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -5 }}
                className="border border-white/10 rounded-xl overflow-hidden hover:border-accent/30 transition-all duration-300 group hover:shadow-lg hover:shadow-accent/10"
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
                      className="rounded-full gap-x-2 hover:bg-accent hover:text-primary transition-transform hover:scale-105"
                    >
                      <Link href={`/projects/${project.num}`}>
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
                    {project.stack.slice(0, 3).map((tech, i) => (
                      <motion.span
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + (i * 0.05) }}
                        className="px-2 py-1 bg-white/5 rounded-full text-xs text-white/80"
                      >
                        {tech.name}
                      </motion.span>
                    ))}
                    {project.stack.length > 3 && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.45 }}
                        className="px-2 py-1 bg-white/5 rounded-full text-xs text-white/50"
                      >
                        +{project.stack.length - 3}
                      </motion.span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    {project.live !== "#" && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="gap-x-1 text-xs px-3 hover:bg-accent/10"
                        >
                          <Link href={project.live} target="_blank">
                            <ArrowUpRight className="h-3 w-3" />
                            Demo
                          </Link>
                        </Button>
                      </motion.div>
                    )}
                    {project.github !== "#" && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.55 }}
                      >
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="gap-x-1 text-xs px-3 hover:bg-accent/10"
                        >
                          <Link href={project.github} target="_blank">
                            <Github className="h-3 w-3" />
                            Code
                          </Link>
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          {visibleProjects < projects.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center"
            >
              <Button
                onClick={() => setVisibleProjects(prev => prev + 4)}
                variant="outline"
                className="rounded-full hover:bg-accent hover:text-primary transition-transform hover:scale-105"
              >
                Load More Projects
              </Button>
            </motion.div>
          )}

          {/* Animated Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-16 p-6 bg-white/5 rounded-xl border border-white/10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                <div className="text-3xl font-bold text-accent">{projects.length}+</div>
                <div className="text-white/70 text-sm">Projects Completed</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                <div className="text-3xl font-bold text-accent">5+</div>
                <div className="text-white/70 text-sm">Technologies</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <div className="text-3xl font-bold text-accent">3+</div>
                <div className="text-white/70 text-sm">Categories</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-white/70 text-sm">Passion</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ProjectsPage;
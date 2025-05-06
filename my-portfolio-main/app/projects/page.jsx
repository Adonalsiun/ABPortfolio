"use client";

import { ArrowUpRight, Github, ChevronRight, ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

// Merged the duplicate MRI projects and fixed categories to match filter options
const projects = [
  {
    num: "01",
    category: "AI",
    title: "Mir.AI – AI Powered MRI Enhancement",
    description: "Developed an AI model leveraging Generative Adversarial Networks to enhance 1.5T MRI scans to 3T scans and up, improving accessibility while reducing costs. Engineered a fast and efficient image processing pipeline with FastAPI, achieving up to 50 epochs in an hour for training models. Applied insights from Cycle-Free CycleGAN using invertible generators to refine unsupervised image enhancements. Leveraged advanced AI techniques to improve diagnostic accuracy and accessibility in healthcare.",
    stack: [
      { name: "Python" },
      { name: "TensorFlow" },
      { name: "PyTorch Lightning" },
      { name: "GANs" },
      { name: "FastAPI" },
      { name: "React" },
      { name: "Matplotlib" },
      { name: "Contrastive Unpaired Translation" }
    ],
    image: "/assets/projects/MRI.png",
    timeframe: "Jan 2025 - Present",
    achievement: "Hackalytics 2025 Healthcare Track Winner",
    live: "https://www.youtube.com/watch?v=W0isckv7zg4",
    github: "https://github.com/venkat1596/Hacklytics_Hackathon"
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
    image: "/assets/projects/GTXR.png",
    timeframe: "Aug 2024 - Dec 2024",
    achievement: "Applications of Robotics",
    live: "#",
    github: "#"
  },
  {
    num: "03",
    category: "Robotics",
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
    image: "/assets/projects/Camera.png",
    timeframe: "Aug 2024 - Dec 2024",
    achievement: "Applications of Computer Engineering",
    live: "#",
    github: "#"
  },
  {
    num: "04",
    category: "Web Development",
    title: "Connectogen - Research Collaboration Platform",
    description: "Platform enhancing collaboration among healthcare and biomedical researchers, used by Emory University, Georgia Tech, and Morehouse. Features include user profiles, project management, mentorship activities, and real-time notifications. Developed with a team under Emory University's School of Medicine leadership.",
    stack: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "WebSockets" },
      { name: "Turborepo" }
    ],
    image: "/assets/projects/connect.png",
    timeframe: "Aug 2023 - Present",
    achievement: "Supported by Emory University SOM",
    live: "#",
    github: "#"
  },
  {
    num: "05",
    category: "Web Development",
    title: "Atlanta FoodQuest",
    description: "Restaurant discovery platform for Atlanta featuring exploration, reviews, and filtering by distance, ratings, and cuisine. Includes user registration, favorite saving, and rating capabilities. Developed for CS2340 course at Georgia Tech.",
    stack: [
      { name: "Python" },
      { name: "Django" },
      { name: "HTML/CSS" },
      { name: "JavaScript" },
      { name: "Google Maps API" }
    ],
    image: "/assets/projects/food.png",
    timeframe: "Summer 2024",
    achievement: "CS2340 Project",
    live: "https://atlantafoodfinder-a281298e3c3f.herokuapp.com/aff/",
    github: "https://github.com/stephenl99/AtlantaFoodFinder"
  },
  {
    num: "06",
    category: "AI",
    title: "Pac-Man AI",
    description: "Developed intelligent Pac-Man agents using reinforcement learning and A* algorithms for optimal pathfinding and ghost avoidance. Implemented various AI techniques to solve the classic game with different strategies.",
    stack: [
      { name: "Python" },
      { name: "Reinforcement Learning" },
      { name: "A* Algorithm" },
      { name: "NumPy" }
    ],
    image: "/assets/projects/pacman.png",
    timeframe: "Spring 2024",
    achievement: "AI Course Project",
    live: "#",
    github: "https://github.com/Adonalsiun/CS3600-Homework"
  }, 
  {
    num: "07",
    category: "AI",
    title: "Auditory Feedback System for Visually Impaired Programmers",
    description: "Engineered a real-time auditory feedback system to support visually impaired individuals learning to code. Implemented sonification techniques to represent syntax errors, indentation, function execution, and loop iterations using distinct auditory cues. Integrated adaptive feedback based on user proficiency and provided optional tactile feedback via wearable devices. The system aims to reduce cognitive load and improve accessibility in programming education.",
    stack: [
      { name: "JavaScript" },
      { name: "HTML/CSS" },
      { name: "Web Audio API" },
      { name: "Assistive Technology" }
    ],
    image: "/assets/projects/sound.png",
    timeframe: "April 2025 - Present",
    achievement: "Inclusive Computing Initiative",
    live: "https://audio-project-seven.vercel.app/",
    github: "https://github.com/Adonalsiun/Audio-Project/"
  },
  {
    num: "08",
    category: "Web Development",
    title: "Personal Portfolio Website",
    description: "Developed a full-stack portfolio website to showcase projects in AI, robotics, web development, and embedded systems. Features include an About Me section, tech stack overview, contact information, and detailed project listings. Designed with accessibility, responsiveness, and performance in mind to highlight work as a Georgia Tech CS student.",
    stack: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "Django" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Firebase" }
    ],
    image: "/assets/projects/portfolio.png",
    timeframe: "March 2025 - Present",
    achievement: "Personal Branding Initiative",
    live: "https://www.arynbht.tech/",
    github: "https://github.com/Adonalsiun/ABPortfolio"
  }  

];

const ProjectsPage = () => {
  const [visibleProjects, setVisibleProjects] = useState(projects.length); // Show all by default
  const [activeCategory, setActiveCategory] = useState("All");
  // Expanded descriptions state - track which project descriptions are expanded
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  // Expanded tags state - track which project tags are expanded
  const [expandedTags, setExpandedTags] = useState({});
  
  const categories = ["All", "AI", "Robotics", "Web Development"]; // Match the project categories

  // Toggle description expansion for a specific project
  const toggleDescription = (projectNum) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [projectNum]: !prev[projectNum]
    }));
  };
  
  // Toggle tag expansion for a specific project
  const toggleTags = (projectNum) => {
    setExpandedTags(prev => ({
      ...prev,
      [projectNum]: !prev[projectNum]
    }));
  };

  // Filter projects based on active category
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
                Explore my technical work across {activeCategory === "All" ? "multiple domains" : activeCategory}
              </motion.p>
            </div>
            
            {/* Improved category filter buttons with consistent styling */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={`rounded-full transition-all px-4 py-2 ${
                    activeCategory === category 
                      ? "bg-accent text-primary font-medium" 
                      : "text-white hover:bg-accent hover:text-primary"
                  }`}
                  onClick={() => {
                    setActiveCategory(category);
                    setVisibleProjects(4); // Reset visible projects when changing category
                  }}
                >
                  {category}
                </Button>
              ))}
            </motion.div>
          </motion.div>

          {/* Projects Grid */}
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
            {filteredProjects.slice(0, visibleProjects).map((project, index) => (
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
                  
                  {/* Description with View More functionality */}
                  <div className="mb-4">
                    <p className={`text-white/70 text-sm ${!expandedDescriptions[project.num] ? "line-clamp-2" : ""}`}>
                      {project.description}
                    </p>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="mt-1 text-xs text-accent p-0 hover:bg-transparent hover:text-accent/70 flex items-center gap-1"
                      onClick={() => toggleDescription(project.num)}
                    >
                      {expandedDescriptions[project.num] ? "View Less" : "View More"}
                      <ArrowDown className={`h-3 w-3 transition-transform ${expandedDescriptions[project.num] ? "rotate-180" : ""}`} />
                    </Button>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {/* Show first 3 tags by default, or all tags if expanded */}
                    {(expandedTags[project.num] ? project.stack : project.stack.slice(0, 3)).map((tech, i) => (
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
                    {/* Show +N button if there are more tags and tags aren't expanded */}
                    {project.stack.length > 3 && !expandedTags[project.num] && (
                      <motion.button
                        onClick={() => toggleTags(project.num)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.45 }}
                        className="px-2 py-1 bg-white/5 rounded-full text-xs text-white/50 hover:bg-white/10 cursor-pointer transition-colors"
                      >
                        +{project.stack.length - 3}
                      </motion.button>
                    )}
                    {/* Show "Show Less" button if tags are expanded */}
                    {project.stack.length > 3 && expandedTags[project.num] && (
                      <motion.button
                        onClick={() => toggleTags(project.num)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="px-2 py-1 bg-white/5 rounded-full text-xs text-white/50 hover:bg-white/10 cursor-pointer transition-colors"
                      >
                        Show Less
                      </motion.button>
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

          {/* Load More Button - Only show if there are more projects to load */}
          {visibleProjects < filteredProjects.length && (
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

          {/* Stats Bar - Update counts based on filtered projects */}
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
                <div className="text-3xl font-bold text-accent">{filteredProjects.length}+</div>
                <div className="text-white/70 text-sm">Projects</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                <div className="text-3xl font-bold text-accent">
                  {[...new Set(filteredProjects.flatMap(p => p.stack.map(s => s.name)))].length}+
                </div>
                <div className="text-white/70 text-sm">Technologies</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <div className="text-3xl font-bold text-accent">
                  {[...new Set(filteredProjects.map(p => p.category))].length}
                </div>
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
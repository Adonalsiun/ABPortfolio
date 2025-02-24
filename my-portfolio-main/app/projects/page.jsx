"use client";

// Imports
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

// importing assets
import projectGTXR from "../../public/assets/projects/GTXR.png";
// import projectCameraRestoration from "../../public/assets/projects/CameraRestoration.jpg";
// import projectPacManAI from "../../public/assets/projects/PacManAI.jpg";
// import projectAtlantaFoodFinder from "../../public/assets/projects/AtlantaFoodFinder.jpg";
import WorkSliderButtons from "@/components/WorkSliderButtons";

// Object Array
const projectList = [
  {
    num: "01",
    category: "Robotics",
    title: "Georgia Tech Experimental Rocketry Kalman Filter (GTXR)",
    Description:
      "Implemented multivariate Kalman Filter in C for state estimation in GTXR flight computer, integrating a complementary filter for acceleration and angular velocity resulting in decreased estimation errors. Created Java matrix operations library to enhance understanding of Kalman Filter mathematics, with data handling in both Euler angle and quaternion formats.",
    stack: [{ name: "Java" }, { name: "C" }, { name: "MATLAB" }],
    image: projectGTXR,
    live: "#",
    github: "#",
  },
  // {
  //   num: "02",
  //   category: "Computer Engineering",
  //   title: "Studio Camera Restoration",
  //   Description:
  //     "Diagnosed and repaired hardware issues, including PCB damage, to fully restore a malfunctioning Fujifilm XS-10 studio camera. Utilized Embedded C programming and real-time operating systems in developing custom firmware to implement computer vision solutions using OpenCV, resulting in a 20% enhancement in accuracy and restoration of studio-grade functionality for camera sensors and focus algorithm.",
  //   stack: [
  //     { name: "C++" },
  //     { name: "Python" },
  //     { name: "OpenCV" },
  //     { name: "SolidWorks" },
  //     { name: "Autodesk" },
  //   ],
  //   image: projectCameraRestoration,
  //   live: "#",
  //   github: "#",
  // },
  // {
  //   num: "03",
  //   category: "Artificial Intelligence",
  //   title: "Pac-Man AI Development",
  //   Description:
  //     "Spearheaded development of intelligent Pac-Man agents using reinforcement learning and A* algorithms, demonstrating advanced AI implementation in gaming environments. Built end-to-end visualization platform with Flask and SciKit Learn, showcasing full-stack development capabilities and machine learning expertise through real-time AI performance analysis.",
  //   stack: [
  //     { name: "Python" },
  //     { name: "Java" },
  //     { name: "Flask" },
  //     { name: "SciKit Learn" },
  //   ],
  //   image: projectPacManAI,
  //   live: "#",
  //   github: "#",
  // },
  // {
  //   num: "04",
  //   category: "Web Development",
  //   title: "Atlanta Food Finder",
  //   Description:
  //     "Engineered a restaurant discovery platform integrating geolocation services, interactive mapping features, and conversational chatbot, enabling users to search and visualize dining options across Atlanta. Led end-to-end development through complete project lifecycle, implementing data parsing from external APIs and maintaining database operations while following Agile practices and daily team collaborations.",
  //   stack: [
  //     { name: "Python" },
  //     { name: "Django" },
  //     { name: "SQL" },
  //     { name: "JavaScript" },
  //     { name: "HTML/CSS" },
  //   ],
  //   image: projectAtlantaFoodFinder,
  //   live: "#",
  //   github: "#",
  // },
];

const Projects = () => {
  const [project, setProject] = useState(projectList[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projectList[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.Description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-accent text-xl ">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live link button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github link button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px]"
              onSlideChange={handleSlideChange}
            >
              {projectList.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[470px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 "></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider buttons */}
              <WorkSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc (50%_ - _22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max
                xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
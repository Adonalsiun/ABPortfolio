"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaJava,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiCplusplus,
  SiExpress,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const about = {
  title: "About Me",
  description:
    "I am a Computer Science undergraduate at Georgia Tech with a strong foundation in software engineering, AI, and full-stack development. With hands-on experience in AI-driven projects, web development, and embedded systems, I am passionate about solving complex problems through innovative technology. Currently, I am seeking opportunities to apply my expertise in AI, software engineering, and robotics while collaborating with dynamic teams.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Aryan Bhatia",
    },
    {
      fieldName: "Experience",
      fieldValue: "Full Stack Developer at Connectogen | Data Analysis Intern at Dreamz Houz",
    },
    {
      fieldName: "Location",
      fieldValue: "Atlanta, Georgia",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "www.linkedin.com/in/arynbht",
    },
    {
      fieldName: "College",
      fieldValue: "Georgia Institute of Technology",
    },
    {
      fieldName: "Email",
      fieldValue: "aryan.bhatia@gatech.edu",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Japanese",
    },
    {
      fieldName: "Technical Skills",
      fieldValue: "Python, Java, C, C++, JavaScript, React, Django, SQL, MongoDB, AI/ML, Embedded Systems",
    },
  ],
};

const publications = [
  {
    fieldName: "Devpost",
    fieldValue: "https://devpost.com/arynbht",
  },
  {
    fieldName: "Github",
    fieldValue: "https://github.com/Adonalsiun",
  },
  {
    fieldName: "Leetcode",
    fieldValue: "https://leetcode.com/arynbht/",
  },
  {
    fieldName: "LinkedIn",
    fieldValue: "www.linkedin.com/in/arynbht/",
  },
];

const education = {
  title: "My Education",
  description: "Here's a brief overview of my educational background.",
  items: [
    {
      institution: "Computer Science",
      degree: "Georgia Institute of Technology",
      duration: "2023 - 2026",
    },
    {
      institution: "Mechanical Engineering",
      degree: "University of Georgia",
      duration: "2022 - 2023",
    },
    {
      institution: "High School",
      degree: "South Forsyth",
      duration: "2022",
    },
    {
      institution: "Middle School",
      degree: "Lakeside",
      duration: "2018",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "Here are some of the technologies I've worked with.",
  skillList: [
    {
      icon: <SiCplusplus />,
      name: "C++",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind css",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
  ],
};

const tabVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const Resume = () => {
  return (
    <PageTransition>
      <div className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              {["skills", "education", "certificates", "publications", "about"].map((tab, i) => (
                <motion.div
                  key={tab}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={tabVariants}
                >
                  <TabsTrigger value={tab}>
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </TabsTrigger>
                </motion.div>
              ))}
            </TabsList>

            {/* content */}
            <div className="min-h-[70vh] w-full">
              {/* skills */}
              <TabsContent value="skills" className="w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col gap-[30px]">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                      <h3 className="text-4xl font-bold">{skills.title}</h3>
                      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                        {skills.description}
                      </p>
                    </div>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                      {skills.skillList.map((skill, index) => {
                        return (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                  <div className="text-6xl group-hover:text-accent transition-all">
                                    {skill.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize">{skill.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </motion.li>
                        );
                      })}
                    </ul>
                  </div>
                </motion.div>
              </TabsContent>

              {/* education */}
              <TabsContent value="education" className="w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{education.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {education.description}
                    </p>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {education.items.map((item, index) => {
                          return (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                            >
                              <span className="text-accent">{item.duration}</span>
                              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                {item.degree}
                              </h3>
                              <div className="flex items-center gap-3">
                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                <p className="text-white/60">{item.institution}</p>
                              </div>
                            </motion.li>
                          );
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                </motion.div>
              </TabsContent>

              {/* certificates */}
              <TabsContent value="certificates" className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  I don&apos;t have any certificates yet 😅
                </motion.div>
              </TabsContent>

              {/* cp */}
              <TabsContent value="publications" className="w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">Publications</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      Here are my profiles on various media
                      platforms.
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto xl:mx-0">
                      {publications.map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-[#232329] p-4 rounded-xl flex flex-col items-center xl:items-start gap-2"
                        >
                          <span className="text-accent font-semibold">
                            {item.fieldName}
                          </span>
                          <a
                            href={`https://${item.fieldValue}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-accent transition-colors"
                          >
                            {item.fieldValue}
                          </a>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </TabsContent>

              {/* about */}
              <TabsContent value="about" className="w-full text-center xl:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col gap-[30px]">
                    <h3 className="text-4xl font-bold">{about.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {about.description}
                    </p>
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                      {about.info.map((item, index) => {
                        return (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-center justify-center xl:justify-start gap-4"
                          >
                            <span className="text-white/60">{item.fieldName}</span>
                            <span className="text-x">{item.fieldValue}</span>
                          </motion.li>
                        );
                      })}
                    </ul>
                  </div>
                </motion.div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </PageTransition>
  );
};

export default Resume;

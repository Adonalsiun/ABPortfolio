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
  SiCsharp,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiFastapi,
  SiApachekafka,
  SiDotnet,
  SiNumpy,
  SiPandas,
  SiMicrosoftsqlserver,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGit,
  SiDocker,
  SiJupyter,
  SiGithubactions,
  SiAmazonaws,
  SiMicrosoftazure,
  SiGooglecloud,
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
    fieldName: "X (Twitter)",
    fieldValue: "https://x.com/adonalsiun",
  },
  {
    fieldName: "LinkedIn",
    fieldValue: "https://www.linkedin.com/in/arynbht/",
  },
];

const education = {
  title: "My Education",
  description: "Here's a brief overview of my collegiate background and relevant coursework.",
  items: [
    {
      institution: "Georgia Institute of Technology",
      degree: "B.S. in Computer Science",
      duration: "2023 - 2026",
    },
    {
      institution: "University of Georgia",
      degree: "Mechanical Engineering",
      duration: "2022 - 2023",
    }
  ],
  coursework: [
    { course: "Data Structures & Algorithms", major: "Computer Science" },
    { course: "Object-Oriented Programming", major: "Computer Science" },
    { course: "Artificial Intelligence (CS3600)", major: "Computer Science" },
    { course: "Design Capstone (CS3803)", major: "Computer Science" },
    { course: "Objects and Design (CS2340)", major: "Computer Science" },
    { course: "Statics & Solid Mechanics", major: "Mechanical Engineering" },
    { course: "Thermodynamics", major: "Mechanical Engineering" },
    { course: "Multivariable Calculus", major: "Foundation / Math" },
    { course: "Linear Algebra", major: "Foundation / Math" }
  ]
};

const certificates = {
  title: "Certifications",
  description: "Professional certifications bridging the gap between mechanical engineering and computer science.",
  items: [
    {
      name: "Autodesk Certified Professional: AutoCAD",
      issuer: "Autodesk",
      date: "2022",
    },
    {
      name: "Certified SolidWorks Professional (CSWP)",
      issuer: "Dassault Systèmes",
      date: "2023",
    },
    {
      name: "Certified ScrumMaster (CSM)",
      issuer: "Scrum Alliance",
      date: "2023",
    }
  ],
};


const skills = {
  title: "My Skills",
  description: "Here are some of the technologies I've worked with.",
  skillList: [
    // Programming Languages
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <SiCsharp />, name: "C#" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    // Frameworks & Libraries
    { icon: <SiPytorch />, name: "PyTorch" },
    { icon: <SiTensorflow />, name: "TensorFlow" },
    { icon: <SiScikitlearn />, name: "scikit-learn" },
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiApachekafka />, name: "Apache Kafka" },
    { icon: <SiDotnet />, name: ".NET" },
    { icon: <SiNumpy />, name: "NumPy" },
    { icon: <SiPandas />, name: "Pandas" },
    // Databases & Tools
    { icon: <SiMicrosoftsqlserver />, name: "SQL Server" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiRedis />, name: "Redis" },
    { icon: <SiGit />, name: "Git" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiJupyter />, name: "Jupyter" },
    { icon: <SiGithubactions />, name: "GitHub Actions" },
    // Cloud
    { icon: <SiAmazonaws />, name: "AWS" },
    { icon: <SiMicrosoftazure />, name: "Azure" },
    { icon: <SiGooglecloud />, name: "GCP" },
    // Web
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
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

const About = () => {
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

                      {/* Coursework Table */}
                      <h4 className="text-2xl font-bold mb-6 text-center xl:text-left mt-8">Relevant Coursework</h4>
                      <div className="bg-[#232329] rounded-xl overflow-hidden mb-6">
                        <table className="w-full text-left border-collapse">
                          <thead className="bg-[#1c1c22]">
                            <tr>
                              <th className="py-4 px-6 font-semibold text-white/80 border-b border-white/10">Course Name</th>
                              <th className="py-4 px-6 font-semibold text-white/80 border-b border-white/10 hidden md:table-cell">Relevant Major</th>
                            </tr>
                          </thead>
                          <tbody>
                            {education.coursework.map((course, index) => (
                              <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                <td className="py-3 px-6 text-white/70">{course.course}</td>
                                <td className="py-3 px-6 text-accent hidden md:table-cell">{course.major}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </ScrollArea>
                  </div>
                </motion.div>
              </TabsContent>

              {/* certificates */}
              <TabsContent value="certificates" className="w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{certificates.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {certificates.description}
                    </p>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {certificates.items.map((item, index) => {
                          return (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                            >
                              <span className="text-accent">{item.date}</span>
                              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                {item.name}
                              </h3>
                              <div className="flex items-center gap-3">
                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                <p className="text-white/60">{item.issuer}</p>
                              </div>
                            </motion.li>
                          );
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
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
                            href={item.fieldValue}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-accent transition-colors truncate w-full"
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

export default About;

"use client";

import React from "react";
import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import PageTransition from "@/components/PageTransition"; // Import your PageTransition component

const experienceData = [
  {
    company: "Connectogen",
    position: "Full Stack Developer",
    duration: "August 2024 – May 2025",
    location: "Atlanta, GA",
    description:
      "Led the redevelopment of Emory University's mentorship and collaboration platform, enhancing scalability, responsiveness, and user experience using modern web technologies.",
    responsibilities: [
      "Revamped core functionalities for user profiles, project management, and mentorship facilitation using React.js and Figma.",
      "Developed an AI-powered chatbot for personalized mentor and project recommendations, increasing recommendation accuracy by 40%.",
      "Integrated a Chatbot Framework and AI Recommendation Engine, paving the way for multi-institutional expansion.",
    ],
    logo: "/assets/Logo.png",
  },
  {
    company: "Dreamz Houz",
    position: "Data Analysis Intern",
    duration: "May 2022 – May 2024",
    location: "Cumming, GA",
    description:
      "Conducted real estate market trend analysis and enhanced property listings, leading to improved customer engagement and workflow efficiency.",
    responsibilities: [
      "Increased customer engagement by 50% through predictive analytics and targeted marketing strategies using Python, R, and SQL.",
      "Utilized Tableau, PowerBI, and Excel to visualize real estate trends, optimizing data-driven decision-making.",
      "Reinforced data collection processes and databases, achieving a 30% surge in workflow efficiency.",
    ],
    logo: "/assets/House.png",
  },
  {
    company: "American BoA",
    position: "Mechanical Engineering Intern",
    duration: "May 2021 – May 2022",
    location: "Sugar Hill, GA",
    description:
      "Assisted in the design, analysis, and optimization of mechanical components, improving efficiency and reliability in manufacturing processes.",
    responsibilities: [
      "Conducted thermal and structural analysis using SolidWorks and ANSYS to enhance product durability and performance.",
      "Collaborated with the engineering team to optimize manufacturing workflows, reducing production costs by 15%.",
      "Implemented CAD-based design modifications to improve component efficiency, leading to a 20% reduction in material waste.",
    ],
    logo: "/assets/Boa.png",
  },
];

const Experience = () => {
  return (
    <PageTransition>
      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">My Experience</h2>
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="bg-[#232329] p-8 rounded-xl mb-8"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} Logo`}
                  width={100}
                  height={100}
                  className="rounded-full mr-4 mb-4 md:mb-0"
                />
                <div>
                  <h3 className="text-2xl font-semibold">{exp.position}</h3>
                  <p className="text-accent">{exp.company}</p>
                  <div className="flex items-center mt-2">
                    <FaCalendarAlt className="mr-2 text-accent" />
                    <span className="text-white/60 mr-4">{exp.duration}</span>
                    <FaMapMarkerAlt className="mr-2 text-accent" />
                    <span className="text-white/60">{exp.location}</span>
                  </div>
                </div>
              </div>
              <p className="text-white/80 mb-4">{exp.description}</p>
              <ul className="list-disc list-inside text-white/80">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
};

export default Experience;

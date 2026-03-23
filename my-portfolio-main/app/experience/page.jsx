"use client";

import React from "react";
import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import PageTransition from "@/components/PageTransition"; // Import your PageTransition component

const experienceData = [
  {
    company: "Georgia Institute of Technology",
    position: "Head TA",
    duration: "August 2025 – Present",
    location: "Atlanta, GA",
    description:
      "Manage a team of 6 Teaching Assistants for CS3803 (Design Capstone) with 400 students, coordinating grading allocations and instructional support across three distinct sections.",
    responsibilities: [
      "Optimize instructional operations by developing standardized rubrics and feedback loops, ensuring high-quality, consistent assessment for complex technical assignments.",
      "Facilitate technical mastery for students through targeted office hours and creation of supplemental learning materials.",
    ],
    logo: "/assets/Logo.png",
  },
  {
    company: "Reconaut",
    position: "Co-Founder",
    duration: "May 2025 – Present",
    location: "Atlanta, GA",
    description:
      "Co-founded a startup developing AI-powered autonomous drone systems for building inspections, geospatial analytics, and insurance risk assessment, incubated through Georgia Tech's Create-X program.",
    responsibilities: [
      "Architected real-time data pipelines processing over 10,000 aerial images monthly, leveraging computer vision, ML, and anomaly detection to identify structural damage with 85% accuracy.",
      "Designed and deployed scalable full-stack prototypes using Python, React, and AWS/GCP microservices to validate technical feasibility, demonstrate product viability, and secure early-stage clients.",
    ],
    logo: "/assets/Logo.png",
  },
  {
    company: "Connectogen",
    position: "Software Engineering Intern",
    duration: "Aug 2024 – Aug 2025",
    location: "Atlanta, GA",
    description:
      "Built and shipped full-stack web features (React, Node.js/Express, REST APIs) that streamlined mentorship workflows for over 500 active users across Emory University.",
    responsibilities: [
      "Boosted backend performance via query optimization, Redis caching, and CI/CD automation (GitHub Actions, Docker), cutting API latency by 60% and deployment-related errors by 40%.",
      "Engineered an AI-driven recommendation engine using collaborative filtering to intelligently pair students with researchers, achieving 70% faster match turnaround.",
    ],
    logo: "/assets/Logo.png",
  },
  {
    company: "HomeSmart",
    position: "Data Analyst & Real Estate Agent",
    duration: "Jan 2023 – Present",
    location: "Atlanta, GA",
    description:
      "Built predictive pricing models with scikit-learn, pandas, and NumPy to forecast local housing trends, directly improving listing accuracy and client ROI.",
    responsibilities: [
      "Developed interactive BI dashboards in Power BI to surface market intelligence and guide data-driven investment and pricing decisions.",
      "Managed the full client lifecycle using CRM systems, MLS databases, and targeted digital marketing, improving lead conversion and long-term retention.",
      "Negotiated and closed transactions including complex contract and compliance documentation, consistently meeting client financial objectives.",
    ],
    logo: "/assets/House.png",
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
    company: "American BOA",
    position: "Mechanical Engineering Intern",
    duration: "May 2022 – Jan 2023",
    location: "Cumming, GA",
    description:
      "Designed and optimized flexible metal connector components in SolidWorks and AutoCAD, achieving a 12% reduction in material costs through geometry and tolerance refinements.",
    responsibilities: [
      "Collaborated with production engineers to re-engineer manufacturing and assembly workflows, measurably increasing line throughput and reducing bottlenecks.",
      "Applied machine learning techniques to historical production data to predict component failure rates, strengthening preventive maintenance planning and overall equipment reliability.",
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

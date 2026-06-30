// All content sourced from PORTFOLIO_CONTENT.md — do not invent or pad

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectDetails {
  problem?: string;
  solution?: string;
  reflections?: string;
  features?: ProjectFeature[];
}

export interface Project {
  id: string;
  title: string;
  category: "AI" | "Robotics" | "Web Development";
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  timeframe: string;
  achievement?: string;
  deepDive: string;
  image: string;
  featured?: boolean;
  details?: ProjectDetails;
}

export interface SkillGroup {
  group: string;
  items: string[];
}

export interface Experience {
  title: string;
  company: string;
  dates: string;
  location: string;
  description: string;
  bullets: string[];
  logo?: string;
}

export interface Education {
  degree: string;
  school: string;
  dates: string;
  description?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export const projects: Project[] = [
  {
    id: "10",
    title: "InvoiceOS – Local-First Contractor Productivity Platform",
    category: "Web Development",
    description:
      "An integrated, local-first platform for independent contractors to log work hours, write daily reports, track invoices, and generate PDF bills, keeping data on their machines with zero cloud dependency.",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "SQLite", "better-sqlite3", "PDFKit"],
    timeframe: "May 2026 – Present",
    achievement: "Local-First Desktop Solution",
    deepDive:
      "InvoiceOS was engineered to empower independent contractors with a secure, zero-config local desktop tool for managing their workflow. Built using a local-first architecture, the application relies on an Express backend powered by better-sqlite3 to run a lightning-fast relational database in a single local file. The frontend is responsive, built with React and Tailwind CSS, featuring a dashboard showing real-time monthly earnings, weekly hour logs, client-wise filters, and dynamic invoice generation powered by PDFKit. An integrated file manager allows attachments to be stored directly in a local uploads directory, ensuring complete user privacy and offline capabilities.",
    image: "/assets/projects/invoiceos.png",
    featured: true,
    details: {
      problem:
        "Contractors rely heavily on online billing systems that lock data in closed cloud databases, charge costly recurring subscriptions, and do not function offline.",
      solution:
        "InvoiceOS stores database records (`invoiceos.db`) and uploaded attachments locally, enabling zero cloud reliance while offering dashboards, hour logging, and PDFKit-driven invoice compilation.",
      reflections:
        "Designing local-first software required managing state synchronization between backend SQLite writes and frontend updates efficiently. Incorporating automatic migration utilities ensured that SQLite databases run instantly on any machine with zero configuration.",
      features: [
        {
          title: "Hour & Time Logging",
          description:
            "Log weekly hours and invoiceable items with inline editing, tags, rate specifications, and CSV exports.",
        },
        {
          title: "Invoice Compiler",
          description:
            "Compile uninvoiced logs into a single structured bill, auto-calculating totals and formatting to PDFKit.",
        },
        {
          title: "Local Database Persistence",
          description:
            "Autostart SQLite connection with schema migration, keeping database and documents completely local.",
        },
      ],
    },
  },
  {
    id: "09",
    title: "Sensi Career Intelligence",
    category: "AI",
    description:
      "AI-powered career intelligence platform that deep-parses resumes and academic transcripts to construct a multi-dimensional competency profile and measure fit against real job opportunities.",
    tech: ["React 18", "Vite 6", "Tailwind CSS", "Google Gemini", "OpenAI GPT-4", "Chart.js"],
    liveUrl: "https://www.arynbht.tech/projects/09",
    githubUrl: "https://github.com/Adonalsiun/Sensi",
    timeframe: "March 2026",
    achievement: "Vibe ATL @ Georgia Tech",
    deepDive:
      "Built in under 12 hours, Sensi was an exercise in extreme prioritization. The core challenge was designing a 'radar-first' layout where a 6-axis chart remains the hero of the UI. I focused on building a 'progressive disclosure' model where advanced features - like AI-generated cover letters and specific resume edit recommendations - only unlock once a high fit score (65+) is achieved, ensuring users focus on roles where they have genuine alignment.",
    image: "/assets/projects/sensi.png",
    featured: true,
    details: {
      problem:
        "Job seekers often lack an objective way to measure how their credentials align with complex role requirements. Existing tools are fragmented - resume builders don't provide scoring, and job boards lack deep semantic analysis. For students, rich academic histories are often ignored by keyword-based filters, leaving their true potential invisible.",
      solution:
        "Sensi leverages Large Language Models (LLMs) to perform structured skill extraction from both resumes and academic transcripts. It constructs a multi-dimensional competency profile across Technical Skills, Domain Knowledge, Soft Skills, and Academic Rigor. This profile is then visually cross-referenced against job descriptions in real-time.",
      reflections:
        "Built in under 12 hours, Sensi was an exercise in extreme prioritization. The core challenge was designing a 'radar-first' layout where a 6-axis chart remains the hero of the UI. I focused on building a 'progressive disclosure' model where advanced features - like AI-generated cover letters and specific resume edit recommendations - only unlock once a high fit score (65+) is achieved, ensuring users focus on roles where they have genuine alignment.",
      features: [
        {
          title: "AI Skill Extraction",
          description:
            "Deep parsing of resumes and transcripts into structured competency profiles using Gemini and OpenAI.",
        },
        {
          title: "Dynamic Radar Graph",
          description:
            "A visual centerpiece using Chart.js that overlays user profiles against job requirements for instant alignment feedback.",
        },
        {
          title: "Chrome Extension",
          description:
            "Real-time fit scoring directly over LinkedIn, Indeed, and Handshake job postings using Chrome Storage and content scripts.",
        },
        {
          title: "Progressive Toolkit",
          description:
            "Automatic generation of personalized cover letters and resume-edit suggestions triggered by high fit scores.",
        },
      ],
    },
  },
  {
    id: "11",
    title: "FloorScan ML – Robotic Floor Mapping & Cleanliness AI",
    category: "Robotics",
    description:
      "Developed a machine learning system for a small, handheld mapping robot that scans floor textures, identifies debris hotspots via computer vision, and outputs an interactive cleanliness heatmap.",
    tech: ["Python", "PyTorch", "OpenCV", "ROS", "SLAM", "CNN", "Raspberry Pi"],
    timeframe: "Feb 2026 – Apr 2026",
    achievement: "Robotics & Computer Vision Project",
    deepDive:
      "FloorScan ML bridges computer vision and embedded robotics to digitize spatial cleanliness tracking. Powered by a Raspberry Pi, the system collects video feeds from a multi-camera array and processes them through a custom PyTorch convolutional neural network (CNN) trained on semantic segmentation to identify dirt, dust, and debris. Simultaneously, it uses SLAM (Simultaneous Localization and Mapping) to track the robot's relative grid coordinates. These spatial and vision data points are dynamically combined in a ROS-managed stream to compile a detailed 2D heatmap showing cleanliness hotspots, marking high-traffic dirt concentrations to optimize facility cleaning routes.",
    image: "/assets/projects/dirtspotter.png",
  },
  {
    id: "07",
    title: "Auditory Feedback System for Visually Impaired Programmers",
    category: "AI",
    description:
      "Real-time auditory feedback system using sonification to help visually impaired individuals learn to code - mapping syntax structures to distinct sound cues via the Web Audio API.",
    tech: ["JavaScript", "HTML/CSS", "Web Audio API", "Assistive Technology"],
    liveUrl: "https://audio-project-seven.vercel.app/",
    githubUrl: "https://github.com/Adonalsiun/Audio-Project/",
    timeframe: "April 2025 – September 2025",
    achievement: "Inclusive Computing Initiative",
    deepDive:
      "Accessibility in software development tooling is often an afterthought. This project pioneers a novel approach to coding without vision by mapping abstract programmatic structures to intuitive soundscapes (sonification). Utilizing the Web Audio API, the system parses code in real-time and generates specific audio signatures. For instance, deeper indentation levels correspond to higher pitches, syntax errors trigger distinct dissonant chords, and rapid loop iterations produce rhythmic percussive patterns. This non-visual representation drastically reduces the cognitive load associated with relying solely on text-to-speech screen readers, empowering visually impaired programmers to 'hear' the shape, structure, and execution flow of their code naturally.",
    image: "/assets/projects/sound.png",
    featured: true,
  },
  {
    id: "08",
    title: "Personal Portfolio Website",
    category: "Web Development",
    description:
      "Full-stack portfolio showcasing AI, robotics, web development, and embedded systems projects. Designed with accessibility, responsiveness, and performance in mind.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    liveUrl: "https://www.arynbht.tech/",
    githubUrl: "https://github.com/Adonalsiun/ABPortfolio",
    timeframe: "March 2025 – Present",
    achievement: "Personal Branding Initiative",
    deepDive:
      "This portfolio is a dynamic reflection of my journey as a computer science student and developer. Built meticulously with Next.js and React, it prioritizes top-tier performance, SEO optimization, and an exceptionally smooth user experience enriched by Framer Motion animations. The design system leverages Tailwind CSS to create a modern, dark-themed aesthetic that feels both premium and uniquely personal. By centralizing my varied work - spanning from embedded C development to deep learning models - into a single, highly interactive application, this platform serves as both a resume and a technical sandbox where I continually test and deploy new web technologies.",
    image: "/portfolio-image.png",
  },
  {
    id: "01",
    title: "Mir.AI – AI Powered MRI Enhancement",
    category: "AI",
    description:
      "Developed an AI model leveraging Generative Adversarial Networks to enhance 1.5T MRI scans to 3T quality, improving accessibility while reducing costs. Engineered a fast image processing pipeline with FastAPI, achieving up to 50 epochs per hour.",
    tech: ["Python", "TensorFlow", "PyTorch Lightning", "GANs", "FastAPI", "React", "CycleGAN"],
    liveUrl: "https://www.youtube.com/watch?v=W0isckv7zg4",
    githubUrl: "https://github.com/venkat1596/Hacklytics_Hackathon",
    timeframe: "Jan 2025 – May 2025",
    achievement: "Hackalytics 2025 Healthcare Track Winner",
    deepDive:
      "This project addresses the critical need for high-quality medical imaging in under-resourced areas. By utilizing advanced Generative Adversarial Networks (GANs), particularly Cycle-Free CycleGAN architectures with invertible generators, we successfully upscaled and enhanced 1.5T MRI scans to resemble the quality of 3T MRI machines. The system effectively reduces the need for expensive hardware upgrades while providing doctors with clearer, more precise diagnostic images. Our robust pipeline built on FastAPI ensures that the processing is not only accurate but also incredibly efficient, processing extensive datasets and reaching 50 epochs in roughly an hour. This efficiency enables rapid iteration and deployment, ultimately aiming to democratize access to top-tier healthcare diagnostics across the globe.",
    image: "/assets/projects/MRI.png",
    featured: true,
  },
  {
    id: "02",
    title: "GTXR Kalman Filter Implementation",
    category: "Robotics",
    description:
      "Implemented multivariate Kalman Filter in C for state estimation in GTXR flight computer, integrating a complementary filter for acceleration and angular velocity, resulting in decreased estimation errors.",
    tech: ["Java", "C", "MATLAB"],
    timeframe: "Aug 2024 – Dec 2024",
    achievement: "Applications of Robotics",
    deepDive:
      "In aerospace and robotics, precise estimation of orientation and position is paramount. For the GTXR flight computer, I developed a highly optimized multivariate Kalman Filter in C. This implementation accurately fuses sensor data to provide a robust estimate of the vehicle's state, even in the presence of noise and sensor inaccuracies. To complement the core C implementation and deepen my own mathematical understanding, I authored a comprehensive matrix operations library in Java. The project rigorously handles data in multiple spatial representation formats, including both classic Euler angles (which are prone to gimbal lock) and quaternions (which provide stable, continuous rotational calculations). This dual-language approach allowed for rigorous testing and simulation in MATLAB and Java before final deployment in the embedded C environment.",
    image: "/assets/projects/GTXR.png",
  },
  {
    id: "03",
    title: "Studio Camera Restoration",
    category: "Robotics",
    description:
      "Diagnosed and repaired PCB-level hardware issues on a Fujifilm XS-10 camera. Developed custom Embedded C firmware with OpenCV-based computer vision, achieving a 20% enhancement in tracking accuracy.",
    tech: ["C++", "Python", "OpenCV", "SolidWorks", "Embedded C", "RTOS"],
    timeframe: "Aug 2024 – Dec 2024",
    achievement: "Applications of Computer Engineering",
    deepDive:
      "Taking on the challenge of restoring a non-functional Fujifilm XS-10 studio camera involved diving deep into both hardware troubleshooting and software engineering. I started by meticulously diagnosing PCB-level electrical faults, eventually repairing the physical connections needed to bring the core device back online. From there, I transitioned to software, creating a custom Embedded C firmware built upon a real-time operating system (RTOS) to manage the camera's demanding timing constraints. To elevate the camera beyond its original capabilities, I integrated computer vision logic using OpenCV in C++ and Python. This allowed the camera to autonomously track subjects and adjust focus dynamically, leading to a documented 20% improvement in tracking accuracy during complex studio shoots.",
    image: "/assets/projects/Camera.png",
  },
  {
    id: "05",
    title: "Atlanta FoodQuest",
    category: "Web Development",
    description:
      "Restaurant discovery platform for Atlanta featuring neighborhood exploration, reviews, and filtering by distance, ratings, and cuisine type. Built for CS2340 at Georgia Tech.",
    tech: ["Python", "Django", "JavaScript", "HTML/CSS", "Google Maps API"],
    liveUrl: "https://atlantafoodfinder-a281298e3c3f.herokuapp.com/aff/",
    githubUrl: "https://github.com/stephenl99/AtlantaFoodFinder",
    timeframe: "Summer 2024",
    achievement: "CS2340 Objects & Design",
    deepDive:
      "Built as a comprehensive project for the CS2340 Objects and Design course at Georgia Tech, Atlanta FoodQuest goes beyond simple restaurant directories. Users can create accounts, bookmark their favorite dining spots, and leave detailed reviews. The backend is robustly powered by Django, which efficiently handles user authentication, session management, and the relational database modeling for restaurants and reviews. The frontend utilizes vanilla JavaScript tightly integrated with the Google Maps API, allowing users to visually explore neighborhoods, filter spots by dynamic criteria (like walkability or specific highly-rated cuisines), and instantly calculate distances from their current location.",
    image: "/assets/projects/food.png",
  },
  {
    id: "06",
    title: "Pac-Man AI",
    category: "AI",
    description:
      "Developed intelligent Pac-Man agents using reinforcement learning and A* algorithms for optimal pathfinding and ghost avoidance across multiple AI strategies.",
    tech: ["Python", "Reinforcement Learning", "A* Algorithm", "NumPy"],
    githubUrl: "https://github.com/Adonalsiun/CS3600-Homework",
    timeframe: "Spring 2024",
    achievement: "CS3600 AI Course Project",
    deepDive:
      "This project explored the practical applications of foundational artificial intelligence concepts by building autonomous agents capable of playing Pac-Man at a superhuman level. Starting with classic search algorithms like Depth-First Search (DFS) and Breadth-First Search (BFS), I progressively implemented more sophisticated techniques including A* search with custom heuristics to optimize pathfinding toward food while safely navigating complex mazes. The pinnacle of the project involved designing a Reinforcement Learning agent based on Q-learning. By assigning targeted rewards and penalties, the agent autonomously learned complex strategies - such as safely trailing ghosts or clustering pellets - demonstrating the power of machine learning in dynamic, adverse environments.",
    image: "/assets/projects/pacman.png",
  },
  {
    id: "04",
    title: "Connectogen – Research Collaboration Platform",
    category: "Web Development",
    description:
      "Full-stack platform enhancing collaboration among healthcare and biomedical researchers at Emory University, Georgia Tech, and Morehouse - featuring real-time notifications, project management, and mentorship activities.",
    tech: ["React", "Next.js", "Node.js", "Express", "MongoDB", "WebSockets", "Turborepo"],
    timeframe: "Aug 2023 – Aug 2024",
    achievement: "Supported by Emory University SOM",
    deepDive:
      "Connectogen was born from a clear need to break down silos between major research institutions in the Atlanta area. Guided by leadership at the Emory University School of Medicine, our team architected a full-stack web platform using Next.js and Node.js. The application serves as a central hub where biomedical researchers, students, and faculty can discover synergistic projects, manage ongoing research tasks, and foster meaningful mentorships. We heavily leveraged WebSockets to implement real-time messaging and notifications, ensuring that critical updates on time-sensitive research aren't missed. The entire monorepo is managed using Turborepo, allowing our distributed engineering team to iterate quickly without compromising build performance or code quality.",
    image: "/assets/projects/connect.png",
    featured: true,
  },
];

export const skills: SkillGroup[] = [
  {
    group: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "C++", "C", "Java", "C#", "SQL", "R"],
  },
  {
    group: "AI / ML",
    items: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "FastAPI",
      "NumPy",
      "Pandas",
      "OpenCV",
      "Reinforcement Learning",
      "SLAM",
      "CNNs",
      "Semantic Segmentation",
      "Anomaly Detection",
    ],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion", "Web Audio API", "Power BI"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express.js", "Django", "better-sqlite3", "PDFKit", "WebSockets", "Turborepo", "Apache Kafka", ".NET"],
  },
  {
    group: "Databases",
    items: ["SQLite", "PostgreSQL", "MongoDB", "Redis", "SQL Server"],
  },
  {
    group: "Cloud & DevOps",
    items: ["AWS", "Azure", "GCP", "Docker", "GitHub Actions", "Git", "DevSecOps", "CI/CD", "Vercel"],
  },
  {
    group: "Embedded & Robotics",
    items: ["Embedded C", "RTOS", "ROS", "Kalman Filters", "Sensor Fusion", "Raspberry Pi", "MATLAB", "SolidWorks", "AutoCAD"],
  },
];

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Paydax",
    dates: "Apr 2026 – Present",
    location: "Remote",
    description:
      "Engineer AI-integrated features across the full stack (frontend, backend, and embedded systems) shipping software across web and IoT surfaces in an agile, fast-paced environment.",
    bullets: [
      "Apply DevSecOps and AI-native development practices across system architecture and API design, embedding security, automation, and intelligent tooling from prototype to production.",
    ],
    logo: "/Paydax Logo.png",
  },
  {
    title: "AI Engineer Fellow",
    company: "Handshake AI Fellowship",
    dates: "Apr 2026 – Present",
    location: "Remote",
    description:
      "Contribute to a multimodal AI training platform ingesting audio, visual, and text data to advance model performance across diverse real-world input formats and deployment contexts.",
    bullets: [
      "Drive data pipeline quality through structured labeling, model evaluation, and QA workflows, directly shaping the reliability of production-grade AI systems at scale.",
    ],
    logo: "/Handshake Logo.png",
  },
  {
    title: "Head Teaching Assistant",
    company: "Georgia Institute of Technology",
    dates: "August 2025 – May 2026",
    location: "Atlanta, GA",
    description:
      "Manage a team of 6 Teaching Assistants for CS3803 (Design Capstone) with 400 students, coordinating grading allocations and instructional support across three distinct sections.",
    bullets: [
      "Optimize instructional operations by developing standardized rubrics and feedback loops, ensuring high-quality, consistent assessment for complex technical assignments.",
      "Facilitate technical mastery for students through targeted office hours and creation of supplemental learning materials.",
    ],
    logo: "/Georgia Tech Logo.png",
  },
  {
    title: "Full Stack Software Engineer (Co-Founder)",
    company: "Reconaut",
    dates: "May 2025 – Present",
    location: "Atlanta, GA",
    description:
      "Co-founded a startup developing AI-powered autonomous drone systems for building inspections, geospatial analytics, and insurance risk assessment, incubated through Georgia Tech's Create-X program.",
    bullets: [
      "Architected real-time data pipelines processing over 10,000 aerial images monthly, leveraging computer vision, ML, and anomaly detection to identify structural damage with 85% accuracy.",
      "Designed and deployed scalable full-stack prototypes using Python, React, and AWS/GCP microservices to validate technical feasibility and secure early-stage clients.",
    ],
    logo: "/assets/Reconaut Logo.png",
  },
  {
    title: "Data Analyst & Real Estate Agent",
    company: "HomeSmart",
    dates: "May 2025 – Present",
    location: "Atlanta, GA",
    description:
      "Built predictive pricing models with scikit-learn, pandas, and NumPy to forecast local housing trends, directly improving listing accuracy and client ROI.",
    bullets: [
      "Developed interactive BI dashboards in Power BI to surface market intelligence and guide data-driven investment and pricing decisions.",
      "Managed the full client lifecycle using CRM systems, MLS databases, and targeted digital marketing, improving lead conversion and long-term retention.",
    ],
    logo: "/Homesmart Logo.png",
  },
  {
    title: "Software Engineering Intern",
    company: "Connectogen",
    dates: "Aug 2024 – Aug 2025",
    location: "Atlanta, GA",
    description:
      "Built and shipped full-stack web features (React, Node.js/Express, REST APIs) that streamlined mentorship workflows for over 500 active users across Emory University.",
    bullets: [
      "Boosted backend performance via query optimization, Redis caching, and CI/CD automation (GitHub Actions, Docker), cutting API latency by 60% and deployment-related errors by 40%.",
      "Engineered an AI-driven recommendation engine using collaborative filtering to intelligently pair students with researchers, achieving 70% faster match turnaround.",
    ],
    logo: "/Connectogen Logo.png",
  },
  {
    title: "Research Assistant",
    company: "Georgia Institute of Technology",
    dates: "Jan 2024 – July 2024",
    location: "Atlanta, GA",
    description:
      "Implemented multivariate Kalman Filter in C for state estimation in GTXR flight computer, integrating a complementary filter for acceleration and angular velocity.",
    bullets: [
      "Created Java matrix operations library to enhance understanding of Kalman Filter mathematics, with data handling in both Euler angle and quaternion formats.",
      "Validated sensor fusion algorithms through rigorous simulation in MATLAB and Java prior to final deployment in the embedded C environment.",
    ],
    logo: "/Georgia Tech Logo.png",
  },
  {
    title: "Data Analysis Intern",
    company: "Dreamz Houz",
    dates: "May 2022 – May 2024",
    location: "Cumming, GA",
    description:
      "Conducted real estate market trend analysis and enhanced property listings, leading to improved customer engagement and workflow efficiency.",
    bullets: [
      "Increased customer engagement by 50% through predictive analytics and targeted marketing strategies using Python, R, and SQL.",
      "Utilized Tableau, PowerBI, and Excel to visualize real estate trends, optimizing data-driven decision-making.",
      "Reinforced data collection processes and databases, achieving a 30% surge in workflow efficiency.",
    ],
    logo: "/DreamzHouz Logo.png",
  },
  {
    title: "Mechanical Engineering Intern",
    company: "American BOA",
    dates: "May 2022 – Jan 2023",
    location: "Cumming, GA",
    description:
      "Designed and optimized flexible metal connector components in SolidWorks and AutoCAD, achieving a 12% reduction in material costs through geometry and tolerance refinements.",
    bullets: [
      "Collaborated with production engineers to re-engineer manufacturing and assembly workflows, measurably increasing line throughput.",
      "Applied machine learning techniques to historical production data to predict component failure rates, strengthening preventive maintenance planning.",
    ],
    logo: "/AmericanBOA Logo.png",
  },
];

export const education: Education[] = [
  {
    degree: "B.S. in Computer Science",
    school: "Georgia Institute of Technology",
    dates: "2023 – 2026",
    description:
      "Relevant coursework: Data Structures & Algorithms, Object-Oriented Programming, Artificial Intelligence (CS3600), Design Capstone (CS3803), Objects and Design (CS2340), Linear Algebra, Multivariable Calculus",
  },
  {
    degree: "Mechanical Engineering",
    school: "University of Georgia",
    dates: "2022 – 2023",
    description:
      "Relevant coursework: Statics, Engineering Graphics & CAD (SolidWorks/AutoCAD), Introductory Robotics, Calculus I & II, General Physics for Engineers",
  },
];

export const certifications: Certification[] = [
  { name: "Autodesk Certified Professional: AutoCAD", issuer: "Autodesk", date: "2022" },
  { name: "Certified SolidWorks Professional (CSWP)", issuer: "Dassault Systèmes", date: "2023" },
  { name: "Certified ScrumMaster (CSM)", issuer: "Scrum Alliance", date: "2023" },
];

export const stats = [
  { value: "150+", label: "LeetCode Problems" },
  { value: "5+", label: "Hackathon Awards" },
  { value: "1000+", label: "CodeChef Rating" },
  { value: "500+", label: "GitHub Contributions" },
];

export const socials = {
  github: "https://github.com/Adonalsiun",
  linkedin: "https://www.linkedin.com/in/arynbht/",
  twitter: "https://x.com/adonalsiun",
  devpost: "https://devpost.com/arynbht",
  email: "aryan.bhatia@gatech.edu",
};

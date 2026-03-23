export const projects = [
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
    github: "https://github.com/venkat1596/Hacklytics_Hackathon",
    details: "This project addresses the critical need for high-quality medical imaging in under-resourced areas. By utilizing advanced Generative Adversarial Networks (GANs), particularly Cycle-Free CycleGAN architectures with invertible generators, we successfully upscaled and enhanced 1.5T MRI scans to resemble the quality of 3T MRI machines. The system effectively reduces the need for expensive hardware upgrades while providing doctors with clearer, more precise diagnostic images. Our robust pipeline built on FastAPI ensures that the processing is not only accurate but also incredibly efficient, processing extensive datasets and reaching 50 epochs in roughly an hour. This efficiency enables rapid iteration and deployment, ultimately aiming to democratize access to top-tier healthcare diagnostics across the globe."
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
    github: "#",
    details: "In aerospace and robotics, precise estimation of orientation and position is paramount. For the GTXR flight computer, I developed a highly optimized multivariate Kalman Filter in C. This implementation accurately fuses sensor data to provide a robust estimate of the vehicle's state, even in the presence of noise and sensor inaccuracies. To complement the core C implementation and deepen my own mathematical understanding, I authored a comprehensive matrix operations library in Java. The project rigorously handles data in multiple spatial representation formats, including both classic Euler angles (which are prone to gimbal lock) and quaternions (which provide stable, continuous rotational calculations). This dual-language approach allowed for rigorous testing and simulation in MATLAB and Java before final deployment in the embedded C environment."
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
    github: "#",
    details: "Taking on the challenge of restoring a non-functional Fujifilm XS-10 studio camera involved diving deep into both hardware troubleshooting and software engineering. I started by meticulously diagnosing PCB-level electrical faults, eventually repairing the physical connections needed to bring the core device back online. From there, I transitioned to software, creating a custom Embedded C firmware built upon a real-time operating system (RTOS) to manage the camera's demanding timing constraints. To elevate the camera beyond its original capabilities, I integrated computer vision logic using OpenCV in C++ and Python. This allowed the camera to autonomously track subjects and adjust focus dynamically, leading to a documented 20% improvement in tracking accuracy during complex studio shoots."
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
    github: "#",
    details: "Connectogen was born from a clear need to break down silos between major research institutions in the Atlanta area. Guided by leadership at the Emory University School of Medicine, our team architected a full-stack web platform using Next.js and Node.js. The application serves as a central hub where biomedical researchers, students, and faculty can discover synergistic projects, manage ongoing research tasks, and foster meaningful mentorships. We heavily leveraged WebSockets to implement real-time messaging and notifications, ensuring that critical updates on time-sensitive research aren't missed. The entire monorepo is managed using Turborepo, allowing our distributed engineering team to iterate quickly without compromising build performance or code quality."
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
    github: "https://github.com/stephenl99/AtlantaFoodFinder",
    details: "Built as a comprehensive project for the CS2340 Objects and Design course at Georgia Tech, Atlanta FoodQuest goes beyond simple restaurant directories. Users can create accounts, bookmark their favorite dining spots, and leave detailed reviews. The backend is robustly powered by Django, which efficiently handles user authentication, session management, and the relational database modeling for restaurants and reviews. The frontend utilizes vanilla JavaScript tightly integrated with the Google Maps API, allowing users to visually explore neighborhoods, filter spots by dynamic criteria (like walkability or specific highly-rated cuisines), and instantly calculate distances from their current location. Deployed on Heroku, it serves as a practical, scalable application demonstrating solid MVC architectural principles."
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
    github: "https://github.com/Adonalsiun/CS3600-Homework",
    details: "This project explored the practical applications of foundational artificial intelligence concepts by building autonomous agents capable of playing Pac-Man at a superhuman level. Starting with classic search algorithms like Depth-First Search (DFS) and Breadth-First Search (BFS), I progressively implemented more sophisticated techniques including A* search with custom heuristics to optimize pathfinding toward food while safely navigating complex mazes. The pinnacle of the project involved designing a Reinforcement Learning agent based on Q-learning. By assigning targeted rewards and penalties, the agent autonomously learned complex strategies—such as safely trailing ghosts or clustering pellets—demonstrating the power of machine learning in dynamic, adverse environments."
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
    github: "https://github.com/Adonalsiun/Audio-Project/",
    details: "Accessibility in software development tooling is often an afterthought. This project pioneers a novel approach to coding without vision by mapping abstract programmatic structures to intuitive soundscapes (sonification). Utilizing the Web Audio API, the system parses code in real-time and generates specific audio signatures. For instance, deeper indentation levels correspond to higher pitches, syntax errors trigger distinct dissonant chords, and rapid loop iterations produce rhythmic percussive patterns. This non-visual representation drastically reduces the cognitive load associated with relying solely on text-to-speech screen readers, empowering visually impaired programmers to 'hear' the shape, structure, and execution flow of their code naturally."
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
    github: "https://github.com/Adonalsiun/ABPortfolio",
    details: "This portfolio is a dynamic reflection of my journey as a computer science student and developer. Built meticulously with Next.js and React, it prioritizes top-tier performance, SEO optimization, and an exceptionally smooth user experience enriched by Framer Motion animations. The design system leverages Tailwind CSS to create a modern, dark-themed aesthetic that feels both premium and uniquely personal. By centralizing my varied work—spanning from embedded C development to deep learning models—into a single, highly interactive application, this platform serves as both a resume and a technical sandbox where I continually test and deploy new web technologies."
  }
];

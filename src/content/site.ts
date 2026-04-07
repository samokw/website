import type { SiteContent } from "./types";

export const site: SiteContent = {
  meta: {
    title: "sam's portfolio",
    description:
      "Software Engineering student at the University of Guelph. Statistics and cloud infrastructure.",
  },
  name: "samuel okwusiuno",
  hero: {
    greeting: "hi, i'm samuel",
    lines: [
      "I specialize in Statistics and have a strong interest in leveraging cloud infrastructure to build innovative and efficient applications.",
    ],
    portrait: {
      src: "/IMG_7316.jpeg",
      alt: "Samuel Okwusiuno",
      width: 200,
      height: 200,
    },
  },
  currently: [
    {
      lead: "Software Engineering student at",
      org: "University of Guelph",
      orgUrl: "https://www.uoguelph.ca/",
      tail: ", graduating April 2026.",
    },
  ],
  previously: [],
  projects: [
    {
      name: "FixtureShere",
      url: "https://github.com/samokw/Premier-League-Dashboard",
      summary:
        "Full-stack stats and visualizations for 20,000+ fixtures on AWS.",
      technology:
        "Spring Boot, ReactJS, SQL, Supabase, AWS EC2, S3, CloudFront, Route 53",
      image: "/prem.png",
      description: [
        "Engineered a full-stack solution using Spring Boot and ReactJS, enabling users to efficiently access and analyze statistics for 20,000+ fixtures through custom API endpoints and interactive data visualizations.",
        "Optimized content delivery speed by 20% through strategic deployment on AWS EC2 (backend) and S3 (frontend), while enhancing security with CloudFront caching and HTTPS integration.",
        "Developed a responsive, data-driven dashboard with React and Material UI, decreasing user search time for match data by 80%",
      ],
    },
    {
      name: "Alphanetic",
      url: "https://github.com/samokw/typeracer",
      summary: "Phonetic alphabet learning app from a competitive hackathon.",
      technology: "Python, ReactJS, Material UI",
      image: "/alpha.png",
      description: [
        "Developed a user-friendly educational app for phonetic alphabet translation, featuring real-time processing and personalized learning paths, securing Top 5 placement in the education section among 20+ teams in that category in a competitive hackathon.",
        "Engineered a highly responsive frontend using ReactJS and Material UI, resulting in a 0.5-second decrease in average task completion time and positive user feedback for intuitive design.",
      ],
    },
    {
      name: "Chess Web Application",
      url: "https://github.com/samokw/chess",
      summary: "Multiplayer chess variant with C core and Python server.",
      technology:
        "Python, C (SWIG), HTTPServer, JavaScript (Chessboard.js), Bootstrap, SQLite",
      image: "/chess.png",
      description: [
        "Developed a multiplayer chess variant application combining C-based game logic wrapped with SWIG and a Python HTTPServer backend, enabling real-time gameplay and player matchmaking.",
        "Engineered an interactive frontend using Chessboard.js and Bootstrap, delivering real-time board updates, move replays, and intuitive game analysis.",
        "Implemented robust C functions for move validation, rule enforcement, and time tracking, ensuring precise gameplay and optimal performance.",
        "Integrated AJAX polling and SQLite to achieve seamless data synchronization, reducing latency and enhancing multiplayer experience.",
      ],
    },
    {
      name: "Coronavirus Statistics Visualization",
      url: "https://github.com/samokw/PROJECTL02-CIS2250-2/tree/main/PROJECTL02-CIS2250-2/Prison",
      summary: "Cleaned and visualized Canadian COVID-19 and prison data.",
      technology: "Python, pandas, Matplotlib, Seaborn",
      image: "/covid.png",
      description: [
        "Enhanced data reliability by cleaning and refactoring over 3,000 lines of COVID-19 data from Statistics Canada, reducing inconsistencies by 95% and enabling more accurate trend analysis.",
        "Analyzed time-related and demographic trends, revealing a correlation between winter months and increased COVID-19 cases, particularly in areas with high prison populations.",
        "Adopted Agile methodologies to enhance project efficiency, resulting in 10% faster data updates and consistent delivery of Matplotlib and Seaborn-based coronavirus trend visualizations.",
      ],
    },
  ],
  writing: [],
  workExperience: [
    {
      title: "Coding Instructor",
      company: "Zebra Robotics",
      location: "Brampton, ON",
      date: "June 2023 – Present",
      responsibilities: [
        "Taught students from grades 1–12 fundamental concepts of engineering, computer science, coding, and robotics, fostering their interest in STEM fields.",
        "Developed interactive coding challenges and age-appropriate analogies, enhancing students’ understanding of Object-Oriented Programming and memory allocation.",
        "Delivered structured courses in programming languages such as C, Python, Java, JavaScript, and HTML/CSS.",
      ],
      image: "/zebra.webp",
    },
  ],
  socials: [
    { name: "email", href: "mailto:okwusiunosamuel@gmail.com" },
    { name: "github", href: "https://github.com/samokw" },
  ],
  nav: [
    { href: "/blog", name: "blog" },
    { href: "/experience", name: "experience" },
    { href: "/Samuel_Software_Resume.pdf", name: "resume", external: true },
  ],
};

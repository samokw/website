import type { SiteContent } from "./types";

export const site: SiteContent = {
  meta: {
    title: "sam's portfolio",
    description:
      "Recent Software Engineering graduate from the University of Guelph. Statistics and cloud infrastructure.",
  },
  name: "samuel okwusiuno",
  hero: {
    greeting: "hi, i'm samuel",
    lines: [
      "i’m interested in building innovative and efficient applications, with a strong interest in production engineering and cloud infrastructure. i enjoy thinking about how to make systems reliable, scalable, and practical. i’m also a big chelsea fc fan, and i’m always open to working with others on exciting projects.",
    ],
    portrait: {
      src: "/IMG_7316.jpeg",
      alt: "Sunset over water",
      width: 200,
      height: 200,
    },
  },
  currently: [
    {
      lead: "recent software engineering graduate from",
      org: "University of Guelph",
      orgUrl: "https://www.uoguelph.ca/",
      tail: ".",
    },
  ],
  previously: [],
  projects: [
    {
      name: "APEX – Accessibility Scanner with XRPL Escrow",
      url: "https://github.com/samokw/apex",
      summary:
        "Full-stack WCAG/AODA accessibility scanner with code-level fix suggestions and XRPL escrow payments.",
      technology:
        "Next.js, Prisma, SQLite, Playwright, axe-core, Docker, XRPL, Claude API",
      description: [
        "Built a full-stack accessibility scanning platform that automates 36+ WCAG and AODA compliance checks using Playwright and axe-core, with a scoring system to rate site accessibility.",
        "Containerized the scanning service with Docker and built a structured Claude API prompt pipeline to parse axe-core violation JSON, classify WCAG failure types, and return actionable code-level fixes ranked by severity.",
        "Added an XRPL escrow flow for scan payments, with automatic payout on success and refunds on timeout.",
        "Won 2nd place in the Ripple XRP Challenge and 3rd place in the BFN Venture Challenge at NSBE Hacks 2026, earning $1.5K+ in prizes.",
      ],
    },
    {
      name: "Student Web Project Gallery",
      url: "https://github.com/SammyMcNab/ClassFolio",
      summary:
        "Serverless platform where students upload and publish web projects to public links.",
      technology:
        "AWS Lambda, API Gateway, DynamoDB, S3, Python, React",
      description: [
        "Architected and deployed a serverless platform on AWS where students can publish web projects to unique S3 static-hosted URLs using presigned uploads and ZIP extraction.",
        "Built an event-driven backend with 5 Lambda functions for authentication, project CRUD, deployment pipelines, and lightweight analytics, using DynamoDB and S3 for scalable low-cost infrastructure.",
      ],
    },
    {
      name: "Housing Index",
      url: "https://metropolitan.foundre.app",
      summary:
        "Full-stack analytics platform for Toronto and Hamilton housing and labour market data.",
      technology: "Spring Boot, React, TypeScript, Python, MariaDB, Docker",
      description: [
        "Built a full-stack analytics platform with Spring Boot, React, TypeScript, and MariaDB to aggregate, query, and visualize housing and labour market datasets for Toronto and Hamilton.",
        "Developed Python ETL pipelines to collect, transform, and load Statistics Canada housing starts, labour force microdata, and annual labour force rates into a relational database.",
        "Eliminated 225,977 redundant SQL round-trips by replacing per-row inserts with batched bulk writes, reducing ETL load time from 8+ minutes to about 2 seconds for 113,001 labour records.",
        "Deployed to a VPS using Docker Compose, GitHub Actions, and Caddy, with Prometheus, Grafana, alerting, and external uptime monitoring.",
      ],
    },
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
      title: "Undergraduate Researcher (Course Credit)",
      company: "University of Guelph, Student Mental Health Study",
      location: "Guelph, ON",
      date: "Jan 2025 – Apr 2025",
      responsibilities: [
        "Co-authored a peer-reviewed conference paper on burnout among Canadian undergraduate students using latent profile analysis.",
        "Analyzed data from over 1,000 survey responses and helped develop 3 recommendations to improve mental health support in computer science programs.",
        "Presented findings to 4 faculty members and contributed to ongoing research on undergraduate burnout and student wellbeing.",
      ],
    },
    {
      title: "Coding Instructor",
      company: "Zebra Robotics",
      location: "Brampton, ON",
      date: "June 2023 – Present",
      responsibilities: [
        "Designed and delivered hands-on programming curriculum in C, Python, Java, JavaScript, and HTML/CSS for 30 students across camps, focusing on applied web development, robotics, and algorithmic practice.",
        "Facilitated interactive technical workshops for 150+ students covering AI fundamentals, programming, and robotics through live demos, debugging sessions, and hands-on coding activities.",
      ],
      image: "/zebra.webp",
    },
  ],
  socials: [
    { name: "email", href: "mailto:okwusiunosamuel@gmail.com" },
    { name: "linkedin", href: "https://www.linkedin.com/in/chibuzor-okwusiuno/" },
    { name: "github", href: "https://github.com/samokw" },
  ],
  nav: [
    { href: "/blog", name: "blog" },
    { href: "/experience", name: "experience" },
    { href: "/Samuel_Software_Resume.pdf", name: "resume", external: true },
  ],
};

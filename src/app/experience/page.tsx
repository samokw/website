import {ProjectItem} from "@/types/project";
import Project from "../component/project";

const projectList: ProjectItem[] = [
    {
        name: "FixtureShere",
        image: "/prem.png",
        technology: "Spring Boot, ReactJS, SQL, Supabase, AWS EC2, S3, CloudFront, Route 53",
        description: [
            "Engineered a full-stack solution using Spring Boot and ReactJS, enabling users to efficiently access and analyze statistics for 20,000+ fixtures through custom API endpoints and interactive data visualizations.",
            "Optimized content delivery speed by 20% through strategic deployment on AWS EC2 (backend) and S3 (frontend), while enhancing security with CloudFront caching and HTTPS integration.",
            "Developed a responsive, data-driven dashboard with React and Material UI, decreasing user search time for match data by 80%",
        ],
        link: "https://samokw.name",
    },
    {
        name: "Alphanetic",
        image: "/alpha.png",
        technology: "Python, ReactJS, Material UI",
        description: [
            "Developed a user-friendly educational app for phonetic alphabet translation, featuring real-time processing and personalized learning paths, securing Top 5 placement in the education section among 20+ teams in that category in a competitive hackathon.",
            "Engineered a highly responsive frontend using ReactJS and Material UI, resulting in a 0.5-second decrease in average task completion time and positive user feedback for intuitive design.",
        ],
        link: "https://github.com/samokw/typeracer",
    },
    {
        name: "Chess Web Application",
        image: "/chess.png",
        technology: "Python, C (SWIG), HTTPServer, JavaScript (Chessboard.js), Bootstrap, SQLite",
        description: [
            "Developed a multiplayer chess variant application combining C-based game logic wrapped with SWIG and a Python HTTPServer backend, enabling real-time gameplay and player matchmaking.",
            "Engineered an interactive frontend using Chessboard.js and Bootstrap, delivering real-time board updates, move replays, and intuitive game analysis.",
            "Implemented robust C functions for move validation, rule enforcement, and time tracking, ensuring precise gameplay and optimal performance.",
            "Integrated AJAX polling and SQLite to achieve seamless data synchronization, reducing latency and enhancing multiplayer experience.",
        ],
        link: "https://github.com/samokw/chess",
    },
    {
        name:"Coronavirus Statistics Visualization",
        image: "/covid.png",
        technology: "Python, pandas, Matplotlib, Seaborn",
        description: [
            "Enhanced data reliability by cleaning and refactoring over 3,000 lines of COVID-19 data from Statistics Canada, reducing inconsistencies by 95% and enabling more accurate trend analysis.",
            "Analyzed time-related and demographic trends, revealing a correlation between winter months and increased COVID-19 cases, particularly in areas with high prison populations.",
            "Adopted Agile methodologies to enhance project efficiency, resulting in 10% faster data updates and consistent delivery of Matplotlib and Seaborn-based coronavirus trend visualizations.",
        ],
        link: "https://github.com/samokw/PROJECTL02-CIS2250-2/tree/main/PROJECTL02-CIS2250-2/Prison",
    },
];

export default function Experience() {
    const workExperienceList = [
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
    ];

    return (
        <section>
            <h1 className="font-medium text-2xl mb-8 tracking-tighter">work experience</h1>
            <div className="mb-12">
                {workExperienceList.map((experience, index) => (
                    <div key={index} className="flex flex-col gap-2 mb-8">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                            <h2 className="text-lg font-medium">{experience.title}</h2>
                            <span className="text-sm text-neutral-500 dark:text-neutral-400 tabular-nums">{experience.date}</span>
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-2">
                            {experience.company} • {experience.location}
                        </p>
                        <ul className="list-disc list-outside ml-4 text-neutral-600 dark:text-neutral-300 text-sm space-y-1">
                            {experience.responsibilities.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <h1 className="font-medium text-2xl mb-8 tracking-tighter">projects</h1>
            <ul className="flex flex-col space-y-8">
                {projectList.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </ul>
        </section>
    );
}

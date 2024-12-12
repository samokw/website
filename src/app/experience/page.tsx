import {ProjectItem} from "@/types/project";
import Project from "../component/project";
import Image from "next/image"
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
            image: "/zebra.webp", // Include the path to the image
        },
        // Add more work experiences here if needed
    ];

    return (
        <section className="max-w-3xl mx-auto p-4">
            {/* Work Experience Section */}
            <div className="flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-6">work experience</h1>
                <ul className="space-y-6">
                    {workExperienceList.map((experience, index) => (
                        <li key={index} className="py-4 flex flex-col items-center">
                            {experience.image && (
                                <Image
                                    className="size-36 rounded-full mb-4"
                                    src={experience.image}
                                    alt={`${experience.company} logo`}
                                />
                            )}
                            <h2 className="text-xl font-semibold dark:text-gray-100">
                                {experience.title}
                            </h2>
                            <p className="text-gray-400 text-sm mb-2">
                                {experience.company} – {experience.location}
                            </p>
                            <p className="text-gray-500 text-sm mb-4">{experience.date}</p>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-100 text-sm">
                                {experience.responsibilities.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
            <hr className="h-px my-8 bg-gray-700 border-0 dark:bg-gray-200"/>
            <div className="flex flex-col items-center mt-10">
                <h2 className="text-2xl font-semibold mb-6">projects</h2>
                <ul className="space-y-6">
                    {projectList.map((project, index) => (
                        <Project key={index} project={project} />
                    ))}
                </ul>
            </div>
        </section>
    );
}

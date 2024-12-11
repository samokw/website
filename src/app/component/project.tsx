import { ProjectItem } from "@/types/project";

export default function Project({ project }: { project: ProjectItem }) {
    return (
        <li className="py-4">
            <div className="flex justify-center">
            <h2 className="text-xl font-semibold dark:text-gray-100 underline lowercase">
                {project.name}
            </h2>
            </div>
            {project.image && (
                <div className="flex justify-center">
                    <img
                    className="w-full max-w-md rounded-md my-4"
                    src={project.image}
                    alt={project.name || "Project Image"}
                />
                </div>
            )}
            <p className="text-gray-700 dark:text-gray-400 text-sm mb-2">
                {project.technology}
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm mb-4">
                {project.description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            {project.link && (
                <div className="flex justify-center">
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 dark:text-blue-300 hover:underline lowercase"
                >
                    View Project
                </a>
                </div>
            )}
        </li>
    );
}

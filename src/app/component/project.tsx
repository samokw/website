import { ProjectItem } from "@/types/project";

export default function Project({ project }: { project: ProjectItem }) {
    return (
        <li className="group mb-8">
            <div className="flex flex-col">
                <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-lg font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.link ? (
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                {project.name}
                            </a>
                        ) : (
                            project.name
                        )}
                    </h3>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3 font-mono">
                    {project.technology}
                </p>
                <ul className="list-disc list-outside ml-4 text-neutral-600 dark:text-neutral-300 text-sm space-y-1 mb-4">
                    {project.description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </li>
    );
}

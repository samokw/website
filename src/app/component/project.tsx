import type { ProjectEntry } from "@/content/types";

export default function Project({ project }: { project: ProjectEntry }) {
  const { name, url, technology, description } = project;

  return (
    <li className="group mb-8">
      <div className="flex flex-col">
        <div className="mb-2 flex items-baseline justify-between">
          <h3 className="text-lg font-semibold transition-colors group-hover:text-[var(--link)]">
            {url ? (
              <a href={url} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            ) : (
              name
            )}
          </h3>
        </div>
        {technology ? (
          <p className="mb-3 font-mono text-sm text-[var(--muted)]">{technology}</p>
        ) : null}
        {description && description.length > 0 ? (
          <ul className="mb-4 ml-4 list-outside list-disc space-y-1 text-sm text-[var(--foreground)]/90">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </li>
  );
}

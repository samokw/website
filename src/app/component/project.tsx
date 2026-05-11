import type { ProjectEntry } from "@/content/types";

export default function Project({ project }: { project: ProjectEntry }) {
  const { name, url, technology, description, summary } = project;

  return (
    <li>
      <article>
        <h3 className="text-[16px] font-normal leading-relaxed text-[var(--foreground)] lowercase">
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--muted)]"
            >
              {name}
              <span className="ml-1 text-[12px] text-[var(--soft)]" aria-hidden>
                ↗
              </span>
            </a>
          ) : (
            name
          )}
        </h3>
        {summary ? (
          <p className="mt-1 text-[14px] leading-relaxed text-[var(--soft)] lowercase">{summary}</p>
        ) : null}
        {technology ? (
          <p className="mt-2 text-[13px] leading-relaxed text-[var(--soft)] lowercase">{technology}</p>
        ) : null}
        {description && description.length > 0 ? (
          <ul className="mt-3 space-y-1.5 text-[14px] leading-relaxed text-[var(--muted)] lowercase">
            {description.map((item, index) => (
              <li key={index} className="pl-4 before:-ml-4 before:content-['-'] before:text-[var(--soft)]">
                <span className="ml-2">{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </article>
    </li>
  );
}

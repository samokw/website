import type { TocEntry } from "@/lib/blog-toc";

export function TableOfContents({
  entries,
  className = "",
}: {
  entries: TocEntry[];
  className?: string;
}) {
  if (entries.length === 0) return null;

  return (
    <nav className={className} aria-label="Table of contents">
      <p className="mb-3 text-[0.7rem] font-semibold tracking-[0.12em] text-[var(--muted)] lowercase">
        contents
      </p>
      <ul className="space-y-2.5 text-[0.82rem] leading-snug text-[var(--muted)]">
        {entries.map((item) => (
          <li
            key={item.id}
            className={item.level === 3 ? "border-l border-[var(--border)] pl-3" : ""}
          >
            <a
              href={`#${item.id}`}
              className="lowercase transition-colors hover:text-[var(--link)]"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

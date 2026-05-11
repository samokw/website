"use client";

import { useEffect, useRef, useState } from "react";
import type { TocEntry } from "@/lib/blog-toc";

export function TableOfContents({
  entries,
  className = "",
}: {
  entries: TocEntry[];
  className?: string;
}) {
  const [activeId, setActiveId] = useState(entries[0]?.id ?? "");
  const scrollContainerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (entries.length === 0) return;

    const observer = new IntersectionObserver(
      (observedEntries) => {
        for (const entry of observedEntries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      },
    );

    for (const entry of entries) {
      const element = document.getElementById(entry.id);
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, [entries]);

  useEffect(() => {
    if (entries.length === 0) return;

    const updateLastSectionAtPageEnd = () => {
      const scrollBottom = window.scrollY + window.innerHeight;
      const pageBottom = document.documentElement.scrollHeight;
      if (scrollBottom >= pageBottom - 8) {
        setActiveId(entries[entries.length - 1]?.id ?? "");
      }
    };

    updateLastSectionAtPageEnd();
    window.addEventListener("scroll", updateLastSectionAtPageEnd, { passive: true });
    window.addEventListener("resize", updateLastSectionAtPageEnd);

    return () => {
      window.removeEventListener("scroll", updateLastSectionAtPageEnd);
      window.removeEventListener("resize", updateLastSectionAtPageEnd);
    };
  }, [entries]);

  if (entries.length === 0) return null;

  return (
    <nav ref={scrollContainerRef} className={className} aria-label="Table of contents">
      <h2 className="mb-4 text-[15px] font-normal text-[var(--muted)] lowercase">
        contents
      </h2>
      <ul className="space-y-3 text-[14px] leading-snug text-[var(--soft)]">
        {entries.map((item) => (
          <li
            key={item.id}
            className={item.level === 3 ? "pl-0" : ""}
          >
            <a
              href={`#${item.id}`}
              onClick={(event) => {
                event.preventDefault();
                event.currentTarget.blur();
                document.getElementById(item.id)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className={`lowercase transition-colors hover:text-[var(--foreground)] ${
                activeId === item.id ? "text-[var(--foreground)]" : ""
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

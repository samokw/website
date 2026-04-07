import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import type { RoleLine } from "@/content/types";
import { getPostPreviews } from "@/lib/blog";

function RoleBlock({ lines }: { lines: RoleLine[] }) {
  return (
    <ul className="space-y-2 text-[length:0.95rem] leading-relaxed text-[var(--foreground)]">
      {lines.map((line, i) => (
        <li key={i}>
          {line.lead}{" "}
          {line.orgUrl ? (
            <a
              href={line.orgUrl}
              className="underline decoration-[var(--link-underline)] underline-offset-[3px] transition-colors hover:text-[var(--link)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {line.org}
            </a>
          ) : (
            line.org
          )}
          {line.tail}
        </li>
      ))}
    </ul>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display mb-3 mt-11 first:mt-0 text-[0.9rem] font-semibold tracking-wide text-[var(--muted)] lowercase">
      {children}
    </h2>
  );
}

export default function Home() {
  const { hero, currently, previously, projects, writing, workExperience } = site;
  const blogPosts = getPostPreviews();
  const showWriting = blogPosts.length > 0 || writing.length > 0;

  return (
    <div className="mx-auto max-w-2xl">
    <section className="pb-16">
      <h1 className="font-display mb-8 text-[1.65rem] font-semibold tracking-[-0.03em] text-[var(--foreground)]">
        {hero.greeting}
      </h1>

      <div className="mb-10 flex flex-col gap-8 md:flex-row md:items-start">
        <div className="min-w-0 flex-1 space-y-4 text-[0.95rem] leading-relaxed text-[var(--foreground)]">
          {hero.lines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
        <div className="shrink-0">
          <Image
            className="rounded-md object-cover grayscale transition-all duration-500 ease-in-out hover:grayscale-0"
            src={hero.portrait.src}
            alt={hero.portrait.alt}
            width={hero.portrait.width}
            height={hero.portrait.height}
            priority
          />
        </div>
      </div>

      {currently.length > 0 && (
        <>
          <SectionLabel>currently</SectionLabel>
          <RoleBlock lines={currently} />
        </>
      )}

      {previously.length > 0 && (
        <>
          <SectionLabel>previously</SectionLabel>
          <RoleBlock lines={previously} />
        </>
      )}

      {workExperience.length > 0 && (
        <>
          <SectionLabel>experience</SectionLabel>
          <ul className="space-y-2.5 text-[0.95rem]">
            {workExperience.map((w, i) => (
              <li key={i}>
                <span className="font-medium text-[var(--foreground)]">{w.title}</span>
                <span className="text-[var(--muted)]"> at </span>
                <span className="text-[var(--foreground)]">{w.company}</span>
                <span className="ml-2 text-[0.85rem] tabular-nums text-[var(--muted)]">{w.date}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      <SectionLabel>projects</SectionLabel>
      <ul className="space-y-2.5 text-[0.95rem]">
        {projects.map((p) => (
          <li key={p.url}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--foreground)] underline decoration-[var(--link-underline)] underline-offset-[3px] transition-colors hover:text-[var(--link)]"
            >
              {p.name}
            </a>
            {p.summary ? (
              <span className="mt-0.5 block text-[0.85rem] leading-snug text-[var(--muted)] md:mt-0 md:ml-2 md:inline md:before:content-['—_']">
                {p.summary}
              </span>
            ) : null}
          </li>
        ))}
      </ul>

      {showWriting && (
        <>
          <SectionLabel>writing</SectionLabel>
          <ul className="space-y-2 text-[0.95rem]">
            {blogPosts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="underline decoration-[var(--link-underline)] underline-offset-[3px] transition-colors hover:text-[var(--link)]"
                >
                  {p.title}
                </Link>
              </li>
            ))}
            {writing.map((w) => (
              <li key={w.url}>
                <a
                  href={w.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-[var(--link-underline)] underline-offset-[3px] transition-colors hover:text-[var(--link)]"
                >
                  {w.title}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}

      <p className="mt-12 text-[0.9rem] text-[var(--muted)]">
        <Link
          href="/experience"
          className="underline decoration-[var(--link-underline)] underline-offset-[3px] transition-colors hover:text-[var(--link)]"
        >
          more on experience
        </Link>
        <span> — work history and longer project notes.</span>
      </p>
    </section>
    </div>
  );
}

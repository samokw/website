import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import type { RoleLine } from "@/content/types";
import { getPostPreviews } from "@/lib/blog";

function RoleBlock({ lines }: { lines: RoleLine[] }) {
  return (
    <ul className="space-y-3 text-[15px] leading-relaxed text-[var(--muted)] lowercase">
      {lines.map((line, i) => (
        <li key={i}>
          {line.lead}{" "}
          {line.orgUrl ? (
            <a
              href={line.orgUrl}
              className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
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
    <h2 className="mb-3 mt-7 first:mt-0 text-[15px] font-normal text-[var(--foreground)] lowercase">
      {children}
    </h2>
  );
}

function ExternalArrow() {
  return <span className="ml-1 text-[12px] text-[var(--soft)]" aria-hidden>↗</span>;
}

function SocialIcon({ name }: { name: string }) {
  if (name === "email") {
    return (
      <svg aria-hidden="true" className="size-[20px]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg aria-hidden="true" className="size-[19px]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3c.53 0 1.04.21 1.41.59.38.37.59.88.59 1.41v14c0 .53-.21 1.04-.59 1.41-.37.38-.88.59-1.41.59H5c-.53 0-1.04-.21-1.41-.59C3.21 20.04 3 19.53 3 19V5c0-.53.21-1.04.59-1.41C3.96 3.21 4.47 3 5 3h14Zm-.5 15.5v-5.3c0-.86-.34-1.69-.95-2.31a3.26 3.26 0 0 0-2.31-.95c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4.37 0 .73.15.99.41.26.26.41.62.41.99v4.93h2.79ZM6.88 8.56c.45 0 .87-.18 1.19-.49.31-.32.49-.74.49-1.19 0-.93-.75-1.69-1.68-1.69-.45 0-.88.18-1.2.49-.31.32-.49.75-.49 1.2 0 .93.76 1.68 1.69 1.68Zm1.39 9.94v-8.37H5.5v8.37h2.77Z" />
      </svg>
    );
  }

  if (name === "github") {
    return (
      <svg aria-hidden="true" className="size-[19px]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02A9.34 9.34 0 0 1 12 6.84c.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12c0-5.52-4.48-10-10-10Z" />
      </svg>
    );
  }

  return null;
}

export default function Home() {
  const { hero, currently, previously, projects, writing, workExperience } = site;
  const blogPosts = getPostPreviews();
  const showWriting = blogPosts.length > 0 || writing.length > 0;

  return (
    <div>
    <section className="pb-12">
      <div className="relative mb-8 min-h-[84px]">
        <h1 className="max-w-[320px] text-[30px] font-normal leading-tight tracking-[-0.01em] text-[var(--foreground)]">
          hi im sam
        </h1>
        <div className="absolute right-2 top-1 hidden size-10 overflow-hidden bg-[var(--border)] sm:block">
          <Image
            className="size-full object-cover grayscale"
            src={hero.portrait.src}
            alt={hero.portrait.alt}
            width={56}
            height={56}
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
          <ul className="space-y-3 text-[15px] lowercase">
            {workExperience.map((w, i) => (
              <li key={i} className="text-[var(--muted)]">
                <span>{w.title}</span>
                <span className="text-[var(--soft)]"> · </span>
                <span>{w.company.split(",")[0]}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      <SectionLabel>projects</SectionLabel>
      <ul className="space-y-3 text-[15px] lowercase">
        {projects.map((p) => (
          <li key={p.url ?? p.name}>
            {p.url ? (
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                {p.name}
                <ExternalArrow />
              </a>
            ) : (
              <span className="text-[var(--muted)]">{p.name}</span>
            )}
          </li>
        ))}
      </ul>

      {showWriting && (
        <>
          <SectionLabel>writing</SectionLabel>
          <ul className="space-y-3 text-[15px] lowercase">
            {blogPosts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
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
                  className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                >
                  {w.title}
                  <ExternalArrow />
                </a>
              </li>
            ))}
          </ul>
        </>
      )}

      <div className="mt-8 flex items-center gap-5 text-[18px] text-[var(--muted)]">
        {site.socials.map((social) => (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--foreground)]"
            aria-label={social.name}
          >
            <SocialIcon name={social.name} />
          </a>
        ))}
      </div>

      <p className="mt-8 text-[14px] text-[var(--soft)]">
        <Link
          href="/experience"
          className="transition-colors hover:text-[var(--foreground)]"
        >
          more on experience
        </Link>
        <span> / work history and longer project notes.</span>
      </p>
    </section>
    </div>
  );
}

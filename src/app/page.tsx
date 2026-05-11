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
  if (name === "github") {
    return (
      <svg aria-hidden="true" className="size-[18px]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0 1 12 6.99c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.49A10.12 10.12 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="size-[18px]" viewBox="0 0 24 24" fill="none">
      <path
        d="M4.75 6.75h14.5v10.5H4.75V6.75Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="m5.25 7.25 6.75 5.5 6.75-5.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
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
          <li key={p.url}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              {p.name}
              <ExternalArrow />
            </a>
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

import Link from "next/link";
import { Fragment } from "react";
import { site } from "@/content/site";

type HeaderLink = {
  key: string;
  href: string;
  name: string;
  external?: boolean;
};

export default function Navbar() {
  const { name, nav, socials } = site;

  const links: HeaderLink[] = [
    ...nav.map((item) => ({
      key: item.href,
      href: item.href,
      name: item.name,
      external: item.external,
    })),
    ...socials.map((s) => ({
      key: s.href,
      href: s.href,
      name: s.name,
      external: true,
    })),
  ];

  return (
    <header className="sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 md:px-12">
        <Link
          href="/"
          className="font-display shrink-0 text-lg font-semibold tracking-tight text-[var(--foreground)] transition-colors hover:text-[var(--link)]"
        >
          {name}
        </Link>
        <nav
          className="flex flex-wrap items-center gap-x-1 gap-y-1.5 text-[0.9rem] text-[var(--foreground)]/85 sm:justify-end"
          id="nav"
          aria-label="Primary"
        >
          {links.map((item, i) => (
            <Fragment key={item.key}>
              {i > 0 ? (
                <span className="px-2 text-[var(--muted)] sm:px-2.5" aria-hidden>
                  ·
                </span>
              ) : null}
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[var(--link)]"
                >
                  {item.name}
                </a>
              ) : (
                <Link href={item.href} className="transition-colors hover:text-[var(--link)]">
                  {item.name}
                </Link>
              )}
            </Fragment>
          ))}
        </nav>
      </div>
    </header>
  );
}

import Link from "next/link";
import { site } from "@/content/site";

type HeaderLink = {
  key: string;
  href: string;
  name: string;
  external?: boolean;
};

export default function Navbar() {
  const { nav } = site;

  const links: HeaderLink[] = [
    {
      key: "/",
      href: "/",
      name: "home",
    },
    ...nav.map((item) => ({
      key: item.href,
      href: item.href,
      name: item.name,
      external: item.external,
    })),
  ];

  return (
    <header className="mx-auto max-w-[560px] px-8 pt-10 sm:px-6">
      <div className="flex items-center justify-end">
        <nav
          className="flex flex-wrap items-center justify-end gap-x-3 gap-y-1.5 text-sm text-[var(--muted)]"
          id="nav"
          aria-label="Primary"
        >
          {links.map((item) => (
            <span key={item.key}>
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[var(--foreground)]"
                >
                  {item.name}
                </a>
              ) : (
                <Link href={item.href} className="transition-colors hover:text-[var(--foreground)]">
                  {item.name}
                </Link>
              )}
            </span>
          ))}
        </nav>
      </div>
    </header>
  );
}

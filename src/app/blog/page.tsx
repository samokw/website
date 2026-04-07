import Link from "next/link";
import type { Metadata } from "next";
import { getPostPreviews } from "@/lib/blog";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `blog — ${site.meta.title}`,
  description: "Writing and notes.",
};

function formatDate(iso: string) {
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return iso;
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(t);
}

export default function BlogIndexPage() {
  const posts = getPostPreviews();

  return (
    <div className="mx-auto max-w-2xl">
    <section className="pb-16">
      <h1 className="font-display mb-2 text-2xl font-semibold tracking-[-0.02em] text-[var(--foreground)]">
        blog
      </h1>
      <p className="mb-10 text-[0.95rem] text-[var(--muted)]">
        Posts live in{" "}
        <code className="rounded bg-[var(--border)]/40 px-1 py-0.5 text-[0.85rem]">
          src/content/blog
        </code>{" "}
        as Markdown.
      </p>

      {posts.length === 0 ? (
        <p className="text-[0.95rem] text-[var(--muted)]">No posts yet.</p>
      ) : (
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block font-display text-lg font-semibold text-[var(--foreground)] transition-colors hover:text-[var(--link)]"
              >
                {post.title}
              </Link>
              {post.date ? (
                <p className="mt-1 text-sm tabular-nums text-[var(--muted)]">
                  {formatDate(post.date)}
                </p>
              ) : null}
              {post.description ? (
                <p className="mt-2 max-w-xl text-[0.95rem] leading-relaxed text-[var(--foreground)]/85">
                  {post.description}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      )}

      <p className="mt-14 text-[0.9rem] text-[var(--muted)]">
        <Link
          href="/"
          className="underline decoration-[var(--link-underline)] underline-offset-[3px] transition-colors hover:text-[var(--link)]"
        >
          ← home
        </Link>
      </p>
    </section>
    </div>
  );
}

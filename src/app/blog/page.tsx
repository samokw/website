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
    <div>
    <section className="pb-12">
      <h1 className="mb-8 text-[30px] font-normal leading-tight tracking-[-0.01em] text-[var(--foreground)]">
        blog
      </h1>

      {posts.length === 0 ? (
        <p className="text-[15px] text-[var(--muted)]">Nothing here yet — check back soon.</p>
      ) : (
        <ul className="space-y-7">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block text-[15px] leading-relaxed text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                {post.title}
              </Link>
              {post.date ? (
                <p className="mt-1 text-[13px] tabular-nums text-[var(--soft)]">
                  {formatDate(post.date)}
                </p>
              ) : null}
              {post.description ? (
                <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-[var(--soft)]">
                  {post.description}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </section>
    </div>
  );
}

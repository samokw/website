import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getPublishedSlugs } from "@/lib/blog";
import { getTocFromMarkdown, readingTimeMinutes } from "@/lib/blog-toc";
import { site } from "@/content/site";
import { MarkdownBody } from "../markdown-body";
import { TableOfContents } from "../toc";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getPublishedSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — ${site.meta.title}`,
    description: post.description ?? post.title,
  };
}

function formatDateLong(iso: string) {
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return iso;
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
    .format(t)
    .toLowerCase();
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const toc = getTocFromMarkdown(post.content);
  const minutes = readingTimeMinutes(post.content);
  const hasToc = toc.length > 0;

  const articleHeader = (
    <>
      <header className="mb-8">
        <h1 className="font-display text-[1.65rem] font-semibold leading-[1.15] tracking-[-0.02em] text-[var(--foreground)] lowercase md:text-[1.85rem]">
          {post.title}
        </h1>
        <p className="mt-4 text-[0.88rem] leading-relaxed text-[var(--muted)] lowercase">
          <span>{site.name}</span>
          {post.date ? (
            <>
              <span className="mx-2 text-[var(--border)]" aria-hidden>
                ·
              </span>
              <time dateTime={post.date}>{formatDateLong(post.date)}</time>
            </>
          ) : null}
          <span className="mx-2 text-[var(--border)]" aria-hidden>
            ·
          </span>
          <span>{minutes} min read</span>
        </p>
        {post.description ? (
          <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-[var(--foreground)]/90">
            {post.description}
          </p>
        ) : null}
      </header>

      <hr className="mb-10 border-[var(--border)]" />

      {hasToc ? (
        <div className="mb-10 md:hidden">
          <TableOfContents entries={toc} />
        </div>
      ) : null}

      <MarkdownBody content={post.content} />
    </>
  );

  return (
    <article className="pb-16">
      <p className="mb-8 text-[0.9rem] text-[var(--muted)] lowercase md:mx-auto md:max-w-prose">
        <Link
          href="/blog"
          className="transition-colors hover:text-[var(--link)]"
        >
          &lt; back
        </Link>
      </p>

      {hasToc ? (
        <div className="md:grid md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-x-8 lg:gap-x-12 xl:gap-x-20">
          <aside className="sticky top-28 hidden w-max max-w-[9.5rem] justify-self-start self-start md:block lg:max-w-[10rem]">
            <TableOfContents entries={toc} />
          </aside>
          <div className="min-w-0 w-full max-w-prose md:col-start-2 md:justify-self-center">
            {articleHeader}
          </div>
          <div className="hidden md:block md:col-start-3" aria-hidden />
        </div>
      ) : (
        <div className="mx-auto max-w-prose">{articleHeader}</div>
      )}
    </article>
  );
}

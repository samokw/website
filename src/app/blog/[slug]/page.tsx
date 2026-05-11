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

  const minutes = readingTimeMinutes(post.content);
  const toc = getTocFromMarkdown(post.content);

  return (
    <div className="pb-14 md:-ml-[206px] md:grid md:w-[766px] md:grid-cols-[150px_minmax(0,560px)] md:items-start md:gap-x-14">
      {toc.length > 0 ? (
        <aside className="sticky top-10 hidden pt-[6px] md:block">
          <TableOfContents entries={toc} />
        </aside>
      ) : (
        <div className="hidden md:block" aria-hidden />
      )}

      <article className="min-w-0">
        <header className="mb-9">
          <h1 className="max-w-[440px] text-[30px] font-normal leading-tight tracking-[-0.01em] text-[var(--foreground)] lowercase">
            {post.title}
          </h1>
          <p className="mt-5 text-[14px] leading-relaxed text-[var(--soft)] lowercase">
            <span>{site.name}</span>
            {post.date ? (
              <>
                <span className="mx-2 text-[var(--soft)]" aria-hidden>
                  ·
                </span>
                <time dateTime={post.date}>{formatDateLong(post.date)}</time>
              </>
            ) : null}
            <span className="mx-2 text-[var(--soft)]" aria-hidden>
              ·
            </span>
            <span>{minutes} min read</span>
          </p>
        </header>

        <MarkdownBody content={post.content} />
      </article>
    </div>
  );
}

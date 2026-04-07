import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  description?: string;
  draft?: boolean;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

function published(meta: { draft?: boolean }) {
  if (process.env.NODE_ENV === "development") return true;
  return !meta.draft;
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const full = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(full)) return null;
  const raw = fs.readFileSync(full, "utf8");
  const { data, content } = matter(raw);
  const title = typeof data.title === "string" ? data.title : slug;
  const date = typeof data.date === "string" ? data.date : "";
  const description = typeof data.description === "string" ? data.description : undefined;
  const draft = data.draft === true;
  if (!published({ draft })) return null;
  return { slug, title, date, description, draft, content };
}

export function getAllPosts(): BlogPost[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => {
      const ta = Date.parse(a.date) || 0;
      const tb = Date.parse(b.date) || 0;
      return tb - ta;
    });
}

export function getPostPreviews(): BlogPostMeta[] {
  return getAllPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    date: post.date,
    description: post.description,
    draft: post.draft,
  }));
}

/** Slugs that should get a static route (excludes drafts in production). */
export function getPublishedSlugs(): string[] {
  return getPostSlugs().filter((slug) => getPostBySlug(slug) !== null);
}

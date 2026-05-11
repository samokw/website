import GithubSlugger from "github-slugger";

export type TocEntry = {
  level: 2 | 3;
  text: string;
  id: string;
};

/** Build TOC from raw Markdown; IDs match `rehype-slug` (GitHub-style). */
export function getTocFromMarkdown(content: string): TocEntry[] {
  const slugger = new GithubSlugger();
  const toc: TocEntry[] = [];

  for (const line of content.split("\n")) {
    const m = line.match(/^(#{2,3})\s+(.+?)(?:\s+#+\s*)?$/);
    if (!m) continue;
    const level = m[1].length as 2 | 3;
    let text = m[2].trim();
    text = text.replace(/\s+#+\s*$/, "").trim();
    toc.push({ level, text, id: slugger.slug(text) });
  }

  return toc;
}

export function readingTimeMinutes(content: string): number {
  const readable = content
    .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>/g, " ");
  const words = readable.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

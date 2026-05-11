"use client";

import { Children, isValidElement, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import { MermaidBlock } from "./mermaid-block";

const markdownComponents: Partial<Components> = {
  code({ className, children, ...props }) {
    const text = String(children).replace(/\n$/, "");
    const match = /language-(\w+)/.exec(className || "");
    if (match?.[1] === "mermaid") {
      return <MermaidBlock chart={text} />;
    }
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  pre({ children }) {
    const first = Children.toArray(children)[0];
    if (isValidElement(first) && first.type === MermaidBlock) {
      return <>{children}</>;
    }
    return (
      <pre className="overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--border)]/10 p-4 text-sm">
        {children}
      </pre>
    );
  },
};

export function MarkdownBody({ content }: { content: string }) {
  return (
    <div className="blog-markdown prose prose-neutral max-w-none font-body dark:prose-invert prose-headings:scroll-mt-28 prose-headings:font-semibold prose-headings:lowercase prose-headings:tracking-[-0.01em] prose-headings:text-[var(--foreground)] prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-[24px] prose-h2:leading-tight prose-h3:mt-10 prose-h3:mb-3 prose-h3:text-[20px] prose-h3:leading-snug prose-p:my-5 prose-p:text-[16px] prose-p:leading-[1.65] prose-p:text-[var(--muted)] prose-a:text-[var(--foreground)] prose-a:decoration-[var(--link-underline)] prose-a:underline-offset-[3px] prose-strong:text-[var(--foreground)] prose-li:text-[var(--muted)] prose-li:leading-relaxed prose-blockquote:my-8 prose-blockquote:border-l prose-blockquote:border-[var(--border)] prose-blockquote:bg-[rgba(241,240,238,0.035)] prose-blockquote:px-5 prose-blockquote:py-1 prose-blockquote:not-italic prose-blockquote:text-[var(--muted)] prose-hr:border-[var(--border)] [&_svg]:max-w-full [&_svg]:h-auto">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSlug]}
        components={markdownComponents}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

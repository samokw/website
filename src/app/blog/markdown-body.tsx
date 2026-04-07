"use client";

import { Children, isValidElement, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
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
    <div className="blog-markdown prose prose-neutral max-w-none font-body dark:prose-invert prose-headings:scroll-mt-28 prose-h2:mt-12 prose-h2:mb-4 prose-h2:font-display prose-h2:text-[1.2rem] prose-h2:font-semibold prose-h2:tracking-tight prose-h2:text-[var(--foreground)] prose-h2:lowercase prose-h3:mt-8 prose-h3:mb-3 prose-h3:font-display prose-h3:text-[1.05rem] prose-h3:font-semibold prose-h3:text-[var(--foreground)] prose-h3:lowercase prose-p:leading-relaxed prose-li:leading-relaxed">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug]}
        components={markdownComponents}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

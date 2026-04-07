"use client";

import { useEffect, useId, useState } from "react";

export function MermaidBlock({ chart }: { chart: string }) {
  const reactId = useId().replace(/:/g, "");
  const [svg, setSvg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    void (async () => {
      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({
          startOnLoad: false,
          theme: window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "neutral",
          securityLevel: "loose",
        });
        const rid = `m-${reactId}-${Math.random().toString(36).slice(2, 9)}`;
        const { svg: out } = await mermaid.render(rid, chart.trim());
        if (!cancelled) {
          setSvg(out);
          setError(null);
        }
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : String(e));
          setSvg(null);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [chart, reactId]);

  if (error) {
    return (
      <div className="not-prose my-6 rounded-lg border border-[var(--border)] bg-red-500/5 p-4 text-sm text-red-800 dark:text-red-200">
        <p className="font-medium">Mermaid</p>
        <pre className="mt-2 whitespace-pre-wrap font-mono text-xs opacity-90">{error}</pre>
      </div>
    );
  }

  if (!svg) {
    return (
      <div className="not-prose my-6 rounded-lg border border-[var(--border)] bg-[var(--border)]/15 p-8 text-center text-sm text-[var(--muted)]">
        Rendering diagram…
      </div>
    );
  }

  return (
    <div
      className="not-prose my-8 flex justify-center overflow-x-auto text-[var(--foreground)] [&_svg]:h-auto [&_svg]:max-w-none"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

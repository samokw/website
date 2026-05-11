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
          theme: "dark",
          securityLevel: "loose",
          themeVariables: {
            background: "#191918",
            primaryColor: "#222220",
            primaryTextColor: "#f1f0ee",
            primaryBorderColor: "#77736d",
            lineColor: "#aaa7a2",
            secondaryColor: "#191918",
            tertiaryColor: "#191918",
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontSize: "15px",
          },
          flowchart: {
            nodeSpacing: 28,
            rankSpacing: 44,
          },
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
      className="not-prose my-8 overflow-x-auto rounded-md border border-[var(--border)] bg-[#111110] px-5 py-7 text-[var(--foreground)] [&_svg]:mx-auto [&_svg]:h-auto [&_svg]:min-w-[560px] [&_svg]:max-w-none"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

"use client";

import { useEffect, useRef } from "react";

/**
 * Renders raw third-party embed HTML (saved verbatim from the Squarespace
 * site) and executes any <script> tags it contains, preserving order:
 * external scripts are awaited before the next script runs, so inline
 * scripts that depend on a CDN library (e.g. chart.js) work.
 *
 * Accepts full HTML documents too — doctype/html/head/body wrappers are
 * stripped and the remaining content is injected inline.
 */
export function SquarespaceEmbed({
  html,
  className = "",
}: {
  html: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cancelled = false;

    const cleaned = html
      .replace(/<!DOCTYPE[^>]*>/gi, "")
      .replace(/<\/?(html|head|body)[^>]*>/gi, "")
      .replace(/<(title|meta)[^>]*>[^<]*(<\/\1>)?/gi, "");
    el.innerHTML = cleaned;

    const scripts = Array.from(el.querySelectorAll("script"));
    (async () => {
      for (const old of scripts) {
        if (cancelled) return;
        const s = document.createElement("script");
        for (const attr of Array.from(old.attributes)) {
          s.setAttribute(attr.name, attr.value);
        }
        s.textContent = old.textContent;
        old.replaceWith(s);
        if (s.src) {
          await new Promise((resolve) => {
            s.onload = s.onerror = resolve;
          });
        }
      }
    })();

    return () => {
      cancelled = true;
      el.innerHTML = "";
    };
  }, [html]);

  return <div ref={ref} className={className} />;
}

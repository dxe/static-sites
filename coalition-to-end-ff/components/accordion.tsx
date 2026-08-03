"use client";

import { useState } from "react";

export function Accordion({ children }: { children: React.ReactNode }) {
  return <div className="border-b border-ceff-ink/60">{children}</div>;
}

export function AccordionItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-ceff-ink/60">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-6 py-7 text-left"
      >
        <h4>{title}</h4>
        <span
          aria-hidden
          className={`shrink-0 text-3xl font-extralight leading-none transition-transform duration-200 ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      {open && <div className="space-y-4 pb-7">{children}</div>}
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const NAV_ITEMS: NavItem[] = [
  {
    label: "The CAFOs",
    href: "/cafos",
    children: [
      { label: "The CAFOs", href: "/cafos" },
      { label: "CAFO List & Map", href: "/cafos#cafo-map" },
      { label: "Eggs", href: "/cafos#cafo-eggs" },
      { label: "Dairy", href: "/cafos#cafo-dairy" },
      { label: "Poultry", href: "/cafos#cafo-poultry" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  { label: "FAQ", href: "/faq" },
  {
    label: "Learn More",
    href: "/what-are-cafos",
    children: [
      { label: "What are CAFOs?", href: "/what-are-cafos" },
      { label: "News", href: "/news" },
      { label: "Videos", href: "/videos" },
    ],
  },
  { label: "Subscribe", href: "/newsletter" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  // The live site hides the header title on the homepage (the hero shows the logo card instead).
  const hideTitle = pathname === "/" || pathname === "/home";

  return (
    <header className="absolute inset-x-0 top-0 z-30 text-white">
      {/* Live site: linear-gradient(#484848, transparent) behind the header bar */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-ceff-ink/95 to-transparent lg:h-16"
      />

      {/* Desktop bar */}
      <div className="relative hidden h-16 items-center justify-between px-8 lg:flex">
        <Link
          href="/"
          className={`font-heading text-[min(1rem+0.48vw,1.42rem)] font-bold uppercase ${hideTitle ? "invisible" : ""}`}
        >
          Coalition to End Factory Farming
        </Link>
        <nav className="flex items-center gap-9">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="cursor-pointer hover:opacity-80"
                >
                  {item.label}
                </Link>
                <div className="invisible absolute right-0 top-full z-40 min-w-44 bg-white py-2 opacity-0 shadow-lg transition-opacity duration-100 group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href + child.label}
                      href={child.href}
                      className="block px-5 py-1.5 text-[0.95em] whitespace-nowrap text-ceff-ink hover:bg-ceff-blue/40"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`hover:opacity-80 ${pathname === item.href ? "underline underline-offset-8" : ""}`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
      </div>

      {/* Mobile bar: burger left, centered title */}
      <div className="relative flex h-24 items-center justify-center lg:hidden">
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className="absolute left-6 flex cursor-pointer flex-col gap-1.5 p-2"
        >
          <span className="h-0.5 w-7 bg-white" />
          <span className="h-0.5 w-7 bg-white" />
          <span className="h-0.5 w-7 bg-white" />
        </button>
        {!hideTitle && (
          <Link
            href="/"
            className="max-w-[70%] text-center font-heading text-xl font-bold uppercase leading-tight"
          >
            Coalition to End Factory Farming
          </Link>
        )}
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-ceff-blue text-ceff-ink lg:hidden">
          <div className="relative flex h-24 shrink-0 items-center justify-center">
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="absolute left-6 cursor-pointer p-2 text-3xl leading-none"
            >
              ✕
            </button>
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="max-w-[70%] text-center font-heading text-xl font-bold uppercase leading-tight"
            >
              Coalition to End Factory Farming
            </Link>
          </div>
          <nav className="flex flex-col gap-6 px-8 py-8 text-2xl">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <div className="font-heading font-bold uppercase">
                    {item.label}
                  </div>
                  <div className="mt-3 flex flex-col gap-3 pl-5 text-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href + child.label}
                        href={child.href}
                        onClick={() => setMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-heading font-bold uppercase"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

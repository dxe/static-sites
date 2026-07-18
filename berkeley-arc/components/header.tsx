"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/public/images/logo.png";

const NAV_LINKS = [
  { href: "/events", label: "Events" },
  { href: "/membership", label: "Support" },
] as const;

const navLinkClasses =
  "font-nav text-sm font-extrabold uppercase tracking-[2px] text-white transition-opacity hover:opacity-80";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      {/* Desktop: nav links flanking the centered logo */}
      <div className="hidden h-36.75 items-center justify-center gap-12 lg:flex">
        <Link href={NAV_LINKS[0].href} className={navLinkClasses}>
          {NAV_LINKS[0].label}
        </Link>
        <Link href="/" aria-label="Berkeley Animal Rights Center home">
          <Image
            src={logo}
            alt="Berkeley Animal Rights Center"
            width={140}
            height={87}
            priority
          />
        </Link>
        <Link href={NAV_LINKS[1].href} className={navLinkClasses}>
          {NAV_LINKS[1].label}
        </Link>
      </div>

      {/* Mobile: hamburger + centered logo */}
      <div className="relative flex h-24 items-center justify-center lg:hidden">
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className="absolute left-5 flex cursor-pointer flex-col gap-1.5 p-2"
        >
          <span className="h-0.5 w-5 bg-white" />
          <span className="h-0.5 w-5 bg-white" />
          <span className="h-0.5 w-5 bg-white" />
        </button>
        <Link href="/" aria-label="Berkeley Animal Rights Center home">
          <Image
            src={logo}
            alt="Berkeley Animal Rights Center"
            width={84}
            height={52}
            priority
          />
        </Link>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-arc-orange/95 lg:hidden">
          <div className="relative flex h-24 items-center justify-center">
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="absolute left-5 cursor-pointer p-2 text-2xl leading-none text-white"
            >
              ✕
            </button>
            <Link
              href="/"
              aria-label="Berkeley Animal Rights Center home"
              onClick={() => setMenuOpen(false)}
            >
              <Image
                src={logo}
                alt="Berkeley Animal Rights Center"
                width={84}
                height={52}
              />
            </Link>
          </div>
          <nav className="flex flex-1 flex-col items-center justify-center gap-10 pb-24">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-nav text-xl font-semibold uppercase tracking-[3px] text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

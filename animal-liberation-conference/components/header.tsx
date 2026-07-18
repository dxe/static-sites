"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/public/images/alc-logo.png";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* Desktop bar */}
      <div className="hidden h-[95px] bg-alc-sage sm:block">
        <div className="mx-auto flex h-full w-full max-w-[1180px] items-center justify-between px-9 xl:px-[50px]">
          <Link href="/" aria-label="Animal Liberation Conference home">
            <Image
              src={logo}
              alt="Animal Liberation Conference"
              width={85}
              height={85}
              priority
            />
          </Link>
          <Link
            href="/what-is-alc"
            className="text-[14.5px] leading-none text-alc-mist transition-opacity hover:opacity-80"
          >
            About
          </Link>
        </div>
      </div>

      {/* Mobile bar */}
      <div className="flex h-28 items-center justify-between bg-alc-sage px-3 py-2 sm:hidden">
        <Link
          href="/"
          className="pl-2"
          aria-label="Animal Liberation Conference home"
        >
          <Image
            src={logo}
            alt="Animal Liberation Conference"
            width={80}
            height={80}
            priority
          />
        </Link>
        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className="cursor-pointer p-3 text-alc-mist"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            <path
              d="M10 1v18M1 10h18"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white sm:hidden">
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-5 cursor-pointer p-2 text-2xl leading-none text-[#b0b0b0]"
          >
            ✕
          </button>
          <nav className="px-9 py-8">
            <Link
              href="/what-is-alc"
              onClick={() => setMenuOpen(false)}
              className="font-round text-[35px] font-semibold text-[#b0b0b0]"
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

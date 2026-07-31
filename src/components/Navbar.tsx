"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo with accent color */}
        <Link href="/" className="font-bold text-lg tracking-tight transition-colors"
          style={{ color: "var(--color-accent)" }}>
          AM.
        </Link>
        <div className="flex items-center gap-6">
          {[
            { href: "#about", label: "About" },
            { href: "#projects", label: "Projects" },
            { href: "#skills", label: "Skills" },
            { href: "#contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors relative group"
            >
              {label}
              {/* Underline accent on hover */}
              <span
                className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-200"
                style={{ background: "var(--color-accent)" }}
              />
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

import React from "react";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-sm border-b border-line">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        <Link
          href="#hero"
          className="font-display text-lg font-bold tracking-tight"
        >
          Demilade Ala
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="#case-studies"
            className="hidden sm:inline text-muted hover:text-ink transition-colors"
          >
            Case studies
          </Link>
          <Link
            href="#work-with-me"
            className="hidden sm:inline text-muted hover:text-ink transition-colors"
          >
            Services
          </Link>
          <a
            href="mailto:demiladeala@gmail.com?subject=Project%20inquiry"
            className="font-medium text-accent hover:text-accent-dark transition-colors"
          >
            Email me
          </a>
        </nav>
      </div>
    </header>
  );
}

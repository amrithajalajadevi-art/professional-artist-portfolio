import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="p-6 sm:p-10 xl:p-12 bg-white border-t border-gallery-border text-center sm:text-left flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-400 tracking-wider gap-4">
      <div>
        <p className="font-serif text-sm text-zinc-700 font-normal">
          Amritha Jalaja Devi — Contemporary Visual Artist & Sculptor
        </p>
        <p className="text-[11px] text-zinc-400 mt-1">
          UK Global Talent Visa Application Portfolio © {new Date().getFullYear()}
        </p>
      </div>

      <div className="flex items-center gap-6 text-[11px] uppercase tracking-widest text-zinc-500">
        <Link href="/about" className="hover:text-zinc-950 transition-colors">
          About
        </Link>
        <Link href="/work" className="hover:text-zinc-950 transition-colors">
          Work
        </Link>
        <Link href="/cv" className="hover:text-zinc-950 transition-colors">
          CV
        </Link>
        <Link href="/contact" className="hover:text-zinc-950 transition-colors">
          Contact
        </Link>
      </div>
    </footer>
  );
}

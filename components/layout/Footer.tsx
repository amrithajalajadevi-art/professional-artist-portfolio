import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="p-8 sm:p-12 xl:p-16 bg-white text-center sm:text-left flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 tracking-wider gap-4">
      <div>
        <p className="font-serif text-sm text-black font-normal">
          Amritha Jalaja Devi — Contemporary Visual Artist & Sculptor
        </p>
        <p className="text-[11px] text-gray-500 mt-1">
          © {new Date().getFullYear()} Amritha Jalaja Devi
        </p>
      </div>

      <div className="flex items-center gap-6 text-[11px] uppercase tracking-widest text-gray-500 font-sans">
        <Link href="/about" className="hover:text-black transition-colors">
          About
        </Link>
        <Link href="/work" className="hover:text-black transition-colors">
          Work
        </Link>
        <Link href="/cv" className="hover:text-black transition-colors">
          CV
        </Link>
        <Link href="/contact" className="hover:text-black transition-colors">
          Contact
        </Link>
      </div>
    </footer>
  );
}

import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="p-8 sm:p-12 xl:p-16 bg-[#F7F4F0] text-center sm:text-left flex flex-col sm:flex-row justify-between items-center text-xs text-[#5C4B48] tracking-wider gap-4">
      <div>
        <p className="font-serif text-sm text-[#4A2E35] font-normal">
          Amritha Jalaja Devi — Contemporary Visual Artist
        </p>
        <p className="text-[11px] text-[#5C4B48] mt-1">
          © {new Date().getFullYear()} Amritha Jalaja Devi
        </p>
      </div>

      <div className="flex items-center gap-6 text-[11px] uppercase tracking-widest text-[#5C4B48] font-sans">
        <Link href="/about" className="hover:text-[#4A2E35] transition-colors">
          About
        </Link>
        <Link href="/work" className="hover:text-[#4A2E35] transition-colors">
          Work
        </Link>
        <Link href="/cv" className="hover:text-[#4A2E35] transition-colors">
          CV
        </Link>
        <Link href="/contact" className="hover:text-[#4A2E35] transition-colors">
          Contact
        </Link>
      </div>
    </footer>
  );
}

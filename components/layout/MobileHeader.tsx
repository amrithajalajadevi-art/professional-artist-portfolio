"use client";

import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface MobileHeaderProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileHeader({ isOpen, onToggle }: MobileHeaderProps) {
  return (
    <header className="lg:hidden sticky top-0 z-40 w-full bg-gallery-bg/95 backdrop-blur-md border-b border-gallery-border px-5 py-3.5 flex items-center justify-between transition-all">
      {/* Brand / Logo */}
      <Link href="/" className="focus:outline-none">
        <span className="font-serif text-base font-normal tracking-tight text-zinc-950 block leading-none">
          AMRITHA JALAJA DEVI
        </span>
        <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-sans block mt-1 font-medium">
          Visual Artist & Sculptor
        </span>
      </Link>

      {/* Hamburger / Close Toggle Button */}
      <button
        type="button"
        onClick={onToggle}
        className="p-2 text-zinc-800 hover:text-zinc-950 focus:outline-none transition-colors rounded-sm hover:bg-zinc-200/50"
        aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
    </header>
  );
}

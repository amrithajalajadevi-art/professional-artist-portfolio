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
    <header className="lg:hidden sticky top-0 z-40 w-full bg-[#FAF9F6]/90 backdrop-blur-md border-b border-zinc-200/80 px-6 py-4 flex items-center justify-between transition-all">
      {/* Brand / Logo */}
      <Link href="/" className="focus:outline-none">
        <span className="font-serif text-lg font-medium tracking-tight text-zinc-950 block leading-none">
          AMRITHA JALAJA DEVI
        </span>
        <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-sans block mt-1">
          Visual Artist
        </span>
      </Link>

      {/* Hamburger / Close Button */}
      <button
        type="button"
        onClick={onToggle}
        className="p-2 text-zinc-800 hover:text-zinc-950 focus:outline-none transition-colors"
        aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
    </header>
  );
}

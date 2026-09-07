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
    <header className="lg:hidden sticky top-0 z-40 w-full bg-[#F7F4F0] px-6 py-4 flex items-center justify-between">
      <Link href="/" className="group block focus:outline-none">
        <span className="font-serif text-lg font-normal tracking-tight text-[#4A2E35] group-hover:text-[#8A7976] transition-colors uppercase">
          AMRITHA JALAJA DEVI
        </span>
      </Link>

      <button
        type="button"
        onClick={onToggle}
        className="p-2 min-h-[48px] min-w-[48px] flex items-center justify-center text-[#4A2E35] hover:text-[#8A7976] transition-colors focus:outline-none cursor-pointer"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
    </header>
  );
}

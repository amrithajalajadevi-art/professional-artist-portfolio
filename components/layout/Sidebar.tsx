"use client";

import React from "react";
import Link from "next/link";
import { NavLinks } from "./NavLinks";

export function Sidebar() {
  return (
    <aside 
      className="hidden lg:flex lg:w-1/4 fixed left-0 top-0 h-screen bg-gallery-bg border-r border-gallery-border flex-col justify-between p-6 xl:p-8 z-30 overflow-y-auto"
      aria-label="Sidebar Navigation"
    >
      <div className="flex flex-col h-full justify-between space-y-6">
        {/* Artist Logo / Brand Header */}
        <div className="pb-4 border-b border-zinc-200/60">
          <Link href="/" className="group block focus:outline-none">
            <h1 className="font-serif text-2xl xl:text-[26px] font-normal tracking-tight text-zinc-950 group-hover:text-zinc-700 transition-colors leading-snug">
              AMRITHA<br />
              JALAJA DEVI
            </h1>
            <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-sans mt-2 font-medium">
              Visual Artist & Sculptor
            </p>
          </Link>
        </div>

        {/* Navigation & Footer Links */}
        <div className="flex-1 flex flex-col justify-between">
          <NavLinks />
        </div>
      </div>
    </aside>
  );
}

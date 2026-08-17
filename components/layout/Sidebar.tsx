"use client";

import React from "react";
import Link from "next/link";
import { NavLinks } from "./NavLinks";

export function Sidebar() {
  return (
    <aside 
      className="hidden lg:flex lg:w-1/4 fixed left-0 top-0 h-screen bg-[#FAF9F6] border-r border-zinc-200/80 flex-col justify-between p-8 xl:p-10 z-30 overflow-y-auto"
      aria-label="Sidebar Navigation"
    >
      <div className="flex flex-col h-full justify-between space-y-8">
        {/* Artist Logo / Brand Header */}
        <div>
          <Link href="/" className="group block focus:outline-none">
            <h1 className="font-serif text-2xl xl:text-3xl font-normal tracking-tight text-zinc-950 group-hover:text-zinc-700 transition-colors leading-tight">
              AMRITHA<br />
              JALAJA DEVI
            </h1>
            <p className="text-[11px] uppercase tracking-widest text-zinc-500 font-sans mt-2.5">
              Visual Artist & Sculptor
            </p>
          </Link>
        </div>

        {/* Navigation & Footer Links */}
        <div className="flex-1 flex flex-col justify-between pt-6">
          <NavLinks />
        </div>
      </div>
    </aside>
  );
}

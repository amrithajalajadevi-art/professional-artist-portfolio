"use client";

import React from "react";
import Link from "next/link";
import { NavLinks } from "./NavLinks";

export function Sidebar() {
  return (
    <aside 
      className="hidden lg:flex lg:w-1/4 fixed left-0 top-0 h-screen bg-white flex-col justify-between p-8 xl:p-12 z-30 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      aria-label="Sidebar Navigation"
    >
      <div className="flex flex-col h-full justify-between space-y-8">
        {/* Artist Logo / Brand Header */}
        <div>
          <Link href="/" className="group block focus:outline-none">
            <h1 className="font-serif text-2xl xl:text-3xl font-normal tracking-tight text-black group-hover:text-zinc-600 transition-colors leading-tight uppercase">
              AMRITHA<br />
              JALAJA DEVI
            </h1>
            <p className="text-[11px] uppercase tracking-widest text-zinc-500 font-sans mt-2 font-light">
              Visual Artist & Sculptor
            </p>
          </Link>
        </div>

        {/* Navigation & Footer Links */}
        <div className="flex-1 flex flex-col justify-between pt-4">
          <NavLinks />
        </div>
      </div>
    </aside>
  );
}

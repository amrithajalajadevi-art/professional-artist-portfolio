"use client";

import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { MobileHeader } from "./MobileHeader";
import { MobileDrawer } from "./MobileDrawer";

interface GlobalLayoutProps {
  children: React.ReactNode;
}

export function GlobalLayout({ children }: GlobalLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gallery-bg text-gallery-text selection:bg-zinc-900 selection:text-white flex flex-col lg:flex-row relative font-sans">
      {/* Fixed Left Sidebar (25% Width on Desktop) */}
      <Sidebar />

      {/* Mobile Top Navbar & Slide-out Drawer (< lg Breakpoint) */}
      <MobileHeader 
        isOpen={mobileMenuOpen} 
        onToggle={() => setMobileMenuOpen(!mobileMenuOpen)} 
      />
      <MobileDrawer 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />

      {/* Scrollable Right Content Area (75% Width on Desktop, 100% on Mobile/Tablet) */}
      <main className="w-full lg:w-[75%] lg:ml-[25%] min-h-screen bg-gallery-card flex flex-col transition-all">
        {children}
      </main>
    </div>
  );
}

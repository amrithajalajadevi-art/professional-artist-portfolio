import React from "react";
import { Sidebar } from "./Sidebar";
import { MobileNav } from "./MobileNav";
import { Footer } from "./Footer";

interface GlobalLayoutProps {
  children: React.ReactNode;
}

// 100% Server Component - No client bundle or JS execution on main layout
export function GlobalLayout({ children }: GlobalLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F7F4F0] text-[#4A2E35] selection:bg-[#4A2E35] selection:text-white flex flex-col lg:flex-row relative font-sans">
      {/* Fixed Left Sidebar */}
      <Sidebar />

      {/* Mobile Top Navbar & Slide-out Drawer */}
      <MobileNav />

      {/* Scrollable Right Content Area */}
      <main className="w-full lg:w-[calc(100%-16rem)] lg:ml-64 min-h-screen bg-[#F7F4F0] flex flex-col justify-between transition-all">
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
}

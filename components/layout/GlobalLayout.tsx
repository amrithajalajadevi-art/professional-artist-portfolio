import React from "react";
import { Sidebar } from "./Sidebar";
import { MobileNav } from "./MobileNav";
import { Footer } from "./Footer";
import { client } from "@/sanity/lib/client";
import { CONTACT_PAGE_QUERY } from "@/sanity/lib/queries";

interface GlobalLayoutProps {
  children: React.ReactNode;
}

// Server Component - Dynamically fetches Contact schema data from Sanity
export async function GlobalLayout({ children }: GlobalLayoutProps) {
  let contactData = null;

  try {
    contactData = await client.fetch(CONTACT_PAGE_QUERY);
  } catch (error) {
    console.error("Error fetching contact data for sidebar in GlobalLayout:", error);
  }

  const envEmail = process.env.CONTACT_EMAIL;
  if (envEmail) {
    contactData = {
      ...(contactData || {}),
      email: envEmail,
    };
  }

  return (
    <div className="min-h-screen bg-[#F7F4F0] text-[#4A2E35] selection:bg-[#4A2E35] selection:text-white flex flex-col lg:flex-row relative font-sans">
      {/* Fixed Left Sidebar */}
      <Sidebar contactData={contactData} />

      {/* Mobile Top Navbar & Slide-out Drawer */}
      <MobileNav contactData={contactData} />

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

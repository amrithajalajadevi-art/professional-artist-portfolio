import React from "react";
import type { Metadata } from "next";
import { publicArtData } from "@/constants/publicArtData";
import { PublicArtList } from "@/components/public-art/PublicArtList";

export const metadata: Metadata = {
  title: "Public Art & UK Civic Commissions",
  description:
    "Monumental public sculptures, site-specific murals, and civic art commissions by Amritha Jalaja Devi for UK city councils and public trusts.",
};

export default function PublicArtPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gallery-bg text-gallery-text">
      <PublicArtList projects={publicArtData} />
    </div>
  );
}

import React from "react";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { INITIAL_PUBLIC_ART_QUERY, SanityPublicArt } from "@/sanity/lib/queries";
import { PublicArtGrid } from "@/components/public-art/PublicArtGrid";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Public Art & Murals | Amritha Jalaja Devi",
  description:
    "Collaborative public murals, community art projects, and architectural heritage commissions by UK visual artist Amritha Jalaja Devi.",
};

export default async function PublicArtPage() {
  let initialData: { items: SanityPublicArt[]; totalCount: number } = {
    items: [],
    totalCount: 0,
  };

  try {
    const fetched = await client.fetch(INITIAL_PUBLIC_ART_QUERY);
    if (fetched) {
      initialData = {
        items: fetched.items || [],
        totalCount: fetched.totalCount || 0,
      };
    }
  } catch (error) {
    console.error("Error fetching public art from Sanity:", error);
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F4F0] text-[#4A2E35]">
      <section className="p-8 sm:p-12 xl:p-16 bg-[#F7F4F0] space-y-12">
        <FadeIn direction="up">
          <div className="space-y-4 pb-6 border-b border-[#E8E2DA]">
            <h1 className="font-serif text-3xl sm:text-5xl font-light uppercase text-[#4A2E35] tracking-tight">
              PUBLIC ART & MURALS
            </h1>
            <p className="text-xs sm:text-sm text-[#8A7976] font-sans font-light max-w-2xl leading-relaxed">
              Collaborative public murals, community art projects, and architectural heritage commissions bringing fine art outside gallery walls to interact directly with local communities in the UK and India.
            </p>
          </div>
        </FadeIn>

        <PublicArtGrid
          initialProjects={initialData.items}
          totalCount={initialData.totalCount}
        />
      </section>
    </div>
  );
}

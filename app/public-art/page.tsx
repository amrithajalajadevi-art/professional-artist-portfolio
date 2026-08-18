import React from "react";
import type { Metadata } from "next";
import { publicArtData } from "@/constants/publicArtData";
import { PublicArtCard } from "@/components/public-art/PublicArtCard";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Public Art & Civic Commissions",
  description:
    "Site-specific sculptures, monumental murals, and civic art commissions by London artist Amritha Jalaja Devi.",
};

export default function PublicArtPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <section className="p-8 sm:p-12 xl:p-16 bg-white space-y-8">
        <FadeIn direction="up">
          <div className="space-y-4">
            <h1 className="font-serif text-3xl sm:text-5xl font-bold uppercase text-black tracking-tight">
              PUBLIC ART
            </h1>
          </div>
        </FadeIn>

        <FadeInStagger staggerDelay={0.15}>
          <div className="space-y-6">
            {publicArtData.map((project, idx) => (
              <PublicArtCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </FadeInStagger>
      </section>
    </div>
  );
}

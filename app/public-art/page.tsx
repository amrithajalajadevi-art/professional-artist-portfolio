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
    <div className="flex flex-col min-h-screen bg-[#F7F4F0] text-[#4A2E35]">
      <section className="p-8 sm:p-12 xl:p-16 bg-[#F7F4F0] space-y-12">
        <FadeIn direction="up">
          <div className="space-y-4 pb-6 border-b border-[#E8E2DA]">
            <h1 className="font-serif text-3xl sm:text-5xl font-light uppercase text-[#4A2E35] tracking-tight">
              PUBLIC ART & CIVIC COMMISSIONS
            </h1>
            <p className="text-xs sm:text-sm text-[#8A7976] font-sans font-light max-w-2xl leading-relaxed">
              Monumental civic sculptures, architectural ceramic murals, and site-responsive public art installations commissioned across the United Kingdom and internationally.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger staggerDelay={0.15}>
          <div>
            {publicArtData.map((project, idx) => (
              <PublicArtCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </FadeInStagger>
      </section>
    </div>
  );
}

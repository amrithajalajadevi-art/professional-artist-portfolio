import React from "react";
import type { Metadata } from "next";
import { recognitionData } from "@/constants/recognitionData";
import { RecognitionItemCard } from "@/components/recognition/RecognitionItemCard";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Recognition, Awards & Honors",
  description:
    "Competitive awards, fellowships, grants, and international honors awarded to London visual artist Amritha Jalaja Devi.",
};

export default function RecognitionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-950">
      <section className="p-8 sm:p-12 xl:p-16 bg-white space-y-8">
        <FadeIn direction="up">
          <div className="space-y-4">
            <h1 className="font-serif text-3xl sm:text-5xl font-bold uppercase text-[#6A0F36] tracking-tight">
              RECOGNITION & AWARDS
            </h1>
          </div>
        </FadeIn>

        <FadeInStagger staggerDelay={0.1}>
          <div className="space-y-4">
            {recognitionData.map((item) => (
              <RecognitionItemCard key={item.id} item={item} />
            ))}
          </div>
        </FadeInStagger>
      </section>
    </div>
  );
}

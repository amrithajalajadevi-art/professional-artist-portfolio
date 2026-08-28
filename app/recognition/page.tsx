import React from "react";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { RECOGNITION_QUERY, SanityRecognitionItem } from "@/sanity/lib/queries";
import { RecognitionItemCard } from "@/components/recognition/RecognitionItemCard";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Recognition, Awards & Honors | Amritha Jalaja Devi",
  description:
    "Competitive awards, fellowships, grants, and international honors awarded to London visual artist Amritha Jalaja Devi.",
};

export default async function RecognitionPage() {
  let recognitionItems: SanityRecognitionItem[] = [];
  try {
    recognitionItems = (await client.fetch(RECOGNITION_QUERY)) || [];
  } catch (error) {
    console.error("Error fetching recognition from Sanity:", error);
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F4F0] text-[#4A2E35]">
      <section className="p-8 sm:p-12 xl:p-16 bg-[#F7F4F0] space-y-8">
        <FadeIn direction="up">
          <div className="space-y-4">
            <h1 className="font-serif text-3xl sm:text-5xl font-normal uppercase text-[#4A2E35] tracking-tight">
              RECOGNITION & AWARDS
            </h1>
          </div>
        </FadeIn>

        {recognitionItems && recognitionItems.length > 0 ? (
          <FadeInStagger staggerDelay={0.1}>
            <div className="space-y-4">
              {recognitionItems.map((item: any) => (
                <RecognitionItemCard
                  key={item._id || item.id}
                  item={item}
                />
              ))}
            </div>
          </FadeInStagger>
        ) : (
          <div className="py-12 text-center text-[#8A7976] font-sans text-xs">
            No recognition items found.
          </div>
        )}
      </section>
    </div>
  );
}

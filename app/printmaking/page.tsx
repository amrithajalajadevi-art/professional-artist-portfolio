import React from "react";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { PRINTMAKING_QUERY, SanityPrintmaking } from "@/sanity/lib/queries";
import { CustomImage } from "@/components/ui/CustomImage";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Printmaking | Amritha Jalaja Devi",
  description:
    "Etching, aquatint, drypoint, and woodcut prints exploring line, texture, tonal contrast, and the human figure by visual artist Amritha Jalaja Devi.",
};

export default async function PrintmakingPage() {
  let prints: SanityPrintmaking[] = [];

  try {
    const data = await client.fetch<SanityPrintmaking[]>(PRINTMAKING_QUERY);
    if (data) {
      prints = data;
    }
  } catch (error) {
    console.error("Error fetching printmaking works from Sanity:", error);
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F4F0] text-[#4A2E35]">
      <section className="p-8 sm:p-12 xl:p-16 bg-[#F7F4F0] space-y-12">
        {/* Header Section */}
        <FadeIn direction="up">
          <div className="space-y-6 pb-8 border-b border-[#E8E2DA] max-w-4xl">
            <h1 className="font-serif text-3xl sm:text-5xl font-light uppercase text-[#4A2E35] tracking-tight">
              PRINTMAKING
            </h1>
            <p className="text-sm sm:text-base text-[#5C4B48] font-sans font-light leading-relaxed">
              Alongside my painting practice, printmaking has been an important part of my artistic development. Working across etching, aquatint, drypoint and woodcut, I explored line, texture, tonal contrast and the human figure. These works reflect an early interest in quiet domestic moments, solitary figures and everyday human experience—concerns that continue to inform my contemporary figurative practice.
            </p>
          </div>
        </FadeIn>

        {/* Printmaking Gallery Grid */}
        <FadeInStagger staggerDelay={0.1}>
          {prints.length > 0 ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-10 lg:gap-12">
              {prints.map((item) => (
                <div
                  key={item._id}
                  className="break-inside-avoid mb-10 sm:mb-14 group relative bg-[#F7F4F0] flex flex-col space-y-3"
                >
                  {/* Dynamic Aspect Ratio Container */}
                  <div
                    className="relative w-full overflow-hidden bg-[#EFEAE4]"
                    style={
                      item.aspectRatio
                        ? { aspectRatio: item.aspectRatio }
                        : { aspectRatio: "4/3" }
                    }
                  >
                    <CustomImage
                      src={item.image || item.imageUrl}
                      lqip={item.lqip}
                      alt={item.title || "Printmaking Artwork"}
                      fill
                      hoverScale
                      objectFit="cover"
                      aspectRatio="auto"
                      quality={80}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Artwork Caption */}
                  <div className="space-y-0.5 font-sans pt-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-serif text-base text-[#4A2E35] font-light group-hover:text-[#5C4B48] transition-colors truncate">
                        {item.title}
                      </h3>
                      {item.year && (
                        <span className="text-[11px] text-[#5C4B48] font-sans font-normal flex-shrink-0">
                          {item.year}
                        </span>
                      )}
                    </div>

                    {item.medium && (
                      <p className="text-[11px] text-[#5C4B48] truncate font-sans font-normal">
                        {item.medium}
                        {item.edition ? ` — ${item.edition}` : ""}
                      </p>
                    )}

                    {item.dimensions && (
                      <p className="text-[11px] text-[#A39592] truncate font-sans font-light">
                        {item.dimensions}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-[#EFEAE4]/50 border border-[#E8E2DA] p-8">
              <p className="font-serif text-lg text-[#4A2E35] italic">
                Printmaking gallery items will appear here once published in Sanity Studio.
              </p>
            </div>
          )}
        </FadeInStagger>
      </section>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { DRAWINGS_ARTWORKS_QUERY, SanityDrawing } from "@/sanity/lib/queries";
import { CustomImage } from "@/components/ui/CustomImage";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Drawings & Paper Works | Amritha Jalaja Devi",
  description:
    "Intimate studies in charcoal, graphite, ink, and works on paper exploring gesture, human vulnerability, and domestic quietude by visual artist Amritha Jalaja Devi.",
};

export default async function DrawingsPage() {
  let drawings: SanityDrawing[] = [];

  try {
    const data = await client.fetch<SanityDrawing[]>(DRAWINGS_ARTWORKS_QUERY);
    if (data) {
      drawings = data;
    }
  } catch (error) {
    console.error("Error fetching drawings & paper works from Sanity:", error);
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F4F0] text-[#4A2E35]">
      <section className="p-8 sm:p-12 xl:p-16 bg-[#F7F4F0] space-y-12">
        {/* Header Section */}
        <FadeIn direction="up">
          <div className="space-y-6 pb-8 border-b border-[#E8E2DA] max-w-4xl">
            <h1 className="font-serif text-3xl sm:text-5xl font-light uppercase text-[#4A2E35] tracking-tight">
              DRAWINGS & PAPER WORKS
            </h1>
            <p className="text-sm sm:text-base text-[#5C4B48] font-sans font-light leading-relaxed">
              Alongside large-scale canvas works, drawing and paper works form an intimate and foundational part of my visual practice. Working across charcoal, graphite, ink, and wash on paper, these works capture fleeting gestures, delicate line work, and atmospheric studies of the human figure—exploring vulnerability, silence, and domestic quietude.
            </p>
          </div>
        </FadeIn>

        {/* Drawings Gallery Grid */}
        <FadeInStagger staggerDelay={0.1}>
          {drawings.length > 0 ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-10 lg:gap-12">
              {drawings.map((item) => {
                const itemSlug = item.slug || item.id || item._id;
                const hasTitle = Boolean(item.title?.trim());

                return (
                  <div
                    key={item._id}
                    className="break-inside-avoid mb-10 sm:mb-14 group relative bg-[#F7F4F0] flex flex-col space-y-3"
                  >
                    <Link
                      href={`/drawings/${itemSlug}`}
                      className="block space-y-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A2E35]"
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
                          alt={hasTitle ? item.title! : "Drawing & Paper Work"}
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
                            {hasTitle ? (
                              item.title
                            ) : (
                              <span className="italic text-[#8A7976]">Untitled</span>
                            )}
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
                          </p>
                        )}

                        {item.dimensions && (
                          <p className="text-[11px] text-[#A39592] truncate font-sans font-light">
                            {item.dimensions}
                          </p>
                        )}
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 bg-[#EFEAE4]/50 border border-[#E8E2DA] p-8">
              <p className="font-serif text-lg text-[#4A2E35] italic">
                Drawings & paper works gallery items will appear here once published.
              </p>
            </div>
          )}
        </FadeInStagger>
      </section>
    </div>
  );
}

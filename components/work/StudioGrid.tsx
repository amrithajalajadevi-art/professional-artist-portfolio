"use client";

import React from "react";
import Image from "next/image";
import { FadeInStagger } from "@/components/ui/FadeIn";
import { StudioWorkItem } from "@/types";

interface StudioGridProps {
  items: StudioWorkItem[];
}

export function StudioGrid({ items }: StudioGridProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="space-y-10 font-sans">
      <div className="space-y-2 border-b border-[#E8E2DA] pb-4">
        <h2 className="font-serif text-2xl sm:text-3xl text-[#4A2E35] font-light uppercase tracking-tight">
          STUDIO SETUP & IN-PROGRESS WORKS
        </h2>
        <p className="text-xs text-[#8A7976] font-sans font-light tracking-wide">
          Behind-the-scenes mold fabrication, lost-wax bronze casting, plaster studies, and clay maquettes from Amritha Jalaja Devi's London studio.
        </p>
      </div>

      <FadeInStagger staggerDelay={0.1}>
        {/* Balanced Masonry Grid for Studio Setup & Works */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-10 lg:gap-12">
          {items.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid mb-10 sm:mb-12 space-y-2.5 bg-[#F7F4F0] group"
            >
              <div className="relative w-full overflow-hidden bg-[#EFEAE4]">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title || "Studio Setup Photo"}
                    width={1600}
                    height={1600}
                    quality={95}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-auto object-cover block bg-[#EFEAE4] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="w-full h-72 bg-[#EFEAE4] flex items-center justify-center text-xs text-[#8A7976] font-sans font-light">
                    {item.title || "Studio Setup"}
                  </div>
                )}
              </div>

              <div className="space-y-0.5 text-xs text-[#8A7976] font-sans pt-1">
                <h3 className="font-serif text-sm text-[#4A2E35] font-light group-hover:text-[#8A7976] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[#A39592] font-sans font-light">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </FadeInStagger>
    </div>
  );
}

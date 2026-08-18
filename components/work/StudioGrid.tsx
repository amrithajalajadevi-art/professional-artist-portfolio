"use client";

import React from "react";
import { FadeInStagger } from "@/components/ui/FadeIn";
import { CustomImage } from "@/components/ui/CustomImage";
import { StudioWorkItem } from "@/types";

interface StudioGridProps {
  items: StudioWorkItem[];
}

export function StudioGrid({ items }: StudioGridProps) {
  return (
    <div className="space-y-8 font-sans">
      <div className="space-y-2 border-b border-zinc-100 pb-4">
        <h2 className="font-serif text-2xl sm:text-3xl text-[#6A0F36] font-bold uppercase tracking-tight">
          STUDIO SETUP & IN-PROGRESS WORKS
        </h2>
        <p className="text-xs text-zinc-500">
          Behind-the-scenes mold fabrication, lost-wax bronze casting, plaster studies, and clay maquettes from Amritha Jalaja Devi's London studio.
        </p>
      </div>

      <FadeInStagger staggerDelay={0.1}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.id} className="space-y-3 bg-white group">
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-white">
                <CustomImage
                  src={item.image}
                  alt={item.title}
                  fill
                  hoverScale
                  objectFit="cover"
                  aspectRatio="auto"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="space-y-0.5 text-xs text-zinc-500 font-sans">
                <h3 className="font-serif text-base text-zinc-950 font-normal group-hover:text-[#6A0F36] transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-400">
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

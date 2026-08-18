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
    <div className="space-y-8 font-sans">
      <div className="space-y-2 border-b border-neutral-200 pb-4">
        <h2 className="font-serif text-2xl sm:text-3xl text-neutral-900 font-normal uppercase tracking-tight">
          STUDIO SETUP & IN-PROGRESS WORKS
        </h2>
        <p className="text-xs text-neutral-500 font-sans tracking-wide">
          Behind-the-scenes mold fabrication, lost-wax bronze casting, plaster studies, and clay maquettes from Amritha Jalaja Devi's London studio.
        </p>
      </div>

      <FadeInStagger staggerDelay={0.1}>
        {/* CSS Masonry Grid for Studio Setup & Works */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid mb-8 space-y-2 bg-white group"
            >
              <div className="relative w-full overflow-hidden bg-gray-50">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title || "Studio Setup Photo"}
                    width={1200}
                    height={1200}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-auto object-contain block bg-gray-50 transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="w-full h-64 bg-gray-50 flex items-center justify-center text-xs text-neutral-400 font-sans">
                    {item.title || "Studio Setup"}
                  </div>
                )}
              </div>

              <div className="space-y-0.5 text-xs text-neutral-500 font-sans pt-1">
                <h3 className="font-serif text-base text-neutral-900 font-normal group-hover:text-neutral-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-neutral-500 font-sans">
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

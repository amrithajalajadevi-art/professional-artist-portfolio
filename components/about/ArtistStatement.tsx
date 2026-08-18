import React from "react";
import { Quote, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArtistStatementData } from "@/types";

interface ArtistStatementProps {
  data: ArtistStatementData;
}

export function ArtistStatement({ data }: ArtistStatementProps) {
  return (
    <section className="p-6 sm:p-10 xl:p-16 border-b border-gallery-border bg-gallery-bg">
      <FadeIn direction="up">
        <div className="relative bg-zinc-950 text-white p-8 sm:p-12 xl:p-16 border border-zinc-800 shadow-2xl overflow-hidden">
          {/* Subtle Graphic Watermark */}
          <Quote className="absolute -right-6 -bottom-6 w-48 h-48 text-zinc-900/60 pointer-events-none stroke-[1]" />
          
          <div className="relative z-10 space-y-8 max-w-4xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold font-sans">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{data.eyebrow}</span>
            </div>

            {/* Typography-Focused Blockquote */}
            <blockquote className="space-y-6">
              <p className="font-serif text-xl sm:text-3xl lg:text-4xl font-light text-zinc-100 leading-snug tracking-tight">
                “{data.quote}”
              </p>

              <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800 pt-6 text-xs text-zinc-400 font-sans">
                <div>
                  <cite className="not-italic font-semibold text-white block text-sm">
                    {data.author}
                  </cite>
                  <span className="text-zinc-500">{data.context}</span>
                </div>

                {/* Key Philosophical Themes */}
                <div className="flex flex-wrap gap-2">
                  {data.keyThemes.map((theme, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-[10px] uppercase tracking-wider bg-zinc-900 text-zinc-300 border border-zinc-800 rounded-xs"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

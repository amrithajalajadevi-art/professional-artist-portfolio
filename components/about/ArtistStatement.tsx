import React from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArtistStatementData } from "@/types";

interface ArtistStatementProps {
  data: ArtistStatementData;
}

export function ArtistStatement({ data }: ArtistStatementProps) {
  return (
    <section className="p-8 sm:p-12 xl:p-16 bg-white space-y-6">
      <FadeIn direction="up">
        <div className="space-y-6 max-w-4xl">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold uppercase text-black tracking-tight">
            ARTIST STATEMENT
          </h2>

          <blockquote className="space-y-4 font-serif text-xl sm:text-2xl text-zinc-900 leading-relaxed italic">
            <p>“{data.quote}”</p>
            <footer className="not-italic font-sans text-xs text-gray-500 font-normal">
              — {data.author}, <span className="italic">{data.context}</span>
            </footer>
          </blockquote>
        </div>
      </FadeIn>
    </section>
  );
}

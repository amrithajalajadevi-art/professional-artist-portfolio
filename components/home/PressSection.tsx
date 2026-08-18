import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FadeInStagger } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PressItem } from "@/types";

interface PressSectionProps {
  features: PressItem[];
}

export function PressSection({ features }: PressSectionProps) {
  return (
    <section className="p-6 sm:p-10 xl:p-16 border-b border-gallery-border bg-gallery-bg space-y-10">
      <SectionHeading
        eyebrow="04 / Press & Media Recognition"
        title="Critical Reviews & Features"
        linkHref="/press"
        linkText="View All Press Features"
      />

      {/* 2-Column Press Grid */}
      <FadeInStagger staggerDelay={0.15}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((press, idx) => (
            <div
              key={idx}
              className="bg-white border border-zinc-200/80 p-6 sm:p-8 space-y-6 flex flex-col justify-between hover:border-zinc-400 transition-all shadow-2xs"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-zinc-500 font-sans border-b border-zinc-100 pb-3">
                  <span className="font-semibold text-zinc-900 tracking-wider uppercase">
                    {press.publication}
                  </span>
                  <span className="font-mono text-zinc-400">{press.date}</span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-normal text-zinc-950 leading-snug">
                  {press.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed italic">
                  {press.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100">
                <Link
                  href={press.url}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-900 hover:text-zinc-600 transition-colors group"
                >
                  <span>{press.linkText}</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-zinc-400 group-hover:text-zinc-900" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </FadeInStagger>
    </section>
  );
}

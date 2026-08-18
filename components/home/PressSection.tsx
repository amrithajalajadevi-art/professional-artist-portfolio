import React from "react";
import Link from "next/link";
import { FadeInStagger } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PressItem } from "@/types";

interface PressSectionProps {
  features: PressItem[];
}

export function PressSection({ features }: PressSectionProps) {
  return (
    <section className="p-8 sm:p-12 xl:p-16 bg-white space-y-8">
      <SectionHeading
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
              className="bg-white space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-zinc-500 font-sans">
                  <span className="font-semibold text-zinc-900 tracking-wider uppercase">
                    {press.publication}
                  </span>
                  <span className="text-zinc-400">{press.date}</span>
                </div>

                <h3 className="font-serif text-lg text-zinc-950 font-normal leading-snug">
                  {press.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 font-sans leading-relaxed italic">
                  {press.excerpt}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href={press.url}
                  className="text-xs font-sans text-[#6A0F36] hover:underline underline-offset-4"
                >
                  {press.linkText} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </FadeInStagger>
    </section>
  );
}

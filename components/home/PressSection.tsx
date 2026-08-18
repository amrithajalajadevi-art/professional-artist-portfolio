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
    <section className="p-8 sm:p-12 xl:p-16 bg-white space-y-8 mb-12">
      <SectionHeading
        title="PRESS & MEDIA"
        linkHref="/press"
        linkText="View All Features"
      />

      <FadeInStagger staggerDelay={0.1}>
        <div className="space-y-3 font-sans text-xs sm:text-sm text-zinc-600">
          {features.map((press, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 py-2 border-b border-zinc-100 last:border-b-0"
            >
              <a
                href={press.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-zinc-950 hover:text-[#6A0F36] transition-colors"
              >
                &quot;{press.title}&quot; — <span className="font-bold">{press.publication}</span>
              </a>

              <span className="text-xs text-zinc-400 font-sans flex-shrink-0">
                {press.date}
              </span>
            </div>
          ))}
        </div>
      </FadeInStagger>
    </section>
  );
}

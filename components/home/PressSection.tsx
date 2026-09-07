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
    <section className="p-8 sm:p-12 xl:p-16 bg-[#F7F4F0] space-y-8 mb-12">
      <SectionHeading
        title="PRESS & MEDIA"
        linkHref="/press"
        linkText="View All Features"
      />

      <FadeInStagger staggerDelay={0.1}>
        <div className="space-y-3 font-sans text-xs sm:text-sm text-[#5C4B48]">
          {features.map((press, idx) => {
            const isInternal = press.url && press.url.startsWith("/");

            return (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 py-2 border-b border-[#E8E2DA] last:border-b-0"
              >
                {isInternal ? (
                  <Link
                    href={press.url}
                    className="font-medium text-[#4A2E35] hover:text-[#5C4B48] transition-colors"
                  >
                    &quot;{press.title}&quot; — <span className="font-bold">{press.publication}</span>
                  </Link>
                ) : (
                  <a
                    href={press.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#4A2E35] hover:text-[#5C4B48] transition-colors"
                  >
                    &quot;{press.title}&quot; — <span className="font-bold">{press.publication}</span>
                  </a>
                )}

                <span className="text-xs text-[#5C4B48] font-sans flex-shrink-0">
                  {press.date}
                </span>
              </div>
            );
          })}
        </div>
      </FadeInStagger>
    </section>
  );
}

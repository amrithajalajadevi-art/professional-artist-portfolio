import React from "react";
import Link from "next/link";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";

export interface HighlightedRecognitionItem {
  _id: string;
  title: string;
  awardingBody: string;
  year: string;
  status?: string;
  location?: string;
  description?: string;
  link?: string;
}

interface HighlightedRecognitionsSectionProps {
  recognitions: HighlightedRecognitionItem[];
}

export function HighlightedRecognitionsSection({
  recognitions,
}: HighlightedRecognitionsSectionProps) {
  if (!recognitions || recognitions.length === 0) return null;

  return (
    <section className="px-8 sm:px-12 xl:px-16 max-w-6xl mx-auto w-full">
      <FadeIn direction="up">
        <div className="border-b border-[#E8E2DA] pb-6 mb-8 flex justify-between items-baseline">
          <h2 className="font-serif text-2xl sm:text-3xl font-normal uppercase text-[#4A2E35] tracking-tight">
            SELECTED RECOGNITION & HONOURS
          </h2>
          <Link
            href="/recognition"
            className="font-sans text-xs uppercase tracking-[0.15em] font-medium text-[#4A2E35] hover:underline underline-offset-4"
          >
            View All →
          </Link>
        </div>
      </FadeIn>

      <FadeInStagger staggerDelay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recognitions.map((item) => (
            <div
              key={item._id}
              className="bg-[#F7F4F0] space-y-3 font-sans pb-6 border-b border-[#E8E2DA] last:border-b-0"
            >
              <div className="flex justify-between items-start text-xs uppercase tracking-[0.15em] text-[#8A7976]">
                <span>{item.awardingBody}</span>
                <span>{item.year}</span>
              </div>

              <h3 className="font-serif text-xl text-[#4A2E35] font-normal leading-snug">
                {item.title}
              </h3>

              {item.description && (
                <p className="text-xs text-[#8A7976] leading-relaxed font-light">
                  {item.description}
                </p>
              )}

              {item.link && (
                <div className="pt-1">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-[0.15em] font-medium text-[#4A2E35] hover:underline underline-offset-4"
                  >
                    Read Coverage →
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </FadeInStagger>
    </section>
  );
}

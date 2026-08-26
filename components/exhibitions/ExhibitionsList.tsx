import React from "react";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { ExhibitionCard } from "@/components/exhibitions/ExhibitionCard";
import { SanityExhibition } from "@/sanity/lib/queries";
import { ExhibitionProject } from "@/types";

interface ExhibitionsListProps {
  title?: string;
  subtitle?: string;
  exhibitions: (ExhibitionProject | SanityExhibition)[];
}

export function ExhibitionsList({
  title = "EXHIBITIONS",
  subtitle = "UPCOMING & ONGOING EXHIBITIONS",
  exhibitions,
}: ExhibitionsListProps) {
  return (
    <section className="p-8 sm:p-12 xl:p-16 bg-[#F7F4F0] space-y-8">
      {/* Header & Title */}
      <FadeIn direction="up">
        <div className="space-y-4 border-b border-[#E8E2DA] pb-6">
          <h1 className="font-serif text-3xl sm:text-5xl font-normal uppercase text-[#4A2E35] tracking-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-xs sm:text-sm text-[#8A7976] font-sans font-light tracking-wide max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </FadeIn>

      {/* Exhibitions List Container */}
      {exhibitions && exhibitions.length > 0 ? (
        <FadeInStagger staggerDelay={0.15}>
          <div className="space-y-6">
            {exhibitions.map((exhibition: any) => (
              <ExhibitionCard
                key={exhibition._id || exhibition.id || exhibition.slug}
                exhibition={{
                  id: exhibition.id || exhibition._id || "",
                  title: exhibition.title,
                  subtitle: exhibition.subtitle || "",
                  slug: exhibition.slug || exhibition.id || "",
                  date: exhibition.date || exhibition.year || "",
                  year: exhibition.year || "",
                  status: exhibition.status || "Past",
                  venue: exhibition.venue,
                  city: exhibition.city,
                  country: exhibition.country,
                  role: exhibition.role || "Featured Artist",
                  description: exhibition.description || "",
                  coverImage: exhibition.coverImage || exhibition.images?.[0] || "",
                  externalLink: exhibition.externalLink,
                }}
              />
            ))}
          </div>
        </FadeInStagger>
      ) : (
        <div className="py-12 text-center text-[#8A7976] font-sans text-xs">
          No exhibitions found.
        </div>
      )}
    </section>
  );
}

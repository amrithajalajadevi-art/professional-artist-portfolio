import React from "react";
import Link from "next/link";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { WorkshopPageData, UpcomingWorkshop } from "@/sanity/lib/queries";

interface WorkshopsViewProps {
  data?: WorkshopPageData | null;
}

export function WorkshopsView({ data }: WorkshopsViewProps) {
  const titleText = data?.title || "ART CLASSES & WORKSHOPS";
  const subtitleText = data?.subtitle;
  const workshops: UpcomingWorkshop[] = data?.upcomingWorkshops || [];

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F4F0] text-[#4A2E35]">
      <section className="p-8 sm:p-12 xl:p-16 bg-[#F7F4F0] space-y-12 max-w-6xl mx-auto w-full">
        {/* Dynamic Header & Subtitle */}
        <FadeIn direction="up">
          <div className="space-y-4 border-b border-[#E8E2DA] pb-6">
            <h1 className="font-serif text-3xl sm:text-5xl font-normal uppercase text-[#4A2E35] tracking-tight">
              {titleText}
            </h1>
            {subtitleText && (
              <p className="text-sm text-[#8A7976] font-sans max-w-2xl leading-relaxed">
                {subtitleText}
              </p>
            )}
          </div>
        </FadeIn>

        {/* Minimalist Text-Driven List */}
        {workshops.length > 0 && (
          <FadeInStagger staggerDelay={0.1}>
            <div className="space-y-10">
              {workshops.map((workshop, idx) => {
                const linkHref =
                  workshop.registrationLink ||
                  `/contact?subject=${encodeURIComponent(
                    workshop.workshopTitle || "Workshop Inquiry"
                  )}`;

                return (
                  <div
                    key={`${workshop.workshopTitle}-${idx}`}
                    className="space-y-3 font-sans pb-8 border-b border-[#E8E2DA] last:border-b-0"
                  >
                    {/* Meta: Date & Location in uppercase tracking */}
                    {(workshop.date || workshop.location) && (
                      <p className="text-xs uppercase tracking-[0.15em] font-medium text-[#8A7976]">
                        {workshop.date}
                        {workshop.date && workshop.location ? " — " : ""}
                        {workshop.location}
                      </p>
                    )}

                    {/* Title */}
                    {workshop.workshopTitle && (
                      <h2 className="font-serif text-xl sm:text-2xl text-[#4A2E35] font-normal leading-snug">
                        {workshop.workshopTitle}
                      </h2>
                    )}

                    {/* Description */}
                    {workshop.description && (
                      <p className="text-xs sm:text-sm text-[#8A7976] leading-relaxed max-w-2xl font-light">
                        {workshop.description}
                      </p>
                    )}

                    {/* Action or Fully Booked state */}
                    <div className="pt-2">
                      {workshop.isFullyBooked ? (
                        <span className="text-xs uppercase tracking-[0.15em] font-medium text-[#8A7976]">
                          FULLY BOOKED
                        </span>
                      ) : (
                        <Link
                          href={linkHref}
                          className="text-xs uppercase tracking-[0.15em] font-medium text-[#4A2E35] hover:underline underline-offset-4 transition-colors"
                        >
                          Register / Inquire →
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeInStagger>
        )}
      </section>
    </div>
  );
}




import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import {
  EXHIBITION_BY_SLUG_QUERY,
  SanityExhibitionDetail,
} from "@/sanity/lib/queries";
import { CustomImage } from "@/components/ui/CustomImage";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { exhibitionsData } from "@/constants/exhibitionsData";

interface DynamicExhibitionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: DynamicExhibitionPageProps): Promise<Metadata> {
  const { slug } = await params;
  let exhibition: SanityExhibitionDetail | null = null;
  try {
    exhibition = await client.fetch(EXHIBITION_BY_SLUG_QUERY, { slug });
  } catch (error) {
    // Silent catch
  }

  if (!exhibition) {
    const mock = exhibitionsData.find((e) => e.slug === slug || e.id === slug);
    if (mock) {
      return {
        title: `${mock.title} | Amritha Jalaja Devi`,
        description: mock.description,
      };
    }
    return { title: "Exhibition Not Found" };
  }

  return {
    title: `${exhibition.title} | Amritha Jalaja Devi`,
    description:
      exhibition.description ||
      `${exhibition.title} exhibition at ${exhibition.venue}.`,
  };
}

export default async function ExhibitionDetailPage({
  params,
}: DynamicExhibitionPageProps) {
  const { slug } = await params;

  // Fetch exhibition details from Sanity
  let exhibition: SanityExhibitionDetail | null = null;
  try {
    exhibition = await client.fetch(EXHIBITION_BY_SLUG_QUERY, { slug });
  } catch (error) {
    console.error("Error fetching exhibition by slug:", error);
  }

  // Fallback to static data if not found in Sanity
  if (!exhibition) {
    const mock = exhibitionsData.find((e) => e.slug === slug || e.id === slug);
    if (mock) {
      const mockImages = [
        mock.coverImage,
        ...(mock.galleryImages || []),
      ]
        .filter(Boolean)
        .map((url) => ({ url, aspectRatio: 4 / 3 }));

      exhibition = {
        _id: mock.id,
        id: mock.id,
        title: mock.title,
        subtitle: mock.subtitle,
        slug: mock.slug,
        date: mock.date,
        year: mock.year,
        venue: mock.venue,
        city: mock.city,
        country: mock.country,
        role: mock.role,
        description: mock.description,
        externalLink: mock.externalLink,
        images: mockImages,
      };
    }
  }

  if (!exhibition) {
    notFound();
  }

  // Single line editorial metadata (e.g. Venue, City, Country • Year)
  const metaParts = [
    exhibition.venue,
    [exhibition.city, exhibition.country].filter(Boolean).join(", "),
    exhibition.year,
  ].filter(Boolean);

  const editorialSubheader = metaParts.join(" • ");

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F4F0] text-[#4A2E35] p-8 sm:p-12 xl:p-16 space-y-12 sm:space-y-16">
      {/* Navigation Back Link */}
      <FadeIn direction="up">
        <Link
          href="/exhibitions"
          className="inline-flex items-center gap-2 text-xs font-sans text-[#8A7976] hover:text-[#4A2E35] transition-colors tracking-widest uppercase"
        >
          &larr; Back to All Exhibitions
        </Link>
      </FadeIn>

      {/* Editorial Header (No Hardcoded Labels) */}
      <FadeIn direction="up" delay={0.1}>
        <div className="space-y-4 border-b border-[#EFEAE4] pb-8 max-w-4xl">
          <h1 className="font-serif text-2xl sm:text-4xl text-[#4A2E35] font-light tracking-tight leading-snug">
            {exhibition.title}
          </h1>

          {exhibition.subtitle && (
            <p className="text-sm sm:text-base text-[#8A7976] font-serif font-light italic">
              {exhibition.subtitle}
            </p>
          )}

          <p className="text-xs sm:text-sm text-[#8A7976] uppercase tracking-widest font-sans font-light">
            {editorialSubheader}
          </p>

          {exhibition.externalLink && (
            <div className="pt-2">
              <a
                href={exhibition.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs uppercase tracking-[0.2em] text-[#4A2E35] font-sans font-light border-b border-[#4A2E35] pb-0.5 hover:text-[#8A7976] hover:border-[#8A7976] transition-colors"
              >
                Official Exhibition Link &rarr;
              </a>
            </div>
          )}
        </div>
      </FadeIn>

      {/* Curatorial Description (No Heading Label) */}
      {exhibition.description && (
        <FadeIn direction="up" delay={0.2}>
          <div className="max-w-3xl space-y-4">
            <p className="text-sm sm:text-base text-[#8A7976] font-sans font-light leading-relaxed tracking-wide whitespace-pre-wrap">
              {exhibition.description}
            </p>
          </div>
        </FadeIn>
      )}

      {/* Single Photography Gallery Array with Dynamic Aspect Ratio */}
      {exhibition.images && exhibition.images.length > 0 && (
        <section className="pt-8 border-t border-[#EFEAE4]">
          <FadeInStagger staggerDelay={0.15}>
            <div className="space-y-12 sm:space-y-16">
              {exhibition.images.map((img, idx) => (
                <div key={idx} className="space-y-3 max-w-5xl mx-auto">
                  {/* Dynamic Aspect Ratio Container */}
                  <div
                    className="relative w-full overflow-hidden bg-[#EFEAE4]"
                    style={
                      img.aspectRatio
                        ? { aspectRatio: img.aspectRatio }
                        : { aspectRatio: "16/9" }
                    }
                  >
                    <CustomImage
                      src={img.url}
                      alt={img.alt || `${exhibition.title} image ${idx + 1}`}
                      fill
                      priority={idx === 0}
                      hoverScale
                      objectFit="contain"
                      aspectRatio="auto"
                      sizes="(max-width: 1200px) 100vw, 80vw"
                    />
                  </div>

                  {/* Minimalist Caption */}
                  {img.caption && (
                    <p className="text-xs font-sans font-light italic text-[#8A7976] text-right">
                      {img.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </FadeInStagger>
        </section>
      )}
    </div>
  );
}

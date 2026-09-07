import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import {
  ARTWORK_BY_SLUG_QUERY,
  SanityArtworkDetail,
} from "@/sanity/lib/queries";
import { CustomImage } from "@/components/ui/CustomImage";
import { FadeIn } from "@/components/ui/FadeIn";

interface DynamicArtworkPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: DynamicArtworkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const artwork: SanityArtworkDetail | null = await client.fetch(
    ARTWORK_BY_SLUG_QUERY,
    { slug }
  );

  if (!artwork) {
    return {
      title: "Artwork Not Found",
    };
  }

  return {
    title: `${artwork.title} (${artwork.year}) | Amritha Jalaja Devi`,
    description:
      artwork.description ||
      `${artwork.title} - ${artwork.medium}, ${artwork.year} by Amritha Jalaja Devi.`,
  };
}

export default async function ArtworkDetailPage({
  params,
}: DynamicArtworkPageProps) {
  const { slug } = await params;

  // 1. Data Fetching via Centralized GROQ Query
  const artwork: SanityArtworkDetail | null = await client.fetch(
    ARTWORK_BY_SLUG_QUERY,
    { slug }
  );

  // 404 Handling
  if (!artwork) {
    notFound();
  }

  const mainImage = artwork.images?.[0];
  const inquirySubject = encodeURIComponent(`Inquiry: ${artwork.title}`);

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F4F0] text-[#4A2E35] p-8 sm:p-12 xl:p-16 space-y-12">
      {/* Navigation Back Link */}
      <FadeIn direction="up">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-sans text-[#8A7976] hover:text-[#4A2E35] transition-colors tracking-widest uppercase"
        >
          &larr; Back to Selected Works
        </Link>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Side: 3. Dynamic Main Image preserving original aspect ratio */}
        <div className="lg:col-span-7 space-y-6">
          <FadeIn direction="up" delay={0.1}>
            <div
              className="relative w-full overflow-hidden bg-[#EFEAE4]"
              style={
                mainImage?.aspectRatio
                  ? { aspectRatio: mainImage.aspectRatio }
                  : { aspectRatio: "4/3" }
              }
            >
              <CustomImage
                src={mainImage}
                alt={artwork.title}
                fill
                priority
                hoverScale
                objectFit="contain"
                aspectRatio="auto"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </FadeIn>

          {/* Additional Gallery Detail Views */}
          {artwork.images && artwork.images.length > 1 && (
            <div className="grid grid-cols-2 gap-4 pt-4">
              {artwork.images.slice(1).map((img, idx) => (
                <div
                  key={idx}
                  className="relative w-full overflow-hidden bg-[#EFEAE4]"
                  style={
                    img.aspectRatio
                      ? { aspectRatio: img.aspectRatio }
                      : { aspectRatio: "4/3" }
                  }
                >
                  <CustomImage
                    src={img}
                    alt={`${artwork.title} detail view ${idx + 2}`}
                    fill
                    hoverScale
                    objectFit="cover"
                    aspectRatio="auto"
                    sizes="33vw"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: 2. Aesthetic Typography & Artwork Details */}
        <div className="lg:col-span-5 space-y-8 lg:pl-4">
          {/* Header Title */}
          <FadeIn direction="up" delay={0.2}>
            <div className="space-y-3 border-b border-[#EFEAE4] pb-6">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#8A7976] font-sans font-light">
                {artwork.category || "Artwork"}
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl text-[#4A2E35] font-light tracking-tight leading-snug">
                {artwork.title}
              </h1>
            </div>
          </FadeIn>

          {/* Minimalist Specs List */}
          <FadeIn direction="up" delay={0.3}>
            <dl className="space-y-1 text-xs sm:text-sm font-sans font-light tracking-wide text-[#8A7976]">
              <div className="grid grid-cols-[120px_1fr] gap-4 items-baseline py-2.5 border-b border-[#EFEAE4]">
                <dt className="text-[#4A2E35] font-normal uppercase text-[11px] tracking-widest">Year</dt>
                <dd className="text-[#8A7976] text-right break-words">{artwork.year}</dd>
              </div>

              <div className="grid grid-cols-[120px_1fr] gap-4 items-baseline py-2.5 border-b border-[#EFEAE4]">
                <dt className="text-[#4A2E35] font-normal uppercase text-[11px] tracking-widest">Medium</dt>
                <dd className="text-[#8A7976] text-right break-words">{artwork.medium}</dd>
              </div>

              {artwork.dimensions && (
                <div className="grid grid-cols-[120px_1fr] gap-4 items-baseline py-2.5 border-b border-[#EFEAE4]">
                  <dt className="text-[#4A2E35] font-normal uppercase text-[11px] tracking-widest">Dimensions</dt>
                  <dd className="text-[#8A7976] text-right break-words">{artwork.dimensions}</dd>
                </div>
              )}

              {artwork.location && (
                <div className="grid grid-cols-[120px_1fr] gap-4 items-baseline py-2.5 border-b border-[#EFEAE4]">
                  <dt className="text-[#4A2E35] font-normal uppercase text-[11px] tracking-widest">Collection</dt>
                  <dd className="text-[#8A7976] text-right break-words">{artwork.location}</dd>
                </div>
              )}
            </dl>
          </FadeIn>

          {/* Description Paragraph */}
          {artwork.description && (
            <FadeIn direction="up" delay={0.4}>
              <div className="space-y-2">
                <h3 className="text-[11px] uppercase tracking-[0.2em] text-[#4A2E35] font-sans font-normal">
                  About the Work
                </h3>
                <p className="text-xs sm:text-sm text-[#8A7976] font-sans font-light leading-relaxed tracking-wide whitespace-pre-wrap">
                  {artwork.description}
                </p>
              </div>
            </FadeIn>
          )}

          {/* 4. Elegant Inquiry Link */}
          <FadeIn direction="up" delay={0.5}>
            <div className="pt-6 border-t border-[#EFEAE4]">
              <Link
                href={`/contact?subject=${inquirySubject}`}
                className="inline-block text-xs uppercase tracking-[0.2em] text-[#4A2E35] font-sans font-light border-b border-[#4A2E35] pb-1 hover:text-[#8A7976] hover:border-[#8A7976] transition-colors"
              >
                Inquire about this work &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import {
  DRAWING_BY_SLUG_QUERY,
  SanityArtworkDetail,
} from "@/sanity/lib/queries";
import { CustomImage } from "@/components/ui/CustomImage";
import { FadeIn } from "@/components/ui/FadeIn";

interface DynamicDrawingPageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export async function generateMetadata({
  params,
}: DynamicDrawingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const drawing: SanityArtworkDetail | null = await client.fetch(
    DRAWING_BY_SLUG_QUERY,
    { slug }
  );

  if (!drawing) {
    return {
      title: "Drawing Not Found",
    };
  }

  const displayTitle = drawing.title?.trim() || "Untitled";
  const yearSuffix = drawing.year ? ` (${drawing.year})` : "";

  return {
    title: `${displayTitle}${yearSuffix} | Drawings & Paper Works | Amritha Jalaja Devi`,
    description:
      drawing.description ||
      `${displayTitle}${drawing.medium ? ` - ${drawing.medium}` : ""}${drawing.year ? `, ${drawing.year}` : ""} by visual artist Amritha Jalaja Devi.`,
  };
}

export default async function DrawingDetailPage({
  params,
}: DynamicDrawingPageProps) {
  const { slug } = await params;

  // Data Fetching via Centralized GROQ Query
  const drawing: SanityArtworkDetail | null = await client.fetch(
    DRAWING_BY_SLUG_QUERY,
    { slug }
  );

  // 404 Handling
  if (!drawing) {
    notFound();
  }

  const hasTitle = Boolean(drawing.title?.trim());
  const displayTitle = hasTitle ? drawing.title! : "Untitled";
  const mainImage = drawing.images?.[0];
  const inquirySubject = encodeURIComponent(
    `Inquiry: ${hasTitle ? drawing.title : `Untitled (${drawing.medium || "Drawing"}, ${drawing.year || ""})`}`
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F4F0] text-[#4A2E35] p-8 sm:p-12 xl:p-16 space-y-12">
      {/* Navigation Back Link */}
      <FadeIn direction="up">
        <Link
          href="/drawings"
          className="inline-flex items-center gap-2 text-xs font-sans text-[#8A7976] hover:text-[#4A2E35] transition-colors tracking-widest uppercase"
        >
          &larr; Back to Drawings & Paper Works
        </Link>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Side: Dynamic Main Image preserving original aspect ratio */}
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
                alt={displayTitle}
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
          {drawing.images && drawing.images.length > 1 && (
            <div className="grid grid-cols-2 gap-4 pt-4">
              {drawing.images.slice(1).map((img, idx) => (
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
                    alt={`${displayTitle} detail view ${idx + 2}`}
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

        {/* Right Side: Typography & Artwork Details */}
        <div className="lg:col-span-5 space-y-8 lg:pl-4">
          {/* Header Title */}
          <FadeIn direction="up" delay={0.2}>
            <div className="space-y-3 border-b border-[#EFEAE4] pb-6">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#8A7976] font-sans font-light">
                Drawings & Paper Works
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl text-[#4A2E35] font-light tracking-tight leading-snug">
                {hasTitle ? (
                  drawing.title
                ) : (
                  <span className="italic text-[#6B5559]">Untitled</span>
                )}
              </h1>
            </div>
          </FadeIn>

          {/* Minimalist Specs List */}
          <FadeIn direction="up" delay={0.3}>
            <dl className="space-y-1 text-xs sm:text-sm font-sans font-light tracking-wide text-[#8A7976]">
              {drawing.year && (
                <div className="grid grid-cols-[120px_1fr] gap-4 items-baseline py-2.5 border-b border-[#EFEAE4]">
                  <dt className="text-[#4A2E35] font-normal uppercase text-[11px] tracking-widest">Year</dt>
                  <dd className="text-[#8A7976] text-right break-words">{drawing.year}</dd>
                </div>
              )}

              {drawing.medium && (
                <div className="grid grid-cols-[120px_1fr] gap-4 items-baseline py-2.5 border-b border-[#EFEAE4]">
                  <dt className="text-[#4A2E35] font-normal uppercase text-[11px] tracking-widest">Medium</dt>
                  <dd className="text-[#8A7976] text-right break-words">{drawing.medium}</dd>
                </div>
              )}

              {drawing.dimensions && (
                <div className="grid grid-cols-[120px_1fr] gap-4 items-baseline py-2.5 border-b border-[#EFEAE4]">
                  <dt className="text-[#4A2E35] font-normal uppercase text-[11px] tracking-widest">Dimensions</dt>
                  <dd className="text-[#8A7976] text-right break-words">{drawing.dimensions}</dd>
                </div>
              )}

              {drawing.location && (
                <div className="grid grid-cols-[120px_1fr] gap-4 items-baseline py-2.5 border-b border-[#EFEAE4]">
                  <dt className="text-[#4A2E35] font-normal uppercase text-[11px] tracking-widest">Collection</dt>
                  <dd className="text-[#8A7976] text-right break-words">{drawing.location}</dd>
                </div>
              )}
            </dl>
          </FadeIn>

          {/* Description Paragraph */}
          {drawing.description && (
            <FadeIn direction="up" delay={0.4}>
              <div className="space-y-2">
                <h3 className="text-[11px] uppercase tracking-[0.2em] text-[#4A2E35] font-sans font-normal">
                  About the Work
                </h3>
                <p className="text-xs sm:text-sm text-[#8A7976] font-sans font-light leading-relaxed tracking-wide whitespace-pre-wrap">
                  {drawing.description}
                </p>
              </div>
            </FadeIn>
          )}

          {/* Elegant Inquiry Link */}
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

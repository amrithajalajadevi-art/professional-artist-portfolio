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

  // Fetch artwork data by slug using centralized GROQ query
  const artwork: SanityArtworkDetail | null = await client.fetch(
    ARTWORK_BY_SLUG_QUERY,
    { slug }
  );

  // Return notFound() if no artwork document is found
  if (!artwork) {
    notFound();
  }

  const mainImage = artwork.images?.[0];

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F4F0] text-[#4A2E35] p-8 sm:p-12 xl:p-16 space-y-12">
      {/* Navigation Back Link */}
      <FadeIn direction="up">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-sans text-[#8A7976] hover:text-[#4A2E35] transition-colors tracking-wide uppercase"
        >
          &larr; Back to Selected Works
        </Link>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Main Artwork Image with Dynamic Aspect Ratio */}
        <div className="lg:col-span-7 space-y-6">
          <FadeIn direction="up" delay={0.1}>
            <div
              className="relative w-full overflow-hidden bg-[#F7F4F0]"
              style={
                mainImage?.aspectRatio
                  ? { aspectRatio: mainImage.aspectRatio }
                  : { aspectRatio: "4/3" }
              }
            >
              <CustomImage
                src={mainImage?.url}
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

          {/* Additional Gallery Images */}
          {artwork.images && artwork.images.length > 1 && (
            <div className="grid grid-cols-2 gap-4 pt-4">
              {artwork.images.slice(1).map((img, idx) => (
                <div
                  key={idx}
                  className="relative w-full overflow-hidden bg-[#F7F4F0]"
                  style={
                    img.aspectRatio
                      ? { aspectRatio: img.aspectRatio }
                      : { aspectRatio: "4/3" }
                  }
                >
                  <CustomImage
                    src={img.url}
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

        {/* Right Side: Artwork Details */}
        <div className="lg:col-span-5 space-y-8 lg:pl-4">
          <FadeIn direction="up" delay={0.2}>
            <div className="space-y-4 border-b border-[#EFEAE4] pb-6">
              <span className="text-xs uppercase tracking-widest text-[#8A7976] font-sans">
                {artwork.category || "Artwork"}
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl text-[#4A2E35] font-normal tracking-tight">
                {artwork.title}
              </h1>
            </div>
          </FadeIn>

          {/* Specifications List */}
          <FadeIn direction="up" delay={0.3}>
            <dl className="space-y-4 text-sm font-sans text-[#8A7976]">
              <div className="flex justify-between py-2 border-b border-[#EFEAE4]">
                <dt className="text-[#4A2E35]">Year</dt>
                <dd>{artwork.year}</dd>
              </div>

              <div className="flex justify-between py-2 border-b border-[#EFEAE4]">
                <dt className="text-[#4A2E35]">Medium</dt>
                <dd>{artwork.medium}</dd>
              </div>

              {artwork.dimensions && (
                <div className="flex justify-between py-2 border-b border-[#EFEAE4]">
                  <dt className="text-[#4A2E35]">Dimensions / Scale</dt>
                  <dd>{artwork.dimensions}</dd>
                </div>
              )}

              {artwork.location && (
                <div className="flex justify-between py-2 border-b border-[#EFEAE4]">
                  <dt className="text-[#4A2E35]">Location / Collection</dt>
                  <dd>{artwork.location}</dd>
                </div>
              )}
            </dl>
          </FadeIn>

          {/* Description */}
          {artwork.description && (
            <FadeIn direction="up" delay={0.4}>
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-widest text-[#4A2E35] font-sans">
                  About the Work
                </h3>
                <p className="text-sm sm:text-base text-[#8A7976] font-sans leading-relaxed whitespace-pre-wrap">
                  {artwork.description}
                </p>
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import {
  PRINTMAKING_BY_SLUG_QUERY,
  SanityPrintmaking,
} from "@/sanity/lib/queries";
import { CustomImage } from "@/components/ui/CustomImage";
import { FadeIn } from "@/components/ui/FadeIn";

interface DynamicPrintmakingPageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export async function generateMetadata({
  params,
}: DynamicPrintmakingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const printItem: SanityPrintmaking | null = await client.fetch(
    PRINTMAKING_BY_SLUG_QUERY,
    { slug }
  );

  if (!printItem) {
    return {
      title: "Print Not Found",
    };
  }

  const displayTitle = printItem.title?.trim() || "Untitled Print";
  const yearSuffix = printItem.year ? ` (${printItem.year})` : "";

  return {
    title: `${displayTitle}${yearSuffix} | Printmaking | Amritha Jalaja Devi`,
    description:
      printItem.description ||
      `${displayTitle}${printItem.medium ? ` - ${printItem.medium}` : ""}${printItem.year ? `, ${printItem.year}` : ""} by visual artist Amritha Jalaja Devi.`,
  };
}

export default async function PrintmakingDetailPage({
  params,
}: DynamicPrintmakingPageProps) {
  const { slug } = await params;

  // Fetch printmaking document
  const printItem: SanityPrintmaking | null = await client.fetch(
    PRINTMAKING_BY_SLUG_QUERY,
    { slug }
  );

  // 404 Handling
  if (!printItem) {
    notFound();
  }

  const hasTitle = Boolean(printItem.title?.trim());
  const displayTitle = hasTitle ? printItem.title! : "Untitled Print";
  const mainImage = printItem.image || printItem.imageUrl;
  const inquirySubject = encodeURIComponent(
    `Inquiry: ${hasTitle ? printItem.title : `Untitled (${printItem.medium || "Print"}, ${printItem.year || ""})`}`
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F4F0] text-[#4A2E35] p-8 sm:p-12 xl:p-16 space-y-12">
      {/* Navigation Back Link */}
      <FadeIn direction="up">
        <Link
          href="/printmaking"
          className="inline-flex items-center gap-2 text-xs font-sans text-[#8A7976] hover:text-[#4A2E35] transition-colors tracking-widest uppercase"
        >
          &larr; Back to Printmaking & Graphics
        </Link>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Side: Dynamic Main Image preserving original aspect ratio */}
        <div className="lg:col-span-7 space-y-6">
          <FadeIn direction="up" delay={0.1}>
            <div
              className="relative w-full overflow-hidden bg-[#EFEAE4]"
              style={
                printItem.aspectRatio
                  ? { aspectRatio: printItem.aspectRatio }
                  : { aspectRatio: "4/3" }
              }
            >
              <CustomImage
                src={mainImage}
                lqip={printItem.lqip}
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
        </div>

        {/* Right Side: Typography & Specs */}
        <div className="lg:col-span-5 space-y-8 lg:pl-4">
          {/* Header Title */}
          <FadeIn direction="up" delay={0.2}>
            <div className="space-y-3 border-b border-[#EFEAE4] pb-6">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#8A7976] font-sans font-light">
                Printmaking & Graphics
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl text-[#4A2E35] font-light tracking-tight leading-snug">
                {hasTitle ? (
                  printItem.title
                ) : (
                  <span className="italic text-[#6B5559]">Untitled</span>
                )}
              </h1>
            </div>
          </FadeIn>

          {/* Minimalist Specs List */}
          <FadeIn direction="up" delay={0.3}>
            <dl className="space-y-1 text-xs sm:text-sm font-sans font-light tracking-wide text-[#8A7976]">
              {printItem.year && (
                <div className="grid grid-cols-[120px_1fr] gap-4 items-baseline py-2.5 border-b border-[#EFEAE4]">
                  <dt className="text-[#4A2E35] font-normal uppercase text-[11px] tracking-widest">Year</dt>
                  <dd className="text-[#8A7976] text-right break-words">{printItem.year}</dd>
                </div>
              )}

              {printItem.medium && (
                <div className="grid grid-cols-[120px_1fr] gap-4 items-baseline py-2.5 border-b border-[#EFEAE4]">
                  <dt className="text-[#4A2E35] font-normal uppercase text-[11px] tracking-widest">Medium / Technique</dt>
                  <dd className="text-[#8A7976] text-right break-words">{printItem.medium}</dd>
                </div>
              )}

              {printItem.edition && (
                <div className="grid grid-cols-[120px_1fr] gap-4 items-baseline py-2.5 border-b border-[#EFEAE4]">
                  <dt className="text-[#4A2E35] font-normal uppercase text-[11px] tracking-widest">Edition</dt>
                  <dd className="text-[#8A7976] text-right break-words">{printItem.edition}</dd>
                </div>
              )}

              {printItem.dimensions && (
                <div className="grid grid-cols-[120px_1fr] gap-4 items-baseline py-2.5 border-b border-[#EFEAE4]">
                  <dt className="text-[#4A2E35] font-normal uppercase text-[11px] tracking-widest">Dimensions</dt>
                  <dd className="text-[#8A7976] text-right break-words">{printItem.dimensions}</dd>
                </div>
              )}
            </dl>
          </FadeIn>

          {/* Description Paragraph */}
          {printItem.description && (
            <FadeIn direction="up" delay={0.4}>
              <div className="space-y-2">
                <h3 className="text-[11px] uppercase tracking-[0.2em] text-[#4A2E35] font-sans font-normal">
                  About the Work
                </h3>
                <p className="text-xs sm:text-sm text-[#8A7976] font-sans font-light leading-relaxed tracking-wide whitespace-pre-wrap">
                  {printItem.description}
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
                Inquire about this print &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

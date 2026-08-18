import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { exhibitionsData } from "@/constants/exhibitionsData";
import { CustomImage } from "@/components/ui/CustomImage";
import { FadeIn } from "@/components/ui/FadeIn";

interface DynamicExhibitionProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return exhibitionsData.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: DynamicExhibitionProps): Promise<Metadata> {
  const resolvedParams = await params;
  const item = exhibitionsData.find((ex) => ex.slug === resolvedParams.slug);

  if (!item) {
    return {
      title: "Exhibition Not Found",
    };
  }

  return {
    title: item.title,
    description: item.description,
    openGraph: {
      title: `${item.title} | Amritha Jalaja Devi`,
      description: item.description,
      images: [{ url: item.coverImage }],
    },
  };
}

export default async function SingleExhibitionPage({ params }: DynamicExhibitionProps) {
  const resolvedParams = await params;
  const exhibition = exhibitionsData.find((ex) => ex.slug === resolvedParams.slug);

  if (!exhibition) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <section className="p-8 sm:p-12 xl:p-16 bg-white space-y-8">
        {/* Back Link Header */}
        <FadeIn direction="down">
          <div>
            <Link
              href="/exhibitions"
              className="text-xs uppercase tracking-widest font-sans font-medium text-black hover:underline underline-offset-4"
            >
              ← Back to Exhibitions
            </Link>
          </div>
        </FadeIn>

        {/* Title & Metadata */}
        <FadeIn direction="up">
          <div className="space-y-3 max-w-4xl">
            <h1 className="font-serif text-3xl sm:text-5xl font-bold uppercase text-black tracking-tight">
              {exhibition.title}
            </h1>
            <p className="text-sm text-gray-500 font-sans">
              <span className="font-semibold text-black">{exhibition.date}</span> — {exhibition.venue} ({exhibition.city}, {exhibition.country}) | Role: {exhibition.role}
            </p>
          </div>
        </FadeIn>

        {/* Hero Cover Image View */}
        <FadeIn direction="up" delay={0.2}>
          <div className="relative w-full aspect-[16/9] overflow-hidden bg-white">
            <CustomImage
              src={exhibition.coverImage}
              alt={exhibition.title}
              fill
              priority
              aspectRatio="auto"
              sizes="(max-width: 1200px) 100vw, 80vw"
            />
          </div>
        </FadeIn>

        {/* Description */}
        <div className="max-w-3xl space-y-6 pt-4 font-sans text-sm sm:text-base text-gray-500 leading-relaxed">
          <p className="whitespace-pre-line">
            {exhibition.description}
          </p>

          {exhibition.externalLink && (
            <div className="pt-4">
              <a
                href={exhibition.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest font-medium text-black hover:underline underline-offset-4"
              >
                Official Venue Page ↗
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

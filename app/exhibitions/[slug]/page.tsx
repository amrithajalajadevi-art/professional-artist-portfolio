import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink, Calendar, MapPin, Award, Sparkles } from "lucide-react";
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
    <div className="flex flex-col min-h-screen bg-gallery-bg text-gallery-text">
      <section className="p-6 sm:p-10 xl:p-16 border-b border-gallery-border bg-white space-y-10">
        {/* Back Link Header */}
        <FadeIn direction="down">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
            <Link
              href="/exhibitions"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-600 hover:text-zinc-950 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Exhibitions & Projects</span>
            </Link>
            <span className="text-xs font-mono text-zinc-400">{exhibition.year}</span>
          </div>
        </FadeIn>

        {/* Title & Role Metadata */}
        <FadeIn direction="up">
          <div className="space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold bg-zinc-950 text-white border border-zinc-800">
                Role: {exhibition.role}
              </span>
              <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold bg-zinc-100 text-zinc-800 border border-zinc-200">
                {exhibition.status}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl text-zinc-950 font-normal leading-tight">
              {exhibition.title}
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
              {exhibition.subtitle}
            </p>
          </div>
        </FadeIn>

        {/* Hero Cover Image View */}
        <FadeIn direction="up" delay={0.2}>
          <div className="relative w-full aspect-[16/9] overflow-hidden border border-zinc-200 shadow-md bg-zinc-100">
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

        {/* Venue, Date, Curator & Official Link Bar */}
        <FadeIn direction="up" delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 bg-gallery-bg border border-zinc-200 text-xs">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 block font-sans">
                Venue
              </span>
              <span className="font-medium text-zinc-900 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                {exhibition.venue}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 block font-sans">
                Dates
              </span>
              <span className="font-medium text-zinc-900 flex items-center gap-1.5 font-mono">
                <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                {exhibition.date}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 block font-sans">
                Location
              </span>
              <span className="font-medium text-zinc-900">
                {exhibition.city}, {exhibition.country}
              </span>
            </div>

            {exhibition.externalLink && (
              <div className="space-y-1 flex flex-col justify-end">
                <a
                  href={exhibition.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-zinc-950 text-white text-[11px] font-semibold uppercase tracking-wider hover:bg-zinc-800 transition-colors"
                >
                  <span>Official Venue Link</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        </FadeIn>

        {/* Description & Curatorial Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-serif text-2xl text-zinc-950 font-normal">
              Exhibition Overview
            </h2>
            <p className="text-sm sm:text-base text-zinc-700 font-light leading-relaxed whitespace-pre-line">
              {exhibition.description}
            </p>
          </div>

          <div className="lg:col-span-4 space-y-6">
            {exhibition.highlights && (
              <div className="p-6 bg-white border border-zinc-200/80 space-y-4 shadow-2xs">
                <h3 className="text-xs uppercase tracking-widest font-semibold text-zinc-900 border-b border-zinc-100 pb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  Key Highlights & Evidence
                </h3>
                <ul className="space-y-2.5">
                  {exhibition.highlights.map((item, idx) => (
                    <li key={idx} className="text-xs text-zinc-600 leading-normal flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

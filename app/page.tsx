import React from "react";
import { client } from "@/sanity/lib/client";
import {
  HOME_PAGE_QUERY,
  SanityHomePageData,
  SanityHeroSection,
} from "@/sanity/lib/queries";
import { HeroSection } from "@/components/home/HeroSection";
import { KeyProjectsSection } from "@/components/home/KeyProjectsSection";
import { HighlightedRecognitionsSection } from "@/components/home/HighlightedRecognitionsSection";
import { PressSection } from "@/components/home/PressSection";
import { PressItem, Project } from "@/types";

// Enable Incremental Static Revalidation (ISR) every 60 seconds
export const revalidate = 60;

export default async function Home() {
  const sanityHomePage: SanityHomePageData | null = await client.fetch(
    HOME_PAGE_QUERY,
    {},
    { next: { revalidate: 60 } }
  );

  // Key projects rendered directly from HOME_PAGE_QUERY single source of truth
  const projects: Project[] = (sanityHomePage?.keyProjects || []).map((p) => ({
    id: p.id,
    title: p.title,
    year: p.year,
    medium: p.medium,
    image: p.image || p.imageUrl || undefined,
    imageUrl: p.imageUrl || p.image || undefined,
    slug: p.slug || undefined,
    aspectRatio: p.aspectRatio || undefined,
  }));

  const heroData: SanityHeroSection = sanityHomePage?.heroSection || {
    headline: sanityHomePage?.hero?.headline || "",
    heroType: "reference",
    projectReference: {
      title: sanityHomePage?.hero?.featuredArtwork?.title || "",
      year: sanityHomePage?.hero?.featuredArtwork?.year || "",
      medium: sanityHomePage?.hero?.featuredArtwork?.medium || "",
      dimensions: sanityHomePage?.hero?.featuredArtwork?.dimensions || "",
      location: sanityHomePage?.hero?.featuredArtwork?.location || "",
      imageUrl:
        sanityHomePage?.hero?.featuredArtwork?.imageUrl ||
        sanityHomePage?.hero?.featuredArtwork?.image ||
        "",
    },
  };

  const highlightedRecognitions = sanityHomePage?.highlightedRecognitions || [];
  const pressFeatures: PressItem[] = (sanityHomePage?.highlightedPress || []).map((item) => ({
    publication: item.publication,
    date: item.date,
    title: item.title,
    url: item.url,
    excerpt: item.excerpt,
  }));

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F4F0] text-[#4A2E35] space-y-16">
      {/* 1. High-Impact Hero Artwork View */}
      <HeroSection data={heroData} />

      {/* 2. Highlighted Recognitions / Awards (rendered if items exist) */}
      <HighlightedRecognitionsSection recognitions={highlightedRecognitions} />

      {/* 3. Portfolio Grid strictly from Sanity */}
      <KeyProjectsSection projects={projects} />

      {/* 4. Clean Press & Media List strictly from Sanity (rendered if highlighted items exist) */}
      {pressFeatures.length > 0 && <PressSection features={pressFeatures} />}
    </div>
  );
}



import React from "react";
import { client } from "@/sanity/lib/client";
import {
  HOME_PAGE_QUERY,
  SanityHomePageData,
} from "@/sanity/lib/queries";
import { HeroSection } from "@/components/home/HeroSection";
import { KeyProjectsSection } from "@/components/home/KeyProjectsSection";
import { PressSection } from "@/components/home/PressSection";
import { Project } from "@/types";

export default async function Home() {
  const sanityHomePage: SanityHomePageData | null = await client.fetch(
    HOME_PAGE_QUERY
  );

  // Key projects rendered directly from HOME_PAGE_QUERY single source of truth
  const projects: Project[] = (sanityHomePage?.keyProjects || []).map((p) => ({
    id: p.id,
    title: p.title,
    year: p.year,
    medium: p.medium,
    imageUrl: p.imageUrl || p.image || undefined,
    slug: p.slug || undefined,
    aspectRatio: p.aspectRatio || undefined,
  }));

  const heroData = {
    headline: sanityHomePage?.hero?.headline || "",
    featuredArtwork: {
      title: sanityHomePage?.hero?.featuredArtwork?.title || "",
      year: sanityHomePage?.hero?.featuredArtwork?.year || "",
      medium: sanityHomePage?.hero?.featuredArtwork?.medium || "",
      dimensions: sanityHomePage?.hero?.featuredArtwork?.dimensions || "",
      location: sanityHomePage?.hero?.featuredArtwork?.location || "",
      image:
        sanityHomePage?.hero?.featuredArtwork?.imageUrl ||
        sanityHomePage?.hero?.featuredArtwork?.image ||
        "",
    },
  };

  const pressFeatures = sanityHomePage?.pressFeatures || [];

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F4F0] text-[#4A2E35] space-y-16">
      {/* 1. High-Impact Hero Artwork View */}
      <HeroSection data={heroData} />

      {/* 2. Portfolio Grid strictly from Sanity */}
      <KeyProjectsSection projects={projects} />

      {/* 3. Clean Press & Media List strictly from Sanity */}
      <PressSection features={pressFeatures} />
    </div>
  );
}

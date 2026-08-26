import React from "react";
import { client } from "@/sanity/lib/client";
import {
  HOME_PAGE_ARTWORKS_QUERY,
  SanityFeaturedArtwork,
} from "@/sanity/lib/queries";
import { homePageData } from "@/constants/homeData";
import { HeroSection } from "@/components/home/HeroSection";
import { KeyProjectsSection } from "@/components/home/KeyProjectsSection";
import { PressSection } from "@/components/home/PressSection";
import { Project } from "@/types";

export default async function Home() {
  let sanityArtworks: SanityFeaturedArtwork[] = [];

  try {
    sanityArtworks = await client.fetch(HOME_PAGE_ARTWORKS_QUERY);
  } catch (error) {
    console.error("Error fetching projects from Sanity:", error);
  }

  // Transform typed Sanity items to Project interface for UI component
  const fetchedProjects: Project[] = (sanityArtworks || []).map((item) => ({
    id: item.id || item._id,
    title: item.title,
    year: item.year,
    medium: item.medium,
    imageUrl: item.imageUrl || undefined,
    slug: item.slug || undefined,
    aspectRatio: item.aspectRatio || undefined,
  }));

  // Fallback to static mock constants if Sanity dataset is empty during setup
  const displayProjects =
    fetchedProjects.length > 0 ? fetchedProjects : homePageData.keyProjects;

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F4F0] text-[#4A2E35] space-y-16">
      {/* 1. High-Impact Hero Artwork View */}
      <HeroSection data={homePageData.hero} />

      {/* 2. Minimalist Large Image Portfolio Grid */}
      <KeyProjectsSection projects={displayProjects} />

      {/* 3. Clean Press & Media List */}
      <PressSection features={homePageData.pressFeatures} />
    </div>
  );
}

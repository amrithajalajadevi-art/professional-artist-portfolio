import React from "react";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { ALL_ARTWORKS_QUERY, SanityArtwork } from "@/sanity/lib/queries";
import { categoryOptions, normalizeCategorySlug } from "@/constants/workData";
import { WorkGallery } from "@/components/work/WorkGallery";
import { Artwork } from "@/types";

export const metadata: Metadata = {
  title: "Selected Works & Gallery",
  description:
    "Curated art portfolio of visual artist Amritha Jalaja Devi featuring figurative oil paintings, public murals, drawings, and rest series.",
};

interface WorkPageProps {
  searchParams?: Promise<{ category?: string }>;
}

export default async function WorkPage({ searchParams }: WorkPageProps) {
  const params = await searchParams;
  const initialCategory = normalizeCategorySlug(params?.category);

  let sanityArtworks: SanityArtwork[] = [];
  try {
    sanityArtworks = (await client.fetch(ALL_ARTWORKS_QUERY)) || [];
  } catch (error) {
    console.error("Error fetching artworks from Sanity:", error);
  }

  // Map Sanity records to Artwork interface
  const displayArtworks: Artwork[] = sanityArtworks.map((item) => ({
    id: item.id || item._id,
    title: item.title,
    category: (item.category as any) || "recent",
    categoryLabel: item.category || "Selected Work",
    medium: item.medium,
    year: item.year,
    dimensions: item.dimensions,
    location: item.location,
    imageUrl: item.imageUrl || undefined,
    image: item.imageUrl || "",
    aspectRatio: item.aspectRatio || undefined,
    description: item.description,
  }));

  return (
    <div className="flex flex-col min-h-screen bg-gallery-bg text-gallery-text">
      <WorkGallery
        artworks={displayArtworks}
        categories={categoryOptions}
        initialCategory={initialCategory}
      />
    </div>
  );
}

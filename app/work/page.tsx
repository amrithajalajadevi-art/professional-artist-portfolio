import React from "react";
import type { Metadata } from "next";
import { artworksData, categoryOptions, normalizeCategorySlug } from "@/constants/workData";
import { WorkGallery } from "@/components/work/WorkGallery";

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

  return (
    <div className="flex flex-col min-h-screen bg-gallery-bg text-gallery-text">
      <WorkGallery
        artworks={artworksData}
        categories={categoryOptions}
        initialCategory={initialCategory}
      />
    </div>
  );
}

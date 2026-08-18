import React from "react";
import type { Metadata } from "next";
import { artworksData, categoryOptions } from "@/constants/workData";
import { WorkGallery } from "@/components/work/WorkGallery";
import { CategorySlug } from "@/types";

export const metadata: Metadata = {
  title: "Selected Works & Sculptural Gallery",
  description:
    "Curated art portfolio of Amritha Jalaja Devi featuring bronze sculptures, ceramics, UK commissions, and oil paintings.",
};

interface WorkPageProps {
  searchParams?: Promise<{ category?: string }>;
}

export default async function WorkPage({ searchParams }: WorkPageProps) {
  const params = await searchParams;
  const categoryParam = (params?.category || "all") as CategorySlug;

  const validCategories: CategorySlug[] = ["all", "series", "recent", "commissions", "public-art"];
  const initialCategory = validCategories.includes(categoryParam) ? categoryParam : "all";

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

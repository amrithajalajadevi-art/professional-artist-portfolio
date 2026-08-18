"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { CategoryFilter } from "@/components/work/CategoryFilter";
import { ArtworkCard } from "@/components/work/ArtworkCard";
import { ArtworkModal } from "@/components/work/ArtworkModal";
import { normalizeCategorySlug } from "@/constants/workData";
import { Artwork, CategoryFilterOption, CategorySlug } from "@/types";

interface WorkGalleryProps {
  artworks: Artwork[];
  categories: CategoryFilterOption[];
  initialCategory?: CategorySlug;
}

function WorkGalleryContent({
  artworks,
  categories,
  initialCategory = "all",
}: WorkGalleryProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [activeCategory, setActiveCategory] = useState<CategorySlug>(initialCategory);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  // Synchronize activeCategory whenever searchParams change in the URL
  useEffect(() => {
    const categoryParam = searchParams ? searchParams.get("category") : null;
    const normalized = normalizeCategorySlug(categoryParam || undefined);
    setActiveCategory(normalized);
  }, [searchParams]);

  // When selecting a category tab, update state and URL search params
  const handleSelectCategory = (slug: CategorySlug) => {
    setActiveCategory(slug);
    if (slug === "all") {
      router.push("/work", { scroll: false });
    } else {
      router.push(`/work?category=${slug}`, { scroll: false });
    }
  };

  // Filter artworks based on activeCategory
  const filteredArtworks = useMemo(() => {
    if (activeCategory === "all") return artworks;
    return artworks.filter((item) => item.category === activeCategory);
  }, [artworks, activeCategory]);

  return (
    <section className="p-6 sm:p-10 xl:p-16 border-b border-gallery-border bg-white space-y-10">
      {/* Header Eyebrow & Title */}
      <FadeIn direction="up">
        <div className="space-y-4 border-b border-zinc-200 pb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold font-sans">
              01 / Curated Artworks & Commissions
            </p>
            <span className="text-xs font-mono text-zinc-400">
              Showing {filteredArtworks.length} of {artworks.length} Works
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-zinc-950 font-normal leading-tight max-w-3xl">
            Selected Works & Sculptural Commissions
          </h1>
          <p className="text-sm text-zinc-600 font-light max-w-2xl">
            A curated portfolio spanning bronze sculptures, glazed ceramics, UK civic public art commissions, and monumental oil canvases.
          </p>

          {/* Category Filter Tabs */}
          <div className="pt-4">
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onSelectCategory={handleSelectCategory}
            />
          </div>
        </div>
      </FadeIn>

      {/* Artworks Grid: 1 Col Mobile, 2 Col Tablet, 3-4 Col Desktop */}
      {filteredArtworks.length > 0 ? (
        <FadeInStagger key={activeCategory} staggerDelay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredArtworks.map((artwork) => (
              <ArtworkCard
                key={artwork.id}
                artwork={artwork}
                onSelect={(item) => setSelectedArtwork(item)}
              />
            ))}
          </div>
        </FadeInStagger>
      ) : (
        <div className="py-16 text-center text-zinc-500 font-sans space-y-2">
          <p className="text-sm font-medium">No artworks found in this category.</p>
          <button
            type="button"
            onClick={() => handleSelectCategory("all")}
            className="text-xs text-zinc-950 font-semibold uppercase tracking-widest underline underline-offset-4 cursor-pointer"
          >
            View All Curated Works
          </button>
        </div>
      )}

      {/* Artwork Modal Detail View */}
      <ArtworkModal
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />
    </section>
  );
}

export function WorkGallery(props: WorkGalleryProps) {
  return (
    <Suspense
      fallback={
        <div className="p-6 sm:p-10 xl:p-16 space-y-8 animate-pulse bg-white">
          <div className="h-4 w-48 bg-zinc-200" />
          <div className="h-10 w-3/4 bg-zinc-200" />
          <div className="h-12 w-full bg-zinc-100" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="aspect-[4/3] bg-zinc-200" />
            ))}
          </div>
        </div>
      }
    >
      <WorkGalleryContent {...props} />
    </Suspense>
  );
}

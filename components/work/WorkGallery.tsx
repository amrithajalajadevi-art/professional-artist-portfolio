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

  useEffect(() => {
    const categoryParam = searchParams ? searchParams.get("category") : null;
    const normalized = normalizeCategorySlug(categoryParam || undefined);
    setActiveCategory(normalized);
  }, [searchParams]);

  const handleSelectCategory = (slug: CategorySlug) => {
    setActiveCategory(slug);
    if (slug === "all") {
      router.push("/work", { scroll: false });
    } else {
      router.push(`/work?category=${slug}`, { scroll: false });
    }
  };

  const filteredArtworks = useMemo(() => {
    if (activeCategory === "all") return artworks;
    return artworks.filter((item) => item.category === activeCategory);
  }, [artworks, activeCategory]);

  return (
    <section className="p-8 sm:p-12 xl:p-16 bg-white space-y-8">
      {/* Header & Filter Bar */}
      <FadeIn direction="up">
        <div className="space-y-6">
          <h1 className="font-serif text-3xl sm:text-5xl font-bold uppercase text-[#6A0F36] tracking-tight">
            WORK
          </h1>

          {/* Category Filter Tabs */}
          <div>
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onSelectCategory={handleSelectCategory}
            />
          </div>
        </div>
      </FadeIn>

      {/* Artworks Grid */}
      {filteredArtworks.length > 0 ? (
        <FadeInStagger key={activeCategory} staggerDelay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
          <p className="text-sm">No artworks found in this category.</p>
          <button
            type="button"
            onClick={() => handleSelectCategory("all")}
            className="text-xs text-[#6A0F36] font-medium uppercase tracking-widest underline underline-offset-4 cursor-pointer"
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
        <div className="p-8 sm:p-12 xl:p-16 space-y-8 animate-pulse bg-white">
          <div className="h-10 w-48 bg-zinc-200" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
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

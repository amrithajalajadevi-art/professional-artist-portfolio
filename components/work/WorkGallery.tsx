"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import dynamic from "next/dynamic";
import { CategoryFilter } from "@/components/work/CategoryFilter";
import { ArtworkCard } from "@/components/work/ArtworkCard";
import { StudioGrid } from "@/components/work/StudioGrid";

const ArtworkModal = dynamic(
  () => import("@/components/work/ArtworkModal").then((mod) => mod.ArtworkModal),
  { ssr: false }
);
import { loadMoreArtworks } from "@/actions/fetchPaginatedData";
import { normalizeCategorySlug, studioWorksData } from "@/constants/workData";
import { Artwork, CategoryFilterOption, CategorySlug } from "@/types";

interface WorkGalleryProps {
  artworks: Artwork[];
  totalCount?: number;
  categories: CategoryFilterOption[];
  initialCategory?: CategorySlug;
}

function WorkGalleryContent({
  artworks: initialArtworks,
  totalCount = initialArtworks.length,
  categories,
  initialCategory = "all",
}: WorkGalleryProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [allArtworks, setAllArtworks] = useState<Artwork[]>(initialArtworks);
  const [activeCategory, setActiveCategory] = useState<CategorySlug>(initialCategory);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [loadingMore, setLoadingMore] = useState(false);

  // Dynamic hasMore check strictly comparing current artworks count against totalCount
  const hasMore = useMemo(() => {
    return allArtworks.length < totalCount;
  }, [allArtworks.length, totalCount]);

  useEffect(() => {
    setAllArtworks(initialArtworks);
  }, [initialArtworks]);

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

  const handleLoadMore = async () => {
    if (loadingMore || !hasMore) return;
    setLoadingMore(true);
    const start = allArtworks.length;
    const { items } = await loadMoreArtworks(start, 12);
    setAllArtworks((prev) => [...prev, ...items]);
    setLoadingMore(false);
  };

  const filteredArtworks = useMemo(() => {
    if (activeCategory === "all") return allArtworks;
    return allArtworks.filter((item) => item.category === activeCategory);
  }, [allArtworks, activeCategory]);

  return (
    <section className="p-8 sm:p-12 xl:p-16 bg-[#F7F4F0] space-y-12">
      {/* Header & Category Sub-Navigation */}
      <FadeIn direction="up">
        <div className="space-y-6">
          <h1 className="font-serif text-3xl sm:text-5xl font-light uppercase text-[#4A2E35] tracking-tight">
            WORK
          </h1>

          {/* Minimalist Sub-Navigation Tabs */}
          <div>
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onSelectCategory={handleSelectCategory}
            />
          </div>
        </div>
      </FadeIn>

      {/* Main Content Area */}
      {activeCategory === "studio" ? (
        <FadeIn direction="up">
          <StudioGrid items={studioWorksData} />
        </FadeIn>
      ) : (
        <div className="space-y-16">
          {/* Curated Artworks Grid: Grand 2-Column Layout */}
          {filteredArtworks.length > 0 ? (
            <div className="space-y-12">
              <FadeInStagger key={activeCategory} staggerDelay={0.1}>
                <div className="columns-1 md:columns-2 gap-12 lg:gap-16">
                  {filteredArtworks.map((artwork) => (
                    <ArtworkCard
                      key={artwork.id}
                      artwork={artwork}
                      onSelect={(item) => setSelectedArtwork(item)}
                    />
                  ))}
                </div>
              </FadeInStagger>

              {/* Load More Button: Displayed strictly when allArtworks.length < totalCount */}
              {hasMore && activeCategory === "all" && (
                <div className="flex justify-center pt-8">
                  <button
                    type="button"
                    onClick={handleLoadMore}
                    disabled={loadingMore}
                    className="text-xs uppercase tracking-[0.15em] font-semibold text-[#4A2E35] border border-[#4A2E35]/30 px-8 py-3.5 hover:bg-[#4A2E35] hover:text-[#F7F4F0] transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {loadingMore ? "Loading Works..." : "Load More Works →"}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="py-16 text-center text-[#8A7976] font-sans space-y-2">
              <p className="text-xs font-sans tracking-wide">No artworks found in this category.</p>
              <button
                type="button"
                onClick={() => handleSelectCategory("all")}
                className="text-xs text-[#4A2E35] font-medium uppercase tracking-[0.15em] underline underline-offset-4 cursor-pointer"
              >
                View All Curated Works
              </button>
            </div>
          )}

          {/* Distinct Studio & In-Progress Section when viewing All */}
          {activeCategory === "all" && (
            <FadeIn direction="up">
              <div className="pt-16 border-t border-[#E8E2DA]">
                <StudioGrid items={studioWorksData} />
              </div>
            </FadeIn>
          )}
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
        <div className="p-8 sm:p-12 xl:p-16 space-y-8 animate-pulse bg-[#F7F4F0]">
          <div className="h-10 w-48 bg-[#EFEAE4]" />
          <div className="columns-1 md:columns-2 gap-12 lg:gap-16 pt-4">
            {[1, 2].map((n) => (
              <div key={n} className="aspect-[3/4] bg-[#EFEAE4] mb-8" />
            ))}
          </div>
        </div>
      }
    >
      <WorkGalleryContent {...props} />
    </Suspense>
  );
}

"use client";

import React, { useState } from "react";
import { SanityPublicArt } from "@/sanity/lib/queries";
import { PublicArtCard } from "./PublicArtCard";
import { fetchMorePublicArt } from "@/actions/fetchPaginatedData";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { PublicArtProject } from "@/types";

interface PublicArtGridProps {
  initialProjects: SanityPublicArt[];
}

export function PublicArtGrid({ initialProjects }: PublicArtGridProps) {
  const [projects, setProjects] = useState<SanityPublicArt[]>(initialProjects);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(initialProjects.length >= 12);

  const handleLoadMore = async () => {
    if (loadingMore || !hasMore) return;
    setLoadingMore(true);
    const start = projects.length;
    const { items: newItems, hasMore: moreAvailable } = await fetchMorePublicArt(start, 12);
    
    // Map PublicArtProject to SanityPublicArt shape
    const formattedItems: SanityPublicArt[] = newItems.map((item) => ({
      _id: item.id,
      id: item.id,
      title: item.title,
      slug: item.slug,
      medium: item.medium,
      location: item.location,
      city: item.city,
      country: item.country,
      year: item.year,
      commissioningBody: item.commissioningBody,
      dimensions: item.dimensions,
      impactMetric: item.impactMetric,
      description: item.description,
      externalLink: item.externalLink,
      images: (item.galleryImages || []).map((imgUrl) => ({
        url: imgUrl,
        alt: item.title,
      })),
    }));

    setProjects((prev) => [...prev, ...formattedItems]);
    setHasMore(moreAvailable);
    setLoadingMore(false);
  };

  return (
    <div className="space-y-12">
      {projects && projects.length > 0 ? (
        <div className="space-y-12">
          <FadeInStagger staggerDelay={0.15}>
            <div>
              {projects.map((project, idx) => (
                <PublicArtCard
                  key={project._id || project.id || idx}
                  project={project}
                  index={idx}
                />
              ))}
            </div>
          </FadeInStagger>

          {/* Load More Button */}
          {hasMore && (
            <div className="flex justify-center pt-8">
              <button
                type="button"
                onClick={handleLoadMore}
                disabled={loadingMore}
                className="text-xs uppercase tracking-[0.15em] font-semibold text-[#4A2E35] border border-[#4A2E35]/30 px-8 py-3.5 hover:bg-[#4A2E35] hover:text-[#F7F4F0] transition-colors cursor-pointer disabled:opacity-50"
              >
                {loadingMore ? "Loading Projects..." : "Load More Projects →"}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="py-12 text-center text-[#8A7976] font-sans text-xs">
          No public art projects found.
        </div>
      )}
    </div>
  );
}

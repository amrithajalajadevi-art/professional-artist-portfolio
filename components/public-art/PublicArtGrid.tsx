"use client";

import React, { useState, useMemo, useEffect } from "react";
import { SanityPublicArt } from "@/sanity/lib/queries";
import { PublicArtCard } from "./PublicArtCard";
import { loadMorePublicArt } from "@/actions/fetchPaginatedData";
import { FadeInStagger } from "@/components/ui/FadeIn";

interface PublicArtGridProps {
  initialProjects: SanityPublicArt[];
  totalCount?: number;
}

export function PublicArtGrid({
  initialProjects,
  totalCount = initialProjects.length,
}: PublicArtGridProps) {
  const [projects, setProjects] = useState<SanityPublicArt[]>(initialProjects);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    setProjects(initialProjects);
  }, [initialProjects]);

  // Dynamic hasMore check comparing projects.length against totalCount
  const hasMore = useMemo(() => {
    return projects.length < totalCount;
  }, [projects.length, totalCount]);

  const handleLoadMore = async () => {
    if (loadingMore || !hasMore) return;
    setLoadingMore(true);
    const start = projects.length; // Pass current length as start index
    const { items: newItems } = await loadMorePublicArt(start, 12);

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

          {/* Load More Button: Displays ONLY if projects.length < totalCount */}
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

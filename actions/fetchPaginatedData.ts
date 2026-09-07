"use server";

import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Artwork, PublicArtProject } from "@/types";

const BATCH_SIZE = 12;

// GROQ query for paginated artworks with parameterized slice operator and LQIP
const PAGINATED_ARTWORKS_QUERY = groq`
  *[_type == "artwork"] | order(year desc) [$start...$end] {
    "_id": _id,
    "id": coalesce(slug.current, _id),
    title,
    category,
    medium,
    year,
    dimensions,
    location,
    "image": images[0] {
      asset,
      crop,
      hotspot
    },
    "imageUrl": images[0].asset->url,
    "lqip": images[0].asset->metadata.lqip,
    "aspectRatio": images[0].asset->metadata.dimensions.aspectRatio,
    description
  }
`;

// GROQ query for paginated public art projects with parameterized slice operator and LQIP
const PAGINATED_PUBLIC_ART_QUERY = groq`
  *[_type == "publicArt"] | order(year desc) [$start...$end] {
    "_id": _id,
    "id": coalesce(slug.current, _id),
    title,
    "slug": slug.current,
    medium,
    location,
    city,
    country,
    year,
    commissioningBody,
    dimensions,
    impactMetric,
    description,
    externalLink,
    "images": images[] {
      asset,
      crop,
      hotspot,
      "url": asset->url,
      "lqip": asset->metadata.lqip,
      alt,
      caption,
      "aspectRatio": asset->metadata.dimensions.aspectRatio
    }
  }
`;

/**
 * Server Action to fetch the next batch of artworks given a start index
 */
export async function fetchMoreArtworks(
  start: number,
  limit: number = BATCH_SIZE
): Promise<{ items: Artwork[]; hasMore: boolean }> {
  const end = start + limit;
  try {
    const rawItems: any[] = await client.fetch(PAGINATED_ARTWORKS_QUERY, {
      start,
      end,
    });

    const items: Artwork[] = (rawItems || []).map((item) => ({
      id: item.id || item._id,
      title: item.title,
      category: item.category || "recent",
      categoryLabel: item.category || "Selected Work",
      medium: item.medium,
      year: item.year,
      dimensions: item.dimensions,
      location: item.location,
      imageUrl: item.imageUrl || undefined,
      image: item.image || item.imageUrl || "",
      lqip: item.lqip || undefined,
      aspectRatio: item.aspectRatio || undefined,
      description: item.description,
    }));

    return {
      items,
      hasMore: items.length === limit,
    };
  } catch (error) {
    console.error("Error fetching paginated artworks:", error);
    return { items: [], hasMore: false };
  }
}

// Alias for loadMoreArtworks
export const loadMoreArtworks = fetchMoreArtworks;

/**
 * Server Action to fetch the next batch of public art projects given a start index
 */
export async function fetchMorePublicArt(
  start: number,
  limit: number = BATCH_SIZE
): Promise<{ items: PublicArtProject[]; hasMore: boolean }> {
  const end = start + limit;
  try {
    const rawItems: any[] = await client.fetch(PAGINATED_PUBLIC_ART_QUERY, {
      start,
      end,
    });

    const items: PublicArtProject[] = (rawItems || []).map((item) => ({
      id: item.id || item._id,
      title: item.title,
      slug: item.slug || item.id,
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
      coverImage: item.images?.[0] || item.images?.[0]?.url || "",
      galleryImages: (item.images || []).map((img: any) => img.url),
    }));

    return {
      items,
      hasMore: items.length === limit,
    };
  } catch (error) {
    console.error("Error fetching paginated public art projects:", error);
    return { items: [], hasMore: false };
  }
}

export const loadMorePublicArt = fetchMorePublicArt;

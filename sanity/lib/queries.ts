import { groq } from 'next-sanity'

// Response TypeScript interface for Featured Artwork Query
export interface SanityFeaturedArtwork {
  _id: string;
  id: string;
  title: string;
  slug: string | null;
  medium: string;
  year: string;
  imageUrl: string | null;
  aspectRatio: number | null;
}

/**
 * Centralized GROQ Query: Home Page Featured Artworks & Projects
 * Fetches title, slug, medium, year, image CDN URL, and dynamic metadata aspect ratio
 */
export const HOME_PAGE_ARTWORKS_QUERY = groq`
  *[_type == "artwork" && featured == true] {
    "_id": _id,
    "id": coalesce(slug.current, _id),
    title,
    "slug": slug.current,
    medium,
    year,
    "imageUrl": images[0].asset->url,
    "aspectRatio": images[0].asset->metadata.dimensions.aspectRatio
  }
`

/**
 * Centralized GROQ Query: All Artworks Gallery
 */
export const ALL_ARTWORKS_QUERY = groq`
  *[_type == "artwork"] | order(year desc) {
    "_id": _id,
    "id": coalesce(slug.current, _id),
    title,
    category,
    medium,
    year,
    dimensions,
    location,
    "imageUrl": images[0].asset->url,
    "aspectRatio": images[0].asset->metadata.dimensions.aspectRatio,
    description
  }
`

/**
 * Centralized GROQ Query: Public Art Projects
 */
export const PUBLIC_ART_PROJECTS_QUERY = groq`
  *[_type == "publicArt"] | order(year desc) {
    "_id": _id,
    "id": coalesce(slug.current, _id),
    title,
    medium,
    location,
    city,
    country,
    year,
    commissioningBody,
    description,
    "coverImage": images[0].asset->url,
    "galleryImages": images[].asset->url,
    dimensions,
    impactMetric,
    externalLink
  }
`

/**
 * Centralized GROQ Query: Exhibitions
 */
export const EXHIBITIONS_QUERY = groq`
  *[_type == "exhibition"] | order(year desc) {
    "_id": _id,
    "id": coalesce(slug.current, _id),
    "slug": slug.current,
    title,
    subtitle,
    date,
    year,
    status,
    venue,
    city,
    country,
    role,
    curator,
    description,
    "coverImage": images[0].asset->url,
    "galleryImages": images[].asset->url,
    externalLink,
    highlights
  }
`

/**
 * Centralized GROQ Query: Press & Media Features
 */
export const PRESS_ARTICLES_QUERY = groq`
  *[_type == "press"] | order(date desc) {
    "_id": _id,
    "id": coalesce(slug.current, _id),
    "articleTitle": title,
    publicationName,
    date,
    category,
    author,
    excerpt,
    "coverImage": images[0].asset->url,
    externalLink
  }
`

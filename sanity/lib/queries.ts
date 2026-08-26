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

// Response TypeScript interface for All Artworks Query
export interface SanityArtwork {
  _id: string;
  id: string;
  title: string;
  category: string;
  medium: string;
  year: string;
  dimensions?: string;
  location?: string;
  imageUrl: string | null;
  aspectRatio: number | null;
  description?: string;
}

export interface SanityHomePageData {
  hero?: {
    headline: string;
    featuredArtwork?: {
      title: string;
      year: string;
      medium: string;
      dimensions?: string;
      location?: string;
      imageUrl?: string;
      image?: string;
    };
  };
  keyProjects?: {
    id: string;
    title: string;
    slug?: string;
    subtitle?: string;
    year: string;
    medium: string;
    location?: string;
    imageUrl?: string;
    image?: string;
    aspectRatio?: number;
    description?: string;
  }[];
  pressFeatures?: {
    publication: string;
    date: string;
    title: string;
    excerpt: string;
    linkText: string;
    url: string;
  }[];
}

/**
 * Centralized GROQ Query: Home Page Complete Document
 * Fetches hero, featured hero artwork, key projects with metadata aspect ratio, and press features
 */
export const HOME_PAGE_QUERY = groq`
  *[_type == "homePage"][0] {
    hero {
      headline,
      featuredArtwork {
        title,
        year,
        medium,
        dimensions,
        location,
        "imageUrl": image.asset->url,
        "image": image.asset->url
      }
    },
    keyProjects[] {
      "id": coalesce(slug.current, title),
      title,
      "slug": slug.current,
      subtitle,
      year,
      medium,
      location,
      "imageUrl": image.asset->url,
      "image": image.asset->url,
      "aspectRatio": image.asset->metadata.dimensions.aspectRatio,
      description
    },
    pressFeatures[] {
      publication,
      date,
      title,
      excerpt,
      linkText,
      url
    }
  }
`

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

// Response TypeScript interface for About Page Query
export interface SanityAboutPage {
  biography?: {
    heading?: string;
    portraitUrl?: string;
    portraitAlt?: string;
    portraitCaption?: string;
    aspectRatio?: number;
    paragraphs?: string[];
    quickFacts?: { label: string; value: string }[];
  };
  statement?: {
    quote?: string;
    author?: string;
    context?: string;
    keyThemes?: string[];
  };
  education?: {
    year: string;
    degree: string;
    institution: string;
    location: string;
    honors?: string;
  }[];
  affiliations?: {
    role: string;
    organization: string;
    years: string;
    details?: string;
  }[];
}

/**
 * Centralized GROQ Query: About Page Data
 * Fetches biography, portrait image with CDN URL & metadata aspect ratio, artist statement, education, and affiliations
 */
export const ABOUT_PAGE_QUERY = groq`
  *[_type == "about"][0] {
    biography {
      heading,
      "portraitUrl": portraitImage.asset->url,
      "portraitAlt": portraitImage.alt,
      "portraitCaption": portraitImage.caption,
      "aspectRatio": portraitImage.asset->metadata.dimensions.aspectRatio,
      paragraphs,
      quickFacts
    },
    statement {
      quote,
      author,
      context,
      keyThemes
    },
    education,
    affiliations
  }
`

// Response TypeScript interface for Single Artwork Detail Query
export interface SanityArtworkDetail {
  _id: string;
  id: string;
  title: string;
  category: string;
  medium: string;
  year: string;
  dimensions?: string;
  location?: string;
  description?: string;
  images?: {
    url: string;
    aspectRatio?: number;
  }[];
}

/**
 * Centralized GROQ Query: Single Artwork by Slug
 * Accepts $slug parameter and fetches single artwork document with mapped images array containing asset URL and metadata aspect ratio
 */
export const ARTWORK_BY_SLUG_QUERY = groq`
  *[_type == "artwork" && slug.current == $slug][0] {
    "_id": _id,
    "id": coalesce(slug.current, _id),
    title,
    category,
    medium,
    year,
    dimensions,
    location,
    description,
    "images": images[] {
      "url": asset->url,
      "aspectRatio": asset->metadata.dimensions.aspectRatio
    }
  }
`

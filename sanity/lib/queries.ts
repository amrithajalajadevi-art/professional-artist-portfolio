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
 * Fetches hero, dynamically featured artworks (where featured == true), and press features
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
        "imageUrl": image.asset->url
      }
    },
    "keyProjects": *[_type == "artwork" && featured == true] | order(year desc) {
      "_id": _id,
      "id": coalesce(slug.current, _id),
      title,
      "slug": slug.current,
      subtitle,
      year,
      medium,
      location,
      "imageUrl": images[0].asset->url,
      "aspectRatio": images[0].asset->metadata.dimensions.aspectRatio,
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

// Response TypeScript interface for Public Art Query
export interface SanityPublicArt {
  _id: string;
  id: string;
  title: string;
  slug?: string;
  medium?: string;
  location?: string;
  city?: string;
  country?: string;
  year?: string;
  commissioningBody?: string;
  dimensions?: string;
  impactMetric?: string;
  description?: string;
  externalLink?: string;
  images?: {
    url: string;
    alt?: string;
    caption?: string;
    aspectRatio?: number;
  }[];
}

/**
 * Centralized GROQ Query: Public Art Projects & Murals
 */
export const PUBLIC_ART_QUERY = groq`
  *[_type == "publicArt"] | order(year desc) {
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
      "url": asset->url,
      alt,
      caption,
      "aspectRatio": asset->metadata.dimensions.aspectRatio
    }
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

// Response TypeScript interface for Exhibition Query
export interface SanityExhibition {
  _id: string;
  id: string;
  slug?: string;
  title: string;
  subtitle?: string;
  date: string;
  year: string;
  status: "Upcoming" | "Ongoing" | "Past" | string;
  venue: string;
  city: string;
  country: string;
  role?: string;
  curator?: string;
  description?: string;
  coverImage?: string;
  galleryImages?: string[];
  externalLink?: string;
  highlights?: string[];
}

/**
 * Centralized GROQ Query: Exhibitions List
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

// Response TypeScript interface for Single Exhibition Detail Query
export interface SanityExhibitionDetail {
  _id: string;
  id: string;
  title: string;
  subtitle?: string;
  slug: string;
  date?: string;
  year: string;
  venue: string;
  city: string;
  country: string;
  role?: string;
  curator?: string;
  description?: string;
  externalLink?: string;
  images?: {
    url: string;
    alt?: string;
    caption?: string;
    aspectRatio?: number;
  }[];
}

/**
 * Centralized GROQ Query: Single Exhibition by Slug
 * Fetches title, venue, location, year, description, and single images array with CDN URLs & dynamic metadata aspect ratios
 */
export const EXHIBITION_BY_SLUG_QUERY = groq`
  *[_type == "exhibition" && (slug.current == $slug || _id == $slug)][0] {
    "_id": _id,
    "id": coalesce(slug.current, _id),
    title,
    subtitle,
    "slug": slug.current,
    date,
    year,
    venue,
    city,
    country,
    role,
    curator,
    description,
    externalLink,
    "images": images[] {
      "url": asset->url,
      alt,
      caption,
      "aspectRatio": asset->metadata.dimensions.aspectRatio
    }
  }
`

// Response TypeScript interface for Press Query
export interface SanityPressArticle {
  _id: string;
  id: string;
  title: string;
  articleTitle?: string;
  publicationName?: string;
  publication?: string;
  date: string;
  author?: string;
  excerpt?: string;
  externalLink?: string;
  url?: string;
  linkText?: string;
  image?: {
    url: string;
    alt?: string;
    aspectRatio?: number;
  };
  coverImage?: string;
}

/**
 * Centralized GROQ Query: Press & Media Features
 * Fetches title, publication, date, excerpt, url, and image object with dynamic metadata aspectRatio
 */
export const PRESS_QUERY = groq`
  *[_type == "press"] | order(date desc) {
    "_id": _id,
    "id": coalesce(slug.current, _id),
    "title": title,
    "articleTitle": title,
    "publicationName": publicationName,
    "publication": publicationName,
    date,
    author,
    excerpt,
    "externalLink": externalLink,
    "url": externalLink,
    "linkText": coalesce(publicationName, "Read Article"),
    "coverImage": images[0].asset->url,
    "image": {
      "url": images[0].asset->url,
      "alt": images[0].alt,
      "aspectRatio": images[0].asset->metadata.dimensions.aspectRatio
    }
  }
`

// Response TypeScript interface for Recognition Query
export interface SanityRecognitionItem {
  _id: string;
  id: string;
  title: string;
  awardTitle?: string;
  organization?: string;
  awardingBody?: string;
  year: string;
  status?: string;
  link?: string;
  description?: string;
  location?: string;
}

/**
 * Centralized GROQ Query: Recognition & Awards
 * Fetches title, organization, year, status, link, description, location
 */
export const RECOGNITION_QUERY = groq`
  *[_type == "recognition"] | order(year desc) {
    "_id": _id,
    "id": coalesce(slug.current, _id),
    "title": title,
    "awardTitle": title,
    "organization": awardingBody,
    "awardingBody": awardingBody,
    year,
    status,
    link,
    description,
    location
  }
`

/**
 * Centralized GROQ Query: Press & Media Features (Legacy)
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

export interface ArtworkMeta {
  title: string;
  year: string;
  medium: string;
  dimensions?: string;
  location?: string;
  image: string;
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  statement: string;
  tagline?: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  featuredArtwork: ArtworkMeta;
}

export interface HighlightMetric {
  value: string;
  label: string;
  highlight?: boolean;
}

export interface HighlightBannerContent {
  eyebrow: string;
  title: string;
  badge: string;
  description: string;
  cta: { label: string; href: string };
  metrics: HighlightMetric[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  medium: string;
  location: string;
  image: string;
  aspectRatio?: string;
  description: string;
  tags: string[];
}

export interface PressItem {
  publication: string;
  date: string;
  title: string;
  excerpt: string;
  linkText: string;
  url: string;
}

export interface HomePageData {
  hero: HeroContent;
  highlightBanner: HighlightBannerContent;
  keyProjects: Project[];
  pressFeatures: PressItem[];
}

export interface EducationItem {
  year: string;
  degree: string;
  institution: string;
  location: string;
  honors?: string;
}

export interface AffiliationItem {
  role: string;
  organization: string;
  years: string;
  details?: string;
}

export interface BiographyData {
  eyebrow: string;
  heading: string;
  portraitImage: string;
  portraitAlt: string;
  portraitCaption: string;
  paragraphs: string[];
  quickFacts: { label: string; value: string }[];
}

export interface ArtistStatementData {
  eyebrow: string;
  quote: string;
  author: string;
  context: string;
  keyThemes: string[];
}

export interface AboutData {
  biography: BiographyData;
  statement: ArtistStatementData;
  education: EducationItem[];
  affiliations: AffiliationItem[];
}

export type CategorySlug = "all" | "series" | "recent" | "commissions" | "public-art" | "studio";

export interface CategoryFilterOption {
  id: CategorySlug;
  label: string;
  count: number;
}

export interface Artwork {
  id: string;
  title: string;
  category: CategorySlug;
  categoryLabel: string;
  medium: string;
  year: string;
  dimensions?: string;
  location?: string;
  image: string;
  aspectRatio?: "square" | "portrait" | "landscape";
  description?: string;
  featured?: boolean;
}

export interface StudioWorkItem {
  id: string;
  title: string;
  caption: string;
  year: string;
  image: string;
  aspectRatio?: "square" | "portrait" | "landscape";
}

export interface ExhibitionProject {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  year: string;
  status: "Upcoming" | "Ongoing" | "Past";
  venue: string;
  country: string;
  city: string;
  role: string;
  description: string;
  coverImage: string;
  galleryImages?: string[];
  externalLink?: string;
  curator?: string;
  highlights?: string[];
}

export interface PublicArtProject {
  id: string;
  title: string;
  medium: string;
  location: string;
  city: string;
  country: string;
  year: string;
  commissioningBody: string;
  description: string;
  coverImage?: string;
  galleryImages?: string[];
  dimensions?: string;
  impactMetric?: string;
  externalLink?: string;
}

export interface PressArticle {
  id: string;
  articleTitle: string;
  publicationName: string;
  date: string;
  coverImage: string;
  externalLink: string;
  excerpt?: string;
  category?: "Feature" | "Review" | "Interview" | "Exhibition Coverage";
  author?: string;
}

export type RecognitionStatus = "Won" | "Nominated" | "Shortlisted" | "Selected" | "Offered" | "Featured";

export interface RecognitionItem {
  id: string;
  awardTitle: string;
  awardingBody: string;
  year: string;
  status: RecognitionStatus;
  link?: string;
  description?: string;
  location?: string;
  category?: string;
}

export interface CVEntry {
  year: string;
  title: string;
  subtitle?: string;
  location?: string;
  details?: string;
}

export interface CVSectionGroup {
  id: string;
  sectionTitle: string;
  items: CVEntry[];
}

export interface FullCVData {
  education: CVEntry[];
  appointments: CVEntry[];
  exhibitions: CVEntry[];
  commissions: CVEntry[];
  awards: CVEntry[];
  collections: CVEntry[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactInfoData {
  email: string;
  studioLocation: string;
  galleryRepresentation?: string;
  instagram: string;
  linkedin: string;
  twitter: string;
}

export interface CommissionStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface WorkshopService {
  id: string;
  title: string;
  category: "Mentoring" | "Painting Masterclass" | "Public Art Workshop" | "Online Masterclass" | "Foundry Masterclass" | "Ceramics Workshop";
  duration: string;
  skillLevel: string;
  location: string;
  description: string;
  highlights: string[];
}

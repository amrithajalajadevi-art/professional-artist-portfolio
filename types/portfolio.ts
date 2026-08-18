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

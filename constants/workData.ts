import { Artwork, CategoryFilterOption, CategorySlug, StudioWorkItem } from "@/types";

export const categoryOptions: CategoryFilterOption[] = [
  { id: "all", label: "All Curated Works", count: 8 },
  { id: "series", label: "Rest & Quietude Series", count: 4 },
  { id: "recent", label: "Recent Figurative Paintings", count: 3 },
  { id: "commissions", label: "Commission Works", count: 3 },
  { id: "drawings", label: "Drawings & Paper Works", count: 6 },
  { id: "studio", label: "Studio Practice", count: 6 },
];

export function normalizeCategorySlug(param?: string): CategorySlug {
  if (!param) return "all";
  const slug = param.toLowerCase().trim();
  if (slug === "studio" || slug === "in-progress" || slug === "studio-setup") return "studio";
  if (slug === "commissions" || slug === "commissions") return "commissions";
  if (slug === "series" || slug === "paintings" || slug === "biennale" || slug === "paintings-sculptures") return "series";
  if (slug === "recent" || slug === "recent-works") return "recent";
  if (slug === "drawings" || slug === "public") return "drawings";
  return "all";
}

export const artworksData: Artwork[] = [
  {
    id: "shared-silence-2024",
    title: "Shared Silence",
    category: "series",
    categoryLabel: "British Council Selection",
    medium: "Oil on Canvas",
    year: "2024",
    dimensions: "150 × 120 cm",
    location: "British Council Study UK Exhibition, New Delhi",
    image: "/artworks/work/work1.jpg",
    aspectRatio: "portrait",
    description: "Selected for the British Council Study UK Creative Connections 2026 exhibition in New Delhi. Exploring quietness, rest, emotional connection, and unspoken human experience.",
    featured: true,
  },
  {
    id: "repose-in-domestic-space",
    title: "Repose in Domestic Space",
    category: "series",
    categoryLabel: "Rest & Quietude Series",
    medium: "Oil & Acrylic on Canvas",
    year: "2024",
    dimensions: "160 × 130 cm",
    location: "De Montfort University MA Showcase, UK",
    image: "/artworks/work/work2.jpg",
    aspectRatio: "landscape",
    description: "A major figurative study examining sleep and rest as central subjects—exploring wellbeing, vulnerability, memory, and domestic quietude.",
    featured: true,
  },
  {
    id: "quietude-and-memory",
    title: "Quietude & Memory",
    category: "recent",
    categoryLabel: "Recent Figurative Paintings",
    medium: "Oil on Canvas",
    year: "2024",
    dimensions: "140 × 110 cm",
    location: "Studio Collection, Leicester, UK",
    image: "/artworks/work/work3.jpg",
    aspectRatio: "portrait",
    description: "A contemplative figurative canvas observing quiet human gestures and the emotional weight of home and migration.",
    featured: true,
  },
  {
    id: "kerala-heritage-mural-study",
    title: "Kerala Heritage Mural Study",
    category: "commissions",
    categoryLabel: "Public & UK Murals",
    medium: "Acrylic & Pigment Architectural Frieze",
    year: "2024",
    dimensions: "1200 × 300 cm",
    location: "90's Mix Resto Bar, Leicester, UK",
    image: "/artworks/mural-02.jpg",
    aspectRatio: "landscape",
    description: "Large-scale mural drawing from Kerala's cultural memory and visual heritage, bridging familiar street celebrations with a British urban landscape.",
  },
  {
    id: "varavazhikal-public-project",
    title: "Varavazhikal Public Mural",
    category: "public-art",
    categoryLabel: "Public Art Projects",
    medium: "Public Mural & Mineral Pigments",
    year: "2022",
    dimensions: "1800 × 350 cm",
    location: "Alappuzha Promenade, Kerala (Kochi Biennale Collaboration)",
    image: "/artworks/mural-01.jpg",
    aspectRatio: "landscape",
    description: "Collaborative public mural project associated with the Kochi Biennale Foundation, exploring how visual art interacts directly with local communities in everyday spaces.",
  },
  {
    id: "ordinary-moments-study-no-1",
    title: "Ordinary Moments Study No. 1",
    category: "recent",
    categoryLabel: "Recent Figurative Paintings",
    medium: "Charcoal & Oil on Flax",
    year: "2024",
    dimensions: "120 × 90 cm",
    location: "Studio Collection, UK",
    image: "/artworks/work/work4.jpg",
    aspectRatio: "portrait",
    description: "A delicate study exploring quiet domestic presence and how simple human posture communicates emotional state.",
  },
  {
    id: "belonging-and-transition",
    title: "Belonging & Cultural Transition",
    category: "series",
    categoryLabel: "Rest & Quietude Series",
    medium: "Oil on Linen",
    year: "2024",
    dimensions: "150 × 130 cm",
    location: "Private Collection, London, UK",
    image: "/artworks/work/work5.jpg",
    aspectRatio: "square",
    description: "Figurative canvas examining the interplay between familiar Kerala memories and everyday life in Britain.",
  },
  {
    id: "seated-figure-in-repose",
    title: "Seated Figure in Repose",
    category: "series",
    categoryLabel: "Rest & Quietude Series",
    medium: "Oil & Pigment on Canvas",
    year: "2024",
    dimensions: "140 × 120 cm",
    location: "Studio Collection, Leicester, UK",
    image: "/artworks/work/work6.jpg",
    aspectRatio: "landscape",
    description: "Exploring rest as an unperformed, vulnerable state where domestic surroundings carry personal history.",
  },
];

export const studioWorksData: StudioWorkItem[] = [
  {
    id: "studio-setup-1",
    title: "Leicester Studio Canvas Preparation",
    caption: "Studio, Leicester 2024",
    year: "2024",
    image: "/artworks/work/studio/studio-img.jpeg",
    aspectRatio: "portrait",
  },
];

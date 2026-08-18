import React from "react";
import Link from "next/link";
import { ArrowUpRight, Award, ExternalLink, Sparkles, ChevronRight, FileText } from "lucide-react";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { CustomImage } from "@/components/ui/CustomImage";

// Key Projects Data Array
const keyProjects = [
  {
    id: "echoes-of-silence",
    title: "Echoes of Silence",
    subtitle: "UK Public Art Commission",
    year: "2024–2025",
    medium: "Cast Bronze & Weathering Steel",
    location: "Yorkshire Sculpture Park & London Civic Plaza",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "aspect-[4/3]",
    description: "A monumental 4-meter bronze sculpture commissioned for a prominent UK civic square, investigating urban memory and industrial heritage.",
    tags: ["Public Sculpture", "UK Commission", "Bronze"],
  },
  {
    id: "terra-incognita",
    title: "Terra Incognita",
    subtitle: "Biennale Solo Pavilion",
    year: "2024",
    medium: "Glazed Terracotta & Earth Pigments",
    location: "Venice Biennale Collateral Exhibition",
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "aspect-[4/3]",
    description: "A suite of 14 sculptural ceramic vessels exploring sea-level vulnerability, ancient trade route relics, and ecological memory.",
    tags: ["Solo Pavilion", "Ceramics", "Biennale"],
  },
  {
    id: "lumina-vessel-of-light",
    title: "Lumina: Vessel of Light",
    subtitle: "Museum Canvas Installation",
    year: "2025",
    medium: "Oil on Raw Flax & Bronze Assemblage",
    location: "Victoria & Albert Museum (V&A), London",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "aspect-[4/3]",
    description: "An architectural multi-panel canvas installation examining light diffusion, tactile surface pigment, and spatial stillness.",
    tags: ["Museum Show", "Oil Painting", "Spatial Art"],
  },
];

// Media & Press Recognitions Data Array
const pressFeatures = [
  {
    publication: "The Guardian Fine Art Review",
    date: "October 2025",
    title: "“Amritha Jalaja Devi's Sculptural Language Redefines Contemporary Space”",
    excerpt: "Devi commands raw bronze and clay with rare poetic sensitivity, establishing her as one of the most compelling voices in British contemporary sculpture.",
    linkText: "Read Full Guardian Review",
    url: "/press",
  },
  {
    publication: "Art UK Magazine",
    date: "June 2025",
    title: "“Top 10 Contemporary Sculptors Shaping Public Landscapes in Britain”",
    excerpt: "Her site-responsive installations bridge historical narrative with modern materiality, creating lasting civic landmarks across the United Kingdom.",
    linkText: "Read Art UK Feature",
    url: "/press",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gallery-bg text-gallery-text">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full p-6 sm:p-10 xl:p-16 border-b border-gallery-border bg-white overflow-hidden">
        {/* Subtle Decorative Grid Pattern */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="relative z-10 space-y-12">
          {/* Hero Header Meta Eyebrow */}
          <FadeIn direction="down" duration={0.5}>
            <div className="flex flex-wrap items-center justify-between gap-4 text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-sans font-medium border-b border-zinc-100 pb-4">
              <span className="flex items-center gap-2 text-zinc-600">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                Available for UK & International Commissions
              </span>
              <span>Portfolio 2024 — 2026</span>
            </div>
          </FadeIn>

          {/* Artist Introduction & Statement Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <FadeIn delay={0.1} direction="up">
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 font-semibold font-sans">
                  01 / Artist Statement & Portfolio
                </p>
              </FadeIn>

              <FadeIn delay={0.2} direction="up">
                <h1 className="font-serif text-3xl sm:text-5xl xl:text-6xl font-normal text-zinc-950 leading-[1.12] tracking-tight">
                  Exploring tactile memory, monumental bronze sculpture, and site-responsive public art.
                </h1>
              </FadeIn>

              <FadeIn delay={0.3} direction="up">
                <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed max-w-2xl">
                  Amritha Jalaja Devi is an acclaimed contemporary visual artist and sculptor whose practice bridges raw metallic form, glazed ceramics, and architectural canvas installations. Based in the UK, her work examines environmental resilience, cultural lineage, and spatial transformation.
                </p>
              </FadeIn>

              <FadeIn delay={0.4} direction="up">
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <Link
                    href="/work"
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-widest bg-zinc-950 text-white hover:bg-zinc-800 transition-colors shadow-sm group"
                  >
                    <span>View Selected Work</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  <a
                    href="/cv-dummy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-widest border border-zinc-300 text-zinc-800 hover:bg-zinc-100 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-zinc-500" />
                    <span>Download CV</span>
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-600 hover:text-zinc-950 transition-colors px-3 py-3"
                  >
                    <span>Inquire</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Featured Artwork Visual Spotlight Card */}
            <div className="lg:col-span-5">
              <FadeIn delay={0.3} direction="left">
                <div className="group relative bg-zinc-50 border border-zinc-200/80 p-3 shadow-md hover:shadow-xl transition-all duration-500">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <CustomImage
                      src="/images/hero-artwork.jpg"
                      alt="Ethereal Forms No. 4 by Amritha Jalaja Devi"
                      fill
                      priority
                      hoverScale
                      aspectRatio="auto"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity pointer-events-none" />
                    
                    <div className="absolute bottom-4 left-4 right-4 text-white z-20">
                      <span className="inline-block px-2 py-0.5 mb-1.5 text-[9px] uppercase tracking-widest font-semibold bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-xs">
                        Strongest Featured Artwork
                      </span>
                      <h2 className="font-serif text-lg sm:text-xl font-normal leading-tight text-white">
                        Ethereal Forms No. 4, 2025
                      </h2>
                      <p className="text-[11px] text-zinc-300 font-light mt-0.5">
                        Bronze & Glazed Terracotta — 180 × 95 × 80 cm
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2.5 px-1 text-[11px] text-zinc-500 font-sans">
                    <span>Location: Contemporary Sculpture Gallery, London</span>
                    <span className="font-mono text-zinc-400">#01 / HERO</span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAJOR HIGHLIGHT BANNER (UK GTV CREDIT & BRITISH COUNCIL) */}
      <section className="p-6 sm:p-10 xl:p-16 border-b border-gallery-border bg-gallery-bg">
        <FadeIn direction="up">
          <div className="relative bg-zinc-950 text-white p-8 sm:p-12 xl:p-14 border border-zinc-800 shadow-2xl overflow-hidden">
            {/* Background Ambient Glow */}
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-8">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 pb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-sm">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400 font-semibold block">
                      02 / Key Accreditation & Recognition
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
                      British Council Visual Arts Fellow & International Grant Recipient
                    </h3>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  UK Global Talent Portfolio
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8 space-y-4">
                  <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                    Recognized by the British Council for exceptional contribution to UK-India cultural exchange and public art sculpture. Recipient of major international production grants supporting site-specific installations at the Yorkshire Sculpture Park and Venice Biennale Collateral Exhibitions.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/recognition"
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 hover:text-amber-300 transition-colors group"
                    >
                      <span>Explore Awards & GTV Evidence</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>

                {/* Key Metrics / Badges */}
                <div className="md:col-span-4 grid grid-cols-2 gap-4 border-t md:border-t-0 md:border-l border-zinc-800 pt-6 md:pt-0 md:pl-8">
                  <div className="space-y-1">
                    <span className="font-serif text-2xl sm:text-3xl text-white font-semibold">12+</span>
                    <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-sans">
                      International Shows
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="font-serif text-2xl sm:text-3xl text-amber-400 font-semibold">2</span>
                    <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-sans">
                      UK Civic Monuments
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="font-serif text-2xl sm:text-3xl text-white font-semibold">2025</span>
                    <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-sans">
                      V&A Museum Showcase
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="font-serif text-2xl sm:text-3xl text-amber-400 font-semibold">100%</span>
                    <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-sans">
                      Original Studio Work
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 3. KEY PROJECTS PREVIEW (MINIMALIST GRID) */}
      <section className="p-6 sm:p-10 xl:p-16 border-b border-gallery-border bg-white space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200 pb-6">
          <FadeIn direction="up">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold font-sans mb-1">
                03 / Featured Projects
              </p>
              <h2 className="font-serif text-2xl sm:text-4xl text-zinc-950 font-normal">
                Key Portfolio Projects
              </h2>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-zinc-600 hover:text-zinc-950 transition-colors group"
            >
              <span>View All Projects</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>

        {/* 3-Column Responsive Grid */}
        <FadeInStagger staggerDelay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col justify-between bg-gallery-bg border border-zinc-200/80 p-4 hover:border-zinc-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-200">
                    <CustomImage
                      src={project.image}
                      alt={project.title}
                      fill
                      hoverScale
                      aspectRatio="auto"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-1 text-[9px] uppercase tracking-widest font-semibold bg-zinc-950/80 backdrop-blur-xs text-white border border-white/20">
                        {project.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Title & Metadata */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-serif text-xl text-zinc-950 font-normal group-hover:text-zinc-700 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs text-zinc-400 font-mono">{project.year}</span>
                    </div>

                    <p className="text-xs text-zinc-500 font-medium tracking-tight">
                      {project.medium}
                    </p>

                    <p className="text-xs text-zinc-600 font-light leading-relaxed line-clamp-3 pt-1">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-6 border-t border-zinc-200/60 mt-4 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-zinc-800 group-hover:text-zinc-950">
                  <span className="text-zinc-400 font-normal truncate max-w-[180px]">
                    {project.location}
                  </span>
                  <Link
                    href={`/work?project=${project.id}`}
                    className="inline-flex items-center gap-1 hover:underline underline-offset-4"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </FadeInStagger>
      </section>

      {/* 4. SELECTED PRESS PREVIEW */}
      <section className="p-6 sm:p-10 xl:p-16 border-b border-gallery-border bg-gallery-bg space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200 pb-6">
          <FadeIn direction="up">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold font-sans mb-1">
                04 / Press & Media Recognition
              </p>
              <h2 className="font-serif text-2xl sm:text-4xl text-zinc-950 font-normal">
                Critical Reviews & Features
              </h2>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <Link
              href="/press"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-zinc-600 hover:text-zinc-950 transition-colors group"
            >
              <span>View All Press Features</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>

        {/* 2-Column Press Grid */}
        <FadeInStagger staggerDelay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pressFeatures.map((press, idx) => (
              <div
                key={idx}
                className="bg-white border border-zinc-200/80 p-6 sm:p-8 space-y-6 flex flex-col justify-between hover:border-zinc-400 transition-all shadow-2xs"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-zinc-500 font-sans border-b border-zinc-100 pb-3">
                    <span className="font-semibold text-zinc-900 tracking-wider uppercase">
                      {press.publication}
                    </span>
                    <span className="font-mono text-zinc-400">{press.date}</span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-normal text-zinc-950 leading-snug">
                    {press.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed italic">
                    {press.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100">
                  <Link
                    href={press.url}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-900 hover:text-zinc-600 transition-colors group"
                  >
                    <span>{press.linkText}</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-zinc-400 group-hover:text-zinc-900" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </FadeInStagger>
      </section>

      {/* FOOTER ACKNOWLEDGEMENT */}
      <footer className="p-6 sm:p-10 xl:p-12 bg-white text-center sm:text-left flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-400 tracking-wider gap-4">
        <div>
          <p className="font-serif text-sm text-zinc-700 font-normal">
            Amritha Jalaja Devi — Contemporary Visual Artist & Sculptor
          </p>
          <p className="text-[11px] text-zinc-400 mt-1">
            UK Global Talent Visa Application Portfolio © {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex items-center gap-6 text-[11px] uppercase tracking-widest text-zinc-500">
          <Link href="/about" className="hover:text-zinc-950 transition-colors">
            About
          </Link>
          <Link href="/work" className="hover:text-zinc-950 transition-colors">
            Work
          </Link>
          <Link href="/cv" className="hover:text-zinc-950 transition-colors">
            CV
          </Link>
          <Link href="/contact" className="hover:text-zinc-950 transition-colors">
            Contact
          </Link>
        </div>
      </footer>
    </div>
  );
}

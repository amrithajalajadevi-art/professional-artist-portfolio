import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] lg:min-h-screen flex flex-col justify-between p-8 sm:p-12 xl:p-16 bg-white overflow-hidden border-b border-zinc-100">
        {/* Ambient Decorative Graphic / Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        {/* Hero Top Tagline */}
        <div className="relative z-10 flex items-center justify-between text-xs tracking-widest uppercase text-zinc-400 font-sans">
          <span>Selected Works & Exhibitions</span>
          <span>2024 — 2026</span>
        </div>

        {/* Hero Title & Typography */}
        <div className="relative z-10 my-16 max-w-4xl space-y-6">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 font-semibold">
            Contemporary Visual Arts & Sculpture
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-light tracking-tight text-zinc-950 leading-[1.1]">
            Exploring tactile memory, architectural space, and organic form.
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 max-w-2xl font-light leading-relaxed pt-2">
            Amritha Jalaja Devi works across large-scale canvas oil paintings, raw bronze sculptures, and site-specific commissions featured across the UK, Europe, and Asia.
          </p>
        </div>

        {/* Hero Banner Visual Showcase */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          <div className="group relative aspect-[4/3] bg-zinc-100 overflow-hidden border border-zinc-200/80">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90" />
            <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
              <span className="text-[10px] uppercase tracking-widest text-zinc-300 block mb-1">
                Featured Artwork
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-normal">
                Echoes of Alabaster, 2025
              </h3>
              <p className="text-xs text-zinc-300 font-light mt-1">
                Oil & Marble Dust on Linen — 180 × 240 cm
              </p>
            </div>
            {/* Visual Placeholder Texture */}
            <div className="w-full h-full bg-[#EFECE6] flex items-center justify-center text-zinc-400 font-serif italic text-lg group-hover:scale-105 transition-transform duration-700">
              [ Artwork Image: Echoes of Alabaster ]
            </div>
          </div>

          <div className="flex flex-col justify-between p-8 bg-[#FAF9F6] border border-zinc-200/80">
            <div className="space-y-4">
              <span className="inline-block px-2.5 py-1 text-[10px] uppercase tracking-widest font-semibold bg-zinc-900 text-white">
                Recent Recognition
              </span>
              <h3 className="font-serif text-2xl text-zinc-900">
                British Council Visual Arts Fellowship 2025
              </h3>
              <p className="text-sm text-zinc-600 font-light leading-relaxed">
                Awarded for outstanding contribution to contemporary spatial sculpture and narrative installations in London & Edinburgh.
              </p>
            </div>

            <div className="pt-8 flex items-center gap-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-900 hover:text-zinc-600 transition-colors group"
              >
                <span>View Full Portfolio</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="p-8 sm:p-12 xl:p-16 bg-[#FAF9F6] space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200 pb-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-1">
              Curated Selection
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-zinc-900">
              Featured Artworks
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="text-xs uppercase tracking-widest text-zinc-600 hover:text-zinc-950 font-medium transition-colors"
          >
            Explore All (24) →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Monolith in Sienna",
              year: "2025",
              medium: "Bronze & Raw Sienna Pigment",
              aspect: "aspect-[3/4]",
            },
            {
              title: "Transient Horizons No. 4",
              year: "2024",
              medium: "Oil on Raw Canvas",
              aspect: "aspect-[4/5]",
            },
            {
              title: "Submerged Structure I",
              year: "2024",
              medium: "Cast Plaster & Pigment",
              aspect: "aspect-[3/4]",
            },
          ].map((item, idx) => (
            <div key={idx} className="group cursor-pointer space-y-3">
              <div className={`w-full ${item.aspect} bg-zinc-200/70 border border-zinc-300/60 overflow-hidden flex items-center justify-center text-zinc-500 font-serif italic text-sm group-hover:opacity-90 transition-opacity`}>
                [ Artwork: {item.title} ]
              </div>
              <div className="flex justify-between items-baseline pt-1">
                <h4 className="font-serif text-lg text-zinc-900 group-hover:text-zinc-600 transition-colors">
                  {item.title}
                </h4>
                <span className="text-xs text-zinc-400 font-mono">{item.year}</span>
              </div>
              <p className="text-xs text-zinc-500 font-light">{item.medium}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Notice */}
      <footer className="p-8 sm:p-12 text-center sm:text-left bg-white border-t border-zinc-100 flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-400 tracking-wider">
        <p>© {new Date().getFullYear()} Amritha Jalaja Devi Studio. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Designed for visual excellence & gallery performance.</p>
      </footer>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, ShieldCheck } from "lucide-react";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { CustomImage } from "@/components/ui/CustomImage";
import { commissionStepsData } from "@/constants/servicesData";

export function CommissionsView() {
  return (
    <div className="flex flex-col min-h-screen bg-gallery-bg text-gallery-text">
      <section className="p-6 sm:p-10 xl:p-16 border-b border-gallery-border bg-white space-y-12">
        {/* Header Eyebrow & Title */}
        <FadeIn direction="up">
          <div className="space-y-4 border-b border-zinc-200 pb-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold font-sans flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                01 / Bespoke Sculpture & Architectural Commissions
              </p>
              <span className="text-xs font-mono text-zinc-400">London & Worldwide</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl text-zinc-950 font-normal leading-tight max-w-3xl">
              Bespoke Sculptural Commissions
            </h1>
            <p className="text-sm text-zinc-600 font-light max-w-2xl">
              Creating custom, site-specific bronze sculptures, architectural terracotta friezes, and private gallery monuments tailored for residential, corporate, and civic environments.
            </p>
          </div>
        </FadeIn>

        {/* Hero Spotlight Image Banner */}
        <FadeIn direction="up" delay={0.2}>
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden border border-zinc-200 shadow-md bg-zinc-950">
            <CustomImage
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop"
              alt="Bespoke bronze commission in a contemporary architectural interior"
              fill
              priority
              objectFit="cover"
              aspectRatio="auto"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 text-white z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="px-2.5 py-1 text-[9px] uppercase tracking-widest font-semibold bg-white/20 backdrop-blur-xs text-white border border-white/30 rounded-xs mb-1.5 inline-block">
                  Featured Commission
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-normal">
                  Echoes of Silence — Private Estate Feature, London
                </h3>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Museum-Grade Provenance Guaranteed</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Step-by-Step Commission Process Section */}
        <div className="space-y-8 pt-4">
          <FadeIn direction="up">
            <div className="space-y-2 border-b border-zinc-100 pb-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-zinc-950 font-normal">
                The Bespoke Commission Process
              </h2>
              <p className="text-xs text-zinc-500 font-sans">
                A collaborative four-stage journey from initial spatial dialogue to final site mounting.
              </p>
            </div>
          </FadeIn>

          <FadeInStagger staggerDelay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {commissionStepsData.map((step) => (
                <div
                  key={step.stepNumber}
                  className="bg-white border border-zinc-200/80 p-6 space-y-4 shadow-2xs hover:border-zinc-400 transition-all group"
                >
                  <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                    <span className="font-mono text-2xl font-bold text-amber-700">
                      {step.stepNumber}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-semibold font-sans">
                      Stage {step.stepNumber}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-serif text-lg text-zinc-950 font-normal group-hover:text-zinc-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                      {step.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-zinc-600 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeInStagger>
        </div>

        {/* Prominent CTA Banner */}
        <FadeIn direction="up">
          <div className="p-8 sm:p-12 bg-zinc-950 text-white space-y-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 max-w-xl">
              <span className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold font-sans block">
                Begin Your Commission Inquiry
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-normal leading-tight">
                Commission a Unique Piece for Your Space
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Whether for a private collection, corporate lobby, or civic public plaza, studio consultations are available in London or virtually.
              </p>
            </div>

            <div className="flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-4 bg-white text-zinc-950 font-semibold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-colors shadow-sm group"
              >
                <span>Inquire About a Commission</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

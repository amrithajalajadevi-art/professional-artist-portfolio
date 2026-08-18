import React from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock, Award, MapPin, CheckCircle2 } from "lucide-react";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { workshopServicesData } from "@/constants/servicesData";

export function WorkshopsView() {
  return (
    <div className="flex flex-col min-h-screen bg-gallery-bg text-gallery-text">
      <section className="p-6 sm:p-10 xl:p-16 border-b border-gallery-border bg-white space-y-12">
        {/* Header Eyebrow & Title */}
        <FadeIn direction="up">
          <div className="space-y-4 border-b border-zinc-200 pb-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold font-sans flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-zinc-600" />
                01 / Studio Education, Mentoring & Masterclasses
              </p>
              <span className="text-xs font-mono text-zinc-400">Slade & RCA Alumna Studio</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl text-zinc-950 font-normal leading-tight max-w-3xl">
              Art Classes, Workshops & Mentoring
            </h1>
            <p className="text-sm text-zinc-600 font-light max-w-2xl">
              Specialized 1-on-1 mentoring, foundry bronze casting masterclasses, and glaze chemistry workshops led personally by Amritha Jalaja Devi in her London studio and online.
            </p>
          </div>
        </FadeIn>

        {/* Teaching Philosophy Intro Card */}
        <FadeIn direction="up" delay={0.2}>
          <div className="p-8 bg-zinc-50 border border-zinc-200/80 space-y-4 shadow-2xs">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-amber-800">
              <Award className="w-4 h-4 text-amber-700" />
              <span>Teaching Philosophy & Academic Practice</span>
            </div>
            <p className="text-sm sm:text-base text-zinc-700 font-light leading-relaxed max-w-4xl">
              Drawing from studio teaching experience at the Slade School of Fine Art (UCL) and postgraduate research at the Royal College of Art, Amritha's masterclasses focus on rigorous material technique, industrial safety, lost-wax casting precision, and strategic portfolio development for artists navigating competitive international grants and UK visas.
            </p>
          </div>
        </FadeIn>

        {/* Workshop Services Cards Grid */}
        <div className="space-y-8 pt-4">
          <FadeIn direction="up">
            <div className="space-y-1 border-b border-zinc-100 pb-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-zinc-950 font-normal">
                Available Masterclasses & Services
              </h2>
              <p className="text-xs text-zinc-500 font-sans">
                Explore structured studio programs, group masterclasses, and virtual mentoring cohorts.
              </p>
            </div>
          </FadeIn>

          <FadeInStagger staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {workshopServicesData.map((service) => (
                <div
                  key={service.id}
                  className="bg-white border border-zinc-200/80 p-6 sm:p-8 space-y-6 shadow-2xs hover:border-zinc-400 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-100 pb-3">
                      <span className="px-2.5 py-1 text-[9px] uppercase tracking-widest font-semibold bg-zinc-950 text-white border border-zinc-800">
                        {service.category}
                      </span>
                      <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-zinc-400" />
                        {service.duration}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl text-zinc-950 font-normal leading-snug group-hover:text-zinc-700 transition-colors">
                      {service.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-600 font-sans">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                        {service.location}
                      </span>
                      <span className="text-zinc-400">•</span>
                      <span className="font-semibold text-zinc-800">Level: {service.skillLevel}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                      {service.description}
                    </p>

                    {/* Highlights List */}
                    <div className="pt-2 space-y-2">
                      <span className="text-[10px] uppercase tracking-widest font-semibold text-zinc-400 block font-sans">
                        Key Curriculum Highlights
                      </span>
                      <ul className="space-y-1.5">
                        {service.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-xs text-zinc-700 flex items-start gap-2 font-sans">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Booking CTA Button */}
                  <div className="pt-6 border-t border-zinc-100">
                    <Link
                      href={`/contact?subject=Art+Classes+%26+Workshops`}
                      className="inline-flex items-center justify-between w-full px-5 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-900 bg-zinc-100 hover:bg-zinc-950 hover:text-white transition-all duration-300 group/btn border border-zinc-200"
                    >
                      <span>Inquire & Reserve Placement</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </FadeInStagger>
        </div>

        {/* Global CTA Banner */}
        <FadeIn direction="up">
          <div className="p-8 sm:p-12 bg-zinc-950 text-white space-y-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 max-w-xl">
              <span className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold font-sans block">
                Custom Mentoring & Private Group Workshops
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-normal leading-tight">
                Interested in Private Mentoring or Custom Group Sessions?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Contact the studio directly to schedule customized 1-on-1 portfolio reviews or tailored institutional workshops.
              </p>
            </div>

            <div className="flex-shrink-0">
              <Link
                href="/contact?subject=Art+Classes+%26+Workshops"
                className="inline-flex items-center gap-2.5 px-6 py-4 bg-white text-zinc-950 font-semibold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-colors shadow-sm group"
              >
                <span>Book / Inquire Now</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

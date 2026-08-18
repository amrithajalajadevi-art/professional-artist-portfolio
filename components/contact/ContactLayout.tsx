import React from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { CustomImage } from "@/components/ui/CustomImage";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfoData } from "@/types";

interface ContactLayoutProps {
  contactInfo: ContactInfoData;
  studioImage: {
    src: string;
    alt: string;
    caption: string;
  };
}

export function ContactLayout({ contactInfo, studioImage }: ContactLayoutProps) {
  return (
    <section className="p-6 sm:p-10 xl:p-16 border-b border-gallery-border bg-white space-y-12">
      {/* Header Eyebrow & Title */}
      <FadeIn direction="up">
        <div className="space-y-4 border-b border-zinc-200 pb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold font-sans">
              01 / Studio Inquiries & Representation
            </p>
            <span className="text-xs font-mono text-zinc-400">London, United Kingdom</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-zinc-950 font-normal leading-tight max-w-3xl">
            Get in Touch
          </h1>
          <p className="text-sm text-zinc-600 font-light max-w-2xl">
            Direct studio inquiries for public commissions, museum exhibitions, gallery acquisitions, or press requests.
          </p>
        </div>
      </FadeIn>

      {/* 2-Column Responsive Layout: Left Studio Image, Right Info & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Studio Portrait Image */}
        <div className="lg:col-span-5">
          <FadeIn direction="right" delay={0.2}>
            <div className="space-y-3">
              <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5] overflow-hidden border border-zinc-200 shadow-md bg-zinc-950">
                <CustomImage
                  src={studioImage.src}
                  alt={studioImage.alt}
                  fill
                  priority
                  objectFit="cover"
                  aspectRatio="auto"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <p className="text-[11px] text-zinc-500 font-sans leading-tight italic">
                {studioImage.caption}
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Contact Information & Client Form */}
        <div className="lg:col-span-7 space-y-8">
          <FadeIn direction="left" delay={0.3}>
            <ContactInfo info={contactInfo} />
          </FadeIn>

          <FadeIn direction="left" delay={0.4}>
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

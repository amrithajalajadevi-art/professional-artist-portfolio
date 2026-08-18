import React from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { CustomImage } from "@/components/ui/CustomImage";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfoData, ArtworkMeta } from "@/types";

interface ContactLayoutProps {
  contactInfo: ContactInfoData;
  studioImage: ArtworkMeta;
}

export function ContactLayout({ contactInfo, studioImage }: ContactLayoutProps) {
  return (
    <article className="p-8 sm:p-12 xl:p-16 bg-white space-y-10">
      {/* Header */}
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="font-serif text-3xl sm:text-5xl font-bold uppercase text-black tracking-tight">
            CONTACT
          </h1>
        </div>
      </FadeIn>

      {/* 2-Column Fine Art Contact Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Studio Photo */}
        <div className="lg:col-span-6">
          <FadeIn direction="up" delay={0.2}>
            <div className="space-y-3">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
                <CustomImage
                  src={studioImage.image}
                  alt={studioImage.title}
                  fill
                  priority
                  objectFit="cover"
                  aspectRatio="auto"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="text-xs text-gray-500 font-sans italic">
                {studioImage.title} — {studioImage.location}
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Contact Details & Form */}
        <div className="lg:col-span-6 space-y-8">
          <FadeIn direction="up" delay={0.3}>
            <ContactInfo contactInfo={contactInfo} />
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="pt-4 border-t border-zinc-100 space-y-4">
              <h3 className="font-serif text-xl text-black font-bold uppercase tracking-tight">
                Send an Enquiry
              </h3>
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </div>
    </article>
  );
}

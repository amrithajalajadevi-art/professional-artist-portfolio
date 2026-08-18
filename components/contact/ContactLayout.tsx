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
    <section className="p-8 sm:p-12 xl:p-16 bg-white space-y-10">
      {/* Header Title */}
      <FadeIn direction="up">
        <div className="space-y-6 text-center">
          <h1 className="font-serif text-3xl sm:text-5xl font-bold uppercase text-[#6A0F36] tracking-tight">
            CONTACT
          </h1>

          <ContactInfo info={contactInfo} />
        </div>
      </FadeIn>

      {/* 2-Column Layout: Studio Image Left, Contact Form Right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-5xl mx-auto pt-6">
        {/* Studio Image */}
        <FadeIn direction="up" delay={0.2}>
          <div className="relative w-full aspect-square overflow-hidden bg-white">
            <CustomImage
              src={studioImage.src}
              alt={studioImage.alt}
              fill
              priority
              objectFit="cover"
              aspectRatio="auto"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </FadeIn>

        {/* Contact Form */}
        <FadeIn direction="up" delay={0.3}>
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
}

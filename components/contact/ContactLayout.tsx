import React from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { CustomImage } from "@/components/ui/CustomImage";
import { ContactForm } from "@/components/contact/ContactForm";
import { SanityContactPage } from "@/sanity/lib/queries";

interface ContactLayoutProps {
  contactInfo?: SanityContactPage | null;
  studioImage?: string;
}

export function ContactLayout({ contactInfo, studioImage }: ContactLayoutProps) {
  const email = contactInfo?.email;
  const imageUrl = studioImage || contactInfo?.studioImage;
  const imageAlt = contactInfo?.studioImageTitle || "Amritha Jalaja Devi Studio";

  return (
    <article className="p-8 sm:p-12 xl:p-16 bg-[#F7F4F0] space-y-10">
      {/* Header */}
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="font-serif text-3xl sm:text-5xl font-normal uppercase text-[#4A2E35] tracking-tight">
            CONTACT
          </h1>
        </div>
      </FadeIn>

      {/* Clean 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column: Studio/Artist Photo with strict aspect ratio */}
        <FadeIn direction="up" delay={0.2}>
          <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-[#F7F4F0]">
            {imageUrl && (
              <CustomImage
                src={imageUrl}
                alt={imageAlt}
                fill
                priority
                objectFit="cover"
                aspectRatio="auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            )}
          </div>
        </FadeIn>

        {/* Right Column: De-cluttered Single Line & Minimalist Form */}
        <FadeIn direction="up" delay={0.3}>
          <div className="space-y-8 font-sans">
            {/* Single Elegant Line */}
            {email && (
              <p className="text-sm sm:text-base text-[#8A7976] leading-relaxed">
                For all inquiries regarding exhibitions and sales, please contact{" "}
                <a
                  href={`mailto:${email}`}
                  className="text-[#4A2E35] font-semibold hover:underline underline-offset-4"
                >
                  {email}
                </a>
              </p>
            )}

            {/* Form */}
            <ContactForm />
          </div>
        </FadeIn>
      </div>
    </article>
  );
}

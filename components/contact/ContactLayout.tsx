import React from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { CustomImage } from "@/components/ui/CustomImage";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { contactInfoData } from "@/constants/contactData";
import { SanityContactPage } from "@/sanity/lib/queries";
import { ContactInfoData } from "@/types";

export interface ContactLayoutProps {
  contactInfo?: SanityContactPage | null;
  profileImage?: string;
}

export function ContactLayout({ contactInfo, profileImage }: ContactLayoutProps) {
  const resolvedContactData: ContactInfoData = {
    email: contactInfo?.email || contactInfoData.email,
    studioLocation: contactInfo?.studioLocation || contactInfoData.studioLocation,
    instagram: contactInfo?.instagram || contactInfoData.instagram,
    linkedin: contactInfo?.linkedin || contactInfoData.linkedin,
    twitter: contactInfo?.twitter || contactInfoData.twitter,
  };

  const imageUrl = profileImage || contactInfo?.profileImage || "/artworks/work/work1.jpg";

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
        {/* Left Column: Personal / Studio Photograph (No Captions / Metadata) */}
        <FadeIn direction="up" delay={0.2}>
          <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-[#F7F4F0]">
            {imageUrl && (
              <CustomImage
                src={imageUrl}
                alt="Amritha Jalaja Devi — Studio & Artist Profile"
                fill
                priority
                objectFit="cover"
                aspectRatio="auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            )}
          </div>
        </FadeIn>

        {/* Right Column: Contact Info, Location, Socials & Prominent Contact Form */}
        <FadeIn direction="up" delay={0.3}>
          <div className="space-y-8 font-sans">
            {/* Direct Contact Details Block */}
            <ContactInfo contactInfo={resolvedContactData} />

            {/* Prominent Integrated Contact Form */}
            <div className="pt-4">
              <ContactForm />
            </div>
          </div>
        </FadeIn>
      </div>
    </article>
  );
}

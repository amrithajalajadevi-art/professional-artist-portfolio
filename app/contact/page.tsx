import React from "react";
import type { Metadata } from "next";
import { contactInfoData, studioImageData } from "@/constants/contactData";
import { ContactLayout } from "@/components/contact/ContactLayout";

export const metadata: Metadata = {
  title: "Contact & Studio Inquiry",
  description:
    "Direct studio inquiries, commission requests, and gallery correspondence with London visual artist and sculptor Amritha Jalaja Devi.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gallery-bg text-gallery-text">
      <ContactLayout
        contactInfo={contactInfoData}
        studioImage={studioImageData}
      />
    </div>
  );
}

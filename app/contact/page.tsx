import React from "react";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { CONTACT_PAGE_QUERY, SanityContactPage } from "@/sanity/lib/queries";
import { ContactLayout } from "@/components/contact/ContactLayout";

export const metadata: Metadata = {
  title: "Contact & Studio Inquiry | Amritha Jalaja Devi",
  description:
    "Direct studio inquiries, mural commission requests, and gallery correspondence with visual artist Amritha Jalaja Devi.",
};

export default async function ContactPage() {
  let contactPageData: SanityContactPage | null = null;
  try {
    contactPageData = await client.fetch(CONTACT_PAGE_QUERY);
  } catch (error) {
    console.error("Error fetching contact page data from Sanity:", error);
  }

  const envEmail =
    process.env.CONTACT_EMAIL;
  if (envEmail) {
    contactPageData = {
      ...(contactPageData || {}),
      email: envEmail,
    };
  }

  return (
    <div className="flex flex-col min-h-screen bg-gallery-bg text-gallery-text">
      <ContactLayout
        contactInfo={contactPageData}
      />
    </div>
  );
}

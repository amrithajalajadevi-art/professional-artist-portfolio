import React from "react";
import { homePageData } from "@/constants/homeData";
import { HeroSection } from "@/components/home/HeroSection";
import { KeyProjectsSection } from "@/components/home/KeyProjectsSection";
import { PressSection } from "@/components/home/PressSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F4F0] text-[#4A2E35] space-y-16">
      {/* 1. High-Impact Hero Artwork View */}
      <HeroSection data={homePageData.hero} />

      {/* 2. Minimalist Large Image Portfolio Grid */}
      <KeyProjectsSection projects={homePageData.keyProjects} />

      {/* 3. Clean Press & Media List */}
      <PressSection features={homePageData.pressFeatures} />
    </div>
  );
}

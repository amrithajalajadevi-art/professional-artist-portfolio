import React from "react";
import Link from "next/link";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { workshopServicesData } from "@/constants/servicesData";

export function WorkshopsView() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F4F0] text-[#4A2E35]">
      <section className="p-8 sm:p-12 xl:p-16 bg-[#F7F4F0] space-y-10">
        {/* Header Title */}
        <FadeIn direction="up">
          <div className="space-y-4">
            <h1 className="font-serif text-3xl sm:text-5xl font-normal uppercase text-[#4A2E35] tracking-tight">
              ART CLASSES & WORKSHOPS
            </h1>
            <p className="text-sm text-[#8A7976] font-sans max-w-2xl leading-relaxed">
              Specialized 1-on-1 mentoring, foundry bronze casting masterclasses, and glaze chemistry workshops led personally by Amritha Jalaja Devi in her London studio and online.
            </p>
          </div>
        </FadeIn>

        {/* Available Services Grid */}
        <FadeInStagger staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workshopServicesData.map((service) => (
              <div
                key={service.id}
                className="bg-[#F7F4F0] space-y-3 font-sans pb-6 border-b border-[#E8E2DA] last:border-b-0"
              >
                <span className="text-xs uppercase tracking-[0.15em] font-semibold text-[#4A2E35] block">
                  [{service.category}]
                </span>

                <h3 className="font-serif text-xl text-[#4A2E35] font-normal">
                  {service.title}
                </h3>

                <p className="text-xs text-[#8A7976]">
                  {service.duration} | {service.location}
                </p>

                <p className="text-xs text-[#8A7976] leading-relaxed">
                  {service.description}
                </p>

                <div className="pt-2">
                  <Link
                    href="/contact?subject=Art+Classes+%26+Workshops"
                    className="text-xs uppercase tracking-[0.15em] font-medium text-[#4A2E35] hover:underline underline-offset-4"
                  >
                    Inquire & Reserve Placement →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </FadeInStagger>
      </section>
    </div>
  );
}

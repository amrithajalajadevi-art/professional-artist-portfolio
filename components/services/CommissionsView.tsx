import React from "react";
import Link from "next/link";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { CustomImage } from "@/components/ui/CustomImage";
import { commissionStepsData } from "@/constants/servicesData";

export function CommissionsView() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <section className="p-8 sm:p-12 xl:p-16 bg-white space-y-10">
        {/* Header Title */}
        <FadeIn direction="up">
          <div className="space-y-4">
            <h1 className="font-serif text-3xl sm:text-5xl font-bold uppercase text-black tracking-tight">
              COMMISSIONS
            </h1>
            <p className="text-sm text-gray-500 font-sans max-w-2xl leading-relaxed">
              Creating custom, site-specific bronze sculptures, architectural terracotta friezes, and private gallery monuments tailored for residential, corporate, and civic environments.
            </p>
          </div>
        </FadeIn>

        {/* Hero Spotlight Image Banner */}
        <FadeIn direction="up" delay={0.2}>
          <div className="relative w-full aspect-[16/9] overflow-hidden bg-white">
            <CustomImage
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop"
              alt="Bespoke bronze commission in a contemporary architectural interior"
              fill
              priority
              objectFit="cover"
              aspectRatio="auto"
              sizes="100vw"
            />
          </div>
        </FadeIn>

        {/* Step-by-Step Commission Process */}
        <div className="space-y-8 pt-4">
          <FadeIn direction="up">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold uppercase text-black tracking-tight">
              THE COMMISSION PROCESS
            </h2>
          </FadeIn>

          <FadeInStagger staggerDelay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {commissionStepsData.map((step) => (
                <div
                  key={step.stepNumber}
                  className="bg-white space-y-3 font-sans"
                >
                  <span className="font-sans text-xl font-bold text-black">
                    {step.stepNumber}
                  </span>

                  <h3 className="font-serif text-lg text-black font-normal">
                    {step.title}
                  </h3>

                  <p className="text-xs text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeInStagger>
        </div>

        {/* CTA */}
        <FadeIn direction="up">
          <div className="pt-6 border-t border-zinc-100">
            <Link
              href="/contact"
              className="text-xs uppercase tracking-widest font-sans font-medium text-black hover:underline underline-offset-4"
            >
              Inquire About a Commission →
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CustomImage } from "@/components/ui/CustomImage";
import { Artwork } from "@/types";

interface ArtworkModalProps {
  artwork: Artwork | null;
  onClose: () => void;
}

export function ArtworkModal({ artwork, onClose }: ArtworkModalProps) {
  useEffect(() => {
    if (artwork) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [artwork]);

  if (!artwork) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6">
        {/* Dark Immersive Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#140C0E]/90 backdrop-blur-md"
        />

        {/* Maximize Size Lightbox Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 w-[96vw] max-w-7xl max-h-[94vh] bg-[#F7F4F0] overflow-y-auto flex flex-col md:flex-row shadow-none border border-[#4A2E35]/15"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2 text-[#8A7976] hover:text-[#4A2E35] transition-colors cursor-pointer"
            aria-label="Close artwork preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Main Artwork View (Maximum Possible Screen Size) */}
          <div className="relative w-full md:w-3/4 h-[60vh] md:h-[84vh] min-h-[350px] bg-[#F7F4F0] flex items-center justify-center p-4">
            <CustomImage
              src={artwork.image}
              alt={artwork.title}
              fill={true}
              priority={true}
              objectFit="contain"
              aspectRatio="auto"
              quality={95}
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>

          {/* Right: De-emphasized Minimalist Metadata Sidebar */}
          <div className="w-full md:w-1/4 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#F7F4F0] border-t md:border-t-0 md:border-l border-[#E8E2DA] font-sans">
            <div className="space-y-4 pt-2">
              <h2 className="font-serif text-xl sm:text-2xl text-[#4A2E35] font-light uppercase tracking-tight">
                {artwork.title}
              </h2>

              <div className="space-y-1.5 text-xs text-[#8A7976] font-sans font-light">
                <p><span className="font-normal text-[#4A2E35]">Year:</span> {artwork.year}</p>
                <p><span className="font-normal text-[#4A2E35]">Medium:</span> {artwork.medium}</p>
                {artwork.dimensions && (
                  <p><span className="font-normal text-[#4A2E35]">Dimensions:</span> {artwork.dimensions}</p>
                )}
                {artwork.location && (
                  <p><span className="font-normal text-[#4A2E35]">Collection:</span> {artwork.location}</p>
                )}
              </div>

              {artwork.description && (
                <p className="text-xs text-[#8A7976] font-sans font-light leading-relaxed pt-2 border-t border-[#E8E2DA]">
                  {artwork.description}
                </p>
              )}
            </div>

            {/* Inquire Action Link */}
            <div className="pt-4 border-t border-[#E8E2DA]">
              <Link
                href="/contact"
                className="inline-block text-xs uppercase tracking-[0.15em] font-medium text-[#4A2E35] hover:underline underline-offset-4"
              >
                Inquire About This Artwork →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

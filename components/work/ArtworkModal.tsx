"use client";

import React, { useEffect } from "react";
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-neutral-900/80"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-white overflow-y-auto flex flex-col md:flex-row shadow-none"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2 text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
            aria-label="Close artwork preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left: Artwork Image View */}
          <div className="relative w-full h-[50vh] md:h-auto md:w-3/5 min-h-[320px] md:min-h-[500px] bg-white flex-shrink-0">
            <CustomImage
              src={artwork.image}
              alt={artwork.title}
              fill={true}
              priority={true}
              objectFit="contain"
              aspectRatio="auto"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>

          {/* Right: Artwork Metadata */}
          <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white font-sans">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-neutral-900 font-normal uppercase tracking-tight">
                {artwork.title}
              </h2>

              <div className="space-y-1 text-xs text-neutral-500 font-sans">
                <p><span className="font-medium text-neutral-900">Year:</span> {artwork.year}</p>
                <p><span className="font-medium text-neutral-900">Medium:</span> {artwork.medium}</p>
                {artwork.dimensions && (
                  <p><span className="font-medium text-neutral-900">Dimensions:</span> {artwork.dimensions}</p>
                )}
                {artwork.location && (
                  <p><span className="font-medium text-neutral-900">Collection:</span> {artwork.location}</p>
                )}
              </div>

              {artwork.description && (
                <p className="text-xs text-neutral-500 font-sans leading-relaxed pt-2">
                  {artwork.description}
                </p>
              )}
            </div>

            {/* Inquire Action Link */}
            <div className="pt-4">
              <a
                href={`mailto:contact@amrithajalajadevi.art?subject=Inquiry%20regarding%20${encodeURIComponent(artwork.title)}`}
                className="inline-block text-xs uppercase tracking-[0.15em] font-medium text-neutral-900 hover:underline underline-offset-4"
              >
                Inquire About This Artwork →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

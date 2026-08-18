"use client";

import React, { useEffect } from "react";
import { X, MapPin, Layers, Maximize2 } from "lucide-react";
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-zinc-950/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 250 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-white border border-zinc-200 shadow-2xl overflow-y-auto flex flex-col md:flex-row"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2 bg-zinc-950/70 hover:bg-zinc-950 text-white rounded-full transition-colors"
            aria-label="Close artwork preview"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left: Large Artwork Image View */}
          <div className="w-full md:w-3/5 bg-zinc-950 relative min-h-[300px] md:min-h-[450px] flex items-center justify-center">
            <CustomImage
              src={artwork.image}
              alt={artwork.title}
              fill
              objectFit="contain"
              aspectRatio="auto"
              priority
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>

          {/* Right: Artwork Metadata & Curator Details */}
          <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white">
            <div className="space-y-6">
              <div>
                <span className="inline-block px-2.5 py-1 text-[9px] uppercase tracking-widest font-semibold bg-zinc-100 text-zinc-800 border border-zinc-200 mb-2">
                  {artwork.categoryLabel}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-zinc-950 font-normal leading-tight">
                  {artwork.title}
                </h2>
                <p className="text-xs text-zinc-400 font-mono mt-1">{artwork.year}</p>
              </div>

              {/* Metadata List */}
              <div className="space-y-3 pt-4 border-t border-zinc-100 text-xs text-zinc-700">
                <div className="flex items-start gap-2.5">
                  <Layers className="w-4 h-4 text-zinc-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-zinc-400 block font-sans">
                      Medium
                    </span>
                    <span className="font-medium text-zinc-900">{artwork.medium}</span>
                  </div>
                </div>

                {artwork.dimensions && (
                  <div className="flex items-start gap-2.5">
                    <Maximize2 className="w-4 h-4 text-zinc-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-zinc-400 block font-sans">
                        Dimensions
                      </span>
                      <span className="font-medium text-zinc-900">{artwork.dimensions}</span>
                    </div>
                  </div>
                )}

                {artwork.location && (
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-zinc-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-zinc-400 block font-sans">
                        Current Location / Collection
                      </span>
                      <span className="font-medium text-zinc-900">{artwork.location}</span>
                    </div>
                  </div>
                )}
              </div>

              {artwork.description && (
                <div className="pt-3 border-t border-zinc-100">
                  <p className="text-xs text-zinc-600 font-light leading-relaxed">
                    {artwork.description}
                  </p>
                </div>
              )}
            </div>

            {/* Inquire Action */}
            <div className="pt-6 border-t border-zinc-100">
              <a
                href={`mailto:contact@amrithajalajadevi.art?subject=Inquiry%20regarding%20${encodeURIComponent(artwork.title)}`}
                className="inline-flex items-center justify-center w-full px-5 py-3 text-xs font-semibold uppercase tracking-widest bg-zinc-950 text-white hover:bg-zinc-800 transition-colors shadow-sm text-center"
              >
                Inquire About This Piece
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

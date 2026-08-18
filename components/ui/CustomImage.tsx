"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

export interface CustomImageProps extends Omit<ImageProps, "onLoad" | "onError"> {
  containerClassName?: string;
  aspectRatio?: "square" | "portrait" | "landscape" | "video" | "auto" | string;
  hoverScale?: boolean;
  caption?: string;
  objectFit?: "cover" | "contain" | "fill" | "none";
}

export function CustomImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  className = "",
  containerClassName = "",
  aspectRatio = "auto",
  hoverScale = false,
  caption,
  objectFit = "contain",
  ...rest
}: CustomImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case "square":
        return "aspect-square";
      case "portrait":
        return "aspect-[3/4]";
      case "landscape":
        return "aspect-[4/3]";
      case "video":
        return "aspect-video";
      case "auto":
        return "";
      default:
        return aspectRatio;
    }
  };

  const aspectClass = getAspectRatioClass();

  return (
    <figure
      className={`overflow-hidden bg-white ${
        fill ? "absolute inset-0 w-full h-full" : "relative w-full h-full"
      } ${aspectClass} ${containerClassName}`}
    >
      {/* Soft Minimal Loading Placeholder */}
      {isLoading && (
        <div 
          className="absolute inset-0 z-10 bg-zinc-100 animate-pulse"
          aria-hidden="true"
        />
      )}

      {/* Fallback Display on Image Error */}
      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-50 text-zinc-400 p-4 text-center">
          <svg className="w-8 h-8 mb-2 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-xs font-sans font-medium text-zinc-500">{alt || "Artwork Image"}</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt || "Amritha Jalaja Devi Artwork"}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          fill={fill}
          priority={priority}
          sizes={sizes}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          className={`
            transition-all duration-500 ease-out
            ${isLoading ? "opacity-0" : "opacity-100"}
            ${hoverScale ? "hover:scale-105 transition-transform duration-500" : ""}
            ${objectFit === "contain" ? "object-contain object-center" : objectFit === "cover" ? "object-cover object-center" : "object-fill object-center"}
            ${className}
          `}
          {...rest}
        />
      )}

      {/* Optional Caption */}
      {caption && (
        <figcaption className="text-xs text-zinc-500 font-sans mt-2 tracking-tight">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

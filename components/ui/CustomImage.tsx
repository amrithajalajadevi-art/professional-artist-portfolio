"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

export interface CustomImageProps extends Omit<ImageProps, "onLoad" | "onError" | "src"> {
  src?: string | null;
  lqip?: string | null;
  containerClassName?: string;
  aspectRatio?: "square" | "portrait" | "landscape" | "video" | "auto" | string;
  hoverScale?: boolean;
  caption?: string;
  objectFit?: "cover" | "contain" | "fill" | "none";
}

export function CustomImage({
  src,
  lqip,
  alt,
  width = 1200,
  height = 1200,
  fill = false,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  className = "",
  containerClassName = "",
  aspectRatio = "auto",
  hoverScale = false,
  caption,
  objectFit = "contain",
  quality = 95,
  loading = priority ? "eager" : undefined,
  ...rest
}: CustomImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Strict null check for image URL
  if (!src) {
    return (
      <figure className={`bg-[#EFEAE4] flex items-center justify-center p-6 text-center text-xs text-[#8A7976] font-sans ${containerClassName}`}>
        <span>{alt || "No Image Available"}</span>
      </figure>
    );
  }

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
      className={`overflow-hidden bg-[#F7F4F0] ${
        fill ? "absolute inset-0 w-full h-full" : "relative w-full h-full"
      } ${aspectClass} ${containerClassName}`}
    >
      {/* Soft Minimal Loading Placeholder */}
      {isLoading && !lqip && (
        <div 
          className="absolute inset-0 z-10 bg-[#EFEAE4] animate-pulse"
          aria-hidden="true"
        />
      )}

      {/* Fallback Display on Image Error */}
      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#EFEAE4] text-[#8A7976] p-4 text-center">
          <svg className="w-8 h-8 mb-2 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-xs font-sans font-medium text-[#8A7976]">{alt || "Artwork Image"}</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt || "Amritha Jalaja Devi Artwork"}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          fill={fill}
          priority={priority}
          loading={loading}
          placeholder={lqip ? "blur" : rest.placeholder}
          blurDataURL={lqip || rest.blurDataURL}
          sizes={sizes}
          quality={quality}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          className={`
            transition-all duration-500 ease-out block bg-[#F7F4F0]
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
        <figcaption className="text-xs text-[#8A7976] font-sans mt-2 tracking-tight">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

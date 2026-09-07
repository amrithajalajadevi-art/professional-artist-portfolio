"use client";

import React, { useState, useMemo } from "react";
import Image, { ImageProps } from "next/image";
import { urlForImage, getHotspotPosition } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface SanityCropData {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export interface SanityHotspotData {
  x?: number;
  y?: number;
  height?: number;
  width?: number;
}

export interface CustomImageProps extends Omit<ImageProps, "onLoad" | "onError" | "src"> {
  src?: string | SanityImageSource | any | null;
  image?: SanityImageSource | any | null;
  crop?: SanityCropData | null;
  hotspot?: SanityHotspotData | null;
  lqip?: string | null;
  containerClassName?: string;
  aspectRatio?: "square" | "portrait" | "landscape" | "video" | "auto" | string;
  hoverScale?: boolean;
  caption?: string;
  objectFit?: "cover" | "contain" | "fill" | "none";
}

export function CustomImage({
  src,
  image,
  crop,
  hotspot,
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
  quality = 80,
  loading = priority ? "eager" : undefined,
  style,
  ...rest
}: CustomImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // 1. Identify raw image source
  const rawSource = image || src;

  // 2. Extract crop and hotspot metadata (either passed directly as props or present on the source object)
  const activeCrop: SanityCropData | undefined = useMemo(() => {
    if (crop) return crop;
    if (typeof rawSource === "object" && rawSource !== null) {
      return rawSource.crop || rawSource.image?.crop || rawSource.coverImage?.crop;
    }
    return undefined;
  }, [crop, rawSource]);

  const activeHotspot: SanityHotspotData | undefined = useMemo(() => {
    if (hotspot) return hotspot;
    if (typeof rawSource === "object" && rawSource !== null) {
      return rawSource.hotspot || rawSource.image?.hotspot || rawSource.coverImage?.hotspot;
    }
    return undefined;
  }, [hotspot, rawSource]);

  // 3. Resolve optimized, cropped URL using @sanity/image-url
  const resolvedUrl = useMemo(() => {
    if (!rawSource) return null;

    // Sanity image object provided directly
    if (typeof rawSource === "object" && rawSource !== null) {
      return urlForImage(rawSource, {
        width: !fill && typeof width === "number" ? width : undefined,
        height: !fill && typeof height === "number" ? height : undefined,
        quality: typeof quality === "number" ? quality : 80,
      });
    }

    // String URL provided
    if (typeof rawSource === "string") {
      // If crop or hotspot metadata is available, apply it to the Sanity asset URL
      if (activeCrop || activeHotspot) {
        return (
          urlForImage(
            {
              asset: { url: rawSource },
              crop: activeCrop,
              hotspot: activeHotspot,
            },
            {
              width: !fill && typeof width === "number" ? width : undefined,
              height: !fill && typeof height === "number" ? height : undefined,
              quality: typeof quality === "number" ? quality : 80,
            }
          ) || rawSource
        );
      }
      return (
        urlForImage(rawSource, {
          width: !fill && typeof width === "number" ? width : undefined,
          height: !fill && typeof height === "number" ? height : undefined,
          quality: typeof quality === "number" ? quality : 80,
        }) || rawSource
      );
    }

    return null;
  }, [rawSource, activeCrop, activeHotspot, fill, width, height, quality]);

  // 4. Calculate hotspot focal point for CSS object-position
  const hotspotPosition = useMemo(() => {
    if (activeHotspot) {
      return getHotspotPosition({ hotspot: activeHotspot });
    }
    if (typeof rawSource === "object" && rawSource !== null) {
      return getHotspotPosition(rawSource);
    }
    return undefined;
  }, [activeHotspot, rawSource]);

  // Strict null check for image URL
  if (!resolvedUrl) {
    return (
      <figure
        className={`bg-[#EFEAE4] flex items-center justify-center p-6 text-center text-xs text-[#8A7976] font-sans ${containerClassName}`}
      >
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

  // Combine styles: user-provided style + hotspot objectPosition if available
  const imageStyle: React.CSSProperties = {
    ...(style || {}),
    ...(hotspotPosition ? { objectPosition: hotspotPosition } : {}),
  };

  return (
    <figure
      suppressHydrationWarning
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
          <svg
            className="w-8 h-8 mb-2 opacity-40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-xs font-sans font-medium text-[#8A7976]">
            {alt || "Artwork Image"}
          </span>
        </div>
      ) : (
        <Image
          suppressHydrationWarning
          src={resolvedUrl}
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
          style={imageStyle}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          className={`
            transition-all duration-500 ease-out block bg-[#F7F4F0]
            ${isLoading ? "opacity-0" : "opacity-100"}
            ${hoverScale ? "hover:scale-105 transition-transform duration-500" : ""}
            ${
              objectFit === "contain"
                ? "object-contain"
                : objectFit === "cover"
                ? "object-cover"
                : "object-fill"
            }
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

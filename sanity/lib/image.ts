import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url'
import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}

export interface UrlForImageOptions {
  width?: number
  height?: number
  quality?: number
  autoFormat?: boolean
  fit?: 'clip' | 'crop' | 'fill' | 'fillmax' | 'max' | 'scale' | 'min'
}

/**
 * Robust helper function that resolves any Sanity image source
 * (document image object with crop/hotspot, asset reference, asset stub with url, or CDN URL string)
 * into an optimized image URL applying Sanity Studio's crop and hotspot parameters.
 */
export function urlForImage(
  source: any,
  options?: UrlForImageOptions
): string | null {
  if (!source) return null

  try {
    // Unwrap nested objects if wrapped (e.g. { image: ... } or { coverImage: ... })
    const unwrapped =
      typeof source === 'object' && source !== null && (source.image || source.coverImage)
        ? source.image || source.coverImage
        : source

    // If source is a string URL
    if (typeof unwrapped === 'string') {
      // Non-Sanity external or local URLs (e.g. Unsplash, /images, data URL)
      if (!unwrapped.includes('cdn.sanity.io')) {
        return unwrapped
      }
      // Sanity URL: strip query parameters so urlToId can cleanly extract asset id
      const cleanUrl = unwrapped.split('?')[0]
      let imgBuilder = builder.image(cleanUrl)

      if (options?.autoFormat !== false) imgBuilder = imgBuilder.auto('format')
      if (options?.quality) imgBuilder = imgBuilder.quality(options.quality)
      if (options?.width) imgBuilder = imgBuilder.width(options.width)
      if (options?.height) imgBuilder = imgBuilder.height(options.height)
      if (options?.fit) imgBuilder = imgBuilder.fit(options.fit)

      return imgBuilder.url()
    }

    let imageSource: SanityImageSource = unwrapped

    // If source is an object containing crop/hotspot but has asset.url or url instead of asset._ref
    if (
      typeof unwrapped === 'object' &&
      unwrapped !== null &&
      !unwrapped._ref &&
      !unwrapped.asset?._ref &&
      !unwrapped._id &&
      !unwrapped.asset?._id &&
      (unwrapped.url || unwrapped.asset?.url || typeof unwrapped.src === 'string')
    ) {
      const rawUrl = unwrapped.url || unwrapped.asset?.url || unwrapped.src
      if (typeof rawUrl === 'string' && rawUrl.includes('cdn.sanity.io')) {
        const cleanUrl = rawUrl.split('?')[0]
        imageSource = {
          asset: { url: cleanUrl },
          crop: unwrapped.crop,
          hotspot: unwrapped.hotspot,
        } as any
      } else if (typeof rawUrl === 'string') {
        return rawUrl
      }
    }

    let imgBuilder = builder.image(imageSource)

    if (options?.autoFormat !== false) {
      imgBuilder = imgBuilder.auto('format')
    }

    if (options?.quality) {
      imgBuilder = imgBuilder.quality(options.quality)
    }

    if (options?.width) {
      imgBuilder = imgBuilder.width(options.width)
    }

    if (options?.height) {
      imgBuilder = imgBuilder.height(options.height)
    }

    if (options?.fit) {
      imgBuilder = imgBuilder.fit(options.fit)
    }

    return imgBuilder.url()
  } catch (error) {
    console.warn('Unable to build URL via @sanity/image-url:', error)
    if (typeof source === 'string') return source
    if (typeof source?.url === 'string') return source.url
    if (typeof source?.asset?.url === 'string') return source.asset.url
    return null
  }
}

/**
 * Extracts hotspot coordinates and returns CSS object-position (e.g. "42% 31%")
 * to keep the focal point centered in container elements.
 */
export function getHotspotPosition(source: any): string | undefined {
  if (!source || typeof source !== 'object') return undefined
  const hotspot =
    source.hotspot ||
    (source.asset && source.asset.hotspot) ||
    (source.image && source.image.hotspot) ||
    (source.coverImage && source.coverImage.hotspot)

  if (
    hotspot &&
    typeof hotspot.x === 'number' &&
    typeof hotspot.y === 'number'
  ) {
    const x = Math.round(hotspot.x * 100)
    const y = Math.round(hotspot.y * 100)
    return `${x}% ${y}%`
  }
  return undefined
}

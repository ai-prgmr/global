import type { Metadata } from "next"

export interface ConstructMetadataProps {
  title: string
  description: string
  path: string
  image?: string
  noIndex?: boolean
}

export const BASE_URL = "https://theglobalizers.com"

export function constructMetadata({
  title,
  description,
  path,
  image = "/global/globalizers-logo.webp",
  noIndex = false,
}: ConstructMetadataProps): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`
  const canonicalUrl = `${BASE_URL}${cleanPath === "/" ? "" : cleanPath}`
  const fullTitle = path === "/" ? title : `${title} | The Globalizers`

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: "The Globalizers",
      images: [
        {
          url: image.startsWith("http") ? image : `${BASE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.startsWith("http") ? image : `${BASE_URL}${image}`],
      creator: "@theglobalizers",
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}

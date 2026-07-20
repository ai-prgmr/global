import type { Metadata } from "next"
import { BlogPageClient } from "./BlogPageClient"
import { POSTS } from "@/lib/data/blog"

export const metadata: Metadata = {
  title: "Blog & Resources",
  description: "Expert insights on study abroad, exam preparation, visa processes, scholarships, and career guidance from The Globalizers.",
  keywords: [
    "study abroad blog",
    "GRE format guides",
    "scholarships for Indian students",
    "F-1 visa interview questions",
    "study in Germany advice",
    "IELTS vs TOEFL comparison",
  ],
  openGraph: {
    title: "Blog & Resources | The Globalizers",
    description: "Expert insights, exam tips, country guides, and career advice for your global education journey.",
    type: "website",
    url: "https://theglobalizers.com/global/blog",
  },
}

export default function BlogPage() {
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "The Globalizers Blog",
    "description": "Expert insights on study abroad, exam preparation, visa processes, scholarships, and career guidance.",
    "itemListElement": POSTS.map((post, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": post.title,
      "description": post.excerpt,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <BlogPageClient />
    </>
  )
}

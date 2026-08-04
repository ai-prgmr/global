import { BlogPageClient } from "./BlogPageClient"
import { POSTS } from "@/lib/data/blog"
import { constructMetadata } from "@/lib/metadata"

export const metadata = constructMetadata({
  title: "Blog & Overseas Education Insights",
  description:
    "Expert insights on study abroad admissions, GRE/GMAT test prep tactics, visa interview guides, and scholarships from The Globalizers.",
  path: "/blog",
})

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

import type { Metadata } from "next"
import { constructMetadata } from "@/lib/metadata"
import { generateAggregateRatingSchema } from "@/lib/schema"
import { SuccessStoriesClient } from "./SuccessStoriesClient"

export const metadata: Metadata = constructMetadata({
  title: "Student Success Stories & Global University Admits",
  description:
    "Read inspiring stories and explore verified admission results of 20,000+ students who achieved top admits to Stanford, Oxford, MIT, and Toronto with ₹50Cr+ scholarships.",
  path: "/success-stories",
})

export default function SuccessStoriesPage() {
  const ratingSchema = generateAggregateRatingSchema({
    ratingValue: "4.9",
    reviewCount: "20000",
    itemTitle: "The Globalizers Student Success & Admission Stories",
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
      />
      <SuccessStoriesClient />
    </>
  )
}

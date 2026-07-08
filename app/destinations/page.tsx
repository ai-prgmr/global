import type { Metadata } from "next"
import { DestinationsPageClient } from "./DestinationsPageClient"

export const metadata: Metadata = {
  title: "Study Abroad Destinations",
  description:
    "Explore top destinations to study abroad: USA, UK, Canada, Australia, Germany, Ireland, France, New Zealand, Singapore, Dubai, and Hong Kong. Get complete country-specific guidance.",
  keywords: [
    "study abroad destinations",
    "study in USA",
    "study in UK",
    "study in Canada",
    "study in Germany",
    "study in Australia",
    "global education destinations",
    "The Globalizers",
  ],
  openGraph: {
    title: "Study Abroad Destinations | The Globalizers",
    description:
      "Explore top destinations to study abroad: USA, UK, Canada, Australia, Germany, Ireland, and more. Detailed guides on tuition, exams, and visa processes.",
    type: "website",
  },
}

export default function DestinationsPage() {
  return <DestinationsPageClient />
}

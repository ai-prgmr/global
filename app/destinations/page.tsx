import { DestinationsPageClient } from "./DestinationsPageClient"
import { constructMetadata } from "@/lib/metadata"

export const metadata = constructMetadata({
  title: "Study Abroad Destinations & Country Guides",
  description:
    "Explore top destinations to study abroad: USA, UK, Canada, Australia, Germany, Ireland, France, New Zealand, Singapore, Dubai, China, Japan, Switzerland, and Italy.",
  path: "/destinations",
})

export default function DestinationsPage() {
  return <DestinationsPageClient />
}

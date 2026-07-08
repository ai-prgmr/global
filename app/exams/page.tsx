import type { Metadata } from "next"
import { ExamsPageClient } from "./ExamsPageClient"

export const metadata: Metadata = {
  title: "Test Preparation Programs",
  description:
    "Ace your exams with India's leading mentors. Best coaching for GRE, GMAT Focus Edition, IELTS, TOEFL, SAT, and PTE with score improvement guarantee.",
  keywords: [
    "GRE coaching",
    "GMAT coaching",
    "IELTS prep",
    "TOEFL preparation",
    "SAT prep courses",
    "PTE coaching",
    "The Globalizers coaching",
    "Prashant Hemnani GRE",
  ],
  openGraph: {
    title: "Test Preparation & Coaching | The Globalizers",
    description:
      "Prepare for GRE, GMAT, IELTS, TOEFL, SAT, and PTE with Central India's top mentors and AI-powered practice tools.",
    type: "website",
  },
}

export default function ExamsPage() {
  return <ExamsPageClient />
}

import { ExamsPageClient } from "./ExamsPageClient"
import { constructMetadata } from "@/lib/metadata"

export const metadata = constructMetadata({
  title: "Test Preparation & Coaching (GRE, GMAT, IELTS, TOEFL)",
  description:
    "Ace your exams with India's leading mentors. Best coaching for GRE, GMAT Focus Edition, IELTS, TOEFL, SAT, and PTE with score improvement guarantee.",
  path: "/exams",
})

export default function ExamsPage() {
  return <ExamsPageClient />
}

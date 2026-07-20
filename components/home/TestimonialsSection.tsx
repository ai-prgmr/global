import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { TestimonialCard } from "@/components/primitives/TestimonialCard"
import { Button } from "@/components/primitives/Button"

const FEATURED_TESTIMONIALS = [
  {
    name: "Dr. Sandeep Mehta",
    relation: "Father of Arjun Mehta (Stanford Admit)",
    quote:
      "As a parent, I was extremely anxious about the financial commitment and campus safety. Prashant sir spent hours explaining post-study work regulations and scholarship prospects. Today, Arjun is at Stanford with a $40,000 scholarship.",
    type: "Parent Review",
  },
  {
    name: "Meera Deshmukh",
    relation: "Admitted to TU Munich, Germany",
    quote:
      "The GRE Verbal coaching by Prashant sir is unparalleled. The vocabulary lists and shortcuts he taught helped me score 328. Furthermore, the visa team guided me through the Blocked Account setup with zero hassle.",
    type: "Student Review",
  },
  {
    name: "Mrs. Kavita Sharma",
    relation: "Mother of Priya Sharma (Oxford Admit)",
    quote:
      "The Globalizers handled everything — from GMAT prep to visa application. Their SOP team worked tirelessly to highlight Priya's engineering project, which played a major role in her Oxford admit.",
    type: "Parent Review",
  },
  {
    name: "Karan Patel",
    relation: "Admitted to Columbia University, USA",
    quote:
      "I had a 2-year gap in my academic record and was worried about visa approval. The mock interview rounds at The Globalizers trained me to explain my gap clearly and confidently. Got my F-1 visa stamped on the first attempt!",
    type: "Student Review",
  },
]

export function TestimonialsSection() {
  return (
    <Section variant="default">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Reviews & Feedback"
            title="What Parents & Students Say"
            description="Honest experiences shared by families who succeeded with us."
            align="left"
            className="mb-0"
          />
          <Link href="/testimonials" className="shrink-0">
            <Button variant="primary" size="sm">
              Read All Reviews
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {FEATURED_TESTIMONIALS.map((t) => (
            <TestimonialCard
              key={t.name}
              name={t.name}
              relation={t.relation}
              quote={t.quote}
              type={t.type}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { TestimonialCard } from "@/components/primitives/TestimonialCard"
import { Button } from "@/components/primitives/Button"

const FEATURED_TESTIMONIALS = [
  {
    name: "Dr Kapilesh Dave & Babita Bhatt",
    relation: "Parents of Nimish Dave",
    quote:
      "We could think of sending Nimish abroad only because we knew you were there to guide us. It has been almost 25 years since you mentored me in college, and today you extended that same guidance to my son. Seeing mentorship travel across generations gives our family immense confidence and gratitude.",
    type: "Parent Review",
  },
  {
    name: "Kavy Goyal",
    relation: "Admitted to UNC Charlotte, USA",
    quote:
      "From shortlisting the right university to applications, documentation, and finally my visa process, the entire team was always there to guide me at every step. Thank you for making the entire process smoother and much less stressful!",
    type: "Student Review",
  },
  {
    name: "Trishika Jain",
    relation: "Admitted to Study in the UK",
    quote:
      "From working on my personal statements and university applications to receiving my UK visa, Prashant Sir and the entire team guided and supported me throughout every step of the journey. Highly recommended!",
    type: "Student Review",
  },
  {
    name: "Dhruv Makhija",
    relation: "Admitted to Columbia University, USA",
    quote:
      "It's Columbia. Super thankful to Prashant sir and team. Their mentoring and guidance towards top universities made my dream come true. 10/10 for Globalizers team.",
    type: "Student Review",
  },
]

export function TestimonialsSection() {
  return (
    <Section variant="rose">
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
          {FEATURED_TESTIMONIALS.map((t, i) => (
            <TestimonialCard
              key={t.name}
              name={t.name}
              relation={t.relation}
              quote={t.quote}
              type={t.type}
              cardVariant={(["lavender", "sky", "mint", "peach"] as const)[i % 4]}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}

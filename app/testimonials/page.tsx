import type { Metadata } from "next"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { TestimonialCard } from "@/components/primitives/TestimonialCard"
import { CTABanner } from "@/components/CTABanner"

export const metadata: Metadata = {
  title: "Student Testimonials",
  description: "Read reviews and experiences shared by students and parents mentored by The Globalizers.",
}

const ALL_TESTIMONIALS = [
  {
    name: "Dr. Sandeep Mehta",
    relation: "Father of Arjun Mehta (Stanford Admit)",
    quote: "As a parent, I was extremely anxious about the financial commitment and campus safety. Prashant sir spent hours explaining post-study work regulations and scholarship prospects. Today, Arjun is at Stanford with a $40,000 scholarship.",
    type: "Parent Review",
  },
  {
    name: "Meera Deshmukh",
    relation: "Admitted to TU Munich, Germany",
    quote: "The GRE Verbal coaching by Prashant sir is unparalleled. The vocabulary lists and shortcuts he taught helped me score 328. Furthermore, the visa team guided me through the Blocked Account setup with zero hassle.",
    type: "Student Review",
  },
  {
    name: "Mrs. Kavita Sharma",
    relation: "Mother of Priya Sharma (Oxford Admit)",
    quote: "The Globalizers handled everything — from GMAT prep to visa application. Their SOP team worked tirelessly to highlight Priya's engineering project, which played a major role in her Oxford admit.",
    type: "Parent Review",
  },
  {
    name: "Karan Patel",
    relation: "Admitted to Columbia University, USA",
    quote: "I had a 2-year gap in my academic record and was worried about visa approval. The mock interview rounds at The Globalizers trained me to explain my gap clearly and confidently. Got my F-1 visa stamped on the first attempt!",
    type: "Student Review",
  },
  {
    name: "Ananya Iyer",
    relation: "Admitted to University of Toronto, Canada",
    quote: "The profile evaluation session gave me a clear realistic view of where I stood. Shortlisted 6 universities, got admits from 5! Forever grateful to the admissions team.",
    type: "Student Review",
  },
  {
    name: "Mr. Rajesh Verma",
    relation: "Father of Rohit Verma (UToronto Admit)",
    quote: "Transparency was key for us. The Globalizers team kept us informed at every single stage of application and visa filing. Professionalism at its peak.",
    type: "Parent Review",
  },
]

export default function TestimonialsPage() {
  return (
    <>
      <Section variant="default" className="py-20 md:py-28 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-72 w-96 rounded-full bg-gradient-to-tr from-sky-200/40 via-violet-200/30 to-pink-200/40 blur-3xl opacity-60 pointer-events-none" />
        <Container className="max-w-4xl">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-primary">
            Honest Reviews
          </span>
          <h1 className="mb-6 font-heading text-4xl font-extrabold tracking-tight text-primary md:text-5xl lg:text-6xl">
            What Students &amp; Parents Say
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Real experiences from families who trusted The Globalizers with their study abroad journey.
          </p>
        </Container>
      </Section>

      <Section variant="rose">
        <Container>
          <SectionHeader
            eyebrow="Feedback"
            title="Student &amp; Parent Experiences"
            description="Read verified testimonials from applicants who achieved their global study dreams."
            align="left"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ALL_TESTIMONIALS.map((t, i) => (
              <TestimonialCard
                key={t.name}
                name={t.name}
                relation={t.relation}
                quote={t.quote}
                type={t.type}
                cardVariant={(["lavender", "sky", "mint", "peach", "amber"] as const)[i % 5]}
              />
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner />
    </>
  )
}

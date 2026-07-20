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
      <Section variant="primary" className="py-20 md:py-28 text-center">
        <Container className="max-w-4xl">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-white">
            Honest Reviews
          </span>
          <h1 className="mb-6 font-heading text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            What Families Say About Us
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80 leading-relaxed">
            Real stories and unedited reviews from students and parents across India.
          </p>
        </Container>
      </Section>

      <Section variant="default">
        <Container>
          <SectionHeader
            eyebrow="Feedback"
            title="Student &amp; Parent Experiences"
            description="Read verified testimonials from applicants who achieved their global study dreams."
            align="left"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ALL_TESTIMONIALS.map((t) => (
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

      <CTABanner />
    </>
  )
}

import type { Metadata } from "next"
import { SectionHeading } from "@/components/SectionHeading"
import { CTABanner } from "@/components/CTABanner"

export const metadata: Metadata = {
  title: "Student & Parent Testimonials",
  description: "Read honest feedback and reviews from students and parents about our coaching, counselling, and visa guidance services.",
}

const TESTIMONIALS = [
  {
    name: "Dr. Sandeep Mehta (Parent)",
    relation: "Father of Arjun Mehta (Stanford Admit)",
    quote: "As a parent, I was extremely anxious about the financial commitment and campus safety. Prashant sir spent hours explaining the post-study work regulations and scholarship prospects. Today, Arjun is at Stanford with a $40,000 scholarship, and we couldn't be happier with our decision.",
    type: "Parent Review",
  },
  {
    name: "Meera Deshmukh",
    relation: "Admitted to TU Munich, Germany",
    quote: "The GRE Verbal coaching by Prashant sir is unparalleled. The vocabulary lists and shortcuts he taught helped me score 328. Furthermore, the visa team guided me through the Blocked Account setup for Germany with zero hassle.",
    type: "Student Review",
  },
  {
    name: "Mrs. Kavita Sharma (Parent)",
    relation: "Mother of Priya Sharma (Oxford Admit)",
    quote: "The Globalizers handled everything — from GMAT prep to visa application. Their SOP team worked tirelessly to highlight Priya's engineering project, which played a major role in her Oxford admit. Highly recommended for all parents seeking trusted guidance.",
    type: "Parent Review",
  },
  {
    name: "Karan Patel",
    relation: "Admitted to Columbia University, USA",
    quote: "I had a 2-year gap in my academic record and was worried about visa approval. The mock interview rounds at The Globalizers trained me to explain my gap clearly and confidently to the consular officer. Got my F-1 visa stamped on the first attempt!",
    type: "Student Review",
  },
]

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-24 text-white text-center">
        <div className="mx-auto max-w-[1280px] px-6">
          <h1 className="mb-4 font-[Montserrat] text-4xl font-bold md:text-5xl">Student &amp; Parent Reviews</h1>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            Hear directly from the families and students who have experienced our coaching, admission counselling, and visa guidance.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-[1280px] px-6 py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="flex flex-col justify-between rounded-2xl border border-surface-border bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${t.type === "Parent Review" ? "bg-secondary/10 text-secondary" : "bg-primary/10 text-primary"}`}>
                    {t.type}
                  </span>
                  <div className="flex text-success-gold">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                </div>
                <blockquote className="text-on-surface-variant text-base leading-relaxed italic mb-6">
                  &quot;{t.quote}&quot;
                </blockquote>
              </div>
              <div>
                <h4 className="font-[Montserrat] font-bold text-primary">{t.name}</h4>
                <p className="text-xs text-on-surface-variant">{t.relation}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner title="Begin Your Journey with the Most Trusted Experts" buttonText="Book a Free Consultation" />
    </>
  )
}

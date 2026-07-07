import Link from "next/link"

const FEATURED_TESTIMONIALS = [
  {
    name: "Dr. Sandeep Mehta (Parent)",
    relation: "Father of Arjun Mehta (Stanford Admit)",
    quote:
      "As a parent, I was extremely anxious about the financial commitment and campus safety. Prashant sir spent hours explaining the post-study work regulations and scholarship prospects. Today, Arjun is at Stanford with a $40,000 scholarship, and we couldn't be happier with our decision.",
    type: "Parent Review",
  },
  {
    name: "Meera Deshmukh",
    relation: "Admitted to TU Munich, Germany",
    quote:
      "The GRE Verbal coaching by Prashant sir is unparalleled. The vocabulary lists and shortcuts he taught helped me score 328. Furthermore, the visa team guided me through the Blocked Account setup for Germany with zero hassle.",
    type: "Student Review",
  },
  {
    name: "Mrs. Kavita Sharma (Parent)",
    relation: "Mother of Priya Sharma (Oxford Admit)",
    quote:
      "The Globalizers handled everything — from GMAT prep to visa application. Their SOP team worked tirelessly to highlight Priya's engineering project, which played a major role in her Oxford admit. Highly recommended for all parents seeking trusted guidance.",
    type: "Parent Review",
  },
  {
    name: "Karan Patel",
    relation: "Admitted to Columbia University, USA",
    quote:
      "I had a 2-year gap in my academic record and was worried about visa approval. The mock interview rounds at The Globalizers trained me to explain my gap clearly and confidently to the consular officer. Got my F-1 visa stamped on the first attempt!",
    type: "Student Review",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-surface-container py-20">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mb-12 flex flex-col items-end justify-between gap-4 md:flex-row">
          <div className="text-left">
            <span className="inline-block rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wider mb-2">
              Reviews & Feedback
            </span>
            <h2 className="font-[Montserrat] text-3xl font-bold text-primary">
              What Parents & Students Say
            </h2>
            <p className="mt-2 text-on-surface-variant text-sm md:text-base">
              Honest experiences shared by families who succeeded with us.
            </p>
          </div>
          <Link
            href="/testimonials"
            className="rounded-lg bg-primary px-6 py-3 font-[Montserrat] font-bold text-white transition-all hover:bg-secondary hover:shadow-lg inline-flex items-center"
          >
            Read All Reviews
            <span className="material-symbols-outlined ml-2 text-sm">
              arrow_forward
            </span>
          </Link>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {FEATURED_TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="group relative flex flex-col justify-between rounded-2xl border border-surface-border bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20"
            >
              <div>
                {/* Header Rating Stars & Badge */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex gap-0.5 text-success-gold">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-xl fill-current font-bold"
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-bold tracking-wide uppercase ${
                      t.type === "Parent Review"
                        ? "bg-secondary/10 text-secondary"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {t.type}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="mb-6 italic text-sm leading-relaxed text-on-surface-variant/90">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Reviewer Info */}
              <div className="border-t border-surface-border pt-4 flex justify-between items-center">
                <div>
                  <h4 className="font-[Montserrat] font-bold text-primary">
                    {t.name}
                  </h4>
                  <p className="text-xs text-on-surface-variant/70 mt-0.5">
                    {t.relation}
                  </p>
                </div>
                <span className="material-symbols-outlined text-4xl text-primary/10 group-hover:text-secondary/15 transition-colors">
                  format_quote
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

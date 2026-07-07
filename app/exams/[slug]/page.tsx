import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { EXAMS_DATA } from "@/lib/data/exams"
import { SectionHeading } from "@/components/SectionHeading"
import { CTABanner } from "@/components/CTABanner"

interface ExamPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(EXAMS_DATA).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: ExamPageProps): Promise<Metadata> {
  const { slug } = await params
  const exam = EXAMS_DATA[slug]

  if (!exam) {
    return {}
  }

  return {
    title: exam.metaTitle,
    description: exam.metaDescription,
  }
}

export default async function ExamSlugPage({ params }: ExamPageProps) {
  const { slug } = await params
  const exam = EXAMS_DATA[slug]

  if (!exam) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-24 text-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 font-[Inter] text-xs font-semibold uppercase tracking-wider">
              Exam Preparation
            </span>
            <h1 className="font-[Montserrat] text-4xl font-bold md:text-5xl">
              {exam.title}
            </h1>
            <p className="max-w-lg text-lg text-white/80">{exam.description}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact-us"
                className="rounded-lg bg-secondary px-8 py-4 font-[Montserrat] font-bold text-white transition-all hover:scale-105"
              >
                {exam.counsellingButtonText}
              </Link>
              {exam.slug === "gre" && (
                <Link
                  href="#"
                  className="rounded-lg border-2 border-white/30 px-8 py-4 font-[Montserrat] font-bold text-white transition-all hover:bg-white/10"
                >
                  Take a Free Mock Test
                </Link>
              )}
            </div>
          </div>

          {exam.heroImage && (
            <div className="relative hidden lg:block">
              <Image
                src={exam.heroImage}
                alt={`${exam.name} Preparation`}
                width={500}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          )}
        </div>
        <div className="absolute -bottom-40 -right-20 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
      </section>

      {/* Format Breakdown Section (GRE & GMAT) */}
      {exam.sections && (
        <section className="mx-auto max-w-[1280px] px-6 py-20">
          <SectionHeading
            title={`${exam.name} Exam Format`}
            subtitle="Understand the structure, timing, and scoring of each section."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {exam.sections.map((s) => (
              <div
                key={s.name}
                className="rounded-2xl border border-surface-border bg-white p-8 text-center transition-all hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-3xl">
                    {s.icon}
                  </span>
                </div>
                <h3 className="mb-4 font-[Montserrat] text-xl font-semibold text-primary">
                  {s.name}
                </h3>
                <div className="space-y-2 text-sm text-on-surface-variant">
                  <p className="flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-sm text-secondary">
                      schedule
                    </span>
                    {s.duration}
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-sm text-secondary">
                      quiz
                    </span>
                    {s.questions}
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-sm text-secondary">
                      bar_chart
                    </span>
                    Score: {s.score}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Custom Coaching Approach (GRE) */}
      {exam.coaching && (
        <section className="bg-surface-container py-20">
          <div className="mx-auto max-w-[1280px] px-6">
            <SectionHeading
              title={`Our ${exam.name} Coaching Approach`}
              subtitle="A blend of expert teaching, technology, and personalized attention."
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {exam.coaching.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-surface-border bg-white p-6 text-center"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">
                      {item.icon}
                    </span>
                  </div>
                  <h4 className="mb-2 font-[Montserrat] font-semibold text-primary">
                    {item.title}
                  </h4>
                  <p className="text-sm text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose The Globalizers Section (Standard layout for GMAT, IELTS, TOEFL, SAT, PTE) */}
      {!exam.coaching && (
        <section className="mx-auto max-w-[1280px] px-6 py-20">
          <SectionHeading
            title={`Why Choose The Globalizers for ${exam.name}?`}
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: "group",
                title: "Expert Faculty",
                desc: "Certified trainers with proven track records and years of experience.",
              },
              {
                icon: "smart_toy",
                title: "AI Practice Tools",
                desc: "Adaptive mock tests and AI-powered analytics to track progress.",
              },
              {
                icon: "emoji_events",
                title: "Score Guarantee",
                desc: "Our students consistently achieve above-average scores.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-surface-border bg-white p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h4 className="mb-2 font-[Montserrat] font-semibold text-primary">
                  {item.title}
                </h4>
                <p className="text-sm text-on-surface-variant">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQs Section (GRE) */}
      {exam.faqs && (
        <section className="mx-auto max-w-[1280px] px-6 py-20">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="mx-auto max-w-3xl space-y-4">
            {exam.faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-surface-border bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between p-6 font-[Montserrat] font-semibold text-primary">
                  {faq.q}
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <div className="border-t border-surface-border px-6 pb-6 pt-4 text-sm text-on-surface-variant">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>
      )}

      <CTABanner buttonText={exam.ctaBannerText} />
    </>
  )
}

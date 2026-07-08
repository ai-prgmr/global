import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { SERVICES_DATA } from "@/lib/data/services"
import { SectionHeading } from "@/components/SectionHeading"
import { CTABanner } from "@/components/CTABanner"

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES_DATA[slug]

  if (!service) {
    return {}
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
  }
}

export default async function ServiceSlugPage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = SERVICES_DATA[slug]

  if (!service) {
    notFound()
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "The Globalizers",
      "url": "https://theglobalizers.com"
    }
  }

  const faqSchema = service.faqs && service.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  } : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-24 text-white">
        <div className="mx-auto max-w-[1280px] px-6">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 font-[Inter] text-xs font-semibold uppercase tracking-wider">
            Services
          </span>
          <h1 className="mb-6 font-[Montserrat] text-4xl font-bold md:text-5xl leading-tight">
            {service.heroTitle}
          </h1>
          <p className="max-w-2xl text-lg text-white/80">
            {service.heroDescription}
          </p>
          <div className="mt-8">
            <Link
              href="/contact-us"
              className="rounded-lg bg-secondary px-8 py-4 font-[Montserrat] font-bold text-white transition-all hover:scale-105 inline-block"
            >
              {service.counsellingButtonText}
            </Link>
          </div>
        </div>
        <div className="absolute -bottom-40 -right-20 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
      </section>

      {/* 1. Counselling Specific Content */}
      {slug === "counselling" && service.studentsParents && (
        <>
          {/* For Students & Parents */}
          <section className="mx-auto max-w-[1280px] px-6 py-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* For Students */}
              <div className="space-y-6 rounded-2xl border border-surface-border bg-white p-8 md:p-10 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-2xl">
                    school
                  </span>
                </div>
                <h2 className="font-[Montserrat] text-2xl font-bold text-primary">
                  {service.studentsParents.students.title}
                </h2>
                <p className="text-on-surface-variant leading-relaxed">
                  {service.studentsParents.students.desc}
                </p>
                <ul className="space-y-3 text-sm text-on-surface-variant">
                  {service.studentsParents.students.points.map((pt) => (
                    <li key={pt.title} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-base">
                        check_circle
                      </span>
                      <span>
                        <strong>{pt.title}:</strong> {pt.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* For Parents */}
              <div className="space-y-6 rounded-2xl border border-surface-border bg-white p-8 md:p-10 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <span className="material-symbols-outlined text-2xl">
                    family_restroom
                  </span>
                </div>
                <h2 className="font-[Montserrat] text-2xl font-bold text-primary">
                  {service.studentsParents.parents.title}
                </h2>
                <p className="text-on-surface-variant leading-relaxed">
                  {service.studentsParents.parents.desc}
                </p>
                <ul className="space-y-3 text-sm text-on-surface-variant">
                  {service.studentsParents.parents.points.map((pt) => (
                    <li key={pt.title} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-base">
                        check_circle
                      </span>
                      <span>
                        <strong>{pt.title}:</strong> {pt.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Counselling Steps */}
          {service.counsellingSteps && (
            <section className="bg-surface-container py-20">
              <div className="mx-auto max-w-[1280px] px-6">
                <SectionHeading
                  title="Our Step-by-Step Guidance Journey"
                  subtitle="How we partner with you from day one to the day you step onto your global campus."
                />
                <div className="space-y-8">
                  {service.counsellingSteps.map((step) => (
                    <div
                      key={step.num}
                      className="flex flex-col md:flex-row gap-6 items-start rounded-xl bg-white p-6 md:p-8 border border-surface-border"
                    >
                      <div className="font-[Montserrat] text-3xl md:text-4xl font-bold text-secondary">
                        {step.num}
                      </div>
                      <div>
                        <h3 className="font-[Montserrat] text-xl font-bold text-primary mb-2">
                          {step.title}
                        </h3>
                        <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Trust Metrics */}
          {service.metrics && (
            <section className="mx-auto max-w-[1280px] px-6 py-20 text-center">
              <h2 className="font-[Montserrat] text-3xl font-bold text-primary mb-12">
                Admissions Excellence
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {service.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="border border-surface-border bg-white rounded-xl p-6 shadow-sm"
                  >
                    <div className="font-[Montserrat] text-3xl md:text-4xl font-bold text-secondary mb-2">
                      {m.value}
                    </div>
                    <div className="text-sm text-on-surface-variant">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </>
      )}

      {/* 2. Test Preparation Specific Content */}
      {slug === "test-preparation" && service.whyPrepMatters && (
        <>
          {/* Why Test Prep Matters */}
          <section className="mx-auto max-w-[1280px] px-6 py-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="font-[Montserrat] text-3xl font-bold text-primary">
                  {service.whyPrepMatters.title}
                </h2>
                <div className="h-1 w-20 bg-secondary" />
                <p className="text-on-surface-variant leading-relaxed">
                  {service.whyPrepMatters.desc1}
                </p>
                <p className="text-on-surface-variant leading-relaxed">
                  {service.whyPrepMatters.desc2}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.whyPrepMatters.cards.map((card) => (
                  <div
                    key={card.title}
                    className="bg-surface-container rounded-xl p-6 border border-surface-border"
                  >
                    <span className="material-symbols-outlined text-secondary text-3xl mb-3">
                      {card.icon}
                    </span>
                    <h3 className="font-[Montserrat] font-semibold text-primary mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs text-on-surface-variant">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Exams Grid */}
          {service.exams && (
            <section className="bg-surface-container py-20">
              <div className="mx-auto max-w-[1280px] px-6">
                <SectionHeading
                  title="Explore Exam Prep Routes"
                  subtitle="Click on any exam below to explore format, scoring, batch details, and fee structures."
                />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {service.exams.map((exam) => (
                    <div
                      key={exam.slug}
                      className="group flex flex-col justify-between rounded-xl border border-surface-border bg-white p-6 transition-all hover:shadow-lg"
                    >
                      <div>
                        <h3 className="font-[Montserrat] text-lg font-bold text-primary mb-3">
                          {exam.name}
                        </h3>
                        <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                          {exam.description}
                        </p>
                      </div>
                      <Link
                        href={exam.href}
                        className="inline-flex items-center text-sm font-bold text-secondary group-hover:text-primary transition-colors"
                      >
                        View Exam Page
                        <span className="material-symbols-outlined text-sm ml-1">
                          arrow_forward
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}

      {/* 3. Visa Guidance Specific Content */}
      {slug === "visa-guidance" && service.visaSections && (
        <>
          {/* Trust Rate Panel */}
          {service.metrics && (
            <section className="bg-secondary py-12 text-white text-center">
              <div className="mx-auto max-w-[1280px] px-6 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                {service.metrics.map((m, index) => (
                  <div
                    key={m.label}
                    className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
                  >
                    <div>
                      <div className="font-[Montserrat] text-5xl font-bold">
                        {m.value}
                      </div>
                      <div className="text-sm uppercase tracking-widest opacity-80 mt-1">
                        {m.label}
                      </div>
                    </div>
                    {index < service.metrics!.length - 1 && (
                      <div className="hidden md:block h-12 w-px bg-white/30" />
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Detailed Content */}
          <section className="mx-auto max-w-[1280px] px-6 py-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Documentation Checklist */}
              <div className="space-y-6">
                <h2 className="font-[Montserrat] text-2xl font-bold text-primary">
                  {service.visaSections.left.title}
                </h2>
                <div className="h-1 w-20 bg-secondary" />
                <p className="text-on-surface-variant leading-relaxed">
                  {service.visaSections.left.desc}
                </p>
                <div className="space-y-4 pt-2">
                  {service.visaSections.left.items.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <span className="material-symbols-outlined text-sm">
                          {item.icon}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-[Montserrat] font-bold text-primary text-sm">
                          {item.title}
                        </h4>
                        <p className="text-xs text-on-surface-variant mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interview Preparation */}
              <div className="space-y-6">
                <h2 className="font-[Montserrat] text-2xl font-bold text-primary">
                  {service.visaSections.right.title}
                </h2>
                <div className="h-1 w-20 bg-secondary" />
                <p className="text-on-surface-variant leading-relaxed">
                  {service.visaSections.right.desc}
                </p>
                <div className="space-y-4 pt-2">
                  {service.visaSections.right.items.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                        <span className="material-symbols-outlined text-sm">
                          {item.icon}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-[Montserrat] font-bold text-primary text-sm">
                          {item.title}
                        </h4>
                        <p className="text-xs text-on-surface-variant mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* 4. Scholarships Specific Content */}
      {slug === "scholarships" && service.scholarshipsInfo && (
        <>
          {/* Reassuring Parents & Students */}
          <section className="mx-auto max-w-[1280px] px-6 py-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="font-[Montserrat] text-3xl font-bold text-primary">
                  {service.scholarshipsInfo.left.title}
                </h2>
                <div className="h-1 w-20 bg-secondary" />
                <p className="text-on-surface-variant leading-relaxed">
                  {service.scholarshipsInfo.left.desc1}
                </p>
                <p className="text-on-surface-variant leading-relaxed">
                  {service.scholarshipsInfo.left.desc2}
                </p>
              </div>
              <div className="bg-surface-container rounded-2xl p-8 border border-surface-border space-y-6">
                <h3 className="font-[Montserrat] text-xl font-bold text-primary">
                  {service.scholarshipsInfo.right.title}
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {service.scholarshipsInfo.right.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="font-[Montserrat] text-3xl font-bold text-secondary">
                        {stat.value}
                      </div>
                      <div className="text-xs text-on-surface-variant mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Scholarship Types */}
          {service.scholarshipTypes && (
            <section className="bg-surface-container py-20">
              <div className="mx-auto max-w-[1280px] px-6">
                <SectionHeading
                  title="Types of Scholarships We Assist With"
                  subtitle="Understanding the different ways to fund your study abroad journey."
                />
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  {service.scholarshipTypes.map((s) => (
                    <div
                      key={s.type}
                      className="rounded-xl border border-surface-border bg-white p-6 md:p-8"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <span className="material-symbols-outlined">
                          payments
                        </span>
                      </div>
                      <h3 className="font-[Montserrat] text-lg font-bold text-primary mb-3">
                        {s.type}
                      </h3>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}

      {/* FAQ Section */}
      {service.faqs && (
        <section className="bg-surface-container py-20">
          <div className="mx-auto max-w-[1280px] px-6">
            <SectionHeading
              title={slug === "visa-guidance" ? "Visa & Financial FAQs" : "Frequently Asked Questions"}
              subtitle={slug === "visa-guidance" ? "Common questions parents and students ask regarding visa procedures." : "Common questions regarding our services and processes."}
            />
            <div className="mx-auto max-w-3xl space-y-4">
              {service.faqs.map((faq) => (
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
          </div>
        </section>
      )}

      {/* Unified CTA Banner */}
      <CTABanner
        title={service.ctaBannerTitle}
        buttonText={service.ctaBannerButtonText}
      />
    </>
  )
}

import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { DESTINATIONS_DATA } from "@/lib/data/destinations"
import { SectionHeading } from "@/components/SectionHeading"
import { CTABanner } from "@/components/CTABanner"

interface DestinationPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(DESTINATIONS_DATA).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: DestinationPageProps): Promise<Metadata> {
  const { slug } = await params
  const dest = DESTINATIONS_DATA[slug]

  if (!dest) {
    return {}
  }

  return {
    title: dest.metaTitle,
    description: dest.metaDescription,
  }
}

export default async function DestinationSlugPage({
  params,
}: DestinationPageProps) {
  const { slug } = await params
  const dest = DESTINATIONS_DATA[slug]

  if (!dest) {
    notFound()
  }

  const guideSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": dest.title,
    "description": dest.description,
    "publisher": {
      "@type": "EducationalOrganization",
      "name": "The Globalizers",
      "url": "https://theglobalizers.com"
    }
  }

  const faqSchema = dest.faqs && dest.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": dest.faqs.map(faq => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guideSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-tertiary py-24 text-white">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mb-6 text-6xl">{dest.flag}</div>
          <h1 className="mb-6 font-[Montserrat] text-4xl font-bold md:text-5xl">
            {dest.title}
          </h1>
          <p className="max-w-2xl text-lg text-white/70">{dest.description}</p>
          <Link
            href="/contact-us"
            className="mt-8 inline-block rounded-lg bg-secondary px-8 py-4 font-[Montserrat] font-bold text-white transition-all hover:scale-105"
          >
            {dest.counsellingButtonText}
          </Link>
        </div>
      </section>

      {/* Key Stats Section (USA and specific destinations) */}
      {dest.stats && (
        <section className="bg-primary py-12">
          <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-6 px-6 md:grid-cols-4">
            {dest.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-4 text-white"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <span className="material-symbols-outlined">{stat.icon}</span>
                </div>
                <div>
                  <div className="font-[Montserrat] text-xl font-bold">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-white/60">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Why Study in X Section (Default for other destinations) */}
      {!dest.stats && (
        <section className="mx-auto max-w-[1280px] px-6 py-20">
          <h2 className="mb-8 font-[Montserrat] text-3xl font-semibold text-primary">
            Why Study in {dest.name}?
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: "school",
                title: "World-Class Universities",
                desc: "Home to globally ranked institutions known for academic excellence and research.",
              },
              {
                icon: "work",
                title: "Career Opportunities",
                desc: "Strong post-study work rights and access to a thriving job market.",
              },
              {
                icon: "diversity_3",
                title: "Cultural Experience",
                desc: "Rich cultural diversity and a welcoming environment for international students.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-surface-border bg-white p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h3 className="mb-2 font-[Montserrat] font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="text-sm text-on-surface-variant">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Top Universities Section (USA and specific destinations) */}
      {dest.universities && (
        <section className="mx-auto max-w-[1280px] px-6 py-20">
          <SectionHeading
            title={`Top Universities in the ${dest.name}`}
            subtitle="Our students have been admitted to these prestigious institutions."
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {dest.universities.map((uni) => (
              <div
                key={uni}
                className="rounded-xl border border-surface-border bg-white p-4 text-center transition-all hover:border-primary hover:shadow-md"
              >
                <div className="mb-2 flex h-10 w-10 mx-auto items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-sm">
                    school
                  </span>
                </div>
                <span className="text-sm font-semibold text-primary">{uni}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Visa Process Section (USA and specific destinations) */}
      {dest.visaSteps && (
        <section className="bg-surface-container py-20">
          <div className="mx-auto max-w-[1280px] px-6">
            <SectionHeading
              title={`${dest.name} Student Visa Process`}
              subtitle="Our visa experts guide you through every step."
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {dest.visaSteps.map((step) => (
                <div
                  key={step.step}
                  className="flex gap-4 rounded-xl border border-surface-border bg-white p-6"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary font-[Montserrat] font-bold text-white">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-[Montserrat] font-semibold text-primary">
                      {step.title}
                    </h4>
                    <p className="mt-1 text-sm text-on-surface-variant">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs Section */}
      {dest.faqs && (
        <section className="mx-auto max-w-[1280px] px-6 py-20">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="mx-auto max-w-3xl space-y-4">
            {dest.faqs.map((faq) => (
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

      {/* Unified CTA Banner */}
      <CTABanner
        title={`Ready to Study in ${dest.name}?`}
        buttonText={dest.counsellingButtonText}
      />
    </>
  )
}

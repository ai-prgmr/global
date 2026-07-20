import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { GraduationCap, Users, CheckCircle2, ArrowRight } from "lucide-react"
import { SERVICES_DATA } from "@/lib/data/services"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { FeatureCard } from "@/components/primitives/FeatureCard"
import { StatCard } from "@/components/primitives/StatCard"
import { FAQ } from "@/components/primitives/FAQ"
import { Button } from "@/components/primitives/Button"
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
      <Section variant="lavender" className="py-20 md:py-28 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-72 w-96 rounded-full bg-gradient-to-tr from-sky-200/40 via-violet-200/30 to-pink-200/40 blur-3xl opacity-60 pointer-events-none" />
        <Container className="max-w-4xl">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-primary">
            Services
          </span>
          <h1 className="mb-6 font-heading text-4xl font-extrabold tracking-tight text-primary md:text-5xl lg:text-6xl leading-tight">
            {service.heroTitle}
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed mb-8">
            {service.heroDescription}
          </p>
          <Link href="/contact-us">
            <Button variant="secondary" size="default">
              {service.counsellingButtonText}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </Container>
      </Section>

      {/* 1. Counselling Content */}
      {slug === "counselling" && service.studentsParents && (
        <>
          <Section variant="default">
            <Container className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-3xl border border-border bg-card p-8 space-y-4 shadow-xs">
                <GraduationCap className="h-10 w-10 text-primary" />
                <h3 className="font-heading text-2xl font-bold text-primary">
                  {service.studentsParents.students.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.studentsParents.students.desc}
                </p>
                <ul className="space-y-2 pt-2 text-sm">
                  {service.studentsParents.students.points.map((pt) => (
                    <li key={pt.title} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-primary">{pt.title}:</strong> {pt.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-border bg-card p-8 space-y-4 shadow-xs">
                <Users className="h-10 w-10 text-secondary" />
                <h3 className="font-heading text-2xl font-bold text-primary">
                  {service.studentsParents.parents.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.studentsParents.parents.desc}
                </p>
                <ul className="space-y-2 pt-2 text-sm">
                  {service.studentsParents.parents.points.map((pt) => (
                    <li key={pt.title} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-primary">{pt.title}:</strong> {pt.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Container>
          </Section>

          {service.metrics && (
            <Section variant="sky">
              <Container>
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                  {service.metrics.map((m) => (
                    <StatCard key={m.label} value={m.value} label={m.label} />
                  ))}
                </div>
              </Container>
            </Section>
          )}
        </>
      )}

      {/* 2. Test Prep Content */}
      {slug === "test-preparation" && service.exams && (
        <Section variant="default">
          <Container>
            <SectionHeader
              eyebrow="Courses"
              title="Explore Exam Preparation Routes"
              description="Click on any exam below to explore syllabus, scoring, and course details."
              align="left"
            />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {service.exams.map((exam, i) => (
                <FeatureCard
                  key={exam.slug}
                  icon={GraduationCap}
                  badgeVariant={i % 3 === 0 ? "sky" : i % 3 === 1 ? "orange" : "emerald"}
                  title={exam.name}
                  description={exam.description}
                  href={exam.href}
                  ctaText="View Exam Page"
                />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* FAQ Section */}
      {service.faqs && (
        <Section variant="default">
          <Container>
            <SectionHeader
              eyebrow="Questions"
              title="Frequently Asked Questions"
              align="center"
            />
            <FAQ items={service.faqs} />
          </Container>
        </Section>
      )}

      <CTABanner
        title={service.ctaBannerTitle}
        primaryCtaText={service.ctaBannerButtonText}
      />
    </>
  )
}

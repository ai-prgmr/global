import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import {
  GraduationCap,
  Users,
  CheckCircle2,
  ArrowRight,
  Home,
  CreditCard,
  PlaneTakeoff,
  UserCheck,
  FileCheck,
  MessagesSquare,
  ShieldCheck,
  Award,
} from "lucide-react"

const FEATURE_ICONS = [Home, CreditCard, PlaneTakeoff, UserCheck]
const BADGE_VARIANTS: Array<"sky" | "emerald" | "orange" | "amber"> = ["sky", "emerald", "orange", "amber"]
import { SERVICES_DATA } from "@/lib/data/services"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { FeatureCard } from "@/components/primitives/FeatureCard"
import { StatCard } from "@/components/primitives/StatCard"
import { FAQ } from "@/components/primitives/FAQ"
import { Button } from "@/components/primitives/Button"
import { CTABanner } from "@/components/CTABanner"

import { constructMetadata } from "@/lib/metadata"
import { generateServiceSchema, generateFAQSchema } from "@/lib/schema"

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

  return constructMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${slug}`,
  })
}

export default async function ServiceSlugPage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = SERVICES_DATA[slug]

  if (!service) {
    notFound()
  }

  const serviceSchema = generateServiceSchema({
    name: service.title,
    description: service.description,
    path: `/services/${slug}`,
  })

  const faqSchema = generateFAQSchema(service.faqs || [])

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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-72 w-96 rounded-full bg-linear-to-tr from-sky-200/40 via-violet-200/30 to-pink-200/40 blur-3xl opacity-60 pointer-events-none" />
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

      {/* 3. Visa Guidance Framework */}
      {slug === "visa-guidance" && service.visaSections && (
        <Section variant="default">
          <Container className="space-y-12">
            <SectionHeader
              eyebrow="Proven Methodology"
              title="Our End-to-End Visa Success Framework"
              description="A rigorous 2-pillar approach combining meticulous documentation audits and live embassy mock interviews."
              align="left"
            />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Left Column: Documentation & Audit */}
              <div className="rounded-3xl border border-violet-100 bg-violet-50/50 p-8 space-y-6 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 border border-violet-200 shadow-2xs">
                      <FileCheck className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-violet-100 border border-violet-200 px-3 py-1 text-xs font-bold text-violet-800 uppercase">
                      Pillar 01
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                    {service.visaSections.left.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {service.visaSections.left.desc}
                  </p>

                  <div className="space-y-4 border-t border-violet-200/60 pt-5">
                    {service.visaSections.left.items.map((item) => (
                      <div key={item.title} className="rounded-2xl bg-white/80 border border-violet-100/80 p-4 shadow-2xs">
                        <div className="font-heading font-bold text-primary text-base mb-1">
                          {item.title}
                        </div>
                        <div className="text-xs text-muted-foreground leading-relaxed">
                          {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Mock Interview Prep */}
              <div className="rounded-3xl border border-orange-100 bg-orange-50/50 p-8 space-y-6 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-700 border border-orange-200 shadow-2xs">
                      <MessagesSquare className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-orange-100 border border-orange-200 px-3 py-1 text-xs font-bold text-orange-800 uppercase">
                      Pillar 02
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                    {service.visaSections.right.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {service.visaSections.right.desc}
                  </p>

                  <div className="space-y-4 border-t border-orange-200/60 pt-5">
                    {service.visaSections.right.items.map((item) => (
                      <div key={item.title} className="rounded-2xl bg-white/80 border border-orange-100/80 p-4 shadow-2xs">
                        <div className="font-heading font-bold text-primary text-base mb-1">
                          {item.title}
                        </div>
                        <div className="text-xs text-muted-foreground leading-relaxed">
                          {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* 4. Scholarships Content */}
      {slug === "scholarships" && service.scholarshipsInfo && (
        <Section variant="default">
          <Container className="space-y-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-3xl border border-border bg-card p-8 space-y-4 shadow-xs">
                <span className="rounded-full bg-amber-100 border border-amber-200 px-3 py-1 text-xs font-bold text-amber-800 uppercase">
                  Winning Strategy
                </span>
                <h3 className="font-heading text-2xl font-bold text-primary">
                  {service.scholarshipsInfo.left.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.scholarshipsInfo.left.desc1}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.scholarshipsInfo.left.desc2}
                </p>
              </div>

              <div className="rounded-3xl border border-amber-100 bg-amber-50/50 p-8 space-y-4 shadow-xs">
                <span className="rounded-full bg-amber-100 border border-amber-200 px-3 py-1 text-xs font-bold text-amber-800 uppercase">
                  Proven Impact
                </span>
                <h3 className="font-heading text-2xl font-bold text-primary">
                  {service.scholarshipsInfo.right.title}
                </h3>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  {service.scholarshipsInfo.right.stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl bg-white p-4 border border-amber-100 shadow-2xs text-center">
                      <div className="font-heading text-2xl font-extrabold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {service.scholarshipTypes && (
              <div>
                <SectionHeader
                  eyebrow="Categories"
                  title="Types of Scholarships We Target"
                  description="From full tuition waivers to government and university-funded grants."
                  align="left"
                />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {service.scholarshipTypes.map((type, i) => (
                    <div
                      key={type.type}
                      className="rounded-3xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700 font-bold text-sm mb-4">
                          0{i + 1}
                        </div>
                        <h4 className="font-heading text-lg font-bold text-primary mb-2">
                          {type.type}
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {type.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Container>
        </Section>
      )}

      {/* 5. Features Content (e.g. Post-Admission) */}
      {service.features && (
        <Section variant="default">
          <Container>
            <SectionHeader
              eyebrow="Key Services"
              title="What We Handle For You"
              description="Comprehensive assistance ensuring a seamless transition from offer letter to campus arrival."
              align="left"
            />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {service.features.map((feat, i) => (
                <FeatureCard
                  key={feat.title}
                  icon={FEATURE_ICONS[i % FEATURE_ICONS.length]}
                  badgeVariant={BADGE_VARIANTS[i % BADGE_VARIANTS.length]}
                  title={feat.title}
                  description={feat.desc}
                />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* 4. Metrics Section */}
      {service.metrics && slug !== "counselling" && (
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

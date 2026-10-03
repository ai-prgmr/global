import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { MapPin, Phone, Mail, Clock, ExternalLink, GraduationCap, CheckCircle2, ArrowRight, ShieldCheck, Award } from "lucide-react"
import { LOCATIONS_DATA } from "@/lib/data/locations"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { StatCard } from "@/components/primitives/StatCard"
import { FeatureCard } from "@/components/primitives/FeatureCard"
import { Card } from "@/components/primitives/Card"
import { FAQ } from "@/components/primitives/FAQ"
import { Button } from "@/components/primitives/Button"
import { CTABanner } from "@/components/CTABanner"
import { constructMetadata } from "@/lib/metadata"
import { generateBranchLocalBusinessSchema, generateFAQSchema } from "@/lib/schema"

interface LocationPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(LOCATIONS_DATA).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const { slug } = await params
  const location = LOCATIONS_DATA[slug]

  if (!location) {
    return {}
  }

  return constructMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    path: `/locations/${slug}`,
  })
}

export default async function LocationSlugPage({ params }: LocationPageProps) {
  const { slug } = await params
  const location = LOCATIONS_DATA[slug]

  if (!location) {
    notFound()
  }

  const localBusinessSchema = generateBranchLocalBusinessSchema(location)
  const faqSchema = generateFAQSchema(location.faqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero */}
      <Section variant="default" className="py-20 md:py-28 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-80 w-120 rounded-full bg-linear-to-tr from-sky-200/50 via-violet-200/40 to-amber-200/50 blur-3xl opacity-70 pointer-events-none" />
        <Container className="max-w-4xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20">
            <MapPin className="h-3.5 w-3.5 text-secondary" />
            {location.tag}
          </span>
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-primary md:text-5xl lg:text-6xl leading-tight">
            {location.heroTitle}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed md:text-xl">
            {location.heroDescription}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact-us">
                Book In-Person Counselling in {location.city}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={`tel:${location.phone.replace(/\s+/g, "")}`}>
                <Phone className="mr-2 h-4 w-4 text-secondary" />
                Call {location.phone}
              </a>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Local Branch Stats */}
      <Section variant="sky">
        <Container>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {location.stats.map((stat, idx) => (
              <StatCard
                key={idx}
                value={stat.value}
                label={stat.label}
                description={stat.description}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Branch Address & Contact Card */}
      <Section variant="default">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
            <Card variant="peach" className="lg:col-span-7 flex flex-col justify-between p-8 md:p-10">
              <div>
                <span className="mb-3 inline-block rounded-full bg-secondary/15 px-3 py-1 font-sans text-xs font-bold uppercase tracking-wider text-primary">
                  Branch Information
                </span>
                <h2 className="mb-6 font-heading text-2xl font-bold text-primary md:text-3xl">
                  {location.city}&nbsp; Center Address &amp; Contact
                </h2>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 shrink-0 text-secondary mt-1" />
                    <div>
                      <h4 className="font-heading font-bold text-primary text-base">Physical Address</h4>
                      <p className="text-sm md:text-base">{location.address}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Landmark: {location.landmark}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 shrink-0 text-secondary" />
                    <div>
                      <h4 className="font-heading font-bold text-primary text-base">Direct Helpline</h4>
                      <a href={`tel:${location.phone.replace(/\s+/g, "")}`} className="hover:text-primary transition-colors text-sm md:text-base font-semibold">
                        {location.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 shrink-0 text-secondary" />
                    <div>
                      <h4 className="font-heading font-bold text-primary text-base">Branch Email</h4>
                      <a href={`mailto:${location.email}`} className="hover:text-primary transition-colors text-sm md:text-base font-semibold">
                        {location.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Clock className="h-5 w-5 shrink-0 text-secondary" />
                    <div>
                      <h4 className="font-heading font-bold text-primary text-base">Working Hours</h4>
                      <p className="text-sm md:text-base">{location.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-8 border-t border-border/80">
                <Button variant="secondary" className="w-full sm:w-auto" asChild>
                  <a href={location.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    Open in Google Maps
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>

            <Card variant="mint" className="lg:col-span-5 flex flex-col justify-between p-8 md:p-10">
              <div>
                <span className="mb-3 inline-block rounded-full bg-emerald-500/15 px-3 py-1 font-sans text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                  Why Visit In-Person?
                </span>
                <h3 className="mb-6 font-heading text-2xl font-bold text-primary">
                  Offline Mentorship Advantages
                </h3>

                <ul className="space-y-4 text-muted-foreground text-sm md:text-base">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                    <span>Face-to-face profile evaluation with senior advisors.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                    <span>Access to computer lab for GRE/GMAT full-length mock tests.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                    <span>Physical library access with official GRE, GMAT, and IELTS study prep material.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                    <span>Mock visa interview rooms simulating embassy setup.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-8 border-t border-border/80">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact-us">
                    Schedule In-Person Visit
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Local Highlights */}
      <Section variant="lavender">
        <Container>
          <SectionHeader
            eyebrow={`Services in ${location.city}`}
            title={`What We Offer at ${location.city} Center`}
            description={`Comprehensive study abroad preparation, testing facilities, and admissions support in ${location.city}.`}
            align="center"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {location.highlights.map((item, idx) => (
              <FeatureCard
                key={idx}
                icon={idx % 2 === 0 ? GraduationCap : ShieldCheck}
                badgeVariant={idx % 2 === 0 ? "sky" : "emerald"}
                cardVariant={(["white", "peach", "mint", "sky"] as const)[idx % 4]}
                title={item.title}
                description={item.description}
                href="/contact-us"
                ctaText="Enquire Now"
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Local FAQs */}
      <Section variant="default">
        <Container>
          <SectionHeader
            eyebrow="Local Support"
            title={`Frequently Asked Questions — ${location.city}`}
            description={`Everything you need to know about visiting or enrolling at our ${location.city} branch.`}
            align="center"
          />
          <FAQ items={location.faqs} />
        </Container>
      </Section>

      <CTABanner
        title={`Ready to Start Your Study Abroad Journey in ${location.city}?`}
        subtitle={`Book a free 1-on-1 counseling session with our ${location.city} team today.`}
        primaryCtaText={`Book ${location.city} Counseling`}
      />
    </>
  )
}

import Image from "next/image"
import type { Metadata } from "next"
import { Flag, Eye, MapPin, Phone } from "lucide-react"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { Card } from "@/components/primitives/Card"
import { FeatureCard } from "@/components/primitives/FeatureCard"
import { CTABanner } from "@/components/CTABanner"
import { constructMetadata } from "@/lib/metadata"

export const metadata = constructMetadata({
  title: "Our Story & 20+ Years Legacy",
  description:
    "Discover the journey of The Globalizers, India's premier study abroad consultancy founded by Prashant Hemnani in 2007. 20,000+ admits and ₹50Cr+ scholarships.",
  path: "/about-globalizers",
})

const MILESTONES = [
  { year: "2007", title: "Foundation", description: "The Globalizers founded in Indore by Prashant Hemnani with a vision to democratize global education." },
  { year: "2012", title: "1,000th Student", description: "Celebrated mentoring 1,000 students with admits to top global universities." },
  { year: "2016", title: "6,000th Student", description: "Milestone of 6,000+ students mentored with admits to 500+ universities globally." },
  { year: "2019", title: "MP Visionary Award", description: "Founder Prashant Hemnani recognized with the Madhya Pradesh Visionary Education Award." },
  { year: "2024", title: "Jaipur Center", description: "Opened branch office in Jaipur, extending reach to ambitious students across Rajasthan." },
  { year: "2026", title: "Digital Mentorship", description: "Expanded nationwide hybrid mentoring, connecting students across India with expert counselors." },
]

const OFFICES = [
  { city: "Indore (HQ)", tag: "Headquarters", address: "301-302, Tulsi Tower, Geeta Bhawan Square, AB Rd, Indore, Madhya Pradesh 452001", phone: "+91 7024252910" },
  { city: "Jaipur", tag: "Branch", address: "1st Floor, 302, Anchor Mall, Madrampur, Civil Lines, Jaipur, Rajasthan 302006", phone: "+91 86001 80075" },
]

const OFFICES_OTHER = [
  { city: "Navi Mumbai" },
  { city: "Noida" },
]

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About The Globalizers",
    "description": "Discover the journey of The Globalizers, India's premier study abroad consultancy founded by Prashant Hemnani in 2007.",
    "mainEntity": {
      "@type": "EducationalOrganization",
      "name": "The Globalizers",
      "foundingDate": "2007",
      "founder": {
        "@type": "Person",
        "name": "Prashant Hemnani"
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* Hero */}
      <Section variant="lavender" className="py-20 md:py-28 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-72 w-96 rounded-full bg-gradient-to-tr from-sky-200/40 via-violet-200/30 to-pink-200/40 blur-3xl opacity-60 pointer-events-none" />
        <Container>
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-primary">
            Est. 2007
          </span>
          <h1 className="mb-6 font-heading text-4xl font-bold md:text-5xl lg:text-6xl text-primary">
            Our Story
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
            From a single classroom in Indore to India&apos;s most trusted study abroad
            consultancy — 20 years of changing lives, one student at a time.
          </p>
        </Container>
      </Section>

      {/* Origin Story */}
      <Section variant="default">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <SectionHeader
              eyebrow="20 Years of Excellence"
              title="How It All Began"
              description="In 2007, Prashant Hemnani — a passionate educator with a vision — founded The Globalizers in Indore, Madhya Pradesh. What began as a small coaching center for GRE aspirants has grown into Central India's most comprehensive study abroad consultancy."
              align="left"
              className="mb-4"
            />
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Driven by the belief that every student deserves access to world-class
              education, The Globalizers has mentored over 20,000 students, helping them
              secure admits at 500+ universities across 12 countries — including Ivy
              League institutions like Harvard, Stanford, and Columbia.
            </p>
          </div>
          <div className="relative aspect-3/4 overflow-hidden rounded-3xl border border-border shadow-lg">
            <Image
              src="/global/prashant-hemnani.png"
              alt="The Globalizers office"
              fill
              className="object-cover"
            />
          </div>
        </Container>
      </Section>

      {/* Mission & Vision */}
      <Section variant="lavender">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <FeatureCard
              icon={Flag}
              badgeVariant="sky"
              cardVariant="sky"
              title="Our Mission"
              description="To democratize world-class education for every Indian student, ensuring that financial or geographical barriers never limit potential. We provide end-to-end support from test preparation to post-landing assistance."
            />
            <FeatureCard
              icon={Eye}
              badgeVariant="emerald"
              cardVariant="mint"
              title="Our Vision"
              description="To be India's most trusted and technologically advanced global education partner — empowering 50,000 students by 2030 through AI-driven learning, expert mentorship, and an unwavering commitment to student success."
            />
          </div>
        </Container>
      </Section>

      {/* Milestones */}
      <Section variant="default">
        <Container>
          <SectionHeader
            eyebrow="Evolution"
            title="Our Journey & Milestones"
            description="Key milestones that shaped The Globalizers story."
            align="center"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MILESTONES.map((m, i) => (
              <Card
                key={m.year}
                padding="default"
                variant={(["lavender", "sky", "mint", "peach", "rose"] as const)[i % 5]}
                className="flex flex-col justify-between"
              >
                <div>
                  <span className="font-heading text-sm font-bold text-secondary uppercase tracking-wider">
                    {m.year}
                  </span>
                  <h4 className="mt-2 mb-2 font-heading text-xl font-bold text-primary">
                    {m.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Office Locations */}
      <Section variant="default">
        <Container>
          <SectionHeader
            eyebrow="Presence"
            title="Our Offices Across India"
            description=""
            align="left"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {OFFICES.map((office) => (
              <Card key={office.city} padding="sm" variant="sky" className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-heading text-lg font-bold text-primary flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-secondary shrink-0" />
                    {office.city}
                  </h4>
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    {office.tag}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {office.address}
                </p>
                <p className="flex items-center gap-1 text-xs font-semibold text-primary pt-2 border-t border-border">
                  <Phone className="h-3.5 w-3.5 text-secondary shrink-0" />
                  {office.phone}
                </p>
              </Card>
            ))}
            {OFFICES_OTHER.map((office) => (
              <Card key={office.city} padding="sm" variant="sky" className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-heading text-lg font-bold text-primary flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-secondary shrink-0" />
                    {office.city}
                  </h4>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner />
    </>
  )
}

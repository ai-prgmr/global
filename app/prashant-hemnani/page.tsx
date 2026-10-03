import type { Metadata } from "next"
import Image from "next/image"
import { Trophy, Quote, Globe, Mic, Award, Sparkles } from "lucide-react"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { FounderCard } from "@/components/primitives/FounderCard"
import { StatCard } from "@/components/primitives/StatCard"
import { Card } from "@/components/primitives/Card"
import { IconBadge } from "@/components/primitives/IconBadge"
import { CTABanner } from "@/components/CTABanner"
import Reveal from "@/components/Reveal"
import { constructMetadata } from "@/lib/metadata"

export const metadata = constructMetadata({
  title: "Prashant Hemnani — Founder & Chief Mentor",
  description:
    "Meet Prashant Hemnani, India's leading GRE Verbal authority and founder of The Globalizers. 20+ years of transforming global education futures.",
  path: "/prashant-hemnani",
})

const AWARDS = [
  {
    title: "MP Visionary Education Award",
    description: "Recognized for outstanding contribution to education in Madhya Pradesh.",
    image: "/global/Prashant-hemnani-CM-award.jpg",
    badge: "State Level Honor",
    icon: Trophy,
    cardVariant: "peach" as const,
    badgeVariant: "orange" as const,
  },
  {
    title: "EduCo Global Recognition",
    description: "Awarded for excellence in international education consulting.",
    icon: Globe,
    cardVariant: "lavender" as const,
    badgeVariant: "violet" as const,
  },
  {
    title: "Indo-American Summit Feature",
    description: "Featured speaker at the Indo-American Education Summit.",
    icon: Mic,
    cardVariant: "mint" as const,
    badgeVariant: "emerald" as const,
  },
  {
    title: "Top 50 Education Leaders",
    description: "Named among India's Top 50 Education Leaders by Education World.",
    icon: Award,
    cardVariant: "amber" as const,
    badgeVariant: "amber" as const,
  },
]

export default function FounderPage() {
  const founderSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Prashant Hemnani",
    "jobTitle": "Founder & Chief Mentor",
    "worksFor": {
      "@type": "EducationalOrganization",
      "name": "The Globalizers",
      "url": "https://theglobalizers.com"
    },
    "description": "India's leading GRE Verbal authority and founder of The Globalizers. Over 20+ years of experience mentoring 20,000+ students for global education.",
    "sameAs": [
      "https://linkedin.com"
    ],
    "award": [
      "MP Visionary Education Award",
      "EduCo Global Recognition",
      "Indo-American Summit Feature",
      "Top 50 Education Leaders"
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
      />

      {/* Hero */}
      <Section variant="sky" className="py-20 md:py-28 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-72 w-96 rounded-full bg-linear-to-tr from-sky-200/40 via-violet-200/30 to-pink-200/40 blur-3xl opacity-60 pointer-events-none" />
        <Container>
          <FounderCard
            name="Prashant Hemnani"
            designation="Founder & Chief Mentor, The Globalizers"
            mission="Our mission is to democratize world-class education for every Indian student, ensuring that financial or geographical barriers never limit potential."
            imageSrc="/global/prashant-hemnani.png"
            href="/contact-us"
          />
        </Container>
      </Section>

      {/* Biography */}
      <Section variant="default">
        <Container >
          <SectionHeader
            eyebrow="Visionary Mentorship"
            title="The Journey & Story"
            description="Prashant Hemnani's journey in education began with a deep-rooted passion for teaching and a belief that every student deserves access to world-class opportunities."
            align="left"
          />
          <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              After completing his own education abroad, he returned to Indore in 2007 with a vision:
              to create an institution that would bridge the gap between Indian students and
              global universities.
            </p>
            <p>
              What started as GRE coaching classes quickly evolved into a comprehensive study
              abroad consultancy. His unique teaching methodology — combining rigorous academics
              with personal mentorship — set The Globalizers apart. His GRE Verbal strategies
              are now considered among the most effective in India, earning him the reputation
              as &quot;India&apos;s GRE Verbal authority.&quot;
            </p>
            <p>
              Today, under his leadership, The Globalizers has expanded to four cities, launched
              an AI-powered learning platform, and maintains a near-perfect visa success rate
              of 98%.
            </p>
          </div>
        </Container>
      </Section>

      {/* Stats */}
      <Section variant="lavender">
        <Container>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <StatCard value="20+" label="Years of Experience" description="Coaching & Mentorship" />
            <StatCard value="20,000+" label="Students Mentored" description="Top Global Admits" />
            <StatCard value="25,000+" label="Coaching Sessions" description="Individual Guidance" />
            <StatCard value="98%" label="Visa Success Rate" description="Consular Approval Record" />
          </div>
        </Container>
      </Section>

      {/* Awards Bento */}
      <Section variant="sky">
        <Container>
          <Reveal direction="up" delay={50}>
            <SectionHeader
              eyebrow="Excellence"
              title="Awards & Recognition"
              description="National and regional honors for leadership in international education."
              align="center"
            />
          </Reveal>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-stretch">
            {/* Featured Bento Hero Card with Image */}
            <div className="lg:col-span-7 flex">
              <Card
                variant={AWARDS[0].cardVariant}
                padding="none"
                className="overflow-hidden flex flex-col justify-between w-full shadow-md group"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden bg-muted">
                  <Image
                    src={AWARDS[0].image!}
                    alt={AWARDS[0].title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 left-4">
                    <IconBadge icon={AWARDS[0].icon} variant={AWARDS[0].badgeVariant} className="shadow-lg backdrop-blur-xs" />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-orange-800 shadow-xs">
                      <Sparkles className="h-3.5 w-3.5 text-secondary" />
                      {AWARDS[0].badge}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-3">
                    {AWARDS[0].title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {AWARDS[0].description}
                  </p>
                </div>
              </Card>
            </div>

            {/* Other 3 Bento Cards */}
            <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6 justify-between">
              {AWARDS.slice(1).map((award) => {
                const Icon = award.icon
                return (
                  <Card
                    key={award.title}
                    variant={award.cardVariant}
                    padding="default"
                    className="shadow-sm flex flex-col justify-center flex-1 transition-all duration-300 hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <IconBadge icon={Icon} variant={award.badgeVariant} className="shrink-0" />
                      <div>
                        <h4 className="font-heading text-lg md:text-xl font-bold text-primary mb-1.5">
                          {award.title}
                        </h4>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                          {award.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Philosophy Quote */}
      <Section variant="peach" className="text-center">
        <Container className="max-w-3xl">
          <Quote className="mx-auto h-12 w-12 text-secondary mb-6" />
          <blockquote className="font-heading text-2xl font-bold italic leading-relaxed md:text-3xl text-primary">
            &quot;Education is not just about scores — it&apos;s about
            transformation. Every student who walks through our doors
            leaves as a global citizen.&quot;
          </blockquote>
          <div className="mt-8">
            <div className="font-heading text-lg font-bold text-primary">Prashant Hemnani</div>
            <div className="text-muted-foreground text-sm">Founder &amp; Chief Mentor</div>
          </div>
        </Container>
      </Section>

      <CTABanner />
    </>
  )
}

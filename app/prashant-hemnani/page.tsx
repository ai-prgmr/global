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
import { cn } from "@/lib/utils"

export const metadata = constructMetadata({
  title: "Prashant Hemnani — Founder & Chief Mentor",
  description:
    "Meet Prashant Hemnani, India's leading GRE Verbal authority and founder of The Globalizers. 20+ years of transforming global education futures.",
  path: "/prashant-hemnani",
})

interface AwardItem {
  title: string
  description: string
  image?: string
  imagePosition?: string
  badge?: string
  icon: typeof Trophy
  cardVariant: "peach" | "lavender" | "mint" | "amber"
  badgeVariant: "orange" | "violet" | "emerald" | "amber"
}

const AWARDS: AwardItem[] = [
  {
    title: "MP Visionary Education Award",
    description: "Recognized for outstanding contribution to education in Madhya Pradesh.",
    image: "/global/Prashant-hemnani-CM-award.jpg",
    imagePosition: "object-center",
    badge: "State Level Honor",
    icon: Trophy,
    cardVariant: "peach",
    badgeVariant: "orange",
  },
  {
    title: "EduCo Global Recognition",
    description: "Awarded for excellence in international education consulting.",
    badge: "Global Partner Honor",
    icon: Globe,
    cardVariant: "lavender",
    badgeVariant: "violet",
  },
  {
    title: "Indo-American Summit Feature",
    description: "Featured speaker at the Indo-American Education Summit.",
    image: "/global/Indo-USA.png",
    imagePosition: "object-top",
    badge: "International Summit",
    icon: Mic,
    cardVariant: "mint",
    badgeVariant: "emerald",
  },
  {
    title: "Top 50 Education Leaders",
    description: "Named among India's Top 50 Education Leaders by Education World.",
    badge: "National Recognition",
    icon: Award,
    cardVariant: "amber",
    badgeVariant: "amber",
  },
]

const BADGE_TEXT_COLORS: Record<string, string> = {
  orange: "text-orange-800",
  emerald: "text-emerald-800",
  violet: "text-violet-800",
  amber: "text-amber-800",
}

function AwardCard({ award }: { award: AwardItem }) {
  const Icon = award.icon
  const badgeTextColor = BADGE_TEXT_COLORS[award.badgeVariant] || "text-primary"

  if (award.image) {
    return (
      <Card
        variant={award.cardVariant}
        padding="none"
        className="overflow-hidden flex flex-col justify-between w-full shadow-md group"
      >
        <div className="relative aspect-16/10 w-full overflow-hidden bg-muted">
          <Image
            src={award.image}
            alt={award.title}
            fill
            className={cn(
              "object-cover transition-transform duration-500 group-hover:scale-105",
              award.imagePosition || "object-center"
            )}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-80" />
          <div className="absolute top-4 left-4">
            <IconBadge icon={Icon} variant={award.badgeVariant} className="shadow-lg backdrop-blur-xs" />
          </div>
          {award.badge && (
            <div className="absolute bottom-4 left-4">
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3.5 py-1 text-xs font-bold shadow-xs",
                  badgeTextColor
                )}
              >
                <Sparkles className="h-3.5 w-3.5 text-secondary" />
                {award.badge}
              </span>
            </div>
          )}
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
          <h3 className="font-heading text-xl md:text-2xl font-bold text-primary mb-2.5">
            {award.title}
          </h3>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {award.description}
          </p>
        </div>
      </Card>
    )
  }

  return (
    <Card
      variant={award.cardVariant}
      padding="default"
      className="shadow-sm flex flex-col justify-center flex-1 transition-all duration-300 hover:shadow-md"
    >
      <div className="flex items-start gap-4">
        <IconBadge icon={Icon} variant={award.badgeVariant} className="shrink-0" />
        <div>
          {award.badge && (
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-semibold mb-2 shadow-2xs",
                badgeTextColor
              )}
            >
              <Sparkles className="h-3 w-3 text-secondary" />
              {award.badge}
            </span>
          )}
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
}

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
            mission="A good study-abroad decision is not about just going abroad. It is about choosing the right next 10 years."
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

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 items-stretch">
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              <AwardCard award={AWARDS[0]} />
              <AwardCard award={AWARDS[1]} />
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              <AwardCard award={AWARDS[2]} />
              <AwardCard award={AWARDS[3]} />
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

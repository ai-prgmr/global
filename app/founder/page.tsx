import type { Metadata } from "next"
import { Trophy, Quote } from "lucide-react"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { FounderCard } from "@/components/primitives/FounderCard"
import { StatCard } from "@/components/primitives/StatCard"
import { FeatureCard } from "@/components/primitives/FeatureCard"
import { CTABanner } from "@/components/CTABanner"

export const metadata: Metadata = {
  title: "Founder — Prashant Hemnani",
  description: "Meet Prashant Hemnani, India's leading GRE Verbal authority and founder of The Globalizers. 19+ years of transforming students' futures.",
}

const AWARDS = [
  { year: "2019", title: "MP Visionary Education Award", description: "Recognized for outstanding contribution to education in Madhya Pradesh." },
  { year: "2021", title: "EduCo Global Recognition", description: "Awarded for excellence in international education consulting." },
  { year: "2023", title: "Indo-American Summit Feature", description: "Featured speaker at the Indo-American Education Summit." },
  { year: "2024", title: "Top 50 Education Leaders", description: "Named among India's Top 50 Education Leaders by Education World." },
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
    "description": "India's leading GRE Verbal authority and founder of The Globalizers. Over 19+ years of experience mentoring 6,000+ students for global education.",
    "sameAs": [
      "https://linkedin.com"
    ],
    "award": [
      "MP Visionary Education Award 2019",
      "EduCo Global Recognition 2021",
      "Indo-American Summit Feature 2023",
      "Top 50 Education Leaders 2024"
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-72 w-96 rounded-full bg-gradient-to-tr from-sky-200/40 via-violet-200/30 to-pink-200/40 blur-3xl opacity-60 pointer-events-none" />
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
        <Container className="max-w-3xl">
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
            <StatCard value="19+" label="Years of Experience" description="Coaching & Mentorship" />
            <StatCard value="6,000+" label="Students Mentored" description="Top Global Admits" />
            <StatCard value="25,000+" label="Coaching Sessions" description="Individual Guidance" />
            <StatCard value="98%" label="Visa Success Rate" description="Consular Approval Record" />
          </div>
        </Container>
      </Section>

      {/* Awards */}
      <Section variant="sky">
        <Container>
          <SectionHeader
            eyebrow="Excellence"
            title="Awards & Recognition"
            description="National and regional honors for leadership in international education."
            align="center"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {AWARDS.map((award, i) => (
              <FeatureCard
                key={award.title}
                icon={Trophy}
                badgeVariant={i % 2 === 0 ? "orange" : "amber"}
                cardVariant={(["peach", "amber", "sky", "mint"] as const)[i % 4]}
                title={`${award.year} — ${award.title}`}
                description={award.description}
              />
            ))}
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

      <CTABanner primaryCtaText="Book a Session with Prashant" />
    </>
  )
}

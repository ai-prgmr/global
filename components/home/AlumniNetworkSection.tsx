import Link from "next/link"
import {
  Users,
  Globe2,
  Home,
  GraduationCap,
  Briefcase,
  HeartHandshake,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Sparkles,
  Compass,
} from "lucide-react"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { Card } from "@/components/primitives/Card"
import { IconBadge } from "@/components/primitives/IconBadge"
import { Button } from "@/components/primitives/Button"
import Reveal from "@/components/Reveal"

const ALUMNI_STATS = [
  {
    value: "20,000+",
    label: "Global Alumni",
    description: "Mentored over 20+ years",
  },
  {
    value: "15+",
    label: "Countries",
    description: "Active student networks",
  },
  {
    value: "500+",
    label: "Top Universities",
    description: "Ivy League & public hubs",
  },
  {
    value: "100%",
    label: "Landing Support",
    description: "Peer connection on arrival",
  },
]

const NETWORKING_PILLARS = [
  {
    icon: Home,
    title: "Housing & Pre-Arrival Connect",
    description:
      "Connect with seniors at your university for verified flatmate searches, trusted apartment leads, and essential pre-departure checklist tips.",
    badgeVariant: "sky" as const,
    cardVariant: "sky" as const,
  },
  {
    icon: Compass,
    title: "City & Campus Transition",
    description:
      "Get firsthand advice on local SIMs, bank accounts, public transit passes, and campus orientation from alumni who have already settled in.",
    badgeVariant: "orange" as const,
    cardVariant: "peach" as const,
  },
  {
    icon: GraduationCap,
    title: "Course & TA/RA Opportunities",
    description:
      "Learn how to navigate subject selection, approach professors for Research & Teaching Assistantships, and excel in your first semester.",
    badgeVariant: "violet" as const,
    cardVariant: "lavender" as const,
  },
  {
    icon: Briefcase,
    title: "Global Career & Mentorship",
    description:
      "Join an active network of professionals working at top tech firms, Fortune 500s, and research labs worldwide for referral and job guidance.",
    badgeVariant: "emerald" as const,
    cardVariant: "mint" as const,
  },
]

const POPULAR_CHAPTERS = [
  { country: "USA", universities: "Stanford, CMU, Boston Univ, Columbia, Texas A&M, NYU", flag: "🇺🇸" },
  { country: "United Kingdom", universities: "Oxford, LSE, Imperial, Warwick, Manchester", flag: "🇬🇧" },
  { country: "Germany", universities: "TU Munich, FAU Erlangen, WHU, RWTH Aachen", flag: "🇩🇪" },
  { country: "France", universities: "INSEAD, Aivancity, HEC Paris, ESSEC", flag: "🇫🇷" },
  { country: "Canada", universities: "Univ of Toronto, UBC, McGill, Waterloo", flag: "🇨🇦" },
  { country: "Netherlands & Sweden", universities: "Univ of Twente, TU Delft, Chalmers", flag: "🇪🇺" },
]

export function AlumniNetworkSection() {
  return (
    <Section variant="surface" className="relative overflow-hidden">
      <Container>
        <Reveal direction="up" delay={50}>
          <SectionHeader
            eyebrow="20+ Years in Global Education"
            title="Central India's Largest Global Alumni Network"
            description="When you step onto a foreign campus, you are never alone. Connect with 20,000+ senior Globalizers alumni worldwide for on-ground guidance, housing, and lifelong networking."
            align="center"
          />
        </Reveal>

        {/* Highlight Stats Bar */}
        <Reveal direction="up" delay={100}>
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {ALUMNI_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-border/80 bg-white/90 p-6 text-center shadow-xs backdrop-blur-xs transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="font-heading text-3xl font-extrabold text-primary md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-bold text-foreground">
                  {stat.label}
                </div>
                <div className="mt-0.5 text-xs text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* 4 Pillars of On-Ground Student Support */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {NETWORKING_PILLARS.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <Reveal
                key={pillar.title}
                direction="up"
                delay={150 + index * 80}
                className="flex"
              >
                <Card
                  variant={pillar.cardVariant}
                  padding="default"
                  className="flex flex-col justify-between w-full h-full shadow-xs transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div>
                    <IconBadge
                      icon={Icon}
                      variant={pillar.badgeVariant}
                      size="default"
                      className="mb-5 shadow-2xs"
                    />
                    <h3 className="font-heading text-xl font-bold text-primary mb-2.5">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </Card>
              </Reveal>
            )
          })}
        </div>

        {/* Global Chapters Strip */}
        <Reveal direction="up" delay={450}>
          <div className="mt-10 rounded-3xl border border-border/80 bg-white p-6 md:p-8 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 border-b border-border/60 pb-4">
              <div className="flex items-center gap-2.5">
                <Globe2 className="h-5 w-5 text-secondary" />
                <h4 className="font-heading text-lg font-bold text-primary">
                  Active Alumni Chapters &amp; University Hubs
                </h4>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-secondary" />
                Peer support across 15+ countries
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {POPULAR_CHAPTERS.map((chapter) => (
                <div
                  key={chapter.country}
                  className="flex items-start gap-3 rounded-2xl bg-muted/40 border border-border/50 p-4 transition-colors hover:bg-muted/70"
                >
                  <span className="text-2xl shrink-0" role="img" aria-label={chapter.country}>
                    {chapter.flag}
                  </span>
                  <div>
                    <div className="text-sm font-bold text-primary">
                      {chapter.country} Chapter
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5 leading-snug">
                      {chapter.universities}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border/60">
              <p className="text-xs text-muted-foreground text-center sm:text-left">
                Heading abroad? Our student affairs desk connects you directly with current batch seniors upon receiving your visa.
              </p>
              <Link href="/contact-us" className="shrink-0">
                <Button variant="primary" size="sm">
                  Connect With an Advisor
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}

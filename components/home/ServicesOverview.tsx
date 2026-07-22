import { GraduationCap, Edit3, ShieldCheck, Award } from "lucide-react"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { FeatureCard } from "@/components/primitives/FeatureCard"
import Reveal from "@/components/Reveal"

const SERVICES = [
  {
    icon: GraduationCap,
    title: "Counselling",
    description:
      "Personalized profile evaluation and university shortlisting by industry experts.",
    href: "/services/counselling",
    badgeVariant: "sky" as const,
    cardVariant: "lavender" as const,
  },
  {
    icon: Edit3,
    title: "Test Prep",
    description:
      "Rigorous training for GRE, GMAT, and IELTS with Central India's best faculty.",
    href: "/services/test-preparation",
    badgeVariant: "orange" as const,
    cardVariant: "peach" as const,
  },
  {
    icon: ShieldCheck,
    title: "Visa Guidance",
    description:
      "Meticulous documentation and mock interview sessions ensuring a 98% success rate.",
    href: "/services/visa-guidance",
    badgeVariant: "emerald" as const,
    cardVariant: "mint" as const,
  },
  {
    icon: Award,
    title: "Scholarships",
    description:
      "Identify and apply for merit-based, need-based, and university-specific scholarships.",
    href: "/services/scholarships",
    badgeVariant: "amber" as const,
    cardVariant: "sky" as const,
  },
]

export function ServicesOverview() {
  return (
    <Section variant="default">
      <Container>
        <Reveal direction="up" delay={50}>
          <SectionHeader
            eyebrow="Our Offerings"
            title="Comprehensive Education Solutions"
            description="From initial counseling to post-landing support, we navigate your global journey with precision."
            align="left"
          />
        </Reveal>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <Reveal key={service.title} direction="up" delay={100 + index * 100}>
              <FeatureCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
                badgeVariant={service.badgeVariant}
                cardVariant={service.cardVariant}
                ctaText="Explore Service"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}

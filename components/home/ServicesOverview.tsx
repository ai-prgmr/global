import { GraduationCap, Edit3, ShieldCheck, Award } from "lucide-react"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { FeatureCard } from "@/components/primitives/FeatureCard"

const SERVICES = [
  {
    icon: GraduationCap,
    title: "Counselling",
    description:
      "Personalized profile evaluation and university shortlisting by industry experts.",
    href: "/services/counselling",
  },
  {
    icon: Edit3,
    title: "Test Prep",
    description:
      "Rigorous training for GRE, GMAT, and IELTS with Central India's best faculty.",
    href: "/services/test-preparation",
  },
  {
    icon: ShieldCheck,
    title: "Visa Guidance",
    description:
      "Meticulous documentation and mock interview sessions ensuring a 98% success rate.",
    href: "/services/visa-guidance",
  },
  {
    icon: Award,
    title: "Scholarships",
    description:
      "Identify and apply for merit-based, need-based, and university-specific scholarships.",
    href: "/services/scholarships",
  },
]

export function ServicesOverview() {
  return (
    <Section variant="surface">
      <Container>
        <SectionHeader
          eyebrow="Our Offerings"
          title="Comprehensive Education Solutions"
          description="From initial counseling to post-landing support, we navigate your global journey with precision."
          align="left"
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <FeatureCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
              ctaText="Explore Service"
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}

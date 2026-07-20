import type { Metadata } from "next"
import { UserCheck, ListOrdered, FileText, PlaneTakeoff, Briefcase, GraduationCap, Edit3, ShieldCheck, Award } from "lucide-react"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { FeatureCard } from "@/components/primitives/FeatureCard"
import { ProcessCard } from "@/components/primitives/ProcessCard"
import { CTABanner } from "@/components/CTABanner"
import { SERVICES_DATA } from "@/lib/data/services"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive study abroad services: counselling, test preparation, visa guidance, and scholarship assistance.",
}

const PROCESS_STEPS = [
  {
    step: 1,
    title: "Profile Evaluation",
    description:
      "We assess your academic background, test scores, and goals to create a personalized roadmap.",
  },
  {
    step: 2,
    title: "University Shortlisting",
    description:
      "Data-driven shortlisting of universities matching your profile, budget, and career aspirations.",
  },
  {
    step: 3,
    title: "Application Support",
    description:
      "SOP crafting, LOR guidance, application form filing, and document preparation.",
  },
  {
    step: 4,
    title: "Visa Filing",
    description:
      "Complete visa documentation, mock interview prep, and appointment scheduling.",
  },
  {
    step: 5,
    title: "Pre-Departure",
    description:
      "Accommodation guidance, forex support, travel planning, and student community connect.",
  },
]

const SERVICE_ICONS: Record<string, typeof GraduationCap> = {
  counselling: GraduationCap,
  "test-preparation": Edit3,
  "visa-guidance": ShieldCheck,
  scholarships: Award,
}

export default function ServicesPage() {
  const servicesList = Object.values(SERVICES_DATA)

  return (
    <>
      {/* Hero */}
      <Section variant="primary" className="py-20 md:py-28">
        <Container>
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-white">
            End-to-End Support
          </span>
          <h1 className="mb-6 font-heading text-4xl font-bold md:text-5xl lg:text-6xl text-white">
            Everything You Need,
            <br />
            Under One Roof
          </h1>
          <p className="max-w-2xl text-lg text-white/80 leading-relaxed">
            From your first consultation to landing at your dream university —
            we handle every step of your global education journey.
          </p>
        </Container>
      </Section>

      {/* Service Cards */}
      <Section variant="default">
        <Container>
          <SectionHeader
            eyebrow="Solutions"
            title="Our Full Suite of Services"
            description="Professional mentorship tailored for students and working professionals."
            align="left"
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {servicesList.map((service) => (
              <FeatureCard
                key={service.slug}
                icon={SERVICE_ICONS[service.slug] || GraduationCap}
                title={service.title}
                description={service.description}
                href={`/services/${service.slug}`}
                ctaText="Learn More"
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section variant="surface">
        <Container>
          <SectionHeader
            eyebrow="Workflow"
            title="Our Proven 5-Step Process"
            description="A structured journey from your first consultation to landing at your dream university."
            align="center"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS_STEPS.map((step, i) => (
              <ProcessCard
                key={step.step}
                stepNumber={step.step}
                title={step.title}
                description={step.description}
                isLast={i === PROCESS_STEPS.length - 1}
              />
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner />
    </>
  )
}

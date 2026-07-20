import type { Metadata } from "next"
import { Building2, TrendingUp, ShieldCheck, Users, ArrowRight } from "lucide-react"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { FeatureCard } from "@/components/primitives/FeatureCard"
import { ProcessCard } from "@/components/primitives/ProcessCard"
import { ContactForm } from "@/components/primitives/ContactForm"
import { CTABanner } from "@/components/CTABanner"

export const metadata: Metadata = {
  title: "Franchise Partnership",
  description: "Partner with The Globalizers — Central India's leading study abroad consultancy. Explore franchise opportunities nationwide.",
}

const ADVANTAGES = [
  { icon: Building2, title: "19+ Years Brand Trust", description: "Leverage an established reputation with 6,000+ admits and Central India's highest student retention." },
  { icon: TrendingUp, title: "High ROI Business Model", description: "Proven revenue streams through test preparation, study abroad counseling, and visa processing services." },
  { icon: ShieldCheck, title: "Complete Operating Manual", description: "End-to-end counselor training, marketing collaterals, and proprietary test-prep study materials." },
  { icon: Users, title: "Centralized Back-End", description: "Our HQ handles university application filing, SOP review, and visa mock interviews for your students." },
]

const FRANCHISE_STEPS = [
  { step: 1, title: "Initial Enquiry", description: "Fill out the partnership form to express your interest." },
  { step: 2, title: "Discovery Call", description: "Discussion with Founder Prashant Hemnani & leadership team." },
  { step: 3, title: "Site Selection", description: "Finalizing location and infrastructure requirements." },
  { step: 4, title: "Agreement & Training", description: "Formal agreement signing and comprehensive staff training." },
  { step: 5, title: "Grand Launch", description: "Marketing push and center inauguration." },
]

export default function FranchisePage() {
  return (
    <>
      <Section variant="primary" className="py-20 md:py-28 text-center">
        <Container className="max-w-4xl">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-white">
            Business Partnership
          </span>
          <h1 className="mb-6 font-heading text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Partner With The Globalizers
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80 leading-relaxed">
            Join India&apos;s fastest growing international education network. Bring premier study abroad counseling &amp; test prep to your city.
          </p>
        </Container>
      </Section>

      <Section variant="default">
        <Container>
          <SectionHeader
            eyebrow="Why Partner"
            title="The Globalizers Franchise Advantage"
            description="Built on 19 years of operational excellence, proven study materials, and high student conversion."
            align="left"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {ADVANTAGES.map((adv) => (
              <FeatureCard
                key={adv.title}
                icon={adv.icon}
                title={adv.title}
                description={adv.description}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="surface">
        <Container>
          <SectionHeader
            eyebrow="Workflow"
            title="5-Step Partner Onboarding"
            description="A clear pathway to launching your franchise branch."
            align="center"
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {FRANCHISE_STEPS.map((s, i) => (
              <ProcessCard
                key={s.step}
                stepNumber={s.step}
                title={s.title}
                description={s.description}
                isLast={i === FRANCHISE_STEPS.length - 1}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="default">
        <Container className="max-w-3xl">
          <SectionHeader
            eyebrow="Apply Now"
            title="Submit Franchise Enquiry"
            description="Tell us about your background, city, and timeline. Our expansion team will contact you."
            align="center"
          />
          <ContactForm />
        </Container>
      </Section>

      <CTABanner title="Ready to Build a Successful Education Business?" />
    </>
  )
}

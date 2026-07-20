import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { FounderCard } from "@/components/primitives/FounderCard"
import { StatCard } from "@/components/primitives/StatCard"

export function FounderSpotlight() {
  return (
    <Section variant="dark">
      <Container className="space-y-12">
        <FounderCard
          name="Prashant Hemnani"
          designation="Founder & Chief Mentor, The Globalizers"
          mission="Our mission is to democratize world-class education for every Indian student, ensuring that financial or geographical barriers never limit potential."
          imageSrc="/global/prashant-hemnani.png"
          href="/founder"
        />

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 pt-4">
          <StatCard variant="dark" value="19+" label="Years Experience" description="Coaching & Admissions Mentorship" />
          <StatCard variant="dark" value="25,000+" label="Mentorship Sessions" description="Personalized Profile Reviews" />
          <StatCard variant="dark" value="98%" label="Visa Success Rate" description="Consular Interview Track Record" />
          <StatCard variant="dark" value="₹50Cr+" label="Scholarships" description="Merit & Need-based Grants Secured" />
        </div>
      </Container>
    </Section>
  )
}

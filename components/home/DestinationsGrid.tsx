import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { DESTINATIONS_DATA } from "@/lib/data/destinations"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { CountryCard } from "@/components/primitives/CountryCard"
import { Button } from "@/components/primitives/Button"
import Reveal from "@/components/Reveal"

const POPULAR_SLUGS = ["usa", "uk", "canada", "australia", "germany", "ireland"]

export function DestinationsGrid() {
  const popularDestinations = POPULAR_SLUGS.map((slug) => DESTINATIONS_DATA[slug]).filter(Boolean)

  return (
    <Section variant="lavender">
      <Container>
        <Reveal direction="up" delay={50} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Global Reach"
            title="Popular Global Destinations"
            description="We bridge your gap to the world's most sought-after education hubs."
            align="left"
            className="mb-0"
          />
          <Link href="/destinations" className="shrink-0">
            <Button variant="primary" size="sm">
              View All Countries
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {popularDestinations.map((dest, i) => (
            <Reveal key={dest.slug} direction="up" delay={100 + i * 80}>
              <CountryCard
                flag={dest.flag}
                name={dest.name}
                region={dest.region}
                imageSrc={dest.heroImage}
                description={dest.description}
                averageTuition={dest.averageTuition}
                popularExams={dest.popularExams}
                highlights={dest.highlights}
                cardVariant={(["sky", "peach", "mint", "lavender", "rose", "amber"] as const)[i % 6]}
                href={`/destinations/${dest.slug}`}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}

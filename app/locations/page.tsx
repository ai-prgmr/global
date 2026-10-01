import Link from "next/link"
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react"
import { LOCATIONS_DATA } from "@/lib/data/locations"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { Card } from "@/components/primitives/Card"
import { Button } from "@/components/primitives/Button"
import { CTABanner } from "@/components/CTABanner"
import { constructMetadata } from "@/lib/metadata"
import { generateOrganizationSchema } from "@/lib/schema"

export const metadata = constructMetadata({
  title: "Our Office Locations — Indore, Noida, Jaipur, Navi Mumbai",
  description:
    "Visit The Globalizers study abroad branches in Indore (Vijay Nagar & Bhawarkua), Noida, Jaipur, and Navi Mumbai for in-person counseling and test prep.",
  path: "/locations",
})

export default function LocationsIndexPage() {
  const orgSchema = generateOrganizationSchema()
  const locationsList = Object.values(LOCATIONS_DATA)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* Hero */}
      <Section variant="default" className="py-20 md:py-28 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-80 w-120 rounded-full bg-linear-to-tr from-sky-200/50 via-violet-200/40 to-amber-200/50 blur-3xl opacity-70 pointer-events-none" />
        <Container className="max-w-4xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20">
            <MapPin className="h-3.5 w-3.5 text-secondary" />
            Pan-India Presence
          </span>
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-primary md:text-5xl lg:text-6xl leading-tight">
            Our Office Locations &amp; Mentorship Centers
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed md:text-xl">
            Visit our physical branches for in-person GRE/GMAT coaching, profile evaluations, SOP reviews, and visa mock interview drives.
          </p>
        </Container>
      </Section>

      {/* Locations Cards Grid */}
      <Section variant="sky">
        <Container>
          <SectionHeader
            eyebrow="Branches"
            title="Explore Our Local Offices"
            description="Select your city to view complete branch addresses, phone numbers, working hours, and local offerings."
            align="center"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {locationsList.map((loc) => (
              <Card
                key={loc.slug}
                variant="white"
                className="group flex flex-col justify-between p-8 hover:shadow-xl transition-all duration-300 border border-border"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 font-sans text-xs font-bold uppercase tracking-wider text-primary">
                      {loc.tag}
                    </span>
                    <span className="text-xs text-muted-foreground font-semibold">{loc.region}</span>
                  </div>

                  <h2 className="mb-3 font-heading text-2xl font-bold text-primary group-hover:text-secondary transition-colors">
                    {loc.city} Center
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {loc.heroDescription}
                  </p>

                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 shrink-0 text-secondary mt-1" />
                      <span>{loc.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 shrink-0 text-secondary" />
                      <span>{loc.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 shrink-0 text-secondary" />
                      <span>{loc.hours}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-8 border-t border-border flex items-center justify-between">
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="inline-flex items-center font-bold text-sm text-primary group-hover:text-secondary transition-colors"
                  >
                    View {loc.city} Branch Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner
        title="Can't Visit in Person? We Offer Online Mentorship Too"
        subtitle="Book a virtual 1-on-1 counseling session with Founder Prashant Hemnani & senior team from anywhere in India."
        primaryCtaText="Book Online Session"
      />
    </>
  )
}

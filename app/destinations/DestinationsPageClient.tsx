"use client"

import { useState } from "react"
import { Search, X, Globe } from "lucide-react"
import { DESTINATIONS_DATA } from "@/lib/data/destinations"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { CountryCard } from "@/components/primitives/CountryCard"
import { Button } from "@/components/primitives/Button"

export function DestinationsPageClient() {
  const [searchQuery, setSearchQuery] = useState("")

  const destinationsList = Object.values(DESTINATIONS_DATA)

  const filteredDestinations = destinationsList.filter((dest) => {
    return (
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.region.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section variant="primary" className="py-20 md:py-28 text-center">
        <Container className="max-w-4xl">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-white">
            Global Destinations
          </span>
          <h1 className="mb-6 font-heading text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Explore Study Abroad Destinations
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80 leading-relaxed">
            We bridge your gap to the world&apos;s most prestigious education
            hubs. Browse and compare top destinations to start your journey.
          </p>

          {/* Search Input */}
          <div className="mx-auto flex max-w-xl items-center rounded-full border border-white/30 bg-white/10 px-5 shadow-xl backdrop-blur-md transition-all focus-within:border-white focus-within:bg-white/20">
            <Search className="h-5 w-5 text-white/70 shrink-0" />
            <input
              type="text"
              placeholder="Search country, region, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent px-4 py-3.5 text-white placeholder-white/60 outline-none text-base font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="flex items-center justify-center rounded-full p-1 text-white/70 hover:bg-white/20 hover:text-white"
                aria-label="Clear search query"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </Container>
      </Section>

      {/* Grid Content */}
      <Section variant="default">
        <Container>
          <SectionHeader
            eyebrow="Explore Countries"
            title="Study Abroad Country Guides"
            description={`Showing ${filteredDestinations.length} destination guide${filteredDestinations.length !== 1 ? "s" : ""}.`}
            align="left"
          />

          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredDestinations.map((dest) => (
                <CountryCard
                  key={dest.slug}
                  flag={dest.flag}
                  name={dest.name}
                  region={dest.region}
                  imageSrc={dest.heroImage}
                  description={dest.description}
                  averageTuition={dest.averageTuition}
                  popularExams={dest.popularExams}
                  highlights={dest.highlights}
                  href={`/destinations/${dest.slug}`}
                />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center space-y-4">
              <Globe className="mx-auto h-16 w-16 text-muted-foreground/40" />
              <h3 className="font-heading text-xl font-bold text-primary">
                No Destinations Found
              </h3>
              <p className="text-muted-foreground">
                We couldn&apos;t find any country matching &quot;{searchQuery}&quot;.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSearchQuery("")}
              >
                Reset Search
              </Button>
            </div>
          )}
        </Container>
      </Section>
    </div>
  )
}

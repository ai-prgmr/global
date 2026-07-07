"use client"

import { useState } from "react"
import Link from "next/link"
import { DESTINATIONS_DATA } from "@/lib/data/destinations"

const REGIONS = ["All", "North America", "Europe", "Asia-Pacific", "Middle East"]

export default function DestinationsPage() {
  const [selectedRegion, setSelectedRegion] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const destinationsList = Object.values(DESTINATIONS_DATA)

  const filteredDestinations = destinationsList.filter((dest) => {
    const matchesRegion =
      selectedRegion === "All" || dest.region === selectedRegion
    const matchesSearch =
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.region.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesRegion && matchesSearch
  })

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-primary via-primary-container to-tertiary py-24 text-white">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <h1 className="mb-6 font-[Montserrat] text-4xl font-extrabold tracking-tight md:text-6xl">
            Explore Your Study Destinations
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
            We bridge your gap to the world&apos;s most prestigious education
            hubs. Browse and compare top destinations to start your journey.
          </p>

          {/* Search Bar */}
          <div className="mx-auto flex max-w-xl items-center rounded-2xl border border-white/20 bg-white/10 px-5 shadow-2xl backdrop-blur-md transition-all focus-within:border-white/40 focus-within:bg-white/15">
            <span className="material-symbols-outlined text-white/60">
              search
            </span>
            <input
              type="text"
              placeholder="Search by country, title, or region..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent px-4 py-4 text-white placeholder-white/50 outline-none text-base font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="flex items-center justify-center rounded-full p-1 text-white/60 hover:bg-white/10 hover:text-white"
              >
                <span className="material-symbols-outlined text-sm">
                  close
                </span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Filter Tabs & Content */}
      <section className="mx-auto max-w-[1280px] px-6 py-16">
        <div className="mb-12 flex flex-col items-center justify-between gap-6 border-b border-surface-border pb-6 md:flex-row">
          {/* Region Tabs */}
          <div className="flex flex-wrap gap-2">
            {REGIONS.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 ${selectedRegion === region
                    ? "bg-primary text-white shadow-md shadow-primary/20 scale-105"
                    : "bg-white border border-surface-border text-on-surface-variant hover:bg-primary/5 hover:border-primary/20"
                  }`}
              >
                {region}
              </button>
            ))}
          </div>

          <div className="text-sm font-medium text-on-surface-variant">
            Showing {filteredDestinations.length} destination
            {filteredDestinations.length !== 1 ? "s" : ""}
          </div>
        </div>

        {/* Dynamic Destinations Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDestinations.map((dest) => (
              <div
                key={dest.slug}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-surface-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl"
              >
                <div>
                  {/* Top line with Flag & Region */}
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-5xl drop-shadow-sm grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0">
                      {dest.flag}
                    </span>
                    <span className="rounded-full bg-primary/5 px-3.5 py-1 text-xs font-bold text-primary">
                      {dest.region}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mb-3 font-[Montserrat] text-2xl font-bold text-primary transition-colors group-hover:text-secondary">
                    {dest.name}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-on-surface-variant line-clamp-3">
                    {dest.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="mb-6 space-y-2 border-t border-surface-border pt-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-on-surface-variant">
                      <span className="material-symbols-outlined text-secondary text-base">
                        payments
                      </span>
                      <span>Tuition: {dest.averageTuition}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-on-surface-variant">
                      <span className="material-symbols-outlined text-secondary text-base">
                        assignment
                      </span>
                      <span>Exams: {dest.popularExams}</span>
                    </div>
                  </div>

                  {/* Tag List */}
                  <div className="mb-8 flex flex-wrap gap-1.5">
                    {dest.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-lg bg-surface-container px-2.5 py-1 text-[11px] font-semibold text-on-surface-variant"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card CTA Link */}
                <Link
                  href={`/destinations/${dest.slug}`}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-primary py-3 font-[Montserrat] text-sm font-bold text-white transition-all group-hover:bg-secondary group-hover:shadow-md"
                >
                  Explore Guide
                  <span className="material-symbols-outlined ml-2 text-sm transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <span className="material-symbols-outlined text-6xl text-on-surface-variant/40">
              travel_explore
            </span>
            <h3 className="mt-4 font-[Montserrat] text-xl font-bold text-primary">
              No Destinations Found
            </h3>
            <p className="mt-2 text-on-surface-variant">
              We couldn&apos;t find any country matching &quot;{searchQuery}
              &quot; under region &quot;{selectedRegion}&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("")
                setSelectedRegion("All")
              }}
              className="mt-6 rounded-lg bg-primary px-6 py-2.5 font-[Montserrat] text-sm font-bold text-white hover:bg-secondary"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  )
}

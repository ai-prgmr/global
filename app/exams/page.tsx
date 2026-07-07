"use client"

import { useState } from "react"
import Link from "next/link"
import { EXAMS_DATA } from "@/lib/data/exams"

export default function ExamsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const examsList = Object.values(EXAMS_DATA)

  const filteredExams = examsList.filter(
    (exam) =>
      exam.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exam.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exam.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-primary via-primary-container to-tertiary py-24 text-white">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 font-[Inter] text-xs font-semibold uppercase tracking-wider">
            Coaching & Prep
          </span>
          <h1 className="mb-6 font-[Montserrat] text-4xl font-extrabold tracking-tight md:text-6xl">
            Ace Your Admission Exams
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
            Master the GRE, GMAT, IELTS, TOEFL, SAT, and PTE with India&apos;s
            most trusted mentors. Score improvement guaranteed.
          </p>

          {/* Search Bar */}
          <div className="mx-auto flex max-w-xl items-center rounded-2xl border border-white/20 bg-white/10 px-5 shadow-2xl backdrop-blur-md transition-all focus-within:border-white/40 focus-within:bg-white/15">
            <span className="material-symbols-outlined text-white/60">
              search
            </span>
            <input
              type="text"
              placeholder="Search exams (e.g. GRE, IELTS)..."
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

      {/* Grid Content */}
      <section className="mx-auto max-w-[1280px] px-6 py-16">
        <div className="mb-12 border-b border-surface-border pb-6">
          <h2 className="font-[Montserrat] text-3xl font-bold text-primary">
            Our Test Preparation Programs
          </h2>
          <p className="mt-2 text-on-surface-variant">
            Select an exam to view details, structure, coaching features, and
            demo booking.
          </p>
        </div>

        {filteredExams.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredExams.map((exam) => (
              <div
                key={exam.slug}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-surface-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl"
              >
                <div>
                  {/* Top line with Icon & Short Name */}
                  <div className="mb-6 flex items-center justify-between">
                    <span className="font-[Montserrat] text-3xl font-black tracking-wider text-primary/20 transition-colors group-hover:text-secondary/20">
                      {exam.name}
                    </span>
                    <span className="rounded-full bg-secondary/10 px-3.5 py-1 text-xs font-bold text-secondary">
                      Prep Course
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mb-2 font-[Montserrat] text-2xl font-bold text-primary transition-colors group-hover:text-secondary">
                    {exam.title}
                  </h3>
                  <p className="mb-4 text-xs font-semibold text-on-surface-variant/60 uppercase tracking-wider">
                    {exam.fullName}
                  </p>
                  <p className="mb-6 text-sm leading-relaxed text-on-surface-variant line-clamp-3">
                    {exam.description}
                  </p>
                </div>

                {/* Card CTA Link */}
                <Link
                  href={`/exams/${exam.slug}`}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-primary py-3 font-[Montserrat] text-sm font-bold text-white transition-all group-hover:bg-secondary group-hover:shadow-md"
                >
                  Explore prep guide
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
              search_off
            </span>
            <h3 className="mt-4 font-[Montserrat] text-xl font-bold text-primary">
              No Exams Found
            </h3>
            <p className="mt-2 text-on-surface-variant">
              We couldn&apos;t find any exam matching &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-6 rounded-lg bg-primary px-6 py-2.5 font-[Montserrat] text-sm font-bold text-white hover:bg-secondary"
            >
              Reset Search
            </button>
          </div>
        )}
      </section>

      {/* Global Highlights Section */}
      <section className="bg-surface-container py-20">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <h2 className="mb-4 font-[Montserrat] text-3xl font-bold text-primary">
            Why Prepare With The Globalizers?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-on-surface-variant">
            Empowering students with Central India&apos;s most comprehensive test
            prep platform.
          </p>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "group",
                title: "Expert Faculty",
                desc: "Certified trainers with years of experience under leadership of Prashant Hemnani.",
              },
              {
                icon: "smart_toy",
                title: "AI Practice Tools",
                desc: "Adaptive mock tests and AI-powered analytics to identify score boosts.",
              },
              {
                icon: "emoji_events",
                title: "Proven Track Record",
                desc: "Over 6,000+ success stories and a consistent score improvement guarantee.",
              },
              {
                icon: "schedule",
                title: "Flexible Batches",
                desc: "Weekday and weekend live classes tailored for students & professionals.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-surface-border bg-white p-6 shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-3xl">
                    {item.icon}
                  </span>
                </div>
                <h3 className="mb-2 font-[Montserrat] text-lg font-bold text-primary">
                  {item.title}
                </h3>
                <p className="text-sm text-on-surface-variant">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

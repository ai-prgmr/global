import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { SectionHeading } from "@/components/SectionHeading"
import { CTABanner } from "@/components/CTABanner"

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Discover the journey of The Globalizers, India's premier study abroad consultancy founded by Prashant Hemnani in 2007.",
}

const MILESTONES = [
  { year: "2007", title: "Foundation", description: "The Globalizers founded in Indore by Prashant Hemnani with a vision to democratize global education." },
  { year: "2012", title: "1,000th Student", description: "Celebrated mentoring 1,000 students with admits to top global universities." },
  { year: "2016", title: "Multi-City Expansion", description: "Opened offices in Noida and Jaipur, extending reach across India." },
  { year: "2019", title: "MP Visionary Award", description: "Founder Prashant Hemnani recognized with the Madhya Pradesh Visionary Education Award." },
  { year: "2024", title: "6,000+ Students", description: "Milestone of 6,000+ students mentored with admits to 500+ universities globally." },
  { year: "2026", title: "Franchise Network", description: "Expanded franchise operations to Navi Mumbai with plans for pan-India presence." },
]

const OFFICES = [
  { city: "Indore", tag: "Headquarters", address: "123 MG Road, Indore, Madhya Pradesh 452001", phone: "+91 731 4001033" },
  { city: "Noida", tag: "Branch", address: "Sector 18, Noida, Uttar Pradesh 201301", phone: "+91 120 4001033" },
  { city: "Jaipur", tag: "Branch", address: "C-Scheme, Jaipur, Rajasthan 302001", phone: "+91 141 4001033" },
  { city: "Navi Mumbai", tag: "Branch", address: "Vashi, Navi Mumbai, Maharashtra 400703", phone: "+91 22 4001033" },
]

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About The Globalizers",
    "description": "Discover the journey of The Globalizers, India's premier study abroad consultancy founded by Prashant Hemnani in 2007.",
    "mainEntity": {
      "@type": "EducationalOrganization",
      "name": "The Globalizers",
      "foundingDate": "2007",
      "founder": {
        "@type": "Person",
        "name": "Prashant Hemnani"
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {/* Hero */}
      <section className="relative bg-primary py-24 text-white">
        <div className="mx-auto max-w-[1280px] px-6">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 font-[Inter] text-xs font-semibold uppercase tracking-wider">
            Est. 2007
          </span>
          <h1 className="mb-6 font-[Montserrat] text-4xl font-bold md:text-5xl">
            Our Story
          </h1>
          <p className="max-w-2xl text-lg text-white/70">
            From a single classroom in Indore to India&apos;s most trusted study abroad
            consultancy — 19 years of changing lives, one student at a time.
          </p>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 bg-secondary/10" />
      </section>

      {/* Origin Story */}
      <section className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-2">
        <div className="space-y-6">
          <h2 className="font-[Montserrat] text-3xl font-semibold text-primary">
            How It All Began
          </h2>
          <div className="h-1 w-20 bg-secondary" />
          <p className="text-on-surface-variant leading-relaxed">
            In 2007, Prashant Hemnani — a passionate educator with a vision — founded
            The Globalizers in Indore, Madhya Pradesh. What began as a small coaching
            center for GRE aspirants has grown into Central India&apos;s most comprehensive
            study abroad consultancy.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Driven by the belief that every student deserves access to world-class
            education, The Globalizers has mentored over 6,000 students, helping them
            secure admits at 500+ universities across 12 countries — including Ivy
            League institutions like Harvard, Stanford, and Columbia.
          </p>
        </div>
        <div className="relative">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUDvtK-I3Qsx217yJv-_vN-12PVi9hciswCtYjig9nhXq1aSwWwE6r4ih-i5jLq7okmxfW3sal-_iqg7qkNzYI5ED4vb9ht1qYW5FiHTCqFjG9-6wabAVkF_WohdFZqkL0XIPThYRR34_av08pWrm3MBsUpsr9VaLhJspJso0CRTOggxV3BzkWFaOl40trV4d-B1CobWPTFo9Rev-IgZvG59dg6XT_XtivGVyLdfgDtr-5I5OFfziEak7CgLvkwD667wOd_so9oVE"
            alt="The Globalizers office"
            width={600}
            height={400}
            className="rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-surface-container py-20">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-6 md:grid-cols-2">
          <div className="rounded-2xl border border-surface-border bg-white p-10">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-3xl">flag</span>
            </div>
            <h3 className="mb-4 font-[Montserrat] text-2xl font-semibold text-primary">Our Mission</h3>
            <p className="text-on-surface-variant leading-relaxed">
              To democratize world-class education for every Indian student, ensuring
              that financial or geographical barriers never limit potential. We
              provide end-to-end support from test preparation to post-landing
              assistance.
            </p>
          </div>
          <div className="rounded-2xl border border-surface-border bg-white p-10">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
              <span className="material-symbols-outlined text-3xl">visibility</span>
            </div>
            <h3 className="mb-4 font-[Montserrat] text-2xl font-semibold text-primary">Our Vision</h3>
            <p className="text-on-surface-variant leading-relaxed">
              To be India&apos;s most trusted and technologically advanced global education
              partner — empowering 50,000 students by 2030 through AI-driven learning,
              expert mentorship, and an unwavering commitment to student success.
            </p>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="mx-auto max-w-[1280px] px-6 py-20">
        <SectionHeading title="Our Journey" subtitle="Key milestones that shaped The Globalizers story." />
        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-surface-border md:block" />
          <div className="space-y-12">
            {MILESTONES.map((m, i) => (
              <div key={m.year} className={`flex flex-col items-center gap-6 md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className={`flex-1 ${i % 2 === 1 ? "md:text-left" : "md:text-right"}`}>
                  <div className="rounded-xl border border-surface-border bg-white p-6 shadow-sm">
                    <span className="font-[Montserrat] text-sm font-bold text-secondary">{m.year}</span>
                    <h4 className="mt-1 font-[Montserrat] text-lg font-semibold text-primary">{m.title}</h4>
                    <p className="mt-2 text-sm text-on-surface-variant">{m.description}</p>
                  </div>
                </div>
                <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-[Montserrat] text-xs font-bold text-white">
                  {i + 1}
                </div>
                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="bg-surface-container py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <SectionHeading title="Our Offices" subtitle="4 branches across India serving students nationwide." />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {OFFICES.map((office) => (
              <div key={office.city} className="rounded-xl border border-surface-border bg-white p-6">
                <div className="mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">location_on</span>
                  <h4 className="font-[Montserrat] text-lg font-semibold text-primary">{office.city}</h4>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">{office.tag}</span>
                </div>
                <p className="mb-2 text-sm text-on-surface-variant">{office.address}</p>
                <p className="flex items-center gap-1 text-sm text-primary">
                  <span className="material-symbols-outlined text-sm">call</span>
                  {office.phone}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}

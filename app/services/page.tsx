import Link from "next/link"
import type { Metadata } from "next"
import { SectionHeading } from "@/components/SectionHeading"
import { CTABanner } from "@/components/CTABanner"
import { SERVICES_DATA } from "@/lib/data/services"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive study abroad services: counselling, test preparation, visa guidance, and scholarship assistance.",
}

const STEPS = [
  {
    step: "01",
    title: "Profile Evaluation",
    description:
      "We assess your academic background, scores, and goals to create a personalized roadmap.",
    icon: "person_search",
  },
  {
    step: "02",
    title: "University Shortlisting",
    description:
      "Data-driven shortlisting of universities that match your profile, budget, and career aspirations.",
    icon: "format_list_bulleted",
  },
  {
    step: "03",
    title: "Application Support",
    description:
      "SOP crafting, LOR guidance, application form filling, and document preparation.",
    icon: "description",
  },
  {
    step: "04",
    title: "Visa Filing",
    description:
      "Complete visa documentation, mock interview prep, and appointment scheduling.",
    icon: "flight_takeoff",
  },
  {
    step: "05",
    title: "Pre-Departure",
    description:
      "Accommodation guidance, forex support, travel planning, and student community connect.",
    icon: "luggage",
  },
]

export default function ServicesPage() {
  const servicesList = Object.values(SERVICES_DATA)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-24 text-white">
        <div className="mx-auto max-w-[1280px] px-6">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 font-[Inter] text-xs font-semibold uppercase tracking-wider">
            End-to-End Support
          </span>
          <h1 className="mb-6 font-[Montserrat] text-4xl font-bold md:text-5xl">
            Everything You Need,
            <br />
            Under One Roof
          </h1>
          <p className="max-w-2xl text-lg text-white/70">
            From your first consultation to landing at your dream university —
            we handle every step of your global education journey.
          </p>
        </div>
        <div className="absolute -bottom-40 -right-20 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
      </section>

      {/* Service Cards */}
      <section className="mx-auto max-w-[1280px] px-6 py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {servicesList.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex gap-6 rounded-2xl border border-surface-border bg-white p-8 transition-all hover:shadow-xl"
            >
              <div
                className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl ${service.color} text-white transition-transform group-hover:scale-110`}
              >
                <span className="material-symbols-outlined text-3xl">
                  {service.icon}
                </span>
              </div>
              <div>
                <h3 className="mb-2 font-[Montserrat] text-xl font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm text-on-surface-variant">
                  {service.description}
                </p>
                <span className="inline-flex items-center font-[Montserrat] font-bold text-primary group-hover:text-secondary">
                  Learn More
                  <span className="material-symbols-outlined ml-1 transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-surface-container py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <SectionHeading
            title="Our Proven 5-Step Process"
            subtitle="A structured journey from your first consultation to landing at your dream university."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            {STEPS.map((step, i) => (
              <div
                key={step.step}
                className="relative rounded-xl border border-surface-border bg-white p-6 text-center"
              >
                <div className="mb-4 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                    <span className="material-symbols-outlined">{step.icon}</span>
                  </div>
                </div>
                <span className="font-[Montserrat] text-xs font-bold text-secondary">
                  Step {step.step}
                </span>
                <h4 className="mt-1 font-[Montserrat] text-sm font-semibold text-primary">
                  {step.title}
                </h4>
                <p className="mt-2 text-xs text-on-surface-variant">
                  {step.description}
                </p>
                {i < STEPS.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-surface-border md:block">
                    <span className="material-symbols-outlined">
                      chevron_right
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}

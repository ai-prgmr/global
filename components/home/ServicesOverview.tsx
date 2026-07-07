import Link from "next/link"
import { SectionHeading } from "@/components/SectionHeading"

const SERVICES = [
  {
    icon: "school",
    title: "Counselling",
    description:
      "Personalized profile evaluation and university shortlisting by industry experts.",
    href: "/services/counselling",
  },
  {
    icon: "edit_note",
    title: "Test Prep",
    description:
      "Rigorous training for GRE, GMAT, and IELTS with Central India's best faculty.",
    href: "/services/test-preparation",
  },
  {
    icon: "verified_user",
    title: "Visa Guidance",
    description:
      "Meticulous documentation and mock interview sessions ensuring a 98% success rate.",
    href: "/services/visa-guidance",
  },
]

export function ServicesOverview() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-20">
      <SectionHeading
        title="Comprehensive Education Solutions"
        subtitle="From initial counseling to post-landing support, we navigate your global journey with precision."
      />
      <div className="flex items-center justify-center gap-8">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="group rounded-lg border border-surface-border bg-white p-8 transition-all hover:shadow-xl"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-secondary group-hover:text-white">
              <span className="material-symbols-outlined">{service.icon}</span>
            </div>
            <h3 className="mb-4 font-[Montserrat] text-xl font-semibold text-primary">
              {service.title}
            </h3>
            <p className="mb-6 text-sm text-on-surface-variant">
              {service.description}
            </p>
            <Link
              href={service.href}
              className="group/link inline-flex items-center font-[Montserrat] font-bold text-primary"
            >
              Explore
              <span className="material-symbols-outlined ml-2 transition-transform group-hover/link:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

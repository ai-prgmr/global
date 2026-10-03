import Link from "next/link"
import {
  GraduationCap,
  Edit3,
  ShieldCheck,
  Award,
  PlaneTakeoff,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { IconBadge } from "@/components/primitives/IconBadge"
import Reveal from "@/components/Reveal"
import { cn } from "@/lib/utils"

const SERVICES = [
  {
    step: "01",
    icon: GraduationCap,
    title: "Counselling",
    tagline: "Profile & University Selection",
    description:
      "Personalized profile evaluation, career mapping, and university shortlisting by industry experts.",
    highlights: [
      "1-on-1 Profile Assessment",
      "Ivy League & Top 50 Shortlisting",
      "SOP & LOR Strategy",
    ],
    stat: "10,000+ Admits",
    href: "/services/counselling",
    badgeVariant: "violet" as const,
    frontStyle: "bg-violet-50/80 border-violet-100",
    backStyle: "bg-linear-to-br from-violet-100/95 via-violet-50 to-white border-violet-200",
    stepBg: "bg-violet-100 text-violet-800 border-violet-200",
  },
  {
    step: "02",
    icon: Edit3,
    title: "Test Prep",
    tagline: "GRE, GMAT, IELTS, TOEFL, Duolingo & SAT",
    description:
      "Rigorous training with Central India's best faculty, led by GRE authority Prashant Hemnani.",
    highlights: [
      "Direct Founder Mentorship",
      "Adaptive Full-Length Mocks",
      "1-on-1 Doubt Sessions",
    ],
    stat: "10,000+ Hours of Training",
    href: "/services/test-preparation",
    badgeVariant: "orange" as const,
    frontStyle: "bg-orange-50/80 border-orange-100",
    backStyle: "bg-linear-to-br from-orange-100/95 via-orange-50 to-white border-orange-200",
    stepBg: "bg-orange-100 text-orange-800 border-orange-200",
  },
  {
    step: "03",
    icon: Award,
    title: "Scholarships",
    tagline: "Financial Aid & Grants",
    description:
      "Identify, strategize, and apply for merit-based, need-based, and institutional scholarships worldwide.",
    highlights: [
      "University-Specific Grants",
      "Financial Document Strategy",
      "Assistantship Guidance",
    ],
    stat: "₹50Cr+ Secured",
    href: "/services/scholarships",
    badgeVariant: "amber" as const,
    frontStyle: "bg-amber-50/80 border-amber-100",
    backStyle: "bg-linear-to-br from-amber-100/95 via-amber-50 to-white border-amber-200",
    stepBg: "bg-amber-100 text-amber-800 border-amber-200",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Visa Guidance",
    tagline: "Mocks & Documentation",
    description:
      "Meticulous documentation and consular mock interview drives ensuring an industry-leading approval record.",
    highlights: [
      "Consular Mock Interviews",
      "Financial Proof Auditing",
      "Emergency Visa Slots",
    ],
    stat: "98% Success Rate",
    href: "/services/visa-guidance",
    badgeVariant: "emerald" as const,
    frontStyle: "bg-emerald-50/80 border-emerald-100",
    backStyle: "bg-linear-to-br from-emerald-100/95 via-emerald-50 to-white border-emerald-200",
    stepBg: "bg-emerald-100 text-emerald-800 border-emerald-200",
  },
  {
    step: "05",
    icon: PlaneTakeoff,
    title: "Post Admission",
    tagline: "Forex, Housing & Travel",
    description:
      "End-to-end relocation assistance including verified accommodation search, forex, and pre-departure briefings.",
    highlights: [
      "Forex Fee Transfer Support",
      "Campus Housing Search",
      "Global Student Network",
    ],
    stat: "360° Settlement",
    href: "/services/post-admission",
    badgeVariant: "sky" as const,
    frontStyle: "bg-sky-50/80 border-sky-100",
    backStyle: "bg-linear-to-br from-sky-100/95 via-sky-50 to-white border-sky-200",
    stepBg: "bg-sky-100 text-sky-800 border-sky-200",
  },
]

export function ServicesOverview() {
  return (
    <Section variant="default" className="relative overflow-hidden">
      <Container>
        <Reveal direction="up" delay={50}>
          <SectionHeader
            eyebrow="Our 5-Stage Roadmap"
            title="Your Complete Journey to Global Education"
            description="From initial counseling to post-landing settlement, every milestone is mentored with precision."
            align="center"
          />
        </Reveal>

        {/* Desktop 3D Flip Cards (lg: 5-column grid) */}
        <Reveal direction="up" delay={150}>
          <div className="hidden lg:grid lg:grid-cols-5 gap-5 items-stretch">
            {SERVICES.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="service-flip-card group h-102.5 w-full cursor-pointer"
                >
                  <div className="service-flip-inner">
                    {/* Front Face: Minimal, clean, large title & icon */}
                    <div
                      className={cn(
                        "service-flip-front rounded-3xl border p-6 flex flex-col justify-between shadow-xs transition-shadow duration-300 group-hover:shadow-xl",
                        service.frontStyle
                      )}
                    >
                      {/* Top: Step Badge */}
                      <div className="flex items-center justify-between">
                        <span
                          className={cn(
                            "rounded-full border px-2.5 py-0.5 text-xs font-bold uppercase",
                            service.stepBg
                          )}
                        >
                          Step {service.step}
                        </span>
                      </div>

                      {/* Center: Icon + Main Title + Subtitle */}
                      <div className="flex flex-col items-center text-center my-auto py-4">
                        <IconBadge
                          icon={Icon}
                          variant={service.badgeVariant}
                          size="lg"
                          className="mb-5 shadow-xs"
                        />
                        <h3 className="font-heading text-2xl font-bold text-primary mb-1.5">
                          {service.title}
                        </h3>
                        <p className="text-xs font-semibold text-secondary">
                          {service.tagline}
                        </p>
                      </div>

                      {/* Bottom: Interactive Flip Hint */}
                      <div className="pt-4 border-t border-black/5 flex items-center justify-between text-[11px] font-semibold text-primary/70 group-hover:text-primary transition-colors">

                        <ArrowRight className="h-3.5 w-3.5 text-secondary transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>

                    {/* Back Face: Shows remaining content (description, deliverables, stat & CTA) */}
                    <div
                      className={cn(
                        "service-flip-back rounded-3xl border p-6 flex flex-col justify-between shadow-xl text-left",
                        service.backStyle
                      )}
                    >
                      <div>
                        {/* Top: Step & Stat Badge */}
                        <div className="flex items-center justify-between mb-3">
                          <span
                            className={cn(
                              "rounded-full border px-2.5 py-0.5 text-[11px] font-bold uppercase",
                              service.stepBg
                            )}
                          >
                            Step {service.step}
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-full bg-white/90 border border-border/80 px-2 py-0.5 text-[10px] font-bold text-primary shadow-2xs">
                            <Sparkles className="h-3 w-3 text-secondary" />
                            {service.stat}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-muted-foreground leading-relaxed mb-3.5">
                          {service.description}
                        </p>

                        {/* Bullet Highlights */}
                        <ul className="space-y-1.5 mb-4 border-t border-black/5 pt-3">
                          {service.highlights.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-1.5 text-[11px] font-medium text-foreground/85 leading-tight"
                            >
                              <CheckCircle2 className="h-3 w-3 text-secondary shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Direct CTA Link */}
                      <Link
                        href={service.href}
                        className="inline-flex items-center justify-between w-full rounded-2xl bg-primary px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-primary/90 transition-all group/btn"
                      >
                        <span>Explore {service.title}</span>
                        <ArrowRight className="h-3.5 w-3.5 text-secondary transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>

        {/* Mobile & Tablet Clean Roadmap Stack (< lg) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:hidden">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            return (
              <Reveal
                key={service.title}
                direction="up"
                delay={100 + index * 80}
              >
                <div
                  className={cn(
                    "rounded-3xl border p-6 flex flex-col justify-between h-full shadow-xs",
                    service.frontStyle
                  )}
                >
                  <div>
                    {/* Step & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={cn(
                          "rounded-full border px-3 py-1 text-xs font-bold uppercase",
                          service.stepBg
                        )}
                      >
                        Step {service.step}
                      </span>
                      <IconBadge
                        icon={Icon}
                        variant={service.badgeVariant}
                        size="sm"
                      />
                    </div>

                    <h3 className="font-heading text-xl font-bold text-primary mb-1">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-secondary mb-3">
                      {service.tagline}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-6 border-t border-black/5 pt-4">
                      {service.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-xs font-medium text-foreground/85"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-secondary shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Link */}
                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-between w-full rounded-2xl bg-white/80 border border-border px-4 py-3 text-xs font-bold uppercase tracking-wider text-primary shadow-2xs hover:bg-white transition-all group"
                  >
                    <span>Explore {service.title}</span>
                    <ArrowRight className="h-4 w-4 text-secondary transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

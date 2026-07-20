import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { Card } from "@/components/primitives/Card"
import { Button } from "@/components/primitives/Button"
import { CTABanner } from "@/components/CTABanner"

export const metadata: Metadata = {
  title: "Events & Webinars",
  description: "Join upcoming study abroad webinars, GRE/GMAT masterclasses, and university interaction sessions hosted by The Globalizers.",
}

const EVENTS_LIST = [
  { title: "GRE Secrets 2026 Masterclass", date: "July 15, 2026", time: "5:00 PM – 6:30 PM", speaker: "Prashant Hemnani (Founder)", category: "GRE Prep", href: "/contact-us" },
  { title: "Study in Germany: Tuition-Free Options", date: "July 18, 2026", time: "4:00 PM – 5:30 PM", speaker: "Europe Admissions Lead", category: "Country Guide", href: "/contact-us" },
  { title: "IELTS Writing Task 2 Band 8+ Workshop", date: "July 20, 2026", time: "6:00 PM – 7:30 PM", speaker: "Senior IELTS Trainer", category: "Language Prep", href: "/contact-us" },
  { title: "US F-1 Visa Interview Simulation Drive", date: "July 22, 2026", time: "3:00 PM – 5:00 PM", speaker: "Visa Documentation Head", category: "Visa Guidance", href: "/contact-us" },
]

export default function EventsPage() {
  return (
    <>
      <Section variant="default" className="py-20 md:py-28 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-72 w-96 rounded-full bg-gradient-to-tr from-sky-200/40 via-violet-200/30 to-pink-200/40 blur-3xl opacity-60 pointer-events-none" />
        <Container className="max-w-4xl">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-primary">
            Interactive Sessions
          </span>
          <h1 className="mb-6 font-heading text-4xl font-extrabold tracking-tight text-primary md:text-5xl lg:text-6xl">
            Upcoming Events &amp; Masterclasses
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Attend live interactive webinars, test-prep workshops, and virtual counseling sessions with senior mentors.
          </p>
        </Container>
      </Section>

      <Section variant="peach">
        <Container>
          <SectionHeader
            eyebrow="Schedule"
            title="Register for Live Sessions"
            description="All sessions are free to attend with prior online registration."
            align="left"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {EVENTS_LIST.map((event, i) => (
              <Card
                key={event.title}
                padding="default"
                variant={(["peach", "sky", "lavender", "mint"] as const)[i % 4]}
                className="flex flex-col justify-between h-full"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase">
                      {event.category}
                    </span>
                    <span className="text-xs font-semibold text-secondary flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {event.date}
                    </span>
                  </div>

                  <h3 className="mb-4 font-heading text-xl font-bold text-primary">
                    {event.title}
                  </h3>

                  <div className="space-y-2 text-xs font-medium text-muted-foreground border-t border-border pt-3 mb-6">
                    <p className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-secondary shrink-0" />
                      {event.time}
                    </p>
                    <p className="flex items-center gap-2">
                      <User className="h-4 w-4 text-secondary shrink-0" />
                      Speaker: {event.speaker}
                    </p>
                  </div>
                </div>

                <Link href={event.href} className="block w-full">
                  <Button variant="secondary" size="sm" className="w-full justify-center">
                    Reserve Free Seat
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner />
    </>
  )
}

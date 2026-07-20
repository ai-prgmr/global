import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { Container } from "@/components/primitives/Container"
import { Button } from "@/components/primitives/Button"

const EVENTS = [
  "Webinar: GRE Secrets 2026",
  "Seminar: Study in Germany",
  "IELTS Workshop: Writing Mastery",
  "Visa Drive: US F1 Prep",
]

export function UpcomingEventsStrip() {
  return (
    <section className="bg-secondary py-4 text-white">
      <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex shrink-0 items-center gap-3">
          <Calendar className="h-6 w-6 shrink-0" />
          <div className="font-heading text-base font-bold">
            Upcoming Events &amp; Webinars
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold md:text-sm">
          {EVENTS.map((event, i) => (
            <span key={i} className="inline-flex items-center gap-3">
              <span className="hover:underline cursor-pointer">{event}</span>
              {i < EVENTS.length - 1 && <span className="opacity-40">&bull;</span>}
            </span>
          ))}
        </div>

        <Link href="/events-updates" className="shrink-0">
          <Button variant="outline" size="sm" className="bg-white text-secondary border-white hover:bg-white/90">
            Register Now
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </Container>
    </section>
  )
}

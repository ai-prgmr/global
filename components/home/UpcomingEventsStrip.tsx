import Link from "next/link"

const EVENTS = [
  "Webinar: GRE Secrets 2026 - July 15th",
  "Seminar: Study in Germany - July 18th",
  "IELTS Workshop: Writing Mastery - July 20th",
  "Visa Drive: US F1 Interview Prep - July 22nd",
]

export function UpcomingEventsStrip() {
  return (
    <section className="overflow-hidden bg-secondary py-4 text-white">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-4 px-6 md:flex-row md:gap-8">
        <div className="flex shrink-0 items-center gap-3">
          <span className="material-symbols-outlined text-3xl">event</span>
          <div className="whitespace-nowrap font-[Montserrat] text-lg font-bold">
            Upcoming Events
          </div>
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="trust-scroll flex items-center gap-12 whitespace-nowrap">
            {[0, 1].map((set) => (
              <div key={set} className="flex items-center gap-12">
                {EVENTS.map((event, i) => (
                  <span key={`${set}-${i}`}>
                    <span className="cursor-pointer hover:underline">{event}</span>
                    {i < EVENTS.length - 1 && (
                      <span className="ml-12 inline-block h-1 w-1 rounded-full bg-white" />
                    )}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <Link
          href="/events-updates"
          className="shrink-0 rounded-lg bg-white px-6 py-2 font-[Montserrat] font-bold text-secondary transition-all hover:bg-opacity-90"
        >
          Register Now
        </Link>
      </div>
    </section>
  )
}

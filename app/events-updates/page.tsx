import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { CTABanner } from "@/components/CTABanner"

export const metadata: Metadata = { title: "Events & Webinars", description: "Register for upcoming webinars, workshops, and seminars. Watch past event recordings and stay connected with The Globalizers community." }

const UPCOMING = [
  { title: "GRE Secrets 2026: Score 330+ Webinar", date: "July 15, 2026", time: "7:00 PM IST", speaker: "Prashant Hemnani", type: "Webinar", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUDvtK-I3Qsx217yJv-_vN-12PVi9hciswCtYjig9nhXq1aSwWwE6r4ih-i5jLq7okmxfW3sal-_iqg7qkNzYI5ED4vb9ht1qYW5FiHTCqFjG9-6wabAVkF_WohdFZqkL0XIPThYRR34_av08pWrm3MBsUpsr9VaLhJspJso0CRTOggxV3BzkWFaOl40trV4d-B1CobWPTFo9Rev-IgZvG59dg6XT_XtivGVyLdfgDtr-5I5OFfziEak7CgLvkwD667wOd_so9oVE" },
  { title: "Study in Germany: Free Education Seminar", date: "July 18, 2026", time: "5:00 PM IST", speaker: "Reet Sharma", type: "Seminar", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0Xqs2oZndkZa16SXNmxok2pLmjep3MhSekj2OracQTrZ2vfVGFqP_ZnOh7AqN3HdE48pZFaK_8jC_Ym6HJMWgqqQEkYKR99I6LKXHH99nKB8FD1jWyHrEPdD_bgCBv-ceOFihA5Hl8n8vkFJyLlqVBPGzJl0HKz05Q4NwCtNy1NfAfYO-unF7FhHh2iBxfJ-AqPRScONVtqv8SP3veviuPD5fcHyw2rSw0PVTxk2jVdJVlvngESOWrMutNaUh8ni_TXunfm0Re24" },
  { title: "IELTS Writing Mastery Workshop", date: "July 20, 2026", time: "6:00 PM IST", speaker: "Santosh Patel", type: "Workshop", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUDvtK-I3Qsx217yJv-_vN-12PVi9hciswCtYjig9nhXq1aSwWwE6r4ih-i5jLq7okmxfW3sal-_iqg7qkNzYI5ED4vb9ht1qYW5FiHTCqFjG9-6wabAVkF_WohdFZqkL0XIPThYRR34_av08pWrm3MBsUpsr9VaLhJspJso0CRTOggxV3BzkWFaOl40trV4d-B1CobWPTFo9Rev-IgZvG59dg6XT_XtivGVyLdfgDtr-5I5OFfziEak7CgLvkwD667wOd_so9oVE" },
]

const PAST = [
  { title: "Study Abroad Conclave Indore 2025", date: "Dec 15, 2025", attendees: "500+" },
  { title: "Fall 2026 US Admissions Masterclass", date: "Nov 20, 2025", attendees: "300+" },
  { title: "Scholarship Strategies Webinar", date: "Oct 10, 2025", attendees: "450+" },
]

export default function EventsPage() {
  return (
    <>
      <section className="bg-primary py-24 text-white">
        <div className="mx-auto max-w-[1280px] px-6">
          <h1 className="mb-4 font-[Montserrat] text-4xl font-bold md:text-5xl">Learn Live. Ask Anything.</h1>
          <p className="max-w-2xl text-lg text-white/70">Free webinars, workshops, and seminars with our expert faculty. Register now and take the first step.</p>
        </div>
      </section>

      {/* Upcoming */}
      <section className="mx-auto max-w-[1280px] px-6 py-20">
        <h2 className="mb-12 font-[Montserrat] text-3xl font-semibold text-primary">Upcoming Events</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {UPCOMING.map((event) => (
            <div key={event.title} className="group overflow-hidden rounded-2xl border border-surface-border bg-white transition-all hover:shadow-xl">
              <div className="relative aspect-video overflow-hidden">
                <Image src={event.image} alt={event.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute right-4 top-4 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-white">{event.type}</span>
              </div>
              <div className="p-6">
                <h3 className="mb-3 font-[Montserrat] text-lg font-semibold text-primary">{event.title}</h3>
                <div className="space-y-2 text-sm text-on-surface-variant">
                  <p className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-secondary">calendar_month</span>{event.date}</p>
                  <p className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-secondary">schedule</span>{event.time}</p>
                  <p className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-secondary">person</span>{event.speaker}</p>
                </div>
                <Link href="/contact-us" className="mt-4 inline-block w-full rounded-lg bg-secondary py-3 text-center font-[Montserrat] font-bold text-white transition-all hover:scale-[1.02]">
                  Register Free
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section className="bg-surface-container py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <h2 className="mb-8 font-[Montserrat] text-3xl font-semibold text-primary">Past Events</h2>
          <div className="space-y-4">
            {PAST.map((event) => (
              <div key={event.title} className="flex items-center justify-between rounded-xl border border-surface-border bg-white p-6">
                <div>
                  <h4 className="font-[Montserrat] font-semibold text-primary">{event.title}</h4>
                  <p className="text-sm text-on-surface-variant">{event.date} • {event.attendees} attendees</p>
                </div>
                <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">View Recording</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Never Miss an Event" buttonText="Register for Next Event" />
    </>
  )
}

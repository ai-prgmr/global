import Image from "next/image"
import type { Metadata } from "next"
import { CTABanner } from "@/components/CTABanner"

export const metadata: Metadata = {
  title: "Success Stories",
  description: "Read how The Globalizers helped 6,000+ students achieve their dream of studying abroad at top universities worldwide.",
}

const STORIES = [
  { name: "Arjun Mehta", university: "Stanford University", country: "USA", course: "MS Computer Science", score: "GRE 332", scholarship: "$40,000", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUDvtK-I3Qsx217yJv-_vN-12PVi9hciswCtYjig9nhXq1aSwWwE6r4ih-i5jLq7okmxfW3sal-_iqg7qkNzYI5ED4vb9ht1qYW5FiHTCqFjG9-6wabAVkF_WohdFZqkL0XIPThYRR34_av08pWrm3MBsUpsr9VaLhJspJso0CRTOggxV3BzkWFaOl40trV4d-B1CobWPTFo9Rev-IgZvG59dg6XT_XtivGVyLdfgDtr-5I5OFfziEak7CgLvkwD667wOd_so9oVE", quote: "The Globalizers didn't just prepare me for the GRE — they prepared me for life at Stanford." },
  { name: "Priya Sharma", university: "University of Oxford", country: "UK", course: "MBA", score: "GMAT 740", scholarship: "£25,000", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0Xqs2oZndkZa16SXNmxok2pLmjep3MhSekj2OracQTrZ2vfVGFqP_ZnOh7AqN3HdE48pZFaK_8jC_Ym6HJMWgqqQEkYKR99I6LKXHH99nKB8FD1jWyHrEPdD_bgCBv-ceOFihA5Hl8n8vkFJyLlqVBPGzJl0HKz05Q4NwCtNy1NfAfYO-unF7FhHh2iBxfJ-AqPRScONVtqv8SP3veviuPD5fcHyw2rSw0PVTxk2jVdJVlvngESOWrMutNaUh8ni_TXunfm0Re24", quote: "From Indore to Oxford — I couldn't have done it without Prashant sir's guidance." },
  { name: "Rohit Verma", university: "University of Toronto", country: "Canada", course: "MS Data Science", score: "GRE 325", scholarship: "CAD 15,000", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUDvtK-I3Qsx217yJv-_vN-12PVi9hciswCtYjig9nhXq1aSwWwE6r4ih-i5jLq7okmxfW3sal-_iqg7qkNzYI5ED4vb9ht1qYW5FiHTCqFjG9-6wabAVkF_WohdFZqkL0XIPThYRR34_av08pWrm3MBsUpsr9VaLhJspJso0CRTOggxV3BzkWFaOl40trV4d-B1CobWPTFo9Rev-IgZvG59dg6XT_XtivGVyLdfgDtr-5I5OFfziEak7CgLvkwD667wOd_so9oVE", quote: "The personalized counselling and mock interviews were game-changers for my application." },
]

export default function SuccessStoriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-24 text-white">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <h1 className="mb-4 font-[Montserrat] text-4xl font-bold md:text-5xl">From Indore to the World</h1>
          <p className="mx-auto max-w-2xl text-lg text-white/70">Real stories of real students who turned their dreams into reality with The Globalizers.</p>
          <div className="mt-8 flex justify-center gap-8">
            {[{ n: "6,000+", l: "Students" }, { n: "500+", l: "Universities" }, { n: "12", l: "Countries" }, { n: "₹50Cr+", l: "Scholarships" }].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-[Montserrat] text-2xl font-bold md:text-3xl">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-white/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="mx-auto max-w-[1280px] px-6 py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {STORIES.map((story) => (
            <div key={story.name} className="group overflow-hidden rounded-2xl border border-surface-border bg-white transition-all hover:shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr]">
                <div className="relative aspect-square md:aspect-auto">
                  <Image src={story.image} alt={story.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="mb-2 flex flex-wrap gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{story.country}</span>
                    <span className="rounded-full bg-success-gold/10 px-3 py-1 text-xs font-semibold text-success-gold">{story.scholarship}</span>
                  </div>
                  <h3 className="font-[Montserrat] text-lg font-bold text-primary">{story.name}</h3>
                  <p className="text-sm font-semibold text-secondary">{story.university}</p>
                  <p className="mt-1 text-xs text-on-surface-variant">{story.course} • {story.score}</p>
                  <blockquote className="mt-4 border-l-2 border-secondary pl-4 text-sm italic text-on-surface-variant">
                    &quot;{story.quote}&quot;
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner title="Write Your Own Success Story" />
    </>
  )
}

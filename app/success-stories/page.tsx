import Image from "next/image"
import type { Metadata } from "next"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { Card } from "@/components/primitives/Card"
import { StatCard } from "@/components/primitives/StatCard"
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
      <Section variant="default" className="py-20 md:py-28 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-72 w-96 rounded-full bg-gradient-to-tr from-sky-200/40 via-violet-200/30 to-pink-200/40 blur-3xl opacity-60 pointer-events-none" />
        <Container className="max-w-4xl space-y-8">
          <div>
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-primary">
              Global Admits
            </span>
            <h1 className="mb-4 font-heading text-4xl font-extrabold tracking-tight text-primary md:text-5xl lg:text-6xl">
              From Indore to the World
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Real stories of real students who turned their study abroad dreams into reality with The Globalizers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <StatCard variant="default" value="6,000+" label="Students" />
            <StatCard variant="default" value="500+" label="Universities" />
            <StatCard variant="default" value="12" label="Countries" />
            <StatCard variant="default" value="₹50Cr+" label="Scholarships" />
          </div>
        </Container>
      </Section>

      <Section variant="mint">
        <Container>
          <SectionHeader
            eyebrow="Case Studies"
            title="Featured Alumni Journeys"
            description="Detailed application breakdown and student experiences."
            align="left"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {STORIES.map((story) => (
              <Card key={story.name} padding="none" variant="rose" className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] h-full">
                  <div className="relative aspect-square md:aspect-auto">
                    <Image src={story.image} alt={story.name} fill className="object-cover" />
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="mb-3 flex flex-wrap gap-2">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">{story.country}</span>
                        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">{story.scholarship}</span>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-primary">{story.name}</h3>
                      <p className="text-sm font-bold text-secondary">{story.university}</p>
                      <p className="mt-1 text-xs font-medium text-muted-foreground">{story.course} • {story.score}</p>
                      <p className="mt-4 border-l-2 border-secondary pl-3 text-sm italic text-muted-foreground line-clamp-3">
                        &ldquo;{story.quote}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner title="Write Your Own Success Story" />
    </>
  )
}

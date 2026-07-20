import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { Card } from "@/components/primitives/Card"
import { Button } from "@/components/primitives/Button"

const FEATURED_STORIES = [
  {
    name: "Arjun Mehta",
    university: "Stanford University",
    country: "USA",
    course: "MS Computer Science",
    score: "GRE 332",
    scholarship: "$40,000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUDvtK-I3Qsx217yJv-_vN-12PVi9hciswCtYjig9nhXq1aSwWwE6r4ih-i5jLq7okmxfW3sal-_iqg7qkNzYI5ED4vb9ht1qYW5FiHTCqFjG9-6wabAVkF_WohdFZqkL0XIPThYRR34_av08pWrm3MBsUpsr9VaLhJspJso0CRTOggxV3BzkWFaOl40trV4d-B1CobWPTFo9Rev-IgZvG59dg6XT_XtivGVyLdfgDtr-5I5OFfziEak7CgLvkwD667wOd_so9oVE",
    quote: "The Globalizers didn't just prepare me for the GRE — they prepared me for life at Stanford.",
  },
  {
    name: "Priya Sharma",
    university: "University of Oxford",
    country: "UK",
    course: "MBA",
    score: "GMAT 740",
    scholarship: "£25,000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0Xqs2oZndkZa16SXNmxok2pLmjep3MhSekj2OracQTrZ2vfVGFqP_ZnOh7AqN3HdE48pZFaK_8jC_Ym6HJMWgqqQEkYKR99I6LKXHH99nKB8FD1jWyHrEPdD_bgCBv-ceOFihA5Hl8n8vkFJyLlqVBPGzJl0HKz05Q4NwCtNy1NfAfYO-unF7FhHh2iBxfJ-AqPRScONVtqv8SP3veviuPD5fcHyw2rSw0PVTxk2jVdJVlvngESOWrMutNaUh8ni_TXunfm0Re24",
    quote: "From Indore to Oxford — I couldn't have done it without Prashant sir's guidance.",
  },
  {
    name: "Rohit Verma",
    university: "University of Toronto",
    country: "Canada",
    course: "MS Data Science",
    score: "GRE 325",
    scholarship: "CAD 15,000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUDvtK-I3Qsx217yJv-_vN-12PVi9hciswCtYjig9nhXq1aSwWwE6r4ih-i5jLq7okmxfW3sal-_iqg7qkNzYI5ED4vb9ht1qYW5FiHTCqFjG9-6wabAVkF_WohdFZqkL0XIPThYRR34_av08pWrm3MBsUpsr9VaLhJspJso0CRTOggxV3BzkWFaOl40trV4d-B1CobWPTFo9Rev-IgZvG59dg6XT_XtivGVyLdfgDtr-5I5OFfziEak7CgLvkwD667wOd_so9oVE",
    quote: "The personalized counselling and mock interviews were game-changers for my application.",
  },
]

export function SuccessStoriesSection() {
  return (
    <Section variant="surface">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Alumni Success"
            title="Global Admits & Stories"
            description="See how our students paved their path to the world's leading universities."
            align="left"
            className="mb-0"
          />
          <Link href="/success-stories" className="shrink-0">
            <Button variant="primary" size="sm">
              Read All Stories
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {FEATURED_STORIES.map((story) => (
            <Card
              key={story.name}
              padding="none"
              className="group flex flex-col justify-between overflow-hidden h-full"
            >
              <div>
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute right-4 top-4 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-white shadow-xs">
                    {story.score}
                  </div>
                  {story.scholarship && (
                    <div className="absolute left-4 bottom-4 rounded-lg bg-primary/95 px-3 py-1 text-xs font-bold text-white shadow-xs">
                      Scholarship: {story.scholarship}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="mb-2 text-xs font-bold text-secondary uppercase tracking-wider">
                    {story.course} • {story.country}
                  </div>
                  <h3 className="mb-1 font-heading text-xl font-bold text-primary">
                    {story.name}
                  </h3>
                  <p className="mb-4 text-xs font-semibold text-muted-foreground">
                    {story.university}
                  </p>
                  <p className="italic text-sm text-muted-foreground line-clamp-3">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}

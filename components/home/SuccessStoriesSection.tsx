import Image from "next/image"
import Link from "next/link"
import { SectionHeading } from "@/components/SectionHeading"

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
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mb-12 flex flex-col items-end justify-between gap-4 md:flex-row">
          <div className="text-left">
            <span className="inline-block rounded-full bg-secondary/10 px-3.5 py-1 text-xs font-bold text-secondary uppercase tracking-wider mb-2">
              Alumni Success
            </span>
            <h2 className="font-[Montserrat] text-3xl font-bold text-primary">
              Global Admits & Stories
            </h2>
            <p className="mt-2 text-on-surface-variant text-sm md:text-base">
              See how our students paved their path to the world&apos;s leading universities.
            </p>
          </div>
          <Link
            href="/success-stories"
            className="rounded-lg bg-primary px-6 py-3 font-[Montserrat] font-bold text-white transition-all hover:bg-secondary hover:shadow-lg inline-flex items-center"
          >
            Read All Stories
            <span className="material-symbols-outlined ml-2 text-sm">
              arrow_forward
            </span>
          </Link>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {FEATURED_STORIES.map((story) => (
            <div
              key={story.name}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-surface-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div>
                {/* Image & Overlay Badges */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute right-4 top-4 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-white">
                    {story.score}
                  </div>
                  {story.scholarship && (
                    <div className="absolute left-4 bottom-4 rounded-lg bg-primary/95 px-3 py-1 text-xs font-bold text-white shadow-md">
                      Scholarship: {story.scholarship}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-2 flex items-center gap-1.5 text-xs font-bold text-secondary uppercase tracking-wider">
                    <span>{story.course}</span>
                    <span>•</span>
                    <span>{story.country}</span>
                  </div>
                  <h3 className="mb-1 font-[Montserrat] text-xl font-bold text-primary">
                    {story.name}
                  </h3>
                  <p className="mb-4 text-xs font-semibold text-on-surface-variant/60">
                    {story.university}
                  </p>
                  <p className="relative italic text-sm text-on-surface-variant/90 before:content-['“'] before:text-2xl before:text-secondary/40 before:absolute before:-left-3 before:-top-2 pl-2">
                    {story.quote}
                  </p>
                </div>
              </div>

              {/* Bottom line border */}
              <div className="h-1.5 w-full bg-primary transition-all duration-300 group-hover:bg-secondary" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

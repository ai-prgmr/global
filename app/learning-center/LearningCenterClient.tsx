"use client"

import { useState } from "react"
import { Search, X, Video, Play } from "lucide-react"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { BlogCard } from "@/components/primitives/BlogCard"
import { Button } from "@/components/primitives/Button"

const CATEGORIES = ["All", "GRE Prep", "GMAT Prep", "IELTS & TOEFL", "Study Abroad Guide", "Visa Guidance"]

const VIDEOS = [
  { id: "1", title: "GRE Verbal Masterclass: Text Completion Hacks", category: "GRE Prep", duration: "18:24", views: "12K+ views", author: "Prashant Hemnani", excerpt: "Learn core vocabulary shortcuts and sentence elimination techniques to boost your GRE Verbal score." },
  { id: "2", title: "How to Choose the Right Study Abroad Destination", category: "Study Abroad Guide", duration: "12:40", views: "8K+ views", author: "Admissions Counselling Team", excerpt: "Comprehensive evaluation framework covering tuition costs, post-study work visas, and PR opportunities." },
  { id: "3", title: "Crack GMAT Focus Edition: Data Insights Strategy", category: "GMAT Prep", duration: "15:10", views: "5K+ views", author: "Senior Quant Faculty", excerpt: "Step-by-step masterclass on tackling the Data Insights section with speed and high accuracy." },
  { id: "4", title: "IELTS Speaking Band 8+ Interview Mock Session", category: "IELTS & TOEFL", duration: "22:15", views: "15K+ views", author: "IELTS Head Trainer", excerpt: "Watch a live mock speaking test with detailed breakdown of fluency, vocabulary, and pronunciation scoring." },
  { id: "5", title: "US F-1 Visa Mock Interview & Common Questions", category: "Visa Guidance", duration: "19:05", views: "20K+ views", author: "Visa Documentation Cell", excerpt: "Real-world simulation of the US consular interview with strategies for gap year and funding questions." },
  { id: "6", title: "GRE Quant 170 Strategy: Advanced Problem Solving", category: "GRE Prep", duration: "25:30", views: "9K+ views", author: "Quant Faculty Lead", excerpt: "Master high-difficulty math problems in data interpretation, geometry, and probability." },
]

export function LearningCenterClient() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [activeVideo, setActiveVideo] = useState<typeof VIDEOS[0] | null>(null)

  const filteredVideos = VIDEOS.filter((v) => {
    const matchesCategory = selectedCategory === "All" || v.category === selectedCategory
    const matchesSearch =
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <Section variant="default" className="py-20 md:py-28 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-72 w-96 rounded-full bg-gradient-to-tr from-sky-200/40 via-violet-200/30 to-pink-200/40 blur-3xl opacity-60 pointer-events-none" />
        <Container className="max-w-4xl">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-primary">
            Free Video Vault
          </span>
          <h1 className="mb-6 font-heading text-4xl font-extrabold tracking-tight text-primary md:text-5xl lg:text-6xl">
            Learning Center &amp; Masterclasses
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Watch free test-prep video lessons, university selection guides, and visa interview strategies hosted by Prashant Hemnani.
          </p>

          <div className="mx-auto flex max-w-xl items-center rounded-full border border-border bg-white px-5 shadow-lg transition-all focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
            <Search className="h-5 w-5 text-muted-foreground shrink-0" />
            <input
              type="text"
              placeholder="Search masterclasses by topic or exam..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent px-4 py-3.5 text-primary placeholder-muted-foreground outline-none text-base font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="flex items-center justify-center rounded-full p-1 text-muted-foreground hover:bg-surface hover:text-primary"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </Container>
      </Section>

      {/* Videos Section */}
      <Section variant="default">
        <Container>
          <div className="mb-12 flex flex-col items-center justify-between gap-6 border-b border-border pb-6 md:flex-row">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                    selectedCategory === cat
                      ? "bg-primary text-white shadow-xs"
                      : "bg-surface text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {filteredVideos.length} Video{filteredVideos.length !== 1 ? "s" : ""}
            </div>
          </div>

          {filteredVideos.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredVideos.map((v, i) => (
                <div key={v.id} onClick={() => setActiveVideo(v)} className="cursor-pointer">
                  <BlogCard
                    title={v.title}
                    category={v.category}
                    excerpt={v.excerpt}
                    duration={v.duration}
                    author={v.author}
                    views={v.views}
                    cardVariant={(["lavender", "sky", "mint", "peach", "rose"] as const)[i % 5]}
                    href="#"
                    isVideo
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center space-y-4">
              <Video className="mx-auto h-16 w-16 text-muted-foreground/40" />
              <h3 className="font-heading text-xl font-bold text-primary">No Masterclasses Found</h3>
              <p className="text-muted-foreground">Try adjusting your search terms or category filters.</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All")
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </Container>
      </Section>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="relative w-full max-w-3xl rounded-3xl bg-card p-6 md:p-8 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div>
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">{activeVideo.category}</span>
                <h3 className="font-heading text-xl font-bold text-primary mt-1">{activeVideo.title}</h3>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="rounded-full p-2 text-foreground hover:bg-surface"
                aria-label="Close video modal"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="relative aspect-video w-full rounded-2xl bg-primary flex items-center justify-center text-white">
              <div className="text-center space-y-3">
                <Play className="h-16 w-16 mx-auto text-white/90 fill-current" />
                <p className="font-heading text-lg font-bold">Interactive Video Player</p>
                <p className="text-xs text-white/70">Duration: {activeVideo.duration} &bull; Instructor: {activeVideo.author}</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">{activeVideo.excerpt}</p>
          </div>
        </div>
      )}
    </div>
  )
}

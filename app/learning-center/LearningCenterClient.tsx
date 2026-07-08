"use client"

import { useState } from "react"
import { SectionHeading } from "@/components/SectionHeading"
import { CTABanner } from "@/components/CTABanner"
import { VIDEOS_CATALOG, CATEGORIES, type Video } from "@/lib/data/videos"

export default function LearningCenterClient() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [activeVideo, setActiveVideo] = useState<Video | null>(null)

  // Filter logic
  const filteredVideos = VIDEOS_CATALOG.filter((video) => {
    const matchesCategory =
      selectedCategory === "All" || video.category === selectedCategory
    const matchesSearch =
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-24 text-white">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 font-[Inter] text-xs font-semibold uppercase tracking-wider">
            Free Vault
          </span>
          <h1 className="mb-6 font-[Montserrat] text-4xl font-bold md:text-5xl leading-tight">
            Learning Center
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Boost your preparation with free masterclasses, strategy seminars, and
            expert admissions advice videos hosted by our team and founder.
          </p>
        </div>
        <div className="absolute -bottom-40 -right-20 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-tertiary/20 blur-3xl" />
      </section>

      {/* Main Content Area */}
      <section className="mx-auto max-w-[1280px] px-6 py-16">
        {/* Filters and Search Bar */}
        <div className="mb-12 flex flex-col items-center justify-between gap-6 border-b border-surface-border pb-8 lg:flex-row">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-5 py-2 font-[Montserrat] text-xs font-semibold transition-all ${selectedCategory === cat
                    ? "bg-secondary text-white shadow-md scale-105"
                    : "bg-surface-container text-on-surface-variant hover:bg-surface-border"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/60">
              search
            </span>
            <input
              type="text"
              placeholder="Search masterclasses, topics, or speakers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-surface-border bg-white py-3 pl-12 pr-6 text-sm outline-none transition-all focus:border-secondary focus:ring-1 focus:ring-secondary"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/60 hover:text-primary"
              >
                close
              </button>
            )}
          </div>
        </div>

        {/* Video Grid */}
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-surface-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-xl"
              >
                <div>
                  {/* Premium mock video thumbnail */}
                  <div
                    onClick={() => setActiveVideo(video)}
                    className={`relative flex aspect-video w-full cursor-pointer items-center justify-center bg-linear-to-br ${video.bgGradient} text-white`}
                  >
                    <div className="absolute inset-0 bg-black/15 transition-opacity group-hover:bg-black/30" />

                    {/* Play icon */}
                    <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-primary shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white">
                      <span className="material-symbols-outlined text-3xl font-bold translate-x-0.5">
                        play_arrow
                      </span>
                    </div>

                    {/* Badges */}
                    <span className="absolute bottom-3 right-3 rounded-md bg-black/75 px-2 py-1 text-[11px] font-bold tracking-wide">
                      {video.duration}
                    </span>
                    <span className="absolute left-3 top-3 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                      {video.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3
                      onClick={() => setActiveVideo(video)}
                      className="mb-2 cursor-pointer font-[Montserrat] text-lg font-bold text-primary transition-colors hover:text-secondary line-clamp-2"
                    >
                      {video.title}
                    </h3>
                    <p className="mb-4 text-xs font-semibold text-on-surface-variant/70">
                      Speaker: {video.speaker} • {video.views}
                    </p>
                    <p className="text-sm text-on-surface-variant line-clamp-3">
                      {video.description}
                    </p>
                  </div>
                </div>

                <div className="border-t border-surface-border p-6 pt-4">
                  <button
                    onClick={() => setActiveVideo(video)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 font-[Montserrat] text-sm font-bold text-white transition-all group-hover:bg-secondary hover:shadow-md"
                  >
                    Play Masterclass
                    <span className="material-symbols-outlined text-sm">
                      play_circle
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <span className="material-symbols-outlined text-6xl text-on-surface-variant/40">
              video_library_off
            </span>
            <h3 className="mt-4 font-[Montserrat] text-xl font-bold text-primary">
              No Masterclasses Found
            </h3>
            <p className="mt-2 text-on-surface-variant">
              We couldn&apos;t find any videos matching &quot;{searchQuery}&quot;. Try adjusting your search query.
            </p>
          </div>
        )}
      </section>

      {/* Video Modal Overlay */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm transition-all duration-300">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-surface-border px-6 py-4">
              <div>
                <span className="rounded-full bg-secondary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary">
                  {activeVideo.category}
                </span>
                <h3 className="mt-1 font-[Montserrat] text-lg font-bold text-primary">
                  {activeVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container text-primary transition-all hover:bg-surface-border hover:scale-105"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                title={activeVideo.title}
                className="absolute inset-0 h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Modal Description */}
            <div className="p-6">
              <p className="mb-2 text-xs font-semibold text-on-surface-variant/70">
                Presented by: <span className="text-primary font-bold">{activeVideo.speaker}</span> • {activeVideo.views}
              </p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {activeVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <CTABanner
        title="Want Personalized 1-on-1 Guidance?"
        buttonText="Book Free Counselling"
      />
    </>
  )
}

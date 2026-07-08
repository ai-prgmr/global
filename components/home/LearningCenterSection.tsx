import Link from "next/link"
import { SectionHeading } from "@/components/SectionHeading"

const FEATURED_VIDEOS = [
  {
    title: "GRE Verbal Masterclass: Text Completion Hacks",
    speaker: "Prashant Hemnani (Founder)",
    duration: "18:24",
    views: "12K+ views",
    category: "GRE Prep",
    bgGradient: "from-purple-600 to-indigo-800",
  },
  {
    title: "How to Choose the Right Study Abroad Destination",
    speaker: "Admissions Counselling Team",
    duration: "12:40",
    views: "8K+ views",
    category: "Study Abroad Guide",
    bgGradient: "from-blue-600 to-cyan-800",
  },
  {
    title: "Crack GMAT Focus Edition: Data Insights Strategy",
    speaker: "Senior Quant Faculty",
    duration: "15:10",
    views: "5K+ views",
    category: "GMAT Prep",
    bgGradient: "from-emerald-600 to-teal-800",
  },
]

export function LearningCenterSection() {
  return (
    <section className="bg-surface-container py-20">
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeading
          title="Learning Center"
          subtitle="Access our exclusive vault of free test-prep masterclasses and study abroad advice videos, hosted by Prashant Hemnani and our senior mentors."
        />

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_VIDEOS.map((video) => (
            <div
              key={video.title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-surface-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl"
            >
              <div>
                {/* Premium Mock Video Thumbnail */}
                <div className={`relative flex aspect-video w-full items-center justify-center bg-linear-to-br ${video.bgGradient} text-white`}>
                  <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/25" />

                  {/* Play Button Overlay */}
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
                  <h3 className="mb-2 font-[Montserrat] text-lg font-bold text-primary transition-colors group-hover:text-secondary line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs font-semibold text-on-surface-variant/70">
                    <span>{video.speaker}</span>
                    <span>{video.views}</span>
                  </div>
                </div>
              </div>

              {/* Watch Link */}
              <div className="border-t border-surface-border p-6 pt-4">
                <Link
                  href="/learning-center"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 font-[Montserrat] text-sm font-bold text-white transition-all group-hover:bg-secondary group-hover:shadow-md"
                >
                  Watch Masterclass
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/learning-center"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-primary px-8 py-4 font-[Montserrat] text-base font-bold text-primary transition-all hover:bg-primary hover:text-white"
          >
            Explore All Free Videos
            <span className="material-symbols-outlined text-lg">video_library</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Play, ExternalLink, Sparkles, CheckCircle2, Users, Video, Bell } from "lucide-react"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { Button } from "@/components/primitives/Button"
import Reveal from "@/components/Reveal"

function YouTubeIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

interface FeaturedVideo {
  id: string
  title: string
  category: string
  duration: string
  thumbnailUrl: string
  youtubeUrl: string
}

const FEATURED_VIDEOS: FeaturedVideo[] = [
  {
    id: "1",
    title: "GRE Verbal 165+ Blueprint: Complete Strategy by Prashant Hemnani",
    category: "GRE Prep",
    duration: "24:15",
    thumbnailUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    youtubeUrl: "https://www.youtube.com/@InspirewithPrashant",
  },
  {
    id: "2",
    title: "US F-1 Student Visa Interview Mock & Real Officer Questions",
    category: "Visa Masterclass",
    duration: "18:40",
    thumbnailUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    youtubeUrl: "https://www.youtube.com/@InspirewithPrashant",
  },
  {
    id: "3",
    title: "Study in Germany & Europe: Zero Tuition & English Taught Programs",
    category: "Country Guide",
    duration: "32:10",
    thumbnailUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
    youtubeUrl: "https://www.youtube.com/@InspirewithPrashant",
  },
]

const CHANNEL_HIGHLIGHTS = [
  "Comprehensive GRE & GMAT Concept Masterclasses",
  "Live Student Profile Reviews & Shortlisting Guides",
  "US, UK & German Visa Mock Interview Recordings",
  "Scholarship Application Blueprints & SOP Guidance",
]

interface YouTubeShowcaseProps {
  className?: string
}

export function YouTubeShowcase({ className }: YouTubeShowcaseProps) {
  const channelUrl = "https://www.youtube.com/@InspirewithPrashant"

  return (
    <Section variant="default" className={className}>
      <Container>
        <Reveal direction="up" delay={50}>
          <div className="relative overflow-hidden rounded-3xl border border-red-200/60 bg-gradient-to-br from-red-50/70 via-card to-violet-50/50 p-6 md:p-10 shadow-xl">
            {/* Ambient Background Glow */}
            <div className="absolute -right-16 -top-16 -z-10 h-72 w-72 rounded-full bg-red-400/10 blur-3xl" />
            <div className="absolute -left-16 -bottom-16 -z-10 h-72 w-72 rounded-full bg-violet-400/10 blur-3xl" />

            {/* Top Badge & Header */}
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-red-100 pb-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-red-100/80 px-3.5 py-1.5 text-xs font-bold text-red-600 border border-red-200 shadow-2xs">
                  <YouTubeIcon className="h-4 w-4 fill-red-600 text-white" />
                  <span>Official YouTube Channel</span>
                </div>
                <h2 className="font-heading text-3xl font-extrabold text-primary md:text-4xl">
                  Inspire with Prashant
                </h2>
                <p className="max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed">
                  Join thousands of aspiring global students. Watch expert video lectures, GRE/GMAT prep tactics, live profile evaluations, and visa interview strategies hosted by Founder &amp; Chief Mentor <strong className="text-foreground font-semibold">Prashant Hemnani</strong>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href={channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-red-700 hover:shadow-red-600/25 focus:outline-none focus:ring-2 focus:ring-red-500/40"
                >
                  <YouTubeIcon className="h-5 w-5 fill-white" />
                  <span>Subscribe on YouTube</span>
                  <ExternalLink className="h-4 w-4 opacity-80" />
                </a>
              </div>
            </div>

            {/* Content Grid: Channel Highlights + Featured Videos */}
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Highlights & Host Info */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-4 rounded-2xl bg-white/80 p-4 border border-border/60 shadow-2xs backdrop-blur-sm">
                  <Image
                    src="/global/prashant-hemnani.png"
                    alt="Prashant Hemnani"
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-full object-cover border-2 border-red-500 shadow-xs shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-heading text-base font-bold text-primary">Prashant Hemnani</h4>
                      <CheckCircle2 className="h-4 w-4 text-red-600 fill-red-100" />
                    </div>
                    <p className="text-xs font-semibold text-muted-foreground">Founder &amp; Chief Mentor, The Globalizers</p>
                    <p className="mt-1 text-xs text-secondary font-bold">@InspirewithPrashant</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-amber-500" />
                    What You Will Learn On The Channel:
                  </h4>
                  <ul className="space-y-2.5">
                    {CHANNEL_HIGHLIGHTS.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs md:text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4.5 w-4.5 text-red-500 shrink-0 mt-0.5" />
                        <span className="font-medium text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <a
                    href={channelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 hover:text-red-700 hover:underline"
                  >
                    <Bell className="h-4 w-4" />
                    <span>Browse All Playlists &amp; Live Videos →</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Featured Video Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {FEATURED_VIDEOS.map((video) => (
                  <a
                    key={video.id}
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card p-3 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-red-300 hover:shadow-md"
                  >
                    {/* Thumbnail Container */}
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted">
                      <Image
                        src={video.thumbnailUrl}
                        alt={video.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/40" />

                      {/* Play Icon Badge */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                          <Play className="h-5 w-5 fill-white translate-x-0.5" />
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <div className="absolute bottom-2 right-2 rounded bg-black/75 px-1.5 py-0.5 text-[10px] font-bold text-white">
                        {video.duration}
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-2 left-2 rounded-full bg-primary/90 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-xs">
                        {video.category}
                      </div>
                    </div>

                    {/* Video Info */}
                    <div className="mt-3 flex-1 flex flex-col justify-between space-y-2">
                      <h5 className="font-heading text-xs font-bold text-primary line-clamp-2 leading-snug group-hover:text-red-600 transition-colors">
                        {video.title}
                      </h5>
                      <div className="flex items-center justify-between text-[11px] font-semibold text-muted-foreground pt-1 border-t border-border/40">
                        <span className="flex items-center gap-1 text-red-600">
                          <YouTubeIcon className="h-3.5 w-3.5 fill-current" />
                          Watch Video
                        </span>
                        <ExternalLink className="h-3 w-3 opacity-60" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}

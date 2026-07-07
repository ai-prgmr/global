import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { CTABanner } from "@/components/CTABanner"

export const metadata: Metadata = {
  title: "Founder — Prashant Hemnani",
  description: "Meet Prashant Hemnani, India's leading GRE Verbal authority and founder of The Globalizers. 19+ years of transforming students' futures.",
}

const AWARDS = [
  { year: "2019", title: "MP Visionary Education Award", description: "Recognized for outstanding contribution to education in Madhya Pradesh." },
  { year: "2021", title: "EduCo Global Recognition", description: "Awarded for excellence in international education consulting." },
  { year: "2023", title: "Indo-American Summit Feature", description: "Featured speaker at the Indo-American Education Summit." },
  { year: "2024", title: "Top 50 Education Leaders", description: "Named among India's Top 50 Education Leaders by Education World." },
]

export default function FounderPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-tertiary py-24 text-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-secondary/20 px-4 py-1.5 font-[Inter] text-xs font-semibold uppercase tracking-wider text-secondary">
              Founder & Chief Mentor
            </span>
            <h1 className="font-[Montserrat] text-4xl font-bold md:text-5xl">
              Prashant Hemnani
            </h1>
            <p className="text-lg text-white/80">
              India&apos;s leading GRE Verbal authority and the visionary behind
              The Globalizers. With 19+ years of experience, he has personally
              mentored over 6,000 students to secure admits at the world&apos;s
              top universities.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-secondary px-6 py-3 font-[Montserrat] font-bold text-white transition-all hover:scale-105">
                Connect on LinkedIn
              </a>
              <Link href="/contact-us" className="rounded-lg border-2 border-white/30 px-6 py-3 font-[Montserrat] font-bold text-white transition-all hover:bg-white/10">
                Book a Session
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/global/prashant-hemnani.png"
              alt="Prashant Hemnani - Founder"
              width={500}
              height={600}
              className="rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="mx-auto max-w-[1280px] px-6 py-20">
        <div className="mx-auto max-w-3xl space-y-6">
          <h2 className="font-[Montserrat] text-3xl font-semibold text-primary">The Journey</h2>
          <div className="h-1 w-20 bg-secondary" />
          <p className="text-on-surface-variant leading-relaxed">
            Prashant Hemnani&apos;s journey in education began with a deep-rooted passion for teaching
            and a belief that every student deserves access to world-class opportunities. After
            completing his own education abroad, he returned to Indore in 2007 with a vision:
            to create an institution that would bridge the gap between Indian students and
            global universities.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            What started as GRE coaching classes quickly evolved into a comprehensive study
            abroad consultancy. His unique teaching methodology — combining rigorous academics
            with personal mentorship — set The Globalizers apart. His GRE Verbal strategies
            are now considered among the most effective in India, earning him the reputation
            as &quot;India&apos;s GRE Verbal authority.&quot;
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Today, under his leadership, The Globalizers has expanded to four cities, launched
            an AI-powered learning platform, and maintains a near-perfect visa success rate
            of 98%. His personal philosophy — &quot;Education is not just about scores; it&apos;s
            about transformation&quot; — continues to guide every student interaction.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-16">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {[
            { number: "19+", label: "Years of Experience" },
            { number: "6,000+", label: "Students Mentored" },
            { number: "25k+", label: "Coaching Sessions" },
            { number: "98%", label: "Visa Success Rate" },
          ].map((stat) => (
            <div key={stat.label} className="text-center text-white">
              <div className="font-[Montserrat] text-4xl font-bold md:text-5xl">{stat.number}</div>
              <div className="mt-2 text-sm uppercase tracking-wider text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="mx-auto max-w-[1280px] px-6 py-20">
        <h2 className="mb-12 text-center font-[Montserrat] text-3xl font-semibold text-primary">
          Awards & Recognition
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {AWARDS.map((award) => (
            <div key={award.title} className="flex gap-6 rounded-xl border border-surface-border bg-white p-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-success-gold/10">
                <span className="material-symbols-outlined text-3xl text-success-gold">emoji_events</span>
              </div>
              <div>
                <span className="font-[Montserrat] text-sm font-bold text-secondary">{award.year}</span>
                <h4 className="mt-1 font-[Montserrat] text-lg font-semibold text-primary">{award.title}</h4>
                <p className="mt-1 text-sm text-on-surface-variant">{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="bg-tertiary py-20 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="material-symbols-outlined mb-6 text-5xl text-secondary">format_quote</span>
          <blockquote className="font-[Montserrat] text-2xl font-semibold italic leading-relaxed md:text-3xl">
            &quot;Education is not just about scores — it&apos;s about
            transformation. Every student who walks through our doors
            leaves as a global citizen.&quot;
          </blockquote>
          <div className="mt-8">
            <div className="font-[Montserrat] text-lg font-bold">Prashant Hemnani</div>
            <div className="text-white/60">Founder & Chief Mentor</div>
          </div>
        </div>
      </section>

      <CTABanner buttonText="Book a Session with Prashant" />
    </>
  )
}

import Link from "next/link"
import { CheckCircle2, ArrowRight, Sparkles, BookOpen, GraduationCap, Award, Laptop, Languages } from "lucide-react"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { Card } from "@/components/primitives/Card"
import { Button } from "@/components/primitives/Button"
import Reveal from "@/components/Reveal"

const OTHER_EXAMS = [
  {
    slug: "ielts",
    name: "IELTS Academic & General",
    badge: "Language Skills",
    badgeColor: "bg-violet-100 text-violet-800 border-violet-200",
    targetScore: "Band 7.5+",
    variant: "lavender" as const,
    description: "Comprehensive 4-module mastery with 1-on-1 speaking mock interviews and thorough essay evaluations.",
    highlights: ["1-on-1 Speaking Mocks", "Daily Practice Batches", "Task 1 & 2 Evaluation"],
    icon: Languages,
  },
  {
    slug: "toefl",
    name: "TOEFL iBT Prep",
    badge: "Academic English",
    badgeColor: "bg-pink-100 text-pink-800 border-pink-200",
    targetScore: "Score 105+",
    variant: "rose" as const,
    description: "Integrated task training, typing speed drills, and test-day lab simulations for US and global admissions.",
    highlights: ["Lab Simulation Practice", "Integrated Task Drills", "Speed Writing Mocks"],
    icon: Laptop,
  },
  {
    slug: "sat",
    name: "Digital SAT Prep",
    badge: "Undergraduate",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    targetScore: "Score 1500+",
    variant: "mint" as const,
    description: "Adaptive Bluebook-style test prep, math shortcuts, and speed reading strategies for top undergraduate admits.",
    highlights: ["Adaptive Bluebook Mocks", "Math Shortcut Strategy", "Reading Speed Drills"],
    icon: GraduationCap,
  },
  {
    slug: "duolingo",
    name: "Duolingo English Test",
    badge: "Fast & Convenient",
    badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
    targetScore: "Score 120+",
    variant: "sky" as const,
    description: "On-demand adaptive test preparation with AI-scored simulations, speaking clarity drills, and writing templates.",
    highlights: ["DET Platform Simulator", "Audio & Speaking Mocks", "Structured Templates"],
    icon: BookOpen,
  },
]

export function ExamPrepBento() {
  return (
    <Section variant="sky" className="relative overflow-hidden">
      <Container>
        <Reveal direction="up" delay={50}>
          <SectionHeader
            eyebrow="Test Preparation"
            title="Ace Your Global Admission Exams"
            description="Central India's leading test prep faculty guiding you to top GRE, GMAT, IELTS, TOEFL, SAT, and Duolingo scores with proven score improvement guarantees."
            align="center"
          />
        </Reveal>

        {/* Top Tier Bento: Flagship GRE + GMAT Focus */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Featured Card — GRE Flagship (2 cols) */}
          <Reveal direction="left" delay={150} className="lg:col-span-2 flex">
            <Card padding="lg" variant="primary" className="shadow-xl flex flex-col justify-between w-full relative overflow-hidden group">
              {/* Background Glow Accent */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-secondary/15 blur-3xl transition-all duration-500 group-hover:bg-secondary/25 pointer-events-none" />

              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Flagship Coaching
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-secondary/20 border border-secondary/30 px-3 py-1 text-xs font-semibold text-secondary">
                    <Sparkles className="h-3 w-3" />
                    Avg. +15 Points Boost
                  </span>
                </div>

                <h3 className="mt-5 mb-3 font-heading text-3xl font-bold md:text-4xl text-white">
                  GRE Verbal &amp; Quant Mastery
                </h3>
                <p className="mb-6 max-w-xl text-base leading-relaxed text-white/80">
                  Personally mentored by Founder Prashant Hemnani — Central India&apos;s leading GRE Verbal authority with 20+ years of coaching excellence. Master high-frequency vocabulary roots, logical reasoning shortcuts, and adaptive quant mastery.
                </p>

                <ul className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <li className="flex items-center gap-2 text-sm font-medium text-white/90">
                    <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                    Score improvement guarantee
                  </li>
                  <li className="flex items-center gap-2 text-sm font-medium text-white/90">
                    <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                    Interactive live sessions &amp; 1-on-1 doubt clearing
                  </li>
                  <li className="flex items-center gap-2 text-sm font-medium text-white/90">
                    <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                    Adaptive mock tests matching actual exam
                  </li>
                  <li className="flex items-center gap-2 text-sm font-medium text-white/90">
                    <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                    Comprehensive vocabulary flashcards &amp; analytics
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-white/10">
                <Link href="/exams/gre">
                  <Button variant="secondary" size="default">
                    Enroll for Free Demo
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/exams/gre" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-white/80 hover:text-white transition-colors">
                  View GRE Curriculum
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            </Card>
          </Reveal>

          {/* GMAT Focus Edition (1 col) */}
          <Reveal direction="right" delay={200} className="flex">
            <Card padding="lg" variant="peach" className="shadow-md flex flex-col justify-between w-full h-full">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-orange-100 border border-orange-200 px-3 py-1 text-xs font-bold text-orange-700 uppercase">
                    Management / MBA
                  </span>
                  <span className="text-xs font-bold text-orange-700">Target 655+</span>
                </div>

                <h4 className="mt-4 mb-2 font-heading text-2xl font-bold text-primary">
                  GMAT Focus Edition
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Specialized coaching for Quant, Verbal, and Data Insights. Essential for Ivy League and top global business school admissions.
                </p>

                <div className="space-y-2.5 mb-6">
                  <div className="flex items-center gap-2 text-xs font-medium text-primary/80">
                    <Award className="h-4 w-4 text-secondary shrink-0" />
                    Data Insights &amp; Multi-Source Reasoning
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-primary/80">
                    <Award className="h-4 w-4 text-secondary shrink-0" />
                    Time-saving quantitative shortcuts
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-primary/80">
                    <Award className="h-4 w-4 text-secondary shrink-0" />
                    Official-style adaptive mock exam series
                  </div>
                </div>
              </div>

              <Link
                href="/exams/gmat"
                className="inline-flex items-center justify-between w-full rounded-2xl bg-white/80 px-4 py-3 text-xs font-bold uppercase tracking-wider text-primary shadow-xs hover:bg-white transition-all group"
              >
                <span>Explore GMAT Prep</span>
                <ArrowRight className="h-4 w-4 text-secondary transition-transform group-hover:translate-x-1" />
              </Link>
            </Card>
          </Reveal>
        </div>

        {/* Bottom Tier Bento: 4 Language & Undergrad Exams */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {OTHER_EXAMS.map((exam, index) => {
            const Icon = exam.icon
            return (
              <Reveal key={exam.slug} direction="up" delay={250 + index * 80} className="flex">
                <Card
                  padding="default"
                  variant={exam.variant}
                  className="shadow-sm flex flex-col justify-between w-full h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-bold uppercase ${exam.badgeColor}`}>
                        {exam.badge}
                      </span>
                      <span className="text-[11px] font-bold text-primary/70">{exam.targetScore}</span>
                    </div>

                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-1.5 rounded-xl bg-white/70 text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h4 className="font-heading text-lg font-bold text-primary">
                        {exam.name}
                      </h4>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                      {exam.description}
                    </p>

                    <div className="space-y-1.5 mb-5 border-t border-black/5 pt-3">
                      {exam.highlights.map((item) => (
                        <div key={item} className="flex items-center gap-1.5 text-[11px] font-medium text-foreground/80">
                          <CheckCircle2 className="h-3 w-3 text-secondary shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/exams/${exam.slug}`}
                    className="inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-primary hover:text-secondary transition-colors group mt-auto pt-3 border-t border-black/5"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-3.5 w-3.5 text-secondary transition-transform group-hover:translate-x-1" />
                  </Link>
                </Card>
              </Reveal>
            )
          })}
        </div>

        {/* Bottom Hub Callout */}
        <Reveal direction="up" delay={550} className="mt-10 text-center">
          <p className="text-sm font-medium text-muted-foreground">
            Looking for personalized batch schedules or free diagnostic tests?{" "}
            <Link
              href="/exams"
              className="inline-flex items-center font-bold text-primary hover:text-secondary underline decoration-secondary/50 underline-offset-4 transition-colors"
            >
              Explore all Test Prep Programs &amp; Mocks
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </p>
        </Reveal>
      </Container>
    </Section>
  )
}


import Image from "next/image"
import Link from "next/link"
import { Star, ArrowRight } from "lucide-react"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { Button } from "@/components/primitives/Button"
import { Card } from "@/components/primitives/Card"

export function HeroSection() {
  return (
    <Section variant="gradient" className="py-16 md:py-24 lg:py-32">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="space-y-8 order-2 lg:order-1">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-primary">
            India&apos;s Leading Study Abroad Experts
          </span>
          <h1 className="font-heading text-4xl font-bold leading-tight text-primary md:text-5xl lg:text-6xl tracking-tight">
            Changing Lives, <br />
            One Student <br />
            at a Time
          </h1>
          <p className="max-w-lg font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
            Empowering ambitious minds with 19 years of institutional reliability
            and expert-led training to secure admits in the world&apos;s most
            prestigious universities.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/contact-us">
              <Button variant="secondary" size="default">
                Book Free Counselling
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/exams/gre">
              <Button variant="outline" size="default">
                Take a Free Mock Test
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          {/* Ambient soft glow blob */}
          <div className="absolute -inset-4 -z-10 rounded-full bg-linear-to-tr from-sky-200/50 via-violet-200/40 to-pink-200/50 blur-3xl opacity-70" />
          <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-border shadow-lg">
            <Image
              src="/global/student-hero.png"
              alt="Student with a diploma"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Floating stat card */}
          <Card
            padding="none"
            className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 flex items-center gap-2 sm:gap-4 px-3 py-2 sm:px-4 sm:py-3 bg-card shadow-xl border-border max-w-[160px] sm:max-w-xs"
          >
            <div className="flex h-8 w-8 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-amber-500 text-white shadow-xs">
              <Star className="h-4 w-4 sm:h-6 sm:w-6 fill-current" />
            </div>
            <div>
              <div className="font-heading text-base sm:text-2xl font-bold text-primary leading-tight">
                25,000+
              </div>
              <div className="text-[10px] sm:text-xs font-medium text-muted-foreground leading-tight">
                Students Mentored
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  )
}

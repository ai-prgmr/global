import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { Card } from "@/components/primitives/Card"
import { Button } from "@/components/primitives/Button"

export function ExamPrepBento() {
  return (
    <Section variant="surface">
      <Container>
        <SectionHeader
          eyebrow="Test Preparation"
          title="Ace Your Exams with Experts"
          description="Central India's leading test prep faculty guiding you to top GRE, GMAT, and IELTS scores."
          align="center"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Featured Card — GRE */}
          <Card padding="lg" className="bg-primary text-white border-none shadow-xl md:col-span-2 flex flex-col justify-between">
            <div>
              <span className="rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-secondary-foreground">
                Flagship Coaching
              </span>
              <h3 className="mt-4 mb-4 font-heading text-3xl font-bold md:text-4xl text-white">
                GRE Verbal &amp; Quant Mastery
              </h3>
              <p className="mb-6 max-w-md text-base leading-relaxed text-white/80">
                Personalized coaching led by Founder Prashant Hemnani. Master the Verbal section
                with our exclusive strategies and comprehensive vocabulary lists.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center gap-2 text-sm font-medium text-white/90">
                  <CheckCircle2 className="h-5 w-5 text-secondary-foreground shrink-0" />
                  Score improvement guarantee
                </li>
                <li className="flex items-center gap-2 text-sm font-medium text-white/90">
                  <CheckCircle2 className="h-5 w-5 text-secondary-foreground shrink-0" />
                  Interactive live sessions &amp; 1-on-1 doubt clearing
                </li>
              </ul>
            </div>
            <div>
              <Link href="/exams/gre">
                <Button variant="secondary" size="default">
                  Enroll Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </Card>

          {/* Side Cards */}
          <div className="flex flex-col gap-8">
            <Card padding="default" className="flex flex-col justify-between h-full">
              <div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase">
                  Language Skills
                </span>
                <h4 className="mt-3 mb-2 font-heading text-xl font-bold text-primary">
                  IELTS / TOEFL
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Master listening, reading, writing, and speaking with native-level training.
                </p>
              </div>
              <Link href="/exams/ielts" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-secondary hover:underline">
                Learn More
                <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </Card>

            <Card padding="default" className="flex flex-col justify-between h-full">
              <div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase">
                  Management
                </span>
                <h4 className="mt-3 mb-2 font-heading text-xl font-bold text-primary">
                  GMAT / SAT
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Specialized focus on logic and analytical skills for top business schools.
                </p>
              </div>
              <Link href="/exams/gmat" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-secondary hover:underline">
                Learn More
                <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  )
}

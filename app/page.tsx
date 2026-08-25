import { HeroSection } from "@/components/home/HeroSection"
import { ServicesOverview } from "@/components/home/ServicesOverview"
import { DestinationsGrid } from "@/components/home/DestinationsGrid"
import { ExamPrepBento } from "@/components/home/ExamPrepBento"
import { LearningCenterSection } from "@/components/home/LearningCenterSection"
import { FounderSpotlight } from "@/components/home/FounderSpotlight"
import { SuccessStoriesSection } from "@/components/home/SuccessStoriesSection"
import { TestimonialsSection } from "@/components/home/TestimonialsSection"
import { UpcomingEventsStrip } from "@/components/home/UpcomingEventsStrip"
import { YouTubeShowcase } from "@/components/YouTubeShowcase"
import { CTABanner } from "@/components/CTABanner"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { FAQ } from "@/components/primitives/FAQ"
import Reveal from "@/components/Reveal"
import { constructMetadata } from "@/lib/metadata"
import { generateFAQSchema, generateAggregateRatingSchema } from "@/lib/schema"

export const metadata = constructMetadata({
  title: "Study Abroad Consultancy & GRE/GMAT Prep",
  description:
    "India's leading consultancy for Study Abroad admissions, GRE, GMAT, IELTS, and TOEFL preparation. 19+ years of excellence, 6,000+ top admits worldwide.",
  path: "/",
})

const HOME_FAQS = [
  {
    q: "What services does The Globalizers provide?",
    a: "We offer end-to-end Study Abroad Counselling, high-score oriented coaching for exams like GRE, GMAT Focus Edition, IELTS, TOEFL, SAT, and PTE, student visa guidance, and scholarship application support.",
  },
  {
    q: "Who leads the mentoring team at The Globalizers?",
    a: "Our academic and tutoring programs are led by Founder & Chief Mentor Prashant Hemnani, widely recognized as India's leading GRE Verbal authority with 19+ years of coaching excellence.",
  },
  {
    q: "Where are The Globalizers' offices located?",
    a: "Our offices are located in Indore (Vijay Nagar & Bhawarkua), Noida, Jaipur, and Navi Mumbai. We also offer online tutoring and virtual counseling for students nationwide.",
  },
  {
    q: "What is the student success rate at The Globalizers?",
    a: "We have a proud track record of 6,000+ admits at top global universities, a 98% student visa success rate, and over ₹50Cr in merit scholarships secured by our students.",
  },
  {
    q: "Do you offer demo classes for test preparation?",
    a: "Yes, we offer free, interactive demo classes for GRE, GMAT, IELTS, TOEFL, SAT, and PTE. You can book a slot online or visit one of our centers.",
  },
]

export default function HomePage() {
  const faqSchema = generateFAQSchema(HOME_FAQS)
  const ratingSchema = generateAggregateRatingSchema({
    ratingValue: "4.9",
    reviewCount: "6000",
    itemTitle: "Study Abroad Admissions Mentorship",
  })

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
      />
      <HeroSection />



      <ServicesOverview />
      <DestinationsGrid />
      <ExamPrepBento />

      <Reveal direction="up" delay={100}>
        <LearningCenterSection />
      </Reveal>

      <Reveal direction="scale" delay={100}>
        <FounderSpotlight />
      </Reveal>

      <Reveal direction="up" delay={100}>
        <SuccessStoriesSection />
      </Reveal>

      <Reveal direction="up" delay={100}>
        <TestimonialsSection />
      </Reveal>

      <Reveal direction="up" delay={100}>
        <UpcomingEventsStrip />
      </Reveal>

      <Reveal direction="up" delay={100}>
        <YouTubeShowcase />
      </Reveal>

      {/* FAQs Section */}
      <Reveal direction="up" delay={100}>
        <Section variant="surface">
          <Container>
            <SectionHeader
              eyebrow="Got Questions?"
              title="Frequently Asked Questions"
              description="Find answers to common questions about our coaching, counseling, and admission services."
              align="center"
            />
            <FAQ items={HOME_FAQS} />
          </Container>
        </Section>
      </Reveal>

      <Reveal direction="scale" delay={100}>
        <CTABanner />
      </Reveal>
    </>
  )
}

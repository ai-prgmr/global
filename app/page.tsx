import { HeroSection } from "@/components/home/HeroSection"
import { TrustBar } from "@/components/TrustBar"
import { ServicesOverview } from "@/components/home/ServicesOverview"
import { DestinationsGrid } from "@/components/home/DestinationsGrid"
import { ExamPrepBento } from "@/components/home/ExamPrepBento"
import { LearningCenterSection } from "@/components/home/LearningCenterSection"
import { FounderSpotlight } from "@/components/home/FounderSpotlight"
import { SuccessStoriesSection } from "@/components/home/SuccessStoriesSection"
import { TestimonialsSection } from "@/components/home/TestimonialsSection"
import { UpcomingEventsStrip } from "@/components/home/UpcomingEventsStrip"
import { CTABanner } from "@/components/CTABanner"
import { SectionHeading } from "@/components/SectionHeading"

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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "The Globalizers",
    "url": "https://theglobalizers.com",
    "logo": "https://theglobalizers.com/logo.png",
    "description": "India's leading consultancy for Study Abroad, GRE, GMAT, IELTS, and TOEFL preparation. 19+ years of excellence, 6,000+ students mentored.",
    "founder": {
      "@type": "Person",
      "name": "Prashant Hemnani",
      "jobTitle": "Founder & Chief Mentor"
    },
    "foundingDate": "2007",
    "sameAs": [
      "https://www.facebook.com/TheGlobalizersIndore/",
      "https://www.instagram.com/the_globalizers/",
      "https://www.linkedin.com/company/the-globalizers/"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "301-304, Third Floor, Apollo Premier, Vijay Nagar",
      "addressLocality": "Indore",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "452010",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-731-4001222",
      "contactType": "admissions helpline"
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": HOME_FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection />
      <TrustBar />
      <ServicesOverview />
      <DestinationsGrid />
      <ExamPrepBento />
      <LearningCenterSection />
      <FounderSpotlight />
      <SuccessStoriesSection />
      <TestimonialsSection />
      <UpcomingEventsStrip />
      
      {/* FAQs Section */}
      <section className="mx-auto max-w-[1280px] px-6 py-20">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our coaching, counseling, and admission services."
        />
        <div className="mx-auto max-w-3xl space-y-4">
          {HOME_FAQS.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-xl border border-surface-border bg-white"
            >
              <summary className="flex cursor-pointer items-center justify-between p-6 font-[Montserrat] font-semibold text-primary">
                {faq.q}
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="border-t border-surface-border px-6 pb-6 pt-4 text-sm text-on-surface-variant">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  )
}

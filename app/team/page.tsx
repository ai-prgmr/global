import Image from "next/image"
import type { Metadata } from "next"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { Card } from "@/components/primitives/Card"
import { CTABanner } from "@/components/CTABanner"

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the expert counsellors, trainers, and mentors behind The Globalizers' 6,000+ student success stories.",
}

const TEAM = [
  { name: "Prashant Hemnani", role: "Founder & Chief Mentor", specialty: "GRE Verbal, Strategy", bio: "19+ years of experience. India's leading GRE Verbal authority. Has personally mentored 6,000+ students.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUDvtK-I3Qsx217yJv-_vN-12PVi9hciswCtYjig9nhXq1aSwWwE6r4ih-i5jLq7okmxfW3sal-_iqg7qkNzYI5ED4vb9ht1qYW5FiHTCqFjG9-6wabAVkF_WohdFZqkL0XIPThYRR34_av08pWrm3MBsUpsr9VaLhJspJso0CRTOggxV3BzkWFaOl40trV4d-B1CobWPTFo9Rev-IgZvG59dg6XT_XtivGVyLdfgDtr-5I5OFfziEak7CgLvkwD667wOd_so9oVE" },
  { name: "Reet Sharma", role: "Senior Counsellor", specialty: "USA & UK Admissions", bio: "Specialist in Ivy League applications with a 95% admit rate for counselled students.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0Xqs2oZndkZa16SXNmxok2pLmjep3MhSekj2OracQTrZ2vfVGFqP_ZnOh7AqN3HdE48pZFaK_8jC_Ym6HJMWgqqQEkYKR99I6LKXHH99nKB8FD1jWyHrEPdD_bgCBv-ceOFihA5Hl8n8vkFJyLlqVBPGzJl0HKz05Q4NwCtNy1NfAfYO-unF7FhHh2iBxfJ-AqPRScONVtqv8SP3veviuPD5fcHyw2rSw0PVTxk2jVdJVlvngESOWrMutNaUh8ni_TXunfm0Re24" },
  { name: "Vishal Kumar", role: "Visa Expert", specialty: "F1 Interview Prep & Visa Filing", bio: "98% visa approval rate. Expert in US F1 and UK Tier 4 visa processes.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUDvtK-I3Qsx217yJv-_vN-12PVi9hciswCtYjig9nhXq1aSwWwE6r4ih-i5jLq7okmxfW3sal-_iqg7qkNzYI5ED4vb9ht1qYW5FiHTCqFjG9-6wabAVkF_WohdFZqkL0XIPThYRR34_av08pWrm3MBsUpsr9VaLhJspJso0CRTOggxV3BzkWFaOl40trV4d-B1CobWPTFo9Rev-IgZvG59dg6XT_XtivGVyLdfgDtr-5I5OFfziEak7CgLvkwD667wOd_so9oVE" },
  { name: "Kapil Mehta", role: "GRE Quant Trainer", specialty: "GRE Quantitative & SAT Math", bio: "10+ years of coaching experience. Known for making complex math concepts simple.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0Xqs2oZndkZa16SXNmxok2pLmjep3MhSekj2OracQTrZ2vfVGFqP_ZnOh7AqN3HdE48pZFaK_8jC_Ym6HJMWgqqQEkYKR99I6LKXHH99nKB8FD1jWyHrEPdD_bgCBv-ceOFihA5Hl8n8vkFJyLlqVBPGzJl0HKz05Q4NwCtNy1NfAfYO-unF7FhHh2iBxfJ-AqPRScONVtqv8SP3veviuPD5fcHyw2rSw0PVTxk2jVdJVlvngESOWrMutNaUh8ni_TXunfm0Re24" },
  { name: "Santosh Patel", role: "IELTS/TOEFL Trainer", specialty: "English Proficiency Coaching", bio: "Certified IELTS trainer with Band 9.0. Specializes in writing and speaking modules.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUDvtK-I3Qsx217yJv-_vN-12PVi9hciswCtYjig9nhXq1aSwWwE6r4ih-i5jLq7okmxfW3sal-_iqg7qkNzYI5ED4vb9ht1qYW5FiHTCqFjG9-6wabAVkF_WohdFZqkL0XIPThYRR34_av08pWrm3MBsUpsr9VaLhJspJso0CRTOggxV3BzkWFaOl40trV4d-B1CobWPTFo9Rev-IgZvG59dg6XT_XtivGVyLdfgDtr-5I5OFfziEak7CgLvkwD667wOd_so9oVE" },
  { name: "Joslin Fernandes", role: "GMAT Trainer", specialty: "GMAT Verbal & Strategy", bio: "MBA from a top B-school. 8+ years coaching GMAT with average 60-point improvements.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0Xqs2oZndkZa16SXNmxok2pLmjep3MhSekj2OracQTrZ2vfVGFqP_ZnOh7AqN3HdE48pZFaK_8jC_Ym6HJMWgqqQEkYKR99I6LKXHH99nKB8FD1jWyHrEPdD_bgCBv-ceOFihA5Hl8n8vkFJyLlqVBPGzJl0HKz05Q4NwCtNy1NfAfYO-unF7FhHh2iBxfJ-AqPRScONVtqv8SP3veviuPD5fcHyw2rSw0PVTxk2jVdJVlvngESOWrMutNaUh8ni_TXunfm0Re24" },
  { name: "Ankita Hemnani", role: "Operations Head", specialty: "Student Success & Operations", bio: "Ensures seamless operations across all 4 branches. Student experience champion.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUDvtK-I3Qsx217yJv-_vN-12PVi9hciswCtYjig9nhXq1aSwWwE6r4ih-i5jLq7okmxfW3sal-_iqg7qkNzYI5ED4vb9ht1qYW5FiHTCqFjG9-6wabAVkF_WohdFZqkL0XIPThYRR34_av08pWrm3MBsUpsr9VaLhJspJso0CRTOggxV3BzkWFaOl40trV4d-B1CobWPTFo9Rev-IgZvG59dg6XT_XtivGVyLdfgDtr-5I5OFfziEak7CgLvkwD667wOd_so9oVE" },
]

export default function TeamPage() {
  return (
    <>
      <Section variant="mint" className="py-20 md:py-28 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-72 w-96 rounded-full bg-gradient-to-tr from-sky-200/40 via-violet-200/30 to-pink-200/40 blur-3xl opacity-60 pointer-events-none" />
        <Container className="max-w-4xl">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-primary">
            Our Mentors
          </span>
          <h1 className="mb-6 font-heading text-4xl font-extrabold tracking-tight text-primary md:text-5xl lg:text-6xl">
            Meet the Team Behind 6,000 Success Stories
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Expert counsellors, award-winning trainers, and dedicated mentors committed to your global education journey.
          </p>
        </Container>
      </Section>

      <Section variant="sky">
        <Container>
          <SectionHeader
            eyebrow="Faculty &amp; Advisors"
            title="Experienced Mentorship Team"
            description="Leading trainers and admissions advisors across all 4 branches."
            align="left"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member, i) => (
              <Card
                key={member.name}
                padding="none"
                variant={(["lavender", "sky", "mint", "peach", "rose"] as const)[i % 5]}
                className="group overflow-hidden flex flex-col justify-between h-full"
              >
                <div>
                  <div className="relative aspect-4/3 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-heading text-xl font-bold">{member.name}</h3>
                      <p className="text-xs text-white/80 font-medium">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {member.specialty}
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner primaryCtaText="Book Session with an Expert" />
    </>
  )
}

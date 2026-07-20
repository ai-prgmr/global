import type { Metadata } from "next"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { StatCard } from "@/components/primitives/StatCard"
import { CTABanner } from "@/components/CTABanner"

export const metadata: Metadata = {
  title: "Admissions & Score Results",
  description: "Explore the proven track record of The Globalizers — verified student admits, scholarships, and high exam scores.",
}

const RESULTS = [
  { name: "Arjun M.", university: "Stanford University", country: "USA", course: "MS CS", exam: "GRE", score: "332", scholarship: "$40,000", year: "2025" },
  { name: "Priya S.", university: "University of Oxford", country: "UK", course: "MBA", exam: "GMAT", score: "740", scholarship: "£25,000", year: "2025" },
  { name: "Rohit V.", university: "University of Toronto", country: "Canada", course: "MS Data Science", exam: "GRE", score: "325", scholarship: "CAD 15K", year: "2024" },
  { name: "Ananya G.", university: "MIT", country: "USA", course: "MS EE", exam: "GRE", score: "335", scholarship: "$50,000", year: "2025" },
  { name: "Karan P.", university: "Columbia University", country: "USA", course: "MS Finance", exam: "GRE", score: "328", scholarship: "$30,000", year: "2024" },
  { name: "Meera R.", university: "TU Munich", country: "Germany", course: "MS Mechanical", exam: "IELTS", score: "8.0", scholarship: "€10,000", year: "2025" },
  { name: "Siddharth J.", university: "University of Melbourne", country: "Australia", course: "MBA", exam: "GMAT", score: "720", scholarship: "AUD 20K", year: "2024" },
  { name: "Neha T.", university: "Harvard University", country: "USA", course: "MPP", exam: "GRE", score: "338", scholarship: "$60,000", year: "2025" },
]

export default function ResultsPage() {
  return (
    <>
      <Section variant="primary" className="py-20 md:py-28 text-center">
        <Container className="max-w-4xl space-y-8">
          <div>
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-white">
              Proven Track Record
            </span>
            <h1 className="mb-4 font-heading text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              Student Admission Results
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/80 leading-relaxed">
              Verified admits, scholarships, and exam scores from our students across global universities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <StatCard variant="dark" value="6,000+" label="Total Admits" description="500+ Partner Universities" />
            <StatCard variant="dark" value="50+" label="Ivy League" description="Harvard, Stanford, Columbia" />
            <StatCard variant="dark" value="₹50Cr+" label="Scholarships" description="Merit Grants Secured" />
          </div>
        </Container>
      </Section>

      <Section variant="default">
        <Container>
          <SectionHeader
            eyebrow="Verification"
            title="Recent Student Achievers"
            description="Browse verified admission offers and test scores."
            align="left"
          />

          <div className="overflow-x-auto rounded-3xl border border-border bg-card shadow-xs">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface font-heading text-xs font-bold uppercase tracking-wider text-foreground">
                <tr>
                  <th className="p-4">Student</th>
                  <th className="p-4">University</th>
                  <th className="p-4">Country</th>
                  <th className="p-4">Course</th>
                  <th className="p-4">Exam</th>
                  <th className="p-4">Score</th>
                  <th className="p-4">Scholarship</th>
                  <th className="p-4">Year</th>
                </tr>
              </thead>
              <tbody>
                {RESULTS.map((r, i) => (
                  <tr
                    key={r.name}
                    className={`border-t border-border ${i % 2 === 0 ? "bg-card" : "bg-surface/50"}`}
                  >
                    <td className="p-4 font-bold text-primary">{r.name}</td>
                    <td className="p-4 font-medium">{r.university}</td>
                    <td className="p-4">
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                        {r.country}
                      </span>
                    </td>
                    <td className="p-4">{r.course}</td>
                    <td className="p-4 font-semibold">{r.exam}</td>
                    <td className="p-4 font-bold text-secondary">{r.score}</td>
                    <td className="p-4 font-semibold text-emerald-600 dark:text-emerald-400">{r.scholarship}</td>
                    <td className="p-4 text-muted-foreground">{r.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <CTABanner title="Join Our List of Achievers" />
    </>
  )
}

import type { Metadata } from "next"
import { CTABanner } from "@/components/CTABanner"

export const metadata: Metadata = { title: "Results", description: "Explore the proven track record of The Globalizers — filterable database of student admits, scholarships, and exam scores." }

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
      <section className="bg-primary py-20 text-white">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <h1 className="mb-4 font-[Montserrat] text-4xl font-bold md:text-5xl">Our Results</h1>
          <p className="mb-8 text-lg text-white/70">Verified admits, scholarships, and exam scores from our students.</p>
          <div className="flex justify-center gap-12">
            {[{ n: "6,000+", l: "Total Admits" }, { n: "50+", l: "Ivy League" }, { n: "₹50Cr+", l: "Scholarships" }].map((s) => (
              <div key={s.l}><div className="font-[Montserrat] text-3xl font-bold">{s.n}</div><div className="text-xs uppercase tracking-wider text-white/60">{s.l}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-16">
        <div className="overflow-x-auto rounded-xl border border-surface-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface-container font-[Montserrat] text-xs uppercase tracking-wider text-on-surface-variant">
              <tr>
                <th className="p-4">Student</th><th className="p-4">University</th><th className="p-4">Country</th><th className="p-4">Course</th><th className="p-4">Exam</th><th className="p-4">Score</th><th className="p-4">Scholarship</th><th className="p-4">Year</th>
              </tr>
            </thead>
            <tbody>
              {RESULTS.map((r, i) => (
                <tr key={r.name} className={`border-t border-surface-border ${i % 2 === 0 ? "bg-white" : "bg-surface-container-low"}`}>
                  <td className="p-4 font-semibold text-primary">{r.name}</td>
                  <td className="p-4">{r.university}</td>
                  <td className="p-4"><span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">{r.country}</span></td>
                  <td className="p-4">{r.course}</td>
                  <td className="p-4">{r.exam}</td>
                  <td className="p-4 font-bold text-secondary">{r.score}</td>
                  <td className="p-4 font-semibold text-success-gold">{r.scholarship}</td>
                  <td className="p-4">{r.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <CTABanner title="Join Our List of Achievers" />
    </>
  )
}

import Link from "next/link"

export function ExamPrepBento() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-20">
      <h2 className="mb-16 text-center font-[Montserrat] text-3xl font-semibold text-primary">
        Ace Your Exams with Experts
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Large Featured Card — GRE */}
        <div className="group relative overflow-hidden rounded-2xl bg-primary p-10 text-white md:col-span-2">
          <div className="relative z-10">
            <h3 className="mb-4 font-[Montserrat] text-4xl font-bold">
              GRE Verbal &amp; Quant
            </h3>
            <p className="mb-8 max-w-md text-on-primary-container">
              Personalized coaching by Prashant Hemnani. Master the Verbal section
              with our exclusive strategies and comprehensive vocabulary lists.
            </p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">
                  check_circle
                </span>
                Score improvement guarantee
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">
                  check_circle
                </span>
                Interactive live sessions
              </li>
            </ul>
            <Link
              href="/exams/gre"
              className="rounded-lg bg-secondary px-6 py-3 font-[Montserrat] font-bold text-white"
            >
              Enroll Now
            </Link>
          </div>
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl transition-transform duration-700 group-hover:scale-150" />
        </div>

        {/* Side Cards */}
        <div className="flex flex-col gap-6">
          <div className="rounded-2xl border border-surface-border bg-white p-8 transition-all hover:shadow-md">
            <h4 className="mb-2 font-[Montserrat] text-xl font-bold text-primary">
              IELTS / TOEFL
            </h4>
            <p className="mb-4 text-sm text-on-surface-variant">
              Master listening, reading, writing, and speaking with native-level
              training.
            </p>
            <Link
              href="/exams/ielts"
              className="text-sm font-bold uppercase tracking-widest text-secondary"
            >
              Learn More
            </Link>
          </div>
          <div className="rounded-2xl border border-surface-border bg-white p-8 transition-all hover:shadow-md">
            <h4 className="mb-2 font-[Montserrat] text-xl font-bold text-primary">
              GMAT / SAT
            </h4>
            <p className="mb-4 text-sm text-on-surface-variant">
              Specialized focus on logic and analytical skills for top business
              schools.
            </p>
            <Link
              href="/exams/gmat"
              className="text-sm font-bold uppercase tracking-widest text-secondary"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

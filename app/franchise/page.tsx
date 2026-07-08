import Image from "next/image"
import type { Metadata } from "next"
import { SectionHeading } from "@/components/SectionHeading"

export const metadata: Metadata = { title: "Franchise Opportunities", description: "Partner with Central India's most trusted name in global education. Explore The Globalizers franchise opportunities." }

const WHY_PARTNER = [
  { icon: "trending_up", title: "19+ Years of Trust", desc: "Leverage a brand built over nearly two decades of proven excellence." },
  { icon: "school", title: "Proven Curriculum", desc: "Access our proprietary learning platform and tested teaching methodology." },
  { icon: "support_agent", title: "Full Support", desc: "Comprehensive training, marketing support, and operational guidance." },
  { icon: "payments", title: "Strong ROI", desc: "Attractive return on investment with multiple revenue streams." },
]

const STEPS = [
  { step: "1", title: "Enquiry", desc: "Fill out the franchise enquiry form below." },
  { step: "2", title: "Discussion", desc: "Our team schedules a detailed discussion about the opportunity." },
  { step: "3", title: "Site Visit", desc: "Visit our headquarters in Indore to understand operations." },
  { step: "4", title: "Agreement", desc: "Sign the franchise agreement and begin setup." },
  { step: "5", title: "Launch", desc: "Complete training, set up your center, and launch!" },
]

const FAQS = [
  { q: "What is the minimum investment required?", a: "The total investment ranges from ₹15-25 lakhs depending on location and center size, covering setup, licensing, and initial working capital." },
  { q: "Do I need education industry experience?", a: "While experience in education is beneficial, it's not mandatory. We provide comprehensive training and ongoing support." },
  { q: "What territories are available?", a: "We are currently looking for franchise partners across Tier 1 and Tier 2 cities in India. Contact us for specific territory availability." },
  { q: "What support does The Globalizers provide?", a: "Full support including training, curriculum access, marketing materials, operational SOPs, and ongoing mentorship." },
]

export default function FranchisePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="relative overflow-hidden bg-tertiary py-24 text-white">
        <div className="mx-auto max-w-[1280px] px-6">
          <span className="mb-4 inline-block rounded-full bg-secondary/20 px-4 py-1.5 font-[Inter] text-xs font-semibold uppercase tracking-wider text-secondary">Partnership Opportunity</span>
          <h1 className="mb-6 font-[Montserrat] text-4xl font-bold md:text-5xl">Partner with Central India&apos;s<br />Most Trusted Name</h1>
          <p className="max-w-2xl text-lg text-white/70">Join The Globalizers franchise network and bring world-class education consulting to your city.</p>
          <a href="#enquiry" className="mt-8 inline-block rounded-lg bg-secondary px-8 py-4 font-[Montserrat] font-bold text-white transition-all hover:scale-105">Start Your Enquiry</a>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-20">
        <SectionHeading title="Why Partner with Us?" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {WHY_PARTNER.map((item) => (
            <div key={item.title} className="rounded-xl border border-surface-border bg-white p-6 text-center transition-all hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-3xl">{item.icon}</span>
              </div>
              <h3 className="mb-2 font-[Montserrat] font-semibold text-primary">{item.title}</h3>
              <p className="text-sm text-on-surface-variant">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-container py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <SectionHeading title="How It Works" />
          <div className="flex flex-col items-center gap-6 md:flex-row">
            {STEPS.map((s, i) => (
              <div key={s.step} className="flex flex-1 flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-[Montserrat] font-bold text-white">{s.step}</div>
                <h4 className="font-[Montserrat] font-semibold text-primary">{s.title}</h4>
                <p className="mt-1 text-xs text-on-surface-variant">{s.desc}</p>
                {i < STEPS.length - 1 && <div className="mt-4 hidden text-surface-border md:block"><span className="material-symbols-outlined">arrow_forward</span></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-20">
        <SectionHeading title="Frequently Asked Questions" />
        <div className="mx-auto max-w-3xl space-y-4">
          {FAQS.map((faq) => (
            <details key={faq.q} className="group rounded-xl border border-surface-border bg-white">
              <summary className="flex cursor-pointer items-center justify-between p-6 font-[Montserrat] font-semibold text-primary">
                {faq.q}
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="border-t border-surface-border px-6 pb-6 pt-4 text-sm text-on-surface-variant">{faq.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry" className="bg-primary py-20 text-white">
        <div className="mx-auto max-w-[600px] px-6">
          <h2 className="mb-8 text-center font-[Montserrat] text-3xl font-bold">Franchise Enquiry</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none" />
            <input type="email" placeholder="Email Address" className="w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none" />
            <input type="tel" placeholder="Phone Number" className="w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none" />
            <input type="text" placeholder="City of Interest" className="w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none" />
            <textarea placeholder="Tell us about yourself..." rows={4} className="w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none" />
            <button type="submit" className="w-full rounded-lg bg-secondary py-4 font-[Montserrat] font-bold text-white transition-all hover:scale-[1.02]">Submit Enquiry</button>
          </form>
        </div>
      </section>
    </>
  )
}

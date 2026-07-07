import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { SectionHeading } from "@/components/SectionHeading"

export const metadata: Metadata = {
  title: "Blog & Resources",
  description: "Expert insights on study abroad, exam preparation, visa processes, scholarships, and career guidance from The Globalizers.",
}

const CATEGORIES = ["All", "Exam Tips", "Country Guides", "Visa Process", "Scholarships", "Parent Resources", "Founder's Desk"]

const POSTS = [
  { title: "GRE 2026: Complete Guide to the New Format", category: "Exam Tips", readTime: "8 min", date: "June 28, 2026", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUDvtK-I3Qsx217yJv-_vN-12PVi9hciswCtYjig9nhXq1aSwWwE6r4ih-i5jLq7okmxfW3sal-_iqg7qkNzYI5ED4vb9ht1qYW5FiHTCqFjG9-6wabAVkF_WohdFZqkL0XIPThYRR34_av08pWrm3MBsUpsr9VaLhJspJso0CRTOggxV3BzkWFaOl40trV4d-B1CobWPTFo9Rev-IgZvG59dg6XT_XtivGVyLdfgDtr-5I5OFfziEak7CgLvkwD667wOd_so9oVE", excerpt: "Everything you need to know about the updated GRE format, scoring changes, and preparation strategies." },
  { title: "Top 10 Scholarships for Indian Students in the USA", category: "Scholarships", readTime: "6 min", date: "June 22, 2026", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0Xqs2oZndkZa16SXNmxok2pLmjep3MhSekj2OracQTrZ2vfVGFqP_ZnOh7AqN3HdE48pZFaK_8jC_Ym6HJMWgqqQEkYKR99I6LKXHH99nKB8FD1jWyHrEPdD_bgCBv-ceOFihA5Hl8n8vkFJyLlqVBPGzJl0HKz05Q4NwCtNy1NfAfYO-unF7FhHh2iBxfJ-AqPRScONVtqv8SP3veviuPD5fcHyw2rSw0PVTxk2jVdJVlvngESOWrMutNaUh8ni_TXunfm0Re24", excerpt: "A curated list of the most lucrative scholarships available for Indian students pursuing education in the US." },
  { title: "F-1 Visa Interview: 20 Questions You Must Prepare", category: "Visa Process", readTime: "10 min", date: "June 15, 2026", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUDvtK-I3Qsx217yJv-_vN-12PVi9hciswCtYjig9nhXq1aSwWwE6r4ih-i5jLq7okmxfW3sal-_iqg7qkNzYI5ED4vb9ht1qYW5FiHTCqFjG9-6wabAVkF_WohdFZqkL0XIPThYRR34_av08pWrm3MBsUpsr9VaLhJspJso0CRTOggxV3BzkWFaOl40trV4d-B1CobWPTFo9Rev-IgZvG59dg6XT_XtivGVyLdfgDtr-5I5OFfziEak7CgLvkwD667wOd_so9oVE", excerpt: "Master the F-1 visa interview with these commonly asked questions and expert-crafted sample answers." },
  { title: "Why Germany Is the Hidden Gem for MS Students", category: "Country Guides", readTime: "7 min", date: "June 10, 2026", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0Xqs2oZndkZa16SXNmxok2pLmjep3MhSekj2OracQTrZ2vfVGFqP_ZnOh7AqN3HdE48pZFaK_8jC_Ym6HJMWgqqQEkYKR99I6LKXHH99nKB8FD1jWyHrEPdD_bgCBv-ceOFihA5Hl8n8vkFJyLlqVBPGzJl0HKz05Q4NwCtNy1NfAfYO-unF7FhHh2iBxfJ-AqPRScONVtqv8SP3veviuPD5fcHyw2rSw0PVTxk2jVdJVlvngESOWrMutNaUh8ni_TXunfm0Re24", excerpt: "Zero tuition, strong engineering programs, and a booming job market — discover why Germany deserves your attention." },
  { title: "IELTS vs TOEFL: Which One Should You Take?", category: "Exam Tips", readTime: "5 min", date: "June 5, 2026", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUDvtK-I3Qsx217yJv-_vN-12PVi9hciswCtYjig9nhXq1aSwWwE6r4ih-i5jLq7okmxfW3sal-_iqg7qkNzYI5ED4vb9ht1qYW5FiHTCqFjG9-6wabAVkF_WohdFZqkL0XIPThYRR34_av08pWrm3MBsUpsr9VaLhJspJso0CRTOggxV3BzkWFaOl40trV4d-B1CobWPTFo9Rev-IgZvG59dg6XT_XtivGVyLdfgDtr-5I5OFfziEak7CgLvkwD667wOd_so9oVE", excerpt: "A detailed comparison to help you decide which English proficiency test is right for your target university." },
  { title: "A Parent's Guide to Study Abroad: What You Need to Know", category: "Parent Resources", readTime: "9 min", date: "May 28, 2026", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0Xqs2oZndkZa16SXNmxok2pLmjep3MhSekj2OracQTrZ2vfVGFqP_ZnOh7AqN3HdE48pZFaK_8jC_Ym6HJMWgqqQEkYKR99I6LKXHH99nKB8FD1jWyHrEPdD_bgCBv-ceOFihA5Hl8n8vkFJyLlqVBPGzJl0HKz05Q4NwCtNy1NfAfYO-unF7FhHh2iBxfJ-AqPRScONVtqv8SP3veviuPD5fcHyw2rSw0PVTxk2jVdJVlvngESOWrMutNaUh8ni_TXunfm0Re24", excerpt: "Everything parents need to know about costs, safety, visa processes, and how to support their child's study abroad journey." },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 text-white">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <h1 className="mb-4 font-[Montserrat] text-4xl font-bold md:text-5xl">Blog & Resources</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70">Expert insights, exam tips, country guides, and career advice for your global education journey.</p>
          {/* Search */}
          <div className="mx-auto flex max-w-xl items-center rounded-xl bg-white/10 px-4">
            <span className="material-symbols-outlined text-white/60">search</span>
            <input type="text" placeholder="Search articles..." className="flex-1 bg-transparent px-4 py-3 text-white placeholder-white/40 outline-none" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-surface-border bg-white py-4">
        <div className="mx-auto flex max-w-[1280px] gap-2 overflow-x-auto px-6">
          {CATEGORIES.map((cat, i) => (
            <button key={cat} className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${i === 0 ? "bg-primary text-white" : "bg-surface-container text-on-surface-variant hover:bg-primary/10"}`}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="mx-auto max-w-[1280px] px-6 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <article key={post.title} className="group overflow-hidden rounded-2xl border border-surface-border bg-white transition-all hover:shadow-xl">
              <div className="relative aspect-video overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">{post.category}</span>
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center gap-3 text-xs text-on-surface-variant">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime} read</span>
                </div>
                <h3 className="mb-2 font-[Montserrat] text-lg font-semibold text-primary group-hover:text-secondary">{post.title}</h3>
                <p className="mb-4 text-sm text-on-surface-variant line-clamp-2">{post.excerpt}</p>
                <span className="inline-flex items-center text-sm font-bold text-primary group-hover:text-secondary">
                  Read More <span className="material-symbols-outlined ml-1 text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-tertiary py-16 text-white">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <h2 className="mb-4 font-[Montserrat] text-2xl font-bold">Stay Updated</h2>
          <p className="mb-6 text-white/60">Get the latest study abroad tips and resources delivered to your inbox.</p>
          <div className="mx-auto flex max-w-md gap-3">
            <input type="email" placeholder="Enter your email" className="flex-1 rounded-lg bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none" />
            <button className="rounded-lg bg-secondary px-6 py-3 font-[Montserrat] font-bold text-white">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  )
}

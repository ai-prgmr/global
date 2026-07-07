"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const NAV_ITEMS = [
  {
    label: "About Us",
    children: [
      { label: "Our Story", href: "/about-globalizers" },
      { label: "Founder — Prashant Hemnani", href: "/founder" },
      { label: "Our Team", href: "/team" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "All Services", href: "/services" },
      { label: "Study Abroad Counselling", href: "/services/counselling" },
      { label: "Test Preparation", href: "/services/test-preparation" },
      { label: "Visa Guidance", href: "/services/visa-guidance" },
      { label: "Scholarship Assistance", href: "/services/scholarships" },
    ],
  },
  {
    label: "Exams",
    children: [
      { label: "GRE", href: "/exams/gre" },
      { label: "GMAT", href: "/exams/gmat" },
      { label: "IELTS", href: "/exams/ielts" },
      { label: "TOEFL", href: "/exams/toefl" },
      { label: "SAT", href: "/exams/sat" },
      { label: "PTE", href: "/exams/pte" },
    ],
  },
  {
    label: "Destinations",
    children: [
      { label: "USA", href: "/destinations/usa" },
      { label: "UK", href: "/destinations/uk" },
      { label: "Canada", href: "/destinations/canada" },
      { label: "Australia", href: "/destinations/australia" },
      { label: "Germany", href: "/destinations/germany" },
      { label: "Ireland", href: "/destinations/ireland" },
      { label: "France", href: "/destinations/france" },
      { label: "New Zealand", href: "/destinations/new-zealand" },
      { label: "Singapore", href: "/destinations/singapore" },
      { label: "Dubai", href: "/destinations/dubai" },
      { label: "Hong Kong", href: "/destinations/hong-kong" },
      { label: "Europe", href: "/destinations/europe" },
    ],
  },
  {
    label: "Success Stories",
    children: [
      { label: "Results", href: "/results" },
      { label: "Success Stories", href: "/success-stories" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
  { label: "Events", href: "/events-updates" },
  { label: "Blog", href: "/blog" },
  { label: "Franchise", href: "/franchise" },
  { label: "Contact", href: "/contact-us" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 border-b border-surface-border bg-surface-container-lowest/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOSDkGsk7-2o0rtUJpnvrcyoo3C7aBqsLhlOeYMYUPnKCKy6Gt6Nsc8ZLjiUc4wTjeBDtFibmD-fQRvechFa18rDqpI8XgGvccJe5BRqzwvkJVe8B-ssUDTefpN3Y_QPALDhk7tnifecoJvznB4oHaWv4JBDLMAETsEDV-KGHB_cARkSbOsiWQmkdrTbqF3XEjeubZgDSI978e1hdMZElp7Rq2TfD68yG3zkXYHABwkpH4bm8KPTL0uJov9FszLc41WAWVQWbcMcs"
            alt="The Globalizers Logo"
            width={160}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="group relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary">
                  {item.label}
                  <span className="material-symbols-outlined text-base transition-transform group-hover:rotate-180">
                    expand_more
                  </span>
                </button>
                {openDropdown === item.label && (
                  <div className="absolute left-0 top-full z-50 min-w-[220px] rounded-xl border border-surface-border bg-surface-container-lowest p-2 shadow-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-4 py-2.5 text-sm text-on-surface-variant transition-colors hover:bg-primary/5 hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className="rounded-lg px-3 py-2 text-sm font-medium text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA Button */}
        <Link
          href="/contact-us"
          className="hidden rounded-lg bg-secondary px-6 py-3 font-[Montserrat] text-sm font-bold text-on-primary transition-all hover:scale-105 hover:shadow-lg active:scale-95 lg:block"
        >
          Book Free Counselling
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-on-surface lg:hidden"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-surface-border bg-surface-container-lowest px-6 py-4 lg:hidden">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div key={item.label} className="border-b border-surface-border py-2">
                <button
                  className="flex w-full items-center justify-between py-2 text-sm font-medium text-on-surface"
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                >
                  {item.label}
                  <span className="material-symbols-outlined text-base">
                    {openDropdown === item.label ? "expand_less" : "expand_more"}
                  </span>
                </button>
                {openDropdown === item.label && (
                  <div className="ml-4 space-y-1 pb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-1.5 text-sm text-on-surface-variant"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className="block border-b border-surface-border py-3 text-sm font-medium text-on-surface"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/contact-us"
            className="mt-4 block rounded-lg bg-secondary py-3 text-center font-[Montserrat] text-sm font-bold text-white"
          >
            Book Free Counselling
          </Link>
        </div>
      )}
    </header>
  )
}

"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import { Container } from "@/components/primitives/Container"
import { Button } from "@/components/primitives/Button"

const NAV_ITEMS = [
  {
    label: "About Us",
    children: [
      { label: "Our Story", href: "/about-globalizers" },
      { label: "Founder — Prashant Hemnani", href: "/founder" },
      { label: "Our Team", href: "/team" },
      { label: "Admissions Results", href: "/results" },
      { label: "Success Stories", href: "/success-stories" },
      { label: "Student Testimonials", href: "/testimonials" },
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
    ],
  },
  { label: "Events", href: "/events-updates" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact-us" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [expandedMobileCategories, setExpandedMobileCategories] = useState<Record<string, boolean>>({
    "About Us": false,
    Services: false,
    Exams: false,
    Destinations: false,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const toggleMobileCategory = (label: string) => {
    setExpandedMobileCategories((prev) => ({
      ...prev,
      [label]: !prev[label],
    }))
  }

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <Container className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image
              src="/global/globalizers-logo.webp"
              alt="The Globalizers Logo"
              width={200}
              height={60}
              className="h-10 w-auto md:h-12"
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
                  <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface hover:text-primary">
                    {item.label}
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>

                  {openDropdown === item.label && (
                    <div className="absolute left-0 top-full z-50 min-w-[220px] rounded-2xl border border-border bg-card p-2 shadow-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-primary/5 hover:text-primary"
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
                  className="rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface hover:text-primary"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact-us">
              <Button variant="secondary" size="sm">
                Book Free Counselling
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="rounded-full p-2.5 text-foreground hover:bg-surface focus:outline-none lg:hidden"
            aria-label="Open navigation menu"
          >
            <Menu className="h-6 w-6 text-primary" />
          </button>
        </Container>
      </header>

      {/* Mobile Drawer using React Portal (bypasses parent backdrop-blur stacking context bug) */}
      {mounted &&
        mobileOpen &&
        createPortal(
          <div className="fixed inset-0 z-[100] lg:hidden">
            {/* Dark Backdrop */}
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-over Panel */}
            <div className="fixed inset-y-0 right-0 z-[101] flex w-full max-w-xs sm:max-w-sm flex-col justify-between bg-card p-6 shadow-2xl transition-transform">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <Link href="/" onClick={() => setMobileOpen(false)}>
                    <Image
                      src="/global/globalizers-logo.webp"
                      alt="The Globalizers Logo"
                      width={160}
                      height={48}
                      className="h-9 w-auto"
                    />
                  </Link>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="rounded-full p-2 text-foreground hover:bg-surface"
                    aria-label="Close navigation menu"
                  >
                    <X className="h-6 w-6 text-primary" />
                  </button>
                </div>

                {/* Collapsible Mobile Navigation Links */}
                <div className="mt-6 space-y-2 overflow-y-auto max-h-[calc(100vh-220px)] pr-1">
                  {NAV_ITEMS.map((item) => (
                    <div key={item.label} className="border-b border-border/50 pb-2">
                      {item.children ? (
                        <div>
                          <button
                            onClick={() => toggleMobileCategory(item.label)}
                            className="flex w-full items-center justify-between py-2 text-base font-semibold text-primary"
                          >
                            <span>{item.label}</span>
                            <ChevronDown
                              className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                                expandedMobileCategories[item.label] ? "rotate-180 text-secondary" : ""
                              }`}
                            />
                          </button>

                          {expandedMobileCategories[item.label] && (
                            <div className="ml-3 mt-1 space-y-1.5 border-l-2 border-secondary/30 pl-3">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="block py-1.5 text-sm font-medium text-muted-foreground hover:text-primary"
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
                          href={item.href!}
                          className="block py-2 text-base font-semibold text-primary hover:text-secondary"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="border-t border-border pt-4 mt-4">
                <Link href="/contact-us" onClick={() => setMobileOpen(false)} className="block w-full">
                  <Button variant="secondary" className="w-full justify-center">
                    Book Free Counselling
                  </Button>
                </Link>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}

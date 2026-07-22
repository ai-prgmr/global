"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MessageCircle, PhoneCall, ArrowUp } from "lucide-react"

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center">
      {/* Scroll To Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-background border border-border text-foreground shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-muted hover:shadow-xl animate-in fade-in zoom-in-90"
          aria-label="Scroll back to top"
          title="Back to Top"
        >
          <ArrowUp className="h-5 w-5 text-primary" />
        </button>
      )}

      {/* WhatsApp */}
      <a
        href="https://wa.me/917314001033"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:bg-emerald-500"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Book Counselling */}
      <Link
        href="/contact-us"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-white shadow-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl"
        aria-label="Book free counselling"
        title="Book Free Counselling"
      >
        <PhoneCall className="h-6 w-6" />
      </Link>
    </div>
  )
}

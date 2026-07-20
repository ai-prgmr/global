import Link from "next/link"
import { MessageCircle, PhoneCall } from "lucide-react"

export function FloatingActions() {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/917314001033"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      {/* Book Counselling */}
      <Link
        href="/contact-us"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-white shadow-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl"
        aria-label="Book free counselling"
      >
        <PhoneCall className="h-6 w-6" />
      </Link>
    </div>
  )
}

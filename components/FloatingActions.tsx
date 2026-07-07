import Link from "next/link"

export function FloatingActions() {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      {/* WhatsApp */}
      <a
        href="https://wa.me/917314001033"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <span className="material-symbols-outlined">chat</span>
      </a>
      {/* Book Counselling */}
      <Link
        href="/contact-us"
        className="animate-pulse-glow flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-white shadow-2xl transition-transform hover:scale-110"
        aria-label="Book counselling"
      >
        <span className="material-symbols-outlined">add</span>
      </Link>
    </div>
  )
}

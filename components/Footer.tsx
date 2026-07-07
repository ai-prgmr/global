import Link from "next/link"

const QUICK_LINKS = [
  { label: "About Us", href: "/about-globalizers" },
  { label: "Services", href: "/services" },
  { label: "Study Abroad", href: "/destinations" },
  { label: "Events & Webinars", href: "/events-updates" },
  { label: "Blog", href: "/blog" },
  { label: "Franchise", href: "/franchise" },
  { label: "Contact Us", href: "/contact-us" },
]

const EXAM_LINKS = [
  { label: "GRE Prep", href: "/exams/gre" },
  { label: "IELTS Prep", href: "/exams/ielts" },
  { label: "GMAT Prep", href: "/exams/gmat" },
  { label: "TOEFL Prep", href: "/exams/toefl" },
  { label: "SAT Prep", href: "/exams/sat" },
  { label: "PTE Prep", href: "/exams/pte" },
]

const DESTINATION_LINKS = [
  { label: "USA", href: "/destinations/usa" },
  { label: "UK", href: "/destinations/uk" },
  { label: "Canada", href: "/destinations/canada" },
  { label: "Australia", href: "/destinations/australia" },
]

export function Footer() {
  return (
    <footer className="bg-tertiary pt-20 text-white">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 pb-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand Column */}
        <div className="space-y-6">
          <h3 className="font-[Montserrat] text-2xl font-bold text-surface-container-lowest">
            The Globalizers
          </h3>
          <p className="text-sm leading-relaxed text-on-tertiary-container">
            Empowering global citizens through excellence in international education
            and expert test preparation since 2007.
          </p>
          <div className="flex gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-on-tertiary-container transition-colors hover:bg-secondary"
              aria-label="LinkedIn"
            >
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-on-tertiary-container transition-colors hover:bg-secondary"
              aria-label="Instagram"
            >
              <span className="material-symbols-outlined text-sm">group</span>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-on-tertiary-container transition-colors hover:bg-secondary"
              aria-label="YouTube"
            >
              <span className="material-symbols-outlined text-sm">
                play_circle
              </span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-6 font-[Inter] text-xs font-semibold uppercase tracking-widest text-on-tertiary-container">
            Quick Links
          </h4>
          <ul className="space-y-4 text-sm text-on-tertiary-container">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-success-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Exam Prep */}
        <div>
          <h4 className="mb-6 font-[Inter] text-xs font-semibold uppercase tracking-widest text-on-tertiary-container">
            Exam Prep
          </h4>
          <ul className="space-y-4 text-sm text-on-tertiary-container">
            {EXAM_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-success-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Offices & Destinations */}
        <div>
          <h4 className="mb-6 font-[Inter] text-xs font-semibold uppercase tracking-widest text-on-tertiary-container">
            Our Offices
          </h4>
          <div className="space-y-4 text-sm text-on-tertiary-container">
            <p className="flex items-start gap-2">
              <span className="material-symbols-outlined text-secondary">
                location_on
              </span>
              Indore (HQ), Noida, Jaipur, Navi Mumbai
            </p>
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">
                call
              </span>
              +91 731 4001033
            </p>
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">
                mail
              </span>
              info@theglobalizers.com
            </p>
          </div>

          <h4 className="mb-4 mt-8 font-[Inter] text-xs font-semibold uppercase tracking-widest text-on-tertiary-container">
            Top Destinations
          </h4>
          <ul className="space-y-3 text-sm text-on-tertiary-container">
            {DESTINATION_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-success-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-8 text-center text-sm text-on-tertiary-container">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <span>© 2026 The Globalizers Edutrain Pvt. Ltd. All Rights Reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-success-gold">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-success-gold">
              Terms & Conditions
            </Link>
            <Link href="/refund-policy" className="hover:text-success-gold">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

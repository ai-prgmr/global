import Link from "next/link"
import Image from "next/image"
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

const SERVICE_LINKS = [
  { label: "Study Abroad Counselling", href: "/services/counselling" },
  { label: "Test Preparation", href: "/services/test-preparation" },
  { label: "Visa Guidance", href: "/services/visa-guidance" },
  { label: "Scholarship Assistance", href: "/services/scholarships" },
]

const LOCATIONS = [
  {
    city: "Indore (HQ)",
    address: "123 MG Road, Scheme No. 54, Indore, MP 452001",
    phone: "+91 731 4001033",
  },
  {
    city: "Noida",
    address: "B-45, Sector 18, Noida, UP 201301",
    phone: "+91 120 4001033",
  },
  {
    city: "Jaipur",
    address: "C-15, C-Scheme, Jaipur, Rajasthan 302001",
    phone: "+91 141 4001033",
  },
  {
    city: "Navi Mumbai",
    address: "Plot 12, Vashi, Navi Mumbai, MH 400703",
    phone: "+91 22 4001033",
  },
]

export function Footer() {
  return (
    <footer className="bg-tertiary pt-20 text-white">
      {/* 5-Column Grid */}
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 pb-12 md:grid-cols-2 lg:grid-cols-5">
        {/* Column 1: Brand */}
        <div className="space-y-6">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image
              src="/globalizers-logo.webp"
              alt="The Globalizers Logo"
              width={240}
              height={60}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <h3 className="text-sm leading-relaxed text-on-tertiary-container">
            Empowering global citizens through excellence in international education
            and expert test preparation since 2007.
          </h3>
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

        {/* Column 2: Quick Links */}
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

        {/* Column 3: Services */}
        <div>
          <h4 className="mb-6 font-[Inter] text-xs font-semibold uppercase tracking-widest text-on-tertiary-container">
            Services
          </h4>
          <ul className="space-y-4 text-sm text-on-tertiary-container">
            {SERVICE_LINKS.map((link) => (
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

        {/* Column 4: Exam Prep */}
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

        {/* Column 5: Destinations & Enquiries */}
        <div>
          <h4 className="mb-6 font-[Inter] text-xs font-semibold uppercase tracking-widest text-on-tertiary-container">
            Top Destinations
          </h4>
          <ul className="space-y-4 text-sm text-on-tertiary-container">
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

          <h4 className="mb-4 mt-8 font-[Inter] text-xs font-semibold uppercase tracking-widest text-on-tertiary-container">
            General Enquiries
          </h4>
          <div className="space-y-3 text-sm text-on-tertiary-container">
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-base">
                call
              </span>
              +91 731 4001033
            </p>
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-base">
                mail
              </span>
              info@theglobalizers.com
            </p>
          </div>
        </div>
      </div>

      {/* Separate Row: 4 Locations */}
      <div className="mx-auto max-w-[1280px] border-t border-white/10 px-6 py-12">
        <h4 className="mb-8 font-[Inter] text-xs font-semibold uppercase tracking-widest text-on-tertiary-container">
          Our Office Locations
        </h4>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {LOCATIONS.map((loc) => (
            <div
              key={loc.city}
              className="space-y-2 rounded-xl border border-white/5 bg-white/[0.02] p-5 text-sm transition-all hover:bg-white/[0.04]"
            >
              <h5 className="font-[Montserrat] text-base font-bold text-white">
                {loc.city}
              </h5>
              <p className="flex items-start gap-2 text-xs leading-relaxed text-on-tertiary-container">
                <span className="material-symbols-outlined mt-0.5 shrink-0 text-sm text-secondary">
                  location_on
                </span>
                <span>{loc.address}</span>
              </p>
              <p className="flex items-center gap-2 text-xs text-on-tertiary-container">
                <span className="material-symbols-outlined shrink-0 text-sm text-secondary">
                  call
                </span>
                <span>{loc.phone}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-8 text-center text-sm text-on-tertiary-container">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <span>
            © 2026 The Globalizers Edutrain Pvt. Ltd. All Rights Reserved.
          </span>
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

import Link from "next/link"
import Image from "next/image"
import { MessageSquare, Phone, Mail, MapPin } from "lucide-react"
import { Container } from "@/components/primitives/Container"

const QUICK_LINKS = [
  { label: "About Us", href: "/about-globalizers" },
  { label: "Services", href: "/services" },
  { label: "Study Abroad", href: "/destinations" },
  { label: "Events & Webinars", href: "/events-updates" },
  { label: "Learning Center", href: "/learning-center" },
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
      <Container>
        {/* 5-Column Navigation Grid */}
        <div className="grid grid-cols-1 gap-12 pb-16 md:grid-cols-2 lg:grid-cols-5 border-b border-white/10">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/global/globalizers-logo.webp"
                alt="The Globalizers Logo"
                width={180}
                height={54}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/70">
              Empowering global citizens through excellence in international education
              and expert test preparation since 2007.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-secondary hover:border-secondary"
                aria-label="LinkedIn"
              >
                <MessageSquare className="h-4 w-4 text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-secondary hover:border-secondary"
                aria-label="Instagram"
              >
                <MessageSquare className="h-4 w-4 text-white" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-secondary hover:border-secondary"
                aria-label="YouTube"
              >
                <MessageSquare className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="mb-6 font-heading text-xs font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="mb-6 font-heading text-xs font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Exam Prep */}
          <div>
            <h4 className="mb-6 font-heading text-xs font-semibold uppercase tracking-wider text-white">
              Exam Prep
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              {EXAM_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Destinations & Contact */}
          <div>
            <h4 className="mb-6 font-heading text-xs font-semibold uppercase tracking-wider text-white">
              Top Destinations
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              {DESTINATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="mb-3 mt-8 font-heading text-xs font-semibold uppercase tracking-wider text-white">
              General Enquiries
            </h4>
            <div className="space-y-2 text-sm text-white/70">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary-foreground shrink-0" />
                +91 731 4001033
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary-foreground shrink-0" />
                info@theglobalizers.com
              </p>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="py-12 border-b border-white/10">
          <h4 className="mb-6 font-heading text-xs font-semibold uppercase tracking-wider text-white">
            Our Office Locations
          </h4>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.city}
                className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm"
              >
                <h5 className="font-heading text-base font-bold text-white">{loc.city}</h5>
                <p className="flex items-start gap-2 text-xs leading-relaxed text-white/70">
                  <MapPin className="h-4 w-4 text-secondary-foreground shrink-0 mt-0.5" />
                  <span>{loc.address}</span>
                </p>
                <p className="flex items-center gap-2 text-xs text-white/70">
                  <Phone className="h-3.5 w-3.5 text-secondary-foreground shrink-0" />
                  <span>{loc.phone}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-white/60 md:flex-row">
          <span>
            © 2026 The Globalizers Edutrain Pvt. Ltd. All Rights Reserved.
          </span>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

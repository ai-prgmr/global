import type { Metadata } from "next"
import { MapPin, Phone, Clock, Mail, MessageCircle } from "lucide-react"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { Card } from "@/components/primitives/Card"
import { ContactForm } from "@/components/primitives/ContactForm"
import { CTABanner } from "@/components/CTABanner"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with The Globalizers. Visit our offices in Indore, Noida, Jaipur, or Navi Mumbai, or send us a message.",
}

const BRANCHES = [
  { city: "Indore", tag: "Headquarters", address: "123 MG Road, Scheme No. 54, Indore, MP 452001", phone: "+91 731 4001033", hours: "Mon–Sat: 10 AM – 7 PM" },
  { city: "Noida", tag: "Branch", address: "B-45, Sector 18, Noida, UP 201301", phone: "+91 120 4001033", hours: "Mon–Sat: 10 AM – 7 PM" },
  { city: "Jaipur", tag: "Branch", address: "C-15, C-Scheme, Jaipur, Rajasthan 302001", phone: "+91 141 4001033", hours: "Mon–Sat: 10 AM – 7 PM" },
  { city: "Navi Mumbai", tag: "Branch", address: "Plot 12, Vashi, Navi Mumbai, MH 400703", phone: "+91 22 4001033", hours: "Mon–Sat: 10 AM – 7 PM" },
]

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://theglobalizers.com/global/#organization",
        "name": "The Globalizers",
        "url": "https://theglobalizers.com/global",
        "logo": "https://theglobalizers.com/logo.png"
      },
      {
        "@type": "LocalBusiness",
        "name": "The Globalizers - Indore (Headquarters)",
        "parentOrganization": {
          "@type": "EducationalOrganization",
          "name": "The Globalizers"
        },
        "image": "https://theglobalizers.com/logo.png",
        "telephone": "+91 731 4001033",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 MG Road, Scheme No. 54",
          "addressLocality": "Indore",
          "addressRegion": "Madhya Pradesh",
          "postalCode": "452001",
          "addressCountry": "IN"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "10:00",
          "closes": "19:00"
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* Hero */}
      <Section variant="default" className="py-20 md:py-28 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-72 w-96 rounded-full bg-gradient-to-tr from-sky-200/40 via-violet-200/30 to-pink-200/40 blur-3xl opacity-60 pointer-events-none" />
        <Container>
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-primary">
            Connect With Us
          </span>
          <h1 className="mb-4 font-heading text-4xl font-bold md:text-5xl lg:text-6xl text-primary">
            Let&apos;s Talk About Your Future
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Visit us, call us, or fill out the form below. We&apos;re here to help you take the first step towards your global education journey.
          </p>
        </Container>
      </Section>

      {/* Branch Cards */}
      <Section variant="sky">
        <Container>
          <SectionHeader
            eyebrow="Our Locations"
            title="Visit Our Regional Counseling Centers"
            description="Drop by any of our offices for in-person consultation and profile assessment."
            align="left"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BRANCHES.map((b) => (
              <Card key={b.city} padding="sm" variant="sky" className="flex flex-col justify-between">
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="font-heading text-lg font-bold text-primary flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-secondary shrink-0" />
                      {b.city}
                    </h3>
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                      {b.tag}
                    </span>
                  </div>
                  <p className="mb-4 text-xs text-muted-foreground leading-relaxed">
                    {b.address}
                  </p>
                </div>
                <div className="space-y-1.5 text-xs font-medium border-t border-border pt-3">
                  <p className="flex items-center gap-2 text-primary">
                    <Phone className="h-3.5 w-3.5 text-secondary shrink-0" />
                    {b.phone}
                  </p>
                  <p className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-3.5 w-3.5 text-secondary shrink-0" />
                    {b.hours}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact Form + Info */}
      <Section variant="lavender">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
          <div>
            <SectionHeader
              eyebrow="Get In Touch"
              title="Send Us a Message"
              description="Fill out the form and our admissions counseling team will get back to you within 24 hours."
              align="left"
            />
            <ContactForm />
          </div>

          <div className="space-y-8 lg:mt-24">
            {/* Quick Connect Box */}
            <Card padding="default" className="bg-primary text-white border-none space-y-4 shadow-xl">
              <h3 className="font-heading text-xl font-bold text-white">Direct Helplines</h3>
              <div className="space-y-3 text-sm text-white/90">
                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-secondary-foreground shrink-0" />
                  +91 731 4001033
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-secondary-foreground shrink-0" />
                  info@theglobalizers.com
                </p>
                <a
                  href="https://wa.me/917314001033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-white hover:text-secondary-foreground transition-colors pt-2 font-bold"
                >
                  <MessageCircle className="h-5 w-5 text-emerald-400" />
                  Chat on WhatsApp
                </a>
              </div>
            </Card>

            {/* Office Hours */}
            <Card padding="default" className="space-y-4">
              <h3 className="font-heading text-xl font-bold text-primary">Office Working Hours</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex justify-between py-1 border-b border-border">
                  <span>Monday – Friday</span>
                  <span className="font-semibold text-primary">10:00 AM – 7:00 PM</span>
                </p>
                <p className="flex justify-between py-1 border-b border-border">
                  <span>Saturday</span>
                  <span className="font-semibold text-primary">10:00 AM – 5:00 PM</span>
                </p>
                <p className="flex justify-between py-1">
                  <span>Sunday</span>
                  <span className="font-semibold text-secondary">Closed</span>
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <CTABanner />
    </>
  )
}

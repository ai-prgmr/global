import type { Metadata } from "next"

export const metadata: Metadata = { title: "Contact Us", description: "Get in touch with The Globalizers. Visit our offices in Indore, Noida, Jaipur, or Navi Mumbai, or send us a message." }

const BRANCHES = [
  { city: "Indore", tag: "Headquarters", address: "123 MG Road, Scheme No. 54, Indore, MP 452001", phone: "+91 731 4001033", hours: "Mon–Sat: 10 AM – 7 PM" },
  { city: "Noida", tag: "Branch", address: "B-45, Sector 18, Noida, UP 201301", phone: "+91 120 4001033", hours: "Mon–Sat: 10 AM – 7 PM" },
  { city: "Jaipur", tag: "Branch", address: "C-15, C-Scheme, Jaipur, Rajasthan 302001", phone: "+91 141 4001033", hours: "Mon–Sat: 10 AM – 7 PM" },
  { city: "Navi Mumbai", tag: "Branch", address: "Plot 12, Vashi, Navi Mumbai, MH 400703", phone: "+91 22 4001033", hours: "Mon–Sat: 10 AM – 7 PM" },
]

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary py-24 text-white">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <h1 className="mb-4 font-[Montserrat] text-4xl font-bold md:text-5xl">Let&apos;s Talk About Your Future</h1>
          <p className="mx-auto max-w-2xl text-lg text-white/70">Visit us, call us, or fill out the form below. We&apos;re here to help you take the first step towards your global education journey.</p>
        </div>
      </section>

      {/* Branch Cards */}
      <section className="mx-auto max-w-[1280px] px-6 py-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {BRANCHES.map((b) => (
            <div key={b.city} className="rounded-xl border border-surface-border bg-white p-6 transition-all hover:shadow-lg">
              <div className="mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">location_on</span>
                <h3 className="font-[Montserrat] text-lg font-bold text-primary">{b.city}</h3>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">{b.tag}</span>
              </div>
              <p className="mb-3 text-sm text-on-surface-variant">{b.address}</p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2 text-primary"><span className="material-symbols-outlined text-sm">call</span>{b.phone}</p>
                <p className="flex items-center gap-2 text-on-surface-variant"><span className="material-symbols-outlined text-sm">schedule</span>{b.hours}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-surface-container py-20">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 lg:grid-cols-2">
          <div>
            <h2 className="mb-2 font-[Montserrat] text-3xl font-semibold text-primary">Send Us a Message</h2>
            <p className="mb-8 text-on-surface-variant">Fill out the form and our team will get back to you within 24 hours.</p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input type="text" placeholder="First Name" className="rounded-lg border border-surface-border bg-white px-4 py-3 text-sm outline-none focus:border-primary" />
                <input type="text" placeholder="Last Name" className="rounded-lg border border-surface-border bg-white px-4 py-3 text-sm outline-none focus:border-primary" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full rounded-lg border border-surface-border bg-white px-4 py-3 text-sm outline-none focus:border-primary" />
              <input type="tel" placeholder="Phone Number" className="w-full rounded-lg border border-surface-border bg-white px-4 py-3 text-sm outline-none focus:border-primary" />
              <select className="w-full rounded-lg border border-surface-border bg-white px-4 py-3 text-sm text-on-surface-variant outline-none focus:border-primary">
                <option>Select a Service</option>
                <option>Study Abroad Counselling</option>
                <option>GRE Preparation</option>
                <option>IELTS/TOEFL Preparation</option>
                <option>Visa Guidance</option>
                <option>Scholarship Assistance</option>
                <option>Franchise Enquiry</option>
              </select>
              <textarea placeholder="Your Message" rows={4} className="w-full rounded-lg border border-surface-border bg-white px-4 py-3 text-sm outline-none focus:border-primary" />
              <button type="submit" className="w-full rounded-lg bg-secondary py-4 font-[Montserrat] font-bold text-white transition-all hover:scale-[1.02]">Send Message</button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="rounded-xl bg-tertiary p-8 text-white">
              <h3 className="mb-4 font-[Montserrat] text-xl font-bold">Quick Connect</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary">call</span>+91 731 4001033</p>
                <p className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary">mail</span>info@theglobalizers.com</p>
                <a href="https://wa.me/917314001033" className="flex items-center gap-3 text-green-400 hover:underline"><span className="material-symbols-outlined">chat</span>Chat on WhatsApp</a>
              </div>
            </div>
            <div className="rounded-xl border border-surface-border bg-white p-8">
              <h3 className="mb-4 font-[Montserrat] text-xl font-bold text-primary">Office Hours</h3>
              <div className="space-y-2 text-sm text-on-surface-variant">
                <p className="flex justify-between"><span>Monday – Friday</span><span className="font-semibold text-primary">10:00 AM – 7:00 PM</span></p>
                <p className="flex justify-between"><span>Saturday</span><span className="font-semibold text-primary">10:00 AM – 5:00 PM</span></p>
                <p className="flex justify-between"><span>Sunday</span><span className="font-semibold text-secondary">Closed</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

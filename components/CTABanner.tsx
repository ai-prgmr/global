import Link from "next/link"

interface CTABannerProps {
  title?: string
  subtitle?: string
  buttonText?: string
  buttonHref?: string
}

export function CTABanner({
  title = "Ready to Start Your Global Journey?",
  subtitle = "Book a free counselling session with our expert advisors and take the first step towards your dream university.",
  buttonText = "Book Free Counselling",
  buttonHref = "/contact-us",
}: CTABannerProps) {
  return (
    <section className="bg-primary py-20">
      <div className="mx-auto max-w-[1280px] px-6 text-center">
        <h2 className="mb-4 font-[Montserrat] text-3xl font-bold text-white md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70">{subtitle}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={buttonHref}
            className="rounded-lg bg-secondary px-8 py-4 font-[Montserrat] font-bold text-white transition-all hover:scale-105 hover:shadow-lg"
          >
            {buttonText}
          </Link>
          <a
            href="https://wa.me/917314001033"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 font-[Montserrat] font-bold text-white transition-all hover:bg-white/10"
          >
            <span className="material-symbols-outlined">chat</span>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

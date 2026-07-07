import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div className="space-y-8">
          <span className="inline-block rounded-full bg-primary-fixed px-4 py-1.5 font-[Inter] text-xs font-semibold uppercase tracking-wider text-on-primary-fixed">
            India&apos;s Leading Study Abroad Experts
          </span>
          <h1 className="font-[Montserrat] text-4xl font-bold leading-tight text-primary md:text-5xl lg:text-[56px] lg:leading-[1.1] lg:tracking-[-0.02em]">
            Changing Lives, <br />
            One Student <br />
            at a Time
          </h1>
          <p className="max-w-lg font-[Inter] text-lg leading-relaxed text-on-surface-variant">
            Empowering ambitious minds with 19 years of institutional reliability
            and expert-led training to secure admits in the world&apos;s most
            prestigious universities.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/contact-us"
              className="rounded-lg bg-secondary px-8 py-4 font-[Montserrat] font-bold text-white transition-all hover:shadow-lg"
            >
              Book Free Counselling
            </Link>
            <Link
              href="/gre"
              className="rounded-lg border-2 border-primary px-8 py-4 font-[Montserrat] font-bold text-primary transition-all hover:bg-primary/5"
            >
              Take a Free Mock Test
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/global/student-cape-diploma.png"
              alt="student with a diploma"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Floating stat card */}
          <div className="absolute -bottom-8 -left-8 flex items-center gap-4 rounded-xl border border-surface-border bg-white p-6 shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success-gold text-white">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            </div>
            <div>
              <div className="font-[Montserrat] text-2xl font-bold text-primary">
                6,000+
              </div>
              <div className="text-sm text-on-surface-variant">
                Students Mentored
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative background */}
      <div className="absolute right-0 top-0 h-full w-1/3 -skew-x-12 translate-x-1/2 bg-primary/5" />
    </section>
  )
}

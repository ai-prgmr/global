import Link from "next/link"

const DESTINATIONS = [
  { flag: "🇺🇸", name: "USA", href: "/destinations/usa" },
  { flag: "🇬🇧", name: "UK", href: "/destinations/uk" },
  { flag: "🇨🇦", name: "Canada", href: "/destinations/canada" },
  { flag: "🇦🇺", name: "Australia", href: "/destinations/australia" },
  { flag: "🇩🇪", name: "Germany", href: "/destinations/germany" },
  { flag: "🇮🇪", name: "Ireland", href: "/destinations/ireland" },
]

export function DestinationsGrid() {
  return (
    <section className="bg-surface-container py-20">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mb-12 flex flex-col items-end justify-between gap-4 md:flex-row">
          <div className="space-y-2">
            <h2 className="font-[Montserrat] text-3xl font-semibold text-primary">
              Popular Global Destinations
            </h2>
            <p className="text-on-surface-variant">
              We bridge your gap to the world&apos;s most sought-after education
              hubs.
            </p>
          </div>
          <Link
            href="/destinations"
            className="rounded-lg bg-primary px-6 py-3 font-[Montserrat] font-bold text-white"
          >
            View All 12+ Countries
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {DESTINATIONS.map((dest) => (
            <Link
              key={dest.name}
              href={dest.href}
              className="group cursor-pointer rounded-xl border border-surface-border bg-white p-4 text-center shadow-sm transition-transform hover:-translate-y-2"
            >
              <div className="mb-3 text-4xl grayscale transition-all group-hover:grayscale-0">
                {dest.flag}
              </div>
              <div className="font-[Montserrat] font-bold text-primary">
                {dest.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

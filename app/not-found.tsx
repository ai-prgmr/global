import Link from "next/link"
import { Compass, GraduationCap, Globe, PhoneCall, Home } from "lucide-react"
import { Container } from "@/components/primitives/Container"
import { Button } from "@/components/primitives/Button"

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-16 md:py-24">
      <Container className="max-w-3xl text-center space-y-8">
        {/* Decorative Badge & Illustration */}
        <div className="relative inline-block">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-48 w-64 rounded-full bg-linear-to-tr from-sky-200/50 via-violet-200/40 to-pink-200/50 blur-3xl opacity-70" />
          <span className="font-heading text-8xl font-black tracking-tight text-primary/20 md:text-9xl select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <Compass className="h-16 w-16 text-secondary animate-pulse" />
          </div>
        </div>

        {/* Heading & Text */}
        <div className="space-y-3">
          <h1 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
            Page Not Found
          </h1>
          <p className="text-muted-foreground text-base max-w-lg mx-auto leading-relaxed">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable. Let&apos;s get you back on track with your study abroad goals!
          </p>
        </div>

        {/* Action Button */}
        <div>
          <Link href="/">
            <Button variant="secondary" size="lg" className="gap-2">
              <Home className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Popular Destination Links */}
        <div className="pt-8 border-t border-border/60">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Popular Navigation Links
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/exams"
              className="flex items-center gap-3 p-4 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all group text-left"
            >
              <div className="rounded-xl bg-primary/10 p-2.5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-heading text-sm font-bold text-primary">Exam Prep</h4>
                <p className="text-xs text-muted-foreground">GRE, GMAT, IELTS</p>
              </div>
            </Link>

            <Link
              href="/destinations"
              className="flex items-center gap-3 p-4 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all group text-left"
            >
              <div className="rounded-xl bg-secondary/10 p-2.5 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-heading text-sm font-bold text-primary">Destinations</h4>
                <p className="text-xs text-muted-foreground">USA, UK, Canada</p>
              </div>
            </Link>

            <Link
              href="/contact-us"
              className="flex items-center gap-3 p-4 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all group text-left"
            >
              <div className="rounded-xl bg-emerald-500/10 p-2.5 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <PhoneCall className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-heading text-sm font-bold text-primary">Free Counseling</h4>
                <p className="text-xs text-muted-foreground">Speak to Experts</p>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

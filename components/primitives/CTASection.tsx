import * as React from "react"
import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { Button } from "@/components/primitives/Button"
import { cn } from "@/lib/utils"

export interface CTASectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string
  subtitle?: string
  primaryCtaText?: string
  primaryCtaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  showWhatsApp?: boolean
}

export function CTASection({
  title = "Ready to Start Your Global Journey?",
  subtitle = "Book a free counselling session with our expert advisors and take the first step towards your dream university.",
  primaryCtaText = "Book Free Counselling",
  primaryCtaHref = "/contact-us",
  secondaryCtaText,
  secondaryCtaHref,
  showWhatsApp = true,
  className,
  ...props
}: CTASectionProps) {
  return (
    <Section variant="gradient" className={cn("py-20 md:py-24 border-t border-b border-border/40", className)} {...props}>
      <Container className="text-center">
        <h2 className="mb-4 font-heading text-3xl font-bold text-primary md:text-4xl lg:text-5xl max-w-3xl mx-auto leading-tight">
          {title}
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href={primaryCtaHref}>
            <Button variant="secondary" size="default">
              {primaryCtaText}
            </Button>
          </Link>

          {secondaryCtaHref && secondaryCtaText && (
            <Link href={secondaryCtaHref}>
              <Button variant="outline" size="default">
                {secondaryCtaText}
              </Button>
            </Link>
          )}

          {showWhatsApp && (
            <a
              href="https://wa.me/917314001033"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="default" className="gap-2">
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </a>
          )}
        </div>
      </Container>
    </Section>
  )
}

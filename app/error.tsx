"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertTriangle, RefreshCw, PhoneCall, Home } from "lucide-react"
import { Container } from "@/components/primitives/Container"
import { Button } from "@/components/primitives/Button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to monitoring service if needed
    console.error("Application Error Captured:", error)
  }, [error])

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 md:py-24">
      <Container className="max-w-2xl text-center space-y-6">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10 text-destructive">
          <AlertTriangle className="h-10 w-10" />
        </div>

        <div className="space-y-2">
          <h1 className="font-heading text-2xl md:text-3xl font-bold text-primary">
            Something Went Wrong
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto leading-relaxed">
            We encountered an unexpected issue while rendering this page. Our team has been notified.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button
            variant="secondary"
            onClick={() => reset()}
            className="gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </Button>
          <Link href="/">
            <Button variant="outline" className="gap-2">
              <Home className="h-4 w-4" />
              Go to Homepage
            </Button>
          </Link>
        </div>

        <div className="pt-8 border-t border-border text-xs text-muted-foreground flex items-center justify-center gap-2">
          <PhoneCall className="h-3.5 w-3.5 text-secondary" />
          <span>Need urgent support? Call us at <strong className="text-primary">+91 731 4001033</strong></span>
        </div>
      </Container>
    </div>
  )
}

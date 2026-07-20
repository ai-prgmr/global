"use client"

import * as React from "react"
import { useState } from "react"
import { Button } from "@/components/primitives/Button"
import { cn } from "@/lib/utils"

export interface ContactFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  onSubmitSuccess?: () => void
}

export function ContactForm({ className, onSubmitSuccess, ...props }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    if (onSubmitSuccess) onSubmitSuccess()
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-border bg-card p-8 text-center space-y-4 shadow-sm">
        <h3 className="font-heading text-2xl font-bold text-primary">Thank You!</h3>
        <p className="text-muted-foreground text-base">
          Your message has been received. Our expert counselling team will contact you within 24 hours.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setSubmitted(false)}
        >
          Submit Another Request
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("space-y-4 rounded-3xl border border-border bg-card p-6 md:p-8 shadow-xs", className)}
      {...props}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="firstName" className="block text-xs font-semibold text-foreground uppercase tracking-wider">
            First Name <span className="text-secondary">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            placeholder="John"
            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="lastName" className="block text-xs font-semibold text-foreground uppercase tracking-wider">
            Last Name <span className="text-secondary">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            placeholder="Doe"
            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="email" className="block text-xs font-semibold text-foreground uppercase tracking-wider">
          Email Address <span className="text-secondary">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="john.doe@example.com"
          className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="phone" className="block text-xs font-semibold text-foreground uppercase tracking-wider">
          Phone Number <span className="text-secondary">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="+91 98765 43210"
          className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="service" className="block text-xs font-semibold text-foreground uppercase tracking-wider">
          Preferred Service
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
        >
          <option value="counselling">Study Abroad Counselling</option>
          <option value="gre">GRE Preparation</option>
          <option value="gmat">GMAT Preparation</option>
          <option value="ielts">IELTS / TOEFL Preparation</option>
          <option value="visa">Visa Guidance</option>
          <option value="scholarship">Scholarship Assistance</option>
          <option value="franchise">Franchise Enquiry</option>
        </select>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-xs font-semibold text-foreground uppercase tracking-wider">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your target countries, score, or requirements..."
          className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <Button type="submit" variant="secondary" className="w-full justify-center mt-2">
        Send Message
      </Button>
    </form>
  )
}

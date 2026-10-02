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
  const [spamError, setSpamError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrors({})

    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string

    const newErrors: { email?: string; phone?: string } = {}

    // Email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address."
    }

    // Phone validation (at least 8 digits)
    const cleanedPhone = phone ? phone.replace(/\D/g, "") : ""
    if (!cleanedPhone || cleanedPhone.length < 8) {
      newErrors.phone = "Please enter a valid contact phone number."
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setLoading(true)

    const webhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL;
    const payload = {
      profile: {
        name: `${formData.get("firstName")} ${formData.get("lastName")}`.trim(),
        email: email,
        phone: phone,
      },
      summary: `Service: ${formData.get("service")}\nMessage: ${formData.get("message")}`,
      leadScore: 0,
      counsellorNotes: ["Source: Contact Us Page Form"],
      createdAt: new Date().toISOString(),
      status: "READY_FOR_COUNSELLOR",
      source: "CONTACT_FORM",
    };

    if (webhookUrl) {
      try {
        const res = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        // Parse the response to check for the 5-minute spam cooldown error
        const responseData = await res.json();
        if (responseData.status === "error") {
          setLoading(false);
          setSpamError(true);
          return;
        }
      } catch (err) {
        console.warn("Webhook sync notice:", err);
      }
    } else {
      console.log("ℹ️ [Contact Form Saved Locally]:", payload);
    }

    setLoading(false)
    setSubmitted(true)
    if (onSubmitSuccess) onSubmitSuccess()
  }

  if (spamError) {
    return (
      <div className="rounded-3xl border border-destructive/20 bg-destructive/5 p-6 md:p-8 text-center space-y-5 shadow-sm animate-in fade-in zoom-in-95 duration-200">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10 text-destructive">
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="space-y-2">
          <h3 className="font-heading text-2xl font-bold text-foreground">Please Wait</h3>
          <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto leading-relaxed">
            We have recently received a request from this email. To prevent spam, please wait <strong className="text-foreground">5 minutes</strong> before submitting again.
          </p>
        </div>

        <div className="bg-background rounded-2xl p-4 md:p-5 border border-border text-left mt-4 shadow-xs">
          <p className="text-sm font-semibold text-foreground mb-3 text-center">Need immediate assistance? Call us directly:</p>
          <div className="grid grid-cols-1 gap-3 text-sm">
            <a href="tel:+917314001033" className="flex items-center gap-2 p-2 hover:bg-muted/50 rounded-lg transition-colors group">
              <span className="h-2 w-2 rounded-full bg-primary hrink-0"></span>
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">Indore (HQ):</span>
              <span className="text-muted-foreground ml-auto">+91 7024252910</span>
            </a>
            <a href="tel:+911414001033" className="flex items-center gap-2 p-2 hover:bg-muted/50 rounded-lg transition-colors group">
              <span className="h-2 w-2 rounded-full bg-primary shrink-0"></span>
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">Jaipur:</span>
              <span className="text-muted-foreground ml-auto">+91 8600180075</span>
            </a>
          </div>
        </div>

        <div className="pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSpamError(false)}
            className="w-full sm:w-auto"
          >
            Try Again
          </Button>
        </div>
      </div>
    )
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-border bg-card p-8 text-center space-y-4 shadow-sm animate-in fade-in zoom-in-95 duration-200">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl font-bold text-primary">Thank You!</h3>
        <p className="text-muted-foreground text-base max-w-md mx-auto leading-relaxed">
          Your message has been successfully received. Our expert counselling team will get in touch with you within 24 hours.
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
          className={cn(
            "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20",
            errors.email && "border-destructive focus:border-destructive focus:ring-destructive/20"
          )}
        />
        {errors.email && (
          <p className="text-xs text-destructive mt-1 font-medium">{errors.email}</p>
        )}
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
          className={cn(
            "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20",
            errors.phone && "border-destructive focus:border-destructive focus:ring-destructive/20"
          )}
        />
        {errors.phone && (
          <p className="text-xs text-destructive mt-1 font-medium">{errors.phone}</p>
        )}
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
          <option value="sat">SAT Preparation</option>
          <option value="gmat">GMAT Preparation</option>
          <option value="ielts">IELTS / TOEFL / Duolingo Preparation</option>
          <option value="visa">Visa Guidance</option>
          <option value="scholarship">Scholarship Assistance</option>
          <option value="post-admission">Post Admission Guidance</option>
          <option value="franchise">Franchise Enquiry</option>
          <option value="career">Career Counselling</option>
          <option value="loans">Loans</option>
          <option value="accomodation">Accomodation</option>
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

      <Button type="submit" variant="secondary" disabled={loading} className="w-full justify-center mt-2">
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Submitting...
          </span>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  )
}

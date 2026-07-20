"use client"

import * as React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export interface FAQItem {
  q: string
  a: string
}

export interface FAQProps extends React.HTMLAttributes<HTMLDivElement> {
  items: FAQItem[]
}

export function FAQ({ items, className, ...props }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={cn("mx-auto max-w-3xl space-y-4", className)} {...props}>
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-border bg-card transition-all"
          >
            <button
              onClick={() => toggle(i)}
              className="flex w-full cursor-pointer items-center justify-between p-6 text-left font-heading font-semibold text-primary focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
              aria-expanded={isOpen}
            >
              <span className="text-base md:text-lg pr-4">{item.q}</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-primary transition-transform duration-200",
                  isOpen && "rotate-180 text-secondary"
                )}
              />
            </button>
            {isOpen && (
              <div className="border-t border-border px-6 pb-6 pt-4 text-sm text-muted-foreground leading-relaxed md:text-base">
                {item.a}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

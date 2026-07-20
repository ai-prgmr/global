import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  light?: boolean
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
  ...props
}: SectionHeaderProps) {
  const isCentered = align === "center"

  return (
    <div
      className={cn(
        "mb-16 space-y-4",
        isCentered ? "text-center mx-auto max-w-3xl" : "text-left max-w-3xl",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-block font-sans text-xs font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full",
            light ? "text-white bg-white/15 backdrop-blur-xs" : "bg-primary/10 text-primary"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl",
          light ? "text-white" : "text-primary"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-base leading-relaxed md:text-lg",
            isCentered && "mx-auto",
            light ? "text-white/80" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}

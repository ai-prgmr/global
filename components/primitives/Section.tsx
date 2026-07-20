import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "surface" | "dark" | "primary"
  children: React.ReactNode
}

export function Section({
  variant = "default",
  className,
  children,
  ...props
}: SectionProps) {
  const variantStyles = {
    default: "bg-background text-foreground",
    surface: "bg-surface text-foreground",
    dark: "bg-tertiary text-white",
    primary: "bg-primary text-white",
  }

  return (
    <section
      className={cn(
        "relative py-20 md:py-24 lg:py-32 overflow-hidden",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}

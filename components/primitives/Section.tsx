import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?:
    | "default"
    | "surface"
    | "dark"
    | "primary"
    | "lavender"
    | "sky"
    | "mint"
    | "peach"
    | "rose"
    | "yellow"
    | "gradient"
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
    lavender: "bg-violet-50/70 text-foreground",
    sky: "bg-sky-50/70 text-foreground",
    mint: "bg-emerald-50/70 text-foreground",
    peach: "bg-orange-50/70 text-foreground",
    rose: "bg-pink-50/70 text-foreground",
    yellow: "bg-amber-50/70 text-foreground",
    gradient:
      "bg-gradient-to-br from-violet-50/80 via-pink-50/60 to-sky-50/80 text-foreground",
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

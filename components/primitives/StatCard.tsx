import * as React from "react"
import { Card } from "@/components/primitives/Card"
import { cn } from "@/lib/utils"

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  label: string
  description?: string
  variant?: "default" | "dark" | "surface"
  cardVariant?: "white" | "sky" | "peach" | "mint" | "lavender" | "rose" | "amber"
}

export function StatCard({
  value,
  label,
  description,
  variant = "default",
  cardVariant = "white",
  className,
  ...props
}: StatCardProps) {
  const isDark = variant === "dark"

  return (
    <Card
      padding="none"
      variant={isDark ? "primary" : cardVariant}
      className={cn(
        "flex flex-col items-center text-center justify-center p-3 sm:p-4 md:p-6",
        isDark && "bg-white/10 border-white/20 text-white shadow-none",
        variant === "surface" && "bg-surface",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "font-heading text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight",
          isDark ? "text-white" : "text-primary"
        )}
      >
        {value}
      </div>
      <div
        className={cn(
          "mt-1 sm:mt-2 font-heading text-[9px] sm:text-[10px] md:text-xs font-semibold uppercase tracking-wide",
          isDark ? "text-white/80" : "text-foreground"
        )}
      >
        {label}
      </div>
      {description && (
        <p
          className={cn(
            "hidden sm:block mt-1 text-xs max-w-xs",
            isDark ? "text-white/60" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </Card>
  )
}

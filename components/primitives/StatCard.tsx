import * as React from "react"
import { Card } from "@/components/primitives/Card"
import { cn } from "@/lib/utils"

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  label: string
  description?: string
  variant?: "default" | "dark" | "surface"
}

export function StatCard({
  value,
  label,
  description,
  variant = "default",
  className,
  ...props
}: StatCardProps) {
  const isDark = variant === "dark"

  return (
    <Card
      padding="sm"
      className={cn(
        "flex flex-col items-center text-center justify-center",
        isDark && "bg-white/10 border-white/20 text-white shadow-none",
        variant === "surface" && "bg-surface",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "font-heading text-4xl font-bold tracking-tight md:text-5xl",
          isDark ? "text-white" : "text-primary"
        )}
      >
        {value}
      </div>
      <div
        className={cn(
          "mt-2 font-heading text-sm font-semibold uppercase tracking-wider",
          isDark ? "text-white/80" : "text-foreground"
        )}
      >
        {label}
      </div>
      {description && (
        <p
          className={cn(
            "mt-1 text-xs max-w-xs",
            isDark ? "text-white/60" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </Card>
  )
}

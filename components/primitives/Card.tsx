import * as React from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: "sm" | "default" | "lg" | "none"
  variant?: "white" | "lavender" | "sky" | "mint" | "peach" | "rose" | "yellow" | "amber" | "primary"
  hoverable?: boolean
  children: React.ReactNode
}

export function Card({
  padding = "default",
  variant = "lavender",
  hoverable = true,
  className,
  children,
  ...props
}: CardProps) {
  const paddingStyles = {
    none: "p-0",
    sm: "p-6",
    default: "p-8",
    lg: "p-10",
  }

  const variantStyles = {
    white: "bg-card border-border/80 text-card-foreground",
    lavender: "bg-violet-50/70 border-violet-100/90 text-card-foreground",
    sky: "bg-sky-50/70 border-sky-100/90 text-card-foreground",
    mint: "bg-emerald-50/70 border-emerald-100/90 text-card-foreground",
    peach: "bg-orange-50/70 border-orange-100/90 text-card-foreground",
    rose: "bg-pink-50/70 border-pink-100/90 text-card-foreground",
    yellow: "bg-amber-50/70 border-amber-100/90 text-card-foreground",
    amber: "bg-amber-50/70 border-amber-100/90 text-card-foreground",
    primary: "bg-primary text-white border-transparent",
  }

  return (
    <div
      className={cn(
        "rounded-3xl border shadow-xs",
        variantStyles[variant],
        hoverable && "transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/25",
        paddingStyles[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col space-y-2 mb-4", className)}
      {...props}
    />
  )
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "font-heading text-xl font-semibold leading-tight text-primary md:text-2xl",
        className
      )}
      {...props}
    />
  )
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-muted-foreground leading-relaxed md:text-base", className)}
      {...props}
    />
  )
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("pt-0", className)} {...props} />
}

export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center pt-4 mt-auto border-t border-border", className)}
      {...props}
    />
  )
}

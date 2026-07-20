import * as React from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: "sm" | "default" | "lg" | "none"
  hoverable?: boolean
  children: React.ReactNode
}

export function Card({
  padding = "default",
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

  return (
    <div
      className={cn(
        "rounded-3xl border border-border bg-card text-card-foreground shadow-xs",
        hoverable && "transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/20",
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

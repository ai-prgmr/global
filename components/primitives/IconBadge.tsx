import * as React from "react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface IconBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon
  variant?: "primary" | "secondary" | "white"
  size?: "sm" | "default" | "lg"
}

export function IconBadge({
  icon: Icon,
  variant = "primary",
  size = "default",
  className,
  ...props
}: IconBadgeProps) {
  const variantStyles = {
    primary: "bg-primary/10 text-primary border-primary/20",
    secondary: "bg-secondary/10 text-secondary border-secondary/20",
    white: "bg-white text-primary border-border shadow-xs",
  }

  const sizeStyles = {
    sm: "h-10 w-10 rounded-xl p-2",
    default: "h-12 w-12 rounded-2xl p-2.5",
    lg: "h-14 w-14 rounded-2xl p-3",
  }

  const iconSizes = {
    sm: 20,
    default: 24,
    lg: 28,
  }

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center border shadow-xs transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      <Icon size={iconSizes[size]} className="shrink-0" />
    </div>
  )
}

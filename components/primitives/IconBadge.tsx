import * as React from "react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface IconBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon
  variant?:
    | "primary"
    | "secondary"
    | "white"
    | "violet"
    | "sky"
    | "emerald"
    | "orange"
    | "pink"
    | "amber"
    | "purple"
    | "blue"
    | "mint"
    | "peach"
    | "rose"
    | "yellow"
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
    violet: "bg-violet-50 text-violet-700 border-violet-200/50",
    purple: "bg-violet-50 text-violet-700 border-violet-200/50",
    sky: "bg-sky-50 text-sky-700 border-sky-200/50",
    blue: "bg-sky-50 text-sky-700 border-sky-200/50",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200/50",
    mint: "bg-emerald-50 text-emerald-700 border-emerald-200/50",
    orange: "bg-orange-50 text-orange-700 border-orange-200/50",
    peach: "bg-orange-50 text-orange-700 border-orange-200/50",
    pink: "bg-pink-50 text-pink-700 border-pink-200/50",
    rose: "bg-pink-50 text-pink-700 border-pink-200/50",
    amber: "bg-amber-50 text-amber-700 border-amber-200/50",
    yellow: "bg-amber-50 text-amber-700 border-amber-200/50",
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

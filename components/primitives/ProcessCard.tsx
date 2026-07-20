import * as React from "react"
import { Card } from "@/components/primitives/Card"
import { cn } from "@/lib/utils"

export interface ProcessCardProps extends React.HTMLAttributes<HTMLDivElement> {
  stepNumber: number | string
  title: string
  description: string
  isLast?: boolean
}

export function ProcessCard({
  stepNumber,
  title,
  description,
  isLast = false,
  className,
  ...props
}: ProcessCardProps) {
  return (
    <Card
      className={cn("relative flex flex-col justify-between h-full", className)}
      {...props}
    >
      <div>
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-white shadow-xs">
          {stepNumber}
        </div>
        <h3 className="mb-3 font-heading text-xl font-bold text-primary md:text-2xl">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
          {description}
        </p>
      </div>

      {!isLast && (
        <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
          <div className="h-0.5 w-8 bg-border" />
        </div>
      )}
    </Card>
  )
}

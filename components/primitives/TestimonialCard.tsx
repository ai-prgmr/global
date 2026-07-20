import * as React from "react"
import { Star, Quote } from "lucide-react"
import { Card } from "@/components/primitives/Card"
import { cn } from "@/lib/utils"

export interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  relation: string
  quote: string
  rating?: number
  type?: string
  cardVariant?: "lavender" | "sky" | "mint" | "peach" | "rose" | "yellow" | "amber"
}

export function TestimonialCard({
  name,
  relation,
  quote,
  rating = 5,
  type = "Student Review",
  cardVariant = "lavender",
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <Card
      variant={cardVariant}
      className={cn("group relative flex flex-col justify-between h-full", className)}
      {...props}
    >
      <div>
        {/* Rating Stars & Type Badge */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex gap-1 text-amber-500">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
            ))}
          </div>
          <span
            className={cn(
              "rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider",
              type.toLowerCase().includes("parent")
                ? "bg-secondary/10 text-secondary"
                : "bg-primary/10 text-primary"
            )}
          >
            {type}
          </span>
        </div>

        {/* Quote */}
        <p className="mb-6 italic text-sm leading-relaxed text-muted-foreground line-clamp-4 md:text-base">
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      {/* Author Info */}
      <div className="border-t border-border pt-4 flex items-center justify-between">
        <div>
          <h4 className="font-heading font-bold text-primary">{name}</h4>
          <p className="text-xs text-muted-foreground mt-0.5">{relation}</p>
        </div>
        <Quote className="h-8 w-8 text-primary/10 transition-colors group-hover:text-secondary/20 shrink-0" />
      </div>
    </Card>
  )
}

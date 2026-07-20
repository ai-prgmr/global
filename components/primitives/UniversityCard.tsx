import * as React from "react"
import Image from "next/image"
import { Award, MapPin } from "lucide-react"
import { Card } from "@/components/primitives/Card"
import { cn } from "@/lib/utils"

export interface UniversityCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  country: string
  ranking?: string
  logoSrc?: string
  programs?: string
  cardVariant?: "mint" | "sky" | "lavender" | "peach" | "rose" | "amber"
}

export function UniversityCard({
  name,
  country,
  ranking,
  logoSrc,
  programs,
  cardVariant = "mint",
  className,
  ...props
}: UniversityCardProps) {
  return (
    <Card
      padding="sm"
      variant={cardVariant}
      className={cn("group flex flex-col justify-between h-full", className)}
      {...props}
    >
      <div>
        <div className="mb-4 flex items-center justify-between">
          {logoSrc ? (
            <div className="relative h-10 w-24 overflow-hidden">
              <Image
                src={logoSrc}
                alt={name}
                fill
                className="object-contain object-left"
              />
            </div>
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 font-bold text-primary">
              {name.charAt(0)}
            </div>
          )}
          {ranking && (
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
              <Award className="h-3 w-3 text-secondary" />
              {ranking}
            </span>
          )}
        </div>

        <h4 className="font-heading text-lg font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2">
          {name}
        </h4>
        <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-muted-foreground">
          <MapPin className="h-3 w-3 text-secondary" />
          {country}
        </p>

        {programs && (
          <p className="mt-3 text-xs text-muted-foreground border-t border-border pt-2">
            {programs}
          </p>
        )}
      </div>
    </Card>
  )
}

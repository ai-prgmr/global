"use client"

import * as React from "react"
import { MapPin, CheckCircle2 } from "lucide-react"
import { Card } from "@/components/primitives/Card"
import { getUniversityLogoUrl } from "@/lib/data/universityLogos"
import { cn } from "@/lib/utils"

export interface UniversityCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  country: string
  logoSrc?: string
  programs?: string
  cardVariant?: "mint" | "sky" | "lavender" | "peach" | "rose" | "amber"
}

export function UniversityCard({
  name,
  country,
  logoSrc,
  programs,
  cardVariant = "mint",
  className,
  ...props
}: UniversityCardProps) {
  const [imgError, setImgError] = React.useState(false)
  const { logoUrl, monogram } = getUniversityLogoUrl(name)
  const activeLogo = logoSrc || logoUrl

  return (
    <Card
      padding="sm"
      variant={cardVariant}
      className={cn(
        "group flex flex-col justify-between h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1",
        className
      )}
      {...props}
    >
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-white border border-border/80 shadow-2xs p-2 overflow-hidden transition-transform duration-300 group-hover:scale-105">
            {!imgError ? (
              <img
                src={activeLogo}
                alt={`${name} logo`}
                width={64}
                height={64}
                className="h-24 w-24 object-contain"
                onError={() => setImgError(true)}
                loading="lazy"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center font-heading text-xs font-bold text-primary">
                {monogram.slice(0, 3)}
              </div>
            )}
          </div>


        </div>

        <h4 className="font-heading text-base font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2 leading-snug">
          {name}
        </h4>
        <p className="mt-1.5 flex items-center gap-1 text-xs font-semibold text-muted-foreground">
          <MapPin className="h-3 w-3 text-secondary shrink-0" />
          {country}
        </p>

        {programs && (
          <p className="mt-3 text-xs text-muted-foreground border-t border-border pt-2 leading-relaxed">
            {programs}
          </p>
        )}
      </div>
    </Card>
  )
}

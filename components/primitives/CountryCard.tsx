import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, DollarSign, FileText } from "lucide-react"
import { Card } from "@/components/primitives/Card"
import { Button } from "@/components/primitives/Button"
import { cn } from "@/lib/utils"

export interface CountryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  region: string
  flag?: string
  imageSrc?: string
  description: string
  averageTuition?: string
  popularExams?: string
  highlights?: string[]
  href: string
}

export function CountryCard({
  name,
  region,
  flag,
  imageSrc,
  description,
  averageTuition,
  popularExams,
  highlights = [],
  href,
  className,
  ...props
}: CountryCardProps) {
  return (
    <Card
      padding="none"
      className={cn("group flex flex-col justify-between overflow-hidden h-full", className)}
      {...props}
    >
      <div>
        {/* Header Visual or Flag Line */}
        {imageSrc ? (
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={imageSrc}
              alt={name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary backdrop-blur-xs">
              {region}
            </span>
          </div>
        ) : (
          <div className="flex items-center justify-between p-6 pb-0">
            <span className="text-4xl drop-shadow-xs transition-transform duration-300 group-hover:scale-110">
              {flag || "🌐"}
            </span>
            <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
              {region}
            </span>
          </div>
        )}

        <div className="p-6 md:p-8">
          <h3 className="mb-2 font-heading text-2xl font-bold text-primary group-hover:text-secondary transition-colors">
            {name}
          </h3>
          <p className="mb-6 text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {description}
          </p>

          {(averageTuition || popularExams) && (
            <div className="mb-6 space-y-2 border-t border-border pt-4">
              {averageTuition && (
                <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                  <DollarSign className="h-4 w-4 text-secondary shrink-0" />
                  <span>Tuition: {averageTuition}</span>
                </div>
              )}
              {popularExams && (
                <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                  <FileText className="h-4 w-4 text-secondary shrink-0" />
                  <span>Exams: {popularExams}</span>
                </div>
              )}
            </div>
          )}

          {highlights.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-1.5">
              {highlights.slice(0, 3).map((h) => (
                <span
                  key={h}
                  className="rounded-lg bg-surface px-2.5 py-1 text-[11px] font-semibold text-muted-foreground"
                >
                  {h}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="p-6 pt-0 md:p-8 md:pt-0">
        <Link href={href} className="block w-full">
          <Button variant="primary" className="w-full justify-center text-sm font-bold">
            Explore Guide
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </Card>
  )
}

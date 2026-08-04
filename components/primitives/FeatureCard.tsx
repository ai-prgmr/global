import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import { ArrowRight } from "lucide-react"
import { Card } from "@/components/primitives/Card"
import { IconBadge } from "@/components/primitives/IconBadge"
import { cn } from "@/lib/utils"

import type { IconBadgeProps } from "@/components/primitives/IconBadge"

export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: LucideIcon
  imageSrc?: string
  imageAlt?: string
  title: string
  description: string
  href?: string
  ctaText?: string
  badgeVariant?: IconBadgeProps["variant"]
  cardVariant?: "white" | "lavender" | "sky" | "mint" | "peach" | "rose" | "yellow" | "amber" | "primary"
}

export function FeatureCard({
  icon,
  imageSrc,
  imageAlt,
  title,
  description,
  href,
  ctaText = "Explore",
  badgeVariant = "primary",
  cardVariant = "lavender",
  className,
  ...props
}: FeatureCardProps) {
  return (
    <Card
      variant={cardVariant}
      className={cn("group flex flex-col justify-between h-full overflow-hidden", className)}
      {...props}
    >
      <div>
        {imageSrc ? (
          <div className="relative mb-5 aspect-video w-full overflow-hidden rounded-xl bg-muted border border-border/60 shadow-2xs">
            <Image
              src={imageSrc}
              alt={imageAlt || title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {icon && (
              <div className="absolute top-2.5 left-2.5">
                <IconBadge icon={icon} variant={badgeVariant} className="shadow-md backdrop-blur-xs" />
              </div>
            )}
          </div>
        ) : (
          icon && <IconBadge icon={icon} variant={badgeVariant} className="mb-6" />
        )}

        <h3 className="mb-3 font-heading text-xl font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2 md:text-2xl">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-4 md:text-base">
          {description}
        </p>
      </div>

      {href && (
        <div className="pt-6 mt-6 border-t border-border">
          <Link
            href={href}
            className="inline-flex items-center text-sm font-bold text-primary transition-colors group-hover:text-secondary group-hover:translate-x-1"
          >
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </Card>
  )
}

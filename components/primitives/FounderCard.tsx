import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Card } from "@/components/primitives/Card"
import { cn } from "@/lib/utils"

export interface FounderCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string
  designation?: string
  mission?: string
  imageSrc?: string
  href?: string
}

export function FounderCard({
  name = "Prashant Hemnani",
  designation = "Founder & Chief Mentor, The Globalizers",
  mission = "Our mission is to democratize world-class education for every Indian student, ensuring that financial or geographical barriers never limit potential.",
  imageSrc = "/global/prashant-hemnani.png",
  href = "/founder",
  className,
  ...props
}: FounderCardProps) {
  return (
    <Card
      padding="lg"
      className={cn("bg-primary text-white border-none shadow-xl", className)}
      {...props}
    >
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="space-y-6">
          <span className="rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-secondary-foreground">
            Leadership & Mentorship
          </span>
          <p className="font-heading text-xl md:text-2xl italic text-white/90 leading-relaxed">
            &ldquo;{mission}&rdquo;
          </p>
          <div>
            <h4 className="font-heading text-xl font-bold text-white">{name}</h4>
            <p className="text-sm text-secondary-foreground">{designation}</p>
          </div>
          {href && (
            <Link
              href={href}
              className="inline-flex items-center gap-2 font-heading font-bold text-white hover:text-secondary-foreground transition-colors pt-2"
            >
              Read Full Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </Card>
  )
}

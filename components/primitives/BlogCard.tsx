import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play } from "lucide-react"
import { Card } from "@/components/primitives/Card"
import { cn } from "@/lib/utils"

export interface BlogCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  category: string
  excerpt?: string
  imageSrc?: string
  duration?: string
  author?: string
  views?: string
  href: string
  isVideo?: boolean
  cardVariant?: "white" | "lavender" | "sky" | "mint" | "peach" | "rose" | "yellow" | "amber" | "primary"
}

export function BlogCard({
  title,
  category,
  excerpt,
  imageSrc,
  duration,
  author,
  views,
  href,
  isVideo = false,
  cardVariant = "sky",
  className,
  ...props
}: BlogCardProps) {
  return (
    <Card
      padding="none"
      variant={cardVariant}
      className={cn("group flex flex-col justify-between overflow-hidden h-full", className)}
      {...props}
    >
      <div>
        {/* Featured Image / Video Thumbnail */}
        <div className="relative aspect-video w-full overflow-hidden bg-primary/10">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-primary text-white">
              <span className="font-heading font-bold text-xl">{category}</span>
            </div>
          )}

          {isVideo && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity group-hover:bg-black/35">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-lg transition-transform group-hover:scale-110 group-hover:bg-secondary group-hover:text-white">
                <Play className="h-5 w-5 fill-current ml-0.5" />
              </div>
            </div>
          )}

          {duration && (
            <span className="absolute bottom-3 right-3 rounded-md bg-black/75 px-2 py-1 text-[11px] font-bold text-white tracking-wide">
              {duration}
            </span>
          )}

          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary backdrop-blur-xs">
            {category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="mb-2 font-heading text-lg font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2">
            {title}
          </h3>
          {excerpt && (
            <p className="mb-4 text-xs leading-relaxed text-muted-foreground line-clamp-2">
              {excerpt}
            </p>
          )}
          {(author || views) && (
            <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground pt-2">
              {author && <span>{author}</span>}
              {views && <span>{views}</span>}
            </div>
          )}
        </div>
      </div>

      {/* CTA Footer */}
      <div className="border-t border-border p-6 pt-4">
        <Link
          href={href}
          className="inline-flex w-full items-center justify-center gap-2 text-sm font-bold text-primary transition-colors group-hover:text-secondary"
        >
          {isVideo ? "Watch Masterclass" : "Read Article"}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </Card>
  )
}

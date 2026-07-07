interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 space-y-4 ${centered ? "text-center" : ""}`}>
      <h2
        className={`font-[Montserrat] text-3xl font-semibold leading-tight ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto max-w-2xl text-base ${
            light ? "text-white/70" : "text-on-surface-variant"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

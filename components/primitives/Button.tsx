import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-full font-semibold whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:translate-y-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-md",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/90 hover:-translate-y-0.5 hover:shadow-md",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary/5 hover:-translate-y-0.5",
        ghost:
          "bg-transparent text-primary hover:bg-primary/5",
      },
      size: {
        default: "h-14 px-8 text-base gap-2",
        sm: "h-11 px-6 text-sm gap-2",
        lg: "h-16 px-10 text-lg gap-2.5",
        icon: "h-12 w-12 rounded-full p-0 flex items-center justify-center",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { buttonVariants }

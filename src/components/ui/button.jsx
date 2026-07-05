import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  `group/button inline-flex shrink-0 items-center justify-center border border-transparent
   text-sm font-medium whitespace-nowrap transition-all outline-none select-none
   focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50
   active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50
   aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20
   dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40
   [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
  {
    variants: {
      variant: {
        default: [
          "rounded-full bg-primary text-primary-foreground shadow-sm",
          "hover:shadow-md hover:-translate-y-0.5",
          "active:translate-y-0 active:shadow-xs",
          "before:absolute before:inset-0 before:rounded-full before:bg-white/10 before:opacity-0 before:transition-opacity hover:before:opacity-100",
          "relative overflow-hidden",
          "[&_svg]:transition-transform [&_svg]:duration-300",
          "hover:[&_svg:last-child]:translate-x-0.5 hover:[&_svg:first-child]:-translate-x-0.5",
        ].join(" "),
        outline: [
          "rounded-full border-2 border-border bg-background",
          "hover:border-primary hover:bg-primary hover:text-primary-foreground",
          "hover:-translate-y-0.5 hover:shadow-sm",
          "active:translate-y-0",
          "transition-colors duration-300",
        ].join(" "),
        secondary: [
          "rounded-full bg-secondary text-secondary-foreground",
          "border border-border/50 shadow-sm",
          "hover:shadow-md hover:-translate-y-0.5 hover:brightness-95",
          "active:translate-y-0 active:shadow-xs",
        ].join(" "),
        ghost: [
          "rounded-full",
          "hover:bg-primary/10 hover:text-primary",
          "hover:-translate-y-0.5",
          "active:translate-y-0",
        ].join(" "),
        destructive: [
          "rounded-full bg-destructive/10 text-destructive",
          "hover:bg-destructive hover:text-destructive-foreground",
          "hover:-translate-y-0.5 hover:shadow-sm",
          "active:translate-y-0",
          "transition-colors duration-300",
        ].join(" "),
        link: "text-primary underline-offset-4 hover:underline inline-flex h-auto p-0 rounded-none border-0",
      },
      size: {
        default: "h-9 px-5 gap-1.5",
        xs: "h-7 px-3 gap-1 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 px-4 gap-1 text-xs",
        lg: "h-10 px-7 gap-2 text-base",
        xl: "h-12 px-9 gap-2.5 text-base font-semibold",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
        "icon-xl": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }

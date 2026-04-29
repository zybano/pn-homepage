import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-semibold ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "text-white shadow-[0px_4px_7px_rgba(87,104,253,0.35)] hover:opacity-90",
        secondary:
          "bg-slate-100 text-[#040523] border border-brand-border hover:bg-slate-200",
        outline:
          "border border-brand-border bg-transparent text-brand-navy hover:bg-brand-bg",
        ghost: "hover:bg-brand-bg text-brand-navy",
        link: "text-brand-blue underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-10 px-6 py-2",
        lg: "h-14 px-10 py-4",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    Omit<
      HTMLMotionProps<"button">,
      "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag"
    >,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    const isPrimary = variant === "primary" || !variant;

    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        style={
          isPrimary
            ? {
                backgroundImage:
                  "linear-gradient(94.9deg, #040523 2.59%, #3B4FE8 105%)",
              }
            : undefined
        }
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };

import Link, { type LinkProps } from "next/link";
import { cn } from "@/lib/utils";
import { type AnchorHTMLAttributes } from "react";

type ButtonLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
    size?: "sm" | "md" | "lg";
  };

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary/90 shadow-sm hover:shadow-md",
  secondary:
    "bg-primary-blue text-white hover:bg-primary-blue/90 shadow-sm hover:shadow-md",
  outline:
    "border border-border bg-white text-foreground hover:bg-background-secondary hover:border-primary/30",
  ghost: "text-foreground hover:bg-background-secondary",
  white:
    "bg-white text-primary hover:bg-white/90 shadow-sm hover:shadow-md",
};

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
};

export function ButtonLink({
  href,
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

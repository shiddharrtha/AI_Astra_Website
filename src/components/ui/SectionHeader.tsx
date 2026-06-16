import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function SectionLabel({ children, className, dark }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "mb-3 text-sm font-semibold uppercase tracking-widest",
        dark ? "text-accent-cyan" : "text-primary",
        className
      )}
    >
      {children}
    </p>
  );
}

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
  dark?: boolean;
}

export function SectionHeading({
  children,
  className,
  as: Tag = "h2",
  dark,
}: SectionHeadingProps) {
  return (
    <Tag
      className={cn(
        "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
        dark ? "text-white" : "text-foreground",
        className
      )}
    >
      {children}
    </Tag>
  );
}

interface SectionDescriptionProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function SectionDescription({
  children,
  className,
  dark,
}: SectionDescriptionProps) {
  return (
    <p
      className={cn(
        "mt-4 max-w-2xl text-lg leading-relaxed",
        dark ? "text-slate-300" : "text-muted",
        className
      )}
    >
      {children}
    </p>
  );
}

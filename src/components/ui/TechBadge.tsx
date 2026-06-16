import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  className?: string;
}

export function TechBadge({ name, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border border-border bg-white px-3 py-1.5 text-sm font-medium text-foreground shadow-sm",
        className
      )}
    >
      {name}
    </span>
  );
}

interface TechBadgeListProps {
  technologies: string[];
  className?: string;
}

export function TechBadgeList({ technologies, className }: TechBadgeListProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {technologies.map((tech) => (
        <TechBadge key={tech} name={tech} />
      ))}
    </div>
  );
}

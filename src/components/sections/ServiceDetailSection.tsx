import { type Service } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { TechBadgeList } from "@/components/ui/TechBadge";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceDetailSectionProps {
  service: Service;
  index: number;
}

export function ServiceDetailSection({
  service,
  index,
}: ServiceDetailSectionProps) {
  const Icon = service.icon;
  const isEven = index % 2 === 0;

  return (
    <AnimatedSection
      id={service.id}
      className={cn(
        "section-padding border-b border-border",
        isEven ? "bg-white" : "bg-background-secondary"
      )}
    >
      <div className="container-max">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              {service.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {service.shortDescription}
            </p>
            <ButtonLink href="/contact" className="mt-6">
              Start a Project
            </ButtonLink>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                The Problem
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.problem}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                Our Solution
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.solution}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                Deliverables
              </h3>
              <ul className="mt-3 space-y-2">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-teal" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                Technologies
              </h3>
              <TechBadgeList
                technologies={service.technologies}
                className="mt-3"
              />
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                Expected Outcomes
              </h3>
              <ul className="mt-3 space-y-2">
                {service.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

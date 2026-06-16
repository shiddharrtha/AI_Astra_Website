import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CountUp } from "@/components/ui/CountUp";
import { SectionHeading, SectionLabel } from "@/components/ui/SectionHeader";
import { metrics } from "@/lib/data";

export function MetricsSection() {
  return (
    <AnimatedSection className="bg-background-secondary section-padding">
      <div className="container-max">
        <div className="text-center">
          <SectionLabel>Impact</SectionLabel>
          <SectionHeading className="mx-auto">
            Technology that creates measurable impact
          </SectionHeading>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="card-base card-hover p-6 text-center"
            >
              <CountUp value={metric.value} suffix={metric.suffix} />
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

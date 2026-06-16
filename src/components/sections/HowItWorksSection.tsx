import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedSection";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/SectionHeader";
import { processSteps } from "@/lib/data";

export function HowItWorksSection() {
  return (
    <AnimatedSection className="bg-background-secondary section-padding">
      <div className="container-max">
        <div className="max-w-2xl">
          <SectionLabel>Process</SectionLabel>
          <SectionHeading>How it works</SectionHeading>
          <SectionDescription>
            A clear, collaborative process from discovery to launch — designed to
            keep your team informed and involved at every step.
          </SectionDescription>
        </div>

        <StaggerContainer className="mt-12">
          <div className="relative grid gap-8 md:grid-cols-4">
            <div className="absolute top-8 left-0 right-0 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent md:block" />

            {processSteps.map((step) => (
              <StaggerItem key={step.step}>
                <div className="relative flex flex-col items-start md:items-center md:text-center">
                  <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-white text-sm font-bold text-primary shadow-sm">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}

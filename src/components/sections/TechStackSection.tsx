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
import { TechBadge } from "@/components/ui/TechBadge";
import { techStack } from "@/lib/data";

export function TechStackSection() {
  return (
    <AnimatedSection className="bg-background-secondary section-padding">
      <div className="container-max">
        <div className="text-center">
          <SectionLabel>Technology</SectionLabel>
          <SectionHeading className="mx-auto">
            Built with modern, proven tools
          </SectionHeading>
          <SectionDescription className="mx-auto">
            We use industry-standard technologies to build reliable, scalable,
            and maintainable solutions.
          </SectionDescription>
        </div>

        <StaggerContainer className="mt-12 grid gap-8 sm:grid-cols-2">
          {Object.entries(techStack).map(([category, technologies]) => (
            <StaggerItem key={category}>
              <div className="card-base p-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}

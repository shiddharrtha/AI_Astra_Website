import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedSection";
import {
  SectionHeading,
  SectionLabel,
} from "@/components/ui/SectionHeader";
import { testimonials } from "@/lib/data";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <AnimatedSection className="bg-background-secondary section-padding">
      <div className="container-max">
        <div className="text-center">
          <SectionLabel>Testimonials</SectionLabel>
          <SectionHeading className="mx-auto">What clients say</SectionHeading>
        </div>

        <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <StaggerItem key={i}>
              <div className="card-base card-hover flex h-full flex-col p-6">
                <Quote className="mb-4 h-8 w-8 text-primary/20" />
                <p className="flex-1 text-sm leading-relaxed text-muted italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}

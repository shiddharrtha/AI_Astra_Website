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
import { testimonials } from "@/lib/data";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <AnimatedSection className="bg-background-secondary section-padding">
      <div className="container-max">
        <div className="text-center">
          <SectionLabel>Testimonials</SectionLabel>
          <SectionHeading className="mx-auto">What partners say</SectionHeading>
          <SectionDescription className="mx-auto">
            Placeholder testimonials — to be replaced with real client feedback.
          </SectionDescription>
        </div>

        <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <StaggerItem key={i}>
              <div className="card-base card-hover relative flex h-full flex-col p-6">
                {testimonial.isPlaceholder && (
                  <span className="absolute top-4 right-4 rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-600 border border-amber-200">
                    Placeholder
                  </span>
                )}
                <Quote className="mb-4 h-8 w-8 text-primary/20" />
                <p className="flex-1 text-sm leading-relaxed text-muted italic">
                  {testimonial.quote}
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent-cyan/20 text-sm font-semibold text-primary">
                    {testimonial.name.charAt(1)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted">
                      {testimonial.role}, {testimonial.organization}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}

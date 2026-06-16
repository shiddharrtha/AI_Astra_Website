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
import { whyAstra } from "@/lib/data";
import { Shield, Heart, Scale, DollarSign } from "lucide-react";

const icons = [Heart, Shield, Scale, DollarSign];

export function WhyAstraSection() {
  return (
    <AnimatedSection className="bg-background-dark section-padding">
      <div className="container-max">
        <div className="max-w-2xl">
          <SectionLabel dark>Why AI Astra</SectionLabel>
          <SectionHeading dark>
            AI that is practical, responsible, and built to last
          </SectionHeading>
          <SectionDescription dark>
            We combine technical expertise with a deep commitment to the
            organizations and communities we serve.
          </SectionDescription>
        </div>

        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyAstra.map((item, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={item.title}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent-cyan/30 hover:bg-white/10">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20 text-accent-cyan">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}

import { HeroSection } from "@/components/sections/HeroSection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { WhyAstraSection } from "@/components/sections/WhyAstraSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ResponsibleAISection } from "@/components/sections/ResponsibleAISection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MetricsSection />
      <ServicesSection />
      <HowItWorksSection />
      <ProjectsSection />
      <WhyAstraSection />
      <TechStackSection />
      <ResponsibleAISection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

import type { Metadata } from "next";
import { ServiceDetailSection } from "@/components/sections/ServiceDetailSection";
import { CTASection } from "@/components/sections/CTASection";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/SectionHeader";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI chatbots, intelligent agents, workflow automation, web development, data analytics, and AI strategy for nonprofits and growing organizations.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-white section-padding border-b border-border">
        <div className="container-max">
          <SectionLabel>Services</SectionLabel>
          <SectionHeading>Comprehensive AI solutions</SectionHeading>
          <SectionDescription>
            From strategy to deployment, we offer end-to-end services designed
            for organizations that need practical, affordable, and impactful
            technology.
          </SectionDescription>
        </div>
      </section>

      {services.map((service, i) => (
        <ServiceDetailSection key={service.id} service={service} index={i} />
      ))}

      <CTASection />
    </>
  );
}

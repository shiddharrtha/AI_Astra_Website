import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <section className="bg-white section-padding">
      <div className="container-max max-w-3xl prose prose-slate">
        <SectionHeading>Terms of Service</SectionHeading>
        <p className="mt-6 text-muted leading-relaxed">
          This terms of service page is a placeholder. A complete terms of
          service document will be published here covering the use of AI Astra
          Innovations&apos; website, services, intellectual property, limitations
          of liability, and governing terms for client engagements.
        </p>
        <p className="mt-4 text-muted leading-relaxed">
          For questions, contact us at{" "}
          <a
            href="mailto:join.aiastra@gmail.com"
            className="text-primary hover:underline"
          >
            join.aiastra@gmail.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}

import { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Pricing",
  description: "Simple pricing for teams growing with confidence.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Section title="Pricing" description="Start small, scale as your needs grow.">
        <Container className="grid gap-6 md:grid-cols-3">
          <Card title="Starter" description="For early teams building their first operating rhythm." />
          <Card title="Growth" description="For companies scaling across more workflows and channels." />
          <Card title="Scale" description="For organizations needing deeper control and support." />
        </Container>
      </Section>
    </main>
  );
}

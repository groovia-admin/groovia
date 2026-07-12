import { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Features",
  description: "Discover the capabilities behind Groovia.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Section title="Features" description="Powerful building blocks for thoughtful growth.">
        <Container className="grid gap-6 md:grid-cols-3">
          <Card title="Shared workspace" description="Coordinate launches, updates, and customer-facing work in one calm place." />
          <Card title="Clear reporting" description="Turn signals into useful insights for teams and leaders." />
          <Card title="Flexible workflows" description="Adapt processes without adding unnecessary complexity." />
        </Container>
      </Section>
    </main>
  );
}

import { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "FAQ",
  description: "Answers to common questions about Groovia.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Section title="FAQ" description="A quick overview of how Groovia works.">
        <Container className="grid gap-6 md:grid-cols-2">
          <Card title="Who is it for?" description="Teams that want a more thoughtful, consistent customer experience." />
          <Card title="How fast can we start?" description="Most teams can get a polished foundation up and running quickly." />
        </Container>
      </Section>
    </main>
  );
}

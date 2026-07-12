import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: "Learn what Groovia is building.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Section title="About Groovia" description="A focused operating layer for modern teams that care about experience.">
        <Container className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-slate-300">
          <p>Groovia brings strategy, delivery, and support into one shared environment so your team can move with clarity and confidence.</p>
        </Container>
      </Section>
    </main>
  );
}

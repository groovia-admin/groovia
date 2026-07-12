import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Terms",
  description: "The terms of use for the Groovia website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Section title="Terms" description="These are starter terms for the Groovia website.">
        <Container className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-slate-300">
          <p>By using this website, you agree to use it responsibly and in compliance with applicable law.</p>
        </Container>
      </Section>
    </main>
  );
}

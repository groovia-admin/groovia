import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description: "Get in touch with the Groovia team.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Section title="Contact" description="We would love to hear about your next launch.">
        <Container className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-slate-300">
          <p>Email hello@groovia.com to start a conversation.</p>
        </Container>
      </Section>
    </main>
  );
}

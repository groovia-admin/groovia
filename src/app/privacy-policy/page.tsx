import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: "How Groovia handles your information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Section title="Privacy Policy" description="This is a starter privacy page for the Groovia site.">
        <Container className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-slate-300">
          <p>We collect only the data needed to provide and improve our services. Contact us if you have any questions.</p>
        </Container>
      </Section>
    </main>
  );
}

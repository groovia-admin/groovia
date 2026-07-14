import { createMetadata } from '@/lib/seo';
import { Container } from '@/components/ui/Container';

export const metadata = createMetadata({
  title: 'Privacy Policy',
  description: 'How Groovia collects, uses, and protects your data.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <Container className="py-24">
      <p className="text-center text-on-surface-variant">
        Privacy Policy content will be delivered in Part 5.
      </p>
    </Container>
  );
}
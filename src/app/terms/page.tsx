import { createMetadata } from '@/lib/seo';
import { Container } from '@/components/ui/Container';

export const metadata = createMetadata({
  title: 'Terms & Conditions',
  description: 'Terms and conditions for using the Groovia platform.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <Container className="py-24">
      <p className="text-center text-on-surface-variant">
        Terms & Conditions content will be delivered in Part 5.
      </p>
    </Container>
  );
}
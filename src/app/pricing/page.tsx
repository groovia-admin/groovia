import { createMetadata } from '@/lib/seo';
import { Container } from '@/components/ui/Container';

export const metadata = createMetadata({
  title: 'Pricing',
  description: 'Simple, transparent pricing for every local business in India.',
  path: '/pricing',
});

export default function PricingPage() {
  return (
    <Container className="py-24">
      <p className="text-center text-on-surface-variant">
        Pricing page content will be delivered in Part 3.
      </p>
    </Container>
  );
}
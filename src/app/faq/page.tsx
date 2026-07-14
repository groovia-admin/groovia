import { createMetadata } from '@/lib/seo';
import { Container } from '@/components/ui/Container';

export const metadata = createMetadata({
  title: 'FAQ',
  description: 'Frequently asked questions about Groovia.',
  path: '/faq',
});

export default function FAQPage() {
  return (
    <Container className="py-24">
      <p className="text-center text-on-surface-variant">
        FAQ page content will be delivered in Part 4.
      </p>
    </Container>
  );
}
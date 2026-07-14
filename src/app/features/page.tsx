import { createMetadata } from '@/lib/seo';
import { Container } from '@/components/ui/Container';

export const metadata = createMetadata({
  title: 'Features',
  description: 'Explore all the tools Groovia offers to run your local business.',
  path: '/features',
});

export default function FeaturesPage() {
  return (
    <Container className="py-24">
      <p className="text-center text-on-surface-variant">
        Features page content will be delivered in Part 3.
      </p>
    </Container>
  );
}
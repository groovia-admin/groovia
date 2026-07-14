import { createMetadata } from '@/lib/seo';
import { Container } from '@/components/ui/Container';

export const metadata = createMetadata({
  title: 'About Us',
  description: 'Learn what Groovia is building for local businesses in India.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <Container className="py-24">
      <p className="text-center text-on-surface-variant">
        About page content will be delivered in Part 3.
      </p>
    </Container>
  );
}
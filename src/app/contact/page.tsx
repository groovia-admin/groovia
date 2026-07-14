import { createMetadata } from '@/lib/seo';
import { Container } from '@/components/ui/Container';

export const metadata = createMetadata({
  title: 'Contact Us',
  description: 'Get in touch with the Groovia team. We are here to help.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <Container className="py-24">
      <p className="text-center text-on-surface-variant">
        Contact page content will be delivered in Part 4.
      </p>
    </Container>
  );
}
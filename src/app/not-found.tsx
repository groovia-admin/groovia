import Link from 'next/link';
import { Home, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export default function NotFound() {
  return (
    <Container className="min-h-[70vh] flex items-center justify-center py-20">
      <div className="text-center max-w-lg">
        <p className="font-display text-8xl md:text-9xl font-bold gradient-text mb-6">404</p>
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">Page not found</h1>
        <p className="text-on-surface-variant mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/" variant="primary" icon={<Home size={18} />} iconPosition="left">
            Back to Home
          </Button>
          <Button href="/contact" variant="outline" icon={<ArrowRight size={18} />}>
            Contact Support
          </Button>
        </div>
      </div>
    </Container>
  );
}
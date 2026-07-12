import Image from 'next/image';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

interface LogoProps {
  variant?: 'horizontal' | 'icon';
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({ variant = 'horizontal', className = '', width, height }: LogoProps) {
  const src = variant === 'icon' ? '/logo/groovia-icon.png' : '/logo/groovia-horizontal.png';
  const defaultWidth = variant === 'icon' ? 40 : 160;
  const defaultHeight = variant === 'icon' ? 40 : 44;

  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label={`${SITE_CONFIG.name} home`}>
      <Image
        src={src}
        alt={`${SITE_CONFIG.name} logo`}
        width={width || defaultWidth}
        height={height || defaultHeight}
        priority
        className="h-auto w-auto object-contain"
      />
    </Link>
  );
}
import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: 'default' | 'narrow' | 'wide';
}

export function Container({ children, className, size = 'default', ...props }: ContainerProps) {
  const sizeClasses = {
    narrow: 'max-w-4xl',
    default: 'max-w-container',
    wide: 'max-w-[1600px]',
  };

  return (
    <div className={cn('mx-auto w-full px-4 md:px-8', sizeClasses[size], className)} {...props}>
      {children}
    </div>
  );
}
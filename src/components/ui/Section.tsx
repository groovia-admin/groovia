import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  background?: 'default' | 'container' | 'white' | 'dark' | 'primary';
}

export function Section({
  children,
  className,
  spacing = 'lg',
  background = 'default',
  ...props
}: SectionProps) {
  const spacingClasses = {
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-20',
    lg: 'py-20 md:py-28',
    xl: 'py-24 md:py-32',
  };

  const backgroundClasses = {
    default: 'bg-background',
    container: 'bg-surface-container-low',
    white: 'bg-white',
    dark: 'bg-on-background text-white',
    primary: 'bg-primary text-on-primary',
  };

  return (
    <section
      className={cn(spacingClasses[spacing], backgroundClasses[background], className)}
      {...props}
    >
      {children}
    </section>
  );
}
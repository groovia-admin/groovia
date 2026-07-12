import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning';
  className?: string;
}

export function Badge({ children, variant = 'primary', className }: BadgeProps) {
  const variantClasses = {
    primary: 'bg-primary-fixed text-on-primary-fixed',
    secondary: 'bg-secondary-fixed text-on-secondary-fixed',
    tertiary: 'bg-tertiary-fixed text-on-tertiary-fixed',
    success: 'bg-primary-fixed text-on-primary-fixed',
    warning: 'bg-tertiary-fixed text-on-tertiary-fixed',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverable?: boolean;
  variant?: 'default' | 'bordered' | 'elevated' | 'dark' | 'primary';
}

export function Card({
  children,
  className,
  hoverable = false,
  variant = 'default',
  ...props
}: CardProps) {
  const variantClasses = {
    default: 'bg-white border border-outline-variant',
    bordered: 'bg-white border border-outline-variant',
    elevated: 'bg-white shadow-elevation-2',
    dark: 'bg-on-background text-white',
    primary: 'bg-primary text-on-primary',
  };

  return (
    <div
      className={cn(
        'rounded-xl p-6 md:p-8 transition-all duration-300',
        variantClasses[variant],
        hoverable && 'hover:border-primary hover:shadow-elevation-2 hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
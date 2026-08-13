import { forwardRef } from 'react';
import { cn } from '../../lib/cn';
import type { CardProps, CardPadding, CardVariant } from './Card.types';

const variantStyles: Record<CardVariant, string> = {
  elevated: 'bg-bg-default border border-border-default shadow-z1',
  outlined: 'bg-bg-default border border-border-default',
  filled: 'bg-bg-container border border-transparent',
};

const paddingStyles: Record<CardPadding, string> = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-5',
  lg: 'p-6',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  {
    variant = 'outlined',
    padding = 'md',
    header,
    footer,
    interactive = false,
    className,
    children,
    dataTestId,
    ...rest
  },
  ref,
) {
  const hasSlots = header || footer;

  return (
    <div
      ref={ref}
      data-test-id={dataTestId}
      className={cn(
        'rounded-xl overflow-hidden',
        variantStyles[variant],
        interactive && 'transition-all hover:border-brand-500 hover:shadow-z2',
        // If header/footer used, padding is applied per-region, not on the wrapper.
        !hasSlots && paddingStyles[padding],
        className,
      )}
      {...rest}
    >
      {header && (
        <div className={cn('border-b border-border-subtle', paddingStyles[padding])}>{header}</div>
      )}
      {hasSlots ? <div className={paddingStyles[padding]}>{children}</div> : children}
      {footer && (
        <div className={cn('border-t border-border-subtle', paddingStyles[padding])}>{footer}</div>
      )}
    </div>
  );
});

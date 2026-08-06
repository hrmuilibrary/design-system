import { forwardRef, type Ref } from 'react';
import { cn } from '../../lib/cn';
import { Text } from '../Text';
import type { LinkProps } from './Link.types';

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  {
    variant = 'p-std',
    weight,
    color = 'brand',
    underline = 'hover',
    leftIcon,
    rightIcon,
    truncate,
    className,
    children,
    dataTestId,
    target,
    rel,
    ...rest
  },
  ref,
) {
  const anchorRest = {
    ...rest,
    target,
    rel: rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined),
  };

  return (
    <Text
      as="a"
      ref={ref as Ref<HTMLElement>}
      variant={variant}
      weight={weight}
      color={color}
      truncate={truncate}
      dataTestId={dataTestId}
      className={cn(
        'inline-flex items-center gap-1 rounded-sm outline-none transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-1',
        underline === 'always' && 'underline',
        underline === 'hover' && 'hover:underline',
        className,
      )}
      {...anchorRest}
    >
      {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </Text>
  );
});

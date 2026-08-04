import { forwardRef } from 'react';
import { cn } from '../../lib/cn';
import type { SkeletonAnimation, SkeletonProps, SkeletonVariant } from './Skeleton.types';

const variantStyles: Record<SkeletonVariant, string> = {
  text: 'h-[1em] mb-[0.4em] origin-[0%_55%] scale-y-[0.6] rounded-sm',
  circular: 'size-10 rounded-full',
  rectangular: 'h-4 w-full',
  rounded: 'h-4 w-full rounded-md',
};

const animationStyles: Record<SkeletonAnimation, string> = {
  pulse: 'animate-pulse',
  wave: [
    'relative overflow-hidden',
    "after:absolute after:inset-0 after:content-[''] after:-translate-x-full",
    'after:bg-gradient-to-r after:from-transparent after:via-white/60 after:to-transparent',
    'after:animate-skeleton-wave dark:after:via-white/10',
  ].join(' '),
  none: '',
};

function toCssSize(value?: number | string): string | undefined {
  if (value === undefined) {
    return undefined;
  }
  return typeof value === 'number' ? `${value}px` : value;
}

export const Skeleton = forwardRef<HTMLSpanElement, SkeletonProps>(function Skeleton(
  {
    variant = 'text',
    animation = 'pulse',
    width,
    height,
    count = 1,
    children,
    style,
    className,
    dataTestId,
    ...rest
  },
  ref,
) {
  const hasChildren = children != null;
  const safeCount = Math.max(1, count);

  const inlineStyle = {
    ...(width !== undefined ? { width: toCssSize(width) } : null),
    ...(height !== undefined ? { height: toCssSize(height) } : null),
    ...style,
  };

  const itemClassName = cn('block bg-bg-subtle leading-none', variantStyles[variant], animationStyles[animation]);

  if (hasChildren) {
    return (
      <span
        ref={ref}
        data-test-id={dataTestId}
        className={cn(itemClassName, 'inline-block h-auto w-auto scale-100', className)}
        style={inlineStyle}
        {...rest}
      >
        <span className="invisible inline-block" aria-hidden>
          {children}
        </span>
      </span>
    );
  }

  if (safeCount === 1) {
    return (
      <span
        ref={ref}
        data-test-id={dataTestId}
        className={cn(itemClassName, className)}
        style={inlineStyle}
        role="status"
        aria-label="Loading"
        {...rest}
      />
    );
  }

  return (
    <span ref={ref} data-test-id={dataTestId} className={cn('block', className)} {...rest}>
      {Array.from({ length: safeCount }, (_, index) => (
        <span
          key={index}
          className={itemClassName}
          style={inlineStyle}
          aria-hidden={index === 0 ? undefined : true}
          role={index === 0 ? 'status' : undefined}
          aria-label={index === 0 ? 'Loading' : undefined}
        />
      ))}
    </span>
  );
});

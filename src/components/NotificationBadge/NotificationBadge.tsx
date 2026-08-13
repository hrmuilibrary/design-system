import { forwardRef } from 'react';
import { cn } from '../../lib/cn';
import type {
  NotificationBadgeProps,
  NotificationBadgeSize,
  NotificationBadgeVariant,
} from './NotificationBadge.types';

const variantStyles: Record<NotificationBadgeVariant, string> = {
  brand: 'bg-brand-500 text-white',
  danger: 'bg-red-600 text-white',
  success: 'bg-green-600 text-white',
  warning: 'bg-yellow-600 text-gray-900 dark:text-gray-900',
  info: 'bg-blue-600 text-white',
};

// Avatar.tsx's `editButtonSize` table implements a sibling corner-overlay
// pattern (opposite corner, same idea) — no shared abstraction yet, but
// keep the two in sync if this pattern changes.
const countSize: Record<NotificationBadgeSize, string> = {
  lg: 'min-w-[18px] h-[18px] px-1 text-[11px]',
  sm: 'min-w-[14px] h-[14px] px-0.5 text-[10px]',
};

const dotSize: Record<NotificationBadgeSize, string> = {
  lg: 'h-2.5 w-2.5',
  sm: 'h-1.5 w-1.5',
};

function formatCount(count: number, max: number): string {
  if (count > max) return `${max}+`;
  if (count >= 1000) return `${(count / 1000).toFixed(0)}K`;
  return String(count);
}

// The badge <span> itself carries the ref/data-test-id/className/rest props —
// it's the component's real root, whether rendered standalone or overlaid on
// `children`. The wrapper <span> used in the overlay case is internal
// positioning plumbing only.
export const NotificationBadge = forwardRef<HTMLSpanElement, NotificationBadgeProps>(
  function NotificationBadge(
    {
      count = 0,
      max = 99,
      kind = 'count',
      size = 'lg',
      variant = 'danger',
      children,
      showZero = false,
      className,
      dataTestId,
      ...rest
    },
    ref,
  ) {
    const show = kind === 'dot' ? true : count > 0 || showZero;
    const hasChild = children !== undefined && children !== null && children !== false;

    const badge = !show ? null : (
      <span
        ref={ref}
        data-test-id={dataTestId}
        className={cn(
          'inline-flex items-center justify-center rounded-full font-semibold ring-2 ring-white',
          variantStyles[variant],
          kind === 'count' ? countSize[size] : dotSize[size],
          hasChild ? 'absolute -top-1 -right-1' : 'static',
          className,
        )}
        {...rest}
      >
        {kind === 'count' && formatCount(count, max)}
      </span>
    );

    if (!hasChild) return badge;

    return (
      <span className="relative inline-flex">
        {children}
        {badge}
      </span>
    );
  },
);

import { forwardRef } from 'react';
import { cn } from '../../lib/cn';
import type { IconTileProps, IconTileSize, IconTileTone } from './IconTile.types';

/* Background + icon-color pairs, legible on both light and dark surfaces.
 * Uses semantic bg-*-lighter aliases where available (they flip in dark
 * mode automatically via theme.css's `.dark` block). Purple and pink have
 * no semantic "lighter" alias yet, so they fall back to raw scale shades
 * with explicit `dark:` variants, same as the source design system.
 */
const toneStyles: Record<IconTileTone, { bg: string; icon: string }> = {
  brand: { bg: 'bg-bg-brand-lighter', icon: 'text-brand-700' },
  info: { bg: 'bg-bg-info-lighter', icon: 'text-blue-700' },
  gray: { bg: 'bg-bg-subtle', icon: 'text-fg-tertiary' },
  purple: {
    bg: 'bg-purple-50 dark:bg-purple-900/30',
    icon: 'text-purple-700 dark:text-purple-300',
  },
  pink: { bg: 'bg-pink-50 dark:bg-pink-900/30', icon: 'text-pink-700 dark:text-pink-300' },
  yellow: { bg: 'bg-bg-warning-lighter', icon: 'text-yellow-800' },
  success: { bg: 'bg-bg-success-lighter', icon: 'text-green-600' },
  warning: { bg: 'bg-bg-warning-lighter', icon: 'text-yellow-800' },
  danger: { bg: 'bg-bg-danger-lighter', icon: 'text-red-700' },
};

// Dimensions/icon size per step, plus the radius used for the `rounded`
// shape. The `circle` shape reuses the same box/icon sizing and just swaps
// in `rounded-full` instead — see the className below.
const sizeStyles: Record<IconTileSize, { box: string; icon: string; radius: string }> = {
  sm: { box: 'h-8 w-8', icon: 'h-4 w-4', radius: 'rounded-md' },
  md: { box: 'h-10 w-10', icon: 'h-5 w-5', radius: 'rounded-lg' },
  lg: { box: 'h-12 w-12', icon: 'h-6 w-6', radius: 'rounded-lg' },
  xl: { box: 'h-14 w-14', icon: 'h-7 w-7', radius: 'rounded-xl' },
};

export const IconTile = forwardRef<HTMLDivElement, IconTileProps>(function IconTile(
  { icon: Icon, tone = 'gray', size = 'md', shape = 'rounded', className, dataTestId, ...rest },
  ref,
) {
  const t = toneStyles[tone];
  const s = sizeStyles[size];

  return (
    <div
      ref={ref}
      data-test-id={dataTestId}
      aria-hidden={rest['aria-label'] ? undefined : true}
      className={cn(
        'inline-flex items-center justify-center shrink-0',
        s.box,
        shape === 'circle' ? 'rounded-full' : s.radius,
        t.bg,
        className,
      )}
      {...rest}
    >
      <Icon className={cn(s.icon, t.icon)} />
    </div>
  );
});

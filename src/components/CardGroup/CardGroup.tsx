import { forwardRef } from 'react';
import { cn } from '../../lib/cn';
import { Card } from '../Card';
import type { CardGroupProps, CardGroupTitleColor } from './CardGroup.types';

// Semantic "lighter" aliases where one exists; purple/pink fall back to raw
// scale shades with explicit dark: variants, same precedent as IconTile's
// tones (no semantic alias exists for those two yet).
const titleColorStyles: Record<CardGroupTitleColor, string> = {
  brand: 'bg-bg-brand-lighter text-brand-800',
  blue: 'bg-bg-info-lighter text-blue-800',
  purple: 'bg-purple-50 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200',
  pink: 'bg-pink-50 text-pink-800 dark:bg-pink-900/30 dark:text-pink-200',
  yellow: 'bg-bg-warning-lighter text-yellow-900',
  gray: 'bg-bg-subtle text-fg-secondary',
};

export const CardGroup = forwardRef<HTMLDivElement, CardGroupProps>(function CardGroup(
  { title, header, children, noDivider = false, className, dataTestId, ...rest },
  ref,
) {
  const placement = title?.placement ?? 'left';
  const isVertical = !!title && placement !== 'top';

  const titleRail = title && (
    <div
      className={cn(
        'flex shrink-0 items-center justify-center text-center text-label-md font-bold',
        isVertical
          ? cn('px-2 [writing-mode:vertical-rl]', placement === 'left' && 'rotate-180')
          : 'px-4 py-2',
        titleColorStyles[title.color ?? 'gray'],
      )}
    >
      {title.text}
    </div>
  );

  return (
    <Card
      ref={ref}
      dataTestId={dataTestId}
      variant="outlined"
      padding="none"
      className={className}
      {...rest}
    >
      <div className={cn('flex', isVertical ? (placement === 'right' ? 'flex-row-reverse' : 'flex-row') : 'flex-col')}>
        {titleRail}
        <div
          className={cn(
            'min-w-0 flex-1',
            !noDivider && '[&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-border-default',
          )}
        >
          {header}
          {children}
        </div>
      </div>
    </Card>
  );
});

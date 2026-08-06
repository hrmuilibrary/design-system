import { forwardRef } from 'react';
import { cn } from '../../lib/cn';
import type { DistributionBarProps, DistributionBarSize, DistributionColor } from './DistributionBar.types';

const colorStyles: Record<DistributionColor, string> = {
  brand: 'bg-brand-500',
  blue: 'bg-blue-500',
  purple: 'bg-purple-500',
  pink: 'bg-pink-500',
  yellow: 'bg-yellow-500',
  red: 'bg-red-500',
  gray: 'bg-gray-400',
};

const sizeStyles: Record<DistributionBarSize, string> = {
  sm: 'h-1',
  lg: 'h-2',
};

const defaultFormatValue = (value: number) => new Intl.NumberFormat().format(value);

export const DistributionBar = forwardRef<HTMLDivElement, DistributionBarProps>(function DistributionBar(
  {
    segments,
    hideLegend = false,
    formatValue = defaultFormatValue,
    size = 'lg',
    className,
    dataTestId,
    ...rest
  },
  ref,
) {
  const total = segments.reduce((sum, segment) => sum + segment.value, 0);

  return (
    <div ref={ref} data-test-id={dataTestId} className={cn('flex flex-col gap-3', className)} {...rest}>
      <div className={cn('flex w-full overflow-hidden rounded-full bg-bg-subtle', sizeStyles[size])}>
        {segments.map((segment, index) => {
          const percent = total > 0 ? (segment.value / total) * 100 : 0;
          return (
            <div
              key={index}
              style={{ flexBasis: `${percent}%` }}
              className={cn('transition-[flex-basis] duration-700 ease-out', colorStyles[segment.color])}
            />
          );
        })}
      </div>
      {!hideLegend && (
        <ul className="flex flex-col [&>li:not(:last-child)]:border-b [&>li:not(:last-child)]:border-border-default">
          {segments
            .filter((segment) => !segment.hideFromLegend)
            .map((segment, index) => (
              <li key={index} className="flex items-center justify-between gap-3 py-1.5">
                <span className="flex min-w-0 items-center gap-2">
                  <span className={cn('size-2 shrink-0 rounded-full', colorStyles[segment.color])} />
                  <span className="truncate text-p-sm text-fg-tertiary">{segment.label}</span>
                </span>
                <span className="shrink-0 text-p-sm text-fg-default tabular-nums">
                  {formatValue(segment.value)}
                  {segment.unit ? ` ${segment.unit}` : ''}
                </span>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
});

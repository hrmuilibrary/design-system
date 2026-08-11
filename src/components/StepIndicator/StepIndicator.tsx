import { forwardRef } from 'react';
import { CircleCheck, CircleX } from 'lucide-react';
import { cn } from '../../lib/cn';
import { isSameOptionValue } from '../../lib/optionValue';
import type {
  StepIndicatorItem,
  StepIndicatorMarker,
  StepIndicatorProps,
  StepIndicatorSize,
  StepIndicatorStatus,
} from './StepIndicator.types';

const markerBoxSize: Record<StepIndicatorSize, string> = {
  lg: 'size-9',
  sm: 'size-6',
};

const markerRowHeight: Record<StepIndicatorSize, string> = {
  lg: 'h-9',
  sm: 'h-6',
};

const markerBorderWidth: Record<StepIndicatorSize, string> = {
  lg: 'border-2',
  sm: 'border',
};

const markerTextSize: Record<StepIndicatorSize, string> = {
  lg: 'text-p-std',
  sm: 'text-p-xs',
};

const markerIconSize: Record<StepIndicatorSize, string> = {
  lg: 'size-5',
  sm: 'size-3.5',
};

const dotSize: Record<StepIndicatorSize, string> = {
  lg: 'size-3',
  sm: 'size-2',
};

const labelTextSize: Record<StepIndicatorSize, string> = {
  lg: 'text-p-std',
  sm: 'text-p-sm',
};

const descriptionTextSize: Record<StepIndicatorSize, string> = {
  lg: 'text-p-sm',
  sm: 'text-p-xs',
};

const markerStatusStyles: Record<StepIndicatorStatus, string> = {
  upcoming: 'bg-bg-default border-border-strong text-fg-tertiary',
  active: 'bg-bg-default border-brand-500 text-brand-700',
  completed: 'bg-brand-500 border-brand-500 text-fg-inverse',
  rejected: 'bg-red-700 border-red-800 text-fg-inverse',
};

// The halo is exactly `ring-4 ring-brand-40/80` — a token-exact match for
// the source's `rgba(202,231,185,.8)` (= --color-brand-40: #cae7b9). The
// danger halo's source value (#FFB5AB) has no matching token; ring-red-100
// is the closest (~1 shade off).
const haloStyles: Record<StepIndicatorStatus, string> = {
  upcoming: 'ring-4 ring-gray-100/80',
  active: 'ring-4 ring-brand-40/80',
  completed: 'ring-4 ring-brand-40/80',
  rejected: 'ring-4 ring-red-100/80',
};

function renderMarkerContent(
  marker: StepIndicatorMarker,
  status: StepIndicatorStatus,
  index: number,
  size: StepIndicatorSize,
) {
  if (status === 'completed') return <CircleCheck className={markerIconSize[size]} />;
  if (status === 'rejected') return <CircleX className={markerIconSize[size]} />;
  if (marker === 'number') return index + 1;
  if (marker === 'dot') {
    return (
      <span
        className={cn('rounded-full', dotSize[size], status === 'active' ? 'bg-brand-500' : 'bg-transparent')}
      />
    );
  }
  return null;
}

export const StepIndicator = forwardRef<HTMLOListElement, StepIndicatorProps>(function StepIndicator(
  {
    steps,
    activeValue,
    onStepSelect,
    marker = 'number',
    orientation = 'horizontal',
    size = 'lg',
    className,
    dataTestId,
    ...rest
  },
  ref,
) {
  const isVertical = orientation === 'vertical';

  const isCompleted = (step: StepIndicatorItem | undefined) => (step?.status ?? 'upcoming') === 'completed';

  return (
    <ol
      ref={ref}
      data-test-id={dataTestId}
      className={cn('flex', isVertical ? 'flex-col' : 'w-full items-start', className)}
      {...rest}
    >
      {steps.map((step, index) => {
        const status = step.status ?? 'upcoming';
        const isFirst = index === 0;
        const isLast = index === steps.length - 1;
        const leadingColored = !isFirst && isCompleted(steps[index - 1]);
        const trailingColored = !isLast && isCompleted(step);

        const markerNode = (
          <span
            className={cn(
              'relative z-10 inline-flex shrink-0 items-center justify-center rounded-full font-semibold transition-colors',
              markerBoxSize[size],
              markerBorderWidth[size],
              markerTextSize[size],
              markerStatusStyles[status],
              step.highlighted && haloStyles[status],
            )}
          >
            {renderMarkerContent(marker, status, index, size)}
          </span>
        );

        const content = (
          <div
            className={cn(
              'flex flex-col',
              isVertical ? 'gap-0.5 pb-6' : 'mt-2 items-center gap-0.5 text-center',
            )}
          >
            <span className={cn('font-medium text-fg-default', labelTextSize[size])}>{step.label}</span>
            {step.description && (
              <span className={cn('text-fg-secondary', descriptionTextSize[size])}>{step.description}</span>
            )}
          </div>
        );

        return (
          <li
            key={String(step.value)}
            aria-current={isSameOptionValue(step.value, activeValue) ? 'step' : undefined}
            className={cn('relative flex', isVertical ? 'flex-row gap-3' : 'flex-1 basis-0 min-w-0 flex-col')}
          >
            <div
              className={cn(
                'relative flex shrink-0',
                isVertical
                  ? 'w-9 flex-col items-center justify-center'
                  : cn('w-full items-center justify-center', markerRowHeight[size]),
              )}
            >
              {!isFirst && (
                <span
                  aria-hidden
                  className={cn(
                    'absolute',
                    isVertical
                      ? 'left-1/2 top-0 bottom-1/2 w-0.5 -translate-x-1/2'
                      : 'left-0 right-1/2 top-1/2 h-0.5 -translate-y-1/2',
                    leadingColored ? 'bg-brand-500' : 'bg-border-default',
                  )}
                />
              )}
              {!isLast && (
                <span
                  aria-hidden
                  className={cn(
                    'absolute',
                    isVertical
                      ? 'left-1/2 top-1/2 bottom-0 w-0.5 -translate-x-1/2'
                      : 'left-1/2 right-0 top-1/2 h-0.5 -translate-y-1/2',
                    trailingColored ? 'bg-brand-500' : 'bg-border-default',
                  )}
                />
              )}
              {onStepSelect ? (
                <button
                  type="button"
                  onClick={() => onStepSelect(step.value)}
                  aria-label={typeof step.label === 'string' ? step.label : undefined}
                  className="relative z-10 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2"
                >
                  {markerNode}
                </button>
              ) : (
                markerNode
              )}
            </div>
            {content}
          </li>
        );
      })}
    </ol>
  );
});

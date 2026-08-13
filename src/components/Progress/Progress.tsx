import { forwardRef } from 'react';
import { cn } from '../../lib/cn';
import type { ProgressProps, ProgressSize } from './Progress.types';

const circleDimension: Record<ProgressSize, number> = {
  sm: 29,
  lg: 45,
};

const circleStrokeWidth: Record<ProgressSize, number> = {
  sm: 2,
  lg: 4,
};

const linearTrackHeight: Record<ProgressSize, string> = {
  sm: 'h-1',
  lg: 'h-2',
};

const labelTextSize: Record<ProgressSize, string> = {
  sm: 'text-p-xs',
  lg: 'text-p-sm',
};

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(function Progress(
  {
    variant = 'linear',
    size = 'lg',
    percent = 0,
    stepCount,
    currentStep,
    hideLabel = false,
    dimension,
    loop = false,
    className,
    dataTestId,
    ...rest
  },
  ref,
) {
  const rawPercent = stepCount && currentStep ? (currentStep / stepCount) * 100 : percent;
  const clampedPercent = Math.min(100, Math.max(0, rawPercent));
  const label = stepCount ? `${currentStep}/${stepCount}` : `${Math.round(clampedPercent)}%`;

  if (variant === 'circular') {
    const dim = dimension ?? circleDimension[size];
    const r = dim - 5;
    const circumference = 2 * r * Math.PI;
    const strokeWidth = circleStrokeWidth[size];

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={loop ? undefined : clampedPercent}
        aria-valuetext={loop ? undefined : label}
        data-test-id={dataTestId}
        className={cn('relative inline-flex items-center justify-center', className)}
        style={{ width: dim * 2, height: dim * 2 }}
        {...rest}
      >
        <svg
          width={dim * 2}
          height={dim * 2}
          viewBox={`0 0 ${dim * 2} ${dim * 2}`}
          className={cn('-rotate-90', loop && 'animate-spin')}
        >
          <circle
            cx={dim}
            cy={dim}
            r={r}
            strokeWidth={strokeWidth}
            className="fill-none stroke-bg-subtle"
          />
          <circle
            cx={dim}
            cy={dim}
            r={r}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            className="fill-none stroke-brand-500 transition-[stroke-dashoffset] duration-300 ease-linear"
            style={{
              strokeDasharray: `${circumference}px`,
              strokeDashoffset: loop
                ? `${circumference * 0.75}px`
                : `${circumference - (circumference * clampedPercent) / 100}px`,
            }}
          />
        </svg>
        {!hideLabel && !loop && (
          <span
            className={cn('absolute text-fg-secondary', labelTextSize[size])}
            data-test-id={dataTestId ? `${dataTestId}-text` : undefined}
          >
            {label}
          </span>
        )}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={clampedPercent}
      aria-valuetext={label}
      data-test-id={dataTestId}
      className={cn('flex w-full items-center gap-2', className)}
      {...rest}
    >
      <div
        className={cn('w-full overflow-hidden rounded-full bg-bg-subtle', linearTrackHeight[size])}
      >
        <div
          className="h-full rounded-full bg-brand-500 transition-all duration-300 ease-linear"
          style={{ width: `${clampedPercent}%` }}
        />
      </div>
      {!hideLabel && (
        <span
          className={cn('shrink-0 text-fg-secondary', labelTextSize[size])}
          data-test-id={dataTestId ? `${dataTestId}-text` : undefined}
        >
          {label}
        </span>
      )}
    </div>
  );
});

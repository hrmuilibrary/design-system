import { forwardRef, useId } from 'react';
import { cn } from '../../lib/cn';
import type { SwitchProps, SwitchSize } from './Switch.types';

const trackSize: Record<SwitchSize, string> = {
  md: 'h-6 w-11',
  sm: 'h-5 w-9',
};

const thumbSize: Record<SwitchSize, string> = {
  md: 'h-5 w-5 peer-checked:translate-x-5',
  sm: 'h-4 w-4 peer-checked:translate-x-4',
};

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  {
    size = 'md',
    label,
    description,
    labelPosition = 'right',
    id,
    disabled,
    checked,
    defaultChecked,
    className,
    dataTestId,
    ...rest
  },
  ref,
) {
  const reactId = useId();
  const inputId = id ?? reactId;

  const control = (
    <span className="relative inline-flex shrink-0">
      <input
        ref={ref}
        id={inputId}
        type="checkbox"
        role="switch"
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        className="peer sr-only"
        {...rest}
      />
      <span
        className={cn(
          'rounded-full bg-gray-300 dark:bg-gray-700 transition-colors',
          trackSize[size],
          'peer-checked:bg-brand-500 dark:peer-checked:bg-brand-500',
          'peer-focus-visible:ring-2 peer-focus-visible:ring-brand-300 peer-focus-visible:ring-offset-2',
          disabled && '!bg-bg-subtle',
        )}
      />
      <span
        className={cn(
          'absolute top-0.5 left-0.5 rounded-full bg-white dark:bg-white shadow-z1 transition-transform',
          thumbSize[size],
        )}
      />
    </span>
  );

  if (!label && !description) {
    return (
      <label
        htmlFor={inputId}
        data-test-id={dataTestId}
        className={cn(
          'inline-flex',
          disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer',
          className,
        )}
      >
        {control}
      </label>
    );
  }

  return (
    <label
      htmlFor={inputId}
      data-test-id={dataTestId}
      className={cn(
        'inline-flex items-center gap-3',
        labelPosition === 'left' && 'flex-row-reverse justify-end',
        disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer',
        className,
      )}
    >
      {control}
      <span className="flex flex-col gap-0.5">
        {label && (
          <span className="text-p-std font-medium text-fg-default leading-tight">{label}</span>
        )}
        {description && (
          <span className="text-p-sm text-fg-secondary leading-snug">{description}</span>
        )}
      </span>
    </label>
  );
});

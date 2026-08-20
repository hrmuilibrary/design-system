import { forwardRef, useId } from 'react';
import { Check, Minus } from 'lucide-react';
import { cn } from '../../lib/cn';
import type { CheckboxProps, CheckboxSize } from './Checkbox.types';

const boxSize: Record<CheckboxSize, string> = {
  md: 'h-5 w-5 rounded-sm',
  sm: 'h-4 w-4 rounded-sm',
};

const iconSize: Record<CheckboxSize, string> = {
  md: 'h-3.5 w-3.5',
  sm: 'h-3 w-3',
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  {
    size = 'md',
    label,
    description,
    errorText,
    required,
    indeterminate = false,
    error = false,
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
  const hasError = error || !!errorText;
  const describedBy = errorText ? `${inputId}-error` : undefined;

  return (
    <label
      htmlFor={inputId}
      data-test-id={dataTestId}
      className={cn(
        'inline-flex items-center gap-2.5 group/checkbox',
        disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer',
        className,
      )}
    >
      <span className="relative inline-flex shrink-0 items-center justify-center mt-0.5">
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          required={required}
          className="peer sr-only"
          aria-invalid={hasError || undefined}
          aria-required={required || undefined}
          aria-describedby={describedBy}
          aria-checked={indeterminate ? 'mixed' : undefined}
          {...rest}
        />
        <span
          className={cn(
            'flex items-center justify-center border transition-colors',
            boxSize[size],
            // base (not checked, not indeterminate)
            !indeterminate && 'bg-bg-default',
            // border color
            hasError
              ? 'border-red-600'
              : indeterminate
                ? 'border-brand-500'
                : 'border-border-strong',
            // hover
            !disabled &&
              !indeterminate &&
              (hasError ? 'peer-hover:border-red-700' : 'peer-hover:border-fg-tertiary'),
            // focus ring
            'peer-focus-visible:ring-2 peer-focus-visible:ring-brand-300 peer-focus-visible:ring-offset-1',
            // checked (controlled or uncontrolled via peer)
            !indeterminate && 'peer-checked:bg-brand-500 peer-checked:border-brand-500',
            // indeterminate wins
            indeterminate && 'bg-brand-500',
            // disabled overrides
            disabled &&
              !indeterminate &&
              'peer-checked:bg-bg-subtle peer-checked:border-border-strong',
            // SVG visibility — toggled via peer-checked on the sibling native input.
            !indeterminate &&
              '[&_svg]:opacity-0 peer-checked:[&_svg]:opacity-100 [&_svg]:transition-opacity',
          )}
        >
          {indeterminate ? (
            <Minus className={cn(iconSize[size], 'text-white')} strokeWidth={3} aria-hidden />
          ) : (
            <Check className={cn(iconSize[size], 'text-white')} strokeWidth={3} aria-hidden />
          )}
        </span>
      </span>
      {(label || description || errorText) && (
        <span className="flex flex-col gap-0.5">
          {label && (
            <span className="text-p-std font-medium text-fg-default leading-tight inline-flex items-center gap-1">
              {label}
              {required && (
                <span className="text-red-600" aria-hidden>
                  *
                </span>
              )}
            </span>
          )}
          {errorText ? (
            <span id={`${inputId}-error`} className="text-p-sm text-red-700 leading-snug">
              {errorText}
            </span>
          ) : (
            description && (
              <span className="text-p-sm text-fg-secondary leading-snug">{description}</span>
            )
          )}
        </span>
      )}
    </label>
  );
});

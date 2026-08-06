import { forwardRef, useId, useState, type ChangeEvent } from 'react';
import { cn } from '../../lib/cn';
import type { TextAreaProps } from './TextArea.types';

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
  {
    label,
    labelAddons,
    helperText,
    errorText,
    error = false,
    id,
    disabled,
    required,
    maxLength,
    showCount = false,
    className,
    wrapperClassName,
    value,
    defaultValue,
    rows = 4,
    dataTestId,
    onChange,
    ...rest
  },
  ref,
) {
  const reactId = useId();
  const inputId = id ?? reactId;
  const hasError = error || !!errorText;
  const describedBy = errorText ? `${inputId}-error` : helperText ? `${inputId}-help` : undefined;

  const isControlled = value !== undefined;
  const countsEnabled = showCount && !!maxLength;
  // Uncontrolled length has to be tracked in state and updated on every
  // keystroke — deriving it from `defaultValue` (as before) only reflects
  // the initial render and never moves after that.
  const [uncontrolledLength, setUncontrolledLength] = useState(() => String(defaultValue ?? '').length);
  const currentLength = isControlled ? String(value).length : uncontrolledLength;

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (!isControlled && countsEnabled) setUncontrolledLength(event.target.value.length);
    onChange?.(event);
  };

  return (
    <div className={cn('flex flex-col gap-1.5 w-full', wrapperClassName)} data-test-id={dataTestId}>
      {(label || labelAddons) && (
        <div className="flex items-center gap-1.5">
          {label && (
            <label
              htmlFor={inputId}
              className="text-p-std font-medium text-fg-default inline-flex items-center gap-1"
            >
              {label}
              {required && (
                <span className="text-red-600" aria-hidden>
                  *
                </span>
              )}
            </label>
          )}
          {labelAddons && <span className="inline-flex items-center gap-1">{labelAddons}</span>}
        </div>
      )}
      <textarea
        ref={ref}
        id={inputId}
        disabled={disabled}
        required={required}
        maxLength={maxLength}
        rows={rows}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        aria-invalid={hasError || undefined}
        aria-describedby={describedBy}
        className={cn(
          'w-full px-3 py-2.5 rounded-lg border bg-bg-default text-p-std text-fg-default placeholder:text-fg-tertiary outline-none transition-colors resize-y',
          hasError ? 'border-red-600' : 'border-border-default',
          !disabled && !hasError && 'hover:border-border-strong',
          'focus:ring-2',
          hasError ? 'focus:ring-red-300 focus:border-red-600' : 'focus:ring-brand-300 focus:border-brand-500',
          disabled && 'bg-bg-container border-border-default cursor-not-allowed',
          className,
        )}
        {...rest}
      />
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          {errorText ? (
            <p id={`${inputId}-error`} className="text-p-sm text-red-700">
              {errorText}
            </p>
          ) : helperText ? (
            <p id={`${inputId}-help`} className="text-p-sm text-fg-secondary">
              {helperText}
            </p>
          ) : null}
        </div>
        {countsEnabled && (
          <p className="text-p-sm text-fg-tertiary tabular-nums shrink-0">
            {currentLength}/{maxLength}
          </p>
        )}
      </div>
    </div>
  );
});

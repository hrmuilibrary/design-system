import { createContext, forwardRef, useContext, useId, type ChangeEvent } from 'react';
import { cn } from '../../lib/cn';
import { isSameOptionValue } from '../../lib/optionValue';
import type { RadioGroupProps, RadioProps, RadioSize, RadioValue } from './Radio.types';

interface RadioGroupContextValue {
  name: string;
  value?: RadioValue;
  defaultValue?: RadioValue;
  onChange?: (value: RadioValue) => void;
  disabled?: boolean;
  size: RadioSize;
  error?: boolean;
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(function RadioGroup(
  {
    name,
    label,
    value,
    defaultValue,
    onChange,
    disabled,
    required,
    error,
    errorText,
    helperText,
    size = 'md',
    orientation = 'vertical',
    children,
    className,
    wrapperClassName,
    dataTestId,
  },
  ref,
) {
  const reactName = useId();
  const groupName = name ?? reactName;
  const labelId = `${reactName}-label`;
  const hasError = error || !!errorText;
  const describedBy = errorText
    ? `${reactName}-error`
    : helperText
      ? `${reactName}-help`
      : undefined;

  const groupEl = (
    <div
      ref={ref}
      role="radiogroup"
      aria-labelledby={label ? labelId : undefined}
      aria-required={required || undefined}
      aria-invalid={hasError || undefined}
      aria-describedby={describedBy}
      data-test-id={dataTestId}
      className={cn(
        'flex gap-3',
        orientation === 'vertical' ? 'flex-col' : 'flex-row flex-wrap items-center gap-4',
        className,
      )}
    >
      {children}
    </div>
  );

  return (
    <RadioGroupContext.Provider
      value={{ name: groupName, value, defaultValue, onChange, disabled, size, error: hasError }}
    >
      {label || errorText || helperText ? (
        <div className={cn('flex flex-col gap-1.5', wrapperClassName)}>
          {label && (
            <span
              id={labelId}
              className="text-p-std font-medium text-fg-default inline-flex items-center gap-1"
            >
              {label}
              {required && (
                <span className="text-red-600" aria-hidden>
                  *
                </span>
              )}
            </span>
          )}
          {groupEl}
          {errorText ? (
            <p id={`${reactName}-error`} className="text-p-sm text-red-700">
              {errorText}
            </p>
          ) : helperText ? (
            <p id={`${reactName}-help`} className="text-p-sm text-fg-secondary">
              {helperText}
            </p>
          ) : null}
        </div>
      ) : (
        groupEl
      )}
    </RadioGroupContext.Provider>
  );
});

const outerSize: Record<RadioSize, string> = {
  md: 'h-5 w-5',
  sm: 'h-4 w-4',
};

const innerSize: Record<RadioSize, string> = {
  md: 'h-2 w-2',
  sm: 'h-1.5 w-1.5',
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  {
    value,
    size,
    label,
    description,
    error = false,
    id,
    disabled,
    checked,
    defaultChecked,
    onChange,
    className,
    dataTestId,
    ...rest
  },
  ref,
) {
  const group = useContext(RadioGroupContext);
  const reactId = useId();
  const inputId = id ?? reactId;
  const effectiveSize = size ?? group?.size ?? 'md';
  const effectiveDisabled = disabled ?? group?.disabled;
  const effectiveError = error || !!group?.error;

  const inGroup = group !== null;
  const groupChecked =
    inGroup && group.value !== undefined ? isSameOptionValue(group.value, value) : undefined;
  const groupDefaultChecked =
    inGroup && group.defaultValue !== undefined
      ? isSameOptionValue(group.defaultValue, value)
      : undefined;

  const isChecked = inGroup ? groupChecked : checked;
  const isDefaultChecked = inGroup ? groupDefaultChecked : defaultChecked;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    group?.onChange?.(value);
    onChange?.(e);
  };

  return (
    <label
      htmlFor={inputId}
      data-test-id={dataTestId}
      className={cn(
        'inline-flex items-start gap-2.5',
        effectiveDisabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer',
        className,
      )}
    >
      <span className="relative inline-flex shrink-0 items-center justify-center mt-0.5">
        <input
          ref={ref}
          id={inputId}
          type="radio"
          name={group?.name}
          value={String(value)}
          checked={isChecked}
          defaultChecked={isDefaultChecked}
          disabled={effectiveDisabled}
          onChange={handleChange}
          className="peer sr-only"
          aria-invalid={effectiveError || undefined}
          {...rest}
        />
        <span
          className={cn(
            'flex items-center justify-center rounded-full border bg-bg-default transition-colors',
            outerSize[effectiveSize],
            effectiveError ? 'border-red-600' : 'border-border-strong',
            !effectiveDisabled && !effectiveError && 'peer-hover:border-fg-tertiary',
            'peer-focus-visible:ring-2 peer-focus-visible:ring-brand-300 peer-focus-visible:ring-offset-1',
            'peer-checked:border-brand-500',
            effectiveDisabled && '!bg-bg-subtle !border-border-default',
            '[&>span]:opacity-0 peer-checked:[&>span]:opacity-100',
          )}
        >
          <span
            className={cn(
              'rounded-full bg-brand-500 transition-opacity',
              innerSize[effectiveSize],
              effectiveDisabled && '!bg-fg-disabled',
            )}
          />
        </span>
      </span>
      {(label || description) && (
        <span className="flex flex-col gap-0.5">
          {label && (
            <span className="text-p-std font-medium text-fg-default leading-tight">{label}</span>
          )}
          {description && (
            <span className="text-p-sm text-fg-secondary leading-snug">{description}</span>
          )}
        </span>
      )}
    </label>
  );
});

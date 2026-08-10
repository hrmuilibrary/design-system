import { createContext, forwardRef, useContext, useId, type ChangeEvent } from 'react';
import { cn } from '../../lib/cn';
import type { RadioGroupProps, RadioProps, RadioSize } from './Radio.types';

interface RadioGroupContextValue {
  name: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  size: RadioSize;
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
    size = 'md',
    orientation = 'vertical',
    children,
    className,
    dataTestId,
  },
  ref,
) {
  const reactName = useId();
  const groupName = name ?? reactName;
  const labelId = `${reactName}-label`;

  const groupEl = (
    <div
      ref={ref}
      role="radiogroup"
      aria-labelledby={label ? labelId : undefined}
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
    <RadioGroupContext.Provider value={{ name: groupName, value, defaultValue, onChange, disabled, size }}>
      {label ? (
        <div className="flex flex-col gap-1.5">
          <span id={labelId} className="text-p-std font-medium text-fg-default inline-flex">
            {label}
          </span>
          {groupEl}
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

  const inGroup = group !== null;
  const groupChecked = inGroup && group.value !== undefined ? group.value === value : undefined;
  const groupDefaultChecked =
    inGroup && group.defaultValue !== undefined ? group.defaultValue === value : undefined;

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
          value={value}
          checked={isChecked}
          defaultChecked={isDefaultChecked}
          disabled={effectiveDisabled}
          onChange={handleChange}
          className="peer sr-only"
          aria-invalid={error || undefined}
          {...rest}
        />
        <span
          className={cn(
            'flex items-center justify-center rounded-full border bg-bg-default transition-colors',
            outerSize[effectiveSize],
            error ? 'border-red-600' : 'border-border-strong',
            !effectiveDisabled && !error && 'peer-hover:border-fg-tertiary',
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

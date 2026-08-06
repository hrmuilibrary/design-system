import { forwardRef, useEffect, useState, type ChangeEvent } from 'react';
import { Minus, Plus } from 'lucide-react';
import { cn } from '../../lib/cn';
import { Input } from '../Input';
import type { CounterProps } from './Counter.types';

const addonButtonClass =
  'inline-flex items-center justify-center text-fg-secondary transition-colors hover:text-fg-default disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none';

export const Counter = forwardRef<HTMLInputElement, CounterProps>(function Counter(
  {
    value,
    defaultValue = 0,
    onValueChange,
    min = 0,
    max = Number.MAX_SAFE_INTEGER,
    step = 1,
    size = 'md',
    label,
    helperText,
    errorText,
    error,
    disabled,
    className,
    wrapperClassName,
    dataTestId,
    ...rest
  },
  ref,
) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const committedValue = isControlled ? value : internalValue;

  // A plain string draft, separate from the committed numeric value — so
  // clearing the field doesn't immediately snap back to a number, and an
  // in-progress keystroke (e.g. a lone "-") isn't clobbered by clamping on
  // every change. Clamping happens once, on blur.
  const [draft, setDraft] = useState(String(committedValue));

  useEffect(() => {
    setDraft(String(committedValue));
  }, [committedValue]);

  const commit = (next: number) => {
    const clamped = Math.min(max, Math.max(min, next));
    if (!isControlled) setInternalValue(clamped);
    onValueChange?.(clamped);
    return clamped;
  };

  const increase = () => commit(committedValue + step);
  const decrease = () => commit(committedValue - step);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDraft(event.target.value);
  };

  const handleBlur = () => {
    const parsed = Number.parseInt(draft, 10);
    if (Number.isNaN(parsed)) {
      setDraft(String(committedValue));
      return;
    }
    setDraft(String(commit(parsed)));
  };

  return (
    <Input
      ref={ref}
      type="number"
      min={min}
      max={max}
      step={step}
      size={size}
      label={label}
      helperText={helperText}
      errorText={errorText}
      error={error}
      disabled={disabled}
      dataTestId={dataTestId}
      wrapperClassName={cn('max-w-[140px]', wrapperClassName)}
      value={draft}
      onChange={handleChange}
      onBlur={handleBlur}
      leftAddon={
        <button
          type="button"
          disabled={disabled || committedValue <= min}
          onClick={decrease}
          aria-label="Decrease"
          className={addonButtonClass}
        >
          <Minus className="size-4" />
        </button>
      }
      rightAddon={
        <button
          type="button"
          disabled={disabled || committedValue >= max}
          onClick={increase}
          aria-label="Increase"
          className={addonButtonClass}
        >
          <Plus className="size-4" />
        </button>
      }
      className={cn(
        'text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
        className,
      )}
      {...rest}
    />
  );
});

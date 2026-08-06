import { forwardRef, useEffect, useId, useRef, useState, type KeyboardEvent } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '../../lib/cn';
import type { SelectProps, SelectSize } from './Select.types';

const sizeStyles: Record<SelectSize, string> = {
  lg: 'h-12 text-p-md px-3.5',
  md: 'h-10 text-p-std px-3',
  sm: 'h-8 text-p-sm px-2.5',
};

export const Select = forwardRef<HTMLButtonElement, SelectProps>(function Select(
  {
    options,
    value,
    defaultValue,
    onChange,
    placeholder = 'Select…',
    label,
    labelAddons,
    helperText,
    errorText,
    error = false,
    size = 'md',
    disabled,
    id,
    className,
    wrapperClassName,
    dataTestId,
  },
  ref,
) {
  const reactId = useId();
  const triggerId = id ?? reactId;
  const [open, setOpen] = useState(false);
  const [internal, setInternal] = useState<string | undefined>(defaultValue);
  const isControlled = value !== undefined;
  const selected = isControlled ? value : internal;
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const hasError = error || !!errorText;

  const selectedOption = options.find((o) => o.value === selected);

  const pick = (val: string) => {
    if (!isControlled) setInternal(val);
    onChange?.(val);
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  useEffect(() => {
    if (open) {
      const idx = options.findIndex((o) => o.value === selected);
      setActiveIndex(idx >= 0 ? idx : 0);
    } else {
      setActiveIndex(-1);
    }
  }, [open, selected, options]);

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        return;
      }
      if (e.key === 'Enter' || e.key === ' ') {
        const opt = options[activeIndex];
        if (opt && !opt.disabled) pick(opt.value);
        return;
      }
      const dir = e.key === 'ArrowDown' ? 1 : -1;
      let next = activeIndex;
      for (let i = 0; i < options.length; i++) {
        next = (next + dir + options.length) % options.length;
        if (!options[next]?.disabled) break;
      }
      setActiveIndex(next);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  return (
    <div
      ref={containerRef}
      data-test-id={dataTestId}
      className={cn('flex flex-col gap-1.5 w-full relative', wrapperClassName)}
    >
      {(label || labelAddons) && (
        <div className="flex items-center gap-1.5">
          {label && (
            <label htmlFor={triggerId} className="text-p-std font-medium text-fg-default inline-flex">
              {label}
            </label>
          )}
          {labelAddons && <span className="inline-flex items-center gap-1">{labelAddons}</span>}
        </div>
      )}
      <button
        ref={ref}
        id={triggerId}
        type="button"
        disabled={disabled}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onKeyDown}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-invalid={hasError || undefined}
        className={cn(
          'inline-flex items-center justify-between w-full rounded-lg border bg-bg-default transition-colors outline-none',
          'text-left',
          hasError ? 'border-red-600' : 'border-border-default',
          !disabled && !hasError && 'hover:border-border-strong',
          'focus-visible:ring-2',
          hasError
            ? 'focus-visible:ring-red-300 focus-visible:border-red-600'
            : 'focus-visible:ring-brand-300 focus-visible:border-brand-500',
          disabled && 'bg-bg-container border-border-default cursor-not-allowed text-fg-disabled',
          sizeStyles[size],
          className,
        )}
      >
        <span className={cn('truncate', !selectedOption && 'text-fg-tertiary')}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={cn('h-4 w-4 ml-2 shrink-0 text-fg-secondary transition-transform', open && 'rotate-180')}
          aria-hidden
        />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute left-0 right-0 top-full mt-1 max-h-60 overflow-y-auto rounded-lg border border-border-default bg-bg-default shadow-z4 z-50 py-1"
        >
          {options.map((opt, i) => {
            const isSel = opt.value === selected;
            const isActive = i === activeIndex;
            return (
              <li
                key={opt.value}
                role="option"
                aria-selected={isSel}
                aria-disabled={opt.disabled || undefined}
                onMouseEnter={() => !opt.disabled && setActiveIndex(i)}
                onClick={() => !opt.disabled && pick(opt.value)}
                className={cn(
                  'flex items-center justify-between gap-2 px-3 py-2 text-p-std cursor-pointer select-none',
                  opt.disabled && 'opacity-50 cursor-not-allowed',
                  isActive && !opt.disabled && 'bg-bg-subtle',
                  isSel && 'font-medium',
                )}
              >
                <span className="truncate">{opt.label}</span>
                {isSel && <Check className="h-4 w-4 text-brand-500 shrink-0" />}
              </li>
            );
          })}
        </ul>
      )}
      {errorText ? (
        <p className="text-p-sm text-red-700">{errorText}</p>
      ) : helperText ? (
        <p className="text-p-sm text-fg-secondary">{helperText}</p>
      ) : null}
    </div>
  );
});

import {
  forwardRef,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  Fragment,
  type KeyboardEvent,
} from 'react';
import { ChevronDown, Check, Loader2, Search } from 'lucide-react';
import { cn } from '../../lib/cn';
import { mergeRefs } from '../../lib/mergeRefs';
import { isSameOptionValue } from '../../lib/optionValue';
import type { SelectOption, SelectProps, SelectSize } from './Select.types';
import type { OptionValue } from '../../types';

const sizeStyles: Record<SelectSize, string> = {
  lg: 'h-12 text-p-md px-3.5',
  md: 'h-10 text-p-std px-3',
  sm: 'h-8 text-p-sm px-2.5',
};

// Shared sizing so any icon a consumer passes (whatever its native size) renders
// consistently next to the 16px Check mark and other icon slots.
const ICON_SVG_SIZE = '[&_svg]:h-4 [&_svg]:w-4';
const ICON_SLOT = cn('shrink-0 flex items-center justify-center', ICON_SVG_SIZE);

function firstEnabledIndex(list: SelectOption[]) {
  return list.findIndex((o) => !o.disabled);
}

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
    required = false,
    loading = false,
    searchable = false,
    searchPlaceholder = 'Search…',
    emptyText = 'No results',
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
  const listId = `${triggerId}-listbox`;
  const [open, setOpen] = useState(false);
  const [internal, setInternal] = useState<OptionValue | undefined>(defaultValue);
  const isControlled = value !== undefined;
  const selected = isControlled ? value : internal;
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [query, setQuery] = useState('');
  const hasError = error || !!errorText;
  const describedBy = errorText
    ? `${triggerId}-error`
    : helperText
      ? `${triggerId}-help`
      : undefined;

  const selectedOption = options.find((o) => isSameOptionValue(o.value, selected));

  // Gated on the full `options` array (not `visibleOptions`) so the reserved
  // column doesn't appear/disappear and reflow the list while searching.
  const anyOptionHasIcon = useMemo(() => options.some((o) => o.icon != null), [options]);

  const visibleOptions = useMemo(() => {
    const q = searchable ? query.trim().toLowerCase() : '';
    if (!q) return options;
    return options.filter((o) => {
      const haystack =
        o.searchText ?? (typeof o.label === 'string' ? o.label : undefined) ?? String(o.value);
      return haystack.toLowerCase().includes(q);
    });
  }, [options, query, searchable]);

  const pick = (val: OptionValue) => {
    if (!isControlled) setInternal(val);
    onChange?.(val);
    setOpen(false);
    if (searchable) buttonRef.current?.focus();
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
    if (!open) {
      setActiveIndex(-1);
      setQuery('');
      return;
    }
    const selIdx = visibleOptions.findIndex((o) => isSameOptionValue(o.value, selected));
    setActiveIndex(
      selIdx >= 0 && !visibleOptions[selIdx]?.disabled ? selIdx : firstEnabledIndex(visibleOptions),
    );
  }, [open, selected, visibleOptions]);

  useEffect(() => {
    if (open && searchable) searchRef.current?.focus();
  }, [open, searchable]);

  useEffect(() => {
    if (loading) setOpen(false);
  }, [loading]);

  const moveActive = (dir: 1 | -1) => {
    const n = visibleOptions.length;
    if (n === 0) return;
    let next = activeIndex < 0 ? (dir === 1 ? -1 : 0) : activeIndex;
    for (let i = 0; i < n; i++) {
      next = (next + dir + n) % n;
      if (!visibleOptions[next]?.disabled) break;
    }
    setActiveIndex(next);
  };

  const commitActive = () => {
    const opt = visibleOptions[activeIndex];
    if (opt && !opt.disabled) pick(opt.value);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        return;
      }
      if (e.key === 'Enter' || e.key === ' ') {
        commitActive();
        return;
      }
      moveActive(e.key === 'ArrowDown' ? 1 : -1);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  const onSearchKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      moveActive(e.key === 'ArrowDown' ? 1 : -1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      commitActive();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setOpen(false);
      buttonRef.current?.focus();
    } else if (e.key === 'Tab') {
      buttonRef.current?.focus();
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
            <label
              htmlFor={triggerId}
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
      <button
        ref={mergeRefs(ref, buttonRef)}
        id={triggerId}
        type="button"
        disabled={disabled}
        onClick={() => {
          if (disabled || loading) return;
          setOpen((o) => !o);
        }}
        onKeyDown={onKeyDown}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-invalid={hasError || undefined}
        aria-required={required || undefined}
        aria-busy={loading || undefined}
        aria-disabled={loading || undefined}
        aria-describedby={describedBy}
        aria-controls={open && visibleOptions.length > 0 ? listId : undefined}
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
          loading && 'cursor-wait',
          sizeStyles[size],
          className,
        )}
      >
        <span className="flex items-center gap-1.5 min-w-0">
          {anyOptionHasIcon && selectedOption?.icon && (
            <span className={ICON_SLOT}>{selectedOption.icon}</span>
          )}
          <span className={cn('truncate', !selectedOption && 'text-fg-tertiary')}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </span>
        {loading ? (
          <Loader2 className="h-4 w-4 ml-2 shrink-0 text-fg-secondary animate-spin" aria-hidden />
        ) : (
          <ChevronDown
            className={cn(
              'h-4 w-4 ml-2 shrink-0 text-fg-secondary transition-transform',
              open && 'rotate-180',
            )}
            aria-hidden
          />
        )}
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-full mt-1 rounded-lg border border-border-default bg-bg-default shadow-z4 z-50 overflow-hidden">
          {searchable && (
            <div className="flex items-center gap-2 px-3 py-2 border-b border-border-default">
              <Search className="h-3.5 w-3.5 shrink-0 text-fg-tertiary" aria-hidden />
              <input
                ref={searchRef}
                type="text"
                role="combobox"
                aria-expanded
                aria-controls={visibleOptions.length > 0 ? listId : undefined}
                aria-autocomplete="list"
                aria-activedescendant={
                  activeIndex >= 0 ? `${listId}-opt-${activeIndex}` : undefined
                }
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onSearchKeyDown}
                placeholder={searchPlaceholder}
                className="w-full bg-transparent outline-none text-p-std text-fg-default placeholder:text-fg-tertiary"
              />
            </div>
          )}
          {visibleOptions.length === 0 ? (
            <p className="px-3 py-6 text-center text-p-sm text-fg-secondary">{emptyText}</p>
          ) : (
            <ul id={listId} role="listbox" className="max-h-60 overflow-y-auto py-1">
              {visibleOptions.map((opt, i) => {
                const isSel = isSameOptionValue(opt.value, selected);
                const isActive = i === activeIndex;
                const showGroupHeader = !!opt.group && opt.group !== visibleOptions[i - 1]?.group;
                return (
                  <Fragment key={String(opt.value)}>
                    {showGroupHeader && (
                      <li
                        role="presentation"
                        className="px-3 pt-2 pb-1 text-label-sm font-medium uppercase tracking-wide text-fg-tertiary select-none"
                      >
                        {opt.group}
                      </li>
                    )}
                    <li
                      id={`${listId}-opt-${i}`}
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
                      <span className="flex items-center gap-2 min-w-0">
                        {anyOptionHasIcon && (
                          // Reserved only when the array actually uses icons, so
                          // icon-less Selects keep their original row width — see
                          // MultiSelect.tsx's per-row conditional-avatar approach
                          // for contrast (that one doesn't guarantee alignment;
                          // this one does, but only within an icon-using Select).
                          <span className={cn(ICON_SLOT, 'w-4')}>{opt.icon}</span>
                        )}
                        <span className="truncate">{opt.label}</span>
                      </span>
                      {(opt.rightIcon || isSel) && (
                        <span className={cn('flex items-center gap-1.5 shrink-0', ICON_SVG_SIZE)}>
                          {opt.rightIcon}
                          {isSel && <Check className="h-4 w-4 text-brand-500 shrink-0" />}
                        </span>
                      )}
                    </li>
                  </Fragment>
                );
              })}
            </ul>
          )}
        </div>
      )}
      {errorText ? (
        <p id={`${triggerId}-error`} className="text-p-sm text-red-700">
          {errorText}
        </p>
      ) : helperText ? (
        <p id={`${triggerId}-help`} className="text-p-sm text-fg-secondary">
          {helperText}
        </p>
      ) : null}
    </div>
  );
});

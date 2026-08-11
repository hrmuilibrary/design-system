import { forwardRef, useEffect, useId, useMemo, useRef, useState, type KeyboardEvent, type MutableRefObject } from 'react';
import { X, Search, Users } from 'lucide-react';
import { Avatar } from '../Avatar';
import { cn } from '../../lib/cn';
import type { MultiSelectOption, MultiSelectProps, MultiSelectSize } from './MultiSelect.types';
import type { OptionValue } from '../../types';

/* =============================================================================
 * MultiSelect — a chip/token multi-select combobox.
 *
 * The multi-value cousin of `Select`: chosen options render as removable chips
 * inline with a type-to-filter input; a dropdown lists the remaining options.
 * Options can carry an avatar, a description line and a chip badge, so it covers
 * both a plain tag input and a rich people picker with one API.
 *
 * Fully controlled (`value` + `onChange`). Keyboard: up/down move the active
 * option, Enter selects it, Backspace on an empty field removes the last
 * removable chip, Esc closes. Data-agnostic — feed it any options.
 * =========================================================================== */

const SIZES: Record<
  MultiSelectSize,
  { box: string; chip: string; chipText: string; input: string; avatar: 'xs' | 'sm' }
> = {
  sm: { box: 'px-1.5 py-1.5 gap-1', chip: 'h-6 pl-0.5 pr-1.5', chipText: 'text-p-xs', input: 'h-6 text-p-sm min-w-[100px]', avatar: 'xs' },
  md: { box: 'px-2 py-2 gap-1.5', chip: 'h-7 pl-1 pr-2', chipText: 'text-p-sm', input: 'h-7 text-p-std min-w-[120px]', avatar: 'xs' },
  lg: { box: 'px-2.5 py-2.5 gap-2', chip: 'h-8 pl-1 pr-2.5', chipText: 'text-p-std', input: 'h-8 text-p-md min-w-[140px]', avatar: 'sm' },
};

export const MultiSelect = forwardRef<HTMLInputElement, MultiSelectProps>(function MultiSelect(
  {
    options,
    value,
    onChange,
    onAdd,
    onRemove,
    size = 'md',
    placeholder = 'Select…',
    addMorePlaceholder = 'Add another…',
    disabled = false,
    error = false,
    label,
    labelAddons,
    helperText,
    errorText,
    required = false,
    lockedValues = [],
    max,
    searchable = true,
    suggestionsLabel = 'Suggestions',
    emptyText = 'No matches. Try a different search.',
    showAvatars = false,
    id,
    className,
    wrapperClassName,
    dataTestId,
  },
  ref,
) {
  const reactId = useId();
  const inputId = id ?? reactId;
  const listId = `${inputId}-listbox`;
  const hasError = error || !!errorText;

  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerInputRef = useRef<HTMLInputElement>(null);
  const setInputRef = (node: HTMLInputElement | null) => {
    innerInputRef.current = node;
    if (typeof ref === 'function') ref(node);
    else if (ref) (ref as MutableRefObject<HTMLInputElement | null>).current = node;
  };

  const byValue = useMemo(
    () => new Map(options.map((o) => [String(o.value), o])),
    [options],
  );
  const selected = useMemo(
    () => value.map((v) => byValue.get(String(v))).filter((o): o is MultiSelectOption => !!o),
    [value, byValue],
  );

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    return options.filter(
      (o) =>
        !value.some((v) => String(v) === String(o.value)) &&
        (q === '' ||
          o.label.toLowerCase().includes(q) ||
          (o.description ?? '').toLowerCase().includes(q)),
    );
  }, [options, value, query]);

  const reached = max !== undefined && value.length >= max;

  /* Close on outside click + Esc. */
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [open]);

  /* Keep the active index in range as the list changes. */
  useEffect(() => {
    setActive((a) => Math.min(a, Math.max(0, matches.length - 1)));
  }, [matches.length]);

  const add = (v: OptionValue) => {
    const opt = byValue.get(String(v));
    if (disabled || reached || !opt || opt.disabled) return;
    onChange([...value, v]);
    onAdd?.(opt);
    setQuery('');
    setActive(0);
    innerInputRef.current?.focus();
  };

  const remove = (v: OptionValue) => {
    if (disabled || lockedValues.some((locked) => String(locked) === String(v))) return;
    onChange(value.filter((x) => String(x) !== String(v)));
    onRemove?.(v);
  };

  const moveActive = (dir: 1 | -1) => {
    if (!matches.length) return;
    let next = active;
    for (let i = 0; i < matches.length; i++) {
      next = (next + dir + matches.length) % matches.length;
      if (!matches[next]?.disabled) break;
    }
    setActive(next);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!open) setOpen(true);
      else moveActive(1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      moveActive(-1);
    } else if (e.key === 'Enter') {
      if (open && matches[active] && !matches[active].disabled) {
        e.preventDefault();
        add(matches[active].value);
      }
    } else if (e.key === 'Escape') {
      setOpen(false);
    } else if (e.key === 'Backspace' && query === '' && selected.length > 0) {
      const last = [...selected].reverse().find((o) => !lockedValues.some((locked) => String(locked) === String(o.value)));
      if (last) remove(last.value);
    }
  };

  const describedBy = errorText
    ? `${inputId}-error`
    : helperText
    ? `${inputId}-help`
    : undefined;

  return (
    <div data-test-id={dataTestId} className={cn('flex flex-col gap-1.5 w-full', wrapperClassName)}>
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

      <div ref={wrapRef} className="relative">
        {/* Chips + input row */}
        <div
          className={cn(
            'flex flex-wrap items-center rounded-lg border bg-bg-default transition-colors',
            SIZES[size].box,
            disabled
              ? 'opacity-60 cursor-not-allowed border-border-default'
              : hasError
              ? 'border-red-500 focus-within:ring-2 focus-within:ring-red-300 focus-within:ring-offset-1 cursor-text'
              : 'border-border-default hover:border-border-strong focus-within:border-fg-tertiary focus-within:ring-2 focus-within:ring-brand-300 focus-within:ring-offset-1 cursor-text',
            className,
          )}
          onClick={() => !disabled && innerInputRef.current?.focus()}
        >
          {selected.map((o) => {
            const locked = lockedValues.some((locked) => String(locked) === String(o.value));
            return (
              <span
                key={String(o.value)}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full text-fg-default bg-bg-subtle',
                  SIZES[size].chip,
                  SIZES[size].chipText,
                )}
                title={o.description}
              >
                {(showAvatars || o.avatarSrc) && (
                  <Avatar src={o.avatarSrc} name={o.label} size={SIZES[size].avatar} />
                )}
                <span className="font-medium">{o.label}</span>
                {o.badge && (
                  <span className="text-label-xxs uppercase tracking-wider opacity-70">{o.badge}</span>
                )}
                {!locked && !disabled && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      remove(o.value);
                    }}
                    aria-label={`Remove ${o.label}`}
                    className="-mr-0.5 ml-0.5 text-fg-tertiary hover:text-fg-default p-0.5 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </span>
            );
          })}

          <input
            ref={setInputRef}
            id={inputId}
            type="text"
            role="combobox"
            aria-expanded={open}
            aria-controls={listId}
            aria-autocomplete="list"
            aria-activedescendant={open && matches[active] ? `${listId}-opt-${active}` : undefined}
            aria-invalid={hasError || undefined}
            aria-describedby={describedBy}
            value={query}
            readOnly={!searchable}
            disabled={disabled || reached}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={onKeyDown}
            placeholder={selected.length === 0 ? placeholder : reached ? `Limit ${max} reached` : addMorePlaceholder}
            className={cn(
              'flex-1 bg-transparent outline-none text-fg-default placeholder:text-fg-tertiary disabled:cursor-not-allowed',
              !searchable && 'cursor-pointer',
              SIZES[size].input,
            )}
          />
        </div>

        {/* Dropdown */}
        {open && !disabled && !reached && (
          <div className="absolute top-full left-0 right-0 mt-1 z-20 max-h-80 overflow-y-auto rounded-lg border border-border-default bg-bg-default shadow-z4">
            <div className="px-3 py-2 border-b border-border-subtle flex items-center gap-2 text-p-sm text-fg-tertiary">
              <Search className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{query ? `Matches for "${query}"` : suggestionsLabel}</span>
            </div>
            {matches.length === 0 ? (
              <div className="px-3 py-6 text-center">
                <Users className="w-5 h-5 mx-auto text-fg-tertiary mb-2" />
                <span className="text-p-sm text-fg-secondary">{emptyText}</span>
              </div>
            ) : (
              <ul role="listbox" id={listId} className="py-1">
                {matches.map((o, i) => (
                  <li key={String(o.value)} role="option" id={`${listId}-opt-${i}`} aria-selected={i === active} aria-disabled={o.disabled || undefined}>
                    <button
                      type="button"
                      disabled={o.disabled}
                      onMouseEnter={() => setActive(i)}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        add(o.value);
                      }}
                      className={cn(
                        'w-full px-3 py-2 flex items-center gap-3 text-left transition',
                        o.disabled
                          ? 'opacity-50 cursor-not-allowed'
                          : i === active
                          ? 'bg-bg-subtle'
                          : 'hover:bg-bg-subtle',
                      )}
                    >
                      {(showAvatars || o.avatarSrc) && <Avatar src={o.avatarSrc} name={o.label} size="sm" />}
                      <span className="flex-1 min-w-0">
                        <span className="block text-p-std font-medium text-fg-default truncate">{o.label}</span>
                        {o.description && (
                          <span className="block text-p-sm text-fg-secondary truncate">{o.description}</span>
                        )}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

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
  );
});

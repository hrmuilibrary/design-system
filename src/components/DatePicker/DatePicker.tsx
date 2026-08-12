import { forwardRef, useEffect, useId, useRef, useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/cn';
import type { DatePickerProps, DatePickerSize } from './DatePicker.types';

// Heights, text sizes and horizontal padding mirror Input/Select exactly so a
// DatePicker lines up with the other fields in a form grid.
const sizeStyles: Record<DatePickerSize, string> = {
  lg: 'h-12 text-p-md px-3.5',
  md: 'h-10 text-p-std px-3',
  sm: 'h-8 text-p-sm px-2.5',
};

const SUNDAY_FIRST_REGIONS = new Set(['US', 'CA', 'MX', 'JP', 'BR', 'IL', 'PH', 'KR', 'TW']);

/** 0 = Sunday .. 6 = Saturday. Prefers Intl.Locale's weekInfo (not yet in
 *  TypeScript's bundled lib types, and not universally shipped — notably
 *  absent in older Safari), falling back to a small region allowlist. */
function getFirstDayOfWeek(locale: string): number {
  try {
    const weekInfo = (new Intl.Locale(locale) as Intl.Locale & { weekInfo?: { firstDay: number } }).weekInfo;
    if (weekInfo?.firstDay) return weekInfo.firstDay % 7; // spec: 1=Mon..7=Sun
  } catch {
    // Intl.Locale or weekInfo unsupported in this runtime — fall through.
  }
  const region = locale.split('-')[1]?.toUpperCase();
  return region && SUNDAY_FIRST_REGIONS.has(region) ? 0 : 1;
}

function getMonthNames(locale: string): string[] {
  const formatter = new Intl.DateTimeFormat(locale, { month: 'short' });
  return Array.from({ length: 12 }, (_, i) => formatter.format(new Date(2000, i, 1)));
}

/** Jan 4, 1970 was a Sunday — a stable reference for enumerating Sun..Sat,
 *  then rotated so index 0 is `firstDayOfWeek`. */
function getWeekdayNames(locale: string, firstDayOfWeek: number): string[] {
  const formatter = new Intl.DateTimeFormat(locale, { weekday: 'short' });
  const namesFromSunday = Array.from({ length: 7 }, (_, i) => formatter.format(new Date(1970, 0, 4 + i)));
  return [...namesFromSunday.slice(firstDayOfWeek), ...namesFromSunday.slice(0, firstDayOfWeek)];
}

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function sameDay(a: Date | null, b: Date | null) {
  return (
    !!a && !!b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
  );
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

// Normalizing both sides to local midnight makes the comparison day-granular
// in both directions without a separate `endOfDay` boundary — a `minDate`
// carrying today's wall-clock time (e.g. `new Date()`) still leaves today
// itself selectable, since today's grid cell is also midnight.
function isDayDisabled(date: Date, minDate?: Date, maxDate?: Date, excludeDates?: Date[]) {
  const time = startOfDay(date).getTime();
  if (minDate && time < startOfDay(minDate).getTime()) return true;
  if (maxDate && time > startOfDay(maxDate).getTime()) return true;
  return !!excludeDates?.some((excluded) => sameDay(excluded, date));
}

function formatShort(date: Date) {
  return `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()}`;
}

function buildGrid(view: Date, firstDayOfWeek: number) {
  const first = startOfMonth(view);
  const offset = (first.getDay() - firstDayOfWeek + 7) % 7;
  const daysInMonth = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const cells: (Date | null)[] = [];
  for (let i = 0; i < offset; i++) cells.push(null);
  for (let i = 1; i <= daysInMonth; i++) cells.push(new Date(view.getFullYear(), view.getMonth(), i));
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export const DatePicker = forwardRef<HTMLButtonElement, DatePickerProps>(function DatePicker(
  {
    value,
    onChange,
    range = false,
    rangeValue,
    onChangeRange,
    size = 'md',
    locale = 'en',
    label,
    placeholder = 'Select date',
    fullWidth = false,
    disabled = false,
    minDate,
    maxDate,
    excludeDates,
    error = false,
    errorText,
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
  const [view, setView] = useState<Date>(value ?? rangeValue?.start ?? new Date());
  const [hoverEnd, setHoverEnd] = useState<Date | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasError = error || !!errorText;
  const describedBy = errorText ? `${triggerId}-error` : undefined;

  useEffect(() => {
    if (disabled) setOpen(false);
  }, [disabled]);

  useEffect(() => {
    if (!open) return;
    const onClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [open]);

  const display = range
    ? rangeValue?.start
      ? `${formatShort(rangeValue.start)}${rangeValue.end ? ` – ${formatShort(rangeValue.end)}` : ''}`
      : ''
    : value
      ? formatShort(value)
      : '';

  function pick(date: Date) {
    if (!range) {
      onChange?.(date);
      setOpen(false);
      return;
    }
    const current = rangeValue ?? { start: null, end: null };
    if (!current.start || (current.start && current.end)) {
      onChangeRange?.({ start: date, end: null });
      return;
    }
    if (date < current.start) {
      onChangeRange?.({ start: date, end: current.start });
      return;
    }
    onChangeRange?.({ start: current.start, end: date });
    setOpen(false);
  }

  const firstDayOfWeek = getFirstDayOfWeek(locale);
  const monthNames = getMonthNames(locale);
  const weekdayNames = getWeekdayNames(locale, firstDayOfWeek);
  const cells = buildGrid(view, firstDayOfWeek);
  const currentRange = rangeValue ?? { start: null, end: null };
  const rangeEnd = currentRange.end ?? hoverEnd;

  return (
    <div
      ref={containerRef}
      data-test-id={dataTestId}
      className={cn('flex flex-col gap-1.5', fullWidth && 'w-full', wrapperClassName)}
    >
      {label && (
        <label htmlFor={triggerId} className="text-p-std font-medium text-fg-default inline-flex">
          {label}
        </label>
      )}
      <div className="relative">
        <button
          ref={ref}
          id={triggerId}
          type="button"
          disabled={disabled}
          aria-invalid={hasError || undefined}
          aria-describedby={describedBy}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            'inline-flex items-center gap-2 rounded-lg border bg-bg-default text-left transition-colors focus-visible:outline-none focus-visible:ring-2',
            hasError ? 'border-red-600' : 'border-border-default',
            !disabled && !hasError && 'hover:border-border-strong',
            hasError
              ? 'focus-visible:ring-red-300 focus-visible:border-red-600'
              : 'focus-visible:ring-brand-300 focus-visible:border-brand-500',
            disabled && 'bg-bg-container border-border-default cursor-not-allowed text-fg-disabled',
            fullWidth ? 'w-full min-w-0' : 'min-w-[260px]',
            sizeStyles[size],
            className,
          )}
        >
          <span
            className={cn(
              'flex-1 text-left truncate',
              disabled ? 'text-fg-disabled' : display ? 'text-fg-default' : 'text-fg-tertiary',
            )}
          >
            {display || placeholder}
          </span>
          <Calendar className={cn('w-4 h-4', disabled ? 'text-fg-disabled' : 'text-fg-secondary')} />
        </button>

        {open && (
          <div className="absolute z-50 mt-1 left-0 rounded-xl border border-border-default bg-bg-default shadow-z3 p-3 w-[300px]">
            <div className="flex items-center justify-between mb-2">
              <button
                type="button"
                className="w-8 h-8 rounded-md hover:bg-bg-container flex items-center justify-center text-fg-secondary"
                onClick={() => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1))}
                aria-label="Previous month"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="text-p-md font-semibold text-fg-default">
                {monthNames[view.getMonth()]} {view.getFullYear()}
              </div>
              <button
                type="button"
                className="w-8 h-8 rounded-md hover:bg-bg-container flex items-center justify-center text-fg-secondary"
                onClick={() => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1))}
                aria-label="Next month"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center">
              {weekdayNames.map((day, i) => (
                <div key={i} className="text-p-xs text-fg-tertiary py-1">
                  {day}
                </div>
              ))}
              {cells.map((date, index) => {
                if (!date) return <div key={index} />;
                const dayDisabled = isDayDisabled(date, minDate, maxDate, excludeDates);
                const isSelected = !range && sameDay(date, value ?? null);
                const isStart = range && sameDay(date, currentRange.start);
                const isEnd = range && sameDay(date, rangeEnd);
                const isInRange =
                  range && !!currentRange.start && !!rangeEnd && date > currentRange.start && date < rangeEnd;
                const stateClassName = dayDisabled
                  ? 'text-fg-disabled cursor-not-allowed'
                  : isSelected || isStart || isEnd
                    ? 'bg-brand-500 text-white'
                    : isInRange
                      ? 'bg-bg-brand-lighter text-brand-700'
                      : 'text-fg-default hover:bg-bg-container';
                return (
                  <button
                    key={index}
                    type="button"
                    disabled={dayDisabled}
                    aria-disabled={dayDisabled || undefined}
                    onMouseEnter={() =>
                      !dayDisabled && range && currentRange.start && !currentRange.end && setHoverEnd(date)
                    }
                    onClick={() => !dayDisabled && pick(date)}
                    className={cn('h-8 rounded-md text-p-sm font-medium', stateClassName)}
                  >
                    {date.getDate()}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
      {errorText ? (
        <p id={`${triggerId}-error`} className="text-p-sm text-red-700">
          {errorText}
        </p>
      ) : null}
    </div>
  );
});

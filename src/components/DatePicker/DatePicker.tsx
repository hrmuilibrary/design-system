import { forwardRef, useEffect, useId, useMemo, useRef, useState } from 'react';
import type { MouseEvent as ReactMouseEvent, KeyboardEvent as ReactKeyboardEvent } from 'react';
import { Calendar, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { createPortal } from 'react-dom';
import { cn } from '../../lib/cn';
import { RequiredMark } from '../../lib/RequiredMark';
import { usePortalContainer } from '../../lib/PortalContext';
import { useFloatingPosition } from '../../lib/useFloatingPosition';
import { createTestId } from '../../lib/testId';
import type { DatePickerProps, DatePickerSize } from './DatePicker.types';

// Heights, text sizes and horizontal padding mirror Input/Select exactly so a
// DatePicker lines up with the other fields in a form grid.
const sizeStyles: Record<DatePickerSize, string> = {
  lg: 'h-12 text-p-md px-3.5',
  md: 'h-10 text-p-std px-3',
  sm: 'h-8 text-p-sm px-2.5',
};

// Matches the popover's `mt-1`/`mb-1` offset, so the fit test measures the
// same gap the rendered popover actually occupies.
const MENU_GAP = 4;

/** Validates `locale` once via Intl.Locale's tag-parsing (shared with
 *  Intl.DateTimeFormat) so a malformed tag (e.g. underscore-form `en_US`,
 *  or an empty string) never reaches the unguarded Intl.DateTimeFormat
 *  constructors in getMonthNames/getWeekdayNames — falls back to `'en'`. */
function resolveLocale(locale: string): string {
  try {
    new Intl.Locale(locale);
    return locale;
  } catch {
    return 'en';
  }
}

function getMonthNames(locale: string): string[] {
  const formatter = new Intl.DateTimeFormat(locale, { month: 'short' });
  return Array.from({ length: 12 }, (_, i) => formatter.format(new Date(2000, i, 1)));
}

// Intl.DateTimeFormat('en', { weekday: 'short' }) yields 'Mon'/'Tue'/...
// (3 letters), so bare 'en' keeps the 2-letter abbreviations instead.
const EN_WEEKDAY_NAMES = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

/** Weekday abbreviations Monday..Sunday: the week always starts on Monday,
 *  whatever the locale. Jan 5, 1970 was a Monday. */
function getWeekdayNames(locale: string): string[] {
  if (locale.toLowerCase() === 'en') return EN_WEEKDAY_NAMES;
  const formatter = new Intl.DateTimeFormat(locale, { weekday: 'short' });
  return Array.from({ length: 7 }, (_, i) => formatter.format(new Date(1970, 0, 5 + i)));
}

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function sameDay(a: Date | null, b: Date | null) {
  return (
    !!a &&
    !!b &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

// Normalizing both sides to local midnight makes the comparison day-granular
// in both directions without a separate `endOfDay` boundary — a `minDate`
// carrying today's wall-clock time (e.g. `new Date()`) still leaves today
// itself selectable, since today's grid cell is also midnight.
function isDayDisabled(
  date: Date,
  minDate?: Date,
  maxDate?: Date,
  excludeDates?: Date[],
  filterDate?: (date: Date) => boolean,
) {
  const time = startOfDay(date).getTime();
  if (minDate && time < startOfDay(minDate).getTime()) return true;
  if (maxDate && time > startOfDay(maxDate).getTime()) return true;
  if (excludeDates?.some((excluded) => sameDay(excluded, date))) return true;
  return !!filterDate && !filterDate(date);
}

function formatDate(date: Date, format: string): string {
  const dd = String(date.getDate()).padStart(2, '0');
  const MM = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = String(date.getFullYear());
  return format.replace(/dd/g, dd).replace(/MM/g, MM).replace(/yyyy/g, yyyy);
}

function buildGrid(view: Date) {
  const first = startOfMonth(view);
  // getDay() is 0 = Sunday; shift so Monday is column 0.
  const offset = (first.getDay() + 6) % 7;
  const daysInMonth = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const cells: (Date | null)[] = [];
  for (let i = 0; i < offset; i++) cells.push(null);
  for (let i = 1; i <= daysInMonth; i++)
    cells.push(new Date(view.getFullYear(), view.getMonth(), i));
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

function toIsoDate(date: Date | null | undefined): string | undefined {
  if (!date) return undefined;
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
}

export const DatePicker = forwardRef<HTMLButtonElement, DatePickerProps>(function DatePicker(
  {
    value,
    onChange,
    clearable = false,
    range = false,
    rangeValue,
    onChangeRange,
    size = 'md',
    locale = 'en',
    format = 'dd.MM.yyyy',
    label,
    required = false,
    helperText,
    placeholder = 'Select date',
    fullWidth = false,
    disabled = false,
    minDate,
    maxDate,
    excludeDates,
    filterDate,
    menuPlacement = 'auto',
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
  const [popoverEl, setPopoverEl] = useState<HTMLDivElement | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  // Wraps the trigger only — the popover is portaled, so this rect always
  // reports the trigger's own box.
  const fieldRef = useRef<HTMLDivElement>(null);
  // Portaled into the enclosing Drawer/Modal dialog (top layer), else <body>, so it
  // is neither clipped by scrolling ancestors nor painted under a dialog.
  const portalContainer = usePortalContainer();
  const { style: popoverStyle, resolvedSide } = useFloatingPosition({
    anchor: fieldRef,
    panel: popoverEl,
    open,
    side: menuPlacement === 'top' ? 'top' : 'bottom',
    align: 'start',
    offset: MENU_GAP,
    flip: menuPlacement === 'auto',
    // The popover's height changes with the month (5- vs 6-week grids).
    recomputeKey: `${view.getFullYear()}-${view.getMonth()}-${range}`,
  });
  const hasError = error || !!errorText;
  const describedBy = errorText
    ? `${triggerId}-error`
    : helperText
      ? `${triggerId}-help`
      : undefined;

  useEffect(() => {
    if (disabled) setOpen(false);
  }, [disabled]);

  useEffect(() => {
    if (!open) return;
    const onClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (containerRef.current?.contains(target) || popoverEl?.contains(target)) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [open, popoverEl]);

  const display = range
    ? rangeValue?.start
      ? `${formatDate(rangeValue.start, format)}${rangeValue.end ? ` – ${formatDate(rangeValue.end, format)}` : ''}`
      : ''
    : value
      ? formatDate(value, format)
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

  function handleClear(event: ReactMouseEvent | ReactKeyboardEvent) {
    event.stopPropagation();
    if (range) {
      onChangeRange?.({ start: null, end: null });
      setHoverEnd(null);
    } else {
      onChange?.(null);
    }
  }

  const { monthNames, weekdayNames } = useMemo(() => {
    const resolvedLocale = resolveLocale(locale);
    return {
      monthNames: getMonthNames(resolvedLocale),
      weekdayNames: getWeekdayNames(resolvedLocale),
    };
  }, [locale]);
  const cells = buildGrid(view);
  const today = startOfDay(new Date());
  const testId = createTestId(dataTestId);
  const currentRange = rangeValue ?? { start: null, end: null };
  const rangeEnd = currentRange.end ?? hoverEnd;

  return (
    <div
      ref={containerRef}
      data-test-id={testId('root')}
      className={cn('flex flex-col gap-1.5', fullWidth && 'w-full', wrapperClassName)}
    >
      {label && (
        <label
          htmlFor={triggerId}
          className="text-p-std font-medium text-fg-default inline-flex items-center gap-1"
        >
          {label}
          {required && <RequiredMark />}
        </label>
      )}
      <div ref={fieldRef} className="relative">
        <button
          ref={ref}
          id={triggerId}
          data-test-id={dataTestId}
          data-value={range ? undefined : toIsoDate(value)}
          data-from={range ? toIsoDate(rangeValue?.start) : undefined}
          data-to={range ? toIsoDate(rangeValue?.end) : undefined}
          type="button"
          disabled={disabled}
          aria-invalid={hasError || undefined}
          aria-required={required || undefined}
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
          {clearable && display && !disabled ? (
            <span
              role="button"
              tabIndex={0}
              aria-label="Clear date"
              onClick={handleClear}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  handleClear(event);
                }
              }}
              className="inline-flex items-center justify-center rounded-full p-0.5 hover:bg-bg-container"
            >
              <X className="w-4 h-4 text-fg-secondary" />
            </span>
          ) : (
            <Calendar
              className={cn('w-4 h-4', disabled ? 'text-fg-disabled' : 'text-fg-secondary')}
            />
          )}
        </button>

        {open &&
          portalContainer &&
          createPortal(
            <div
              ref={setPopoverEl}
              data-test-id={testId('calendar')}
              data-side={resolvedSide}
              style={popoverStyle}
              className="z-50 rounded-xl border border-border-default bg-bg-default shadow-z3 p-3 w-[300px]"
            >
              <div className="flex items-center justify-between mb-2">
                <button
                  type="button"
                  className="w-8 h-8 rounded-md hover:bg-bg-container flex items-center justify-center text-fg-secondary"
                  onClick={() => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1))}
                  aria-label="Previous month"
                  data-test-id={testId('prev-month')}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div
                  data-test-id={testId('month-label')}
                  data-month={`${view.getFullYear()}-${String(view.getMonth() + 1).padStart(2, '0')}`}
                  className="text-p-md font-semibold text-fg-default"
                >
                  {monthNames[view.getMonth()]} {view.getFullYear()}
                </div>
                <button
                  type="button"
                  className="w-8 h-8 rounded-md hover:bg-bg-container flex items-center justify-center text-fg-secondary"
                  onClick={() => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1))}
                  aria-label="Next month"
                  data-test-id={testId('next-month')}
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
                  const dayDisabled = isDayDisabled(
                    date,
                    minDate,
                    maxDate,
                    excludeDates,
                    filterDate,
                  );
                  // Non-working days (`excludeDates`) look like any other
                  // disabled day; `data-excluded` lets tests tell them apart.
                  const isExcluded = !!excludeDates?.some((excluded) => sameDay(excluded, date));
                  const isToday = sameDay(date, today);
                  const isSelected = !range && sameDay(date, value ?? null);
                  const isStart = range && sameDay(date, currentRange.start);
                  const isEnd = range && sameDay(date, rangeEnd);
                  const isInRange =
                    range &&
                    !!currentRange.start &&
                    !!rangeEnd &&
                    date > currentRange.start &&
                    date < rangeEnd;
                  const stateClassName = dayDisabled
                    ? 'text-fg-disabled cursor-not-allowed'
                    : isSelected || isStart || isEnd
                      ? 'bg-brand-500 text-white'
                      : isInRange
                        ? 'bg-bg-brand-lighter text-brand-700'
                        : 'text-fg-default hover:bg-bg-container';
                  // Today: a brand outline, unless it's filled as the selection.
                  const todayClassName =
                    isToday && !(isSelected || isStart || isEnd)
                      ? 'ring-1 ring-inset ring-border-brand font-semibold'
                      : undefined;
                  return (
                    <button
                      key={index}
                      type="button"
                      disabled={dayDisabled}
                      aria-disabled={dayDisabled || undefined}
                      data-test-id={testId('day')}
                      data-date={toIsoDate(date)}
                      data-today={isToday || undefined}
                      data-excluded={isExcluded || undefined}
                      aria-current={isToday ? 'date' : undefined}
                      onMouseEnter={() =>
                        !dayDisabled &&
                        range &&
                        currentRange.start &&
                        !currentRange.end &&
                        setHoverEnd(date)
                      }
                      onClick={() => !dayDisabled && pick(date)}
                      className={cn(
                        'h-8 rounded-md text-p-sm font-medium',
                        stateClassName,
                        todayClassName,
                      )}
                    >
                      {date.getDate()}
                    </button>
                  );
                })}
              </div>
            </div>,
            portalContainer,
          )}
      </div>
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

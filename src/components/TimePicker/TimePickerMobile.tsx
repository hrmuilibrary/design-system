import { useId, useMemo, useState } from 'react';
import { Clock } from 'lucide-react';
import { cn } from '../../lib/cn';
import { createTestId } from '../../lib/testId';
import { RequiredMark } from '../../lib/RequiredMark';
import { Button } from '../Button';
import { Input } from '../Input';
import { Modal } from '../Modal';
import type { TimePickerSize } from './TimePicker.types';
import type { TimePickerViewProps } from './TimePickerDesktop';
import { pad2, parseTypedTime } from './TimePicker.utils';

// Same heights, padding and text sizes as SelectV2's control, so the mobile
// trigger lines up with the desktop dropdown and other fields.
const triggerSizeClasses: Record<TimePickerSize, string> = {
  lg: 'min-h-12 px-3.5 text-p-md',
  md: 'min-h-10 px-3 text-p-std',
  sm: 'min-h-8 px-2.5 text-p-sm',
};

const HOURS = Array.from({ length: 24 }, (_, h) => h);

interface ColumnItem {
  value: number;
  disabled: boolean;
}

function TimeColumn({
  title,
  items,
  selected,
  onSelect,
  testId,
}: {
  title: string;
  items: ColumnItem[];
  selected: number | null;
  onSelect: (value: number) => void;
  testId?: string;
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-1.5">
      <span className="text-label-sm font-medium text-fg-tertiary text-center">{title}</span>
      <div
        role="listbox"
        aria-label={title}
        data-test-id={testId}
        className="flex h-56 flex-col gap-0.5 overflow-y-auto overscroll-contain rounded-lg border border-border-default p-1"
      >
        {items.map((item) => {
          const isSelected = item.value === selected;
          return (
            <button
              key={item.value}
              type="button"
              role="option"
              aria-selected={isSelected}
              aria-disabled={item.disabled}
              disabled={item.disabled}
              onClick={() => onSelect(item.value)}
              className={cn(
                'shrink-0 rounded-md px-3 py-2.5 text-center text-p-md tabular-nums transition-colors',
                isSelected
                  ? 'bg-bg-brand-lighter font-medium text-fg-brand'
                  : 'text-fg-default hover:bg-bg-subtle',
                item.disabled && 'cursor-not-allowed opacity-40 hover:bg-transparent',
              )}
            >
              {pad2(item.value)}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Mobile UI: a select-like trigger that opens a dialog with an `HH:mm` field
 * (numeric keyboard) and tappable hour/minute columns. Nothing changes until
 * Apply, so a half-picked time never leaks out.
 */
export function TimePickerMobile({
  value,
  onCommit,
  isDisabled,
  step,
  clearable = false,
  searchable = true,
  size = 'md',
  label,
  required = false,
  helperText,
  placeholder = 'Select time',
  disabled = false,
  error = false,
  errorText,
  mobileTitle,
  mobileApplyText = 'Apply',
  mobileCancelText = 'Cancel',
  id,
  className,
  dataTestId,
}: TimePickerViewProps & { step: number }) {
  const reactId = useId();
  const triggerId = id ?? reactId;
  const testId = createTestId(dataTestId);
  const hasError = error || !!errorText;

  const [open, setOpen] = useState(false);
  const [hour, setHour] = useState<number | null>(null);
  const [minute, setMinute] = useState<number | null>(null);
  const [text, setText] = useState('');

  const draft = hour !== null && minute !== null ? `${pad2(hour)}:${pad2(minute)}` : null;
  const draftAllowed = draft !== null && !isDisabled(draft);

  // Minute column follows `step`; a typed/selected off-grid minute is added so it shows as selected.
  const minuteValues = useMemo(() => {
    const values = new Set<number>();
    for (let m = 0; m < 60; m += Math.min(step, 60)) values.add(m);
    if (minute !== null) values.add(minute);
    return [...values].sort((a, b) => a - b);
  }, [step, minute]);

  const hourItems = HOURS.map((h) => ({
    value: h,
    disabled: minuteValues.every((m) => isDisabled(`${pad2(h)}:${pad2(m)}`)),
  }));
  const minuteItems = minuteValues.map((m) => ({
    value: m,
    disabled: hour !== null && isDisabled(`${pad2(hour)}:${pad2(m)}`),
  }));

  const setDraft = (h: number | null, m: number | null) => {
    setHour(h);
    setMinute(m);
    setText(h !== null && m !== null ? `${pad2(h)}:${pad2(m)}` : h !== null ? `${pad2(h)}:` : '');
  };

  const openDialog = () => {
    const [h, m] = value ? value.split(':').map(Number) : [null, null];
    setDraft(h ?? null, m ?? null);
    setOpen(true);
  };

  const selectHour = (h: number) => {
    // Keep the minute if it's still allowed in the new hour, else take the first allowed one.
    const keep = minute !== null && !isDisabled(`${pad2(h)}:${pad2(minute)}`);
    const firstAllowed = minuteValues.find((m) => !isDisabled(`${pad2(h)}:${pad2(m)}`));
    setDraft(h, keep ? minute : (firstAllowed ?? null));
  };

  const handleTextChange = (next: string) => {
    setText(next);
    const time = parseTypedTime(next);
    if (time) {
      const [h, m] = time.split(':').map(Number);
      setHour(h ?? null);
      setMinute(m ?? null);
    }
  };

  const textInvalid = text !== '' && !parseTypedTime(text) && !/^\d{2}:$/.test(text);
  const textError = textInvalid
    ? 'Enter a time as HH:mm'
    : draft && !draftAllowed
      ? 'This time isn’t available'
      : undefined;

  const apply = () => {
    if (!draftAllowed) return;
    onCommit(draft);
    setOpen(false);
  };

  return (
    <div data-test-id={dataTestId} className="flex w-full flex-col gap-1.5">
      {label && (
        <label
          htmlFor={triggerId}
          className="text-p-std font-medium text-fg-default inline-flex items-center gap-1"
        >
          {label}
          {required && <RequiredMark />}
        </label>
      )}
      <button
        id={triggerId}
        type="button"
        disabled={disabled}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-invalid={hasError || undefined}
        aria-describedby={
          errorText ? `${triggerId}-error` : helperText ? `${triggerId}-help` : undefined
        }
        data-test-id={testId('trigger')}
        onClick={openDialog}
        className={cn(
          'flex w-full items-center justify-between gap-2 rounded-lg border bg-bg-default text-left transition-colors',
          'focus-visible:outline-none',
          triggerSizeClasses[size],
          hasError ? 'border-red-600' : 'border-border-default',
          !disabled && !hasError && 'hover:border-border-strong',
          open && !hasError && 'ring-2 ring-brand-300 border-brand-500',
          !hasError &&
            'focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:border-brand-500',
          hasError && 'focus-visible:ring-2 focus-visible:ring-red-300',
          disabled &&
            'cursor-not-allowed border-border-default bg-bg-container hover:border-border-default',
          className,
        )}
      >
        <span
          className={cn('truncate tabular-nums', value ? 'text-fg-default' : 'text-fg-tertiary')}
        >
          {value ?? placeholder}
        </span>
        <Clock className="h-4 w-4 shrink-0 text-fg-secondary" aria-hidden />
      </button>
      {errorText ? (
        <p id={`${triggerId}-error`} className="text-p-sm text-fg-danger">
          {errorText}
        </p>
      ) : helperText ? (
        <p id={`${triggerId}-help`} className="text-p-sm text-fg-secondary">
          {helperText}
        </p>
      ) : null}

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={mobileTitle ?? label ?? 'Select time'}
        size="sm"
        dataTestId={testId('dialog')}
        footer={
          <div className="flex w-full items-center gap-2">
            {clearable && value && (
              <Button
                variant="tertiary"
                onClick={() => {
                  onCommit(null);
                  setOpen(false);
                }}
                dataTestId={testId('clear')}
              >
                Clear
              </Button>
            )}
            <div className="ml-auto flex gap-2">
              <Button variant="secondary" onClick={() => setOpen(false)}>
                {mobileCancelText}
              </Button>
              <Button onClick={apply} disabled={!draftAllowed} dataTestId={testId('apply')}>
                {mobileApplyText}
              </Button>
            </div>
          </div>
        }
      >
        <div className="flex flex-col gap-4">
          {searchable && (
            <Input
              aria-label="Time"
              placeholder="HH:mm"
              inputMode="numeric"
              autoComplete="off"
              size="lg"
              value={text}
              onChange={(e) => handleTextChange(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') apply();
              }}
              error={!!textError}
              errorText={textError}
              dataTestId={testId('input')}
              className="tabular-nums"
            />
          )}
          <div className="flex gap-3">
            <TimeColumn
              title="HH"
              items={hourItems}
              selected={hour}
              onSelect={selectHour}
              testId={testId('hours')}
            />
            <TimeColumn
              title="mm"
              items={minuteItems}
              selected={minute}
              onSelect={(m) => setDraft(hour ?? 0, m)}
              testId={testId('minutes')}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

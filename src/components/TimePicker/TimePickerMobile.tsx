import { useId, useMemo, useState } from 'react';
import { Clock } from 'lucide-react';
import { WheelPicker, WheelPickerWrapper, type WheelPickerOption } from '@ncdai/react-wheel-picker';
import { cn } from '../../lib/cn';
import { createTestId } from '../../lib/testId';
import { RequiredMark } from '../../lib/RequiredMark';
import { Button } from '../Button';
import { Modal } from '../Modal';
import type { TimePickerSize } from './TimePicker.types';
import type { TimePickerViewProps } from './TimePickerDesktop';
import { dateToTime, pad2 } from './TimePicker.utils';

// Same heights, padding and text sizes as SelectV2's control, so the mobile
// trigger lines up with the desktop dropdown and other fields.
const triggerSizeClasses: Record<TimePickerSize, string> = {
  lg: 'min-h-12 px-3.5 text-p-md',
  md: 'min-h-10 px-3 text-p-std',
  sm: 'min-h-8 px-2.5 text-p-sm',
};

const HOURS = Array.from({ length: 24 }, (_, h) => pad2(h));
const MINUTES = Array.from({ length: 60 }, (_, m) => pad2(m));

// Wheel styling, ported from the previous library's `mobile_time_picker`:
// hours hug the centre from the left, minutes from the right, over one shared
// highlight band; the selected row is larger and bolder. Semantic tokens only,
// so it follows `.dark`.
const optionBase = 'text-p-md font-medium text-fg-tertiary data-[disabled]:opacity-40';
const highlightBase = 'text-p-lg font-semibold text-fg-default data-[disabled]:opacity-40';
const hourClassNames = {
  optionItem: cn(optionBase, 'justify-end pr-5'),
  highlightWrapper: 'bg-bg-subtle rounded-l-lg',
  highlightItem: cn(highlightBase, 'justify-end pr-5'),
};
const minuteClassNames = {
  optionItem: cn(optionBase, 'justify-start pl-5'),
  highlightWrapper: 'bg-bg-subtle rounded-r-lg',
  highlightItem: cn(highlightBase, 'justify-start pl-5'),
};

/**
 * Mobile UI, matching the previous library's TimePicker: a select-like
 * trigger that opens a dialog with infinite hour (00–23) and minute (00–59)
 * wheels (`@ncdai/react-wheel-picker`), confirmed with Apply. Unavailable
 * times (`minTime`, `maxTime`, `excludeTimes`, `filterTime`) are greyed out
 * on the wheels and can't be applied.
 */
export function TimePickerMobile({
  value,
  onCommit,
  times,
  isDisabled,
  clearable,
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
  id,
  className,
  dataTestId,
}: TimePickerViewProps) {
  const reactId = useId();
  const triggerId = id ?? reactId;
  const testId = createTestId(dataTestId);
  const hasError = error || !!errorText;

  const [open, setOpen] = useState(false);
  const [hour, setHour] = useState('00');
  const [minute, setMinute] = useState('00');

  const isAllowed = (h: string, m: string) => !isDisabled(`${h}:${m}`);

  const hourOptions = useMemo<WheelPickerOption[]>(
    () =>
      HOURS.map((h) => ({
        value: h,
        label: h,
        disabled: !MINUTES.some((m) => !isDisabled(`${h}:${m}`)),
      })),
    [isDisabled],
  );
  const minuteOptions = useMemo<WheelPickerOption[]>(
    () => MINUTES.map((m) => ({ value: m, label: m, disabled: isDisabled(`${hour}:${m}`) })),
    [hour, isDisabled],
  );

  const firstAllowedMinute = (h: string) => MINUTES.find((m) => isAllowed(h, m));

  // Like the previous TimePicker, open at the current value or, when empty,
  // at the current time — falling back to the first available suggestion
  // if "now" is out of range.
  const openDialog = () => {
    const now = dateToTime(new Date());
    const start = value ?? (!isDisabled(now) ? now : (times.find((t) => !isDisabled(t)) ?? now));
    const [h = '00', m = '00'] = start.split(':');
    setHour(h);
    setMinute(m);
    setOpen(true);
  };

  const changeHour = (h: string) => {
    setHour(h);
    // Keep the minute if it's still allowed in the new hour, else jump to the first allowed one.
    if (!isAllowed(h, minute)) setMinute(firstAllowedMinute(h) ?? minute);
  };

  const draft = `${hour}:${minute}`;
  const draftAllowed = !isDisabled(draft);

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
          <div className="flex w-full gap-2">
            {clearable && value && (
              <Button
                variant="secondary"
                onClick={() => {
                  onCommit(null);
                  setOpen(false);
                }}
                dataTestId={testId('clear')}
              >
                Clear
              </Button>
            )}
            <Button
              fullWidth
              onClick={apply}
              disabled={!draftAllowed}
              dataTestId={testId('apply')}
              className="flex-1"
            >
              {mobileApplyText}
            </Button>
          </div>
        }
      >
        <div className="py-2" data-test-id={testId('wheels')}>
          <WheelPickerWrapper className="justify-center">
            <WheelPicker
              value={hour}
              onValueChange={changeHour}
              options={hourOptions}
              infinite
              classNames={hourClassNames}
            />
            <WheelPicker
              value={minute}
              onValueChange={setMinute}
              options={minuteOptions}
              infinite
              classNames={minuteClassNames}
            />
          </WheelPickerWrapper>
        </div>
      </Modal>
    </div>
  );
}

import { forwardRef, useMemo, useState } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';
import { cn } from '../../lib/cn';
import { TimePickerDesktop } from './TimePickerDesktop';
import { TimePickerMobile } from './TimePickerMobile';
import type { TimePickerProps } from './TimePicker.types';
import { createTimeDisabler, generateTimes, normalizeTime, safeStep } from './TimePicker.utils';

/**
 * A 24-hour time-of-day picker. Never `<input type="time">`, whose 12h/24h
 * display follows the user's OS locale and can't be controlled.
 *
 * - Desktop: a SelectV2 (react-select) dropdown of suggested times every
 *   `step` minutes. Users can type a time too — partial input filters the
 *   suggestions, a complete time that isn't suggested gets its own row.
 * - Mobile (≤ 768px, or `mobile`): a trigger that opens a dialog with an
 *   `HH:mm` field and hour/minute columns, confirmed with Apply.
 *
 * This file owns the value (controlled or not) and the constraints; the two
 * UIs only render them.
 */
export const TimePicker = forwardRef<HTMLDivElement, TimePickerProps>(function TimePicker(
  {
    value,
    defaultValue = null,
    onChange,
    step = 15,
    minTime,
    maxTime,
    excludeTimes,
    filterTime,
    mobile,
    fullWidth = false,
    wrapperClassName,
    ...rest
  },
  ref,
) {
  const isMobileViewport = useIsMobile();
  const isMobile = mobile ?? isMobileViewport;

  const [internalValue, setInternalValue] = useState<string | null>(() =>
    normalizeTime(defaultValue),
  );
  const isControlled = value !== undefined;
  const currentValue = isControlled ? normalizeTime(value) : internalValue;

  const commit = (next: string | null) => {
    if (!isControlled) setInternalValue(next);
    onChange?.(next);
  };

  const resolvedStep = safeStep(step);
  const times = useMemo(() => generateTimes(resolvedStep), [resolvedStep]);

  // Keyed on the array's contents so an inline `excludeTimes={[...]}` doesn't
  // rebuild the predicate (and every option) on each parent render.
  const excludeKey = excludeTimes?.join(',');
  const isDisabled = useMemo(
    () =>
      createTimeDisabler({
        minTime,
        maxTime,
        excludeTimes: excludeKey ? excludeKey.split(',') : undefined,
        filterTime,
      }),
    [minTime, maxTime, excludeKey, filterTime],
  );

  const shared = { ...rest, value: currentValue, onCommit: commit, times, isDisabled };

  return (
    <div ref={ref} className={cn(fullWidth ? 'w-full' : 'w-fit min-w-[260px]', wrapperClassName)}>
      {isMobile ? (
        <TimePickerMobile {...shared} step={resolvedStep} />
      ) : (
        <TimePickerDesktop {...shared} />
      )}
    </div>
  );
});

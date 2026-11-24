import { useMemo, type FocusEvent } from 'react';
import type { FilterOptionOption } from 'react-select';
import { Clock } from 'lucide-react';
import { SelectV2 } from '../SelectV2';
import type { SelectV2Option } from '../SelectV2';
import type { TimePickerProps } from './TimePicker.types';
import { matchesTypedTime, normalizeTime, parseTypedTime } from './TimePicker.utils';

export type TimePickerViewProps = Omit<
  TimePickerProps,
  | 'value'
  | 'defaultValue'
  | 'onChange'
  | 'step'
  | 'minTime'
  | 'maxTime'
  | 'excludeTimes'
  | 'filterTime'
  | 'mobile'
  | 'fullWidth'
  | 'wrapperClassName'
> & {
  value: string | null;
  onCommit: (value: string | null) => void;
  /** Suggested times (`"HH:mm"`), every `step` minutes. */
  times: string[];
  isDisabled: (time: string) => boolean;
};

/**
 * Desktop UI: SelectV2 single-select in react-select's creatable mode, so a
 * typed time that isn't one of the suggestions can still be picked.
 */
export function TimePickerDesktop({
  value,
  onCommit,
  times,
  isDisabled,
  clearable = false,
  searchable = true,
  size = 'md',
  label,
  required = false,
  helperText,
  placeholder = 'Select time',
  disabled = false,
  menuPlacement = 'auto',
  error = false,
  errorText,
  id,
  className,
  dataTestId,
}: TimePickerViewProps) {
  const options = useMemo<SelectV2Option[]>(
    () => times.map((t) => ({ value: t, label: t, disabled: isDisabled(t) })),
    [times, isDisabled],
  );
  const timeSet = useMemo(() => new Set(times), [times]);

  /** A complete, allowed typed time that isn't already a suggestion. */
  const typedNewTime = (input: string) => {
    const time = parseTypedTime(input);
    return time && !timeSet.has(time) && !isDisabled(time) ? time : null;
  };

  // Typing commits a complete time on blur too, like the previous TimePicker —
  // but unlike it, partial or invalid text is just discarded, never turned into 00:00.
  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    const time = parseTypedTime(event.target.value);
    if (time && !isDisabled(time) && time !== value) onCommit(time);
  };

  return (
    <SelectV2
      options={options}
      value={value}
      // A created option arrives as the raw typed text ("907"): normalize it.
      onChange={(next) =>
        onCommit(
          next == null ? null : (normalizeTime(String(next)) ?? parseTypedTime(String(next))),
        )
      }
      // react-select runs this on its own "create" row too (value = raw typed
      // text); that row's visibility is already decided by `isValidNewOption`.
      filterOption={(option: FilterOptionOption<SelectV2Option>, input: string) =>
        (option.data as { __isNew__?: boolean }).__isNew__ === true ||
        matchesTypedTime(option.value, input, (t) => timeSet.has(t))
      }
      dropdownIcon={<Clock className="h-4 w-4" aria-hidden />}
      creatable={searchable}
      isValidNewOption={(input) => typedNewTime(input) !== null}
      formatCreateLabel={(input) => typedNewTime(input)}
      createOptionPosition="first"
      onBlur={handleBlur}
      searchable={searchable}
      clearable={clearable}
      size={size}
      label={label}
      required={required}
      helperText={helperText}
      placeholder={placeholder}
      disabled={disabled}
      menuPlacement={menuPlacement}
      error={error}
      errorText={errorText}
      emptyText="No available time"
      id={id}
      className={className}
      dataTestId={dataTestId}
    />
  );
}

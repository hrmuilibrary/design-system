import { useMemo, useState, type FocusEvent, type KeyboardEvent } from 'react';
import type { FilterOptionOption } from 'react-select';
import { Clock } from 'lucide-react';
import { SelectV2 } from '../SelectV2';
import type { SelectV2Option } from '../SelectV2';
import type { TimePickerProps } from './TimePicker.types';
import {
  isTimeInputKey,
  matchesTypedTime,
  normalizeTime,
  parseTypedTime,
} from './TimePicker.utils';

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
  clearable,
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

  // The box always shows the committed time as editable text, so it can be
  // amended in place (caret wherever the user clicks, arrows to move). `draft`
  // holds what the user has typed since; `null` means "not editing" and the
  // box falls back to the committed time. Disabled fields keep react-select's
  // plain value display, since react-select hides a disabled input.
  const [draft, setDraft] = useState<string | null>(null);
  const editable = searchable && !disabled;
  const inputValue = editable ? (draft ?? value ?? '') : '';

  // Typing commits a complete time on blur too, like the previous TimePicker —
  // but unlike it, partial or invalid text is just discarded, never turned into 00:00.
  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    const time = parseTypedTime(event.target.value);
    if (time && !isDisabled(time) && time !== value) onCommit(time);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!isTimeInputKey(event)) {
      event.preventDefault();
      return;
    }
    // While the list is open, react-select spends Home/End on jumping to the
    // first/last suggestion, so the caret can't reach either end of the typed
    // time. With text in the box, move the caret instead (Shift extends the
    // selection), and keep react-select out of it via preventDefault.
    const input = event.target;
    if (
      (event.key === 'Home' || event.key === 'End') &&
      input instanceof HTMLInputElement &&
      input.value !== ''
    ) {
      event.preventDefault();
      const end = input.value.length;
      if (event.key === 'Home') {
        if (event.shiftKey) input.setSelectionRange(0, input.selectionEnd ?? end, 'backward');
        else input.setSelectionRange(0, 0);
      } else if (event.shiftKey) {
        input.setSelectionRange(input.selectionStart ?? 0, end, 'forward');
      } else {
        input.setSelectionRange(end, end);
      }
    }
  };

  /** The part of the search text the user actually typed: the untouched
   *  committed time isn't a filter, or the menu would narrow to that one row. */
  const editText = (input: string) => (input === value ? '' : input);

  return (
    <SelectV2
      options={options}
      value={value}
      // A created option arrives as the raw typed text ("907"): normalize it.
      onChange={(next) => {
        setDraft(null);
        onCommit(
          next == null ? null : (normalizeTime(String(next)) ?? parseTypedTime(String(next))),
        );
      }}
      inputValue={editable ? inputValue : undefined}
      // Keep what the user types; react-select's own clears (after a
      // selection, on blur, when the menu closes) go back to showing the
      // committed time instead of an empty box.
      onInputChange={
        editable
          ? (next, meta) => setDraft(meta.action === 'input-change' ? next : null)
          : undefined
      }
      // react-select runs this on its own "create" row too (value = raw typed
      // text); that row's visibility is already decided by `isValidNewOption`.
      filterOption={(option: FilterOptionOption<SelectV2Option>, input: string) =>
        (option.data as { __isNew__?: boolean }).__isNew__ === true ||
        matchesTypedTime(option.value, editText(input))
      }
      dropdownIcon={<Clock className="h-4 w-4" aria-hidden />}
      creatable={searchable}
      isValidNewOption={(input) => typedNewTime(editText(input)) !== null}
      formatCreateLabel={(input) => typedNewTime(editText(input))}
      createOptionPosition="first"
      onBlur={handleBlur}
      onKeyDown={searchable ? handleKeyDown : undefined}
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

import type { ReactNode } from 'react';
import type { BaseProps } from '../../types';

export type DatePickerSize = 'lg' | 'md' | 'sm';

/** Mirrors SelectV2's `menuPlacement` surface (react-select's own union). */
export type DatePickerMenuPlacement = 'auto' | 'bottom' | 'top';

export interface DateRange {
  start: Date | null;
  end: Date | null;
}

export interface DatePickerProps extends BaseProps {
  value?: Date | null;
  onChange?: (date: Date | null) => void;
  /** Renders a clear affordance in the trigger (in place of the calendar icon) when a value is selected. Fires `onChange(null)` (or `onChangeRange({ start: null, end: null })` in range mode). */
  clearable?: boolean;
  /** Enable range-selection mode. */
  range?: boolean;
  rangeValue?: DateRange;
  onChangeRange?: (range: DateRange) => void;
  size?: DatePickerSize;
  /** BCP-47 locale tag for the month names and weekday abbreviations. The week always starts on Monday, whatever the locale. */
  locale?: string;
  /** Trigger display format. Supports `dd`/`MM`/`yyyy` tokens plus a literal
   *  separator. Defaults to the pre-existing `'dd.MM.yyyy'`. Applied to both
   *  endpoints in range mode. */
  format?: string;
  label?: ReactNode;
  /** Renders a red asterisk next to the label and sets `aria-required` on the trigger. */
  required?: boolean;
  /** Neutral message rendered below the control, replaced by `errorText` when present. */
  helperText?: ReactNode;
  placeholder?: string;
  /** Fill the parent's width (like Input/Select) instead of the intrinsic
   *  min-width. Use inside form grids so dates line up with other fields. */
  fullWidth?: boolean;
  /** Disable the trigger entirely — blocks both mouse and keyboard activation. */
  disabled?: boolean;
  /** Earliest selectable day, inclusive. Earlier days render disabled. Time-of-day is ignored. */
  minDate?: Date;
  /** Latest selectable day, inclusive. Later days render disabled. Time-of-day is ignored. */
  maxDate?: Date;
  /** Individual days that can't be picked. Matched by calendar day; time-of-day is ignored. */
  excludeDates?: Date[];
  /** Arbitrary per-day predicate, evaluated alongside `minDate`/`maxDate`/`excludeDates`. Days it rejects render disabled. */
  filterDate?: (date: Date) => boolean;
  /** Which side the calendar popover opens on. `'auto'` (default) measures the
   *  popover against the space below the trigger on open and flips upward only
   *  when it doesn't fit and there's more room above; `'top'`/`'bottom'` force
   *  the side regardless of available space. Same surface as SelectV2. */
  menuPlacement?: DatePickerMenuPlacement;
  /** Switch the trigger to the danger border/ring styles. */
  error?: boolean;
  /** Message rendered below the control; also switches the trigger to the danger styles. */
  errorText?: ReactNode;
  id?: string;
  className?: string;
  wrapperClassName?: string;
}

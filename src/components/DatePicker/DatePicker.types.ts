import type { ReactNode } from 'react';
import type { BaseProps } from '../../types';

export type DatePickerSize = 'lg' | 'md' | 'sm';

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
  /** BCP-47 locale tag. Derives month names, weekday abbreviations, and the first day of the week. */
  locale?: string;
  /** Trigger display format. Supports `dd`/`MM`/`yyyy` tokens plus a literal
   *  separator. Defaults to the pre-existing `'dd.MM.yyyy'`. Applied to both
   *  endpoints in range mode. */
  format?: string;
  label?: ReactNode;
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
  /** Switch the trigger to the danger border/ring styles. */
  error?: boolean;
  /** Message rendered below the control; also switches the trigger to the danger styles. */
  errorText?: ReactNode;
  id?: string;
  className?: string;
  wrapperClassName?: string;
}

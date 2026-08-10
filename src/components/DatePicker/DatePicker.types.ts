import type { ReactNode } from 'react';
import type { BaseProps } from '../../types';

export type DatePickerSize = 'lg' | 'md' | 'sm';

export interface DateRange {
  start: Date | null;
  end: Date | null;
}

export interface DatePickerProps extends BaseProps {
  value?: Date | null;
  onChange?: (date: Date) => void;
  /** Enable range-selection mode. */
  range?: boolean;
  rangeValue?: DateRange;
  onChangeRange?: (range: DateRange) => void;
  size?: DatePickerSize;
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

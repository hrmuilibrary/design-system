import type { ReactNode } from 'react';
import type { BaseProps } from '../../types';

export type TimePickerSize = 'lg' | 'md' | 'sm';

/** Mirrors SelectV2's and DatePicker's `menuPlacement` surface. */
export type TimePickerMenuPlacement = 'auto' | 'bottom' | 'top';

export interface TimePickerProps extends BaseProps {
  /** Selected time as a 24-hour `"HH:mm"` string. `null` = controlled with no
   *  selection; leave `undefined` (optionally with `defaultValue`) to let the
   *  picker manage its own state. */
  value?: string | null;
  /** Initial time when uncontrolled. */
  defaultValue?: string | null;
  /** Fires with the picked or typed `"HH:mm"` time, or `null` when cleared. */
  onChange?: (value: string | null) => void;
  /** Minutes between suggested times, starting at 00:00. Default `15`. Typed
   *  times aren't limited to the grid. */
  step?: number;
  /** Earliest allowed time (`"HH:mm"`), inclusive. Earlier suggestions render disabled and can't be typed. */
  minTime?: string;
  /** Latest allowed time (`"HH:mm"`), inclusive. Later suggestions render disabled and can't be typed. */
  maxTime?: string;
  /** Individual times (`"HH:mm"`) that can't be picked or typed. Suggestions stay in the list, disabled. */
  excludeTimes?: string[];
  /** Arbitrary per-time predicate, evaluated alongside `minTime`/`maxTime`/`excludeTimes`. Times it rejects are disabled. */
  filterTime?: (time: string) => boolean;
  /** Shows a clear control once a time is selected; clearing fires `onChange(null)`. */
  clearable?: boolean;
  /** Lets the user type a time — `"930"`, `"0930"`, `"9:30"` or `"09:30"`.
   *  Partial input (`"9"`) filters the suggestions; a complete time that isn't
   *  suggested (`"0907"`) is offered as its own row. Default `true`. */
  searchable?: boolean;
  size?: TimePickerSize;
  label?: ReactNode;
  /** Renders a red asterisk next to the label. */
  required?: boolean;
  /** Neutral message rendered below the control, replaced by `errorText` when present. */
  helperText?: ReactNode;
  /** Default `'Select time'`. */
  placeholder?: string;
  /** Fill the parent's width instead of the intrinsic min-width, like DatePicker. */
  fullWidth?: boolean;
  disabled?: boolean;
  /** Which side the desktop list opens on. `'auto'` (default) flips upward
   *  only when there isn't room below. Same surface as SelectV2/DatePicker. */
  menuPlacement?: TimePickerMenuPlacement;
  /** Switch the trigger to the danger border/ring styles. */
  error?: boolean;
  /** Message rendered below the control; also switches the trigger to the danger styles. */
  errorText?: ReactNode;
  /** Force the mobile UI (`true`, a dialog with hour/minute columns) or the
   *  desktop dropdown (`false`). Default: mobile at viewports ≤ 768px (`useIsMobile`). */
  mobile?: boolean;
  /** Mobile dialog title. Defaults to `label`, then `'Select time'`. */
  mobileTitle?: ReactNode;
  /** Mobile dialog confirm button text. Default `'Apply'`. */
  mobileApplyText?: string;
  /** Mobile dialog cancel button text. Default `'Cancel'`. */
  mobileCancelText?: string;
  id?: string;
  className?: string;
  wrapperClassName?: string;
}

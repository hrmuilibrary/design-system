import type { ReactNode } from 'react';
import type { BaseProps } from '../../types';
import type { SelectV2BaseProps, SelectV2Size } from '../SelectV2/SelectV2.types';

export type TimePickerSize = SelectV2Size;

/** react-select's `menuPlacement` union, same as SelectV2/DatePicker. */
export type TimePickerMenuPlacement = NonNullable<SelectV2BaseProps['menuPlacement']>;

/** Field props TimePicker shares with SelectV2. Inherited rather than
 *  redeclared, so their types and docs live in one place. */
type SelectV2SharedProps = Pick<
  SelectV2BaseProps,
  | 'label'
  | 'helperText'
  | 'error'
  | 'errorText'
  | 'size'
  | 'disabled'
  | 'required'
  | 'placeholder'
  | 'clearable'
  | 'searchable'
  | 'menuPlacement'
  | 'id'
  | 'className'
  | 'wrapperClassName'
>;

/**
 * Props for TimePicker. The shared field props come from SelectV2, but a few
 * defaults differ: `required` defaults to `false` (SelectV2: `true`),
 * `searchable` to `true` (typing a time — `"930"`, `"0930"`, `"09:30"`),
 * `clearable` to `true` (SelectV2: `false`), and `placeholder` to
 * `'Select time'`. On mobile, `menuPlacement` has no effect.
 */
export interface TimePickerProps extends BaseProps, SelectV2SharedProps {
  /** Selected time as a 24-hour `"HH:mm"` string. `null` = controlled with no
   *  selection; leave `undefined` (optionally with `defaultValue`) to let the
   *  picker manage its own state. */
  value?: string | null;
  /** Initial time (`"HH:mm"`) when uncontrolled. Declared here rather than
   *  inherited: react-select's `defaultValue` takes an option object. */
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
  /** Fill the parent's width instead of the intrinsic min-width, like DatePicker. */
  fullWidth?: boolean;
  /** Force the mobile UI (`true`, a dialog with hour/minute wheels) or the
   *  desktop dropdown (`false`). Default: mobile at viewports ≤ 768px (`useIsMobile`). */
  mobile?: boolean;
  /** Mobile dialog title. Defaults to `label`, then `'Select time'`. */
  mobileTitle?: ReactNode;
  /** Mobile dialog confirm button text. Default `'Apply'`. */
  mobileApplyText?: string;
}

import type { HTMLAttributes, ReactElement } from 'react';
import type { RefCallBack, SetValueConfig } from 'react-hook-form';
import type { BaseProps } from '../../types';

/** Deliberately untyped `value`/`onChange`: this render prop feeds whichever
 *  input the consumer wires up (native `value`, Select's `string`, Checkbox's
 *  `boolean`, ...). */
export interface FormFieldRenderProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (...event: any[]) => void;
  onBlur: () => void;
  ref: RefCallBack;
  error: boolean;
  errorText?: string;
  dataTestId?: string;
  /** Imperatively set this field's value, pre-bound to this FormField's
   *  `name` — for a component whose own change contract doesn't fit RHF's
   *  field bindings. Defaults `shouldValidate`/`shouldDirty`/`shouldTouch`
   *  to `true`, overridable via `options`. */
  setFieldValue: (value: unknown, options?: SetValueConfig) => void;
  /** True once the field has been touched, changed from its default value, and currently passes validation. */
  isValid: boolean;
}

export interface FormFieldProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue'>, BaseProps {
  name: string;
  defaultValue?: unknown;
  /** Render prop — receives field bindings plus `error`/`errorText`, e.g. `(p) => <Input {...p} label="Email" />`. */
  render: (props: FormFieldRenderProps) => ReactElement;
}

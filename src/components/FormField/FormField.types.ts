import type { HTMLAttributes, ReactElement } from 'react';
import type { RefCallBack } from 'react-hook-form';
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
}

export interface FormFieldProps extends Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue'>, BaseProps {
  name: string;
  defaultValue?: unknown;
  /** Render prop — receives field bindings plus `error`/`errorText`, e.g. `(p) => <Input {...p} label="Email" />`. */
  render: (props: FormFieldRenderProps) => ReactElement;
}

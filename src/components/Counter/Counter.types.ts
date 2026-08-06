import type { InputHTMLAttributes, ReactNode } from 'react';
import type { BaseProps } from '../../types';
import type { InputSize } from '../Input';

export interface CounterProps
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      'size' | 'type' | 'value' | 'defaultValue' | 'onChange' | 'min' | 'max' | 'step'
    >,
    BaseProps {
  /** Controlled value. */
  value?: number;
  /** Uncontrolled initial value. Default `0`. */
  defaultValue?: number;
  /** Fires on every committed change — button press, or blur after typing. Not native `onChange`, since a button press isn't a `ChangeEvent`. */
  onValueChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  size?: InputSize;
  label?: ReactNode;
  helperText?: ReactNode;
  errorText?: ReactNode;
  error?: boolean;
  wrapperClassName?: string;
}

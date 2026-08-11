import type { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react';
import type { BaseProps } from '../../types';

export type RadioSize = 'md' | 'sm';

/** A Radio's identity — commonly a string, but numbers and booleans (for yes/no groups) are supported too. */
export type RadioValue = string | number | boolean;

export interface RadioGroupProps extends BaseProps {
  name?: string;
  label?: ReactNode;
  value?: RadioValue;
  defaultValue?: RadioValue;
  onChange?: (value: RadioValue) => void;
  disabled?: boolean;
  size?: RadioSize;
  orientation?: 'horizontal' | 'vertical';
  children: ReactNode;
  className?: string;
}

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'name' | 'onChange' | 'value'>,
    BaseProps {
  value: RadioValue;
  size?: RadioSize;
  label?: ReactNode;
  description?: ReactNode;
  error?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

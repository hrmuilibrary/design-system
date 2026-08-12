import type { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react';
import type { BaseProps, OptionValue } from '../../types';

export type RadioSize = 'md' | 'sm';

/**
 * A Radio's identity — commonly a string, but numbers and booleans (for
 * yes/no groups) are supported too. Note: like `OptionValue`, values are
 * compared via `String(...)`, so `true` and `'true'` (or `1` and `'1'`) are
 * treated as the same option — don't mix representations within one group.
 */
export type RadioValue = OptionValue | boolean;

export interface RadioGroupProps extends BaseProps {
  name?: string;
  label?: ReactNode;
  value?: RadioValue;
  defaultValue?: RadioValue;
  onChange?: (value: RadioValue) => void;
  disabled?: boolean;
  size?: RadioSize;
  orientation?: 'horizontal' | 'vertical';
  /** Renders a red asterisk next to `label` and sets `aria-required` on the group. */
  required?: boolean;
  /** Cascades to every child `Radio`, OR'd with each `Radio`'s own `error` — mirrors how `disabled` already cascades. Implied by `errorText`. */
  error?: boolean;
  /** Message rendered below the group in the danger style; implies `error`. Replaces `helperText` when set. */
  errorText?: ReactNode;
  /** Neutral message rendered below the group, replaced by `errorText` when present. */
  helperText?: ReactNode;
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

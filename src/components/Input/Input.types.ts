import type { InputHTMLAttributes, ReactNode } from 'react';
import type { BaseProps } from '../../types';

export type InputSize = 'lg' | 'md' | 'sm';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, BaseProps {
  label?: ReactNode;
  /** Content rendered on the label row, right of the label text and required marker — e.g. an info tooltip trigger. Rendered as a sibling of the `<label>`, not a child, so an interactive addon never steals focus into the field. */
  labelAddons?: ReactNode;
  helperText?: ReactNode;
  errorText?: ReactNode;
  size?: InputSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
  error?: boolean;
  wrapperClassName?: string;
}

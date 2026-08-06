import type { ReactNode } from 'react';
import type { BaseProps } from '../../types';

export type SelectSize = 'lg' | 'md' | 'sm';

export interface SelectOption {
  value: string;
  label: ReactNode;
  disabled?: boolean;
}

export interface SelectProps extends BaseProps {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: ReactNode;
  /** Content rendered on the label row, right of the label text — e.g. an info tooltip trigger. Rendered as a sibling of the `<label>`, not a child, so an interactive addon never steals focus into the trigger. */
  labelAddons?: ReactNode;
  helperText?: ReactNode;
  errorText?: ReactNode;
  error?: boolean;
  size?: SelectSize;
  disabled?: boolean;
  id?: string;
  className?: string;
  wrapperClassName?: string;
}

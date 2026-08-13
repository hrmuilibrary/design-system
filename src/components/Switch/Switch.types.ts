import type { InputHTMLAttributes, ReactNode } from 'react';
import type { BaseProps } from '../../types';

export type SwitchSize = 'md' | 'sm';

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'>, BaseProps {
  size?: SwitchSize;
  label?: ReactNode;
  description?: ReactNode;
  labelPosition?: 'left' | 'right';
}

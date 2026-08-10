import type { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react';
import type { BaseProps } from '../../types';

export type RadioSize = 'md' | 'sm';

export interface RadioGroupProps extends BaseProps {
  name?: string;
  label?: ReactNode;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  size?: RadioSize;
  orientation?: 'horizontal' | 'vertical';
  children: ReactNode;
  className?: string;
}

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'name' | 'onChange'>,
    BaseProps {
  value: string;
  size?: RadioSize;
  label?: ReactNode;
  description?: ReactNode;
  error?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

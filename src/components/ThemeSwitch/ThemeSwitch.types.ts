import type { InputHTMLAttributes, ReactNode } from 'react';
import type { BaseProps } from '../../types';

export interface ThemeSwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'>,
    BaseProps {
  /** `true` renders the "dark" thumb position. Purely presentational — `ThemeSwitch` owns no theme state; wire `onChange` to your own theme toggle. */
  checked?: boolean;
  label?: ReactNode;
}

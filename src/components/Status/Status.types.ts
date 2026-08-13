import type { HTMLAttributes, ReactNode } from 'react';
import type { BaseProps } from '../../types';

export type StatusVariant =
  'general' | 'info' | 'brand' | 'danger' | 'warning' | 'success' | 'discovery' | 'disabled';

export type StatusSize = 'lg' | 'md' | 'sm';

export interface StatusProps extends HTMLAttributes<HTMLSpanElement>, BaseProps {
  variant?: StatusVariant;
  size?: StatusSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  /** Renders a leading color dot when true and no `leftIcon` is supplied. */
  dot?: boolean;
}

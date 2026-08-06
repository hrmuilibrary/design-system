import type { AnchorHTMLAttributes, ReactNode } from 'react';
import type { BaseProps } from '../../types';
import type { TextColor, TextVariant, TextWeight } from '../Text';

export type LinkUnderline = 'hover' | 'always' | 'none';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, BaseProps {
  /** Typography variant, same scale as `Text`. Default `'p-std'`. */
  variant?: TextVariant;
  weight?: TextWeight;
  /** Semantic text color, same scale as `Text`. Default `'brand'`. */
  color?: TextColor;
  underline?: LinkUnderline;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  truncate?: boolean;
}

import type { HTMLAttributes, ElementType } from 'react';
import type { BaseProps } from '../../types';

export type TextVariant =
  | 'h-xl'
  | 'h-lg'
  | 'h-md'
  | 'h-std'
  | 'h-sm'
  | 'h-xs'
  | 'p-lg'
  | 'p-md'
  | 'p-std'
  | 'p-sm'
  | 'p-xs'
  | 'label-lg'
  | 'label-md'
  | 'label-std'
  | 'label-sm'
  | 'label-xs'
  | 'label-xxs';

export type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold';

export type TextColor =
  | 'default'
  | 'secondary'
  | 'tertiary'
  | 'disabled'
  | 'inverse'
  | 'brand'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger';

export interface TextProps extends HTMLAttributes<HTMLElement>, BaseProps {
  /** Typographic token — pairs size + line-height from tokens.css. */
  variant?: TextVariant;
  weight?: TextWeight;
  color?: TextColor;
  /** HTML element to render. Defaults to a sensible mapping based on variant. */
  as?: ElementType;
  /** Truncate to a single line with ellipsis. */
  truncate?: boolean;
  /** Truncate to this many lines with ellipsis (CSS line-clamp). Ignored when `truncate` is set. */
  clamp?: number;
}

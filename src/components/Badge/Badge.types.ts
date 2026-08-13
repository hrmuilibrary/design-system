import type { HTMLAttributes, ReactNode } from 'react';
import type { BaseProps } from '../../types';

export type BadgeVariant =
  'neutral' | 'brand' | 'success' | 'warning' | 'danger' | 'info' | 'privacy';
export type BadgeStyle = 'filled' | 'outline' | 'accent';
export type BadgeSize = 'lg' | 'md' | 'sm' | 'xs';
export type BadgeShape = 'rounded' | 'pill';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, BaseProps {
  variant?: BadgeVariant;
  appearance?: BadgeStyle;
  size?: BadgeSize;
  /** `'pill'` is fully rounded; `'rounded'` (default) uses the size's own corner radius. */
  shape?: BadgeShape;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  /** Renders a trailing dismiss button (replacing `rightIcon`) that calls this on click. */
  onDismiss?: () => void;
  /** Renders as a standalone status dot instead of a labeled badge. Ignores `children`, icons, and `onDismiss`. */
  dot?: boolean;
  /** Renders a leading status dot before `children`, in place of `leftIcon`. */
  withDot?: boolean;
  /** Dims the badge and blocks pointer/keyboard interaction, including `onDismiss`. */
  disabled?: boolean;
  /** Adds hover/active states, a focus ring, `role="button"`, and Enter/Space activation for `onClick`. */
  interactive?: boolean;
}

import type { HTMLAttributes } from 'react';
import type { BaseProps } from '../../types';

export type ProgressVariant = 'linear' | 'circular';
export type ProgressSize = 'sm' | 'lg';

export interface ProgressProps extends HTMLAttributes<HTMLDivElement>, BaseProps {
  variant?: ProgressVariant;
  size?: ProgressSize;
  /** Completion percentage (0-100). Ignored when `stepCount`/`currentStep` are set. */
  percent?: number;
  stepCount?: number;
  currentStep?: number;
  /** Hides the percent/step text next to (linear) or inside (circular) the bar. */
  hideLabel?: boolean;
  /** Circular only — overrides the size-based default radius, in px. */
  dimension?: number;
  /** Circular only — renders an indeterminate spinner instead of tracking `percent`. */
  loop?: boolean;
}

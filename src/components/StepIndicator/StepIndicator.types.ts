import type { HTMLAttributes, ReactNode } from 'react';
import type { BaseProps } from '../../types';

export type StepIndicatorStatus = 'upcoming' | 'active' | 'completed' | 'rejected';
export type StepIndicatorMarker = 'number' | 'dot' | 'icon';
export type StepIndicatorOrientation = 'horizontal' | 'vertical';
export type StepIndicatorSize = 'lg' | 'sm';

export interface StepIndicatorItem {
  value: string | number;
  label: ReactNode;
  description?: ReactNode;
  status?: StepIndicatorStatus;
  /** Halo ring around the marker — an orthogonal emphasis flag, independent of `status` (e.g. a completed step still awaiting review). */
  highlighted?: boolean;
}

export interface StepIndicatorProps extends Omit<HTMLAttributes<HTMLOListElement>, 'children'>, BaseProps {
  steps: StepIndicatorItem[];
  /** Marks the matching step `aria-current="step"`. */
  activeValue?: string | number;
  /** Wraps each marker in a `<button>` when set. Omit to render a non-interactive indicator. */
  onStepSelect?: (value: string | number) => void;
  marker?: StepIndicatorMarker;
  orientation?: StepIndicatorOrientation;
  size?: StepIndicatorSize;
}

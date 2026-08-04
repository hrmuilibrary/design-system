import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import type { BaseProps } from '../../types';

export type SkeletonVariant = 'text' | 'circular' | 'rectangular' | 'rounded';
export type SkeletonAnimation = 'pulse' | 'wave' | 'none';

export interface SkeletonProps extends HTMLAttributes<HTMLSpanElement>, BaseProps {
  /** Visual shape of the placeholder. */
  variant?: SkeletonVariant;
  /** Animation style. Pass `'none'` to disable. */
  animation?: SkeletonAnimation;
  /** Width as a number (px) or any valid CSS length / percentage. */
  width?: number | string;
  /** Height as a number (px) or any valid CSS length / percentage. */
  height?: number | string;
  /** Render N stacked skeletons. Useful for placeholder paragraphs. */
  count?: number;
  /**
   * If provided, the skeleton wraps the children and infers its size from
   * them while the children remain invisible (used as a layout guide).
   */
  children?: ReactNode;
  style?: CSSProperties;
}

import type { HTMLAttributes } from 'react';
import type { BaseProps } from '../../types';

export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerVariant = 'solid' | 'dashed';
export type DividerColor = 'default' | 'subtle' | 'strong' | 'brand';

export interface DividerProps extends HTMLAttributes<HTMLDivElement>, BaseProps {
  orientation?: DividerOrientation;
  variant?: DividerVariant;
  color?: DividerColor;
}

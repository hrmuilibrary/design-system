import type { HTMLAttributes, ReactNode } from 'react';
import type { BaseProps } from '../../types';
import type { TextProps } from '../Text';

export interface ReadMoreProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'>, BaseProps {
  children: ReactNode;
  /** Lines shown while collapsed. Default `3`. Ignored when `collapsedContent` supplies its own text. */
  clamp?: number;
  /** Escape hatch for collapsed copy that genuinely differs from `children`, rather than just clamping it. */
  collapsedContent?: ReactNode;
  expandLabel?: ReactNode;
  collapseLabel?: ReactNode;
  defaultExpanded?: boolean;
  expanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  /** Typography passed through to the underlying `Text`. */
  textProps?: Pick<TextProps, 'variant' | 'weight' | 'color'>;
}

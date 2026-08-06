import type { HTMLAttributes, ReactNode } from 'react';
import type { BaseProps } from '../../types';

export type CardGroupTitleColor = 'brand' | 'blue' | 'purple' | 'pink' | 'yellow' | 'gray';
export type CardGroupTitlePlacement = 'top' | 'left' | 'right';

export interface CardGroupTitle {
  text: ReactNode;
  /** Default `'gray'`. */
  color?: CardGroupTitleColor;
  /** Default `'left'`. `'left'`/`'right'` render a vertical rail along that edge; `'top'` renders a horizontal bar. */
  placement?: CardGroupTitlePlacement;
}

export interface CardGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>, BaseProps {
  title?: CardGroupTitle;
  /** Extra content beside the title, rendered as the first divided section. */
  header?: ReactNode;
  children?: ReactNode;
  /** Disables the automatic divider between the header and each child. */
  noDivider?: boolean;
}

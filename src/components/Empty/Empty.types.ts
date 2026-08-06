import type { HTMLAttributes, ReactNode } from 'react';
import type { BaseProps } from '../../types';

export type EmptySize = 'lg' | 'sm';

export interface EmptyProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>, BaseProps {
  size?: EmptySize;
  title?: ReactNode;
  description?: ReactNode;
  /** Defaults to a `SearchX` icon in an `IconTile` circle — pass your own illustration node to override. */
  illustration?: ReactNode;
  /** Slot for a call-to-action, e.g. a `<Button>`. */
  action?: ReactNode;
}

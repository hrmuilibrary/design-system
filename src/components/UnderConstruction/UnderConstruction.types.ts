import type { HTMLAttributes, ReactNode } from 'react';
import type { BaseProps } from '../../types';

export type UnderConstructionSize = 'lg' | 'sm';

export interface UnderConstructionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>, BaseProps {
  size?: UnderConstructionSize;
  /** Defaults to "We'll be back soon" — pass a translated string for other locales. */
  title?: ReactNode;
  /** Defaults to a generic maintenance message — pass a translated string for other locales. */
  description?: ReactNode;
  /** Defaults to a `Construction` icon in an `IconTile` circle — pass your own illustration node to override. */
  illustration?: ReactNode;
}

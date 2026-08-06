import type { HTMLAttributes, ReactNode } from 'react';
import type { BaseProps } from '../../types';

export type BreadcrumbSize = 'md' | 'sm';

export interface BreadcrumbItem {
  value: string | number;
  label: ReactNode;
  /** Renders the crumb as an `<a>` instead of a `<button>`. */
  href?: string;
  disabled?: boolean;
}

export interface BreadcrumbProps extends Omit<HTMLAttributes<HTMLElement>, 'onSelect'>, BaseProps {
  items: BreadcrumbItem[];
  /** Value of the current-page crumb, rendered as plain text with `aria-current="page"`. Defaults to the last item. */
  currentValue?: string | number;
  onSelect?: (value: string | number) => void;
  /** Rendered between crumbs, hidden from assistive tech. Default `'/'`. */
  separator?: ReactNode;
  size?: BreadcrumbSize;
}

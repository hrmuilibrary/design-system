import type { HTMLAttributes, ReactNode } from 'react';
import type { BaseProps } from '../../types';

export interface SidebarProps extends Omit<HTMLAttributes<HTMLElement>, 'title'>, BaseProps {
  /** Uncontrolled initial collapsed state. */
  defaultCollapsed?: boolean;
  /** Controlled collapsed state. Pass alongside `onCollapsedChange` to fully control it. */
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  children: ReactNode;
  logo?: ReactNode;
  title?: ReactNode;
  subtitle?: ReactNode;
}

export interface SidebarItemProps extends Omit<HTMLAttributes<HTMLElement>, 'onClick'>, BaseProps {
  icon?: ReactNode;
  label: ReactNode;
  /** Marks the item as the current selection and, when it has `children`, defaults its group open. */
  active?: boolean;
  badge?: ReactNode;
  /** Nested items, rendered as a collapsible group below this item. */
  children?: ReactNode;
  onClick?: () => void;
  /** Renders the item as an `<a>` instead of a `<button>` when provided. */
  href?: string;
}

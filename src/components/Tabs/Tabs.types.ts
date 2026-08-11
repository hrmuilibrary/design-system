import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import type { BaseProps, OptionValue } from '../../types';
import type { BadgeProps } from '../Badge';

export type TabsVariant = 'underline' | 'pills' | 'boxed';
export type TabsSize = 'lg' | 'md' | 'sm';

export interface TabsProps extends HTMLAttributes<HTMLDivElement>, BaseProps {
  /** Uncontrolled initial active tab value. Falls back to the first `<Tab>`'s value if omitted. */
  defaultValue?: OptionValue;
  /** Controlled active tab value. Pass alongside `onValueChange` to fully control which tab is active. */
  value?: OptionValue;
  onValueChange?: (value: OptionValue) => void;
  variant?: TabsVariant;
  size?: TabsSize;
  /** Disables every tab in the bar at once. OR'd with each `Tab`'s own `disabled`. */
  disabled?: boolean;
}

export interface TabListProps extends HTMLAttributes<HTMLDivElement>, BaseProps {
  /** Horizontally scrolls the bar when tabs overflow, instead of wrapping. */
  scrollable?: boolean;
}

export interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement>, BaseProps {
  /** Unique identifier matched against the parent `Tabs`'s active value. */
  value: OptionValue;
  icon?: ReactNode;
  /** Count/indicator rendered after the label. Hidden when `undefined`, `null`, or `false`. */
  badge?: ReactNode;
  /** Styles `badge` through `Badge` instead of the default fixed-style count pill. Omit to keep the default. */
  badgeProps?: Pick<BadgeProps, 'variant' | 'appearance' | 'size'>;
  /** Trailing icon rendered as its own button — e.g. a close-tab X. Rendered as a sibling of the tab button, not a nested one (nesting a button inside a button is invalid HTML). */
  rightIcon?: ReactNode;
  /** Called with this tab's `value` when `rightIcon` is clicked. Does not activate the tab. */
  onRightIconClick?: (value: OptionValue) => void;
  /** Accessible name for the `rightIcon` button. Required when `rightIcon` is set. */
  rightIconLabel?: string;
}

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement>, BaseProps {
  /** Matched against the parent `Tabs`'s active value; hidden (or unmounted, depending on `keepMounted`) when not active. */
  value: OptionValue;
  /** Keeps the panel mounted (hidden via the `hidden` attribute) while inactive, instead of unmounting it — preserves scroll position and in-panel state across tab switches. */
  keepMounted?: boolean;
}

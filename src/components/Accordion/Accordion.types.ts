import type { HTMLAttributes, ReactNode } from 'react';
import type { BaseProps, OptionValue } from '../../types';

export type AccordionType = 'single' | 'multiple';

export interface AccordionProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'value'>,
    BaseProps {
  /** `'single'` keeps at most one item open at a time; `'multiple'` allows any number. */
  type?: AccordionType;
  /** Uncontrolled initial open value(s) — a single string for `'single'`, an array for `'multiple'`. */
  defaultValue?: OptionValue | OptionValue[];
  /** Controlled open value(s). Pass alongside `onValueChange` to fully control which item(s) are open. */
  value?: OptionValue | OptionValue[];
  onValueChange?: (value: OptionValue | OptionValue[]) => void;
  /** Animates each panel open/closed. Set `false` for the pre-1.x instant toggle (also restores the plain `hidden` attribute instead of the animated grid wrapper). */
  animated?: boolean;
  /** Renders a Divider between each item's header and its panel content. */
  showDivider?: boolean;
  children: ReactNode;
}

export interface AccordionItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>, BaseProps {
  /** Unique identifier used to track open/closed state within the parent `Accordion`. */
  value: OptionValue;
  title: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
  children: ReactNode;
}

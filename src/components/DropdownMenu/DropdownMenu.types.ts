import type { ButtonHTMLAttributes, HTMLAttributes, ReactElement, ReactNode, RefObject } from 'react';
import type { BaseProps } from '../../types';
import type { AnchoredAlign, AnchoredSide } from '../../lib/useAnchoredPosition';

export type DropdownContentAlign = AnchoredAlign;
export type DropdownContentSide = AnchoredSide;
export type DropdownContentStrategy = 'fixed' | 'absolute';

export interface DropdownMenuProps extends HTMLAttributes<HTMLDivElement>, BaseProps {
  children: ReactNode;
  /** Uncontrolled initial open state. */
  defaultOpen?: boolean;
  /** Controlled open state. Pass alongside `onOpenChange` to fully control the menu. */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Anchor the panel to an element the consumer owns instead of `<DropdownTrigger>`'s child.
   *  Accepts either a ref object or the element itself, so consumers holding the anchor as
   *  plain `useState<HTMLElement | null>` state don't have to fabricate a `{ current: el }`
   *  wrapper every render. */
  anchorRef?: RefObject<HTMLElement | null> | HTMLElement | null;
}

export interface DropdownTriggerProps {
  /** A single element cloned with the click handler and `aria-haspopup`/`aria-expanded` that open the menu. */
  children: ReactElement;
}

export interface DropdownContentProps extends HTMLAttributes<HTMLDivElement>, BaseProps {
  children: ReactNode;
  /** Horizontal alignment of the panel relative to the trigger. */
  align?: DropdownContentAlign;
  /** `'fixed'` portals the panel to `document.body` so it can never be clipped by an
   *  `overflow: hidden` ancestor. `'absolute'` is the pre-1.x behaviour, kept as an escape
   *  hatch for consumers who positioned the panel themselves via `className`. */
  strategy?: DropdownContentStrategy;
  /** Preferred vertical side. Auto-flips when there isn't room, unless `flip` is false. Only applies when `strategy="fixed"`. */
  side?: DropdownContentSide;
  sideOffset?: number;
  flip?: boolean;
  shift?: boolean;
  /** Sets the panel's min-width to the trigger's/anchor's width. */
  matchTriggerWidth?: boolean;
  /** Closes the menu when any ancestor scrolls. */
  closeOnScroll?: boolean;
}

export interface DropdownItemProps extends ButtonHTMLAttributes<HTMLButtonElement>, BaseProps {
  children: ReactNode;
  /** Called on click, after any native `onClick`, then closes the menu. */
  onSelect?: () => void;
  icon?: ReactNode;
  /** Trailing hint text, e.g. a keyboard shortcut. */
  shortcut?: ReactNode;
  /** Renders the item in the danger palette for destructive actions. */
  destructive?: boolean;
  /** Renders a leading check mark when `true`; reserves the space (unchecked) when `false`. Omit entirely for items with no check state. */
  checked?: boolean;
  /** Secondary line rendered under the label. */
  meta?: ReactNode;
}

export interface DropdownSeparatorProps extends HTMLAttributes<HTMLDivElement>, BaseProps {}

export interface DropdownLabelProps extends HTMLAttributes<HTMLDivElement>, BaseProps {
  children: ReactNode;
}

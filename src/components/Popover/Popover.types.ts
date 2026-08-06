import type { ReactElement, ReactNode } from 'react';
import type { BaseProps } from '../../types';
import type { FloatingAlign, FloatingSide } from '../../lib/useFloatingPosition';

export type PopoverSide = FloatingSide;
export type PopoverAlign = FloatingAlign;

export interface PopoverProps extends BaseProps {
  /** Bubble content. May contain interactive elements — unlike `Tooltip`, the bubble is not `pointer-events-none`. */
  content: ReactNode;
  /** Single trigger element; `Popover` attaches an `onClick` (composed with any the child already has) plus `aria-expanded`/`aria-haspopup`. */
  children: ReactElement;
  side?: PopoverSide;
  align?: PopoverAlign;
  /** Gap between the trigger and the bubble, in px. Default `8`. */
  offset?: number;
  /** Controlled open state. Pass alongside `onOpenChange` to fully control the popover. */
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Flips to the opposite side on the same axis when there isn't room. Default `true`. */
  flip?: boolean;
  showArrow?: boolean;
  /** Closes the popover when any ancestor scrolls. Default `true`. */
  closeOnScroll?: boolean;
  /** Moves focus into the bubble on open, restoring it to the trigger on close. Default `false` — there is no focus trap in v1, so use sparingly for content that's genuinely keyboard-operable. */
  autoFocus?: boolean;
  className?: string;
  /** Portal target. Defaults to `document.body`. */
  container?: HTMLElement | null;
}

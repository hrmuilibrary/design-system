import type { ReactElement, ReactNode } from 'react';
import type { BaseProps } from '../../types';

export type TooltipSide = 'top' | 'bottom' | 'left' | 'right';
export type TooltipSize = 'lg' | 'sm';

export interface TooltipProps extends BaseProps {
  /** Tooltip bubble content. */
  content: ReactNode;
  /** Single trigger element the tooltip attaches its hover/focus handlers to. */
  children: ReactElement;
  side?: TooltipSide;
  size?: TooltipSize;
  /** Delay in ms before the tooltip opens on hover/focus. */
  delay?: number;
  /** DOM node to portal the tooltip into. Defaults to `document.body`. */
  portalTarget?: HTMLElement | null;
  className?: string;
}

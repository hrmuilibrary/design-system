import type { ReactNode } from 'react';
import type { BaseProps } from '../../types';

export type DrawerSide = 'right' | 'left' | 'top' | 'bottom';
export type DrawerSize = 'sm' | 'md' | 'lg' | 'xl';

export interface DrawerProps extends BaseProps {
  /** Whether the drawer is rendered and visible. */
  open: boolean;
  /** Called when the drawer requests to be closed (Escape, overlay click, close button). */
  onClose: () => void;
  /** Edge of the viewport the drawer slides in from. */
  side?: DrawerSide;
  /** Panel size — width when `side` is left/right, height when top/bottom. */
  size?: DrawerSize;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  /** Whether clicking the overlay backdrop calls `onClose`. */
  closeOnOverlayClick?: boolean;
  /** Whether the built-in close (X) button is rendered. */
  showClose?: boolean;
  /** Slides/fades the drawer in and out. Set `false` for the pre-1.x instant mount/unmount. */
  animated?: boolean;
  /** Extra controls in the header, left of the close button — e.g. a pin or back button. */
  headerActions?: ReactNode;
  className?: string;
}

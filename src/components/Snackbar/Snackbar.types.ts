import type { ReactNode } from 'react';
import type { BaseProps } from '../../types';

export type SnackbarVariant = 'success' | 'warning' | 'danger' | 'info' | 'neutral';

export type SnackbarPosition =
  'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

export interface SnackbarItem extends BaseProps {
  id: string;
  /** Overrides the provider's `position` for this toast only. */
  position?: SnackbarPosition;
  message: ReactNode;
  variant?: SnackbarVariant;
  duration?: number;
  action?: { label: string; onClick: () => void };
}

export interface SnackbarContextValue {
  show: (item: Omit<SnackbarItem, 'id'> & { id?: string }) => string;
  dismiss: (id: string) => void;
}

export interface SnackbarProviderProps extends BaseProps {
  children: ReactNode;
  /** Default position for toasts that don't set their own. Defaults to `bottom-center`. */
  position?: SnackbarPosition;
}

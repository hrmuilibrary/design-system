import type { HTMLAttributes, ReactNode } from 'react';
import type { BaseProps } from '../../types';
import type { UploadRejection } from '../Upload';

export type AvatarSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type AvatarStatus = 'online' | 'offline' | 'away' | 'busy';

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement>, BaseProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  status?: AvatarStatus;
  shape?: 'circle' | 'square';
  fallback?: ReactNode;
  /** Renders an edit affordance in the bottom-right corner, scaled to `size`, that opens a file picker. */
  editable?: boolean;
  /**
   * Called with the picked file. `Avatar` shows an immediate local preview
   * (an object URL it creates and revokes itself on replacement/unmount)
   * that takes precedence over `src` until `src` itself changes to a new
   * value, at which point the new `src` wins and the local preview is
   * dropped.
   */
  onImageChange?: (file: File) => void;
  /**
   * Forwarded to the internal picker. Same matching rules as
   * `UploadProps.accept`, but always enforced here (unlike `Upload`, where
   * enforcement is gated behind `validateFiles`).
   */
  accept?: string;
  /**
   * Forwarded to the internal picker. Same matching rules as
   * `UploadProps.maxSizeMB`, but always enforced here (unlike `Upload`,
   * where enforcement is gated behind `validateFiles`).
   */
  maxSizeMB?: number;
  /** Called when the picked file fails `accept`/`maxSizeMB` validation. */
  onReject?: (rejection: UploadRejection) => void;
}

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement>, BaseProps {
  size?: AvatarSize;
  max?: number;
  children: ReactNode;
}

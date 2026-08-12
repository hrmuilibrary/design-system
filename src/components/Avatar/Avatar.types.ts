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
  /** Called with the picked file. `Avatar` shows an immediate local preview and revokes its own object URL on replacement/unmount. */
  onImageChange?: (file: File) => void;
  /** Forwarded to the internal picker. Same semantics as `UploadProps.accept`. */
  accept?: string;
  /** Forwarded to the internal picker. Same semantics as `UploadProps.maxSizeMB`. */
  maxSizeMB?: number;
  /** Called when the picked file fails `accept`/`maxSizeMB` validation. */
  onReject?: (rejection: UploadRejection) => void;
}

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement>, BaseProps {
  size?: AvatarSize;
  max?: number;
  children: ReactNode;
}

import type { HTMLAttributes, ReactNode } from 'react';
import type { BaseProps } from '../../types';

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
}

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement>, BaseProps {
  size?: AvatarSize;
  max?: number;
  children: ReactNode;
}

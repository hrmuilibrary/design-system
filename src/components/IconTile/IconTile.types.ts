import type { HTMLAttributes } from 'react';
import type { LucideIcon } from 'lucide-react';
import type { BaseProps } from '../../types';

export type IconTileTone =
  'brand' | 'info' | 'gray' | 'purple' | 'pink' | 'yellow' | 'success' | 'warning' | 'danger';

export type IconTileSize = 'sm' | 'md' | 'lg' | 'xl';
export type IconTileShape = 'rounded' | 'circle';

export interface IconTileProps extends HTMLAttributes<HTMLDivElement>, BaseProps {
  /** Any lucide-react icon component, rendered centered inside the tile. */
  icon: LucideIcon;
  tone?: IconTileTone;
  size?: IconTileSize;
  shape?: IconTileShape;
}

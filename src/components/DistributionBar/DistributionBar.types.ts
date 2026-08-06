import type { HTMLAttributes, ReactNode } from 'react';
import type { BaseProps } from '../../types';

// Series colors have no semantic aliases (a distribution's segments are
// arbitrary categories, not a fixed set of statuses) — raw palette here is
// a deliberate, documented exception, same precedent as IconTile's tones.
export type DistributionColor = 'brand' | 'blue' | 'purple' | 'pink' | 'yellow' | 'red' | 'gray';
export type DistributionBarSize = 'sm' | 'lg';

export interface DistributionSegment {
  label: ReactNode;
  value: number;
  color: DistributionColor;
  /** Suffix appended after the formatted value in the legend, e.g. `'AMD'`. */
  unit?: string;
  /** Still counted in the bar's proportions, just omitted from the legend list. */
  hideFromLegend?: boolean;
}

export interface DistributionBarProps extends HTMLAttributes<HTMLDivElement>, BaseProps {
  segments: DistributionSegment[];
  hideLegend?: boolean;
  /** Default: `Intl.NumberFormat().format`. */
  formatValue?: (value: number) => string;
  size?: DistributionBarSize;
}

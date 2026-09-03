import type { HTMLAttributes, ReactNode } from 'react';
import type { BaseProps, TranslationLocale } from '../../types';

export type DeviceRestrictionType = 'mobile' | 'tablet' | 'desktop' | 'mobile-tablet';

export interface DeviceRestrictionProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>, BaseProps {
  /** Which device(s) the page requires. Drives the default icon, title, and
   *  description. Defaults to `'desktop'`. */
  type?: DeviceRestrictionType;
  /** Defaults to a translated built-in string for `type`. */
  title?: ReactNode;
  /** Defaults to a translated built-in string for `type`. */
  description?: ReactNode;
  /** Defaults to a `type`-specific lucide icon in an `IconTile` — pass your
   *  own node to override. */
  icon?: ReactNode;
  /** Language for the built-in title/description. An explicit `title`/
   *  `description` still takes precedence over the translated default.
   *  Default `'en-US'`. */
  locale?: TranslationLocale;
  /** Stretches the component to fill its container's height (`h-full`),
   *  for centering inside a full-viewport-height parent. Off by default —
   *  the component never forces a height on its own. */
  fillHeight?: boolean;
}

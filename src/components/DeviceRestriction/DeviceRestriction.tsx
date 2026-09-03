import { forwardRef } from 'react';
import { Smartphone, Tablet, Monitor, TabletSmartphone, type LucideIcon } from 'lucide-react';
import { cn } from '../../lib/cn';
import { IconTile } from '../IconTile';
import { Text } from '../Text';
import { DEVICE_RESTRICTION_TRANSLATIONS } from './DeviceRestriction.i18n';
import type { DeviceRestrictionProps, DeviceRestrictionType } from './DeviceRestriction.types';

const typeIcon: Record<DeviceRestrictionType, LucideIcon> = {
  mobile: Smartphone,
  tablet: Tablet,
  desktop: Monitor,
  'mobile-tablet': TabletSmartphone,
};

export const DeviceRestriction = forwardRef<HTMLDivElement, DeviceRestrictionProps>(
  function DeviceRestriction(
    {
      type = 'desktop',
      locale = 'en-US',
      title,
      description,
      icon,
      fillHeight = false,
      className,
      dataTestId,
      ...rest
    },
    ref,
  ) {
    const t = DEVICE_RESTRICTION_TRANSLATIONS[locale][type];

    return (
      <div
        ref={ref}
        data-test-id={dataTestId}
        className={cn(
          'flex flex-col items-center justify-center text-center px-6 py-16',
          fillHeight && 'h-full',
          className,
        )}
        {...rest}
      >
        {icon ?? (
          <IconTile
            icon={typeIcon[type]}
            tone="gray"
            shape="rounded"
            size="xl"
            className="rounded-2xl"
          />
        )}
        <Text as="h3" variant="h-xs" weight="semibold" className="mt-6">
          {title ?? t.title}
        </Text>
        <Text variant="p-md" color="secondary" className="mt-2 max-w-105">
          {description ?? t.description}
        </Text>
      </div>
    );
  },
);

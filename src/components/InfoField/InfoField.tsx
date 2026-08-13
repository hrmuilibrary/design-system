import { forwardRef } from 'react';
import { cn } from '../../lib/cn';
import { IconTile } from '../IconTile';
import type { InfoFieldProps } from './InfoField.types';

/* Labeled value row with a leading tinted icon, uppercase label, value,
 * and an optional action slot on the right. The General Information block
 * on the Profile page uses this primitive; settings / contact / payroll
 * detail pages reach for the same shape. */

export const InfoField = forwardRef<HTMLDivElement, InfoFieldProps>(function InfoField(
  { icon, iconTone = 'brand', label, value, action, className, dataTestId, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      data-test-id={dataTestId}
      className={cn('flex items-start gap-3', className)}
      {...rest}
    >
      <IconTile icon={icon} tone={iconTone} size="md" />
      <div className="min-w-0 flex-1">
        <div className="text-p-xs font-medium uppercase tracking-widest text-fg-tertiary">
          {label}
        </div>
        <div className="text-p-std font-semibold text-fg-default mt-1 break-words">{value}</div>
      </div>
      {action && <div className="shrink-0 flex items-center">{action}</div>}
    </div>
  );
});

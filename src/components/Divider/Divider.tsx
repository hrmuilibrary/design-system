import { forwardRef } from 'react';
import { cn } from '../../lib/cn';
import type {
  DividerColor,
  DividerOrientation,
  DividerProps,
  DividerVariant,
} from './Divider.types';

const orientationStyles: Record<DividerOrientation, string> = {
  horizontal: 'h-0 w-full border-t',
  vertical: 'w-0 h-full self-stretch border-l',
};

const variantStyles: Record<DividerVariant, string> = {
  solid: 'border-solid',
  dashed: 'border-dashed',
};

const colorStyles: Record<DividerColor, string> = {
  default: 'border-border-default',
  subtle: 'border-border-subtle',
  strong: 'border-border-strong',
  brand: 'border-border-brand',
};

export const Divider = forwardRef<HTMLDivElement, DividerProps>(function Divider(
  {
    orientation = 'horizontal',
    variant = 'solid',
    color = 'default',
    className,
    dataTestId,
    ...rest
  },
  ref,
) {
  return (
    <div
      ref={ref}
      role="separator"
      aria-orientation={orientation}
      data-test-id={dataTestId}
      className={cn(
        'shrink-0',
        orientationStyles[orientation],
        variantStyles[variant],
        colorStyles[color],
        className,
      )}
      {...rest}
    />
  );
});

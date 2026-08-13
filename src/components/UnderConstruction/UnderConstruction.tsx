import { forwardRef } from 'react';
import { Construction } from 'lucide-react';
import { Empty } from '../Empty';
import { IconTile } from '../IconTile';
import type { UnderConstructionProps, UnderConstructionSize } from './UnderConstruction.types';

const DEFAULT_TITLE = "We'll be back soon";
const DEFAULT_DESCRIPTION =
  "We're currently performing scheduled maintenance to make your experience even better. Please check back shortly.";

const illustrationSize: Record<UnderConstructionSize, 'lg' | 'xl'> = {
  lg: 'xl',
  sm: 'lg',
};

export const UnderConstruction = forwardRef<HTMLDivElement, UnderConstructionProps>(
  function UnderConstruction({ size = 'lg', title, description, illustration, ...rest }, ref) {
    return (
      <Empty
        ref={ref}
        size={size}
        title={title ?? DEFAULT_TITLE}
        description={description ?? DEFAULT_DESCRIPTION}
        illustration={
          illustration ?? (
            <IconTile
              icon={Construction}
              tone="brand"
              shape="circle"
              size={illustrationSize[size]}
            />
          )
        }
        {...rest}
      />
    );
  },
);

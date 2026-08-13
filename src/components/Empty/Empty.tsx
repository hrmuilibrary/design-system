import { forwardRef } from 'react';
import { SearchX } from 'lucide-react';
import { cn } from '../../lib/cn';
import { IconTile } from '../IconTile';
import { Text } from '../Text';
import type { EmptyProps, EmptySize } from './Empty.types';

const containerStyles: Record<EmptySize, string> = {
  lg: 'py-20 px-6 gap-2',
  sm: 'py-10 px-4 gap-1',
};

const illustrationSize: Record<EmptySize, 'lg' | 'xl'> = {
  lg: 'xl',
  sm: 'lg',
};

export const Empty = forwardRef<HTMLDivElement, EmptyProps>(function Empty(
  { size = 'lg', title, description, illustration, action, className, dataTestId, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      data-test-id={dataTestId}
      className={cn(
        'flex flex-col items-center justify-center text-center',
        containerStyles[size],
        className,
      )}
      {...rest}
    >
      {illustration ?? (
        <IconTile icon={SearchX} tone="gray" shape="circle" size={illustrationSize[size]} />
      )}
      {title && (
        <Text as="h3" variant={size === 'lg' ? 'h-sm' : 'h-xs'} weight="semibold" className="mt-2">
          {title}
        </Text>
      )}
      {description && (
        <Text variant={size === 'lg' ? 'p-sm' : 'p-xs'} color="secondary" className="max-w-sm">
          {description}
        </Text>
      )}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
});

import { forwardRef, useId, useState } from 'react';
import { cn } from '../../lib/cn';
import { Text } from '../Text';
import type { ReadMoreProps } from './ReadMore.types';

export const ReadMore = forwardRef<HTMLDivElement, ReadMoreProps>(function ReadMore(
  {
    children,
    clamp = 3,
    collapsedContent,
    expandLabel = 'Show more',
    collapseLabel = 'Show less',
    defaultExpanded = false,
    expanded,
    onExpandedChange,
    textProps,
    className,
    dataTestId,
    ...rest
  },
  ref,
) {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  const isControlled = expanded !== undefined;
  const isExpanded = isControlled ? expanded : internalExpanded;
  const contentId = useId();

  const toggle = () => {
    const next = !isExpanded;
    if (!isControlled) setInternalExpanded(next);
    onExpandedChange?.(next);
  };

  return (
    <div
      ref={ref}
      data-test-id={dataTestId}
      className={cn('flex flex-col gap-1', className)}
      {...rest}
    >
      <Text id={contentId} clamp={isExpanded ? undefined : clamp} {...textProps}>
        {isExpanded ? children : (collapsedContent ?? children)}
      </Text>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          toggle();
        }}
        aria-expanded={isExpanded}
        aria-controls={contentId}
        className="self-start rounded-sm text-p-sm font-medium text-fg-brand outline-none hover:underline focus-visible:ring-2 focus-visible:ring-brand-300"
      >
        {isExpanded ? collapseLabel : expandLabel}
      </button>
    </div>
  );
});

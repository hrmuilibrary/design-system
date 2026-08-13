import { cloneElement, forwardRef, isValidElement, useId, useRef, useState } from 'react';
import { cn } from '../../lib/cn';
import type { TooltipProps, TooltipSide, TooltipSize } from './Tooltip.types';

const sizeStyles: Record<TooltipSize, string> = {
  lg: 'px-3 py-2 text-p-std',
  sm: 'px-2 py-1 text-p-sm',
};

const sidePosition: Record<TooltipSide, string> = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
};

const arrowPosition: Record<TooltipSide, string> = {
  top: 'top-full left-1/2 -translate-x-1/2 border-t-fg-default border-x-transparent border-b-transparent',
  bottom:
    'bottom-full left-1/2 -translate-x-1/2 border-b-fg-default border-x-transparent border-t-transparent',
  left: 'left-full top-1/2 -translate-y-1/2 border-l-fg-default border-y-transparent border-r-transparent',
  right:
    'right-full top-1/2 -translate-y-1/2 border-r-fg-default border-y-transparent border-l-transparent',
};

export const Tooltip = forwardRef<HTMLSpanElement, TooltipProps>(function Tooltip(
  { content, children, side = 'top', size = 'sm', delay = 150, className, dataTestId },
  ref,
) {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tooltipId = useId();

  const show = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(true), delay);
  };
  const hide = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(false);
  };

  if (!isValidElement(children)) return children;

  const childProps = (children.props ?? {}) as Record<string, unknown>;
  const trigger = cloneElement(children, {
    onMouseEnter: show,
    onMouseLeave: hide,
    onFocus: show,
    onBlur: hide,
    'aria-describedby': open ? tooltipId : childProps['aria-describedby'],
  } as Record<string, unknown>);

  return (
    <span ref={ref} data-test-id={dataTestId} className="relative inline-flex">
      {trigger}
      {open && (
        <span
          role="tooltip"
          id={tooltipId}
          className={cn(
            'absolute z-50 whitespace-nowrap rounded-md bg-fg-default text-bg-default shadow-z3 pointer-events-none select-none',
            sizeStyles[size],
            sidePosition[side],
            className,
          )}
        >
          {content}
          <span aria-hidden className={cn('absolute h-0 w-0 border-4', arrowPosition[side])} />
        </span>
      )}
    </span>
  );
});

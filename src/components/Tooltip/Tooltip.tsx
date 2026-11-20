import { createPortal } from 'react-dom';
import { cloneElement, forwardRef, isValidElement, useId, useRef, useState } from 'react';
import { cn } from '../../lib/cn';
import { mergeRefs } from '../../lib/mergeRefs';
import { useFloatingPosition, type FloatingSide } from '../../lib/useFloatingPosition';
import type { TooltipProps, TooltipSize } from './Tooltip.types';

const sizeStyles: Record<TooltipSize, string> = {
  lg: 'px-3 py-2 text-p-std',
  sm: 'px-2 py-1 text-p-sm',
};

const arrowBorderStyles: Record<FloatingSide, string> = {
  top: 'border-t-fg-default border-x-transparent border-b-transparent',
  bottom: 'border-b-fg-default border-x-transparent border-t-transparent',
  left: 'border-l-fg-default border-y-transparent border-r-transparent',
  right: 'border-r-fg-default border-y-transparent border-l-transparent',
};

export const Tooltip = forwardRef<HTMLSpanElement, TooltipProps>(function Tooltip(
  { content, children, side = 'top', size = 'sm', delay = 150, className, dataTestId },
  ref,
) {
  const [open, setOpen] = useState(false);
  const [panelEl, setPanelEl] = useState<HTMLSpanElement | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const anchorRef = useRef<HTMLSpanElement>(null);
  const tooltipId = useId();

  const { style, arrowStyle, resolvedSide } = useFloatingPosition({
    anchor: anchorRef,
    panel: panelEl,
    open,
    side,
    offset: 8,
  });

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
    <span ref={mergeRefs(ref, anchorRef)} data-test-id={dataTestId} className="inline-flex">
      {trigger}
      {open &&
        typeof document !== 'undefined' &&
        createPortal(
          <span
            ref={setPanelEl}
            role="tooltip"
            id={tooltipId}
            style={style}
            className={cn(
              'z-50 whitespace-pre-wrap w-max rounded-md bg-fg-default text-bg-default shadow-z3 pointer-events-none select-none',
              sizeStyles[size],
              className,
            )}
          >
            {content}
            <span
              aria-hidden
              style={arrowStyle}
              className={cn('absolute h-0 w-0 border-4', arrowBorderStyles[resolvedSide])}
            />
          </span>,
          document.body,
        )}
    </span>
  );
});

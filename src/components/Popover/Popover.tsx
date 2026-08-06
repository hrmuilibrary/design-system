import {
  cloneElement,
  isValidElement,
  useEffect,
  useId,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type Ref,
} from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../lib/cn';
import { mergeRefs } from '../../lib/mergeRefs';
import { useFloatingPosition, type FloatingSide } from '../../lib/useFloatingPosition';
import type { PopoverProps } from './Popover.types';

// Rotated-square arrow technique (not Tooltip's CSS-triangle, which only
// works because Tooltip's bubble is borderless): after a 45deg rotation,
// each corner of the square points toward one of the four cardinal
// directions, carried by its two adjacent (now-bordered) edges. Keyed by
// resolvedSide because the arrow always points *back toward the anchor*,
// i.e. the opposite direction from where the panel sits.
const arrowBorderStyles: Record<FloatingSide, string> = {
  bottom: 'border-l border-t', // panel below anchor -> arrow tip points up
  top: 'border-b border-r', // panel above anchor -> arrow tip points down
  left: 'border-t border-r', // panel left of anchor -> arrow tip points right
  right: 'border-b border-l', // panel right of anchor -> arrow tip points left
};

export function Popover({
  content,
  children,
  side = 'top',
  align = 'center',
  offset = 8,
  open,
  defaultOpen = false,
  onOpenChange,
  flip = true,
  showArrow = true,
  closeOnScroll = true,
  autoFocus = false,
  container,
  className,
  dataTestId,
}: PopoverProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;
  const triggerRef = useRef<HTMLElement | null>(null);
  const [panelEl, setPanelEl] = useState<HTMLDivElement | null>(null);
  const contentId = useId();

  const setOpen = (value: boolean) => {
    if (!isControlled) setInternalOpen(value);
    onOpenChange?.(value);
  };

  const { style, arrowStyle, resolvedSide } = useFloatingPosition({
    anchor: triggerRef,
    panel: panelEl,
    open: isOpen,
    side,
    align,
    offset,
    flip,
  });

  useEffect(() => {
    if (!isOpen) return;
    const onDoc = (event: MouseEvent) => {
      const target = event.target as Node;
      if (panelEl?.contains(target)) return;
      if (triggerRef.current?.contains(target)) return;
      setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, panelEl]);

  useEffect(() => {
    if (!isOpen || !closeOnScroll) return;
    const onScroll = () => setOpen(false);
    document.addEventListener('scroll', onScroll, { capture: true, passive: true });
    return () => document.removeEventListener('scroll', onScroll, { capture: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, closeOnScroll]);

  useEffect(() => {
    if (!isOpen || !autoFocus || !panelEl) return;
    const prevFocus = document.activeElement as HTMLElement | null;
    const focusable = panelEl.querySelector<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    (focusable ?? panelEl).focus();
    return () => prevFocus?.focus?.();
  }, [isOpen, autoFocus, panelEl]);

  if (!isValidElement(children)) return children;
  const childProps = (children.props ?? {}) as Record<string, unknown>;
  // Preserve whatever ref the consumer already attached to their trigger
  // element (e.g. a component forwarding its own ref through) by merging
  // it with the ref Popover needs internally for position measurement,
  // rather than clobbering it.
  const existingRef = (children as unknown as { ref?: Ref<HTMLElement> }).ref;

  const trigger = cloneElement(children, {
    // eslint-disable-next-line react-hooks/refs -- passes the ref objects themselves (React attaches them during commit, not a `.current` read during render)
    ref: mergeRefs(triggerRef, existingRef),
    onClick: (event: ReactMouseEvent) => {
      (childProps.onClick as ((e: ReactMouseEvent) => void) | undefined)?.(event);
      if (!event.defaultPrevented) setOpen(!isOpen);
    },
    'aria-haspopup': 'dialog',
    'aria-expanded': isOpen,
  } as Record<string, unknown>);

  const portalTarget = container ?? (typeof document !== 'undefined' ? document.body : null);

  return (
    <>
      {trigger}
      {isOpen &&
        portalTarget &&
        createPortal(
          <div
            ref={mergeRefs(setPanelEl)}
            id={contentId}
            role="dialog"
            aria-label={typeof content === 'string' ? content : undefined}
            tabIndex={-1}
            data-side={resolvedSide}
            data-test-id={dataTestId}
            style={style}
            className={cn(
              'fixed z-50 max-w-60 max-h-54 overflow-auto rounded-lg border border-border-default bg-bg-default p-3 text-fg-default shadow-z4',
              className,
            )}
          >
            {content}
            {showArrow && (
              <span
                aria-hidden
                style={arrowStyle}
                className={cn(
                  'absolute size-2 rotate-45 bg-bg-default',
                  arrowBorderStyles[resolvedSide],
                )}
              />
            )}
          </div>,
          portalTarget,
        )}
    </>
  );
}

import { forwardRef, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { cn } from '../../lib/cn';
import { mergeRefs } from '../../lib/mergeRefs';
import { MOTION_DURATION } from '../../lib/motion';
import { useMountTransition } from '../../lib/useMountTransition';
import type { DrawerProps, DrawerSide, DrawerSize } from './Drawer.types';

const horizontalSize: Record<DrawerSize, string> = {
  sm: 'w-[320px]',
  md: 'w-[420px]',
  lg: 'w-[560px]',
  xl: 'w-[720px]',
};

const verticalSize: Record<DrawerSize, string> = {
  sm: 'h-[240px]',
  md: 'h-[360px]',
  lg: 'h-[480px]',
  xl: 'h-[600px]',
};

const sideClasses: Record<DrawerSide, string> = {
  right: 'inset-y-0 right-0 border-l',
  left: 'inset-y-0 left-0 border-r',
  top: 'inset-x-0 top-0 border-b',
  bottom: 'inset-x-0 bottom-0 border-t',
};

const offscreenClasses: Record<DrawerSide, string> = {
  right: 'translate-x-full',
  left: '-translate-x-full',
  top: '-translate-y-full',
  bottom: 'translate-y-full',
};

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(function Drawer(
  {
    open,
    onClose,
    side = 'right',
    size = 'md',
    title,
    description,
    children,
    footer,
    closeOnOverlayClick = true,
    showClose = true,
    animated = true,
    headerActions,
    className,
    dataTestId,
  },
  ref,
) {
  const panelRef = useRef<HTMLDivElement>(null);
  const { mounted, state } = useMountTransition(open, animated ? MOTION_DURATION.slow : 0);
  const shown = state === 'entered';

  // Scroll lock spans the full mounted window (including the exit
  // animation) so the page doesn't jump before the drawer finishes
  // sliding away. Focus restore fires as soon as `open` goes false,
  // instead — otherwise the user's focus would sit on a drawer that's
  // already sliding off-screen for the length of the exit transition.
  useEffect(() => {
    if (!mounted) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [mounted, onClose]);

  useEffect(() => {
    if (!open) return;
    const prevFocus = document.activeElement as HTMLElement | null;
    panelRef.current?.focus();
    return () => prevFocus?.focus?.();
  }, [open]);

  if (!mounted) return null;

  const isHorizontal = side === 'left' || side === 'right';
  const sizeCls = isHorizontal ? horizontalSize[size] : verticalSize[size];

  const content = (
    <div
      role="dialog"
      aria-modal="true"
      aria-hidden={state === 'exiting' || undefined}
      aria-labelledby={title ? 'drawer-title' : undefined}
      aria-describedby={description ? 'drawer-desc' : undefined}
      className="fixed inset-0 z-50"
      data-test-id={dataTestId}
    >
      <div
        className={cn(
          'absolute inset-0 bg-black/50',
          animated && 'transition-opacity duration-200 motion-reduce:transition-none',
          shown ? 'opacity-100' : 'opacity-0',
        )}
        onClick={() => closeOnOverlayClick && onClose()}
        aria-hidden
      />
      <div
        ref={mergeRefs(ref, panelRef)}
        tabIndex={-1}
        className={cn(
          'absolute bg-bg-default shadow-z5 outline-none flex flex-col',
          sideClasses[side],
          isHorizontal ? `${sizeCls} h-full max-w-full` : `${sizeCls} w-full max-h-full`,
          'border-border-default',
          animated &&
            'transition-transform duration-300 ease-out motion-reduce:transition-none will-change-transform',
          shown ? 'translate-x-0 translate-y-0' : offscreenClasses[side],
          className,
        )}
      >
        {(title || showClose || headerActions) && (
          <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-4 border-b border-border-default">
            <div className="flex-1 min-w-0">
              {title && (
                <h2 id="drawer-title" className="text-h-xs font-semibold text-fg-default">
                  {title}
                </h2>
              )}
              {description && (
                <p id="drawer-desc" className="mt-1 text-p-std text-fg-secondary">
                  {description}
                </p>
              )}
            </div>
            <div className="flex items-center gap-1 shrink-0 -mr-2 -mt-2">
              {headerActions}
              {showClose && (
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  className="p-2 rounded-md text-fg-secondary hover:text-fg-default hover:bg-bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
        )}
        {children && <div className="flex-1 overflow-y-auto px-6 py-4">{children}</div>}
        {footer && (
          <div className="flex items-center justify-end gap-2 px-6 py-4 border-t border-border-default bg-bg-container">
            {footer}
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(content, document.body);
});

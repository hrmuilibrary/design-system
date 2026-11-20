import { forwardRef, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { cn } from '../../lib/cn';
import { mergeRefs } from '../../lib/mergeRefs';
import { PortalContext } from '../../lib/PortalContext';
import { useHideBodyScroll } from '../../hooks';
import type { ModalProps, ModalSize } from './Modal.types';

const sizeStyles: Record<ModalSize, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-2xl',
  '2xl': 'max-w-4xl',
};

export const Modal = forwardRef<HTMLDivElement, ModalProps>(function Modal(
  {
    open,
    onClose,
    title,
    description,
    children,
    footer,
    size = 'md',
    closeOnOverlayClick = true,
    showClose = true,
    className,
    dataTestId,
  },
  ref,
) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  // Exposed to descendants so their floating content portals inside this top-layer dialog.
  const [dialogEl, setDialogEl] = useState<HTMLDialogElement | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useHideBodyScroll(open);

  // Native modal <dialog>: showModal() places it in the browser top layer, so a
  // Modal opened while a Drawer (also a top-layer dialog) is open stacks above
  // it and stays interactive — a z-indexed div can never beat the top layer.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!open || !dialog || dialog.open) return;
    dialog.showModal();
    panelRef.current?.focus();
    return () => {
      if (dialog.open) dialog.close();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prevFocus = document.activeElement as HTMLElement | null;
    panelRef.current?.focus();
    return () => prevFocus?.focus?.();
  }, [open]);

  if (!open) return null;

  const content = (
    <dialog
      ref={mergeRefs(dialogRef, setDialogEl)}
      // Escape fires the native `cancel` event; hand closing over to the consumer
      // (controlled `open`) instead of letting the browser close it directly.
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      aria-labelledby={title ? 'modal-title' : undefined}
      aria-describedby={description ? 'modal-desc' : undefined}
      className="fixed inset-0 z-50 m-0 flex h-full max-h-none w-full max-w-none items-center justify-center border-0 bg-transparent p-4 text-inherit backdrop:bg-transparent"
    >
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => closeOnOverlayClick && onClose()}
        aria-hidden
      />
      <div
        ref={mergeRefs(panelRef, ref)}
        tabIndex={-1}
        data-test-id={dataTestId}
        className={cn(
          'relative w-full bg-bg-default rounded-xl shadow-z5 outline-none flex flex-col max-h-[90vh]',
          sizeStyles[size],
          className,
        )}
      >
        {(title || showClose) && (
          <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-4">
            <div className="flex-1 min-w-0">
              {title && (
                <h2
                  data-test-id={dataTestId ? `${dataTestId}-modal-title` : undefined}
                  className="text-h-xs font-semibold text-fg-default"
                >
                  {title}
                </h2>
              )}
              {description && (
                <p
                  data-test-id={dataTestId ? `${dataTestId}-modal-subtitle` : undefined}
                  className="mt-1 text-p-std text-fg-secondary"
                >
                  {description}
                </p>
              )}
            </div>
            {showClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                data-test-id={dataTestId ? `${dataTestId}-modal-close-button` : undefined}
                className="-mr-2 -mt-2 p-2 rounded-md text-fg-secondary hover:text-fg-default hover:bg-bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        )}
        {children && <div className="px-6 pb-6 overflow-y-auto">{children}</div>}
        {footer && (
          <div className="flex items-center justify-end gap-2 px-6 py-4 border-t border-border-default bg-bg-container rounded-b-xl">
            {footer}
          </div>
        )}
      </div>
    </dialog>
  );

  return createPortal(
    <PortalContext.Provider value={dialogEl}>{content}</PortalContext.Provider>,
    document.body,
  );
});

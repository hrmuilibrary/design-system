import { forwardRef, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { cn } from '../../lib/cn';
import { mergeRefs } from '../../lib/mergeRefs';
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
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const prevFocus = document.activeElement as HTMLElement | null;
    panelRef.current?.focus();
    return () => prevFocus?.focus?.();
  }, [open]);

  if (!open) return null;

  const content = (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
      aria-describedby={description ? 'modal-desc' : undefined}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
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
                <h2 id="modal-title" className="text-h-xs font-semibold text-fg-default">
                  {title}
                </h2>
              )}
              {description && (
                <p id="modal-desc" className="mt-1 text-p-std text-fg-secondary">
                  {description}
                </p>
              )}
            </div>
            {showClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
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
    </div>
  );

  return createPortal(content, document.body);
});

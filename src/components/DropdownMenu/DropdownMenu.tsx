import {
  cloneElement,
  createContext,
  forwardRef,
  isValidElement,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type RefObject,
} from 'react';
import { createPortal } from 'react-dom';
import { Check } from 'lucide-react';
import { cn } from '../../lib/cn';
import { mergeRefs } from '../../lib/mergeRefs';
import { useAnchoredPosition } from '../../lib/useAnchoredPosition';
import type {
  DropdownContentProps,
  DropdownItemProps,
  DropdownLabelProps,
  DropdownMenuProps,
  DropdownSeparatorProps,
  DropdownTriggerProps,
} from './DropdownMenu.types';

/** Resolves either shape of `anchorRef` to a plain element, or `null` if absent. */
function resolveAnchorElement(
  anchorRef: RefObject<HTMLElement | null> | HTMLElement | null | undefined,
): HTMLElement | null {
  if (anchorRef == null) return null;
  return anchorRef instanceof HTMLElement ? anchorRef : anchorRef.current;
}

interface DropdownCtx {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: RefObject<HTMLElement | null>;
  anchorRef?: RefObject<HTMLElement | null> | HTMLElement | null;
}

const DropdownContext = createContext<DropdownCtx | null>(null);

function useDropdown() {
  const ctx = useContext(DropdownContext);
  if (!ctx) throw new Error('Dropdown parts must be used inside <DropdownMenu>');
  return ctx;
}

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(function DropdownMenu(
  { children, defaultOpen = false, open, onOpenChange, anchorRef, className, dataTestId, ...rest },
  ref,
) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = open !== undefined;
  const current = isControlled ? open : internalOpen;
  const triggerRef = useRef<HTMLElement | null>(null);

  const setOpen = (value: boolean) => {
    if (!isControlled) setInternalOpen(value);
    onOpenChange?.(value);
  };

  useEffect(() => {
    if (!current) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  return (
    <DropdownContext.Provider value={{ open: current, setOpen, triggerRef, anchorRef }}>
      <div
        ref={ref}
        data-test-id={dataTestId}
        className={cn('relative inline-block', className)}
        {...rest}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
});

export function DropdownTrigger({ children }: DropdownTriggerProps) {
  const { open, setOpen, triggerRef } = useDropdown();
  if (!isValidElement(children)) return children;
  const childProps = (children.props ?? {}) as Record<string, unknown>;

  return cloneElement(children, {
    ref: triggerRef,
    onClick: (e: ReactMouseEvent) => {
      const orig = childProps.onClick as ((e: ReactMouseEvent) => void) | undefined;
      orig?.(e);
      if (!e.defaultPrevented) setOpen(!open);
    },
    'aria-haspopup': 'menu',
    'aria-expanded': open,
  } as Record<string, unknown>);
}

const panelBaseClass =
  'min-w-[200px] rounded-lg border border-border-default bg-bg-default shadow-z4 z-50 py-1';

export const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(
  function DropdownContent(
    {
      children,
      align = 'start',
      strategy = 'fixed',
      side = 'bottom',
      sideOffset = 4,
      flip = true,
      shift = true,
      matchTriggerWidth = false,
      closeOnScroll = false,
      className,
      dataTestId,
      ...rest
    },
    ref,
  ) {
    const { open, setOpen, triggerRef, anchorRef } = useDropdown();
    const contentRef = useRef<HTMLDivElement>(null);
    const [panelEl, setPanelEl] = useState<HTMLDivElement | null>(null);
    // A lazy-getter wrapper: `.current` is only evaluated when read (by
    // useAnchoredPosition's own effect, after commit), so a RefObject anchor's
    // `.current` is still read fresh post-commit, exactly like before — while a
    // plain-HTMLElement anchor (or the triggerRef fallback) needs no ref indirection.
    // Memoized on identity so useAnchoredPosition's effect (which depends on
    // `anchor` by identity) doesn't re-run on every render.
    const positionAnchorRef = useMemo<RefObject<HTMLElement | null>>(
      () => ({
        get current() {
          return resolveAnchorElement(anchorRef) ?? triggerRef.current;
        },
      }),
      [anchorRef, triggerRef],
    );

    const { style, resolvedSide } = useAnchoredPosition({
      anchor: positionAnchorRef,
      panel: panelEl,
      open: open && strategy === 'fixed',
      side,
      align,
      offset: sideOffset,
      flip,
      shift,
      matchAnchorWidth: matchTriggerWidth,
    });

    useEffect(() => {
      if (!open) return;
      const onDoc = (e: MouseEvent) => {
        const target = e.target as Node;
        if (contentRef.current?.contains(target)) return;
        if (triggerRef.current?.contains(target)) return;
        if (resolveAnchorElement(anchorRef)?.contains(target)) return;
        setOpen(false);
      };
      document.addEventListener('mousedown', onDoc);
      return () => document.removeEventListener('mousedown', onDoc);
    }, [open, setOpen, triggerRef, anchorRef]);

    useEffect(() => {
      if (!open || !closeOnScroll) return;
      const onScroll = () => setOpen(false);
      document.addEventListener('scroll', onScroll, { capture: true, passive: true });
      return () => document.removeEventListener('scroll', onScroll, { capture: true });
    }, [open, closeOnScroll, setOpen]);

    useEffect(() => {
      if (!open) return;
      const raf = requestAnimationFrame(() => {
        const first = contentRef.current?.querySelector<HTMLElement>(
          '[role="menuitem"]:not(:disabled)',
        );
        first?.focus();
      });
      return () => cancelAnimationFrame(raf);
    }, [open]);

    if (!open) return null;

    const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
      const items = Array.from(
        contentRef.current?.querySelectorAll<HTMLElement>('[role="menuitem"]:not(:disabled)') ?? [],
      );
      if (!items.length) return;
      const currentIndex = items.indexOf(document.activeElement as HTMLElement);

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        items[(currentIndex + 1 + items.length) % items.length]?.focus();
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        items[(currentIndex - 1 + items.length) % items.length]?.focus();
      } else if (event.key === 'Home') {
        event.preventDefault();
        items[0]?.focus();
      } else if (event.key === 'End') {
        event.preventDefault();
        items[items.length - 1]?.focus();
      }
    };

    const panel = (
      <div
        ref={mergeRefs(ref, contentRef, strategy === 'fixed' ? setPanelEl : undefined)}
        role="menu"
        data-test-id={dataTestId}
        data-side={strategy === 'fixed' ? resolvedSide : undefined}
        data-align={align}
        onKeyDown={handleKeyDown}
        style={strategy === 'fixed' ? style : undefined}
        className={cn(
          panelBaseClass,
          strategy === 'absolute' &&
            cn('absolute top-full mt-1', align === 'end' ? 'right-0' : 'left-0'),
          className,
        )}
        {...rest}
      >
        {children}
      </div>
    );

    return strategy === 'fixed' ? createPortal(panel, document.body) : panel;
  },
);

export const DropdownItem = forwardRef<HTMLButtonElement, DropdownItemProps>(function DropdownItem(
  {
    children,
    onSelect,
    disabled,
    icon,
    shortcut,
    destructive,
    checked,
    meta,
    className,
    dataTestId,
    onClick,
    ...rest
  },
  ref,
) {
  const { setOpen } = useDropdown();
  return (
    <button
      ref={ref}
      type="button"
      role="menuitem"
      disabled={disabled}
      data-test-id={dataTestId}
      onClick={(event) => {
        onClick?.(event);
        onSelect?.();
        setOpen(false);
      }}
      className={cn(
        'flex w-full gap-2 px-3 py-2 text-left text-p-std text-fg-default',
        meta ? 'items-start' : 'items-center',
        'hover:bg-bg-subtle focus-visible:outline-none focus-visible:bg-bg-subtle',
        disabled && 'opacity-50 cursor-not-allowed hover:bg-transparent',
        destructive && 'text-red-700 hover:bg-red-50',
        className,
      )}
      {...rest}
    >
      {checked !== undefined && (
        <span className="w-4 shrink-0">
          {checked && <Check className="h-4 w-4 text-brand-500" />}
        </span>
      )}
      {icon && <span className="inline-flex shrink-0 text-fg-secondary">{icon}</span>}
      <span className="flex-1 min-w-0 text-left">
        <span className="block truncate">{children}</span>
        {meta && <span className="block truncate text-p-sm text-fg-tertiary">{meta}</span>}
      </span>
      {shortcut && (
        <span className="text-p-sm text-fg-tertiary shrink-0 tabular-nums">{shortcut}</span>
      )}
    </button>
  );
});

export const DropdownSeparator = forwardRef<HTMLDivElement, DropdownSeparatorProps>(
  function DropdownSeparator({ className, dataTestId, ...rest }, ref) {
    return (
      <div
        ref={ref}
        role="separator"
        data-test-id={dataTestId}
        className={cn('my-1 h-px bg-border-default', className)}
        {...rest}
      />
    );
  },
);

export const DropdownLabel = forwardRef<HTMLDivElement, DropdownLabelProps>(function DropdownLabel(
  { children, className, dataTestId, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      data-test-id={dataTestId}
      className={cn(
        'px-3 py-1.5 text-p-xs font-semibold uppercase tracking-wider text-fg-tertiary',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
});

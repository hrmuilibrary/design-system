import { createContext, useContext } from 'react';

/**
 * The element floating UI (menus, popovers, select options, date pickers) should
 * portal into. A modal `<dialog>` (Drawer, Modal) lives in the browser top layer,
 * which paints above everything portaled to `<body>` regardless of z-index — so
 * those components provide their own dialog here, and every overlay reads it via
 * `usePortalContainer()` instead of hard-coding `document.body`.
 */
export const PortalContext = createContext<HTMLElement | null>(null);

/** Portal target for floating content: the nearest enclosing dialog, else `document.body`. */
export function usePortalContainer(): HTMLElement | null {
  const container = useContext(PortalContext);
  return container ?? (typeof document === 'undefined' ? null : document.body);
}

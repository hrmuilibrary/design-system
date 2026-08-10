import { useEffect } from 'react';

/** Fires `onEscape` when the user presses `Escape`, anywhere in the
 *  document — not scoped to a container, matching how dismissible
 *  overlays (menus, drawers, popovers) listen for it today. */
export function useEscapeKey(onEscape: () => void, enabled = true): void {
  useEffect(() => {
    if (!enabled) return;

    const listener = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onEscape();
    };

    document.addEventListener('keydown', listener);
    return () => document.removeEventListener('keydown', listener);
  }, [onEscape, enabled]);
}

import { useEffect, type RefObject } from 'react';

/** Fires `handler` on any `mousedown`/`touchstart` outside `ref.current`.
 *  No effect while `ref.current` is null or `enabled` is false — callers
 *  don't need to guard call sites where the ref isn't attached yet (e.g.
 *  before a portal mounts). */
export function useOnOutsideClick(
  ref: RefObject<HTMLElement | null> | null | undefined,
  handler: (event: MouseEvent | TouchEvent) => void,
  enabled = true,
): void {
  useEffect(() => {
    if (!enabled) return;

    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref?.current;
      if (!el || el.contains(event.target as Node)) return;
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, enabled]);
}

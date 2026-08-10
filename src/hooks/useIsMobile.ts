import { useEffect, useState } from 'react';

const DEFAULT_BREAKPOINT = 768;

/** True when the viewport is at or below `breakpoint` (default 768px).
 *  Returns `false` during SSR and during the very first client render —
 *  the effect computes and syncs the real value right after mount, so
 *  the server-rendered markup and the client's first render always
 *  agree (no hydration mismatch), at the cost of one extra render after
 *  mount when the viewport actually is narrow. Subscribes to the media
 *  query's `change` event rather than `window.resize`, so it only
 *  re-renders when the mobile/desktop boundary is actually crossed. */
export function useIsMobile(breakpoint: number = DEFAULT_BREAKPOINT): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;

    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const listener = () => setIsMobile(mediaQuery.matches);

    listener();
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, [breakpoint]);

  return isMobile;
}

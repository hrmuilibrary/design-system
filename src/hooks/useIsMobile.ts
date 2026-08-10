import { useEffect, useState } from 'react';

const DEFAULT_BREAKPOINT = 768;

function getMatches(breakpoint: number): boolean {
  return typeof window !== 'undefined' && typeof window.matchMedia === 'function'
    ? window.matchMedia(`(max-width: ${breakpoint}px)`).matches
    : false;
}

/** True when the viewport is at or below `breakpoint` (default 768px).
 *  SSR-safe — returns `false` until mounted in a browser. Subscribes to
 *  the media query's `change` event rather than `window.resize`, so it
 *  only re-renders when the mobile/desktop boundary is actually
 *  crossed. */
export function useIsMobile(breakpoint: number = DEFAULT_BREAKPOINT): boolean {
  const [isMobile, setIsMobile] = useState(() => getMatches(breakpoint));

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

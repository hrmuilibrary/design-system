import { useEffect, useRef } from 'react';

/** Locks `document.body` scrolling while `active`, restoring whatever
 *  `overflow` value was set before activation on cleanup — so this
 *  doesn't clobber a value another consumer of `body.style.overflow` set
 *  before it. */
export function useHideBodyScroll(active: boolean): void {
  const previousOverflow = useRef<string | null>(null);

  useEffect(() => {
    if (!active) return;

    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow.current ?? '';
    };
  }, [active]);
}

import { useEffect } from 'react';

let lockCount = 0;
let previousOverflow = '';

/** Locks `document.body` scrolling while `active`, restoring whatever
 *  `overflow` value was set before the first lock once the last active
 *  caller deactivates. Reference-counted across concurrent callers (e.g.
 *  a drawer opened from within a modal) so one overlay closing early
 *  never clobbers another's lock. */
export function useHideBodyScroll(active: boolean): void {
  useEffect(() => {
    if (!active) return;

    if (lockCount === 0) {
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }
    lockCount += 1;

    return () => {
      lockCount -= 1;
      if (lockCount === 0) {
        document.body.style.overflow = previousOverflow;
      }
    };
  }, [active]);
}

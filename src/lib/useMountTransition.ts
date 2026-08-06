import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from './motion';

export type TransitionState = 'closed' | 'entering' | 'entered' | 'exiting';

/** Keeps a node mounted through its exit transition instead of unmounting
 *  the instant `open` goes false.
 *  - `open` false -> true: `mounted` becomes `true` immediately, `state`
 *    is `'entering'`, then flips to `'entered'` after *two* animation
 *    frames — a single `requestAnimationFrame` fires before the browser
 *    has actually painted the `'entering'` styles (React's commit, this
 *    effect, and that one callback can all still land inside the same
 *    frame), so the flip to `'entered'` can end up coalesced into the
 *    same paint and never visibly transition. Waiting a full frame first
 *    guarantees the browser paints the from-state at least once before
 *    the to-state is applied, which is what makes a CSS transition
 *    actually animate instead of jumping straight to its end value.
 *  - `open` true -> false: `state` becomes `'exiting'`; `mounted` stays
 *    `true` for `durationMs`, then both flip to `'closed'`/`false`.
 *  - Honors `prefers-reduced-motion` by collapsing `durationMs` to `0`, so
 *    a reduced-motion user never waits on an invisible mounted node. */
export function useMountTransition(
  open: boolean,
  durationMs: number,
): { mounted: boolean; state: TransitionState } {
  const [mounted, setMounted] = useState(open);
  const [state, setState] = useState<TransitionState>(open ? 'entered' : 'closed');
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const applyOpen = () => {
      setMounted(true);
      setState('entering');
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = requestAnimationFrame(() => setState('entered'));
      });
    };

    const applyClosed = () => {
      setState((prev) => (prev === 'closed' ? 'closed' : 'exiting'));
      const duration = prefersReducedMotion() ? 0 : durationMs;
      if (duration === 0) {
        setMounted(false);
        setState('closed');
      } else {
        timeoutRef.current = setTimeout(() => {
          setMounted(false);
          setState('closed');
        }, duration);
      }
    };

    if (open) {
      applyOpen();
    } else {
      applyClosed();
    }
  }, [open, durationMs]);

  useEffect(
    () => () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    },
    [],
  );

  return { mounted, state };
}

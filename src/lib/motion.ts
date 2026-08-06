/** Durations in ms for JS-driven transition timing (mount/unmount
 *  orchestration). Kept in sync by hand with the Tailwind `duration-*`
 *  utilities used alongside them in component classes — same
 *  two-parallel-representations discipline as the token pipeline. */
export const MOTION_DURATION = {
  fast: 150,
  base: 200,
  slow: 300,
} as const;

/** True when the user has asked for reduced motion. SSR-safe. */
export function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

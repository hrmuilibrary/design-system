import type { Ref } from 'react';

/** Combines multiple refs (a forwarded consumer ref, an internal ref) into a
 *  single callback ref so they all point at the same DOM node. */
export function mergeRefs<T>(...refs: Array<Ref<T> | undefined>): (node: T | null) => void {
  return (node) => {
    for (const ref of refs) {
      if (!ref) continue;
      if (typeof ref === 'function') {
        ref(node);
      } else {
        (ref as { current: T | null }).current = node;
      }
    }
  };
}

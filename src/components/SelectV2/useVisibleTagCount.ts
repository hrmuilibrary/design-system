import { useLayoutEffect, useState, type RefObject } from 'react';

interface UseVisibleTagCountOptions {
  /** Element to search within for the live value-container node
   *  (marked with `.sv2-value-container`). */
  wrapperRef: RefObject<HTMLElement | null>;
  /** Hidden row rendering one measuring chip per selected option plus a
   *  measuring badge, mirroring the real chip/badge markup exactly. */
  measureRef: RefObject<HTMLElement | null>;
  total: number;
  /** Joined label text — changes whenever the rendered chip content would
   *  change, so a recompute is triggered even if `total` stays the same. */
  labelsKey: string;
  enabled: boolean;
}

/** Computes how many multi-value chips fit on one line of the live control,
 *  reserving room for a trailing "+N" badge, by measuring a hidden mirror
 *  row against the real value-container's content-box width. Recomputes on
 *  container resize and whenever the selection changes. Returns `undefined`
 *  when disabled, meaning "show every chip" (default, unrestricted). */
export function useVisibleTagCount({
  wrapperRef,
  measureRef,
  total,
  labelsKey,
  enabled,
}: UseVisibleTagCountOptions): number | undefined {
  const [visibleCount, setVisibleCount] = useState(total);

  useLayoutEffect(() => {
    if (!enabled) return;
    const wrapper = wrapperRef.current;
    const measure = measureRef.current;
    if (!wrapper || !measure) return;

    const valueContainer = wrapper.querySelector<HTMLElement>('.sv2-value-container');
    if (!valueContainer) return;

    const recompute = () => {
      if (total === 0) {
        setVisibleCount(0);
        return;
      }

      const containerStyle = getComputedStyle(valueContainer);
      const availableWidth =
        valueContainer.clientWidth -
        parseFloat(containerStyle.paddingLeft) -
        parseFloat(containerStyle.paddingRight);

      const chipEls = Array.from(measure.querySelectorAll<HTMLElement>('[data-measure-chip]'));
      const badgeEl = measure.querySelector<HTMLElement>('[data-measure-badge]');
      if (chipEls.length !== total || !badgeEl) return;

      const lastChip = chipEls[total - 1]!;
      const lastChipEdge = lastChip.offsetLeft + lastChip.offsetWidth;
      if (lastChipEdge <= availableWidth) {
        setVisibleCount(total);
        return;
      }

      const gapPx = parseFloat(getComputedStyle(measure).columnGap || '0') || 0;

      for (let n = total - 1; n >= 0; n--) {
        badgeEl.textContent = `+${total - n}`;
        const badgeWidth = badgeEl.offsetWidth;
        const chipsEdge = n > 0 ? chipEls[n - 1]!.offsetLeft + chipEls[n - 1]!.offsetWidth : 0;
        const needed = n > 0 ? chipsEdge + gapPx + badgeWidth : badgeWidth;
        if (needed <= availableWidth) {
          setVisibleCount(n);
          return;
        }
      }
      setVisibleCount(0);
    };

    recompute();
    const observer = new ResizeObserver(recompute);
    observer.observe(valueContainer);
    return () => observer.disconnect();
  }, [enabled, total, labelsKey, wrapperRef, measureRef]);

  return enabled ? visibleCount : undefined;
}

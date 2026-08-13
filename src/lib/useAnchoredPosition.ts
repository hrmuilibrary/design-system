import { useLayoutEffect, useState, type CSSProperties, type RefObject } from 'react';

export type AnchoredSide = 'bottom' | 'top';
export type AnchoredAlign = 'start' | 'end';

export interface UseAnchoredPositionOptions {
  /** A ref pointing at the anchor element, read fresh on every recompute —
   *  never dereferenced by the caller, so the caller never has to read
   *  `.current` during render or copy it into its own state. */
  anchor: RefObject<HTMLElement | null> | null | undefined;
  panel: HTMLElement | null;
  open: boolean;
  /** Preferred side. Flips to the opposite side when there isn't room, unless `flip` is false. */
  side?: AnchoredSide;
  align?: AnchoredAlign;
  offset?: number;
  flip?: boolean;
  /** Clamp the panel horizontally so it stays inside the viewport. */
  shift?: boolean;
  matchAnchorWidth?: boolean;
}

export interface AnchoredPosition {
  style: CSSProperties;
  /** The side actually used, after flipping — for `data-side` and animation origin. */
  resolvedSide: AnchoredSide;
}

const VIEWPORT_MARGIN = 8;

/** Computes `position: fixed` coordinates for a panel anchored to a trigger
 *  element, so the panel can portal to `document.body` without being
 *  clipped by an `overflow: hidden` ancestor. Recomputes on open, resize,
 *  and any ancestor scroll (capture-phase, since `position: fixed`
 *  coordinates are viewport-relative and unaffected by scroll offset
 *  themselves — but the anchor's rect moves when something scrolls). */
export function useAnchoredPosition({
  anchor,
  panel,
  open,
  side = 'bottom',
  align = 'start',
  offset = 4,
  flip = true,
  shift = true,
  matchAnchorWidth = false,
}: UseAnchoredPositionOptions): AnchoredPosition {
  const [position, setPosition] = useState<AnchoredPosition>({
    style: { position: 'fixed', top: 0, left: 0, visibility: 'hidden' },
    resolvedSide: side,
  });

  useLayoutEffect(() => {
    if (!open || !panel) return;

    const compute = () => {
      const anchorEl = anchor?.current;
      if (!anchorEl) return;
      const anchorRect = anchorEl.getBoundingClientRect();
      const panelRect = panel.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      let resolvedSide = side;
      if (flip) {
        const spaceBelow = viewportHeight - anchorRect.bottom;
        const spaceAbove = anchorRect.top;
        if (
          side === 'bottom' &&
          spaceBelow < panelRect.height + offset &&
          spaceAbove > spaceBelow
        ) {
          resolvedSide = 'top';
        } else if (
          side === 'top' &&
          spaceAbove < panelRect.height + offset &&
          spaceBelow > spaceAbove
        ) {
          resolvedSide = 'bottom';
        }
      }

      const top =
        resolvedSide === 'bottom'
          ? anchorRect.bottom + offset
          : anchorRect.top - panelRect.height - offset;

      let left = align === 'end' ? anchorRect.right - panelRect.width : anchorRect.left;
      if (shift) {
        left = Math.min(
          Math.max(left, VIEWPORT_MARGIN),
          viewportWidth - panelRect.width - VIEWPORT_MARGIN,
        );
      }

      setPosition({
        style: {
          position: 'fixed',
          top,
          left,
          minWidth: matchAnchorWidth ? anchorRect.width : undefined,
        },
        resolvedSide,
      });
    };

    compute();
    window.addEventListener('resize', compute);
    document.addEventListener('scroll', compute, { capture: true, passive: true });
    return () => {
      window.removeEventListener('resize', compute);
      document.removeEventListener('scroll', compute, { capture: true });
    };
  }, [open, anchor, panel, side, align, offset, flip, shift, matchAnchorWidth]);

  return position;
}

import { useLayoutEffect, useState, type CSSProperties, type RefObject } from 'react';

export type FloatingSide = 'top' | 'bottom' | 'left' | 'right';
export type FloatingAlign = 'start' | 'center' | 'end';

export interface UseFloatingPositionOptions {
  /** A ref pointing at the anchor element, read fresh on every recompute. */
  anchor: RefObject<HTMLElement | null> | null | undefined;
  panel: HTMLElement | null;
  open: boolean;
  side?: FloatingSide;
  align?: FloatingAlign;
  offset?: number;
  /** Flips to the opposite side on the same axis (top<->bottom, left<->right) when there isn't room. */
  flip?: boolean;
  /** Clamps the cross-axis position so the panel stays inside the viewport. */
  shift?: boolean;
}

export interface FloatingPosition {
  style: CSSProperties;
  /** Positions the arrow at the anchor's center on the cross axis, relative to the panel's own box — apply on top of the arrow's own border/rotation classes, which are keyed off `resolvedSide` by the caller. */
  arrowStyle: CSSProperties;
  /** The side actually used, after flipping. */
  resolvedSide: FloatingSide;
}

const VIEWPORT_MARGIN = 8;
const ARROW_SIZE = 8; // px — matches the `size-2` arrow element in Popover.tsx
const ARROW_MARGIN = 10; // keep the arrow off the panel's rounded corners

/** Computes `position: fixed` coordinates (+ a matching arrow offset) for a
 *  panel anchored to a trigger element on any of 4 sides x 3 alignments,
 *  so the panel can portal to `document.body` without being clipped by an
 *  `overflow: hidden` ancestor. Recomputes on open, resize, and any
 *  ancestor scroll. */
export function useFloatingPosition({
  anchor,
  panel,
  open,
  side = 'top',
  align = 'center',
  offset = 8,
  flip = true,
  shift = true,
}: UseFloatingPositionOptions): FloatingPosition {
  const [position, setPosition] = useState<FloatingPosition>({
    style: { position: 'fixed', top: 0, left: 0, visibility: 'hidden' },
    arrowStyle: {},
    resolvedSide: side,
  });

  useLayoutEffect(() => {
    if (!open || !panel) return;

    const compute = () => {
      const anchorEl = anchor?.current;
      if (!anchorEl) return;
      const anchorRect = anchorEl.getBoundingClientRect();
      const panelRect = panel.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const isVertical = side === 'top' || side === 'bottom';
      let resolvedSide = side;

      if (flip) {
        if (isVertical) {
          const spaceAbove = anchorRect.top;
          const spaceBelow = viewportHeight - anchorRect.bottom;
          if (side === 'top' && spaceAbove < panelRect.height + offset && spaceBelow > spaceAbove) {
            resolvedSide = 'bottom';
          } else if (side === 'bottom' && spaceBelow < panelRect.height + offset && spaceAbove > spaceBelow) {
            resolvedSide = 'top';
          }
        } else {
          const spaceLeft = anchorRect.left;
          const spaceRight = viewportWidth - anchorRect.right;
          if (side === 'left' && spaceLeft < panelRect.width + offset && spaceRight > spaceLeft) {
            resolvedSide = 'right';
          } else if (side === 'right' && spaceRight < panelRect.width + offset && spaceLeft > spaceRight) {
            resolvedSide = 'left';
          }
        }
      }

      const resolvedIsVertical = resolvedSide === 'top' || resolvedSide === 'bottom';
      let top: number;
      let left: number;

      if (resolvedIsVertical) {
        top = resolvedSide === 'bottom' ? anchorRect.bottom + offset : anchorRect.top - panelRect.height - offset;
        left =
          align === 'start'
            ? anchorRect.left
            : align === 'end'
              ? anchorRect.right - panelRect.width
              : anchorRect.left + anchorRect.width / 2 - panelRect.width / 2;
      } else {
        left = resolvedSide === 'right' ? anchorRect.right + offset : anchorRect.left - panelRect.width - offset;
        top =
          align === 'start'
            ? anchorRect.top
            : align === 'end'
              ? anchorRect.bottom - panelRect.height
              : anchorRect.top + anchorRect.height / 2 - panelRect.height / 2;
      }

      if (shift) {
        if (resolvedIsVertical) {
          left = Math.min(Math.max(left, VIEWPORT_MARGIN), viewportWidth - panelRect.width - VIEWPORT_MARGIN);
        } else {
          top = Math.min(Math.max(top, VIEWPORT_MARGIN), viewportHeight - panelRect.height - VIEWPORT_MARGIN);
        }
      }

      let arrowStyle: CSSProperties;
      if (resolvedIsVertical) {
        const anchorCenterX = anchorRect.left + anchorRect.width / 2;
        const arrowLeft = Math.min(Math.max(anchorCenterX - left, ARROW_MARGIN), panelRect.width - ARROW_MARGIN);
        arrowStyle = {
          left: arrowLeft,
          [resolvedSide === 'bottom' ? 'top' : 'bottom']: -ARROW_SIZE / 2,
        };
      } else {
        const anchorCenterY = anchorRect.top + anchorRect.height / 2;
        const arrowTop = Math.min(Math.max(anchorCenterY - top, ARROW_MARGIN), panelRect.height - ARROW_MARGIN);
        arrowStyle = {
          top: arrowTop,
          [resolvedSide === 'right' ? 'left' : 'right']: -ARROW_SIZE / 2,
        };
      }

      setPosition({ style: { position: 'fixed', top, left }, arrowStyle, resolvedSide });
    };

    compute();
    window.addEventListener('resize', compute);
    document.addEventListener('scroll', compute, { capture: true, passive: true });
    return () => {
      window.removeEventListener('resize', compute);
      document.removeEventListener('scroll', compute, { capture: true });
    };
  }, [open, anchor, panel, side, align, offset, flip, shift]);

  return position;
}

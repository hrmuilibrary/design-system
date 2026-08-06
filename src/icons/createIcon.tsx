import { forwardRef, useId, type ReactNode } from 'react';
import type { LucideIcon, LucideProps } from 'lucide-react';

type IconRenderer = (uid: string) => ReactNode;

function buildIcon(name: string, render: IconRenderer, viewBox: string, applyColor: boolean): LucideIcon {
  const Icon = forwardRef<SVGSVGElement, LucideProps>(function Icon(
    { size = 24, color = 'currentColor', className, ...rest },
    ref,
  ) {
    const uid = useId();
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox={viewBox}
        fill={applyColor ? color : undefined}
        className={className}
        {...rest}
      >
        {render(uid)}
      </svg>
    );
  });
  Icon.displayName = name;
  return Icon as unknown as LucideIcon;
}

/** Builds a solid-fill glyph icon (currency, brand logos, HR-domain marks)
 *  typed as lucide's own `LucideIcon`, so it drops straight into any
 *  `icon: LucideIcon` prop (`IconTile`, `InfoField`, ...) with no widening
 *  of the existing type. `fill` is set on the root `<svg>` from `color`
 *  (default `currentColor`) and inherited by every child `<path>` that
 *  doesn't set its own `fill` — the same mechanism the source icon set
 *  relied on via a `path:not([fill]) { fill: currentColor }` CSS rule,
 *  reproduced here without needing any external CSS. `strokeWidth` is
 *  accepted (for prop-shape compatibility with `LucideIcon`) but has no
 *  effect — these are solid fills, not stroke-based glyphs.
 *
 *  `content` is either static markup, or — for the handful of icons whose
 *  source used a `<clipPath>` — a function receiving a mask/clip id
 *  generated fresh per instance via `useId()`. The source hardcoded these
 *  ids (e.g. `clip0_697_1766`), which collide (`url(#...)` resolves to
 *  whichever instance rendered first) the moment the same icon renders
 *  twice on one page. */
export function createIcon(name: string, content: ReactNode | IconRenderer, viewBox = '0 0 24 24'): LucideIcon {
  const render: IconRenderer = typeof content === 'function' ? content : () => content;
  return buildIcon(name, render, viewBox, true);
}

/** Builds a fixed multi-color icon (flags) — same `LucideIcon` shape as
 *  `createIcon`, but `color`/`strokeWidth` have no effect: every shape
 *  already carries its own literal `fill`, since a flag's colors aren't
 *  theme-able. `renderShapes` receives a fresh-per-instance mask id, same
 *  rationale as `createIcon`'s clip id. */
export function createFlagIcon(name: string, renderShapes: IconRenderer, viewBox = '0 0 24 24'): LucideIcon {
  return buildIcon(name, renderShapes, viewBox, false);
}

import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

/**
 * The custom font-size scale declared in `src/styles/tokens.css`'s `@theme`
 * block (`--text-h-xl`, `--text-p-sm`, `--text-label-md`, ...). Mirrored
 * here by hand — same two-parallel-representations discipline as the token
 * pipeline itself — because tailwind-merge ships its own hardcoded default
 * theme and has no way to read this project's actual `@theme` CSS.
 *
 * Without this, tailwind-merge's default config only recognizes Tailwind's
 * built-in font-size keywords (`xs`, `sm`, `lg`, ...) as font sizes; any
 * `text-*` suffix it doesn't recognize as a font size instead falls through
 * to the *color* class group, whose theme scale is deliberately `isAny`
 * (Tailwind v4 allows arbitrary custom theme colors). That misclassifies
 * every `text-p-*`/`text-h-*`/`text-label-*` utility as a text color, so it
 * gets silently dropped as a "conflict" whenever it appears alongside an
 * actual `text-{color}` class in the same `cn()` call — which is nearly
 * every real usage, since components pair a typography variant with a
 * semantic text color.
 */
const FONT_SIZE_TOKENS = [
  'h-xl',
  'h-lg',
  'h-md',
  'h-std',
  'h-sm',
  'h-xs',
  'p-lg',
  'p-md',
  'p-std',
  'p-sm',
  'p-xs',
  'label-lg',
  'label-md',
  'label-std',
  'label-sm',
  'label-xs',
  'label-xxs',
];

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: FONT_SIZE_TOKENS,
    },
  },
});

/**
 * Merges class names, resolving conflicting Tailwind utilities in favor of
 * the last one specified (e.g. `cn('px-2', 'px-4')` -> `'px-4'`). This is
 * what lets consumers pass a `className` prop that overrides a component's
 * defaults instead of just appending to them.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Tailwind `theme.extend`-shaped token map, for consumer apps still using a
 * JS Tailwind config (v3-style, or v4 via the `@config` compatibility
 * directive). Every value points at the CSS custom properties defined in
 * `styles/tokens.css` / `styles/theme.css` — never a hardcoded value — so
 * this stays correct regardless of light/dark mode or future palette edits.
 *
 * Consumers on native Tailwind v4 CSS config don't need this file at all:
 * importing `@ps-tools/ui/styles.css` already registers these as Tailwind
 * theme values via `@theme`.
 */

const colorScale = (name: string, steps: readonly number[]) =>
  Object.fromEntries(steps.map((step) => [step, `var(--color-${name}-${step})`]));

const BRAND_STEPS = [20, 30, 40, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
const GRAY_STEPS = [20, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
const TEN_STEP = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
const PURPLE_STEPS = [20, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
const RED_STEPS = [20, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

export const tailwindColors = {
  white: 'var(--color-white)',
  brand: colorScale('brand', BRAND_STEPS),
  gray: colorScale('gray', GRAY_STEPS),
  green: colorScale('green', TEN_STEP),
  blue: colorScale('blue', TEN_STEP),
  purple: colorScale('purple', PURPLE_STEPS),
  pink: colorScale('pink', TEN_STEP),
  red: colorScale('red', RED_STEPS),
  yellow: colorScale('yellow', TEN_STEP),

  /* Semantic aliases — prefer these over raw scales in components. */
  'bg-default': 'var(--color-bg-default)',
  'bg-container': 'var(--color-bg-container)',
  'bg-subtle': 'var(--color-bg-subtle)',
  'bg-brand-lighter': 'var(--color-bg-brand-lighter)',
  'bg-info-lighter': 'var(--color-bg-info-lighter)',
  'bg-success-lighter': 'var(--color-bg-success-lighter)',
  'bg-warning-lighter': 'var(--color-bg-warning-lighter)',
  'bg-danger-lighter': 'var(--color-bg-danger-lighter)',

  'fg-default': 'var(--color-fg-default)',
  'fg-secondary': 'var(--color-fg-secondary)',
  'fg-tertiary': 'var(--color-fg-tertiary)',
  'fg-disabled': 'var(--color-fg-disabled)',
  'fg-inverse': 'var(--color-fg-inverse)',
  'fg-brand': 'var(--color-fg-brand)',
  'fg-info': 'var(--color-fg-info)',
  'fg-success': 'var(--color-fg-success)',
  'fg-warning': 'var(--color-fg-warning)',
  'fg-danger': 'var(--color-fg-danger)',

  'border-default': 'var(--color-border-default)',
  'border-subtle': 'var(--color-border-subtle)',
  'border-strong': 'var(--color-border-strong)',
  'border-brand': 'var(--color-border-brand)',

  'icon-primary': 'var(--color-icon-primary)',
  'icon-secondary': 'var(--color-icon-secondary)',
  'icon-inverse': 'var(--color-icon-inverse)',
  'icon-brand': 'var(--color-icon-brand)',
  'icon-info': 'var(--color-icon-info)',
  'icon-danger': 'var(--color-icon-danger)',
  'icon-warning': 'var(--color-icon-warning)',
} as const;

export const tailwindBorderRadius = {
  xs: 'var(--radius-xs)',
  sm: 'var(--radius-sm)',
  md: 'var(--radius-md)',
  lg: 'var(--radius-lg)',
  xl: 'var(--radius-xl)',
  '2xl': 'var(--radius-2xl)',
  '3xl': 'var(--radius-3xl)',
  full: 'var(--radius-full)',
} as const;

export const tailwindBoxShadow = {
  z1: 'var(--shadow-z1)',
  z2: 'var(--shadow-z2)',
  z3: 'var(--shadow-z3)',
  z4: 'var(--shadow-z4)',
  z5: 'var(--shadow-z5)',
} as const;

export const tailwindFontFamily = {
  ps: 'var(--font-ps)',
  sans: 'var(--font-sans)',
} as const;

const textStyle = (name: string) => [
  `var(--text-${name})`,
  { lineHeight: `var(--text-${name}--line-height)` },
];

export const tailwindFontSize = {
  'h-xl': textStyle('h-xl'),
  'h-lg': textStyle('h-lg'),
  'h-md': textStyle('h-md'),
  'h-std': textStyle('h-std'),
  'h-sm': textStyle('h-sm'),
  'h-xs': textStyle('h-xs'),

  'p-lg': textStyle('p-lg'),
  'p-md': textStyle('p-md'),
  'p-std': textStyle('p-std'),
  'p-sm': textStyle('p-sm'),
  'p-xs': textStyle('p-xs'),

  'label-lg': textStyle('label-lg'),
  'label-md': textStyle('label-md'),
  'label-std': textStyle('label-std'),
  'label-sm': textStyle('label-sm'),
  'label-xs': textStyle('label-xs'),
  'label-xxs': textStyle('label-xxs'),
} as const;

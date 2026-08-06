# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

`@ps-tools/ui` — an enterprise React component library and design system
built on Tailwind CSS v4 and React 19. It ships as an ESM package with a
separately-built stylesheet and an optional Tailwind v3-style preset for
consumers still on JS config.

## Design token pipeline

Tokens are the foundation everything else builds on: a raw palette scale,
semantic aliases, radii, shadows, and typography, mirrored here in two
parallel representations that **must be kept in sync by hand**:

1. **CSS custom properties** — `src/styles/tokens.css` and
   `src/styles/theme.css`, both using Tailwind v4's `@theme { ... }`
   directive. Declaring a variable inside `@theme` both registers the CSS
   custom property *and* auto-generates the matching utility class (e.g.
   `--color-brand-500` inside `@theme` gives you `bg-brand-500`,
   `text-brand-500`, etc. for free) — no extra `@theme inline` mapping layer
   needed.
   - `tokens.css` — raw palette scales (brand, gray, green, blue, purple,
     pink, red, yellow, white), radii, shadows, and typography, all inside
     one `@theme` block.
   - `theme.css` — semantic aliases (`bg-default`, `fg-secondary`,
     `border-brand`, `icon-danger`, ...) inside `@theme`, plus a `.dark {
     ... }` block that reassigns the same custom property names. Dark mode
     works because Tailwind utilities always read the variable at point of
     use, not at declaration time.
   - `globals.css` — the entry point. Imports Tailwind, then `tokens.css`,
     then `theme.css`, declares `@custom-variant dark (&:where(.dark, .dark
     *));` (class-based dark mode, not `prefers-color-scheme`), and a
     minimal `@layer base` for `border-color`/`background`/`color`/
     `font-family` defaults.
2. **JS/TS token objects** — `src/tokens/*.ts` (`colors`, `typography`,
   `spacing`, `radius`, `shadows`, barrel-exported from `src/tokens/index.ts`
   and re-exported at the package root) for consumers who need token values
   in JS, plus `src/tailwind/tokens.ts` + `src/tailwind/preset.ts` (a
   Tailwind v3-style preset object: `colors`, `borderRadius`, `boxShadow`,
   `fontFamily`, `fontSize`) for consumers on a JS Tailwind config.

**Avoid referencing the raw palette scale (`brand-500`, `red-700`, ...)
directly from component code** except for a handful of deliberate cases
(e.g. `bg-brand-500` for the primary button). Prefer semantic aliases
(`bg-default`, `fg-brand`, `border-danger`, ...) everywhere else — that's
what lets `.dark` overrides work without touching component code.

Typography uses a semantic scale, not Tailwind's default `xs/sm/base/lg`:
`text-h-xl`/`text-h-lg`/... (headline), `text-p-lg`/`text-p-md`/... (body),
`text-label-lg`/`text-label-md`/... (labels). Each step is a `[fontSize,
{lineHeight}]` pair, exposed as `tailwindFontSize` in the preset.

## Component architecture

Components live under `src/components/<Name>/` with a fixed file set
(established by `Button` — follow this exact shape for every new one):

```
src/components/<Name>/
  <Name>.tsx          # implementation
  <Name>.types.ts     # exported prop types, extends BaseProps when relevant
  <Name>.stories.tsx  # Storybook stories (also used as the visual test surface)
  <Name>.docs.mdx     # hand-authored docs page (NOT the `autodocs` tag)
  index.ts            # barrel: re-export the component + its types
```

Root `src/index.ts` re-exports every component's barrel, `cn` from
`src/lib/cn.ts`, everything in `src/tokens`, and everything in `src/types`.

**Styling approach**: components resolve `variant`/`size` (and similar
props) through plain `Record<Variant, string>` lookup tables of Tailwind
utility classes — see `Button.tsx` for the pattern. `class-variance-authority`
(`cva`) is a listed dependency but is **not currently used by any
component** — only reach for it if a future component's variant surface is
complex enough (many independent variant axes with compound variants) that
plain lookup tables get unwieldy; don't add it speculatively.

All components merge their computed classes with a consumer-supplied
`className` via `cn()` (`src/lib/cn.ts` — `clsx` + `tailwind-merge`), so a
consumer's `className` always wins over the component's own defaults
instead of just appending. This is why components must build their base
classes first and put `className` last in the `cn(...)` call.

Every component's props extend `BaseProps` (`src/types/base.ts`) where a
QA hook is relevant — currently just `dataTestId`, which renders as
`data-test-id` on the root DOM node. This is a deliberate cross-component
convention, not a Button-specific prop; add it to new components the same
way.

Use `forwardRef` for every component that renders a native DOM element, and
forward `ref` the standard React way — don't invent a separate
`refHandler`-style prop.

## Adding new components

When adding a new component, treat it as three separable decisions, and
when any of them is ambiguous, ask rather than guessing (getting the prop
API wrong is a breaking change once consumers exist):

1. **Token/class values** — always build from the semantic token layer
   (see above), not ad-hoc colors or spacing.
2. **Prop API shape** (names, variants, required vs optional) — decide
   deliberately rather than defaulting to whatever's most familiar; naming
   choices here are effectively permanent once a component ships.
3. **Extra capabilities** (e.g. a `pressed` toggle state, a `dataTestId`
   QA hook, icon-slot props) — evaluate each on its own merits. Skip props
   that native HTML attributes or `forwardRef` already cover (`id`,
   `disabled`, `onClick`, a custom ref-prop, etc.) rather than duplicating
   them.

## Build & verification

```
npm run build            # tsc --noEmit -> vite build (lib) -> build:css (Tailwind CLI)
npm run lint              # eslint .
npm run build:storybook   # storybook build
npm run dev                # storybook dev -p 6006
```

Always run `tsc -p tsconfig.build.json --noEmit`, `npm run build`, `npm run
lint`, and `npm run build:storybook` after any component or token change —
Tailwind v4's utility generation from `@theme` blocks can fail silently on
a malformed variable name, so a clean CSS build is not optional
verification.

Note: Tailwind is *not* run over component source during the library
build — `vite.lib.config.ts` ships raw utility class strings so consumer
apps can override them freely. Only `build:css` (a separate Tailwind CLI
invocation over `globals.css`) produces the distributable `dist/styles.css`
containing the actual token/theme/base layer.

## Stack

React 19, Tailwind CSS v4 (CSS-first `@theme` config, no `tailwind.config.js`),
TypeScript 5.9, Storybook 10 (`@storybook/react-vite`), Vite 8,
`class-variance-authority`, `clsx` + `tailwind-merge`, `lucide-react` for
icons, ESLint 9 flat config + Prettier.

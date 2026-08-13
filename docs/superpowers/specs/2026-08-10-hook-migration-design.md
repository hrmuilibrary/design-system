# Hook migration from hrm_ui_library — design

## Context

The old design system (`hrm_ui_library`, `src/hooks/`) has 17 hook files, 12
of which were exported from its public barrel. This is a migration of the
hooks that are actually worth carrying forward into `@ps-tools/ui`
(`ps_tools`), not a literal file-for-file port — an audit of both repos
found that several old hooks are dead code, and several others solve
problems `ps_tools` already solved differently.

## What was ruled out, and why

- **`useFieldArray`** (old: bare re-export of react-hook-form's own hook)
  and **`useFormContext`** (old: read a bespoke `FormContext`) — both have
  zero usages anywhere in the old repo's own component tree. Dead code;
  not migrated.
- **`useGetElemPositions`, `useGetElemSizes`, `useGetHasBottomSpace`/
  `useGetHasTopSpace`, `useGetTooltipPosition`, `useGetTooltipStyles`,
  `useChangePositionsOnScroll`** — all positioning/flip-space math. `ps_tools`
  already has two shared positioning hooks for this
  (`src/lib/useFloatingPosition.ts`, `src/lib/useAnchoredPosition.ts`).
  Porting the old versions would create a third, conflicting positioning
  system. Not migrated.
- **`useAnimation`** — enter/exit animation state machine. `ps_tools` already
  has `src/lib/useMountTransition.ts`, which is more robust (double-RAF,
  honors `prefers-reduced-motion`) and is the pattern `Drawer.tsx` already
  uses. Not migrated.
- **`useHideOnScroll`, `useDispatchEventOnScroll`** — built on a custom
  `CUSTOM_SCROLL_NAME` event bus dispatched on `document`. `ps_tools`'s
  positioning hooks and `Popover`'s `closeOnScroll` listen to native
  `scroll` events directly; the pub/sub indirection is obsolete. Not
  migrated.
- **`useScreenSize`** (3-tier `small`/`medium`/`large`) — had exactly one
  consumer in the old repo (`AvatarGroup`). Not worth carrying a 3-tier API
  over for zero current consumers; a plain boolean `useIsMobile` covers the
  real need (see below).

## What's actually missing in `ps_tools` (the migration)

Audit of `Popover`, `DropdownMenu`, `Select`, `MultiSelect`, `Drawer`,
`Tooltip`, `FormField`, `FormContainer` found real, unfilled gaps — logic
those components currently hand-roll inline, sometimes multiple times, or
don't have at all:

| New hook | Old equivalent | Gap it fills |
|---|---|---|
| `useOnOutsideClick` | `useOnOutsideClick` | Reimplemented inline 4x today (Popover, DropdownMenu, Select, MultiSelect) |
| `useEscapeKey` | `useEscapeKey` | Reimplemented inline 3+x today (Popover, Drawer, DropdownMenu) |
| `useHideBodyScroll` | `useHideBodyScroll` | Only exists inline in `Drawer.tsx` today; no shared version for future Modal/SideSheet-style components |
| `useIsMobile` | `useGetIsMobile`/`useScreenSize` | No viewport/mobile detection exists in `ps_tools` at all |
| `useFormContext` | `useFormProps` | `FormField.tsx` reads `src/lib/FormContext.ts` via inline `useContext`; no reusable named hook exposed |

Scope explicitly excludes refactoring the existing components
(`Popover`/`DropdownMenu`/`Select`/`MultiSelect`/`Drawer`/`FormField`) to
adopt these new hooks — they keep their current inline implementations.
Adopting the shared hooks in those components is a separate follow-up, to
be scoped and reviewed on its own.

## Hook designs

All five live as flat files under `src/hooks/` (matching the existing
`useStepper` — no per-hook subdirectory, no `.stories.tsx` since hooks
aren't rendered UI), each with a `.docs.mdx` page titled `Hooks/<name>`,
barrel-exported from `src/hooks/index.ts`. No `.types.ts` split — types are
declared inline in the hook file, matching `useStepper.ts`.

### `useOnOutsideClick`

```ts
function useOnOutsideClick(
  ref: RefObject<HTMLElement | null> | null | undefined,
  handler: (event: MouseEvent | TouchEvent) => void,
  enabled?: boolean, // default true
): void;
```

Attaches `mousedown` + `touchstart` listeners on `document`; fires
`handler` when the event target is outside `ref.current`. Drops the old
hook's global callback-stack/`uid` mechanism (that existed to give nested
menus stacked z-order behavior) — no current consumer needs it, and it's
easy to add later if one does. Matches the `RefObject<T | null> | null |
undefined` ref convention already used by `useAnchoredPosition`.

### `useEscapeKey`

```ts
function useEscapeKey(onEscape: () => void, enabled?: boolean): void; // enabled default true
```

Attaches a `keydown` listener on `document`, calls `onEscape` when
`event.key === 'Escape'`. Direct, simplified carryover of the old hook's
shape.

### `useHideBodyScroll`

```ts
function useHideBodyScroll(active: boolean): void;
```

While `active`, sets `document.body.style.overflow = 'hidden'`; restores
whatever `overflow` value was present before activation on cleanup/
deactivation. Rewritten from scratch (old version's `isHidden`/
`initialOverflow` state juggling had redundant state); returns `void`
instead of the old hook's meaningless `null` return.

### `useIsMobile`

```ts
function useIsMobile(breakpoint?: number): boolean; // default 768, matches old MOBILE_POINT
```

`window.matchMedia('(max-width: ${breakpoint}px)')`-based, SSR-safe
(`typeof window !== 'undefined'` guard), same style as
`prefersReducedMotion()` in `src/lib/motion.ts`. Subscribes to the media
query's `change` event rather than the old hook's `window.resize` listener
— fewer callback firings, no need to recompute on every resize pixel.

### `useFormContext`

```ts
function useFormContext(): FormContextValue;
```

Thin wrapper around `useContext(FormContext)` from `src/lib/FormContext.ts`;
throws a descriptive error (`"useFormContext must be used within a
FormContainer"`) if the context is `null`, matching `FormField.tsx`'s
existing null-check behavior. Named `useFormContext` rather than the old
`useFormProps` — more legible for "read the ambient form state", and there
is no naming collision risk since `ps_tools` doesn't re-export
react-hook-form's own `useFormContext` under this package.

## Testing / verification

No test runner exists in this repo. Verification is:
`tsc -p tsconfig.build.json --noEmit`, `npm run build`, `npm run lint`,
`npm run build:storybook` — per `CLAUDE.md`.

# Hook Migration (gap-filler hooks) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add five new shared hooks to `src/hooks/` — `useOnOutsideClick`, `useEscapeKey`, `useHideBodyScroll`, `useIsMobile`, `useFormContext` — that fill real gaps identified by auditing the old `hrm_ui_library` design system's hooks against this library's current components.

**Architecture:** Each hook is a standalone file under `src/hooks/`, following the existing `useStepper` shape exactly: `<name>.ts` (implementation + inline types, no `.types.ts` split) + `<name>.docs.mdx` (Storybook docs page), barrel-exported from `src/hooks/index.ts`. No existing component is modified — `Popover`/`DropdownMenu`/`Select`/`MultiSelect`/`Drawer`/`FormField` keep their current inline implementations of this logic; adopting these hooks there is an explicitly separate follow-up.

**Tech Stack:** React 19, TypeScript 5.9. No test runner exists in this repo — verification is `tsc -p tsconfig.build.json --noEmit`, `npm run build`, `npm run lint`, `npm run build:storybook` (per `CLAUDE.md`), not unit tests.

## Global Constraints

- Package name for docs `import` statements is `@dinofront/design_system` (the actual `package.json` `name`, not the `@ps-tools/ui` name used in prose elsewhere) — copy the exact import style from `src/hooks/useStepper.docs.mdx`.
- No `.stories.tsx` file per hook — hooks aren't rendered UI, matching the `useStepper` precedent.
- No `.types.ts` split per hook — types are declared inline in the `.ts` file, matching `useStepper.ts`.
- Every new hook file must compile cleanly under `tsc -p tsconfig.build.json --noEmit` before being committed.
- Do not modify any file under `src/components/` in this plan.

---

## Task 1: `useOnOutsideClick`

**Files:**
- Create: `src/hooks/useOnOutsideClick.ts`
- Create: `src/hooks/useOnOutsideClick.docs.mdx`
- Modify: `src/hooks/index.ts`

**Interfaces:**
- Produces: `useOnOutsideClick(ref: RefObject<HTMLElement | null> | null | undefined, handler: (event: MouseEvent | TouchEvent) => void, enabled?: boolean): void`

- [ ] **Step 1: Write `src/hooks/useOnOutsideClick.ts`**

```ts
import { useEffect, type RefObject } from 'react';

/** Fires `handler` on any `mousedown`/`touchstart` outside `ref.current`.
 *  No effect while `ref.current` is null or `enabled` is false — callers
 *  don't need to guard call sites where the ref isn't attached yet (e.g.
 *  before a portal mounts). */
export function useOnOutsideClick(
  ref: RefObject<HTMLElement | null> | null | undefined,
  handler: (event: MouseEvent | TouchEvent) => void,
  enabled = true,
): void {
  useEffect(() => {
    if (!enabled) return;

    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref?.current;
      if (!el || el.contains(event.target as Node)) return;
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, enabled]);
}
```

- [ ] **Step 2: Write `src/hooks/useOnOutsideClick.docs.mdx`**

```mdx
import { Meta } from '@storybook/addon-docs/blocks';

<Meta title="Hooks/useOnOutsideClick" />

# useOnOutsideClick

Fires a handler when the user clicks or taps outside a given element —
the logic half of a dismissible overlay (menu, popover, dropdown), with no
rendering of its own.

```tsx
import { useRef } from 'react';
import { useOnOutsideClick } from '@dinofront/design_system';

function Menu({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useOnOutsideClick(ref, onClose);

  return <div ref={ref}>...</div>;
}
```

## API

```ts
function useOnOutsideClick(
  ref: RefObject<HTMLElement | null> | null | undefined,
  handler: (event: MouseEvent | TouchEvent) => void,
  enabled?: boolean, // default true
): void;
```

Listens on `document` for `mousedown` and `touchstart`, not scoped to the
element's own subtree, so it also catches clicks on other overlays or the
page background. Pass `enabled={false}` to skip attaching listeners
entirely — useful when the overlay is closed and you don't want the
listener live.
```

- [ ] **Step 3: Add barrel export to `src/hooks/index.ts`**

Add this line (order matches file order; place after the existing `useStepper` export):

```ts
export { useOnOutsideClick } from './useOnOutsideClick';
```

- [ ] **Step 4: Verify it compiles**

Run: `npx tsc -p tsconfig.build.json --noEmit`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/hooks/useOnOutsideClick.ts src/hooks/useOnOutsideClick.docs.mdx src/hooks/index.ts
git commit -m "Add useOnOutsideClick hook"
```

---

## Task 2: `useEscapeKey`

**Files:**
- Create: `src/hooks/useEscapeKey.ts`
- Create: `src/hooks/useEscapeKey.docs.mdx`
- Modify: `src/hooks/index.ts`

**Interfaces:**
- Produces: `useEscapeKey(onEscape: () => void, enabled?: boolean): void`

- [ ] **Step 1: Write `src/hooks/useEscapeKey.ts`**

```ts
import { useEffect } from 'react';

/** Fires `onEscape` when the user presses `Escape`, anywhere in the
 *  document — not scoped to a container, matching how dismissible
 *  overlays (menus, drawers, popovers) listen for it today. */
export function useEscapeKey(onEscape: () => void, enabled = true): void {
  useEffect(() => {
    if (!enabled) return;

    const listener = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onEscape();
    };

    document.addEventListener('keydown', listener);
    return () => document.removeEventListener('keydown', listener);
  }, [onEscape, enabled]);
}
```

- [ ] **Step 2: Write `src/hooks/useEscapeKey.docs.mdx`**

```mdx
import { Meta } from '@storybook/addon-docs/blocks';

<Meta title="Hooks/useEscapeKey" />

# useEscapeKey

Fires a callback when the user presses `Escape` — the logic half of a
dismissible overlay's keyboard handling, with no rendering of its own.

```tsx
import { useEscapeKey } from '@dinofront/design_system';

function Drawer({ onClose }: { onClose: () => void }) {
  useEscapeKey(onClose);

  return <div>...</div>;
}
```

## API

```ts
function useEscapeKey(onEscape: () => void, enabled?: boolean): void; // enabled default true
```

Listens on `document`, so it fires regardless of which element inside your
overlay currently has focus. Pass `enabled={false}` to skip attaching the
listener entirely — useful when the overlay is closed.
```

- [ ] **Step 3: Add barrel export to `src/hooks/index.ts`**

```ts
export { useEscapeKey } from './useEscapeKey';
```

- [ ] **Step 4: Verify it compiles**

Run: `npx tsc -p tsconfig.build.json --noEmit`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/hooks/useEscapeKey.ts src/hooks/useEscapeKey.docs.mdx src/hooks/index.ts
git commit -m "Add useEscapeKey hook"
```

---

## Task 3: `useHideBodyScroll`

**Files:**
- Create: `src/hooks/useHideBodyScroll.ts`
- Create: `src/hooks/useHideBodyScroll.docs.mdx`
- Modify: `src/hooks/index.ts`

**Interfaces:**
- Produces: `useHideBodyScroll(active: boolean): void`

- [ ] **Step 1: Write `src/hooks/useHideBodyScroll.ts`**

```ts
import { useEffect, useRef } from 'react';

/** Locks `document.body` scrolling while `active`, restoring whatever
 *  `overflow` value was set before activation on cleanup — so this
 *  doesn't clobber a value another consumer of `body.style.overflow` set
 *  before it. */
export function useHideBodyScroll(active: boolean): void {
  const previousOverflow = useRef<string | null>(null);

  useEffect(() => {
    if (!active) return;

    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow.current ?? '';
    };
  }, [active]);
}
```

- [ ] **Step 2: Write `src/hooks/useHideBodyScroll.docs.mdx`**

```mdx
import { Meta } from '@storybook/addon-docs/blocks';

<Meta title="Hooks/useHideBodyScroll" />

# useHideBodyScroll

Locks page scrolling while a full-screen or modal-style overlay is open,
restoring the page's previous scroll behavior when it closes.

```tsx
import { useHideBodyScroll } from '@dinofront/design_system';

function Modal({ open }: { open: boolean }) {
  useHideBodyScroll(open);

  return open ? <div>...</div> : null;
}
```

## API

```ts
function useHideBodyScroll(active: boolean): void;
```

Sets `document.body.style.overflow = 'hidden'` while `active` is `true`,
and restores whatever value was present immediately before activation
once `active` becomes `false` (or the component unmounts).
```

- [ ] **Step 3: Add barrel export to `src/hooks/index.ts`**

```ts
export { useHideBodyScroll } from './useHideBodyScroll';
```

- [ ] **Step 4: Verify it compiles**

Run: `npx tsc -p tsconfig.build.json --noEmit`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/hooks/useHideBodyScroll.ts src/hooks/useHideBodyScroll.docs.mdx src/hooks/index.ts
git commit -m "Add useHideBodyScroll hook"
```

---

## Task 4: `useIsMobile`

**Files:**
- Create: `src/hooks/useIsMobile.ts`
- Create: `src/hooks/useIsMobile.docs.mdx`
- Modify: `src/hooks/index.ts`

**Interfaces:**
- Produces: `useIsMobile(breakpoint?: number): boolean` (default breakpoint `768`)

- [ ] **Step 1: Write `src/hooks/useIsMobile.ts`**

```ts
import { useEffect, useState } from 'react';

const DEFAULT_BREAKPOINT = 768;

function getMatches(breakpoint: number): boolean {
  return typeof window !== 'undefined' && typeof window.matchMedia === 'function'
    ? window.matchMedia(`(max-width: ${breakpoint}px)`).matches
    : false;
}

/** True when the viewport is at or below `breakpoint` (default 768px).
 *  SSR-safe — returns `false` until mounted in a browser. Subscribes to
 *  the media query's `change` event rather than `window.resize`, so it
 *  only re-renders when the mobile/desktop boundary is actually
 *  crossed. */
export function useIsMobile(breakpoint: number = DEFAULT_BREAKPOINT): boolean {
  const [isMobile, setIsMobile] = useState(() => getMatches(breakpoint));

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;

    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const listener = () => setIsMobile(mediaQuery.matches);

    listener();
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, [breakpoint]);

  return isMobile;
}
```

- [ ] **Step 2: Write `src/hooks/useIsMobile.docs.mdx`**

```mdx
import { Meta } from '@storybook/addon-docs/blocks';

<Meta title="Hooks/useIsMobile" />

# useIsMobile

Tracks whether the viewport is at or below a breakpoint, for components
that need a distinct mobile rendering path.

```tsx
import { useIsMobile } from '@dinofront/design_system';

function Nav() {
  const isMobile = useIsMobile();

  return isMobile ? <MobileNav /> : <DesktopNav />;
}
```

## API

```ts
function useIsMobile(breakpoint?: number): boolean; // default 768
```

Backed by `window.matchMedia('(max-width: ${breakpoint}px)')`. SSR-safe —
returns `false` on the server and during the first client render before
the media query can be evaluated, matching `prefersReducedMotion()`'s
SSR-safety convention in `src/lib/motion.ts`.
```

- [ ] **Step 3: Add barrel export to `src/hooks/index.ts`**

```ts
export { useIsMobile } from './useIsMobile';
```

- [ ] **Step 4: Verify it compiles**

Run: `npx tsc -p tsconfig.build.json --noEmit`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/hooks/useIsMobile.ts src/hooks/useIsMobile.docs.mdx src/hooks/index.ts
git commit -m "Add useIsMobile hook"
```

---

## Task 5: `useFormContext`

**Files:**
- Create: `src/hooks/useFormContext.ts`
- Create: `src/hooks/useFormContext.docs.mdx`
- Modify: `src/hooks/index.ts`

**Interfaces:**
- Consumes: `FormContext`, `FormContextValue` exported from `src/lib/FormContext.ts` (existing — `FormContext = createContext<FormContextValue | null>(null)`, `FormContextValue` bundles react-hook-form's `control`/`register`/`errors`/`setValue`/`getValues`/`watch`/`reset`/`trigger`/`clearErrors`/`setError`/`getFieldState`/`unregister`/`isDirty`/`isSubmitted`/`isSubmitting`/`isValid`/`dirtyFields`/`submit`).
- Produces: `useFormContext(): FormContextValue`

- [ ] **Step 1: Write `src/hooks/useFormContext.ts`**

```ts
import { useContext } from 'react';
import { FormContext, type FormContextValue } from '../lib/FormContext';

/** Reads the ambient form state provided by the nearest `FormContainer`.
 *  Throws outside one, matching `FormField`'s existing null-check — the
 *  same failure whether a consumer uses `FormField` or this hook
 *  directly. */
export function useFormContext(): FormContextValue {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used inside a FormContainer.');
  }
  return context;
}
```

- [ ] **Step 2: Write `src/hooks/useFormContext.docs.mdx`**

```mdx
import { Meta } from '@storybook/addon-docs/blocks';

<Meta title="Hooks/useFormContext" />

# useFormContext

Reads the ambient form state provided by the nearest `FormContainer` —
`control`, `register`, `errors`, and the rest of react-hook-form's form
API, plus a `submit()` callback. Useful for a custom field or control that
needs direct access to the form without going through `FormField`.

```tsx
import { useFormContext } from '@dinofront/design_system';

function CustomField({ name }: { name: string }) {
  const { register, errors } = useFormContext();

  return (
    <div>
      <input {...register(name)} />
      {errors[name] && <span>{errors[name]?.message}</span>}
    </div>
  );
}
```

## API

```ts
function useFormContext(): FormContextValue;
```

Must be called from inside a `FormContainer` — throws
`"useFormContext must be used inside a FormContainer."` otherwise, the
same failure `FormField` raises when used outside one.
```

- [ ] **Step 3: Add barrel export to `src/hooks/index.ts`**

```ts
export { useFormContext } from './useFormContext';
```

- [ ] **Step 4: Verify it compiles**

Run: `npx tsc -p tsconfig.build.json --noEmit`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/hooks/useFormContext.ts src/hooks/useFormContext.docs.mdx src/hooks/index.ts
git commit -m "Add useFormContext hook"
```

---

## Task 6: Full verification

**Files:** none created or modified — this task only runs verification commands across everything added in Tasks 1-5.

- [ ] **Step 1: Full typecheck**

Run: `npx tsc -p tsconfig.build.json --noEmit`
Expected: no errors.

- [ ] **Step 2: Full library build**

Run: `npm run build`
Expected: completes with no errors (runs `tsc --noEmit` → `vite build` → `build:css`).

- [ ] **Step 3: Lint**

Run: `npm run lint`
Expected: no errors on the 5 new hook files or `src/hooks/index.ts`.

- [ ] **Step 4: Storybook build**

Run: `npm run build:storybook`
Expected: completes with no errors; confirms all 5 `.docs.mdx` pages under `Hooks/*` build correctly.

- [ ] **Step 5: Confirm final barrel content**

Read `src/hooks/index.ts` and confirm it now exports `useStepper` (existing) plus `useOnOutsideClick`, `useEscapeKey`, `useHideBodyScroll`, `useIsMobile`, `useFormContext` (added in Tasks 1-5) — nothing else. No commit needed for this task since it's verification-only.

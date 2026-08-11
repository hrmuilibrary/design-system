# MultiSelect parity with Select (ReactNode labels, grouping, loading) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bring `MultiSelect` to parity with `Select` on three fronts: `MultiSelectOption.label` widens from `string` to `ReactNode` (with a new `searchText?: string` fallback for search matching), `MultiSelectOption.group?: string` adds contiguous grouped headings identical to `Select`'s, and `MultiSelectProps` gets a `loading?: boolean` prop (spinner instead of an icon, blocks opening, does not set native `disabled`) — replacing the dead, unwired `isLoading`/`language` fields a separate PR already merged onto `MultiSelectProps`.

**Architecture:** Each of the three fronts is additive to `MultiSelectOption`/`MultiSelectProps` and self-contained in its own task, but they share one new local helper in `MultiSelect.tsx` — `optionDisplayText(o)` — that resolves a safe `string | undefined` from `searchText` / `label` for the handful of sites that need an actual string (search matching, `Avatar`'s `name` prop, the remove button's `aria-label`), mirroring `Select`'s existing `searchText ?? (typeof label === 'string' ? label : undefined)` fallback exactly, **without** `Select`'s further fallback to `String(o.value)` for search matching (per spec: excluded from matching, not value-matched) — see Task 2 for where the two contexts diverge.

**Tech Stack:** React 19, TypeScript 5.9 (strict), no test runner in this repo — verification is `tsc --noEmit`, ESLint, the Vite lib build, and the Storybook build (see Global Constraints).

## Global Constraints

- Follow `/Users/manuktagushyan/Desktop/Projects/ps_tools/CLAUDE.md` exactly, in particular:
  - **After every task, run, in order, and confirm each is clean before moving on:**
    1. `npx tsc -p tsconfig.build.json --noEmit`
    2. `npm run lint` — run this from *inside this plan's isolated worktree*, not the main repo checkout: other worktrees under `.claude/worktrees/**` leave built `dist`/`storybook-static` artifacts on disk that `eslint .` sweeps up when run from the main repo root, producing thousands of irrelevant errors. From inside this plan's own worktree, on top of current `main`, there are two known pre-existing, unrelated failures — `src/hooks/useFormProps.ts` (an `any`-cast) and `src/hooks/useOnOutsideClick.ts` (a `@ts-ignore` lint rule plus two `exhaustive-deps` warnings) — confirm zero NEW errors/warnings beyond those, and do not touch either file.
    3. `npm run build`
    4. `npm run build:storybook`
- This repo has **no unit test runner**. "Verify it fails / verify it passes" in this plan means "the `tsc`/`build` step surfaces the expected type error" and "the `tsc`/`build`/`lint`/`build:storybook` steps are clean," respectively.
- This branch must be based on current `main` (commit `17c17ba` or later) — `main` already has the merged option-value-widening work (`OptionValue`, `isSameOptionValue`/`includesOptionValue` from `src/lib/optionValue.ts`) and a separate, already-merged PR that added dead `isLoading?: boolean`/`language?: string` fields to `MultiSelectProps`. Task 1 renames/wires up `isLoading` → `loading`; `language` is explicitly out of scope for this plan — do not touch it, do not rename it, do not wire it up.
- Do not introduce a generic type parameter anywhere in this plan — `ReactNode`/`string | undefined` widening only, matching the established pattern from the option-value-widening plan.

---

## File Structure

| File | Change |
|---|---|
| `src/components/MultiSelect/MultiSelect.types.ts` | Rename `isLoading` → `loading` with a doc comment matching `SelectProps.loading`'s; widen `MultiSelectOption.label` to `ReactNode`; add `MultiSelectOption.searchText?: string` and `MultiSelectOption.group?: string` |
| `src/components/MultiSelect/MultiSelect.tsx` | Wire up `loading` (spinner, block-open, no native `disabled`); add `optionDisplayText()` helper and use it in search matching, the chip `Avatar` `name`, the dropdown-row `Avatar` `name`, and the remove button's `aria-label`; add contiguous group-heading rendering to the dropdown list |
| `src/components/MultiSelect/MultiSelect.stories.tsx` | Add a rich-ReactNode-label + `searchText` story, a grouped-options story, and a loading-state story; add `loading: false` to the meta's baseline `args` |
| `src/components/MultiSelect/MultiSelect.docs.mdx` | Check for stale `label: string` / no-`group` / no-`loading` mentions and fix if present |

---

### Task 1: `loading` — rename `isLoading`, wire it up

**Files:**
- Modify: `src/components/MultiSelect/MultiSelect.types.ts`
- Modify: `src/components/MultiSelect/MultiSelect.tsx`
- Modify: `src/components/MultiSelect/MultiSelect.stories.tsx`

**Interfaces:**
- Produces: `MultiSelectProps.loading?: boolean` (replacing `isLoading`), consumed by nothing else in this plan.

- [ ] **Step 1: Rename the type, doc it like `Select`'s**

`src/components/MultiSelect/MultiSelect.types.ts` line 55, change:
```ts
  isLoading?: boolean;
```
to:
```ts
  /** Shows a spinner in place of the trailing icon and blocks opening the list. Does not set the native `disabled` attribute. */
  loading?: boolean;
```
Leave line 56 (`language?: string`) completely untouched, including its missing trailing semicolon — out of scope for this plan.

- [ ] **Step 2: Type-check to confirm no other file referenced the old name**

Run: `npx tsc -p tsconfig.build.json --noEmit`
Expected: clean (per the research pass, `isLoading` was never destructured or referenced anywhere in `MultiSelect.tsx` or the stories file, so this rename is a pure addition of a differently-named unused field at the type level until Step 3 wires it up).

```bash
grep -rn "isLoading" src/
```
Expected: no matches anywhere in `src/`.

- [ ] **Step 3: Destructure `loading`, wire the open-blocking behavior**

`src/components/MultiSelect/MultiSelect.tsx` — add `loading = false,` to the destructured props list (alongside the existing `disabled = false, error = false,`).

Add an effect that closes the dropdown when loading turns on, mirroring `Select.tsx` lines 102–104 (place it near this component's other `useEffect`s):
```ts
useEffect(() => {
  if (loading) setOpen(false);
}, [loading]);
```

At the dropdown-open render gate (currently `{open && !disabled && !reached && (...)}`), add `!loading`:
```tsx
{open && !disabled && !loading && !reached && (
```

At every site that calls `setOpen(true)` (the input's `onChange` handler, its `onFocus` handler, and the `ArrowDown` branch of `onKeyDown`), guard with `loading` the same way `disabled` is already guarded — read each call site's exact current condition first and add `&& !loading` (or an equivalent early return) alongside the existing `&& !disabled`/`if (disabled) return`-style guard, matching that site's existing style rather than introducing a new one.

At the overall box's click-to-focus handler (`onClick={() => !disabled && innerInputRef.current?.focus()}`), add `!loading`:
```tsx
onClick={() => !disabled && !loading && innerInputRef.current?.focus()}
```

Do **not** add `loading` to the input's `disabled={disabled || reached}` — per spec, `loading` must never set the native `disabled` attribute. Instead, add `aria-busy`/`aria-disabled` to the outer box element for accessibility, mirroring `Select.tsx` lines 195–196:
```tsx
aria-busy={loading || undefined}
aria-disabled={loading || undefined}
```

- [ ] **Step 4: Swap in a spinner**

MultiSelect currently has no chevron/trailing icon at all (only `X`, `Search`, `Users` imported from `lucide-react`). Add a `Loader2` import (`import { Loader2, Search, Users, X } from 'lucide-react';` — merge into the existing import line) and render it right-aligned inside the chips/input row when `loading`, e.g. as a trailing sibling inside the box's main flex container (find the box's root JSX — the element with the chips/input row — and add, as its last child, right before the row wraps):
```tsx
{loading && (
  <Loader2 className="h-4 w-4 shrink-0 text-fg-secondary animate-spin" aria-hidden />
)}
```
Position it so it reads naturally at the trailing edge of the box regardless of how many chips are present — check the box's existing flex/wrap layout first and place this as a shrink-0 flex child of that same row, not absolutely positioned.

- [ ] **Step 5: Add `loading: false` to the stories meta baseline and a loading story**

`src/components/MultiSelect/MultiSelect.stories.tsx` meta `args` block — add `loading: false` alongside the existing `disabled: false, error: false` (find that block, currently lines ~73–80).

Add a new story, modeled on `Select.stories.tsx`'s `SearchableGroupedLoading` composed demo (transient loading that resolves after 1s) — but keep it a plain `loading: true` story since MultiSelect doesn't yet have a `Grouped` story to compose with in this task (Task 3 adds one):
```tsx
export const Loading: Story = {
  args: { loading: true, label: 'Assignees' },
};
```

- [ ] **Step 6: Verify**

Run, in order:
```bash
npx tsc -p tsconfig.build.json --noEmit
npm run lint
npm run build
npm run build:storybook
```
Expected: all four clean.

- [ ] **Step 7: Commit**

```bash
git add src/components/MultiSelect/MultiSelect.types.ts src/components/MultiSelect/MultiSelect.tsx src/components/MultiSelect/MultiSelect.stories.tsx
git commit -m "feat(MultiSelect): add loading prop, replacing dead isLoading field"
```

---

### Task 2: `label: ReactNode` + `searchText`

**Files:**
- Modify: `src/components/MultiSelect/MultiSelect.types.ts`
- Modify: `src/components/MultiSelect/MultiSelect.tsx`
- Modify: `src/components/MultiSelect/MultiSelect.stories.tsx`

**Interfaces:**
- Produces: `MultiSelectOption.label: ReactNode`, `MultiSelectOption.searchText?: string`, and a new internal helper `optionDisplayText(o: MultiSelectOption): string | undefined` in `MultiSelect.tsx`, consumed by Task 3's group-heading logic if it also needs option text (it doesn't — group headings use the `group` string field directly, not option text).

- [ ] **Step 1: Widen the type, add `searchText`**

`src/components/MultiSelect/MultiSelect.types.ts` line 8, change:
```ts
  label: string;
```
to:
```ts
  label: ReactNode;
  /** Text used for search matching when `label` isn't a plain string. Options where neither this nor a string `label` is available are excluded from `searchable` matching. */
  searchText?: string;
```

- [ ] **Step 2: Type-check to confirm expected downstream errors**

Run: `npx tsc -p tsconfig.build.json --noEmit`
Expected: FAIL — `MultiSelect.tsx`'s `matches` filter (`o.label.toLowerCase()`) no longer compiles since `label` isn't guaranteed to be a `string`; the two `<Avatar ... name={o.label} .../>` sites and the `` aria-label={`Remove ${o.label}`} `` site all fail similarly (`Avatar.name` is typed `string | undefined`, and template-literal interpolation of a non-`string`/`number` `ReactNode` is a type error under this repo's `strict` TS config for anything other than `string | number | bigint | boolean | null | undefined`).

- [ ] **Step 3: Add the `optionDisplayText` helper, fix every site that needs an actual string**

Add near the top of `MultiSelect.tsx` (after the component's other top-level helpers/imports, before the component function), matching `Select.tsx`'s fallback chain exactly but WITHOUT the further `String(o.value)` fallback step (Select's search-matching falls all the way back to the stringified value; this spec explicitly wants exclusion instead once `searchText`/string-`label` are both unavailable):
```ts
function optionDisplayText(o: MultiSelectOption): string | undefined {
  return o.searchText ?? (typeof o.label === 'string' ? o.label : undefined);
}
```

Fix the `matches` filter (currently `o.label.toLowerCase().includes(q)` plus the `description` check) to use it, with exclusion (not fallback) when it resolves to `undefined`:
```ts
const matches = useMemo(() => {
  const q = query.trim().toLowerCase();
  return options.filter((o) => {
    if (includesOptionValue(value, o.value)) return false;
    if (q === '') return true;
    const text = optionDisplayText(o);
    return (
      (text !== undefined && text.toLowerCase().includes(q)) ||
      (o.description ?? '').toLowerCase().includes(q)
    );
  });
}, [options, value, query]);
```
(Preserve the existing `includesOptionValue(value, o.value)` exclusion check and the `description` matching exactly as they are today — only the `label`-matching branch changes shape.)

Fix the chip `Avatar`'s `name` prop (currently `name={o.label}`) and the dropdown-row `Avatar`'s `name` prop (same pattern) — both become:
```tsx
name={optionDisplayText(o)}
```
(`Avatar.name` already accepts `string | undefined`, so no further fallback is needed here — an option with a non-string label and no `searchText` simply renders without derived initials, which is `Avatar`'s existing behavior for a missing `name`.)

Fix the remove button's `aria-label` (currently `` `Remove ${o.label}` ``) — this one genuinely needs *some* string for accessibility (an icon-only button can't go unlabeled), so fall back to the stringified value as a last resort here specifically, unlike the search-matching exclusion above:
```tsx
aria-label={`Remove ${optionDisplayText(o) ?? String(o.value)}`}
```

Leave the two direct-JSX-children label renders (the chip's `<span className="font-medium">{o.label}</span>` and the dropdown row's `<span className="block text-p-std font-medium text-fg-default truncate">{o.label}</span>`) completely unchanged — both already render `label` as JSX children, which is safe for any `ReactNode` with no code change needed.

- [ ] **Step 4: Add a rich-label + searchText story**

Add a fixture and story to `MultiSelect.stories.tsx`, e.g.:
```tsx
const richLabelOptions: MultiSelectOption[] = [
  {
    value: 'urgent',
    label: (
      <span className="inline-flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-red-600" />
        Urgent
      </span>
    ),
    searchText: 'urgent',
  },
  {
    value: 'normal',
    label: (
      <span className="inline-flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-brand-500" />
        Normal
      </span>
    ),
    searchText: 'normal',
  },
  {
    value: 'low',
    label: (
      <span className="inline-flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-gray-400" />
        Low priority
      </span>
    ),
    searchText: 'low priority',
  },
];

export const RichLabels: Story = {
  name: 'Rich ReactNode labels with searchText',
  render: (args) => {
    function Controlled() {
      const [value, setValue] = useState<(string | number)[]>([]);
      return <MultiSelect {...args} options={richLabelOptions} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: { label: 'Priority tags' },
};
```

- [ ] **Step 5: Verify**

Run, in order:
```bash
npx tsc -p tsconfig.build.json --noEmit
npm run lint
npm run build
npm run build:storybook
```
Expected: all four clean.

- [ ] **Step 6: Commit**

```bash
git add src/components/MultiSelect/MultiSelect.types.ts src/components/MultiSelect/MultiSelect.tsx src/components/MultiSelect/MultiSelect.stories.tsx
git commit -m "feat(MultiSelect): widen option label to ReactNode, add searchText"
```

---

### Task 3: `group` headings

**Files:**
- Modify: `src/components/MultiSelect/MultiSelect.types.ts`
- Modify: `src/components/MultiSelect/MultiSelect.tsx`
- Modify: `src/components/MultiSelect/MultiSelect.stories.tsx`

**Interfaces:**
- Consumes: nothing new from Tasks 1–2.
- Produces: `MultiSelectOption.group?: string`.

- [ ] **Step 1: Add the type**

`src/components/MultiSelect/MultiSelect.types.ts`, add after `description` (or in the same relative position `SelectOption.group` occupies — after `label`/before `disabled`; match whichever neighboring field ordering reads most naturally next to the existing fields):
```ts
  /** Group heading this option belongs under. Options sharing a group MUST be
   *  contiguous in the (filtered) list — the heading is emitted whenever this
   *  value changes between consecutive visible options, so a non-contiguous
   *  group renders its heading more than once. */
  group?: string;
```

- [ ] **Step 2: Render contiguous group headings in the dropdown list**

`MultiSelect.tsx`'s dropdown `<ul>` currently maps `matches` directly into `<li>` rows with no `Fragment`/heading wrapper (unlike `Select.tsx`'s `Fragment` + `showGroupHeader` pattern). Change the `.map(...)` callback to mirror `Select.tsx`'s exact pattern:
```tsx
{matches.map((o, i) => {
  const showGroupHeader = !!o.group && o.group !== matches[i - 1]?.group;
  return (
    <Fragment key={String(o.value)}>
      {showGroupHeader && (
        <li
          role="presentation"
          className="px-3 pt-2 pb-1 text-label-sm font-medium uppercase tracking-wide text-fg-tertiary select-none"
        >
          {o.group}
        </li>
      )}
      <li
        {/* ...existing <li> row JSX, unchanged... */}
      >
        {/* ...existing row content, unchanged... */}
      </li>
    </Fragment>
  );
})}
```
Import `Fragment` from `react` at the top of the file (add to the existing `import { ... } from 'react';` line). Compare against `matches[i - 1]?.group` (the previous *filtered/visible* option), exactly matching `Select.tsx`'s contiguous-grouping contract — not the raw, unfiltered `options` array.

Read the existing `<li>` row's full current JSX first (the block between `open && !disabled && !loading && !reached && (` and the closing of the `.map`) before making this edit, so the row's existing `key`, click handlers, and content are preserved exactly — only the wrapping `Fragment`/header injection is new.

- [ ] **Step 3: Add a grouped-options story**

Add a fixture and story, mirroring `Select.stories.tsx`'s `groupedFruitOptions`/`Grouped`:
```tsx
const groupedSkillOptions: MultiSelectOption[] = [
  { value: 'js', label: 'JavaScript' },
  { value: 'ts', label: 'TypeScript', group: 'Languages' },
  { value: 'python', label: 'Python', group: 'Languages' },
  { value: 'react', label: 'React', group: 'Frameworks' },
  { value: 'vue', label: 'Vue', group: 'Frameworks' },
];

export const Grouped: Story = {
  render: (args) => {
    function Controlled() {
      const [value, setValue] = useState<(string | number)[]>([]);
      return <MultiSelect {...args} options={groupedSkillOptions} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: { label: 'Skills' },
};
```
(Note the first option, `js`, deliberately has no `group`, matching `Select.stories.tsx`'s `groupedFruitOptions` convention of demonstrating an ungrouped option preceding grouped ones.)

- [ ] **Step 4: Verify**

Run, in order:
```bash
npx tsc -p tsconfig.build.json --noEmit
npm run lint
npm run build
npm run build:storybook
```
Expected: all four clean.

- [ ] **Step 5: Commit**

```bash
git add src/components/MultiSelect/MultiSelect.types.ts src/components/MultiSelect/MultiSelect.tsx src/components/MultiSelect/MultiSelect.stories.tsx
git commit -m "feat(MultiSelect): add group headings, matching Select's contiguous-grouping contract"
```

---

### Task 4: Docs page check + full verification sweep

**Files:**
- Modify (if needed): `src/components/MultiSelect/MultiSelect.docs.mdx`

**Interfaces:** none.

- [ ] **Step 1: Check the docs page for stale mentions**

Read `src/components/MultiSelect/MultiSelect.docs.mdx` in full. Fix only what's now factually wrong:
- Any prose or code sample describing `label` as string-only.
- Any prose stating there's no grouping support.
- Any mention of `isLoading` (should not exist, but check) or absence-of-loading-support prose.
If the page only uses `<Controls />`/`<Stories />` auto-generated blocks with no hand-written type descriptions (check first — `Checkbox.docs.mdx` and others in this repo follow that minimal pattern), no edit is needed; don't invent prose to add.

- [ ] **Step 2: Grep for leftover old-shape references**

```bash
grep -rn "isLoading" src/
grep -n "label: string" src/components/MultiSelect/MultiSelect.types.ts
```
Expected: no matches for either.

- [ ] **Step 3: Full verification**

Run, in order:
```bash
npx tsc -p tsconfig.build.json --noEmit
npm run lint
npm run build
npm run build:storybook
```
Expected: all four clean.

- [ ] **Step 4: Manual Storybook smoke check**

```bash
npm run dev
```
Open Storybook and check the three new/changed stories (`Loading`, `RichLabels`, `Grouped`) plus the existing `Primary`/`WithAvatarsAndBadges` stories (to confirm no regression from the `label`/`Avatar name` changes): confirm rendering and no console errors. Stop the dev server (`Ctrl+C`) once confirmed.

- [ ] **Step 5: Final commit (only if Steps 1–4 required fix-ups)**

```bash
git add -A
git commit -m "docs(MultiSelect): update docs.mdx for ReactNode labels, group, loading"
```
Skip if nothing needed changing.

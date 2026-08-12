# DatePicker: locale, display format, clearing, required, filterDate — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `DatePicker` currently hardcodes English month/weekday names and a Monday-first calendar grid, and its trigger's display string is a hand-built `dd.MM.yyyy` template with no way to override it. (`minDate`/`maxDate`/`excludeDates`/`disabled`/`error`/`errorText`/`fullWidth` were already added in a prior, already-merged plan — not touched here.) This plan adds: `locale?: string` (derive month names, weekday abbreviations, and first-day-of-week from `Intl`); `format?: string` (token-based trigger display, default `'dd.MM.yyyy'`); clearing (`onChange` widened to accept `null`, `clearable?: boolean` rendering a clear affordance); `required?: boolean` + `helperText?: ReactNode` (matching Input/Select/MultiSelect/Upload's pattern); and `filterDate?: (date: Date) => boolean` (an arbitrary per-day predicate joining the existing `isDayDisabled` check).

**Architecture:** All five additions live entirely in `DatePicker.types.ts` and `DatePicker.tsx` — no new files, no composition with other components. `locale` and `format` are independent axes (locale controls month/weekday *names* and grid *shape*; format controls the trigger's numeric-token *display string*) and touch disjoint code paths, so they're separate tasks with no ordering dependency. `Intl.Locale.prototype.weekInfo` (used for first-day-of-week detection) is a newer runtime API not yet in TypeScript's bundled `lib` types and not universally shipped (notably absent in older Safari) — the plan wraps it in a `try`/`catch` with a small region-based fallback table, and casts around the missing type rather than upgrading `tsconfig.json`'s `lib` setting (out of scope, would affect the whole package).

**Tech Stack:** React 19, TypeScript 5.9 (strict), no test runner in this repo — verification is `tsc --noEmit`, ESLint, the Vite lib build, and the Storybook build (see Global Constraints).

## Global Constraints

- Follow `/Users/manuktagushyan/Desktop/Projects/ps_tools/CLAUDE.md` exactly. **After every task, run, in order, and confirm each is clean before moving on:**
  1. `npx tsc -p tsconfig.build.json --noEmit`
  2. `npm run lint` — run this from *inside this plan's isolated worktree*. On top of current `main`, there are two known pre-existing, unrelated failures — `src/hooks/useFormProps.ts` and `src/hooks/useOnOutsideClick.ts` — confirm zero NEW errors/warnings beyond those two files, and do not touch either file.
  3. `npm run build`
  4. `npm run build:storybook`
- This repo has **no unit test runner**. "Verify it fails / verify it passes" means "the `tsc`/`build` step surfaces the expected type error" and "the `tsc`/`build`/`lint`/`build:storybook` steps are clean," respectively.
- Do NOT touch `minDate`/`maxDate`/`excludeDates`/`disabled`/`error`/`errorText`/`fullWidth` — all already implemented by a prior, already-merged plan. `filterDate` joins the existing `isDayDisabled` check; don't restructure it.
- `onChange`'s widening to accept `null` must be non-breaking for existing consumers who never call it with `null` — a handler typed `(date: Date) => void` is not directly assignable to `(date: Date | null) => void` in strict TypeScript (contravariance), so this repo's own `Controlled` story (which currently does `useState<Date | null>` + passes `setValue` directly) needs its `onChange` handler updated to accept `null` — check Task 3 for the exact fix.
- `format` defaults to the current `'dd.MM.yyyy'` so existing consumers see no change in the trigger's displayed text.
- `locale` defaults to `'en'`, and `'en'`'s derived month/weekday names must read identically to today's hardcoded English arrays (`Jan`..`Dec`, `Mo`..`Su` starting Monday) — for `'en'` specifically, `Intl`-derived weekday order is NOT guaranteed to match the current Monday-first default (browsers' `Intl.Locale('en').weekInfo` reports Sunday-first for `en`, i.e. `en` with no region is ambiguous/US-like) — this is a **deliberate, expected behavior change** for the default locale's week-start (Monday→Sunday), not a bug; the plan's Task 1 Step 4 lists this explicitly so it isn't "fixed" by accident later.

---

## File Structure

| File | Change |
|---|---|
| `src/components/DatePicker/DatePicker.types.ts` | Add `locale`, `format`, `clearable`, `required`, `helperText`, `filterDate`; widen `onChange` to accept `null` |
| `src/components/DatePicker/DatePicker.tsx` | Replace hardcoded month/weekday arrays with `Intl`-derived, locale-aware values and first-day-of-week detection; replace `formatShort` with a token-based formatter; add the clear affordance; add the required-asterisk/helperText UI; join `filterDate` into `isDayDisabled` |
| `src/components/DatePicker/DatePicker.stories.tsx` | Add stories for a non-English locale with a non-Sunday week start, a custom `format`, a clearable picker, and a `filterDate` greying out weekends |
| `src/components/DatePicker/DatePicker.docs.mdx` | Document all five additions |

---

### Task 1: `locale`

**Files:**
- Modify: `src/components/DatePicker/DatePicker.types.ts`
- Modify: `src/components/DatePicker/DatePicker.tsx`

**Interfaces:**
- Produces: `DatePickerProps.locale?: string` (default `'en'`).

- [ ] **Step 1: Add the type**

`DatePicker.types.ts`, add to `DatePickerProps` (near `size`/`label`):
```ts
  /** BCP-47 locale tag. Derives month names, weekday abbreviations, and the first day of the week. */
  locale?: string;
```

- [ ] **Step 2: Add locale-derived helpers**

`DatePicker.tsx`, remove the two module-level constants:
```ts
const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAY_NAMES = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
```
Replace with three new helper functions in the same place (module scope, above the component):
```ts
const SUNDAY_FIRST_REGIONS = new Set(['US', 'CA', 'MX', 'JP', 'BR', 'IL', 'PH', 'KR', 'TW']);

/** 0 = Sunday .. 6 = Saturday. Prefers Intl.Locale's weekInfo (not yet in
 *  TypeScript's bundled lib types, and not universally shipped — notably
 *  absent in older Safari), falling back to a small region allowlist. */
function getFirstDayOfWeek(locale: string): number {
  try {
    const weekInfo = (new Intl.Locale(locale) as Intl.Locale & { weekInfo?: { firstDay: number } }).weekInfo;
    if (weekInfo?.firstDay) return weekInfo.firstDay % 7; // spec: 1=Mon..7=Sun
  } catch {
    // Intl.Locale or weekInfo unsupported in this runtime — fall through.
  }
  const region = locale.split('-')[1]?.toUpperCase();
  return region && SUNDAY_FIRST_REGIONS.has(region) ? 0 : 1;
}

function getMonthNames(locale: string): string[] {
  const formatter = new Intl.DateTimeFormat(locale, { month: 'short' });
  return Array.from({ length: 12 }, (_, i) => formatter.format(new Date(2000, i, 1)));
}

/** Jan 4, 1970 was a Sunday — a stable reference for enumerating Sun..Sat,
 *  then rotated so index 0 is `firstDayOfWeek`. */
function getWeekdayNames(locale: string, firstDayOfWeek: number): string[] {
  const formatter = new Intl.DateTimeFormat(locale, { weekday: 'short' });
  const namesFromSunday = Array.from({ length: 7 }, (_, i) => formatter.format(new Date(1970, 0, 4 + i)));
  return [...namesFromSunday.slice(firstDayOfWeek), ...namesFromSunday.slice(0, firstDayOfWeek)];
}
```

- [ ] **Step 3: Thread `firstDayOfWeek` into `buildGrid`**

`buildGrid` currently:
```ts
function buildGrid(view: Date) {
  const first = startOfMonth(view);
  const offset = (first.getDay() + 6) % 7; // Mon-first
  const daysInMonth = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const cells: (Date | null)[] = [];
  for (let i = 0; i < offset; i++) cells.push(null);
  for (let i = 1; i <= daysInMonth; i++) cells.push(new Date(view.getFullYear(), view.getMonth(), i));
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}
```
change to accept `firstDayOfWeek` as a parameter and use it instead of the hardcoded `+ 6`:
```ts
function buildGrid(view: Date, firstDayOfWeek: number) {
  const first = startOfMonth(view);
  const offset = (first.getDay() - firstDayOfWeek + 7) % 7;
  const daysInMonth = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const cells: (Date | null)[] = [];
  for (let i = 0; i < offset; i++) cells.push(null);
  for (let i = 1; i <= daysInMonth; i++) cells.push(new Date(view.getFullYear(), view.getMonth(), i));
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}
```

- [ ] **Step 4: Wire it up in the component**

Destructure `locale = 'en',` in `DatePicker`'s props (alongside `size = 'md',`).

Compute the derived values inside the component body (near where `cells = buildGrid(view)` currently is, or slightly above it — before it's used):
```ts
  const firstDayOfWeek = getFirstDayOfWeek(locale);
  const monthNames = getMonthNames(locale);
  const weekdayNames = getWeekdayNames(locale, firstDayOfWeek);
```
Update the `cells = buildGrid(view)` call site to `const cells = buildGrid(view, firstDayOfWeek);`.

Update the calendar header (currently `{MONTH_NAMES[view.getMonth()]} {view.getFullYear()}`) to `{monthNames[view.getMonth()]} {view.getFullYear()}`.

Update the weekday header row (currently `{DAY_NAMES.map((day) => (...))}`) to `{weekdayNames.map((day, i) => (...))}` — since weekday abbreviations from `Intl` are not guaranteed unique across a week for every locale/length combination (unlikely but possible), change the row's `key={day}` to `key={i}` to avoid any theoretical duplicate-key warning.

Confirm no other reference to `MONTH_NAMES`/`DAY_NAMES` remains in the file (`grep -n "MONTH_NAMES\|DAY_NAMES" src/components/DatePicker/DatePicker.tsx` should return nothing).

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
git add src/components/DatePicker/DatePicker.types.ts src/components/DatePicker/DatePicker.tsx
git commit -m "feat(DatePicker): derive month/weekday names and first-day-of-week from locale"
```

---

### Task 2: `format`

**Files:**
- Modify: `src/components/DatePicker/DatePicker.types.ts`
- Modify: `src/components/DatePicker/DatePicker.tsx`

**Interfaces:**
- Produces: `DatePickerProps.format?: string` (default `'dd.MM.yyyy'`).

- [ ] **Step 1: Add the type**

`DatePicker.types.ts`, add near `locale`:
```ts
  /** Trigger display format. Supports `dd`/`MM`/`yyyy` tokens plus a literal
   *  separator. Defaults to the pre-existing `'dd.MM.yyyy'`. Applied to both
   *  endpoints in range mode. */
  format?: string;
```

- [ ] **Step 2: Replace `formatShort` with a token-based formatter**

`DatePicker.tsx`, `formatShort` currently:
```ts
function formatShort(date: Date) {
  return `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()}`;
}
```
change to:
```ts
function formatDate(date: Date, format: string): string {
  const dd = String(date.getDate()).padStart(2, '0');
  const MM = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = String(date.getFullYear());
  return format.replace(/dd/g, dd).replace(/MM/g, MM).replace(/yyyy/g, yyyy);
}
```

- [ ] **Step 3: Wire it up**

Destructure `format = 'dd.MM.yyyy',` in `DatePicker`'s props.

Update both call sites in the `display` computation:
```ts
  const display = range
    ? rangeValue?.start
      ? `${formatShort(rangeValue.start)}${rangeValue.end ? ` – ${formatShort(rangeValue.end)}` : ''}`
      : ''
    : value
      ? formatShort(value)
      : '';
```
to:
```ts
  const display = range
    ? rangeValue?.start
      ? `${formatDate(rangeValue.start, format)}${rangeValue.end ? ` – ${formatDate(rangeValue.end, format)}` : ''}`
      : ''
    : value
      ? formatDate(value, format)
      : '';
```
Confirm no other reference to `formatShort` remains (`grep -n "formatShort" src/components/DatePicker/DatePicker.tsx` should return nothing).

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
git add src/components/DatePicker/DatePicker.types.ts src/components/DatePicker/DatePicker.tsx
git commit -m "feat(DatePicker): add configurable display format"
```

---

### Task 3: Clearing

**Files:**
- Modify: `src/components/DatePicker/DatePicker.types.ts`
- Modify: `src/components/DatePicker/DatePicker.tsx`
- Modify: `src/components/DatePicker/DatePicker.stories.tsx`

**Interfaces:**
- Produces: `DatePickerProps.onChange?: (date: Date | null) => void` (widened from `(date: Date) => void`), `DatePickerProps.clearable?: boolean`.

- [ ] **Step 1: Widen `onChange`, add `clearable`**

`DatePicker.types.ts` line 13, change:
```ts
  onChange?: (date: Date) => void;
```
to:
```ts
  onChange?: (date: Date | null) => void;
```
Add near it:
```ts
  /** Renders a clear affordance in the trigger (in place of the calendar icon) when a value is selected. Fires `onChange(null)` (or `onChangeRange({ start: null, end: null })` in range mode). */
  clearable?: boolean;
```

- [ ] **Step 2: Type-check to confirm the expected downstream break**

Run: `npx tsc -p tsconfig.build.json --noEmit`
Expected: FAIL — `DatePicker.stories.tsx`'s `Controlled` story passes its `setValue` (a `Dispatch<SetStateAction<Date | null>>`, i.e. `(date: Date | null) => void`) directly as `onChange`. Before this change that was assignable (a `(date: Date) => void` consumer prop accepted a wider `(date: Date | null) => void` setter, since a function that accepts MORE is assignable where LESS is expected — contravariance). After widening `onChange` itself to `(date: Date | null) => void`, this specific case (setter's param type already matches) should actually still compile fine. The real expected failure is different: confirm by running tsc which specific error (if any) surfaces — if none, this step's "expected FAIL" doesn't materialize and that's fine, just note it in your report and move on to Step 3 regardless, since the clear affordance work still needs doing.

- [ ] **Step 3: Add the clear handler and swap the trailing icon**

Add `X` to the existing `lucide-react` import (`import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';` → add `X`).

Destructure `clearable = false,` in `DatePicker`'s props.

Add a handler near `pick` (before the `return (` JSX):
```ts
  function handleClear(event: React.MouseEvent | React.KeyboardEvent) {
    event.stopPropagation();
    if (range) {
      onChangeRange?.({ start: null, end: null });
    } else {
      onChange?.(null);
    }
  }
```
(Add `import type { MouseEvent, KeyboardEvent } from 'react';` — or use the already-imported React namespace if this file imports it that way; check the file's existing import style for event types first, since `KeyboardEvent` may already need disambiguating from the DOM global `KeyboardEvent` type depending on how the file's imports are structured.)

The trigger's trailing icon currently:
```tsx
          <Calendar className={cn('w-4 h-4', disabled ? 'text-fg-disabled' : 'text-fg-secondary')} />
```
change to:
```tsx
          {clearable && display ? (
            <span
              role="button"
              tabIndex={0}
              aria-label="Clear date"
              onClick={handleClear}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  handleClear(event);
                }
              }}
              className="inline-flex items-center justify-center rounded-full p-0.5 hover:bg-bg-container"
            >
              <X className="w-4 h-4 text-fg-secondary" />
            </span>
          ) : (
            <Calendar className={cn('w-4 h-4', disabled ? 'text-fg-disabled' : 'text-fg-secondary')} />
          )}
```
This mirrors `src/components/Filter/Filter.tsx`'s existing chevron-vs-clear-X pattern (`event.stopPropagation()` so clearing doesn't also toggle the trigger's open/closed popover state, plus `Enter`/`Space` keyboard activation since it's a `role="button"` span, not a native `<button>`).

- [ ] **Step 4: Fix the `Controlled` story for the widened `onChange` type**

Read `DatePicker.stories.tsx`'s `Controlled` story's exact current code first. If its local state is already `useState<Date | null>` and it already passes `setValue` (or equivalent) directly as `onChange`, this likely still compiles as-is per Step 2's note — but re-run `tsc` after Steps 1–3 land and fix whatever it actually reports, rather than assuming Step 2's prediction was exactly right.

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
git add src/components/DatePicker/DatePicker.types.ts src/components/DatePicker/DatePicker.tsx src/components/DatePicker/DatePicker.stories.tsx
git commit -m "feat(DatePicker): widen onChange to accept null, add clearable"
```

---

### Task 4: `required` + `helperText`

**Files:**
- Modify: `src/components/DatePicker/DatePicker.types.ts`
- Modify: `src/components/DatePicker/DatePicker.tsx`

**Interfaces:**
- Produces: `DatePickerProps.required?: boolean`, `DatePickerProps.helperText?: ReactNode`.

- [ ] **Step 1: Add the types**

`DatePicker.types.ts`, add near `label`:
```ts
  /** Renders a red asterisk next to the label and sets `aria-required` on the trigger. */
  required?: boolean;
  /** Neutral message rendered below the control, replaced by `errorText` when present. */
  helperText?: ReactNode;
```

- [ ] **Step 2: Type-check**

Run: `npx tsc -p tsconfig.build.json --noEmit`
Expected: clean (additive optional fields; nothing reads them yet).

- [ ] **Step 3: Wire up the label asterisk, `aria-required`, and the helperText fallback**

Destructure `required = false, helperText,` in `DatePicker`'s props (near `label`/`errorText`).

The `describedBy` computation currently:
```ts
  const describedBy = errorText ? `${triggerId}-error` : undefined;
```
change to:
```ts
  const describedBy = errorText ? `${triggerId}-error` : helperText ? `${triggerId}-help` : undefined;
```

The label currently:
```tsx
      {label && (
        <label htmlFor={triggerId} className="text-p-std font-medium text-fg-default inline-flex">
          {label}
        </label>
      )}
```
change to:
```tsx
      {label && (
        <label
          htmlFor={triggerId}
          className="text-p-std font-medium text-fg-default inline-flex items-center gap-1"
        >
          {label}
          {required && (
            <span className="text-red-600" aria-hidden>
              *
            </span>
          )}
        </label>
      )}
```

Add `aria-required={required || undefined}` to the trigger `<button>`'s props, alongside its existing `aria-invalid`/`aria-describedby`.

The trailing message block currently:
```tsx
      {errorText ? (
        <p id={`${triggerId}-error`} className="text-p-sm text-red-700">
          {errorText}
        </p>
      ) : null}
```
change to:
```tsx
      {errorText ? (
        <p id={`${triggerId}-error`} className="text-p-sm text-red-700">
          {errorText}
        </p>
      ) : helperText ? (
        <p id={`${triggerId}-help`} className="text-p-sm text-fg-secondary">
          {helperText}
        </p>
      ) : null}
```

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
git add src/components/DatePicker/DatePicker.types.ts src/components/DatePicker/DatePicker.tsx
git commit -m "feat(DatePicker): add required marker and helperText"
```

---

### Task 5: `filterDate`

**Files:**
- Modify: `src/components/DatePicker/DatePicker.types.ts`
- Modify: `src/components/DatePicker/DatePicker.tsx`

**Interfaces:**
- Produces: `DatePickerProps.filterDate?: (date: Date) => boolean`.

- [ ] **Step 1: Add the type**

`DatePicker.types.ts`, add near `excludeDates`:
```ts
  /** Arbitrary per-day predicate, evaluated alongside `minDate`/`maxDate`/`excludeDates`. Days it rejects render disabled. */
  filterDate?: (date: Date) => boolean;
```

- [ ] **Step 2: Join it into `isDayDisabled`**

`isDayDisabled` currently:
```ts
function isDayDisabled(date: Date, minDate?: Date, maxDate?: Date, excludeDates?: Date[]) {
  const time = startOfDay(date).getTime();
  if (minDate && time < startOfDay(minDate).getTime()) return true;
  if (maxDate && time > startOfDay(maxDate).getTime()) return true;
  return !!excludeDates?.some((excluded) => sameDay(excluded, date));
}
```
change to:
```ts
function isDayDisabled(
  date: Date,
  minDate?: Date,
  maxDate?: Date,
  excludeDates?: Date[],
  filterDate?: (date: Date) => boolean,
) {
  const time = startOfDay(date).getTime();
  if (minDate && time < startOfDay(minDate).getTime()) return true;
  if (maxDate && time > startOfDay(maxDate).getTime()) return true;
  if (excludeDates?.some((excluded) => sameDay(excluded, date))) return true;
  return !!filterDate && !filterDate(date);
}
```
(The `excludeDates` line changes from a bare `return` to an `if`-then-`return true` so `filterDate` can be checked afterward — this is a structural change, not a behavior change, for the `excludeDates` check itself.)

Destructure `filterDate,` in `DatePicker`'s props (near `excludeDates`).

Update the call site:
```ts
                const dayDisabled = isDayDisabled(date, minDate, maxDate, excludeDates);
```
to:
```ts
                const dayDisabled = isDayDisabled(date, minDate, maxDate, excludeDates, filterDate);
```

- [ ] **Step 3: Verify**

Run, in order:
```bash
npx tsc -p tsconfig.build.json --noEmit
npm run lint
npm run build
npm run build:storybook
```
Expected: all four clean.

- [ ] **Step 4: Commit**

```bash
git add src/components/DatePicker/DatePicker.types.ts src/components/DatePicker/DatePicker.tsx
git commit -m "feat(DatePicker): add filterDate predicate"
```

---

### Task 6: Stories + docs + verification sweep

**Files:**
- Modify: `src/components/DatePicker/DatePicker.stories.tsx`
- Modify: `src/components/DatePicker/DatePicker.docs.mdx`

**Interfaces:** none new.

- [ ] **Step 1: Add a non-English-locale story with a non-Sunday week start**

Add, e.g. using `hy-AM` (Armenian, Monday-first) or `ru-RU` (Russian, Monday-first) — either demonstrates the point since the new default (`'en'`) is Sunday-first:
```tsx
export const ArmenianLocale: Story = {
  name: 'Locale (hy-AM, Monday-first)',
  args: { locale: 'hy-AM', label: 'Date' },
};
```
Check this file's exact `Story`/`Meta` conventions first — match whichever pattern (plain `args` object vs. a `render` wrapper) the simpler existing stories (e.g. `WithLabel`) use, since this story needs no local state.

- [ ] **Step 2: Add a custom-`format` story**

```tsx
export const CustomFormat: Story = {
  name: 'Custom format (yyyy/MM/dd)',
  args: { format: 'yyyy/MM/dd', label: 'Date' },
};
```

- [ ] **Step 3: Add a clearable story**

Follow the `Controlled` story's exact local-state pattern (check it first) but add `clearable`:
```tsx
export const Clearable: Story = {
  render: (args) => {
    function ClearableDatePicker() {
      const [value, setValue] = useState<Date | null>(new Date());
      return <DatePicker {...args} clearable value={value} onChange={setValue} />;
    }
    return <ClearableDatePicker />;
  },
  args: { label: 'Date' },
};
```

- [ ] **Step 4: Add a `filterDate` story greying out weekends**

```tsx
export const WeekdaysOnly: Story = {
  name: 'filterDate (weekdays only)',
  args: {
    label: 'Business day',
    filterDate: (date: Date) => date.getDay() !== 0 && date.getDay() !== 6,
  },
};
```

- [ ] **Step 5: Update the docs page**

Read `DatePicker.docs.mdx` in full first. Add new sections for `locale`, `format`, clearing (`clearable`), `required`/`helperText`, and `filterDate` — the existing "Limiting selectable days" section is the natural place to add one sentence about `filterDate` joining `minDate`/`maxDate`/`excludeDates`; the other four need their own short sections. Match the file's existing prose style/length — read the surrounding sections first. Explicitly call out the default-locale week-start behavior change (Monday→Sunday for `'en'`) mentioned in this plan's Global Constraints, so it's not mistaken for an unrelated regression by anyone reading the docs after this ships.

- [ ] **Step 6: Verify**

Run, in order:
```bash
npx tsc -p tsconfig.build.json --noEmit
npm run lint
npm run build
npm run build:storybook
```
Expected: all four clean.

- [ ] **Step 7: Manual Storybook smoke check**

```bash
npm run dev
```
Open Storybook and check:
- `ArmenianLocale` (or whichever locale story): month name and weekday abbreviations are in the target language, and the grid's first column is Monday, not Sunday.
- `CustomFormat`: pick a date, confirm the trigger shows `yyyy/MM/dd`-shaped text.
- `Clearable`: confirm the trigger shows a clear (X) icon instead of the calendar icon while a value is selected, clicking it clears the value and the icon reverts to the calendar icon, and clicking it does NOT also open the popover.
- `WeekdaysOnly`: confirm Saturdays/Sundays render disabled (greyed out, unclickable) in the popup.
- Also re-check `Primary`/`RangeMode`/`Controlled`/`MinMaxDates`/`ExcludedDates` (pre-existing, unmodified) for no regression.
Confirm zero console errors throughout. Stop the dev server (`Ctrl+C`) once confirmed.

- [ ] **Step 8: Commit**

```bash
git add src/components/DatePicker/DatePicker.stories.tsx src/components/DatePicker/DatePicker.docs.mdx
git commit -m "docs(DatePicker): document locale/format/clearing/required/filterDate, add stories"
```

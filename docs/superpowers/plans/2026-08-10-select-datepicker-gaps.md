# Close Core.Web-blocking gaps Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Close five specific gaps in `@dinofront/design_system` that block a consuming app (Core.Web) from using this library's components directly: `DatePicker` (real `disabled` + day-range limiting + error state), `Upload` (error state), `RadioGroup` (a `label` prop), `Select` (grouped options, `loading`, `searchable`, `required`), and `FormField` (extending its render prop to match what Core.Web's field wrappers already expect).

**Architecture:** Each task is additive to one existing component's `.types.ts`+`.tsx`+`.stories.tsx`+`.docs.mdx` file set. No existing prop is removed or renamed; no other component is touched. Full design rationale (why each decision was made, alternatives considered) lives in `/Users/manuktagushyan/.claude/plans/cuddly-giggling-hamster.md` — this plan is the executable version of that approved design.

**Tech Stack:** React 19, TypeScript 5.9, Tailwind v4, `lucide-react` icons, `react-hook-form` (FormField task only). No test runner exists in this repo — verification is `tsc -p tsconfig.build.json --noEmit`, `npm run build`, `npm run lint`, `npm run build:storybook`, plus Storybook stories as the executable test surface (per `CLAUDE.md`).

## Global Constraints

- Every new prop is optional and defaults to preserving today's exact behavior — no existing consumer's rendering or behavior changes unless it opts into a new prop.
- Follow each file's existing Tailwind class conventions exactly (raw `red-600`/`red-700`/`red-300` for danger states, matching `Select`/`Input`/`UploadItem` — no new semantic danger tokens in this plan).
- No `.types.ts` file gets a new export removed; only new optional fields are added to existing interfaces.
- Every task ends with `npx tsc -p tsconfig.build.json --noEmit` passing with zero errors before its commit.
- Do not touch Core.Web (`/Users/manuktagushyan/Desktop/Projects/Core/Core.Web/`) in any task — every change is inside `ps_tools`.

---

## Task 1: DatePicker — `disabled`, `minDate`/`maxDate`/`excludeDates`, `error`/`errorText`

**Files:**
- Modify: `src/components/DatePicker/DatePicker.types.ts`
- Modify: `src/components/DatePicker/DatePicker.tsx`
- Modify: `src/components/DatePicker/DatePicker.stories.tsx`
- Modify: `src/components/DatePicker/DatePicker.docs.mdx`

**Interfaces:**
- Produces: `DatePickerProps` gains `disabled?: boolean`, `minDate?: Date`, `maxDate?: Date`, `excludeDates?: Date[]`, `error?: boolean`, `errorText?: ReactNode`.

- [ ] **Step 1: Update `DatePicker.types.ts`**

Add these fields to `DatePickerProps` (after `fullWidth?: boolean;` for `disabled`; after `placeholder?: string;` for the date-range fields; anywhere before `id?: string;` for `error`/`errorText` — exact position doesn't matter, grouping does):

```ts
  /** Disable the trigger entirely — blocks both mouse and keyboard activation. */
  disabled?: boolean;
  /** Earliest selectable day, inclusive. Earlier days render disabled. Time-of-day is ignored. */
  minDate?: Date;
  /** Latest selectable day, inclusive. Later days render disabled. Time-of-day is ignored. */
  maxDate?: Date;
  /** Individual days that can't be picked. Matched by calendar day; time-of-day is ignored. */
  excludeDates?: Date[];
  /** Switch the trigger to the danger border/ring styles. */
  error?: boolean;
  /** Message rendered below the control; also switches the trigger to the danger styles. */
  errorText?: ReactNode;
```

- [ ] **Step 2: Replace `DatePicker.tsx` in full**

```tsx
import { forwardRef, useEffect, useId, useRef, useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/cn';
import type { DatePickerProps, DatePickerSize } from './DatePicker.types';

// Heights, text sizes and horizontal padding mirror Input/Select exactly so a
// DatePicker lines up with the other fields in a form grid.
const sizeStyles: Record<DatePickerSize, string> = {
  lg: 'h-12 text-p-md px-3.5',
  md: 'h-10 text-p-std px-3',
  sm: 'h-8 text-p-sm px-2.5',
};

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAY_NAMES = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function sameDay(a: Date | null, b: Date | null) {
  return (
    !!a && !!b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
  );
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

// Normalizing both sides to local midnight makes the comparison day-granular
// in both directions without a separate `endOfDay` boundary — a `minDate`
// carrying today's wall-clock time (e.g. `new Date()`) still leaves today
// itself selectable, since today's grid cell is also midnight.
function isDayDisabled(date: Date, minDate?: Date, maxDate?: Date, excludeDates?: Date[]) {
  const time = startOfDay(date).getTime();
  if (minDate && time < startOfDay(minDate).getTime()) return true;
  if (maxDate && time > startOfDay(maxDate).getTime()) return true;
  return !!excludeDates?.some((excluded) => sameDay(excluded, date));
}

function formatShort(date: Date) {
  return `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()}`;
}

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

export const DatePicker = forwardRef<HTMLButtonElement, DatePickerProps>(function DatePicker(
  {
    value,
    onChange,
    range = false,
    rangeValue,
    onChangeRange,
    size = 'md',
    label,
    placeholder = 'Select date',
    fullWidth = false,
    disabled = false,
    minDate,
    maxDate,
    excludeDates,
    error = false,
    errorText,
    id,
    className,
    wrapperClassName,
    dataTestId,
  },
  ref,
) {
  const reactId = useId();
  const triggerId = id ?? reactId;
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<Date>(value ?? rangeValue?.start ?? new Date());
  const [hoverEnd, setHoverEnd] = useState<Date | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasError = error || !!errorText;
  const isOpen = open && !disabled;

  useEffect(() => {
    if (!isOpen) return;
    const onClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [isOpen]);

  const display = range
    ? rangeValue?.start
      ? `${formatShort(rangeValue.start)}${rangeValue.end ? ` – ${formatShort(rangeValue.end)}` : ''}`
      : ''
    : value
      ? formatShort(value)
      : '';

  function pick(date: Date) {
    if (!range) {
      onChange?.(date);
      setOpen(false);
      return;
    }
    const current = rangeValue ?? { start: null, end: null };
    if (!current.start || (current.start && current.end)) {
      onChangeRange?.({ start: date, end: null });
      return;
    }
    if (date < current.start) {
      onChangeRange?.({ start: date, end: current.start });
      return;
    }
    onChangeRange?.({ start: current.start, end: date });
    setOpen(false);
  }

  const cells = buildGrid(view);
  const currentRange = rangeValue ?? { start: null, end: null };
  const rangeEnd = currentRange.end ?? hoverEnd;

  return (
    <div
      ref={containerRef}
      data-test-id={dataTestId}
      className={cn('flex flex-col gap-1.5', fullWidth && 'w-full', wrapperClassName)}
    >
      {label && (
        <label htmlFor={triggerId} className="text-p-std font-medium text-fg-default inline-flex">
          {label}
        </label>
      )}
      <div className="relative">
        <button
          ref={ref}
          id={triggerId}
          type="button"
          disabled={disabled}
          aria-invalid={hasError || undefined}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            'inline-flex items-center gap-2 rounded-lg border bg-bg-default text-left transition-colors focus-visible:outline-none focus-visible:ring-2',
            hasError ? 'border-red-600' : 'border-border-default',
            !disabled && !hasError && 'hover:border-border-strong',
            hasError
              ? 'focus-visible:ring-red-300 focus-visible:border-red-600'
              : 'focus-visible:ring-brand-300 focus-visible:border-brand-500',
            disabled && 'bg-bg-container border-border-default cursor-not-allowed text-fg-disabled',
            fullWidth ? 'w-full min-w-0' : 'min-w-[260px]',
            sizeStyles[size],
            className,
          )}
        >
          <span
            className={cn(
              'flex-1 text-left truncate',
              disabled ? 'text-fg-disabled' : display ? 'text-fg-default' : 'text-fg-tertiary',
            )}
          >
            {display || placeholder}
          </span>
          <Calendar className={cn('w-4 h-4', disabled ? 'text-fg-disabled' : 'text-fg-secondary')} />
        </button>

        {isOpen && (
          <div className="absolute z-50 mt-1 left-0 rounded-xl border border-border-default bg-bg-default shadow-z3 p-3 w-[300px]">
            <div className="flex items-center justify-between mb-2">
              <button
                type="button"
                className="w-8 h-8 rounded-md hover:bg-bg-container flex items-center justify-center text-fg-secondary"
                onClick={() => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1))}
                aria-label="Previous month"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="text-p-md font-semibold text-fg-default">
                {MONTH_NAMES[view.getMonth()]} {view.getFullYear()}
              </div>
              <button
                type="button"
                className="w-8 h-8 rounded-md hover:bg-bg-container flex items-center justify-center text-fg-secondary"
                onClick={() => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1))}
                aria-label="Next month"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center">
              {DAY_NAMES.map((day) => (
                <div key={day} className="text-p-xs text-fg-tertiary py-1">
                  {day}
                </div>
              ))}
              {cells.map((date, index) => {
                if (!date) return <div key={index} />;
                const dayDisabled = isDayDisabled(date, minDate, maxDate, excludeDates);
                const isSelected = !range && sameDay(date, value ?? null);
                const isStart = range && sameDay(date, currentRange.start);
                const isEnd = range && sameDay(date, rangeEnd);
                const isInRange =
                  range && !!currentRange.start && !!rangeEnd && date > currentRange.start && date < rangeEnd;
                const stateClassName = dayDisabled
                  ? 'text-fg-disabled cursor-not-allowed'
                  : isSelected || isStart || isEnd
                    ? 'bg-brand-500 text-white'
                    : isInRange
                      ? 'bg-bg-brand-lighter text-brand-700'
                      : 'text-fg-default hover:bg-bg-container';
                return (
                  <button
                    key={index}
                    type="button"
                    disabled={dayDisabled}
                    aria-disabled={dayDisabled || undefined}
                    onMouseEnter={() =>
                      !dayDisabled && range && currentRange.start && !currentRange.end && setHoverEnd(date)
                    }
                    onClick={() => !dayDisabled && pick(date)}
                    className={cn('h-8 rounded-md text-p-sm font-medium', stateClassName)}
                  >
                    {date.getDate()}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
      {errorText ? <p className="text-p-sm text-red-700">{errorText}</p> : null}
    </div>
  );
});
```

- [ ] **Step 3: Update `DatePicker.stories.tsx`**

Add to `meta.args` (after `range: false,`):
```ts
    disabled: false,
    error: false,
```

Add these stories after `FullWidth` and before `const SIZES = ['sm', 'md', 'lg'] as const;`:

```tsx
export const Disabled: Story = {
  args: { disabled: true, label: 'Start date' },
};

export const WithError: Story = {
  args: { label: 'Start date', error: true, errorText: 'Please select a valid date.' },
};

export const MinMaxDates: Story = {
  name: 'Min/max dates',
  render: (args) => {
    function MinMaxDemo() {
      const [value, setValue] = useState<Date | null>(null);
      const today = new Date();
      const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 14);
      return <DatePicker {...args} value={value} onChange={setValue} minDate={minDate} maxDate={maxDate} />;
    }
    return <MinMaxDemo />;
  },
  args: {
    label: 'Appointment date',
  },
};

export const ExcludedDates: Story = {
  name: 'Excluded dates',
  render: (args) => {
    function ExcludedDemo() {
      const [value, setValue] = useState<Date | null>(null);
      const today = new Date();
      const excludeDates = [
        new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3),
        new Date(today.getFullYear(), today.getMonth(), today.getDate() + 4),
      ];
      return <DatePicker {...args} value={value} onChange={setValue} excludeDates={excludeDates} />;
    }
    return <ExcludedDemo />;
  },
  args: {
    label: 'Delivery date',
  },
};

export const RangeWithMinMax: Story = {
  name: 'Range with min/max',
  render: (args) => {
    function RangeMinMaxDemo() {
      const [range, setRange] = useState<DateRange>({ start: null, end: null });
      const today = new Date();
      const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
      return (
        <DatePicker
          {...args}
          range
          rangeValue={range}
          onChangeRange={setRange}
          minDate={minDate}
          maxDate={maxDate}
        />
      );
    }
    return <RangeMinMaxDemo />;
  },
  args: {
    label: 'Trip dates',
    placeholder: 'Select date range',
  },
};
```

Do **not** add `minDate`/`maxDate`/`excludeDates` to `argTypes` with a date control — Storybook's date control emits a number (epoch ms), not a `Date`, which would crash `startOfDay()`. The stories above compute `Date`s inside `render`, never as directly-controllable args, which avoids this.

- [ ] **Step 4: Update `DatePicker.docs.mdx`**

Insert these two new sections directly before `## Composition`:

```md
## Disabled

`disabled` blocks the trigger natively — both mouse and keyboard activation
are prevented, and the popover closes immediately if `disabled` becomes
`true` while it's already open.

## Validation state

`error` switches the trigger to the danger border/ring styles; `errorText`
does the same and also renders below the control.

## Limiting selectable days

`minDate`/`maxDate` (inclusive) and `excludeDates` disable individual days
in the calendar grid — time-of-day is ignored on all three, so passing
`new Date()` as `minDate` still leaves today itself selectable. In range
mode, only the two endpoints are validated against these constraints; a
committed range may still span an excluded day in the middle.
```

- [ ] **Step 5: Verify**

Run: `npx tsc -p tsconfig.build.json --noEmit`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add src/components/DatePicker/DatePicker.types.ts src/components/DatePicker/DatePicker.tsx src/components/DatePicker/DatePicker.stories.tsx src/components/DatePicker/DatePicker.docs.mdx
git commit -m "Add disabled, min/max/exclude dates, and error state to DatePicker"
```

---

## Task 2: Upload — `error`/`errorText`

**Files:**
- Modify: `src/components/Upload/Upload.types.ts`
- Modify: `src/components/Upload/Upload.tsx`
- Modify: `src/components/Upload/Upload.stories.tsx`
- Modify: `src/components/Upload/Upload.docs.mdx`

**Interfaces:**
- Produces: `UploadProps` gains `error?: boolean`, `errorText?: ReactNode`.

- [ ] **Step 1: Update `Upload.types.ts`**

Add these two fields to `UploadProps`, right after `required?: boolean;` and before `labelAddons?: ReactNode;`:

```ts
  /** Switches the dropzone (or, in `button`/`icon` mode, just the message below) to the danger styles. */
  error?: boolean;
  /** Message rendered below the control; also switches dropzone mode to the danger styles. */
  errorText?: ReactNode;
```

- [ ] **Step 2: Update `Upload.tsx`**

In the destructured props of the `Upload` component, add `error = false, errorText,` right after `required,` and before `labelAddons,`.

Right after the `const dragDepth = useRef(0);` line, add:
```ts
  const hasError = error || !!errorText;
```

In the `labelRow` definition block, right after it, add:
```ts
  const errorRow = errorText ? <p className="text-p-sm text-red-700">{errorText}</p> : null;
```

In the `mode !== 'dropzone'` branch's returned `<div>`, add `{errorRow}` right after `{fileInput}` (as the last child).

In the `dropzone` `<div>`'s attribute list, add `aria-invalid={hasError || undefined}` right next to the existing `aria-disabled={disabled || undefined}`.

In the `dropzone`'s `className`'s `cn(...)` call, replace:
```ts
dragOver ? 'border-brand-500 bg-brand-20' : 'border-border-default bg-bg-container hover:bg-bg-subtle',
```
with:
```ts
hasError
  ? 'border-red-300 bg-bg-danger-lighter'
  : dragOver
    ? 'border-brand-500 bg-brand-20'
    : 'border-border-default bg-bg-container hover:bg-bg-subtle',
```
(This reuses the exact `red-300`/`bg-bg-danger-lighter` pairing `UploadItem`'s own `error` status already uses further down in this same file, for internal consistency.)

Finally, replace:
```tsx
  if (!labelRow) return dropzone;

  return (
    <div className="flex flex-col gap-1.5">
      {labelRow}
      {dropzone}
    </div>
  );
```
with:
```tsx
  if (!labelRow && !errorRow) return dropzone;

  return (
    <div className="flex flex-col gap-1.5">
      {labelRow}
      {dropzone}
      {errorRow}
    </div>
  );
```

- [ ] **Step 3: Update `Upload.stories.tsx`**

Add this story after `WithLabelAndRequired` and before `ItemWithThumbnail`:
```tsx
export const WithError: Story = {
  args: { label: 'Attachment', error: true, errorText: 'This file type is not supported.' },
};
```

- [ ] **Step 4: Update `Upload.docs.mdx`**

Insert this new section right after `## Hint text` and before `## UploadItem statuses`:
```md
## Validation state

`error`/`errorText` on `Upload` itself switch the dropzone to the danger
styles and render a message below it — separate from `UploadItem`'s own
per-file `error` status below, which is about an individual file's upload
outcome rather than the control's overall validity.
```

- [ ] **Step 5: Verify**

Run: `npx tsc -p tsconfig.build.json --noEmit`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add src/components/Upload/Upload.types.ts src/components/Upload/Upload.tsx src/components/Upload/Upload.stories.tsx src/components/Upload/Upload.docs.mdx
git commit -m "Add error/errorText validation state to Upload"
```

---

## Task 3: RadioGroup — `label` prop

**Files:**
- Modify: `src/components/Radio/Radio.types.ts`
- Modify: `src/components/Radio/Radio.tsx`
- Modify: `src/components/Radio/Radio.stories.tsx`
- Modify: `src/components/Radio/Radio.docs.mdx`

**Interfaces:**
- Produces: `RadioGroupProps` gains `label?: ReactNode`.

- [ ] **Step 1: Update `Radio.types.ts`**

`ReactNode` is already imported. Add `label?: ReactNode;` to `RadioGroupProps`, right after `name?: string;`:

```ts
export interface RadioGroupProps extends BaseProps {
  name?: string;
  label?: ReactNode;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  size?: RadioSize;
  orientation?: 'horizontal' | 'vertical';
  children: ReactNode;
  className?: string;
}
```

- [ ] **Step 2: Update `Radio.tsx`**

Replace the `RadioGroup` component (everything from `export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(function RadioGroup(` down to its closing `});`) with:

```tsx
export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(function RadioGroup(
  {
    name,
    label,
    value,
    defaultValue,
    onChange,
    disabled,
    size = 'md',
    orientation = 'vertical',
    children,
    className,
    dataTestId,
  },
  ref,
) {
  const reactName = useId();
  const groupName = name ?? reactName;

  const group = (
    <div
      ref={ref}
      role="radiogroup"
      data-test-id={dataTestId}
      className={cn(
        'flex gap-3',
        orientation === 'vertical' ? 'flex-col' : 'flex-row flex-wrap items-center gap-4',
        className,
      )}
    >
      {children}
    </div>
  );

  return (
    <RadioGroupContext.Provider value={{ name: groupName, value, defaultValue, onChange, disabled, size }}>
      {label ? (
        <div className="flex flex-col gap-1.5">
          <span className="text-p-std font-medium text-fg-default inline-flex">{label}</span>
          {group}
        </div>
      ) : (
        group
      )}
    </RadioGroupContext.Provider>
  );
});
```

Note this is deliberately additive-only: when `label` is omitted, the rendered output (and what `ref`/`dataTestId` point at) is byte-for-byte identical to today — no extra wrapper `<div>` appears unless a consumer actually passes `label`. The heading is a `<span>`, not a `<label htmlFor>`, since a `RadioGroup`'s label doesn't belong to one single input the way `Select`'s does.

Leave everything below the `RadioGroup` component (the `outerSize`/`innerSize` maps and the `Radio` component itself) untouched.

- [ ] **Step 3: Update `Radio.stories.tsx`**

Add this story after `DisabledGroup`:
```tsx
export const GroupWithLabel: Story = {
  name: 'Group with label',
  render: () => {
    function GroupDemo() {
      const [value, setValue] = useState('comfortable');
      return (
        <RadioGroup name="density-labeled" label="Density" value={value} onChange={setValue}>
          <Radio value="compact" label="Compact" />
          <Radio value="comfortable" label="Comfortable" />
          <Radio value="spacious" label="Spacious" />
        </RadioGroup>
      );
    }
    return <GroupDemo />;
  },
};
```

- [ ] **Step 4: Update `Radio.docs.mdx`**

In the `## RadioGroup` section, right after the closing ` ``` ` of the existing usage example (the one ending `</RadioGroup>;`), insert this new paragraph:
```md
Pass `label` to render a heading above the group. It's additive-only — a
`RadioGroup` without `label` renders exactly as before, with no extra
wrapper element.
```

- [ ] **Step 5: Verify**

Run: `npx tsc -p tsconfig.build.json --noEmit`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add src/components/Radio/Radio.types.ts src/components/Radio/Radio.tsx src/components/Radio/Radio.stories.tsx src/components/Radio/Radio.docs.mdx
git commit -m "Add label prop to RadioGroup"
```

---

## Task 4: Select — `required`, grouped options, `loading`, `searchable`

**Files:**
- Modify: `src/components/Select/Select.types.ts`
- Modify: `src/components/Select/Select.tsx`
- Modify: `src/components/Select/Select.stories.tsx`
- Modify: `src/components/Select/Select.docs.mdx`

**Interfaces:**
- Produces: `SelectOption` gains `group?: string`, `searchText?: string`. `SelectProps` gains `required?: boolean`, `loading?: boolean`, `searchable?: boolean`, `searchPlaceholder?: string`, `emptyText?: string`.
- Consumes: `mergeRefs` from `src/lib/mergeRefs.ts` (existing utility — combines the forwarded ref and an internal `buttonRef` into one callback ref).

- [ ] **Step 1: Update `Select.types.ts`**

Add to `SelectOption` (after `disabled?: boolean;`):
```ts
  /** Group heading this option belongs under. Options sharing a group MUST be
   *  contiguous in the `options` array — the heading is emitted whenever this
   *  value changes between consecutive options, so a non-contiguous group
   *  renders its heading more than once. */
  group?: string;
  /** Text used for `searchable` matching when `label` isn't a plain string. */
  searchText?: string;
```

Add to `SelectProps` (after `disabled?: boolean;`):
```ts
  /** Renders a red asterisk next to the label and sets `aria-required` on the trigger. */
  required?: boolean;
  /** Shows a spinner in place of the chevron and blocks opening the list. Does not set the native `disabled` attribute. */
  loading?: boolean;
  /** Renders a text filter pinned above the open list. */
  searchable?: boolean;
  /** Placeholder for the `searchable` filter input. Defaults to `'Search…'`. */
  searchPlaceholder?: string;
  /** Shown in place of the list when the filter matches nothing. Defaults to `'No results'`. */
  emptyText?: string;
```

- [ ] **Step 2: Replace `Select.tsx` in full**

```tsx
import { forwardRef, useEffect, useId, useMemo, useRef, useState, Fragment, type KeyboardEvent } from 'react';
import { ChevronDown, Check, Loader2, Search } from 'lucide-react';
import { cn } from '../../lib/cn';
import { mergeRefs } from '../../lib/mergeRefs';
import type { SelectOption, SelectProps, SelectSize } from './Select.types';

const sizeStyles: Record<SelectSize, string> = {
  lg: 'h-12 text-p-md px-3.5',
  md: 'h-10 text-p-std px-3',
  sm: 'h-8 text-p-sm px-2.5',
};

function firstEnabledIndex(list: SelectOption[]) {
  return list.findIndex((o) => !o.disabled);
}

export const Select = forwardRef<HTMLButtonElement, SelectProps>(function Select(
  {
    options,
    value,
    defaultValue,
    onChange,
    placeholder = 'Select…',
    label,
    labelAddons,
    helperText,
    errorText,
    error = false,
    required = false,
    loading = false,
    searchable = false,
    searchPlaceholder = 'Search…',
    emptyText = 'No results',
    size = 'md',
    disabled,
    id,
    className,
    wrapperClassName,
    dataTestId,
  },
  ref,
) {
  const reactId = useId();
  const triggerId = id ?? reactId;
  const listId = `${triggerId}-listbox`;
  const [open, setOpen] = useState(false);
  const [internal, setInternal] = useState<string | undefined>(defaultValue);
  const isControlled = value !== undefined;
  const selected = isControlled ? value : internal;
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [query, setQuery] = useState('');
  const hasError = error || !!errorText;

  const selectedOption = options.find((o) => o.value === selected);

  const visibleOptions = useMemo(() => {
    const q = searchable ? query.trim().toLowerCase() : '';
    if (!q) return options;
    return options.filter((o) => {
      const haystack = o.searchText ?? (typeof o.label === 'string' ? o.label : undefined) ?? o.value;
      return haystack.toLowerCase().includes(q);
    });
  }, [options, query, searchable]);

  const pick = (val: string) => {
    if (!isControlled) setInternal(val);
    onChange?.(val);
    setOpen(false);
    if (searchable) buttonRef.current?.focus();
  };

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  useEffect(() => {
    if (!open) {
      setActiveIndex(-1);
      setQuery('');
      return;
    }
    const selIdx = visibleOptions.findIndex((o) => o.value === selected);
    setActiveIndex(selIdx >= 0 && !visibleOptions[selIdx].disabled ? selIdx : firstEnabledIndex(visibleOptions));
  }, [open, selected, visibleOptions]);

  useEffect(() => {
    if (open && searchable) searchRef.current?.focus();
  }, [open, searchable]);

  useEffect(() => {
    if (loading) setOpen(false);
  }, [loading]);

  const moveActive = (dir: 1 | -1) => {
    const n = visibleOptions.length;
    if (n === 0) return;
    let next = activeIndex < 0 ? (dir === 1 ? -1 : 0) : activeIndex;
    for (let i = 0; i < n; i++) {
      next = (next + dir + n) % n;
      if (!visibleOptions[next]?.disabled) break;
    }
    setActiveIndex(next);
  };

  const commitActive = () => {
    const opt = visibleOptions[activeIndex];
    if (opt && !opt.disabled) pick(opt.value);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        return;
      }
      if (e.key === 'Enter' || e.key === ' ') {
        commitActive();
        return;
      }
      moveActive(e.key === 'ArrowDown' ? 1 : -1);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  const onSearchKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      moveActive(e.key === 'ArrowDown' ? 1 : -1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      commitActive();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setOpen(false);
      buttonRef.current?.focus();
    } else if (e.key === 'Tab') {
      setOpen(false);
    }
  };

  return (
    <div
      ref={containerRef}
      data-test-id={dataTestId}
      className={cn('flex flex-col gap-1.5 w-full relative', wrapperClassName)}
    >
      {(label || labelAddons) && (
        <div className="flex items-center gap-1.5">
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
          {labelAddons && <span className="inline-flex items-center gap-1">{labelAddons}</span>}
        </div>
      )}
      <button
        ref={mergeRefs(ref, buttonRef)}
        id={triggerId}
        type="button"
        disabled={disabled}
        onClick={() => {
          if (disabled || loading) return;
          setOpen((o) => !o);
        }}
        onKeyDown={onKeyDown}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-invalid={hasError || undefined}
        aria-required={required || undefined}
        aria-busy={loading || undefined}
        aria-disabled={loading || undefined}
        aria-controls={open ? listId : undefined}
        className={cn(
          'inline-flex items-center justify-between w-full rounded-lg border bg-bg-default transition-colors outline-none',
          'text-left',
          hasError ? 'border-red-600' : 'border-border-default',
          !disabled && !hasError && 'hover:border-border-strong',
          'focus-visible:ring-2',
          hasError
            ? 'focus-visible:ring-red-300 focus-visible:border-red-600'
            : 'focus-visible:ring-brand-300 focus-visible:border-brand-500',
          disabled && 'bg-bg-container border-border-default cursor-not-allowed text-fg-disabled',
          loading && 'cursor-wait',
          sizeStyles[size],
          className,
        )}
      >
        <span className={cn('truncate', !selectedOption && 'text-fg-tertiary')}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        {loading ? (
          <Loader2 className="h-4 w-4 ml-2 shrink-0 text-fg-secondary animate-spin" aria-hidden />
        ) : (
          <ChevronDown
            className={cn('h-4 w-4 ml-2 shrink-0 text-fg-secondary transition-transform', open && 'rotate-180')}
            aria-hidden
          />
        )}
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-full mt-1 rounded-lg border border-border-default bg-bg-default shadow-z4 z-50 overflow-hidden">
          {searchable && (
            <div className="flex items-center gap-2 px-3 py-2 border-b border-border-default">
              <Search className="h-3.5 w-3.5 shrink-0 text-fg-tertiary" aria-hidden />
              <input
                ref={searchRef}
                type="text"
                role="combobox"
                aria-expanded
                aria-controls={listId}
                aria-autocomplete="list"
                aria-activedescendant={activeIndex >= 0 ? `${listId}-opt-${activeIndex}` : undefined}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onSearchKeyDown}
                placeholder={searchPlaceholder}
                className="w-full bg-transparent outline-none text-p-std text-fg-default placeholder:text-fg-tertiary"
              />
            </div>
          )}
          {visibleOptions.length === 0 ? (
            <p className="px-3 py-6 text-center text-p-sm text-fg-secondary">{emptyText}</p>
          ) : (
            <ul id={listId} role="listbox" className="max-h-60 overflow-y-auto py-1">
              {visibleOptions.map((opt, i) => {
                const isSel = opt.value === selected;
                const isActive = i === activeIndex;
                const showGroupHeader = !!opt.group && opt.group !== visibleOptions[i - 1]?.group;
                return (
                  <Fragment key={opt.value}>
                    {showGroupHeader && (
                      <li
                        role="presentation"
                        className="px-3 pt-2 pb-1 text-label-sm font-medium uppercase tracking-wide text-fg-tertiary select-none"
                      >
                        {opt.group}
                      </li>
                    )}
                    <li
                      id={`${listId}-opt-${i}`}
                      role="option"
                      aria-selected={isSel}
                      aria-disabled={opt.disabled || undefined}
                      onMouseEnter={() => !opt.disabled && setActiveIndex(i)}
                      onClick={() => !opt.disabled && pick(opt.value)}
                      className={cn(
                        'flex items-center justify-between gap-2 px-3 py-2 text-p-std cursor-pointer select-none',
                        opt.disabled && 'opacity-50 cursor-not-allowed',
                        isActive && !opt.disabled && 'bg-bg-subtle',
                        isSel && 'font-medium',
                      )}
                    >
                      <span className="truncate">{opt.label}</span>
                      {isSel && <Check className="h-4 w-4 text-brand-500 shrink-0" />}
                    </li>
                  </Fragment>
                );
              })}
            </ul>
          )}
        </div>
      )}
      {errorText ? (
        <p className="text-p-sm text-red-700">{errorText}</p>
      ) : helperText ? (
        <p className="text-p-sm text-fg-secondary">{helperText}</p>
      ) : null}
    </div>
  );
});
```

Key behavior notes for review (already decided, not open questions):
- `loading` does **not** set the native `disabled` attribute (only `disabled` does) — a `Select` that starts loading while focused must not lose focus, which setting `disabled` on a focused element would force.
- `pick()` refocuses the trigger only when `searchable` is true — for a non-searchable `Select` (the vast majority of existing usages), clicking an option behaves exactly as it does today.
- `visibleOptions` composes filtering and grouping for free: a group heading only renders when at least one of its options survives the current filter, since headings are derived from the already-filtered array during the render pass.

- [ ] **Step 3: Update `Select.stories.tsx`**

Add `useEffect` to the React import (`import { useEffect, useState } from 'react';`).

Add to `meta.args` (after `error: false,`):
```ts
    required: false,
    loading: false,
    searchable: false,
```

Add this fixture right after `fruitOptions`:
```ts
const groupedFruitOptions: SelectOption[] = [
  { value: 'apple', label: 'Apple', group: 'Pome' },
  { value: 'pear', label: 'Pear', group: 'Pome' },
  { value: 'cherry', label: 'Cherry', group: 'Stone' },
  { value: 'peach', label: 'Peach', group: 'Stone' },
  { value: 'banana', label: 'Banana' },
];
```

Add these stories after `WithLabelAddons` and before `const SIZES = ['sm', 'md', 'lg'] as const;`:
```tsx
export const Required: Story = {
  args: { label: 'Favorite fruit', required: true },
};

export const Loading: Story = {
  args: { label: 'Favorite fruit', loading: true },
};

export const Grouped: Story = {
  args: { label: 'Favorite fruit', options: groupedFruitOptions },
};

export const Searchable: Story = {
  args: { label: 'Favorite fruit', searchable: true },
};

export const SearchableGroupedLoading: Story = {
  name: 'Searchable + grouped + loading (composed)',
  render: (args) => {
    function ComposedDemo() {
      const [loading, setLoading] = useState(true);
      useEffect(() => {
        const t = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(t);
      }, []);
      return <Select {...args} loading={loading} />;
    }
    return <ComposedDemo />;
  },
  args: {
    label: 'Favorite fruit',
    options: groupedFruitOptions,
    searchable: true,
  },
};
```

- [ ] **Step 4: Update `Select.docs.mdx`**

Insert these four new sections right after `## Validation state` and before `## Label addons`:
```md
## Required

`required` renders a red asterisk next to the label and sets `aria-required`
on the trigger.

## Loading

`loading` shows a spinner in place of the chevron and blocks opening the
list — it does not set the native `disabled` attribute, so a `Select` that
starts loading while focused doesn't lose focus.

## Grouped options

Give any `SelectOption` a `group: string` to render it under a heading.
Options sharing a group must be contiguous in the `options` array — the
heading is emitted whenever `group` changes between consecutive options, so
a non-contiguous group renders its heading more than once.

## Searchable

`searchable` adds a text filter pinned above the option list. Matching
checks, in order, `option.searchText`, then `option.label` if it's a plain
string, then `option.value` — so options with a rich (non-string) `label`
still narrow via their `value` unless you supply `searchText` for a better
match. `searchPlaceholder` and `emptyText` are overridable.
```

- [ ] **Step 5: Verify**

Run: `npx tsc -p tsconfig.build.json --noEmit`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add src/components/Select/Select.types.ts src/components/Select/Select.tsx src/components/Select/Select.stories.tsx src/components/Select/Select.docs.mdx
git commit -m "Add required, grouped options, loading, and searchable to Select"
```

---

## Task 5: FormField — extend the render prop with `setFieldValue` and `isValid`

**Files:**
- Modify: `src/components/FormField/FormField.types.ts`
- Modify: `src/components/FormField/FormField.tsx`
- Modify: `src/components/FormField/FormField.stories.tsx`
- Modify: `src/components/FormField/FormField.docs.mdx`

**Interfaces:**
- Consumes: `SetValueConfig` — react-hook-form's own exported type for `setValue`'s options parameter (`{ shouldValidate?, shouldDirty?, shouldTouch? }`), imported from `'react-hook-form'`. `context.setValue` already exists on `FormContextValue` (`src/lib/FormContext.ts`) — no change needed there.
- Produces: `FormFieldRenderProps` gains `setFieldValue: (value: unknown, options?: SetValueConfig) => void` and `isValid: boolean`.

- [ ] **Step 1: Replace `FormField.types.ts` in full**

```ts
import type { HTMLAttributes, ReactElement } from 'react';
import type { RefCallBack, SetValueConfig } from 'react-hook-form';
import type { BaseProps } from '../../types';

/** Deliberately untyped `value`/`onChange`: this render prop feeds whichever
 *  input the consumer wires up (native `value`, Select's `string`, Checkbox's
 *  `boolean`, ...). */
export interface FormFieldRenderProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (...event: any[]) => void;
  onBlur: () => void;
  ref: RefCallBack;
  error: boolean;
  errorText?: string;
  dataTestId?: string;
  /** Imperatively set this field's value, pre-bound to this FormField's
   *  `name` — for a component whose own change contract doesn't fit RHF's
   *  field bindings. Defaults `shouldValidate`/`shouldDirty`/`shouldTouch`
   *  to `true`, overridable via `options`. */
  setFieldValue: (value: unknown, options?: SetValueConfig) => void;
  /** True once the field has been touched, changed from its default value, and currently passes validation. */
  isValid: boolean;
}

export interface FormFieldProps extends Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue'>, BaseProps {
  name: string;
  defaultValue?: unknown;
  /** Render prop — receives field bindings plus `error`/`errorText`, e.g. `(p) => <Input {...p} label="Email" />`. */
  render: (props: FormFieldRenderProps) => ReactElement;
}
```

- [ ] **Step 2: Replace `FormField.tsx` in full**

```tsx
import { forwardRef, useContext } from 'react';
import { Controller } from 'react-hook-form';
import { cn } from '../../lib/cn';
import { FormContext } from '../../lib/FormContext';
import type { FormFieldProps } from './FormField.types';

export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(function FormField(
  { name, defaultValue, render, className, dataTestId, ...rest },
  ref,
) {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('FormField must be rendered inside a FormContainer.');
  }

  return (
    <div ref={ref} className={cn(className)} data-test-id={dataTestId} {...rest}>
      <Controller
        control={context.control}
        name={name}
        defaultValue={defaultValue}
        render={({ field, fieldState }) =>
          render({
            ...field,
            error: !!fieldState.error,
            errorText: fieldState.error?.message,
            dataTestId,
            setFieldValue: (value, options) =>
              context.setValue(name, value, {
                shouldValidate: true,
                shouldDirty: true,
                shouldTouch: true,
                ...options,
              }),
            isValid: fieldState.isTouched && fieldState.isDirty && !fieldState.invalid,
          })
        }
      />
    </div>
  );
});
```

Note `setFieldValue` takes `(value, options)`, not `(name, value, options)` — it's pre-bound to this `FormField`'s own `name`, since exposing a separate `name` parameter here would just be a way to accidentally target the wrong field.

- [ ] **Step 3: Update `FormField.stories.tsx`**

Add this story at the end of the file:
```tsx
export const CustomFieldWithSetFieldValue: Story = {
  name: 'Custom field using setFieldValue',
  render: () => (
    <div className="flex w-96 flex-col gap-4">
      <FormContainer
        validationSchema={schema}
        defaultValues={{ firstName: '', lastName: '' }}
        onSubmit={() => {}}
      >
        <FormField
          name="firstName"
          render={({ value, setFieldValue, isValid, errorText }) => (
            <div className="flex flex-col gap-1">
              <input
                className="rounded-lg border border-border-default px-3 py-2"
                value={value ?? ''}
                onChange={(e) => setFieldValue(e.target.value)}
              />
              {isValid && <span className="text-p-sm text-green-700">Looks good</span>}
              {errorText && <span className="text-p-sm text-red-700">{errorText}</span>}
            </div>
          )}
        />
      </FormContainer>
    </div>
  ),
};
```

- [ ] **Step 4: Update `FormField.docs.mdx`**

Replace this paragraph in the `## Render prop` section:
```md
`render` receives `name`, `value`, `onChange`, `onBlur`, `ref` (react-hook-form's
`Controller` field bindings), plus `error: boolean` and `errorText?: string`
derived from that field's validation state. Every input in this library
already renders its own error text via an `error`/`errorText` pair
(`Input`, `TextArea`, `Select`, ...), so `FormField` doesn't render a
separate error message of its own — just spread the render props onto
whichever input you're wiring up:
```
with:
```md
`render` receives `name`, `value`, `onChange`, `onBlur`, `ref` (react-hook-form's
`Controller` field bindings), `error: boolean`/`errorText?: string` derived
from that field's validation state, plus `setFieldValue(value, options?)` —
pre-bound to this field's `name`, for a component whose own change contract
doesn't fit `onChange`/`onBlur` directly — and `isValid: boolean` (touched,
dirty, and currently passing validation). Every input in this library
already renders its own error text via an `error`/`errorText` pair
(`Input`, `TextArea`, `Select`, ...), so `FormField` doesn't render a
separate error message of its own — just spread the render props onto
whichever input you're wiring up:
```

- [ ] **Step 5: Verify**

Run: `npx tsc -p tsconfig.build.json --noEmit`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add src/components/FormField/FormField.types.ts src/components/FormField/FormField.tsx src/components/FormField/FormField.stories.tsx src/components/FormField/FormField.docs.mdx
git commit -m "Extend FormField render prop with setFieldValue and isValid"
```

---

## Task 6: Full verification

**Files:** none created or modified — this task only runs verification commands across everything added in Tasks 1-5.

- [ ] **Step 1: Full typecheck**

Run: `npx tsc -p tsconfig.build.json --noEmit`
Expected: no errors.

- [ ] **Step 2: Full library build**

Run: `npm run build`
Expected: completes with no errors.

- [ ] **Step 3: Lint**

Run: `npm run lint`
Expected: no errors on any of the 5 components' files.

- [ ] **Step 4: Storybook build**

Run: `npm run build:storybook`
Expected: completes with no errors; confirms every new/modified story renders without a build-time crash.

- [ ] **Step 5: No commit needed** — this task is verification-only.

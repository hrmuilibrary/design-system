# Avatar: editable/upload-overlay affordance, and a '2xs' size step — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add `editable?: boolean` to `AvatarProps` (renders a small corner edit button, scaled to `size`), `onImageChange?: (file: File) => void` (fires with the picked file; `Avatar` shows an immediate local preview and revokes its own object URL on replacement/unmount), and `accept?: string`/`maxSizeMB?: number`/`onReject?: (rejection: UploadRejection) => void` (validated via a helper extracted from `Upload`'s existing validation logic, not a second implementation). Separately, widen `AvatarSize` with a `'2xs'` step below `'xs'`, symmetric with the existing `'2xl'` step above `'xl'`.

**Architecture:** `Upload`'s per-file accept/size validation (currently the `matchesAccept`/type-check + size-check portion of its `processFiles` closure) is extracted into a new standalone, exported function — `validateSingleFile(file, { accept, maxSizeMB }): UploadRejectionReason | null` — that both `Upload` (refactored to call it) and `Avatar` (calling it directly) use. This is a pure logic extraction, not composition: `Avatar` renders its own corner button and hidden `<input type="file">` rather than embedding an actual `<Upload>` element, since `Upload`'s existing `'button'`/`'icon'` trigger modes render a full `Button`, not an absolutely-positioned corner badge, and reusing that visual wouldn't fit. `Avatar`'s local image-preview state takes precedence over its `src` prop until `src` itself changes to a new value, at which point the new `src` wins and the local preview is dropped — when `editable` is unset, none of this new state ever activates, so uncontrolled `src` consumers are provably unaffected. When both `status` and `editable` are set, the edit button keeps the bottom-right corner (it's the interactive, explicitly-opted-into affordance) and the status dot moves to bottom-left.

**Tech Stack:** React 19, TypeScript 5.9 (strict), no test runner in this repo — verification is `tsc --noEmit`, ESLint, the Vite lib build, and the Storybook build (see Global Constraints).

## Global Constraints

- Follow `/Users/manuktagushyan/Desktop/Projects/ps_tools/CLAUDE.md` exactly. **After every task, run, in order, and confirm each is clean before moving on:**
  1. `npx tsc -p tsconfig.build.json --noEmit`
  2. `npm run lint` — run this from *inside this plan's isolated worktree*. On top of current `main`, there are two known pre-existing, unrelated failures — `src/hooks/useFormProps.ts` and `src/hooks/useOnOutsideClick.ts` — confirm zero NEW errors/warnings beyond those two files, and do not touch either file.
  3. `npm run build`
  4. `npm run build:storybook`
- This repo has **no unit test runner**. "Verify it fails / verify it passes" means "the `tsc`/`build` step surfaces the expected type error" and "the `tsc`/`build`/`lint`/`build:storybook` steps are clean," respectively.
- Task 1 is a pure refactor of `Upload.tsx` — it must not change `Upload`'s observable behavior at all. Every existing `Upload` story must render identically before and after.
- `editable` unset must leave `Avatar` visually/behaviorally identical to its current rendering — no new DOM nodes, no new state activation.
- `Avatar` does NOT get a `multiple` option — it always picks exactly one file (`onImageChange` takes a single `File`, not an array).

---

## File Structure

| File | Change |
|---|---|
| `src/components/Upload/Upload.types.ts` | Add `FileValidationOptions` type |
| `src/components/Upload/Upload.tsx` | Extract `validateSingleFile()`, refactor `processFiles` to use it |
| `src/components/Upload/index.ts` | Export `validateSingleFile` and `FileValidationOptions` |
| `src/components/Avatar/Avatar.types.ts` | Add `'2xs'` to `AvatarSize`; add `editable`/`onImageChange`/`accept`/`maxSizeMB`/`onReject` to `AvatarProps` |
| `src/components/Avatar/Avatar.tsx` | Add `'2xs'` entries to `sizeStyles`/`statusSize`/`overlap`; implement the edit button, hidden input, preview state, object-URL lifecycle, and the status-dot repositioning |
| `src/components/Avatar/Avatar.stories.tsx` | Add `'2xs'` to the size sweep/`argTypes`; add editable-at-several-sizes and rejected-oversized-file stories |
| `src/components/Avatar/Avatar.docs.mdx` | Document `editable`/the new size step (check current content first — file wasn't part of this plan's research; read it before editing) |

---

### Task 1: Extract `validateSingleFile` from `Upload`

**Files:**
- Modify: `src/components/Upload/Upload.types.ts`
- Modify: `src/components/Upload/Upload.tsx`
- Modify: `src/components/Upload/index.ts`

**Interfaces:**
- Produces: `FileValidationOptions` (`{ accept?: string; maxSizeMB?: number }`), `validateSingleFile(file: File, options: FileValidationOptions): UploadRejectionReason | null` — both exported from the package root via `src/components/Upload/index.ts`, consumed by Task 3's `Avatar` implementation.

- [ ] **Step 1: Add the options type**

`src/components/Upload/Upload.types.ts`, add near `UploadRejection`/`UploadRejectionReason`:
```ts
export interface FileValidationOptions {
  /** Forwarded to `matchesAccept` — same semantics as `UploadProps.accept`. */
  accept?: string;
  /** Same semantics as `UploadProps.maxSizeMB`. */
  maxSizeMB?: number;
}
```

- [ ] **Step 2: Extract and export the validation function**

`src/components/Upload/Upload.tsx`, add directly after `matchesAccept` (before the `Upload` component):
```ts
export function validateSingleFile(
  file: File,
  { accept, maxSizeMB }: FileValidationOptions,
): UploadRejectionReason | null {
  if (accept && !matchesAccept(file, accept)) return 'type';
  if (maxSizeMB !== undefined && file.size > maxSizeMB * 1024 * 1024) return 'size';
  return null;
}
```
Add `FileValidationOptions` to the existing type-only import from `./Upload.types` at the top of the file.

- [ ] **Step 3: Refactor `processFiles` to call it — no behavior change**

`processFiles`'s per-file loop currently has, in order: duplicate check, then:
```ts
      if (accept && !matchesAccept(file, accept)) {
        rejections.push({ file, reason: 'type' });
        continue;
      }
      if (maxSizeMB !== undefined && file.size > maxSizeMB * 1024 * 1024) {
        rejections.push({ file, reason: 'size' });
        continue;
      }
```
Replace those two `if` blocks with:
```ts
      const rejectionReason = validateSingleFile(file, { accept, maxSizeMB });
      if (rejectionReason) {
        rejections.push({ file, reason: rejectionReason });
        continue;
      }
```
This must produce byte-identical behavior: the duplicate check still runs first (unchanged, above this block), then this single check replaces the two separate `type`/`size` checks in the same order (`accept` checked before `maxSizeMB`, matching `validateSingleFile`'s internal order), then `maxFiles` (unchanged, below this block).

- [ ] **Step 4: Export from the barrel**

`src/components/Upload/index.ts`, add `validateSingleFile` to the value export line and `FileValidationOptions` to the type export line:
```ts
export { Upload, UploadItem, validateSingleFile } from './Upload';
export type {
  FileValidationOptions,
  UploadItemProps,
  UploadItemStatus,
  UploadMode,
  UploadProps,
  UploadRejection,
  UploadRejectionReason,
} from './Upload.types';
```

- [ ] **Step 5: Verify no behavior change**

Run, in order:
```bash
npx tsc -p tsconfig.build.json --noEmit
npm run lint
npm run build
npm run build:storybook
```
Expected: all four clean.

Then manually confirm no regression: `npm run dev`, open Upload's `EnforcedValidation` story (the one exercising `accept`/`maxSizeMB`/rejections), pick a file that should be rejected for size and one for type, confirm both still show up in the rejection list exactly as before. Stop the dev server once confirmed.

- [ ] **Step 6: Commit**

```bash
git add src/components/Upload/Upload.types.ts src/components/Upload/Upload.tsx src/components/Upload/index.ts
git commit -m "refactor(Upload): extract validateSingleFile, export for reuse"
```

---

### Task 2: `AvatarSize`'s `'2xs'` step

**Files:**
- Modify: `src/components/Avatar/Avatar.types.ts`
- Modify: `src/components/Avatar/Avatar.tsx`
- Modify: `src/components/Avatar/Avatar.stories.tsx`

**Interfaces:**
- Produces: `AvatarSize` widened to include `'2xs'`.

- [ ] **Step 1: Widen the type**

`src/components/Avatar/Avatar.types.ts` line 4, change:
```ts
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
```
to:
```ts
export type AvatarSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
```

- [ ] **Step 2: Type-check to confirm the expected downstream errors**

Run: `npx tsc -p tsconfig.build.json --noEmit`
Expected: FAIL — the three `Record<AvatarSize, string>` lookup tables (`sizeStyles`, `statusSize`, `overlap`) in `Avatar.tsx` are missing the new `'2xs'` key, which TypeScript's `Record<K, V>` requires exhaustively.

- [ ] **Step 3: Add the `'2xs'` entry to each lookup table**

`sizeStyles` (existing `xs: 'h-6 w-6 text-p-xs',` is the smallest current entry), add above it:
```ts
  '2xs': 'h-5 w-5 text-p-xs',
```

`statusSize` (existing smallest is `xs: 'h-1.5 w-1.5',`), add above it:
```ts
  '2xs': 'h-1 w-1',
```

`overlap` (existing smallest is `xs: '-ml-1.5',`), add above it:
```ts
  '2xs': '-ml-1',
```

(Object key order doesn't affect behavior, but placing `'2xs'` first in each table, matching its position in the type union, keeps the tables readable.)

- [ ] **Step 4: Update the stories' size sweeps**

`Avatar.stories.tsx`: the meta's `argTypes.size.options` array and the local `SIZES` const (used by `AllSizes`/`GroupSizes`) both currently list `['xs', 'sm', 'md', 'lg', 'xl', '2xl']` — these are two separate literal arrays (confirmed via research — there's no single shared source of truth in this file). Add `'2xs'` to the front of both:
```ts
const SIZES: AvatarSize[] = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'];
```
and the `argTypes.size.options` array the same way. Search the file for `'2xl'` to find both exact locations — do not assume the array literal syntax matches this snippet exactly.

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
git add src/components/Avatar/Avatar.types.ts src/components/Avatar/Avatar.tsx src/components/Avatar/Avatar.stories.tsx
git commit -m "feat(Avatar): add 2xs size step"
```

---

### Task 3: `editable` / `onImageChange` / validation props

**Files:**
- Modify: `src/components/Avatar/Avatar.types.ts`
- Modify: `src/components/Avatar/Avatar.tsx`

**Interfaces:**
- Consumes: `validateSingleFile`/`FileValidationOptions` from Task 1 (`import { validateSingleFile } from '../Upload';` — or from `'../Upload/Upload.types'` for the type-only import; check the barrel's export shape from Task 1 and use whichever import path matches how other cross-component imports in this repo are written, e.g. `PersonCard`'s `import { Avatar, type AvatarSize } from '../Avatar';`), `UploadRejection`/`UploadRejectionReason` (already exported from `Upload`).
- Produces: `AvatarProps.editable?: boolean`, `.onImageChange?: (file: File) => void`, `.accept?: string`, `.maxSizeMB?: number`, `.onReject?: (rejection: UploadRejection) => void` (singular — note this differs from `Upload`'s own plural `onReject?: (rejections: UploadRejection[]) => void`, since `Avatar` only ever picks one file at a time).

- [ ] **Step 1: Add the types**

`src/components/Avatar/Avatar.types.ts`, add the import and new fields:
```ts
import type { UploadRejection } from '../Upload';
```
(add alongside the existing `import type { HTMLAttributes, ReactNode } from 'react';` / `import type { BaseProps } from '../../types';` lines)

Add to `AvatarProps`:
```ts
  /** Renders an edit affordance in the bottom-right corner, scaled to `size`, that opens a file picker. */
  editable?: boolean;
  /** Called with the picked file. `Avatar` shows an immediate local preview and revokes its own object URL on replacement/unmount. */
  onImageChange?: (file: File) => void;
  /** Forwarded to the internal picker. Same semantics as `UploadProps.accept`. */
  accept?: string;
  /** Forwarded to the internal picker. Same semantics as `UploadProps.maxSizeMB`. */
  maxSizeMB?: number;
  /** Called when the picked file fails `accept`/`maxSizeMB` validation. */
  onReject?: (rejection: UploadRejection) => void;
```

- [ ] **Step 2: Type-check**

Run: `npx tsc -p tsconfig.build.json --noEmit`
Expected: clean (additive optional fields; nothing reads them yet).

- [ ] **Step 3: Implement the edit button, hidden input, and preview lifecycle**

Add imports at the top of `Avatar.tsx`: `useEffect`, `useRef` from `'react'`; `Pencil` from `'lucide-react'` (alongside the existing `User` import); `validateSingleFile` from `'../Upload'`.

Add a new lookup table alongside `sizeStyles`/`statusSize`/`overlap` (the edit button's own diameter per size — the icon inside it is sized relatively, via `h-1/2 w-1/2`, so no second table is needed for the icon):
```ts
const editButtonSize: Record<AvatarSize, string> = {
  '2xs': 'h-3 w-3',
  xs: 'h-4 w-4',
  sm: 'h-5 w-5',
  md: 'h-6 w-6',
  lg: 'h-7 w-7',
  xl: 'h-8 w-8',
  '2xl': 'h-9 w-9',
};
```

Destructure the new props in `Avatar`'s parameter list, alongside the existing ones:
```ts
  {
    src,
    alt,
    name,
    size = 'md',
    status,
    shape = 'circle',
    fallback,
    editable,
    onImageChange,
    accept,
    maxSizeMB,
    onReject,
    className,
    dataTestId,
    ...rest
  },
```

Inside the component body, add the preview state and its lifecycle (place near the existing `const [errored, setErrored] = useState(false);`):
```ts
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const previewUrlRef = useRef<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      if (previewUrlRef.current) URL.revokeObjectURL(previewUrlRef.current);
    };
  }, []);

  const handleFileChange = (files: FileList | null) => {
    const file = files?.[0];
    if (!file) return;
    const rejectionReason = validateSingleFile(file, { accept, maxSizeMB });
    if (rejectionReason) {
      onReject?.({ file, reason: rejectionReason });
      return;
    }
    if (previewUrlRef.current) URL.revokeObjectURL(previewUrlRef.current);
    const url = URL.createObjectURL(file);
    previewUrlRef.current = url;
    setPreviewUrl(url);
    onImageChange?.(file);
  };
```

Update the image-source resolution — currently:
```ts
  const showImage = !!src && !errored;
```
to:
```ts
  const effectiveSrc = previewUrl ?? src;
  const showImage = !!effectiveSrc && !errored;
```
and update the `<img src={src} ...>` inside the render to `<img src={effectiveSrc} ...>` (the `alt`/`onError`/`className` on that element stay exactly as they are).

- [ ] **Step 4: Render the edit button and hidden input; reposition the status dot when both are present**

The status dot currently renders as:
```tsx
      {status && (
        <span
          aria-label={status}
          className={cn(
            'absolute right-0 bottom-0 rounded-full ring-2 ring-white',
            statusSize[size],
            statusColor[status],
          )}
        />
      )}
```
Change its position to move to bottom-left specifically when `editable` is also set — replace `right-0 bottom-0` with a conditional:
```tsx
      {status && (
        <span
          aria-label={status}
          className={cn(
            'absolute bottom-0 rounded-full ring-2 ring-white',
            editable ? 'left-0' : 'right-0',
            statusSize[size],
            statusColor[status],
          )}
        />
      )}
```

Add the edit button as a new sibling after the status dot (still inside the outer `<span>`):
```tsx
      {editable && (
        <>
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            aria-label="Change avatar image"
            className={cn(
              'absolute right-0 bottom-0 inline-flex items-center justify-center rounded-full ring-2 ring-white bg-brand-500 text-white hover:bg-brand-600 transition-colors',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-1',
              editButtonSize[size],
            )}
          >
            <Pencil className="h-1/2 w-1/2" />
          </button>
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            onChange={(event) => {
              handleFileChange(event.target.files);
              event.target.value = '';
            }}
            className="sr-only"
          />
        </>
      )}
```
Read the current full render return before editing to place this correctly as a sibling of the status-dot span and the inner image/initials span, inside the same outer `<span ref={ref} ...>` — not nested inside the image span.

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
git add src/components/Avatar/Avatar.types.ts src/components/Avatar/Avatar.tsx
git commit -m "feat(Avatar): add editable upload-overlay affordance"
```

---

### Task 4: Stories + docs + verification sweep

**Files:**
- Modify: `src/components/Avatar/Avatar.stories.tsx`
- Modify: `src/components/Avatar/Avatar.docs.mdx`

**Interfaces:** none new.

- [ ] **Step 1: Add an editable-at-several-sizes story**

```tsx
export const Editable: Story = {
  name: 'Editable (upload overlay)',
  render: () => (
    <div className="flex items-end gap-4">
      {(['xs', 'md', '2xl'] as const).map((s) => (
        <Avatar
          key={s}
          size={s}
          name="Ada Lovelace"
          editable
          onImageChange={(file) => window.alert(`Picked: ${file.name}`)}
        />
      ))}
    </div>
  ),
};
```

- [ ] **Step 2: Add a rejected-oversized-file story**

```tsx
export const EditableRejected: Story = {
  name: 'Editable — oversized file rejected',
  render: () => {
    function EditableWithRejection() {
      const [rejection, setRejection] = useState<string | null>(null);
      return (
        <div className="flex flex-col items-start gap-2">
          <Avatar
            name="Ada Lovelace"
            editable
            maxSizeMB={1}
            onReject={(r) => setRejection(`Rejected "${r.file.name}" (${r.reason})`)}
          />
          {rejection && <p className="text-p-sm text-red-700">{rejection}</p>}
        </div>
      );
    }
    return <EditableWithRejection />;
  },
};
```
(Match this file's existing local-state story pattern — check e.g. `AllStatuses`/`AllSizes` for the exact `render`/inner-function convention already used, and adjust if this snippet's shape doesn't match.)

Add a story-level note near this story (or in the docs page) about how to actually exercise the rejection in Storybook — since it requires the user to manually pick a file over `maxSizeMB={1}` (1 MB) through the real OS file picker, there's no way to script a guaranteed-oversized file selection in a static story the way the plan's other components could construct synthetic `File` objects — this one is manually interactive.

- [ ] **Step 3: Update the docs page**

Read `Avatar.docs.mdx` in full first (it wasn't part of this plan's research pass). Add a section documenting `editable`/`onImageChange`/`accept`/`maxSizeMB`/`onReject` (mention the validation is shared with `Upload`'s), and a one-line mention of the `'2xs'` size addition if the page enumerates sizes anywhere. Match the file's existing prose style/length.

- [ ] **Step 4: Verify**

Run, in order:
```bash
npx tsc -p tsconfig.build.json --noEmit
npm run lint
npm run build
npm run build:storybook
```
Expected: all four clean.

- [ ] **Step 5: Manual Storybook smoke check**

```bash
npm run dev
```
Open Storybook and check:
- `Editable`: confirm the pencil-icon button renders in the bottom-right corner at all three sizes, scaled proportionally, with a visible focus ring when tabbed to. Click one, pick a small image file, confirm the avatar's image updates immediately to the picked file (local preview) and the `onImageChange` alert fires with the right file name.
- `EditableRejected`: pick a file larger than 1 MB, confirm the rejection message renders and the avatar's image does NOT change.
- Re-check `WithStatus`/`AllStatuses` (pre-existing, unmodified) for no regression, and additionally verify manually that an `Avatar` with BOTH `status` and `editable` set shows the status dot on the bottom-left and the edit button on the bottom-right (there's no story for this combination yet — check it ad hoc in the browser via Storybook's controls panel, toggling both props on one of the existing stories, rather than adding a permanent story for a manual one-off check).
Confirm zero console errors throughout. Stop the dev server (`Ctrl+C`) once confirmed.

- [ ] **Step 6: Commit**

```bash
git add src/components/Avatar/Avatar.stories.tsx src/components/Avatar/Avatar.docs.mdx
git commit -m "docs(Avatar): add editable/rejection stories and docs"
```

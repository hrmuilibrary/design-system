# TableV2: bounded scroll height for `stickyHeader`

## Context

`TableV2` already implements column pinning (`enablePinning`, per-header
pin/unpin menu, `getPinnedStyles()` sticky offsets) and a sticky header
(`stickyHeader` prop, `sticky top-0 z-10` on `<thead>`) on top of
`@tanstack/react-table`, which has first-class support for column pinning
state and offers no header-stickiness API of its own (that's plain CSS,
which TableV2 already applies).

The gap: `position: sticky` only has an effect inside a bounded, scrollable
ancestor. Today the outer scroll container
(`src/components/TableV2/TableV2.tsx`, the `<div ref={scrollContainerRef}
className="w-full overflow-auto">` wrapper) only receives `style={{
maxHeight: maxBodyHeight }}` when `enableVirtualization` is on. A consumer
using `stickyHeader` alone (no virtualization) gets no bounded height, so
the header never actually becomes stuck — every consumer would have to wrap
`TableV2` in their own `maxHeight`/`overflow-y: auto` div to make
`stickyHeader` do anything.

## Change

Reuse the existing `maxBodyHeight` prop (default `480`) rather than adding
a new prop — it already means "bound the scroll container's height" for
virtualization; extending its trigger condition to include `stickyHeader`
keeps one prop, one meaning.

1. **`TableV2.tsx`** — change the scroll container's inline `style` from:
   ```tsx
   style={enableVirtualization ? { maxHeight: maxBodyHeight } : undefined}
   ```
   to apply whenever either `enableVirtualization` or `stickyHeader` is
   true, using the same `maxBodyHeight` value.

2. **`TableV2.types.ts`** — update the `maxBodyHeight` doc comment: it
   bounds the scroll container for both `enableVirtualization` and
   `stickyHeader`, not virtualization alone.

3. **`TableV2.stories.tsx`** — add a `StickyHeader` story: a non-virtualized
   table (`manyEmployees`, no `enableVirtualization`) with `stickyHeader`
   set and enough rows to require scrolling, so the header-stuck behavior
   is visible without virtualization in the mix.

## Explicitly out of scope

- The pinned-column edge shadow/boundary treatment (visual indicator of
  where a pinned column's sticky region ends) — not part of this change.
- Any change to column pinning behavior itself — it already works,
  including composing with `stickyHeader`'s z-index stacking (the `<thead>`
  establishes a stacking context via `z-10`, so pinned header cells at
  `z-index: 1` already render above scrolled tbody content correctly).
- No new props, no renames.

## Verification

- `tsc -p tsconfig.build.json --noEmit`
- `npm run build`
- `npm run lint`
- `npm run build:storybook`
- Manually check the new `StickyHeader` story: header stays visible while
  scrolling the body, at the default 480px bound and unaffected when
  `enableVirtualization` is also combined (existing `Virtualized` story
  unaffected).

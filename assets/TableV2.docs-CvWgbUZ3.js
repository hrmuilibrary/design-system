import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-CdhV6HH2.js";import{c as n,l as r,o as i,s as a,x as o}from"./blocks-BIyE9laS.js";import{t as s}from"./mdx-react-shim-BkCrewC-.js";import{n as c,t as l}from"./TableV2.stories-kaOWBQog.js";function u(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...o(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{of:l}),`
`,(0,f.jsx)(t.h1,{id:`tablev2`,children:`TableV2`}),`
`,(0,f.jsxs)(t.p,{children:[`An enterprise data-grid built on `,(0,f.jsx)(t.a,{href:`https://tanstack.com/table/v8`,rel:`nofollow`,children:`TanStack Table v8`}),`
and this design system's own primitives (`,(0,f.jsx)(t.code,{children:`Checkbox`}),`, `,(0,f.jsx)(t.code,{children:`DropdownMenu`}),`, `,(0,f.jsx)(t.code,{children:`Input`}),`,
`,(0,f.jsx)(t.code,{children:`Select`}),`, `,(0,f.jsx)(t.code,{children:`Pagination`}),`, `,(0,f.jsx)(t.code,{children:`Skeleton`}),`, `,(0,f.jsx)(t.code,{children:`Empty`}),`, `,(0,f.jsx)(t.code,{children:`InlineAlert`}),`) — not shadcn/ui,
since that library isn't part of this stack. Every feature (sorting,
filtering, selection, visibility, drag-and-drop column ordering, pinning,
resizing, pagination, virtualization) is opt-in via a boolean prop, and every
piece of feature state can be either uncontrolled (TableV2 manages it
internally) or controlled (you own the state — local `,(0,f.jsx)(t.code,{children:`useState`}),`, React
Query, Redux, whatever).`]}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`Table`}),`/`,(0,f.jsx)(t.code,{children:`DataTable`}),` (in `,(0,f.jsx)(t.code,{children:`src/components/Table`}),`) remain unchanged and
untouched by this component — reach for `,(0,f.jsx)(t.code,{children:`TableV2`}),` when you need TanStack's
feature set; reach for the original `,(0,f.jsx)(t.code,{children:`Table`}),` primitives for hand-authored
markup or a simple columns/rows table.`]}),`
`,(0,f.jsx)(a,{}),`
`,(0,f.jsx)(t.h2,{id:`controlled-vs-uncontrolled-state`,children:`Controlled vs. uncontrolled state`}),`
`,(0,f.jsxs)(t.p,{children:[`Every stateful feature follows the same pair of props: a value and an
`,(0,f.jsx)(t.code,{children:`onXChange`}),` callback, mirroring TanStack Table's own state API one-to-one.`]}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`Omit both`}),` — TableV2 manages that slice of state internally (fully
uncontrolled). This is enough for `,(0,f.jsx)(t.code,{children:`enableSorting`}),`, `,(0,f.jsx)(t.code,{children:`enableRowSelection`}),`,
etc. in the common case.`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`Pass both`}),` — you own the state. TableV2 reads your value and calls your
setter; nothing is stored internally. This is how it plugs into external
state without any special-casing:`]}),`
`]}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-tsx`,children:`// Local state
const [sorting, setSorting] = useState<SortingState>([]);
<TableV2
  data={data}
  columns={columns}
  enableSorting
  sorting={sorting}
  onSortingChange={setSorting}
/>;

// React Query-backed server pagination
const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 20 });
const { data, isLoading } = useQuery(['users', pagination], () => fetchUsers(pagination));
<TableV2
  data={data?.rows ?? []}
  columns={columns}
  loading={isLoading}
  enablePagination
  manualPagination
  pageCount={data?.pageCount}
  pagination={pagination}
  onPaginationChange={setPagination}
/>;
`})}),`
`,(0,f.jsxs)(t.p,{children:[`The same pattern covers `,(0,f.jsx)(t.code,{children:`columnFilters`}),`/`,(0,f.jsx)(t.code,{children:`onColumnFiltersChange`}),`,
`,(0,f.jsx)(t.code,{children:`globalFilter`}),`/`,(0,f.jsx)(t.code,{children:`onGlobalFilterChange`}),`, `,(0,f.jsx)(t.code,{children:`rowSelection`}),`/`,(0,f.jsx)(t.code,{children:`onRowSelectionChange`}),`,
`,(0,f.jsx)(t.code,{children:`columnVisibility`}),`/`,(0,f.jsx)(t.code,{children:`onColumnVisibilityChange`}),`, `,(0,f.jsx)(t.code,{children:`columnOrder`}),`/`,(0,f.jsx)(t.code,{children:`onColumnOrderChange`}),`,
and `,(0,f.jsx)(t.code,{children:`columnPinning`}),`/`,(0,f.jsx)(t.code,{children:`onColumnPinningChange`}),` — so a Redux-backed table, for
instance, just dispatches from the `,(0,f.jsx)(t.code,{children:`onXChange`}),` and selects the value back in.`]}),`
`,(0,f.jsx)(t.h2,{id:`feature-flags`,children:`Feature flags`}),`
`,(0,f.jsxs)(t.p,{children:[`| Prop                                             | Feature                                                                             |
| ------------------------------------------------ | ----------------------------------------------------------------------------------- |
| `,(0,f.jsx)(t.code,{children:`enableSorting`}),` / `,(0,f.jsx)(t.code,{children:`enableMultiSort`}),`              | Column sorting, shift-click for multi-sort                                          |
| `,(0,f.jsx)(t.code,{children:`enableFiltering`}),`                                | Per-column filter row (driven by `,(0,f.jsx)(t.code,{children:`meta.filterVariant`}),`)                              |
| `,(0,f.jsx)(t.code,{children:`enableGlobalFilter`}),`                             | Toolbar search box                                                                  |
| `,(0,f.jsx)(t.code,{children:`enableRowSelection`}),` / `,(0,f.jsx)(t.code,{children:`enableMultiRowSelection`}),` | Checkbox column with select-all + indeterminate state                               |
| `,(0,f.jsx)(t.code,{children:`enableColumnVisibility`}),`                         | "Columns" toolbar dropdown                                                          |
| `,(0,f.jsx)(t.code,{children:`enableColumnOrdering`}),`                           | Drag-and-drop column header reordering                                              |
| `,(0,f.jsx)(t.code,{children:`enablePinning`}),`                                  | Pin columns left/right via the per-header menu                                      |
| `,(0,f.jsx)(t.code,{children:`enableColumnResizing`}),`                           | Draggable column edge resize handles                                                |
| `,(0,f.jsx)(t.code,{children:`enablePagination`}),`                               | Footer pagination — client-side by default, or manual/server via `,(0,f.jsx)(t.code,{children:`manualPagination`}),` |
| `,(0,f.jsx)(t.code,{children:`enableVirtualization`}),`                           | Row virtualization (`,(0,f.jsx)(t.code,{children:`@tanstack/react-virtual`}),`) for large datasets                   |`]}),`
`,(0,f.jsxs)(t.p,{children:[`All default to `,(0,f.jsx)(t.code,{children:`false`}),` — opt in per table.`]}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`locale`}),` (`,(0,f.jsx)(t.code,{children:`'en-US'`}),` | `,(0,f.jsx)(t.code,{children:`'ru-RU'`}),` | `,(0,f.jsx)(t.code,{children:`'hy-AM'`}),`, default `,(0,f.jsx)(t.code,{children:`'en-US'`}),`) translates the
pagination footer's built-in strings — "Rows per page", the row-range
summary, and "No results".`]}),`
`,(0,f.jsx)(t.h2,{id:`column-filters`,children:`Column filters`}),`
`,(0,f.jsxs)(t.p,{children:[`Set `,(0,f.jsx)(t.code,{children:`meta.filterVariant`}),` on a column to make it filterable when
`,(0,f.jsx)(t.code,{children:`enableFiltering`}),` is on:`]}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-tsx`,children:`const columns: ColumnDef<Employee>[] = [
  { accessorKey: 'name', header: 'Name', meta: { filterVariant: 'text' } },
  {
    accessorKey: 'department',
    header: 'Department',
    meta: {
      filterVariant: 'select',
      filterOptions: [{ label: 'Engineering', value: 'Engineering' } /* ... */],
    },
  },
  { accessorKey: 'joinDate', header: 'Joined', meta: { filterVariant: 'date' } },
  {
    accessorKey: 'notes',
    header: 'Notes',
    meta: { filterVariant: 'custom', filterComponent: (column) => <MyControl column={column} /> },
  },
];
`})}),`
`,(0,f.jsxs)(t.p,{children:[`Columns without a `,(0,f.jsx)(t.code,{children:`filterVariant`}),` simply render no filter input. `,(0,f.jsx)(t.code,{children:`meta.align`}),`
(`,(0,f.jsx)(t.code,{children:`'left' | 'center' | 'right'`}),`) controls header/cell text alignment
independent of filtering.`]}),`
`,(0,f.jsx)(t.h2,{id:`row-selection-and-row-actions`,children:`Row selection and row actions`}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`enableRowSelection`}),` prepends a checkbox column automatically — you don't
need to define it yourself. Row actions are different: since the action list
is inherently domain-specific, add a trailing column with the
`,(0,f.jsx)(t.code,{children:`createRowActionsColumn`}),` helper instead of a boolean flag:`]}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-tsx`,children:`import { createRowActionsColumn } from '@ps-tools/ui';

const columns: ColumnDef<Employee>[] = [
  ...baseColumns,
  createRowActionsColumn<Employee>((employee) => [
    { label: 'Edit', icon: <Pencil className="h-4 w-4" />, onSelect: (row) => edit(row) },
    { label: 'Duplicate', onSelect: (row) => duplicate(row) },
    {
      label: 'Delete',
      destructive: true,
      onSelect: (row) => remove(row),
      disabled: (row) => row.status === 'Inactive',
    },
  ]),
];
`})}),`
`,(0,f.jsx)(t.h2,{id:`toolbar`,children:`Toolbar`}),`
`,(0,f.jsxs)(t.p,{children:[`The default toolbar (search, refresh, export, column visibility,
`,(0,f.jsx)(t.code,{children:`toolbarActions`}),` slot) is fully replaceable — pass your own `,(0,f.jsx)(t.code,{children:`toolbar`}),`
node, or `,(0,f.jsx)(t.code,{children:`false`}),` to render none:`]}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-tsx`,children:`<TableV2 data={data} columns={columns} toolbar={<MyCustomToolbar />} />
// or
<TableV2 data={data} columns={columns} toolbar={false} />
`})}),`
`,(0,f.jsx)(t.h2,{id:`responsive-behavior`,children:`Responsive behavior`}),`
`,(0,f.jsxs)(t.p,{children:[`Below the `,(0,f.jsx)(t.code,{children:`md`}),` breakpoint, TableV2 swaps the `,(0,f.jsx)(t.code,{children:`<table>`}),` for a card list (one
card per row: a primary field as the title, remaining visible columns as a
label/value grid) instead of shrinking columns illegibly. This is driven by
the real browser viewport width, not the component's container width — see
the `,(0,f.jsx)(t.strong,{children:`Mobile`}),` story.`]}),`
`,(0,f.jsx)(t.h2,{id:`filling-the-page`,children:`Filling the page`}),`
`,(0,f.jsxs)(t.p,{children:[`Pass `,(0,f.jsx)(t.code,{children:`fillHeight`}),` to stretch the table to its parent's height instead of
sizing to its content — the row area scrolls internally (with a pinned
header, the same as `,(0,f.jsx)(t.code,{children:`stickyHeader`}),`) and the pagination footer stays pinned
to the bottom instead of trailing the last row. The parent element must
give the table a definite height (e.g. `,(0,f.jsx)(t.code,{children:`className="h-[calc(100vh-64px)]"`}),`)
for this to have any effect — see the `,(0,f.jsx)(t.strong,{children:`Fill height (pinned footer)`}),`
story. It does not apply to the mobile card layout.`]}),`
`,(0,f.jsx)(t.h2,{id:`performance`,children:`Performance`}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.code,{children:`getCoreRowModel`}),`/`,(0,f.jsx)(t.code,{children:`getSortedRowModel`}),`/`,(0,f.jsx)(t.code,{children:`getFilteredRowModel`}),`/`,(0,f.jsx)(t.code,{children:`getPaginationRowModel`}),`
are only constructed when the corresponding feature is enabled.`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.code,{children:`enableVirtualization`}),` (via `,(0,f.jsx)(t.code,{children:`@tanstack/react-virtual`}),`) renders only the
rows in (and slightly beyond) the visible scroll viewport — use it for
datasets in the thousands of rows, in place of or alongside pagination.`]}),`
`,(0,f.jsxs)(t.li,{children:[`Column resizing defaults to TanStack's `,(0,f.jsx)(t.code,{children:`'onChange'`}),` resize mode; pass
`,(0,f.jsx)(t.code,{children:`columnResizeMode="onEnd"`}),` if dragging large tables feels janky.`]}),`
`]}),`
`,(0,f.jsx)(t.h2,{id:`accessibility-checklist`,children:`Accessibility checklist`}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsxs)(t.li,{children:[`Sortable headers are real `,(0,f.jsx)(t.code,{children:`<button>`}),`s (keyboard + screen-reader
operable) with `,(0,f.jsx)(t.code,{children:`aria-sort`}),` reflecting the current direction.`]}),`
`,(0,f.jsxs)(t.li,{children:[`The select-all checkbox exposes the indeterminate ("some selected") state
via `,(0,f.jsx)(t.code,{children:`aria-checked="mixed"`}),`.`]}),`
`,(0,f.jsxs)(t.li,{children:[`The per-header options menu, row-actions menu, and column-visibility
dropdown all use the shared `,(0,f.jsx)(t.code,{children:`DropdownMenu`}),` primitive, which provides
roving-focus arrow-key navigation, `,(0,f.jsx)(t.code,{children:`Escape`}),` to close, and focus return to
the trigger.`]}),`
`,(0,f.jsxs)(t.li,{children:[`Column drag handles are labeled (`,(0,f.jsx)(t.code,{children:`aria-label="Reorder {column} column"`}),`)
and drag-and-drop is also operable via keyboard (dnd-kit's
`,(0,f.jsx)(t.code,{children:`KeyboardSensor`}),`).`]}),`
`,(0,f.jsxs)(t.li,{children:[`Loading state renders skeleton rows (never a spinner), each carrying
`,(0,f.jsx)(t.code,{children:`role="status"`}),`/`,(0,f.jsx)(t.code,{children:`aria-label="Loading"`}),` from the shared `,(0,f.jsx)(t.code,{children:`Skeleton`}),`
primitive.`]}),`
`]}),`
`,(0,f.jsx)(t.h2,{id:`extension-points`,children:`Extension points`}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`Custom cells`}),` — a column's `,(0,f.jsx)(t.code,{children:`cell`}),` renderer is plain JSX; compose any
component (`,(0,f.jsx)(t.code,{children:`Avatar`}),`, `,(0,f.jsx)(t.code,{children:`Badge`}),`, `,(0,f.jsx)(t.code,{children:`Status`}),`, `,(0,f.jsx)(t.code,{children:`Progress`}),`, `,(0,f.jsx)(t.code,{children:`Link`}),`, icons, or a
fully custom component) — see the `,(0,f.jsx)(t.strong,{children:`Custom cells`}),` story.`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`Custom filter inputs`}),` — `,(0,f.jsx)(t.code,{children:`meta.filterVariant: 'custom'`}),` +
`,(0,f.jsx)(t.code,{children:`meta.filterComponent`}),`.`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`Custom toolbar`}),` — the `,(0,f.jsx)(t.code,{children:`toolbar`}),` prop, as above.`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsxs)(t.strong,{children:[(0,f.jsx)(t.code,{children:`createSelectionColumn()`}),` / `,(0,f.jsx)(t.code,{children:`createRowActionsColumn()`}),` / `,(0,f.jsx)(t.code,{children:`getPinnedStyles()`})]}),`
are exported for consumers building their own header/cell composition on
top of TanStack Table directly.`]}),`
`]}),`
`,(0,f.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,f.jsx)(n,{})]})}function d(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=t(),s(),r(),c()}))();export{d as default};
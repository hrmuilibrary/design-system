import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-TTyREUKy.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-BCQqqOro.js";import{t as c}from"./mdx-react-shim-QiOq8Uha.js";import{n as l,t as u}from"./Table.stories-DzzQvxCy.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`table`,children:`Table`}),`
`,(0,p.jsxs)(t.p,{children:[`A composable set of table primitives (`,(0,p.jsx)(t.code,{children:`Table`}),`, `,(0,p.jsx)(t.code,{children:`THead`}),`, `,(0,p.jsx)(t.code,{children:`TBody`}),`, `,(0,p.jsx)(t.code,{children:`TR`}),`, `,(0,p.jsx)(t.code,{children:`TH`}),`,
`,(0,p.jsx)(t.code,{children:`TD`}),`) plus a `,(0,p.jsx)(t.code,{children:`DataTable`}),` convenience wrapper that renders a fully-populated
table from a `,(0,p.jsx)(t.code,{children:`columns`}),`/`,(0,p.jsx)(t.code,{children:`rows`}),` config. Use the primitives directly for
hand-authored markup and full control over cell content; reach for
`,(0,p.jsx)(t.code,{children:`DataTable`}),` when the table is data-driven and column definitions are more
convenient than JSX.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`Table`}),` wraps its `,(0,p.jsx)(t.code,{children:`<table>`}),` in a horizontally-scrolling container so wide
tables don't blow out the layout. Because of that wrapper, `,(0,p.jsx)(t.code,{children:`className`}),` and
`,(0,p.jsx)(t.code,{children:`ref`}),` both target the `,(0,p.jsx)(t.code,{children:`<table>`}),` element itself (matching
`,(0,p.jsx)(t.code,{children:`HTMLAttributes<HTMLTableElement>`}),`), while `,(0,p.jsx)(t.code,{children:`wrapperClassName`}),` styles the
outer scroll container:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<Table wrapperClassName="border-brand-500" className="[&_thead]:bg-brand-20">
  ...
</Table>
`})}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`density`}),`, `,(0,p.jsx)(t.code,{children:`striped`}),`, `,(0,p.jsx)(t.code,{children:`hoverable`}),`, and `,(0,p.jsx)(t.code,{children:`stickyHeader`}),` are read via CSS
attribute selectors (`,(0,p.jsx)(t.code,{children:`data-striped`}),`, `,(0,p.jsx)(t.code,{children:`data-hoverable`}),`, `,(0,p.jsx)(t.code,{children:`data-sticky`}),`) set on
the `,(0,p.jsx)(t.code,{children:`<table>`}),` element itself, so `,(0,p.jsx)(t.code,{children:`THead`}),`/`,(0,p.jsx)(t.code,{children:`TBody`}),`/`,(0,p.jsx)(t.code,{children:`TR`}),` styling reacts to the
parent `,(0,p.jsx)(t.code,{children:`Table`}),`'s props without prop-drilling.`]}),`
`,(0,p.jsx)(t.h3,{id:`sortable-columns`,children:`Sortable columns`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`TH`}),` accepts `,(0,p.jsx)(t.code,{children:`sortable`}),`, `,(0,p.jsx)(t.code,{children:`sortDir`}),`, and `,(0,p.jsx)(t.code,{children:`onSortChange`}),`. It renders a sort
icon (ascending / descending / neutral) and cycles
`,(0,p.jsx)(t.code,{children:`asc -> desc -> null -> asc`}),` on click; the parent owns the actual sort
state and re-orders `,(0,p.jsx)(t.code,{children:`rows`}),`/`,(0,p.jsx)(t.code,{children:`children`}),` in response to `,(0,p.jsx)(t.code,{children:`onSortChange`}),`.`]}),`
`,(0,p.jsx)(t.h3,{id:`datatable`,children:`DataTable`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`DataTable`}),` composes `,(0,p.jsx)(t.code,{children:`Table`}),`/`,(0,p.jsx)(t.code,{children:`THead`}),`/`,(0,p.jsx)(t.code,{children:`TBody`}),`/`,(0,p.jsx)(t.code,{children:`TR`}),`/`,(0,p.jsx)(t.code,{children:`TH`}),`/`,(0,p.jsx)(t.code,{children:`TD`}),` from a
`,(0,p.jsx)(t.code,{children:`TableColumn<T>[]`}),` + `,(0,p.jsx)(t.code,{children:`rows: T[]`}),` pair. Each column can provide either a
`,(0,p.jsx)(t.code,{children:`render`}),` (full JSX per row) or a simpler `,(0,p.jsx)(t.code,{children:`accessor`}),` (a value to render
as-is), and the whole table renders an empty-state row automatically when
`,(0,p.jsx)(t.code,{children:`rows`}),` is empty.`]}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(n,{})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};
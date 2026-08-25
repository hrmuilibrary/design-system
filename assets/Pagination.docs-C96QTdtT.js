import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-TTyREUKy.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-BCQqqOro.js";import{t as c}from"./mdx-react-shim-QiOq8Uha.js";import{n as l,t as u}from"./Pagination.stories-DwugQu6Y.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`pagination`,children:`Pagination`}),`
`,(0,p.jsxs)(t.p,{children:[`Navigates between pages of a list or table. A controlled component — it
holds no internal page state, so the consumer owns `,(0,p.jsx)(t.code,{children:`page`}),` and updates it in
response to `,(0,p.jsx)(t.code,{children:`onPageChange`}),`. Renders a compact range of page numbers with
ellipses for the pages skipped in between, computed from `,(0,p.jsx)(t.code,{children:`siblingCount`}),` and
`,(0,p.jsx)(t.code,{children:`boundaryCount`}),`.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`range-algorithm`,children:`Range algorithm`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`siblingCount`}),` controls how many page numbers show on each side of the
current page; `,(0,p.jsx)(t.code,{children:`boundaryCount`}),` controls how many always show at the very
start and end of the range. Once `,(0,p.jsx)(t.code,{children:`pageCount`}),` is small enough that every page
fits without skipping any, no ellipsis is rendered at all — see "Few pages"
in the stories below.`]}),`
`,(0,p.jsx)(t.h2,{id:`overriding-styles`,children:`Overriding styles`}),`
`,(0,p.jsxs)(t.p,{children:[`Because `,(0,p.jsx)(t.code,{children:`Pagination`}),` resolves its `,(0,p.jsx)(t.code,{children:`className`}),` prop through the same `,(0,p.jsx)(t.code,{children:`cn()`}),`
merge utility the rest of the library uses, an app-level override always
wins over the defaults:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<Pagination
  page={page}
  pageCount={pageCount}
  onPageChange={setPage}
  className="gap-2 p-2 bg-bg-container rounded-lg"
/>
`})}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`Pagination`}),` forwards its ref to the root `,(0,p.jsx)(t.code,{children:`<nav>`}),` element and spreads all
native `,(0,p.jsx)(t.code,{children:`<nav>`}),` props, so a native `,(0,p.jsx)(t.code,{children:`aria-label`}),` (default `,(0,p.jsx)(t.code,{children:`"Pagination"`}),`)
overrides the default the same way any other prop would, without a
separate custom prop for it.`]}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(n,{})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};
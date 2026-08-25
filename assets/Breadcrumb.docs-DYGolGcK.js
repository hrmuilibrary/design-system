import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-DGIhpTmD.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-DXoKWi1Y.js";import{t as c}from"./mdx-react-shim-zeAQp5Q3.js";import{n as l,t as u}from"./Breadcrumb.stories-CuAyj9oA.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`breadcrumb`,children:`Breadcrumb`}),`
`,(0,p.jsxs)(t.p,{children:[`A trail of ancestor links showing where the current page sits in a
hierarchy. Renders as a semantic `,(0,p.jsx)(t.code,{children:`<nav aria-label="Breadcrumb"> <ol> <li>`}),`
structure with real `,(0,p.jsx)(t.code,{children:`<a>`}),`/`,(0,p.jsx)(t.code,{children:`<button>`}),` elements per crumb, so keyboard
navigation and screen reader support come for free — no synthetic click
handlers on non-interactive elements.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`current-crumb`,children:`Current crumb`}),`
`,(0,p.jsxs)(t.p,{children:[`The crumb matching `,(0,p.jsx)(t.code,{children:`currentValue`}),` (or the last item, if `,(0,p.jsx)(t.code,{children:`currentValue`}),` is
omitted) renders as plain text with `,(0,p.jsx)(t.code,{children:`aria-current="page"`}),` instead of a
link or button — it isn't a navigation target.`]}),`
`,(0,p.jsx)(t.h2,{id:`interactive-crumbs`,children:`Interactive crumbs`}),`
`,(0,p.jsxs)(t.p,{children:[`Each non-current item renders as an `,(0,p.jsx)(t.code,{children:`<a>`}),` when it has an `,(0,p.jsx)(t.code,{children:`href`}),`, or a
`,(0,p.jsx)(t.code,{children:`<button type="button">`}),` otherwise — `,(0,p.jsx)(t.code,{children:`onSelect`}),` fires from either. A
`,(0,p.jsx)(t.code,{children:`disabled`}),` item renders as plain, non-interactive text.`]}),`
`,(0,p.jsx)(t.h2,{id:`separators`,children:`Separators`}),`
`,(0,p.jsxs)(t.p,{children:[`Separators are explicit `,(0,p.jsx)(t.code,{children:`<li aria-hidden="true">`}),` elements between crumbs,
not a CSS `,(0,p.jsx)(t.code,{children:`content`}),` pseudo-element — a screen reader would otherwise
announce every "/" as if it were a real breadcrumb item. Override the
default `,(0,p.jsx)(t.code,{children:`'/'`}),` with any `,(0,p.jsx)(t.code,{children:`ReactNode`}),` via `,(0,p.jsx)(t.code,{children:`separator`}),`.`]}),`
`,(0,p.jsx)(t.h2,{id:`overriding-styles`,children:`Overriding styles`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`Breadcrumb`}),` resolves its `,(0,p.jsx)(t.code,{children:`className`}),` prop through the same `,(0,p.jsx)(t.code,{children:`cn()`}),` merge
utility the rest of the library uses, so an app-level override always
wins over the size defaults.`]}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`Breadcrumb`}),` forwards its ref to the root `,(0,p.jsx)(t.code,{children:`<nav>`}),` and spreads all native
`,(0,p.jsx)(t.code,{children:`<nav>`}),` attributes, so it composes with the rest of the library without a
separate "as child" API.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};
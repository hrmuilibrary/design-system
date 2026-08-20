import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-DQlrvNv5.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-B68QMlvA.js";import{t as c}from"./mdx-react-shim-Bq1wa7RG.js";import{n as l,t as u}from"./ReadMore.stories-BXCQfxS7.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`readmore`,children:`ReadMore`}),`
`,(0,p.jsxs)(t.p,{children:[`A clamped block of text with a "Show more"/"Show less" toggle. Built on
`,(0,p.jsx)(t.code,{children:`Text`}),`'s `,(0,p.jsx)(t.code,{children:`clamp`}),` prop (a pure CSS line-clamp) plus a real
`,(0,p.jsx)(t.code,{children:`<button aria-expanded aria-controls>`}),` — not a synthetic click handler on
a `,(0,p.jsx)(t.code,{children:`<span>`}),`.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`controlled-vs-uncontrolled`,children:`Controlled vs. uncontrolled`}),`
`,(0,p.jsxs)(t.p,{children:[`Uncontrolled usage passes `,(0,p.jsx)(t.code,{children:`defaultExpanded`}),` (default `,(0,p.jsx)(t.code,{children:`false`}),`) and
`,(0,p.jsx)(t.code,{children:`ReadMore`}),` tracks the expanded state internally. Controlled usage passes
both `,(0,p.jsx)(t.code,{children:`expanded`}),` and `,(0,p.jsx)(t.code,{children:`onExpandedChange`}),`, and the consumer owns the state
entirely — same shape as an uncontrolled/controlled form input.`]}),`
`,(0,p.jsx)(t.h2,{id:`collapsed-content`,children:`Collapsed content`}),`
`,(0,p.jsxs)(t.p,{children:[`By default, collapsing just re-applies the `,(0,p.jsx)(t.code,{children:`clamp`}),` to the same `,(0,p.jsx)(t.code,{children:`children`}),`.
Pass `,(0,p.jsx)(t.code,{children:`collapsedContent`}),` when the collapsed state should show genuinely
different copy (a one-line summary) instead of a clamped version of the
full text.`]}),`
`,(0,p.jsx)(t.h2,{id:`labels`,children:`Labels`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`expandLabel`}),`/`,(0,p.jsx)(t.code,{children:`collapseLabel`}),` default to English ("Show more"/"Show
less") and are plain `,(0,p.jsx)(t.code,{children:`ReactNode`}),`s — override them for localization or
custom copy.`]}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`ReadMore`}),` forwards its ref to the root `,(0,p.jsx)(t.code,{children:`<div>`}),` and spreads all native
`,(0,p.jsx)(t.code,{children:`<div>`}),` attributes. The toggle button calls `,(0,p.jsx)(t.code,{children:`stopPropagation()`}),` on click,
so it works correctly nested inside a clickable card without also
triggering the card's own click handler.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};
import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-Bir9voLp.js";import{S as n,c as r,i,l as a,s as o,u as s}from"./blocks-BnfO2Wh2.js";import{t as c}from"./mdx-react-shim-CEVR6VHz.js";import{n as l,t as u}from"./Divider.stories-B8cffiQ6.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`divider`,children:`Divider`}),`
`,(0,p.jsxs)(t.p,{children:[`A thin line that separates content, either horizontally or vertically.
Renders as a `,(0,p.jsx)(t.code,{children:`<div role="separator">`}),` rather than an `,(0,p.jsx)(t.code,{children:`<hr>`}),` so it can
support both orientations correctly — `,(0,p.jsx)(t.code,{children:`aria-orientation`}),` is always set to
match the `,(0,p.jsx)(t.code,{children:`orientation`}),` prop.`]}),`
`,(0,p.jsx)(r,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(i,{}),`
`,(0,p.jsx)(t.h2,{id:`orientation`,children:`Orientation`}),`
`,(0,p.jsxs)(t.p,{children:[`Horizontal dividers span the full width of their container. Vertical
dividers use `,(0,p.jsx)(t.code,{children:`self-stretch`}),` so they fill the height of a flex container
without needing an explicit height on the divider itself.`]}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`colors`,children:`Colors`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`color`}),` maps onto the same semantic border tokens the rest of the library
uses (`,(0,p.jsx)(t.code,{children:`border-default`}),`, `,(0,p.jsx)(t.code,{children:`border-subtle`}),`, `,(0,p.jsx)(t.code,{children:`border-strong`}),`, `,(0,p.jsx)(t.code,{children:`border-brand`}),`),
so a divider always tracks the current theme instead of a hardcoded gray.`]})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),s(),l()}))();export{f as default};
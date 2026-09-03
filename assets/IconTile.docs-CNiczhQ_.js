import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-p9i34dfU.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-BakqR_Jw.js";import{t as c}from"./mdx-react-shim-CE2bDRHD.js";import{n as l,t as u}from"./IconTile.stories-D5biLeRP.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`icontile`,children:`IconTile`}),`
`,(0,p.jsxs)(t.p,{children:[`A fixed-size container for a `,(0,p.jsx)(t.code,{children:`lucide-react`}),` icon, colored by a semantic
`,(0,p.jsx)(t.code,{children:`tone`}),`. Used to introduce list rows, empty states, and stat cards with a
consistent icon treatment instead of ad-hoc icon + background pairings.
Styled with plain Tailwind utility classes resolved from `,(0,p.jsx)(t.code,{children:`tone`}),`/`,(0,p.jsx)(t.code,{children:`size`}),`
lookup tables, same approach as `,(0,p.jsx)(t.code,{children:`Button`}),`.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`tones`,children:`Tones`}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`IconTile`}),` renders `,(0,p.jsx)(t.code,{children:`aria-hidden="true"`}),` by default, since it's typically
decorative alongside adjacent text (a list item title, a card heading,
etc.). Pass an `,(0,p.jsx)(t.code,{children:`aria-label`}),` when the tile is the only accessible
description of what it represents — doing so also removes `,(0,p.jsx)(t.code,{children:`aria-hidden`}),`:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<IconTile icon={Bell} tone="brand" aria-label="Notifications" />
`})}),`
`,(0,p.jsx)(t.h2,{id:`overriding-styles`,children:`Overriding styles`}),`
`,(0,p.jsxs)(t.p,{children:[`Because `,(0,p.jsx)(t.code,{children:`IconTile`}),` resolves its `,(0,p.jsx)(t.code,{children:`className`}),` prop through the same `,(0,p.jsx)(t.code,{children:`cn()`}),`
merge utility the rest of the library uses, an app-level override always
wins over the tone defaults:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<IconTile icon={CheckCircle} tone="success" className="bg-green-100 dark:bg-green-900/30" />
`})}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`IconTile`}),` forwards its ref to the root `,(0,p.jsx)(t.code,{children:`<div>`}),` and spreads all native div
props, so it composes with tooltips, list rows, and any other layout in
this library without a separate "as child" API.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};
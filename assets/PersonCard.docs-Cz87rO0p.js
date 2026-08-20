import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-HYgm0KbA.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-t2KRTof2.js";import{t as c}from"./mdx-react-shim-BzsLUYLl.js";import{n as l,t as u}from"./PersonCard.stories-OBPu8Yhe.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`personcard`,children:`PersonCard`}),`
`,(0,p.jsx)(t.p,{children:`Compact person tile — avatar + name + role inside a rounded card. Used as
nodes in an org chart, but the shape (small chip with face + identity)
shows up anywhere people are listed: directory search, mention pickers,
team callouts. Centralising it avoids the same markup being rewritten in
each context.`}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`default`}),` — neutral border, for ordinary rows in a list.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`highlight`}),` — brand-green tint + border, for "you" / the current user
/ a featured person.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`warning`}),` — amber border, for a person that needs attention.`]}),`
`]}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`clickable-cards`,children:`Clickable cards`}),`
`,(0,p.jsxs)(t.p,{children:[`Passing `,(0,p.jsx)(t.code,{children:`onClick`}),` renders the card as a `,(0,p.jsx)(t.code,{children:`<button>`}),` instead of a `,(0,p.jsx)(t.code,{children:`<div>`}),` so
it's focusable and clickable, while keeping the same visual layout.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<PersonCard name="Ana Petrosyan" role="Product Designer" onClick={() => openProfile()} />
`})}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`PersonCard`}),` composes with `,(0,p.jsx)(t.code,{children:`Avatar`}),` (from `,(0,p.jsx)(t.code,{children:`../Avatar`}),`) for the face/initials
chip, and forwards its ref and any native element props to the root node
(`,(0,p.jsx)(t.code,{children:`div`}),`, or `,(0,p.jsx)(t.code,{children:`button`}),` when `,(0,p.jsx)(t.code,{children:`onClick`}),` is set), so it merges into lists, grids,
and org-chart layouts without a separate wrapper.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};
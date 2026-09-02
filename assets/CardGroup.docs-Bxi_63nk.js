import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-DhNGfB7i.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-rOvT9z8X.js";import{t as c}from"./mdx-react-shim-C860QfmZ.js";import{n as l,t as u}from"./CardGroup.stories-CUuDT1A3.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`cardgroup`,children:`CardGroup`}),`
`,(0,p.jsxs)(t.p,{children:[`A bordered container with an optional colored title rail and a body that
auto-divides its children with a border between each one. Composed
internally from `,(0,p.jsx)(t.code,{children:`Card`}),` (`,(0,p.jsx)(t.code,{children:`variant="outlined" padding="none"`}),`) rather than
adding this shape as a prop on `,(0,p.jsx)(t.code,{children:`Card`}),` itself — the vertical title rail is
enough of a special case that it's kept quarantined in its own component.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`title-placement`,children:`Title placement`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`placement: 'left' | 'right'`}),` (default `,(0,p.jsx)(t.code,{children:`'left'`}),`) renders the title as a
vertical rail along that edge, using `,(0,p.jsx)(t.code,{children:`[writing-mode:vertical-rl]`}),` plus a
`,(0,p.jsx)(t.code,{children:`rotate-180`}),` on the left rail so both edges read in the conventional
direction. This is a deliberate cross-browser choice over
`,(0,p.jsx)(t.code,{children:`writing-mode: sideways-lr`}),`/`,(0,p.jsx)(t.code,{children:`sideways-rl`}),`, which have effectively no
support outside Firefox. `,(0,p.jsx)(t.code,{children:`placement: 'top'`}),` renders a horizontal bar
instead.`]}),`
`,(0,p.jsx)(t.h2,{id:`auto-dividing-children`,children:`Auto-dividing children`}),`
`,(0,p.jsxs)(t.p,{children:[`Every direct child of the body (the `,(0,p.jsx)(t.code,{children:`header`}),` slot, if set, plus
`,(0,p.jsx)(t.code,{children:`children`}),`) gets a divider below it except the last — this works whether
`,(0,p.jsx)(t.code,{children:`children`}),` is a single node or several, since it's a plain CSS sibling
selector rather than an `,(0,p.jsx)(t.code,{children:`Array.isArray`}),` check. Pass `,(0,p.jsx)(t.code,{children:`noDivider`}),` to turn
it off.`]}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`CardGroup`}),` forwards its ref to `,(0,p.jsx)(t.code,{children:`Card`}),`'s root `,(0,p.jsx)(t.code,{children:`<div>`}),` and spreads all
native `,(0,p.jsx)(t.code,{children:`<div>`}),` attributes, so it composes with the rest of the library
without a separate "as child" API.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};
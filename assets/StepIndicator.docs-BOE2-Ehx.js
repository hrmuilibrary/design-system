import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-CwcXNU-m.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-BGcV2XGT.js";import{t as c}from"./mdx-react-shim-C9laf0wr.js";import{n as l,t as u}from"./StepIndicator.stories-DtV_DfbW.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`stepindicator`,children:`StepIndicator`}),`
`,(0,p.jsx)(t.p,{children:`A labeled step indicator — numbered, dotted, or icon markers joined by
connector lines, horizontal or vertical, with completed/rejected states
and an optional highlight halo.`}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`status-vs-highlighted`,children:`Status vs. highlighted`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`status`}),` (`,(0,p.jsx)(t.code,{children:`upcoming`}),`/`,(0,p.jsx)(t.code,{children:`active`}),`/`,(0,p.jsx)(t.code,{children:`completed`}),`/`,(0,p.jsx)(t.code,{children:`rejected`}),`) drives the marker's
color and icon. `,(0,p.jsx)(t.code,{children:`highlighted`}),` is an orthogonal boolean that adds a halo
ring — the two are independent, so a step can be `,(0,p.jsx)(t.code,{children:`completed`}),` `,(0,p.jsx)(t.strong,{children:`and`}),`
`,(0,p.jsx)(t.code,{children:`highlighted`}),` (e.g. "completed, awaiting review").`]}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`connectors`,children:`Connectors`}),`
`,(0,p.jsxs)(t.p,{children:[`Each step renders its own leading and trailing connector half — not a
single line running behind the marker, and not `,(0,p.jsx)(t.code,{children:`::before`}),`/`,(0,p.jsx)(t.code,{children:`::after`}),`
pseudo-elements. This means each half can carry its own completion color:
the segment between two steps lights up as soon as either the step before
or the step itself is marked `,(0,p.jsx)(t.code,{children:`completed`}),`. The first step has no leading
connector; the last has no trailing connector.`]}),`
`,(0,p.jsx)(t.h2,{id:`interactive-steps`,children:`Interactive steps`}),`
`,(0,p.jsxs)(t.p,{children:[`Pass `,(0,p.jsx)(t.code,{children:`onStepSelect`}),` to wrap each marker in a real `,(0,p.jsx)(t.code,{children:`<button>`}),`; omit it for
a non-interactive, purely informational indicator. `,(0,p.jsx)(t.code,{children:`activeValue`}),` marks the
matching step `,(0,p.jsx)(t.code,{children:`aria-current="step"`}),` regardless of whether it's
interactive.`]}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`StepIndicator`}),` forwards its ref to the root `,(0,p.jsx)(t.code,{children:`<ol>`}),` and spreads all
native `,(0,p.jsx)(t.code,{children:`<ol>`}),` attributes, so it composes with the rest of the library
without a separate "as child" API.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};
import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-CwcXNU-m.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-BGcV2XGT.js";import{t as c}from"./mdx-react-shim-C9laf0wr.js";import{n as l,t as u}from"./Status.stories-3FSIxLms.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`status`,children:`Status`}),`
`,(0,p.jsxs)(t.p,{children:[`Displays the current state of an entity (a record, a job, a request) as a
small pill, with a color dot by default. Styled with plain Tailwind utility
classes resolved from `,(0,p.jsx)(t.code,{children:`variant`}),`/`,(0,p.jsx)(t.code,{children:`size`}),` lookup tables — no variant-authoring
abstraction on top, so consumer apps can override any part of it via
`,(0,p.jsx)(t.code,{children:`className`}),` (merged with `,(0,p.jsx)(t.code,{children:`tailwind-merge`}),`, last conflicting class wins)
rather than fighting a pre-hidden style layer.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`the-status-dot`,children:`The status dot`}),`
`,(0,p.jsxs)(t.p,{children:[`By default `,(0,p.jsx)(t.code,{children:`Status`}),` renders a small color dot before the label, matching
the variant's accent color. Passing `,(0,p.jsx)(t.code,{children:`leftIcon`}),` replaces the dot with the
icon; passing `,(0,p.jsx)(t.code,{children:`dot={false}`}),` (with no `,(0,p.jsx)(t.code,{children:`leftIcon`}),`) removes it entirely:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<Status variant="success" dot={false}>
  Approved
</Status>
`})}),`
`,(0,p.jsx)(t.h2,{id:`overriding-styles`,children:`Overriding styles`}),`
`,(0,p.jsxs)(t.p,{children:[`Because `,(0,p.jsx)(t.code,{children:`Status`}),` resolves its `,(0,p.jsx)(t.code,{children:`className`}),` prop through the same `,(0,p.jsx)(t.code,{children:`cn()`}),`
merge utility the rest of the library uses, an app-level override always
wins over the variant defaults:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<Status dot={false} className="bg-purple-100 text-purple-900 rounded-md">
  Custom
</Status>
`})}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`Status`}),` forwards its ref to the root `,(0,p.jsx)(t.code,{children:`<span>`}),` and spreads all native
`,(0,p.jsx)(t.code,{children:`<span>`}),` props, so it composes with tooltips and other components in this
library without a separate "as child" API.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};
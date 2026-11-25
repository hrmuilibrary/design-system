import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./iframe-CTW3crj1.js";import{i as n}from"./react-D6KPTuAW.js";import{c as r,i,l as a,s as o,u as s}from"./blocks-D80YLAqp.js";import{t as c}from"./mdx-react-shim-D3AVO7Z7.js";import{n as l,t as u}from"./Button.stories-M59vPOBN.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`button`,children:`Button`}),`
`,(0,p.jsxs)(t.p,{children:[`Triggers an action or event. Styled with plain Tailwind utility classes
resolved from `,(0,p.jsx)(t.code,{children:`variant`}),`/`,(0,p.jsx)(t.code,{children:`size`}),` lookup tables — no variant-authoring
abstraction on top, so consumer apps can override any part of it via
`,(0,p.jsx)(t.code,{children:`className`}),` (merged with `,(0,p.jsx)(t.code,{children:`tailwind-merge`}),`, last conflicting class wins)
rather than fighting a pre-hidden style layer.`]}),`
`,(0,p.jsx)(r,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(i,{}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`overriding-styles`,children:`Overriding styles`}),`
`,(0,p.jsxs)(t.p,{children:[`Because `,(0,p.jsx)(t.code,{children:`Button`}),` resolves its `,(0,p.jsx)(t.code,{children:`className`}),` prop through the same `,(0,p.jsx)(t.code,{children:`cn()`}),`
merge utility the rest of the library uses, an app-level override always
wins over the variant defaults:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<Button className="bg-green-600 text-fg-inverse hover:bg-green-700 rounded-full">Approve</Button>
`})}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`Button`}),` forwards its ref and spreads all native `,(0,p.jsx)(t.code,{children:`<button>`}),` props, so it
composes with forms, tooltips, and any other component in this library
without a separate "as child" API.`]})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),s(),l()}))();export{f as default};
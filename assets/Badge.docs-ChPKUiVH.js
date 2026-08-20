import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-DQlrvNv5.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-B68QMlvA.js";import{t as c}from"./mdx-react-shim-Bq1wa7RG.js";import{n as l,t as u}from"./Badge.stories-5qt1WKVm.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`badge`,children:`Badge`}),`
`,(0,p.jsxs)(t.p,{children:[`Displays a small status or metadata label. Styled with plain Tailwind
utility classes resolved from `,(0,p.jsx)(t.code,{children:`variant`}),`/`,(0,p.jsx)(t.code,{children:`appearance`}),`/`,(0,p.jsx)(t.code,{children:`size`}),` lookup tables —
no variant-authoring abstraction on top, so consumer apps can override any
part of it via `,(0,p.jsx)(t.code,{children:`className`}),` (merged with `,(0,p.jsx)(t.code,{children:`tailwind-merge`}),`, last conflicting
class wins) rather than fighting a pre-hidden style layer.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`overriding-styles`,children:`Overriding styles`}),`
`,(0,p.jsxs)(t.p,{children:[`Because `,(0,p.jsx)(t.code,{children:`Badge`}),` resolves its `,(0,p.jsx)(t.code,{children:`className`}),` prop through the same `,(0,p.jsx)(t.code,{children:`cn()`}),`
merge utility the rest of the library uses, an app-level override always
wins over the variant defaults:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<Badge className="bg-purple-100 text-purple-900 border-purple-300 rounded-full">Custom</Badge>
`})}),`
`,(0,p.jsx)(t.h2,{id:`dismissible-badges`,children:`Dismissible badges`}),`
`,(0,p.jsxs)(t.p,{children:[`Passing `,(0,p.jsx)(t.code,{children:`onDismiss`}),` renders a trailing dismiss button (replacing
`,(0,p.jsx)(t.code,{children:`rightIcon`}),`, if also supplied) that calls the handler on click:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<Badge onDismiss={() => removeTag(tag.id)}>{tag.label}</Badge>
`})}),`
`,(0,p.jsx)(t.h2,{id:`status-dots`,children:`Status dots`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`dot`}),` renders a standalone status dot instead of a labeled badge —
`,(0,p.jsx)(t.code,{children:`children`}),`, icons, and `,(0,p.jsx)(t.code,{children:`onDismiss`}),` are all ignored. Pass an `,(0,p.jsx)(t.code,{children:`aria-label`}),`
if the dot conveys meaning on its own (otherwise it's treated as
decorative and hidden from assistive tech).`]}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`withDot`}),` instead renders a small leading dot before `,(0,p.jsx)(t.code,{children:`children`}),`, in place
of `,(0,p.jsx)(t.code,{children:`leftIcon`}),`, for a "labeled status" badge like "Active".`]}),`
`,(0,p.jsx)(t.h2,{id:`interactive-badges`,children:`Interactive badges`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`interactive`}),` turns the badge into a `,(0,p.jsx)(t.code,{children:`role="button"`}),` with hover/active
states, a focus ring, and Enter/Space activation for `,(0,p.jsx)(t.code,{children:`onClick`}),` — useful
for a removable filter chip that also responds to a plain click. It stays
a `,(0,p.jsx)(t.code,{children:`<span>`}),` rather than becoming a real `,(0,p.jsx)(t.code,{children:`<button>`}),`, so it composes as a
label everywhere a `,(0,p.jsx)(t.code,{children:`Badge`}),` already does; if you need a fully native
button element instead, render your own `,(0,p.jsx)(t.code,{children:`<button>`}),` styled with the same
class tables.`]}),`
`,(0,p.jsx)(t.h2,{id:`disabled`,children:`Disabled`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`disabled`}),` dims the badge and blocks all pointer/keyboard interaction,
including the dismiss button.`]}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`Badge`}),` forwards its ref to the root `,(0,p.jsx)(t.code,{children:`<span>`}),` and spreads all native
`,(0,p.jsx)(t.code,{children:`<span>`}),` props, so it composes with tooltips and other components in this
library without a separate "as child" API.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};
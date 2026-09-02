import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-DUGsDtVw.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-C7uO-bU_.js";import{t as c}from"./mdx-react-shim-DnZWtBEq.js";import{n as l,t as u}from"./Input.stories-WyNisiLS.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`input`,children:`Input`}),`
`,(0,p.jsxs)(t.p,{children:[`A labeled text input with helper/error messaging, left/right icon slots, and
left/right addons. Styled with plain Tailwind utility classes resolved from a
`,(0,p.jsx)(t.code,{children:`size`}),` lookup table — no variant-authoring abstraction on top, so consumer
apps can override any part of it via `,(0,p.jsx)(t.code,{children:`className`}),` (merged with
`,(0,p.jsx)(t.code,{children:`tailwind-merge`}),`, last conflicting class wins) rather than fighting a
pre-hidden style layer.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`error-state`,children:`Error state`}),`
`,(0,p.jsxs)(t.p,{children:[`Set `,(0,p.jsx)(t.code,{children:`error`}),` to render the invalid style without a message, or pass
`,(0,p.jsx)(t.code,{children:`errorText`}),` to also render an inline error message below the field (it takes
over from `,(0,p.jsx)(t.code,{children:`helperText`}),` when both are set, and drives `,(0,p.jsx)(t.code,{children:`error`}),` to `,(0,p.jsx)(t.code,{children:`true`}),`
automatically). Either way, `,(0,p.jsx)(t.code,{children:`aria-invalid`}),` and `,(0,p.jsx)(t.code,{children:`aria-describedby`}),` are wired
up automatically:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<Input label="Email address" error errorText="Please enter a valid email address." />
`})}),`
`,(0,p.jsx)(t.h2,{id:`label-addons`,children:`Label addons`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`labelAddons`}),` renders content on the label row, to the right of the label
text and required marker — e.g. an info tooltip trigger. It's rendered as
a sibling of the `,(0,p.jsx)(t.code,{children:`<label>`}),` element, not a child, so an interactive addon
never steals focus into the field when clicked.`]}),`
`,(0,p.jsx)(t.h2,{id:`overriding-styles`,children:`Overriding styles`}),`
`,(0,p.jsxs)(t.p,{children:[`Because `,(0,p.jsx)(t.code,{children:`Input`}),` resolves its `,(0,p.jsx)(t.code,{children:`className`}),` prop through the same `,(0,p.jsx)(t.code,{children:`cn()`}),` merge
utility the rest of the library uses, an app-level override always wins over
the size defaults. The input's own wrapping layout (label, helper text,
overall width) can be targeted separately via `,(0,p.jsx)(t.code,{children:`wrapperClassName`}),`:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<Input label="Email address" className="text-fg-brand" wrapperClassName="max-w-sm" />
`})}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`Input`}),` forwards its ref to the native `,(0,p.jsx)(t.code,{children:`<input>`}),` element and spreads all
native `,(0,p.jsx)(t.code,{children:`<input>`}),` props (aside from `,(0,p.jsx)(t.code,{children:`size`}),`, which is repurposed for the
`,(0,p.jsx)(t.code,{children:`InputSize`}),` scale), so it composes with forms and validation libraries
without a separate "as child" API.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};
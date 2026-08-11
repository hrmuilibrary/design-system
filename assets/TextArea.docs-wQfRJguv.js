import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-B_LPFnTU.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-3Am95l4w.js";import{t as c}from"./mdx-react-shim-DrJ0tF8B.js";import{n as l,t as u}from"./TextArea.stories-ChIEMGe7.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`textarea`,children:`TextArea`}),`
`,(0,p.jsxs)(t.p,{children:[`A labeled multi-line text input with helper/error messaging and an optional
character counter. Styled with plain Tailwind utility classes — no
variant-authoring abstraction on top, so consumer apps can override any part
of it via `,(0,p.jsx)(t.code,{children:`className`}),` (merged with `,(0,p.jsx)(t.code,{children:`tailwind-merge`}),`, last conflicting class
wins) rather than fighting a pre-hidden style layer.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`error-state`,children:`Error state`}),`
`,(0,p.jsxs)(t.p,{children:[`Pass `,(0,p.jsx)(t.code,{children:`error`}),` to mark the field invalid without a message, or `,(0,p.jsx)(t.code,{children:`errorText`}),` to
render an accessible error message (wired to the textarea via
`,(0,p.jsx)(t.code,{children:`aria-describedby`}),` and announced through `,(0,p.jsx)(t.code,{children:`aria-invalid`}),`). `,(0,p.jsx)(t.code,{children:`errorText`}),` also
implies the error state.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<TextArea label="Description" error errorText="Description is required." />
`})}),`
`,(0,p.jsx)(t.h2,{id:`character-count`,children:`Character count`}),`
`,(0,p.jsxs)(t.p,{children:[`Pass `,(0,p.jsx)(t.code,{children:`showCount`}),` together with `,(0,p.jsx)(t.code,{children:`maxLength`}),` to render a live `,(0,p.jsx)(t.code,{children:`n/max`}),` counter
under the field.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<TextArea label="Bio" showCount maxLength={200} />
`})}),`
`,(0,p.jsx)(t.h2,{id:`label-addons`,children:`Label addons`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`labelAddons`}),` renders content on the label row, to the right of the label
text and required marker — e.g. an info tooltip trigger. It's rendered as
a sibling of the `,(0,p.jsx)(t.code,{children:`<label>`}),` element, not a child, so an interactive addon
(a button, a tooltip trigger) never steals focus into the textarea when
clicked.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<TextArea label="Bio" labelAddons={<Tooltip content="Shown on your public profile.">…</Tooltip>} />
`})}),`
`,(0,p.jsx)(t.h2,{id:`overriding-styles`,children:`Overriding styles`}),`
`,(0,p.jsxs)(t.p,{children:[`Because `,(0,p.jsx)(t.code,{children:`TextArea`}),` resolves its `,(0,p.jsx)(t.code,{children:`className`}),` prop through the same `,(0,p.jsx)(t.code,{children:`cn()`}),`
merge utility the rest of the library uses, an app-level override always
wins over the defaults. Use `,(0,p.jsx)(t.code,{children:`wrapperClassName`}),` to style the outer
label/textarea/helper-text wrapper instead of the `,(0,p.jsx)(t.code,{children:`<textarea>`}),` element
itself.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<TextArea className="rounded-full" wrapperClassName="max-w-md" />
`})}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`TextArea`}),` forwards its ref to the underlying `,(0,p.jsx)(t.code,{children:`<textarea>`}),` element and
spreads all native `,(0,p.jsx)(t.code,{children:`<textarea>`}),` props, so it composes with forms and any
other component in this library without a separate "as child" API.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};
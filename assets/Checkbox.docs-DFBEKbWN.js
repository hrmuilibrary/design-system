import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-04k_LSg4.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-hGSMUV55.js";import{t as c}from"./mdx-react-shim-DZJTKzDp.js";import{n as l,t as u}from"./Checkbox.stories-BqRm5GlT.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`checkbox`,children:`Checkbox`}),`
`,(0,p.jsxs)(t.p,{children:[`A labeled checkbox input. The native `,(0,p.jsx)(t.code,{children:`<input type="checkbox">`}),` is visually
hidden (`,(0,p.jsx)(t.code,{children:`sr-only`}),`) but stays in the tab order and drives every visual state
of a custom box via the `,(0,p.jsx)(t.code,{children:`peer`}),` variant, so the component keeps full native
keyboard/form/a11y behavior while looking however the design wants.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`indeterminate`,children:`Indeterminate`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`indeterminate`}),` renders the mixed ("some selected") visual and sets
`,(0,p.jsx)(t.code,{children:`aria-checked="mixed"`}),` on the input. It's a purely visual/ARIA flag — unlike
the DOM `,(0,p.jsx)(t.code,{children:`indeterminate`}),` property, it does not need to be set imperatively via
a ref, so it composes with both controlled and uncontrolled usage the same
way `,(0,p.jsx)(t.code,{children:`checked`}),`/`,(0,p.jsx)(t.code,{children:`defaultChecked`}),` do.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<Checkbox indeterminate label="Select all" />
`})}),`
`,(0,p.jsx)(t.h2,{id:`error-state`,children:`Error state`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`error`}),` swaps the border (and hover border) to the danger palette and sets
`,(0,p.jsx)(t.code,{children:`aria-invalid`}),` on the input, for use alongside form validation messaging
rendered by the consumer.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<Checkbox error label="You must accept the terms" />
`})}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`Checkbox`}),` forwards its ref to the native `,(0,p.jsx)(t.code,{children:`<input>`}),` and spreads all native
input props (minus `,(0,p.jsx)(t.code,{children:`size`}),`/`,(0,p.jsx)(t.code,{children:`type`}),`, which the component owns), so it composes
with forms and validation libraries without a separate API.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};
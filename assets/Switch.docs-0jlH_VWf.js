import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-HYgm0KbA.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-t2KRTof2.js";import{t as c}from"./mdx-react-shim-BzsLUYLl.js";import{n as l,t as u}from"./Switch.stories-Dc1tGN7B.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`switch`,children:`Switch`}),`
`,(0,p.jsxs)(t.p,{children:[`A toggle control for binary on/off settings, built on a native `,(0,p.jsx)(t.code,{children:`<input type="checkbox" role="switch">`}),` styled with the `,(0,p.jsx)(t.code,{children:`peer`}),` variant so the
visible track and thumb react to the (visually hidden) input's checked,
disabled, and focus-visible state — no extra state management required.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`label--description`,children:`Label & description`}),`
`,(0,p.jsxs)(t.p,{children:[`Pass `,(0,p.jsx)(t.code,{children:`label`}),` and/or `,(0,p.jsx)(t.code,{children:`description`}),` to render them alongside the control,
wrapped together in a single `,(0,p.jsx)(t.code,{children:`<label>`}),` so clicking either the text or the
control toggles it. Omit both to render just the bare control (useful when
the surrounding layout supplies its own label, e.g. inside a settings row).
`,(0,p.jsx)(t.code,{children:`labelPosition="left"`}),` flips the control to the end of the row while
keeping the label left-aligned.`]}),`
`,(0,p.jsx)(t.h2,{id:`overriding-styles`,children:`Overriding styles`}),`
`,(0,p.jsxs)(t.p,{children:[`Because `,(0,p.jsx)(t.code,{children:`Switch`}),` resolves its `,(0,p.jsx)(t.code,{children:`className`}),` prop through the same `,(0,p.jsx)(t.code,{children:`cn()`}),`
merge utility the rest of the library uses, an app-level override always
wins over the defaults. `,(0,p.jsx)(t.code,{children:`className`}),` applies to the outer `,(0,p.jsx)(t.code,{children:`<label>`}),` wrapper
(spacing, alignment) rather than the track itself — style the track/thumb
by wrapping `,(0,p.jsx)(t.code,{children:`Switch`}),` instead of trying to override `,(0,p.jsx)(t.code,{children:`bg-brand-500`}),` etc.
inline.`]}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`Switch`}),` forwards its ref to the underlying `,(0,p.jsx)(t.code,{children:`<input>`}),` element (not the
outer `,(0,p.jsx)(t.code,{children:`<label>`}),`), so consumers can call `,(0,p.jsx)(t.code,{children:`.focus()`}),` or read `,(0,p.jsx)(t.code,{children:`.checked`}),`
directly, matching how every other native form control in this library
behaves. It spreads all native `,(0,p.jsx)(t.code,{children:`<input>`}),` props (aside from `,(0,p.jsx)(t.code,{children:`size`}),` and
`,(0,p.jsx)(t.code,{children:`type`}),`, which the component owns), so it works uncontrolled
(`,(0,p.jsx)(t.code,{children:`defaultChecked`}),`) or controlled (`,(0,p.jsx)(t.code,{children:`checked`}),` + `,(0,p.jsx)(t.code,{children:`onChange`}),`) like any
checkbox.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};
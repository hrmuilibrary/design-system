import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./iframe-INC7WAag.js";import{i as n}from"./react-DQZgoHWe.js";import{c as r,i,l as a,s as o,u as s}from"./blocks-CaxZfz2E.js";import{t as c}from"./mdx-react-shim-CEbCclbk.js";import{n as l,t as u}from"./Copy.stories-DlwSwHws.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`copy`,children:`Copy`}),`
`,(0,p.jsxs)(t.p,{children:[`An icon-only button that copies `,(0,p.jsx)(t.code,{children:`text`}),` to the clipboard via the native
`,(0,p.jsx)(t.code,{children:`navigator.clipboard.writeText`}),` API (no clipboard library needed), and
flashes a "Copied" `,(0,p.jsx)(t.code,{children:`Popover`}),` for feedback.`]}),`
`,(0,p.jsx)(r,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(i,{}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`feedback`,children:`Feedback`}),`
`,(0,p.jsxs)(t.p,{children:[`Feedback shows two ways at once, since a `,(0,p.jsx)(t.code,{children:`Popover`}),` mount alone isn't
reliably announced by a screen reader: a visible `,(0,p.jsx)(t.code,{children:`Popover`}),` bubble above
the button (`,(0,p.jsx)(t.code,{children:`copiedLabel`}),`, default `,(0,p.jsx)(t.code,{children:`'Copied'`}),`), and a visually-hidden
`,(0,p.jsx)(t.code,{children:`role="status" aria-live="polite"`}),` region carrying the same text. The icon
also swaps to a checkmark for the same duration, so the feedback survives
a user who dismisses or doesn't notice the popover.`]}),`
`,(0,p.jsx)(t.h2,{id:`when-the-clipboard-api-is-unavailable`,children:`When the Clipboard API is unavailable`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`navigator.clipboard.writeText`}),` isn't available in every context (older
browsers, insecure/non-HTTPS origins). `,(0,p.jsx)(t.code,{children:`Copy`}),` detects this up front and
renders the button `,(0,p.jsx)(t.code,{children:`disabled`}),` instead of throwing when clicked.`]}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`Copy`}),` forwards its ref to the underlying `,(0,p.jsx)(t.code,{children:`<button>`}),` element (the same
one `,(0,p.jsx)(t.code,{children:`Button`}),` forwards to) and spreads all remaining native `,(0,p.jsx)(t.code,{children:`<button>`}),`
attributes, aside from `,(0,p.jsx)(t.code,{children:`children`}),`/`,(0,p.jsx)(t.code,{children:`onClick`}),`/`,(0,p.jsx)(t.code,{children:`leftIcon`}),`/`,(0,p.jsx)(t.code,{children:`rightIcon`}),`, which
`,(0,p.jsx)(t.code,{children:`Copy`}),` owns.`]})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),s(),l()}))();export{f as default};
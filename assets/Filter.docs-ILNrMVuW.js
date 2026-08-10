import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-DDx-spus.js";import{l as n,o as r,r as i,s as a,x as o}from"./blocks-BecSVnUb.js";import{t as s}from"./mdx-react-shim-DeOCAcWI.js";import{n as c,t as l}from"./Filter.stories-CfIlvNwp.js";function u(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,...o(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r,{of:l}),`
`,(0,f.jsx)(t.h1,{id:`filter`,children:`Filter`}),`
`,(0,f.jsxs)(t.p,{children:[`A pill-shaped trigger for a filter dropdown. Shows a `,(0,f.jsx)(t.code,{children:`label`}),`, an optional
selected `,(0,f.jsx)(t.code,{children:`value`}),` (rendered after a dot separator), and toggles an
absolutely-positioned popover of `,(0,f.jsx)(t.code,{children:`children`}),` when clicked. Closes on any
outside click.`]}),`
`,(0,f.jsx)(a,{}),`
`,(0,f.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,f.jsx)(i,{}),`
`,(0,f.jsx)(t.h2,{id:`active-state`,children:`Active state`}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`Filter`}),` is visually "active" (brand-tinted pill) whenever `,(0,f.jsx)(t.code,{children:`active`}),` is
`,(0,f.jsx)(t.code,{children:`true`}),` `,(0,f.jsx)(t.strong,{children:`or`}),` `,(0,f.jsx)(t.code,{children:`value`}),` is defined — so passing any `,(0,f.jsx)(t.code,{children:`value`}),`, including an
empty string, marks the filter as active without needing a separate flag.`]}),`
`,(0,f.jsx)(t.h2,{id:`clearing-a-value`,children:`Clearing a value`}),`
`,(0,f.jsxs)(t.p,{children:[`When the filter is active and `,(0,f.jsx)(t.code,{children:`onClear`}),` is provided, the trailing chevron
is replaced by a clear (×) affordance that stops the click from also
toggling the popover open. Omit `,(0,f.jsx)(t.code,{children:`onClear`}),` to always show the chevron.`]}),`
`,(0,f.jsx)(t.h2,{id:`popover-content`,children:`Popover content`}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`children`}),` renders inside an absolutely-positioned panel below the trigger,
shown only while the filter is open. Compose it with any content —
checkboxes, radio groups, a date range, or a custom form.`]}),`
`,(0,f.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`Filter`}),` forwards its ref and spreads the remaining native `,(0,f.jsx)(t.code,{children:`<div>`}),` props
onto its root element, so it composes with layout utilities and other
components in this library without a separate wrapper.`]})]})}function d(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=t(),s(),n(),c()}))();export{d as default};
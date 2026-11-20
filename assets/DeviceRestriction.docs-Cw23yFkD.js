import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-D4Q5nh7r.js";import{S as n,c as r,i,l as a,s as o,u as s}from"./blocks-CNtGywFE.js";import{t as c}from"./mdx-react-shim-DW4HkCRC.js";import{n as l,t as u}from"./DeviceRestriction.stories-CRtjfXiB.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`devicerestriction`,children:`DeviceRestriction`}),`
`,(0,p.jsx)(t.p,{children:`A premium empty-state placeholder for a page that's only accessible from
certain device types (mobile, tablet, desktop, or mobile-and-tablet). It
never detects the current device — the consuming app decides when to
render it, based on its own viewport/breakpoint logic.`}),`
`,(0,p.jsx)(r,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(i,{}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`copy`,children:`Copy`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`title`}),` and `,(0,p.jsx)(t.code,{children:`description`}),` default to a built-in string per `,(0,p.jsx)(t.code,{children:`type`}),`,
translated for `,(0,p.jsx)(t.code,{children:`'en-US'`}),`, `,(0,p.jsx)(t.code,{children:`'ru-RU'`}),`, and `,(0,p.jsx)(t.code,{children:`'hy-AM'`}),`
(`,(0,p.jsx)(t.code,{children:`DeviceRestriction.i18n.ts`}),`) — pick one via the `,(0,p.jsx)(t.code,{children:`locale`}),` prop. Pass an
explicit `,(0,p.jsx)(t.code,{children:`title`}),`/`,(0,p.jsx)(t.code,{children:`description`}),` to override the translated default
entirely.`]}),`
`,(0,p.jsx)(t.h2,{id:`icon`,children:`Icon`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`icon`}),` defaults to a `,(0,p.jsx)(t.code,{children:`type`}),`-specific lucide icon (`,(0,p.jsx)(t.code,{children:`Smartphone`}),`, `,(0,p.jsx)(t.code,{children:`Tablet`}),`,
`,(0,p.jsx)(t.code,{children:`Monitor`}),`, or `,(0,p.jsx)(t.code,{children:`TabletSmartphone`}),`) inside an `,(0,p.jsx)(t.code,{children:`IconTile`}),` — not a bundled
image asset. Pass your own node via `,(0,p.jsx)(t.code,{children:`icon`}),` to override it; the default
icon is decorative and hidden from assistive tech, since the title and
description already carry the message on their own.`]}),`
`,(0,p.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`DeviceRestriction`}),` centers its content with flexbox and never forces a
height on itself — it fills whatever container it's placed in. Pass
`,(0,p.jsx)(t.code,{children:`fillHeight`}),` to have it stretch to fill a parent with an explicit height
(e.g. `,(0,p.jsx)(t.code,{children:`<div style={{ height: '100vh' }}>`}),`).`]})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),s(),l()}))();export{f as default};
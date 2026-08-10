import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-DDx-spus.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-BecSVnUb.js";import{t as c}from"./mdx-react-shim-DeOCAcWI.js";import{n as l,t as u}from"./InfoField.stories-CDFo3Gv1.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`infofield`,children:`InfoField`}),`
`,(0,p.jsxs)(t.p,{children:[`A labeled value row with a leading tinted `,(0,p.jsx)(t.code,{children:`IconTile`}),`, an uppercase label,
the value itself, and an optional right-aligned action slot. The General
Information block on the Profile page uses this primitive; settings /
contact / payroll detail pages reach for the same shape. Styled with plain
Tailwind utility classes — no variant-authoring abstraction on top.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`tones`,children:`Tones`}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`composing-value-and-action`,children:`Composing value and action`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`InfoField`}),` composes with `,(0,p.jsx)(t.code,{children:`IconTile`}),` for its leading badge (forwarding
`,(0,p.jsx)(t.code,{children:`iconTone`}),` straight through as `,(0,p.jsx)(t.code,{children:`IconTile`}),`'s `,(0,p.jsx)(t.code,{children:`tone`}),` prop) and accepts any
`,(0,p.jsx)(t.code,{children:`ReactNode`}),` for both `,(0,p.jsx)(t.code,{children:`value`}),` and `,(0,p.jsx)(t.code,{children:`action`}),`, so it works equally well with
plain strings, links, chips, or an icon-only `,(0,p.jsx)(t.code,{children:`Button`}),` used as an inline
edit affordance:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<InfoField
  icon={Mail}
  iconTone="brand"
  label="Email"
  value="jane.doe@company.com"
  action={
    <Button variant="tertiary" size="sm" iconOnly aria-label="Edit email">
      <Pencil className="size-4" />
    </Button>
  }
/>
`})}),`
`,(0,p.jsx)(t.h2,{id:`overriding-styles`,children:`Overriding styles`}),`
`,(0,p.jsxs)(t.p,{children:[`Because `,(0,p.jsx)(t.code,{children:`InfoField`}),` resolves its `,(0,p.jsx)(t.code,{children:`className`}),` prop through the same `,(0,p.jsx)(t.code,{children:`cn()`}),`
merge utility the rest of the library uses, an app-level override always
wins over the defaults:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<InfoField icon={Mail} label="Email" value="jane.doe@company.com" className="gap-4" />
`})}),`
`,(0,p.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`value`}),` and `,(0,p.jsx)(t.code,{children:`action`}),` accept arbitrary nodes, so any interactive content
placed in `,(0,p.jsx)(t.code,{children:`action`}),` (e.g. an icon-only button) is responsible for its own
accessible name — see the `,(0,p.jsx)(t.code,{children:`aria-label`}),` on the edit button above.`]}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`InfoField`}),` forwards its ref to the root `,(0,p.jsx)(t.code,{children:`<div>`}),` and spreads all native div
props, so it composes with grids, cards, and any other layout in this
library without a separate "as child" API.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};
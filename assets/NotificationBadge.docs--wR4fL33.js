import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-DIoW-LAR.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-eh44YEoF.js";import{t as c}from"./mdx-react-shim-BKjJsHpQ.js";import{n as l,t as u}from"./NotificationBadge.stories-BlEHW6uK.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`notificationbadge`,children:`NotificationBadge`}),`
`,(0,p.jsxs)(t.p,{children:[`Renders a count or dot indicator, either as a standalone element or overlaid
on a `,(0,p.jsx)(t.code,{children:`children`}),` element (an icon, avatar, or nav item). Styled with plain
Tailwind utility classes resolved from `,(0,p.jsx)(t.code,{children:`variant`}),`/`,(0,p.jsx)(t.code,{children:`size`}),` lookup tables — no
variant-authoring abstraction on top, so consumer apps can override any part
of it via `,(0,p.jsx)(t.code,{children:`className`}),` (merged with `,(0,p.jsx)(t.code,{children:`tailwind-merge`}),`, last conflicting class
wins) rather than fighting a pre-hidden style layer.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`behavior`,children:`Behavior`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`kind="count"`}),` shows the numeric `,(0,p.jsx)(t.code,{children:`count`}),`, formatted via `,(0,p.jsx)(t.code,{children:`max`}),` (e.g. `,(0,p.jsx)(t.code,{children:`99+`}),`
once `,(0,p.jsx)(t.code,{children:`count`}),` exceeds `,(0,p.jsx)(t.code,{children:`max`}),`) and abbreviated at `,(0,p.jsx)(t.code,{children:`1000+`}),` (e.g. `,(0,p.jsx)(t.code,{children:`2K`}),`).
`,(0,p.jsx)(t.code,{children:`kind="dot"`}),` ignores `,(0,p.jsx)(t.code,{children:`count`}),` and always renders once shown.`]}),`
`,(0,p.jsxs)(t.li,{children:[`By default a `,(0,p.jsx)(t.code,{children:`count`}),` of `,(0,p.jsx)(t.code,{children:`0`}),` renders nothing; pass `,(0,p.jsx)(t.code,{children:`showZero`}),` to render the
badge anyway.`]}),`
`,(0,p.jsxs)(t.li,{children:[`When `,(0,p.jsx)(t.code,{children:`children`}),` is provided, `,(0,p.jsx)(t.code,{children:`NotificationBadge`}),` wraps it in a
`,(0,p.jsx)(t.code,{children:`relative inline-flex`}),` span and positions the badge absolutely in the
top-right corner. Without `,(0,p.jsx)(t.code,{children:`children`}),`, the badge renders inline in normal
flow.`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`overriding-styles`,children:`Overriding styles`}),`
`,(0,p.jsxs)(t.p,{children:[`Because `,(0,p.jsx)(t.code,{children:`NotificationBadge`}),` resolves its `,(0,p.jsx)(t.code,{children:`className`}),` prop through the same
`,(0,p.jsx)(t.code,{children:`cn()`}),` merge utility the rest of the library uses, an app-level override
always wins over the variant defaults:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<NotificationBadge className="bg-purple-500 ring-offset-0">
  <Bell className="size-6" />
</NotificationBadge>
`})}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`NotificationBadge`}),` forwards its ref and spreads all native `,(0,p.jsx)(t.code,{children:`<span>`}),` props
onto the badge element itself — the same element `,(0,p.jsx)(t.code,{children:`className`}),`, `,(0,p.jsx)(t.code,{children:`ref`}),`, and
`,(0,p.jsx)(t.code,{children:`dataTestId`}),` all target, whether the badge renders standalone or overlaid on
`,(0,p.jsx)(t.code,{children:`children`}),`.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};
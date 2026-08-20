import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-DQlrvNv5.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-B68QMlvA.js";import{t as c}from"./mdx-react-shim-Bq1wa7RG.js";import{n as l,t as u}from"./Text.stories-D1KxJvak.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`text`,children:`Text`}),`
`,(0,p.jsxs)(t.p,{children:[`Renders any typographic string in the design system. `,(0,p.jsx)(t.code,{children:`variant`}),` maps onto the
semantic typography scale defined in `,(0,p.jsx)(t.code,{children:`tokens.css`}),` (`,(0,p.jsx)(t.code,{children:`text-h-*`}),`, `,(0,p.jsx)(t.code,{children:`text-p-*`}),`,
`,(0,p.jsx)(t.code,{children:`text-label-*`}),`) rather than Tailwind's default `,(0,p.jsx)(t.code,{children:`xs/sm/base/lg`}),` scale, and
`,(0,p.jsx)(t.code,{children:`color`}),` maps onto the semantic `,(0,p.jsx)(t.code,{children:`text-fg-*`}),` aliases in `,(0,p.jsx)(t.code,{children:`theme.css`}),` so it
adapts automatically under `,(0,p.jsx)(t.code,{children:`.dark`}),`.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsxs)(t.h2,{id:`polymorphism-via-as`,children:[`Polymorphism via `,(0,p.jsx)(t.code,{children:`as`})]}),`
`,(0,p.jsxs)(t.p,{children:[`Each `,(0,p.jsx)(t.code,{children:`variant`}),` has a sensible default element (e.g. `,(0,p.jsx)(t.code,{children:`h-lg`}),` renders an
`,(0,p.jsx)(t.code,{children:`<h1>`}),`, `,(0,p.jsx)(t.code,{children:`p-std`}),` renders a `,(0,p.jsx)(t.code,{children:`<p>`}),`, `,(0,p.jsx)(t.code,{children:`label-md`}),` renders a `,(0,p.jsx)(t.code,{children:`<span>`}),`), but any
element or component can be substituted with the `,(0,p.jsx)(t.code,{children:`as`}),` prop:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<Text as="label" variant="label-std" htmlFor="email">
  Email address
</Text>
`})}),`
`,(0,p.jsxs)(t.p,{children:[`The ref always points at the actual rendered element, whatever `,(0,p.jsx)(t.code,{children:`as`}),`
resolves to.`]}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`truncation`,children:`Truncation`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`truncate`}),` clamps to a single line with an ellipsis. `,(0,p.jsx)(t.code,{children:`clamp`}),` clamps to any
number of lines instead (via CSS line-clamp) — useful for card summaries
or list previews where a fixed number of lines reads better than a single
truncated one. `,(0,p.jsx)(t.code,{children:`clamp`}),` is ignored when `,(0,p.jsx)(t.code,{children:`truncate`}),` is also set.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<Text clamp={2}>A longer paragraph that gets cut off after two lines...</Text>
`})}),`
`,(0,p.jsx)(t.h2,{id:`overriding-styles`,children:`Overriding styles`}),`
`,(0,p.jsxs)(t.p,{children:[`Because `,(0,p.jsx)(t.code,{children:`Text`}),` resolves its `,(0,p.jsx)(t.code,{children:`className`}),` prop through the same `,(0,p.jsx)(t.code,{children:`cn()`}),` merge
utility the rest of the library uses, an app-level override always wins
over the variant defaults:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<Text className="italic underline">Custom styled text</Text>
`})}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`Text`}),` forwards its ref and spreads all native attributes for whatever
element it renders as, so it composes with forms, tooltips, and any other
component in this library without a separate "as child" API.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};
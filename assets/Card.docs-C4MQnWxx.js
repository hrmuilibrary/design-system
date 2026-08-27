import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BgbIOHHe.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-Nh8h27_7.js";import{t as c}from"./mdx-react-shim-Db0aMZLS.js";import{n as l,t as u}from"./Card.stories-H9nuj5VC.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`card`,children:`Card`}),`
`,(0,p.jsxs)(t.p,{children:[`A container for grouping related content. Styled with plain Tailwind
utility classes resolved from `,(0,p.jsx)(t.code,{children:`variant`}),`/`,(0,p.jsx)(t.code,{children:`padding`}),` lookup tables — no
variant-authoring abstraction on top, so consumer apps can override any
part of it via `,(0,p.jsx)(t.code,{children:`className`}),` (merged with `,(0,p.jsx)(t.code,{children:`tailwind-merge`}),`, last conflicting
class wins) rather than fighting a pre-hidden style layer.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`header-and-footer-slots`,children:`Header and footer slots`}),`
`,(0,p.jsxs)(t.p,{children:[`Passing `,(0,p.jsx)(t.code,{children:`header`}),` and/or `,(0,p.jsx)(t.code,{children:`footer`}),` renders separate regions divided by a
subtle border, each padded independently using the same `,(0,p.jsx)(t.code,{children:`padding`}),` value as
the body:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<Card
  header={<h3 className="text-h-xl text-fg-default">Card title</h3>}
  footer={<p className="text-label-md text-fg-secondary">Updated 2 days ago</p>}
>
  Body content
</Card>
`})}),`
`,(0,p.jsxs)(t.p,{children:[`When neither slot is used, `,(0,p.jsx)(t.code,{children:`padding`}),` is applied directly to the card's root
element instead.`]}),`
`,(0,p.jsx)(t.h2,{id:`overriding-styles`,children:`Overriding styles`}),`
`,(0,p.jsxs)(t.p,{children:[`Because `,(0,p.jsx)(t.code,{children:`Card`}),` resolves its `,(0,p.jsx)(t.code,{children:`className`}),` prop through the same `,(0,p.jsx)(t.code,{children:`cn()`}),` merge
utility the rest of the library uses, an app-level override always wins
over the variant defaults:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<Card className="border-brand-500 rounded-2xl">Custom card</Card>
`})}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`Card`}),` forwards its ref and spreads all native `,(0,p.jsx)(t.code,{children:`<div>`}),` props, so it
composes with any other component in this library without a separate "as
child" API.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};
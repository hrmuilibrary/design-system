import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-04k_LSg4.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-hGSMUV55.js";import{t as c}from"./mdx-react-shim-DZJTKzDp.js";import{n as l,t as u}from"./Accordion.stories-CRO99rGb.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`accordion`,children:`Accordion`}),`
`,(0,p.jsxs)(t.p,{children:[`Vertically stacked, collapsible sections. `,(0,p.jsx)(t.code,{children:`Accordion`}),` owns the open/closed
state for its `,(0,p.jsx)(t.code,{children:`AccordionItem`}),` children via context — items don't manage
state themselves, they just read whether their `,(0,p.jsx)(t.code,{children:`value`}),` is in the open set
and call `,(0,p.jsx)(t.code,{children:`toggle`}),` on click.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`single-vs-multiple`,children:`Single vs. multiple`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`type="single"`}),` (the default) keeps at most one item open — opening a new
item closes whichever one was open. `,(0,p.jsx)(t.code,{children:`type="multiple"`}),` allows any number of
items open at once, each toggling independently.`]}),`
`,(0,p.jsx)(t.h2,{id:`controlled-vs-uncontrolled`,children:`Controlled vs. uncontrolled`}),`
`,(0,p.jsxs)(t.p,{children:[`Uncontrolled usage passes `,(0,p.jsx)(t.code,{children:`defaultValue`}),` (a string for `,(0,p.jsx)(t.code,{children:`single`}),`, a string
array for `,(0,p.jsx)(t.code,{children:`multiple`}),`) and `,(0,p.jsx)(t.code,{children:`Accordion`}),` tracks open state internally.
Controlled usage passes both `,(0,p.jsx)(t.code,{children:`value`}),` and `,(0,p.jsx)(t.code,{children:`onValueChange`}),`, and the consumer
owns the state entirely — same shape as an uncontrolled/controlled form
input.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`const [value, setValue] = useState('billing');

<Accordion value={value} onValueChange={(next) => setValue(next as string)}>
  <AccordionItem value="billing" title="How does billing work?">
    ...
  </AccordionItem>
</Accordion>
`})}),`
`,(0,p.jsx)(t.h2,{id:`icons--disabled-items`,children:`Icons & disabled items`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`AccordionItem`}),` accepts an optional `,(0,p.jsx)(t.code,{children:`icon`}),` node rendered before the title,
and a `,(0,p.jsx)(t.code,{children:`disabled`}),` flag that blocks toggling and dims the trigger — same
`,(0,p.jsx)(t.code,{children:`disabled:opacity-50 disabled:cursor-not-allowed`}),` treatment used elsewhere
in the library.`]}),`
`,(0,p.jsx)(t.h2,{id:`animation`,children:`Animation`}),`
`,(0,p.jsxs)(t.p,{children:[`Panels animate open/closed by default (`,(0,p.jsx)(t.code,{children:`animated={true}`}),` on `,(0,p.jsx)(t.code,{children:`Accordion`}),`,
applying to every item) using a CSS-only `,(0,p.jsx)(t.code,{children:`grid-template-rows`}),` transition —
no JS height measurement, so it keeps following content that changes size
while a panel is open. It respects `,(0,p.jsx)(t.code,{children:`prefers-reduced-motion`}),` automatically.
Pass `,(0,p.jsx)(t.code,{children:`animated={false}`}),` to restore the pre-1.x instant toggle, which also
swaps back to a plain `,(0,p.jsx)(t.code,{children:`hidden`}),` attribute on the panel instead of the
animated grid wrapper.`]}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`showDivider`}),` renders a `,(0,p.jsx)(t.code,{children:`Divider`}),` between each item's header and its
content.`]}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`overriding-styles`,children:`Overriding styles`}),`
`,(0,p.jsxs)(t.p,{children:[`Both `,(0,p.jsx)(t.code,{children:`Accordion`}),` and `,(0,p.jsx)(t.code,{children:`AccordionItem`}),` resolve their `,(0,p.jsx)(t.code,{children:`className`}),` prop through
the same `,(0,p.jsx)(t.code,{children:`cn()`}),` merge utility the rest of the library uses, so an
app-level override always wins over the component defaults:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<Accordion className="border-brand-500 shadow-z3">
  <AccordionItem value="billing" title="How does billing work?">
    ...
  </AccordionItem>
</Accordion>
`})}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`Accordion`}),` forwards its ref to the root `,(0,p.jsx)(t.code,{children:`<div>`}),` and `,(0,p.jsx)(t.code,{children:`AccordionItem`}),`
forwards its ref to its own root `,(0,p.jsx)(t.code,{children:`<div>`}),`; both spread all native `,(0,p.jsx)(t.code,{children:`<div>`}),`
attributes, so they compose with the rest of the library without a
separate "as child" API. `,(0,p.jsx)(t.code,{children:`AccordionItem`}),` must always be rendered inside an
`,(0,p.jsx)(t.code,{children:`Accordion`}),` — it reads open state from context and throws if that context
is missing.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};
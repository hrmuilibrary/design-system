import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-CwcXNU-m.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-BGcV2XGT.js";import{t as c}from"./mdx-react-shim-C9laf0wr.js";import{n as l,t as u}from"./Tooltip.stories-Bpq9UHEX.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`tooltip`,children:`Tooltip`}),`
`,(0,p.jsxs)(t.p,{children:[`Shows a small contextual bubble next to a single trigger element on hover
or focus. `,(0,p.jsx)(t.code,{children:`Tooltip`}),` clones its `,(0,p.jsx)(t.code,{children:`children`}),` to attach `,(0,p.jsx)(t.code,{children:`onMouseEnter`}),`,
`,(0,p.jsx)(t.code,{children:`onMouseLeave`}),`, `,(0,p.jsx)(t.code,{children:`onFocus`}),`, and `,(0,p.jsx)(t.code,{children:`onBlur`}),` handlers (plus `,(0,p.jsx)(t.code,{children:`aria-describedby`}),`
while open) — there's no separate wrapper element around the trigger, so
the trigger keeps its own layout and event handlers, which `,(0,p.jsx)(t.code,{children:`Tooltip`}),`
composes with rather than replaces.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`sides`,children:`Sides`}),`
`,(0,p.jsx)(t.p,{children:`The bubble can be positioned on any of the four sides of the trigger, with
a small arrow pointing back at it.`}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`delay`,children:`Delay`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`delay`}),` (default `,(0,p.jsx)(t.code,{children:`150`}),`ms) debounces the hover-in so quick mouse passes
over the trigger don't flash a tooltip. Hiding is immediate.`]}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`Tooltip`}),` requires exactly one `,(0,p.jsx)(t.code,{children:`ReactElement`}),` as `,(0,p.jsx)(t.code,{children:`children`}),` — it clones
that element rather than rendering its own trigger markup, so it composes
with `,(0,p.jsx)(t.code,{children:`Button`}),` or any other focusable/hoverable element without an extra
DOM wrapper around the trigger itself. If `,(0,p.jsx)(t.code,{children:`children`}),` isn't a valid
element, `,(0,p.jsx)(t.code,{children:`Tooltip`}),` renders it as-is with no tooltip behavior attached.`]}),`
`,(0,p.jsx)(t.h2,{id:`overriding-styles`,children:`Overriding styles`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`className`}),` merges (via `,(0,p.jsx)(t.code,{children:`cn()`}),`) onto the tooltip bubble itself, so an
app-level override always wins over the size defaults:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<Tooltip content="Branded tooltip" className="bg-brand-500 text-white">
  <Button>Hover me</Button>
</Tooltip>
`})})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};
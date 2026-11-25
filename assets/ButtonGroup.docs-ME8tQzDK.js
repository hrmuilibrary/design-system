import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./iframe-BB53nw3I.js";import{i as n}from"./react-DVveGl4B.js";import{c as r,i,l as a,s as o,u as s}from"./blocks-Dx1pA9It.js";import{t as c}from"./mdx-react-shim-CGjK1Z0W.js";import{n as l,t as u}from"./ButtonGroup.stories-C6tpB14s.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`buttongroup`,children:`ButtonGroup`}),`
`,(0,p.jsxs)(t.p,{children:[`Visually joins a row (or column) of `,(0,p.jsx)(t.code,{children:`Button`}),`s into a single connected
control — the shared `,(0,p.jsx)(t.code,{children:`role="group"`}),` container removes rounding between
adjacent buttons and collapses their shared border, while keeping the
first/last child rounded on the outer edge only.`]}),`
`,(0,p.jsx)(r,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(i,{}),`
`,(0,p.jsx)(t.h2,{id:`orientation`,children:`Orientation`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`ButtonGroup`}),` is layout-only: it doesn't clone or configure its children,
so any interactive element (not just `,(0,p.jsx)(t.code,{children:`Button`}),`) can be placed inside it.
Each child keeps its own `,(0,p.jsx)(t.code,{children:`hover`}),`/`,(0,p.jsx)(t.code,{children:`focus-visible`}),` state raised above its
neighbors via `,(0,p.jsx)(t.code,{children:`z-10`}),`, so overlapping borders don't clip a focus ring or
hover background.`]}),`
`,(0,p.jsx)(t.h2,{id:`overriding-styles`,children:`Overriding styles`}),`
`,(0,p.jsxs)(t.p,{children:[`Like every other component in this library, `,(0,p.jsx)(t.code,{children:`ButtonGroup`}),` resolves its
`,(0,p.jsx)(t.code,{children:`className`}),` prop through `,(0,p.jsx)(t.code,{children:`cn()`}),`, so an app-level class always wins over
the defaults:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<ButtonGroup className="shadow-z3">
  <Button variant="secondary">One</Button>
  <Button variant="secondary">Two</Button>
</ButtonGroup>
`})})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),s(),l()}))();export{f as default};
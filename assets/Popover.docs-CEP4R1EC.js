import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-e4ZNzK2_.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-bfqnlyNY.js";import{t as c}from"./mdx-react-shim-D5FwzP1_.js";import{n as l,t as u}from"./Popover.stories-BShpS1is.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`popover`,children:`Popover`}),`
`,(0,p.jsxs)(t.p,{children:[`A click-triggered floating bubble that can host `,(0,p.jsx)(t.strong,{children:`interactive content`}),` —
forms, buttons, links — unlike `,(0,p.jsx)(t.code,{children:`Tooltip`}),`, whose bubble is
`,(0,p.jsx)(t.code,{children:`pointer-events-none`}),` and only ever shows static text on hover.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`positioning`,children:`Positioning`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`side`}),` (`,(0,p.jsx)(t.code,{children:`top`}),`/`,(0,p.jsx)(t.code,{children:`bottom`}),`/`,(0,p.jsx)(t.code,{children:`left`}),`/`,(0,p.jsx)(t.code,{children:`right`}),`) and `,(0,p.jsx)(t.code,{children:`align`}),` (`,(0,p.jsx)(t.code,{children:`start`}),`/`,(0,p.jsx)(t.code,{children:`center`}),`/`,(0,p.jsx)(t.code,{children:`end`}),`)
give 12 placement combinations. The bubble portals to `,(0,p.jsx)(t.code,{children:`document.body`}),`
with `,(0,p.jsx)(t.code,{children:`position: fixed`}),`, so it's never clipped by an `,(0,p.jsx)(t.code,{children:`overflow: hidden`}),` or
`,(0,p.jsx)(t.code,{children:`overflow: auto`}),` ancestor. It auto-flips to the opposite side on the same
axis when there isn't room (disable with `,(0,p.jsx)(t.code,{children:`flip={false}`}),`) and clamps on
the cross axis so it always stays inside the viewport.`]}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`trigger`,children:`Trigger`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`children`}),` must be a single element — `,(0,p.jsx)(t.code,{children:`Popover`}),` clones it to attach an
`,(0,p.jsx)(t.code,{children:`onClick`}),` (composed with any the child already has; the toggle is skipped
if that handler calls `,(0,p.jsx)(t.code,{children:`preventDefault()`}),`) plus `,(0,p.jsx)(t.code,{children:`aria-haspopup="dialog"`}),`
and `,(0,p.jsx)(t.code,{children:`aria-expanded`}),`.`]}),`
`,(0,p.jsx)(t.h2,{id:`dismissal`,children:`Dismissal`}),`
`,(0,p.jsxs)(t.p,{children:[`The popover closes on: an outside click, `,(0,p.jsx)(t.code,{children:`Escape`}),`, or any ancestor
scrolling (`,(0,p.jsx)(t.code,{children:`closeOnScroll`}),`, default `,(0,p.jsx)(t.code,{children:`true`}),`). There is `,(0,p.jsx)(t.strong,{children:`no focus trap`}),` in
this version — `,(0,p.jsx)(t.code,{children:`autoFocus`}),` moves focus into the bubble on open and
restores it to the trigger on close, but Tab can still leave the bubble.
Use it for simple interactive content, not multi-step flows.`]}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`Popover`}),` doesn't forward a ref of its own — it clones `,(0,p.jsx)(t.code,{children:`children`}),` to
attach the trigger's ref internally for position measurement, and the
portaled bubble is an implementation detail, not a ref target.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};
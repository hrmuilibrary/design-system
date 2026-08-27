import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BgbIOHHe.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-Nh8h27_7.js";import{t as c}from"./mdx-react-shim-Db0aMZLS.js";import{n as l,t as u}from"./Drawer.stories-C5ODM7ZF.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`drawer`,children:`Drawer`}),`
`,(0,p.jsxs)(t.p,{children:[`A panel that slides in from an edge of the viewport to show supplementary
content — forms, details, filters — without navigating away from the page.
It is a controlled component: the consumer owns `,(0,p.jsx)(t.code,{children:`open`}),` state and is notified
via `,(0,p.jsx)(t.code,{children:`onClose`}),` when the drawer wants to close (Escape key, overlay click, or
the built-in close button); it does not close itself.`]}),`
`,(0,p.jsxs)(t.p,{children:[`Rendered through `,(0,p.jsx)(t.code,{children:`createPortal`}),` into `,(0,p.jsx)(t.code,{children:`document.body`}),`, so it always overlays
the rest of the page regardless of where it's mounted in the tree, and it
locks `,(0,p.jsx)(t.code,{children:`document.body`}),` scroll and moves focus onto the panel while open,
restoring the previously focused element on close.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`behavior`,children:`Behavior`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`Controlled open state`}),` — `,(0,p.jsx)(t.code,{children:`open`}),` and `,(0,p.jsx)(t.code,{children:`onClose`}),` are required; the
component renders nothing (`,(0,p.jsx)(t.code,{children:`null`}),`) when `,(0,p.jsx)(t.code,{children:`open`}),` is `,(0,p.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`Dismissal`}),` — Escape key, clicking the overlay backdrop (unless
`,(0,p.jsx)(t.code,{children:`closeOnOverlayClick`}),` is `,(0,p.jsx)(t.code,{children:`false`}),`), or the close button (hidden via
`,(0,p.jsx)(t.code,{children:`showClose={false}`}),`) all call `,(0,p.jsx)(t.code,{children:`onClose`}),`.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`Side & size`}),` — `,(0,p.jsx)(t.code,{children:`side`}),` picks the edge (`,(0,p.jsx)(t.code,{children:`right`}),` default, `,(0,p.jsx)(t.code,{children:`left`}),`, `,(0,p.jsx)(t.code,{children:`top`}),`,
`,(0,p.jsx)(t.code,{children:`bottom`}),`); `,(0,p.jsx)(t.code,{children:`size`}),` maps to a fixed width for left/right or a fixed height
for top/bottom.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`Focus & scroll`}),` — body scroll is locked while open, and the panel
receives focus on open, restoring focus to the previously focused element
on close.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`Animation`}),` — the drawer slides/fades in and out by default
(`,(0,p.jsx)(t.code,{children:`animated={true}`}),`), staying mounted through its exit transition instead
of unmounting the instant `,(0,p.jsx)(t.code,{children:`open`}),` goes `,(0,p.jsx)(t.code,{children:`false`}),`. Body scroll stays locked
for the full exit, but focus is restored immediately when `,(0,p.jsx)(t.code,{children:`open`}),` becomes
`,(0,p.jsx)(t.code,{children:`false`}),` rather than waiting for the transition to finish. Respects
`,(0,p.jsx)(t.code,{children:`prefers-reduced-motion`}),` automatically. Pass `,(0,p.jsx)(t.code,{children:`animated={false}`}),` to
restore the pre-1.x synchronous mount/unmount — useful if a test asserts
the drawer is gone immediately after `,(0,p.jsx)(t.code,{children:`open`}),` flips.`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`headeractions`,children:`headerActions`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`headerActions`}),` renders extra controls in the header, to the left of the
close button — e.g. a back or pin button. It's a single `,(0,p.jsx)(t.code,{children:`ReactNode`}),` slot
rather than named props for specific buttons, so it composes with anything.`]}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`overriding-styles`,children:`Overriding styles`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`className`}),` is merged onto the panel via `,(0,p.jsx)(t.code,{children:`cn()`}),`, so an app-level override
always wins over the defaults:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<Drawer open={open} onClose={() => setOpen(false)} className="bg-bg-container">
  ...
</Drawer>
`})}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`Drawer`}),` forwards its ref to the panel `,(0,p.jsx)(t.code,{children:`<div>`}),`, so it composes with anything
in this library that expects a DOM node ref (e.g. focus-trap or
click-outside utilities) without a separate "as child" API.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};
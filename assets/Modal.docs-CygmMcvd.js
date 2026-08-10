import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-04k_LSg4.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-hGSMUV55.js";import{t as c}from"./mdx-react-shim-DZJTKzDp.js";import{n as l,t as u}from"./Modal.stories-7r689GPb.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`modal`,children:`Modal`}),`
`,(0,p.jsxs)(t.p,{children:[`A dialog rendered into `,(0,p.jsx)(t.code,{children:`document.body`}),` via `,(0,p.jsx)(t.code,{children:`createPortal`}),`, layered above the
rest of the page with a click-to-dismiss overlay. `,(0,p.jsx)(t.code,{children:`Modal`}),` is fully
controlled — it owns no open/closed state of its own — so the consumer
drives visibility with `,(0,p.jsx)(t.code,{children:`open`}),` and reacts to dismissal via `,(0,p.jsx)(t.code,{children:`onClose`}),`
(Escape key, overlay click, or the close button all call it the same way).`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`behavior`,children:`Behavior`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`Portal`}),` — content renders into `,(0,p.jsx)(t.code,{children:`document.body`}),`, not in place, so it
isn't affected by an ancestor's `,(0,p.jsx)(t.code,{children:`overflow`}),`, `,(0,p.jsx)(t.code,{children:`transform`}),`, or `,(0,p.jsx)(t.code,{children:`z-index`}),`.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`Escape & overlay dismissal`}),` — pressing Escape or clicking the backdrop
calls `,(0,p.jsx)(t.code,{children:`onClose`}),`; set `,(0,p.jsx)(t.code,{children:`closeOnOverlayClick={false}`}),` to require an explicit
action (e.g. the close button or a footer button) instead.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`Scroll lock`}),` — `,(0,p.jsx)(t.code,{children:`document.body`}),`'s `,(0,p.jsx)(t.code,{children:`overflow`}),` is set to `,(0,p.jsx)(t.code,{children:`hidden`}),` while
open and restored on close.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`Initial focus`}),` — the panel receives focus when the modal opens and the
previously focused element regains it on close. This is a one-time focus
move, not a full focus trap (Tab can still leave the panel).`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`Nothing rendered while closed`}),` — `,(0,p.jsx)(t.code,{children:`open={false}`}),` returns `,(0,p.jsx)(t.code,{children:`null`}),` before
the portal call, so no hidden DOM is left behind between opens.`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`header-body--footer`,children:`Header, body & footer`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`title`}),`/`,(0,p.jsx)(t.code,{children:`description`}),` render as a heading block with the close button
(when `,(0,p.jsx)(t.code,{children:`showClose`}),` is true); omit both to render a bare content panel.
`,(0,p.jsx)(t.code,{children:`children`}),` renders in a body region that scrolls independently
(`,(0,p.jsx)(t.code,{children:`overflow-y-auto`}),`) when content exceeds `,(0,p.jsx)(t.code,{children:`max-h-[90vh]`}),`, keeping the header
and `,(0,p.jsx)(t.code,{children:`footer`}),` pinned. `,(0,p.jsx)(t.code,{children:`footer`}),` renders in its own bordered row and is where
action buttons (e.g. Cancel/Confirm) belong — see `,(0,p.jsx)(t.code,{children:`WithFooter`}),` below.`]}),`
`,(0,p.jsx)(t.h2,{id:`sizing`,children:`Sizing`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`size`}),` maps to a `,(0,p.jsx)(t.code,{children:`max-w-*`}),` on the panel: `,(0,p.jsx)(t.code,{children:`sm`}),` → `,(0,p.jsx)(t.code,{children:`max-w-sm`}),`, `,(0,p.jsx)(t.code,{children:`md`}),` →
`,(0,p.jsx)(t.code,{children:`max-w-md`}),`, `,(0,p.jsx)(t.code,{children:`lg`}),` → `,(0,p.jsx)(t.code,{children:`max-w-lg`}),`, `,(0,p.jsx)(t.code,{children:`xl`}),` → `,(0,p.jsx)(t.code,{children:`max-w-2xl`}),`, `,(0,p.jsx)(t.code,{children:`2xl`}),` → `,(0,p.jsx)(t.code,{children:`max-w-4xl`}),`. The
panel is always `,(0,p.jsx)(t.code,{children:`w-full`}),` up to that cap, so it stays responsive on narrow
viewports.`]}),`
`,(0,p.jsx)(t.h2,{id:`overriding-styles`,children:`Overriding styles`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`className`}),` merges onto the panel (not the fixed overlay wrapper) through
the same `,(0,p.jsx)(t.code,{children:`cn()`}),` utility the rest of the library uses, so an app-level
override always wins over the defaults:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<Modal
  open={open}
  onClose={onClose}
  className="bg-bg-container border-2 border-brand-500"
>
  ...
</Modal>
`})}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`Modal`}),` forwards its ref to the panel element (the styled dialog box, not
the fixed-position overlay wrapper around it), so consumers can call
`,(0,p.jsx)(t.code,{children:`.focus()`}),` or measure it directly. Because `,(0,p.jsx)(t.code,{children:`Modal`}),` is controlled, wiring it
up to a trigger looks like:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open modal</Button>
<Modal open={open} onClose={() => setOpen(false)} title="Confirm">
  Are you sure?
</Modal>
`})})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};
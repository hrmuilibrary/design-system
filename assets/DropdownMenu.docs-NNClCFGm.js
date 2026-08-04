import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BgCNYJC5.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-CpjVkczv.js";import{t as c}from"./mdx-react-shim-peawkiiJ.js";import{n as l,t as u}from"./DropdownMenu.stories-BVTPbK4a.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`dropdownmenu`,children:`DropdownMenu`}),`
`,(0,p.jsxs)(t.p,{children:[`Reveals a floating list of actions or options anchored to a trigger.
`,(0,p.jsx)(t.code,{children:`DropdownMenu`}),` is a compound component: it owns the open/closed state via
context and shares it with `,(0,p.jsx)(t.code,{children:`DropdownTrigger`}),` and `,(0,p.jsx)(t.code,{children:`DropdownContent`}),` — the
sub-components don't manage state themselves, they just read the current
state and call back into it.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[`Render a `,(0,p.jsx)(t.code,{children:`DropdownTrigger`}),` wrapping a single element (any component that
accepts `,(0,p.jsx)(t.code,{children:`onClick`}),`, e.g. `,(0,p.jsx)(t.code,{children:`Button`}),`), followed by a `,(0,p.jsx)(t.code,{children:`DropdownContent`}),` holding
`,(0,p.jsx)(t.code,{children:`DropdownItem`}),`s, optional `,(0,p.jsx)(t.code,{children:`DropdownSeparator`}),`s, and an optional
`,(0,p.jsx)(t.code,{children:`DropdownLabel`}),`.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<DropdownMenu>
  <DropdownTrigger>
    <Button variant="secondary">Options</Button>
  </DropdownTrigger>
  <DropdownContent>
    <DropdownItem>Edit</DropdownItem>
    <DropdownItem destructive>Delete</DropdownItem>
  </DropdownContent>
</DropdownMenu>
`})}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`DropdownTrigger`}),` clones its child element rather than rendering its own
DOM node: it attaches the click handler that toggles the menu (composed
with any `,(0,p.jsx)(t.code,{children:`onClick`}),` the child already has — the toggle is skipped if that
handler calls `,(0,p.jsx)(t.code,{children:`preventDefault()`}),`) plus `,(0,p.jsx)(t.code,{children:`aria-haspopup="menu"`}),` and
`,(0,p.jsx)(t.code,{children:`aria-expanded`}),`, and points an internal ref at the child so
`,(0,p.jsx)(t.code,{children:`DropdownContent`}),` can tell trigger clicks apart from outside clicks.
Because of this, `,(0,p.jsx)(t.code,{children:`DropdownTrigger`}),` accepts exactly one child element and
has no styling or `,(0,p.jsx)(t.code,{children:`dataTestId`}),` of its own — put `,(0,p.jsx)(t.code,{children:`dataTestId`}),` on the child
being wrapped instead.`]}),`
`,(0,p.jsx)(t.h2,{id:`controlled-vs-uncontrolled`,children:`Controlled vs. uncontrolled`}),`
`,(0,p.jsxs)(t.p,{children:[`Uncontrolled usage passes nothing (or `,(0,p.jsx)(t.code,{children:`defaultOpen`}),`) and `,(0,p.jsx)(t.code,{children:`DropdownMenu`}),`
tracks the open state internally, closing automatically whenever a
`,(0,p.jsx)(t.code,{children:`DropdownItem`}),` is selected, `,(0,p.jsx)(t.code,{children:`Escape`}),` is pressed, or a click lands outside
the trigger and content. Controlled usage passes both `,(0,p.jsx)(t.code,{children:`open`}),` and
`,(0,p.jsx)(t.code,{children:`onOpenChange`}),`, and the consumer owns the state entirely — same shape as
an uncontrolled/controlled form input.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`const [open, setOpen] = useState(false);

<DropdownMenu open={open} onOpenChange={setOpen}>
  <DropdownTrigger>
    <Button variant="secondary">Options</Button>
  </DropdownTrigger>
  <DropdownContent>
    <DropdownItem onSelect={() => setOpen(false)}>Edit</DropdownItem>
  </DropdownContent>
</DropdownMenu>;
`})}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`items`,children:`Items`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`DropdownItem`}),` accepts an optional `,(0,p.jsx)(t.code,{children:`icon`}),` node (rendered before the
label), a `,(0,p.jsx)(t.code,{children:`shortcut`}),` node (e.g. a keyboard shortcut, rendered after the
label), a `,(0,p.jsx)(t.code,{children:`destructive`}),` flag that recolors the item into the danger
palette, and a `,(0,p.jsx)(t.code,{children:`checked`}),` prop that renders a leading check mark when
`,(0,p.jsx)(t.code,{children:`true`}),` and reserves the same space (unchecked) when `,(0,p.jsx)(t.code,{children:`false`}),` — useful for
a small set of mutually exclusive or toggleable options. Leave `,(0,p.jsx)(t.code,{children:`checked`}),`
`,(0,p.jsx)(t.code,{children:`undefined`}),` for items with no check state at all. `,(0,p.jsx)(t.code,{children:`onSelect`}),` fires after
any native `,(0,p.jsx)(t.code,{children:`onClick`}),`, and the menu closes right after — a native
`,(0,p.jsx)(t.code,{children:`disabled`}),` attribute blocks both.`]}),`
`,(0,p.jsx)(t.h2,{id:`overriding-styles`,children:`Overriding styles`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`DropdownContent`}),`, `,(0,p.jsx)(t.code,{children:`DropdownItem`}),`, `,(0,p.jsx)(t.code,{children:`DropdownSeparator`}),`, and
`,(0,p.jsx)(t.code,{children:`DropdownLabel`}),` all resolve their `,(0,p.jsx)(t.code,{children:`className`}),` prop through the same
`,(0,p.jsx)(t.code,{children:`cn()`}),` merge utility the rest of the library uses, so an app-level
override always wins over the component defaults.`]}),`
`,(0,p.jsx)(t.h2,{id:`ref-forwarding`,children:`Ref forwarding`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`DropdownMenu`}),`, `,(0,p.jsx)(t.code,{children:`DropdownContent`}),`, `,(0,p.jsx)(t.code,{children:`DropdownSeparator`}),`, and
`,(0,p.jsx)(t.code,{children:`DropdownLabel`}),` forward their ref to their own root `,(0,p.jsx)(t.code,{children:`<div>`}),`; `,(0,p.jsx)(t.code,{children:`DropdownItem`}),`
forwards its ref to its root `,(0,p.jsx)(t.code,{children:`<button>`}),`. All four spread their remaining
native attributes. `,(0,p.jsx)(t.code,{children:`DropdownTrigger`}),` has no root node of its own to
forward a ref to — it clones its child instead. `,(0,p.jsx)(t.code,{children:`DropdownTrigger`}),`,
`,(0,p.jsx)(t.code,{children:`DropdownContent`}),`, `,(0,p.jsx)(t.code,{children:`DropdownItem`}),`, `,(0,p.jsx)(t.code,{children:`DropdownSeparator`}),`, and `,(0,p.jsx)(t.code,{children:`DropdownLabel`}),`
must always be rendered inside a `,(0,p.jsx)(t.code,{children:`DropdownMenu`}),` — they read state from
context and throw if that context is missing.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};
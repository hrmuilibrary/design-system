import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-frnzeJW9.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-D3700PHj.js";import{t as c}from"./mdx-react-shim-BeKI_iHL.js";import{n as l,t as u}from"./Sidebar.stories-CZKrjg9h.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`sidebar`,children:`Sidebar`}),`
`,(0,p.jsxs)(t.p,{children:[`A collapsible navigation rail. `,(0,p.jsx)(t.code,{children:`Sidebar`}),` owns the collapsed/expanded state
and provides it via context; `,(0,p.jsx)(t.code,{children:`SidebarItem`}),` reads that context to know
whether to hide its label, badge, and expand chevron — items don't manage
the collapsed state themselves.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`collapsed-state`,children:`Collapsed state`}),`
`,(0,p.jsxs)(t.p,{children:[`Uncontrolled usage passes `,(0,p.jsx)(t.code,{children:`defaultCollapsed`}),` and `,(0,p.jsx)(t.code,{children:`Sidebar`}),` tracks the
collapsed/expanded state internally, toggled by the built-in header button.
Controlled usage passes both `,(0,p.jsx)(t.code,{children:`collapsed`}),` and `,(0,p.jsx)(t.code,{children:`onCollapsedChange`}),`, and the
consumer owns the state entirely — same shape as an uncontrolled/controlled
form input.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`const [collapsed, setCollapsed] = useState(false);

<Sidebar collapsed={collapsed} onCollapsedChange={setCollapsed}>
  <SidebarItem icon={<Home className="size-4" />} label="Home" active />
</Sidebar>;
`})}),`
`,(0,p.jsx)(t.h2,{id:`nested-items`,children:`Nested items`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`SidebarItem`}),` accepts nested `,(0,p.jsx)(t.code,{children:`SidebarItem`}),` children, rendered as a
collapsible group below it and toggled open on click (or expanded by
default when `,(0,p.jsx)(t.code,{children:`active`}),` is set). Nesting is skipped visually while the
sidebar itself is collapsed.`]}),`
`,(0,p.jsx)(t.h2,{id:`links-vs-buttons`,children:`Links vs. buttons`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`SidebarItem`}),` renders an `,(0,p.jsx)(t.code,{children:`<a>`}),` when `,(0,p.jsx)(t.code,{children:`href`}),` is provided, or a `,(0,p.jsx)(t.code,{children:`<button>`}),`
otherwise — pick whichever matches whether the item navigates to a route or
just triggers a click handler.`]}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`overriding-styles`,children:`Overriding styles`}),`
`,(0,p.jsxs)(t.p,{children:[`Both `,(0,p.jsx)(t.code,{children:`Sidebar`}),` and `,(0,p.jsx)(t.code,{children:`SidebarItem`}),` resolve their `,(0,p.jsx)(t.code,{children:`className`}),` prop through the
same `,(0,p.jsx)(t.code,{children:`cn()`}),` merge utility the rest of the library uses, so an app-level
override always wins over the component defaults:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<Sidebar className="border-brand-500 shadow-z3">
  <SidebarItem icon={<Home className="size-4" />} label="Home" />
</Sidebar>
`})}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`Sidebar`}),` forwards its ref to the root `,(0,p.jsx)(t.code,{children:`<aside>`}),` and spreads all native
`,(0,p.jsx)(t.code,{children:`<aside>`}),` attributes. `,(0,p.jsx)(t.code,{children:`SidebarItem`}),` forwards its ref to whichever element it
renders (`,(0,p.jsx)(t.code,{children:`<a>`}),` when `,(0,p.jsx)(t.code,{children:`href`}),` is set, `,(0,p.jsx)(t.code,{children:`<button>`}),` otherwise) and spreads all
remaining native attributes for that element, so both compose with the rest
of the library without a separate "as child" API. `,(0,p.jsx)(t.code,{children:`SidebarItem`}),` falls back
to a no-op collapsed state when rendered outside a `,(0,p.jsx)(t.code,{children:`Sidebar`}),`, rather than
throwing, since standalone usage (e.g. in isolated tests) is reasonable.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};
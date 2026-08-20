import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-HYgm0KbA.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-t2KRTof2.js";import{t as c}from"./mdx-react-shim-BzsLUYLl.js";import{n as l,t as u}from"./Tabs.stories-CgFBs5QQ.js";function d(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`tabs`,children:`Tabs`}),`
`,(0,p.jsxs)(t.p,{children:[`Switches between panels of content. `,(0,p.jsx)(t.code,{children:`Tabs`}),` owns the active-value state via
context and shares it with `,(0,p.jsx)(t.code,{children:`TabList`}),`, `,(0,p.jsx)(t.code,{children:`Tab`}),`, and `,(0,p.jsx)(t.code,{children:`TabPanel`}),` — the
sub-components don't manage state themselves, they just read the current
value and call `,(0,p.jsx)(t.code,{children:`setValue`}),` on click.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`Tabs`}),` is a compound component: render a `,(0,p.jsx)(t.code,{children:`<TabList>`}),` of `,(0,p.jsx)(t.code,{children:`<Tab>`}),` triggers,
followed by one `,(0,p.jsx)(t.code,{children:`<TabPanel>`}),` per tab (matched by `,(0,p.jsx)(t.code,{children:`value`}),`). An inactive
`,(0,p.jsx)(t.code,{children:`TabPanel`}),` unmounts rather than hiding via CSS, so its content isn't kept
alive in the DOM while hidden.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<Tabs defaultValue="profile">
  <TabList>
    <Tab value="profile">Profile</Tab>
    <Tab value="billing">Billing</Tab>
  </TabList>
  <TabPanel value="profile">...</TabPanel>
  <TabPanel value="billing">...</TabPanel>
</Tabs>
`})}),`
`,(0,p.jsx)(t.h2,{id:`controlled-vs-uncontrolled`,children:`Controlled vs. uncontrolled`}),`
`,(0,p.jsxs)(t.p,{children:[`Uncontrolled usage passes `,(0,p.jsx)(t.code,{children:`defaultValue`}),` (or nothing, in which case the
first `,(0,p.jsx)(t.code,{children:`<Tab>`}),`'s value is used) and `,(0,p.jsx)(t.code,{children:`Tabs`}),` tracks the active value
internally. Controlled usage passes both `,(0,p.jsx)(t.code,{children:`value`}),` and `,(0,p.jsx)(t.code,{children:`onValueChange`}),`, and
the consumer owns the state entirely — same shape as an
uncontrolled/controlled form input.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`const [value, setValue] = useState('profile');

<Tabs value={value} onValueChange={setValue}>
  <TabList>
    <Tab value="profile">Profile</Tab>
    <Tab value="billing">Billing</Tab>
  </TabList>
  <TabPanel value="profile">...</TabPanel>
  <TabPanel value="billing">...</TabPanel>
</Tabs>;
`})}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`variant`}),` (on `,(0,p.jsx)(t.code,{children:`Tabs`}),`, inherited by `,(0,p.jsx)(t.code,{children:`TabList`}),` and `,(0,p.jsx)(t.code,{children:`Tab`}),` via context) switches
between `,(0,p.jsx)(t.code,{children:`underline`}),` (default — a brand-colored indicator under the active
tab), `,(0,p.jsx)(t.code,{children:`pills`}),` (a rounded track with a raised active pill), and `,(0,p.jsx)(t.code,{children:`boxed`}),` (a
bordered segmented control).`]}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`icons--badges`,children:`Icons & badges`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`Tab`}),` accepts an optional `,(0,p.jsx)(t.code,{children:`icon`}),` node rendered before the label, and a
`,(0,p.jsx)(t.code,{children:`badge`}),` node (e.g. an unread count) rendered after it — hidden entirely
when `,(0,p.jsx)(t.code,{children:`badge`}),` is `,(0,p.jsx)(t.code,{children:`undefined`}),`, `,(0,p.jsx)(t.code,{children:`null`}),`, or `,(0,p.jsx)(t.code,{children:`false`}),`. By default `,(0,p.jsx)(t.code,{children:`badge`}),` renders
through a fixed-style pill that recolors to match the tab's active state;
pass `,(0,p.jsx)(t.code,{children:`badgeProps`}),` (a subset of `,(0,p.jsx)(t.code,{children:`Badge`}),`'s `,(0,p.jsx)(t.code,{children:`variant`}),`/`,(0,p.jsx)(t.code,{children:`appearance`}),`/`,(0,p.jsx)(t.code,{children:`size`}),`) to
render it through `,(0,p.jsx)(t.code,{children:`Badge`}),` instead with full styling control.`]}),`
`,(0,p.jsx)(t.h2,{id:`trailing-icon-closable-tabs`,children:`Trailing icon (closable tabs)`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`rightIcon`}),` renders a second, independent button after the label — e.g. a
close (X) button — with its own `,(0,p.jsx)(t.code,{children:`onRightIconClick(value)`}),` handler and
`,(0,p.jsx)(t.code,{children:`rightIconLabel`}),` accessible name. It's rendered as a `,(0,p.jsx)(t.em,{children:`sibling`}),` of the tab
button rather than nested inside it (nesting a `,(0,p.jsx)(t.code,{children:`<button>`}),` inside another
`,(0,p.jsx)(t.code,{children:`<button>`}),` is invalid HTML), so clicking it never also activates the tab.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<Tab
  value="report-1"
  rightIcon={<X className="size-3.5" />}
  rightIconLabel="Close"
  onRightIconClick={(value) => closeTab(value)}
>
  Q1 Report
</Tab>
`})}),`
`,(0,p.jsx)(t.h2,{id:`disabled-tabs`,children:`Disabled tabs`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`Tab`}),` accepts a native `,(0,p.jsx)(t.code,{children:`disabled`}),` attribute, which blocks selection and
applies the same `,(0,p.jsx)(t.code,{children:`disabled:opacity-50 disabled:cursor-not-allowed`}),`
treatment used elsewhere in the library. `,(0,p.jsx)(t.code,{children:`Tabs`}),` also accepts a bar-level
`,(0,p.jsx)(t.code,{children:`disabled`}),`, OR'd with each tab's own — use it to disable every tab at once
(e.g. while a page is loading).`]}),`
`,(0,p.jsx)(t.h2,{id:`scrollable-overflow`,children:`Scrollable overflow`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`TabList`}),` accepts `,(0,p.jsx)(t.code,{children:`scrollable`}),`, which switches the bar from wrapping to a
horizontally-scrolling strip (with a fade at both edges) when there are
too many tabs to fit.`]}),`
`,(0,p.jsx)(t.h2,{id:`keyboard-navigation`,children:`Keyboard navigation`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`ArrowLeft`}),`/`,(0,p.jsx)(t.code,{children:`ArrowRight`}),` move between tabs (wrapping at each end) and
activate the newly-focused one immediately (the WAI-ARIA "automatic
activation" pattern); `,(0,p.jsx)(t.code,{children:`Home`}),`/`,(0,p.jsx)(t.code,{children:`End`}),` jump to the first/last tab. Only the
active tab is a keyboard tab-stop — arrowing through the bar moves focus
without adding every tab to the page's tab order.`]}),`
`,(0,p.jsx)(t.h2,{id:`keeping-panels-mounted`,children:`Keeping panels mounted`}),`
`,(0,p.jsxs)(t.p,{children:[`By default an inactive `,(0,p.jsx)(t.code,{children:`TabPanel`}),` unmounts rather than hiding via CSS, so
its content isn't kept alive in the DOM while hidden. Pass `,(0,p.jsx)(t.code,{children:`keepMounted`}),`
on a `,(0,p.jsx)(t.code,{children:`TabPanel`}),` to keep it mounted (toggled via the `,(0,p.jsx)(t.code,{children:`hidden`}),` attribute
instead) — useful for preserving scroll position or in-panel state across
tab switches.`]}),`
`,(0,p.jsx)(t.h2,{id:`overriding-styles`,children:`Overriding styles`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`Tabs`}),`, `,(0,p.jsx)(t.code,{children:`TabList`}),`, `,(0,p.jsx)(t.code,{children:`Tab`}),`, and `,(0,p.jsx)(t.code,{children:`TabPanel`}),` all resolve their `,(0,p.jsx)(t.code,{children:`className`}),` prop
through the same `,(0,p.jsx)(t.code,{children:`cn()`}),` merge utility the rest of the library uses, so an
app-level override always wins over the component defaults.`]}),`
`,(0,p.jsx)(t.h2,{id:`ref-forwarding`,children:`Ref forwarding`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`Tabs`}),`, `,(0,p.jsx)(t.code,{children:`TabList`}),`, and `,(0,p.jsx)(t.code,{children:`TabPanel`}),` forward their ref to their own root
`,(0,p.jsx)(t.code,{children:`<div>`}),`; `,(0,p.jsx)(t.code,{children:`Tab`}),` forwards its ref to its `,(0,p.jsx)(t.code,{children:`<button>`}),` — always the tab button
itself, even when `,(0,p.jsx)(t.code,{children:`rightIcon`}),` is set and that button is wrapped in an
outer `,(0,p.jsx)(t.code,{children:`<span>`}),` alongside the second, independent icon button. All four
spread their remaining native attributes, so they compose with the rest of
the library without a separate "as child" API. `,(0,p.jsx)(t.code,{children:`TabList`}),`, `,(0,p.jsx)(t.code,{children:`Tab`}),`, and
`,(0,p.jsx)(t.code,{children:`TabPanel`}),` must always be rendered inside a `,(0,p.jsx)(t.code,{children:`Tabs`}),` — they read the active
value from context and throw if that context is missing.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};
import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-Bhpt2FsH.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-DqKpfAD0.js";import{t as c}from"./mdx-react-shim-WHfruk8o.js";import{n as l,t as u}from"./Select.stories-DCWAylbl.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`select`,children:`Select`}),`
`,(0,p.jsxs)(t.p,{children:[`A custom single-select listbox (not a native `,(0,p.jsx)(t.code,{children:`<select>`}),`). Renders as a
button that toggles a floating option list, styled with plain Tailwind
utility classes resolved from a `,(0,p.jsx)(t.code,{children:`size`}),` lookup table — same pattern as
`,(0,p.jsx)(t.code,{children:`Button`}),`. Supports controlled (`,(0,p.jsx)(t.code,{children:`value`}),`/`,(0,p.jsx)(t.code,{children:`onChange`}),`) and uncontrolled
(`,(0,p.jsx)(t.code,{children:`defaultValue`}),`) usage, keyboard navigation (arrow keys, Enter/Space,
Escape), and outside-click dismissal.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`controlled-vs-uncontrolled`,children:`Controlled vs. uncontrolled`}),`
`,(0,p.jsxs)(t.p,{children:[`Pass `,(0,p.jsx)(t.code,{children:`value`}),` + `,(0,p.jsx)(t.code,{children:`onChange`}),` for a controlled select, or `,(0,p.jsx)(t.code,{children:`defaultValue`}),` for an
uncontrolled one — never both. `,(0,p.jsx)(t.code,{children:`Select`}),` decides which mode it's in by
checking whether `,(0,p.jsx)(t.code,{children:`value !== undefined`}),`.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`// Uncontrolled
<Select options={options} defaultValue="apple" />;

// Controlled
const [value, setValue] = useState('apple');
<Select options={options} value={value} onChange={setValue} />;
`})}),`
`,(0,p.jsx)(t.h2,{id:`validation-state`,children:`Validation state`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`error`}),` (boolean) switches the trigger to the danger border/ring styles;
`,(0,p.jsx)(t.code,{children:`errorText`}),` does the same and also renders below the control in place of
`,(0,p.jsx)(t.code,{children:`helperText`}),`.`]}),`
`,(0,p.jsx)(t.h2,{id:`required`,children:`Required`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`required`}),` renders a red asterisk next to the label and sets `,(0,p.jsx)(t.code,{children:`aria-required`}),`
on the trigger.`]}),`
`,(0,p.jsx)(t.h2,{id:`loading`,children:`Loading`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`loading`}),` shows a spinner in place of the chevron and blocks opening the
list — it does not set the native `,(0,p.jsx)(t.code,{children:`disabled`}),` attribute, so a `,(0,p.jsx)(t.code,{children:`Select`}),` that
starts loading while focused doesn't lose focus.`]}),`
`,(0,p.jsx)(t.h2,{id:`grouped-options`,children:`Grouped options`}),`
`,(0,p.jsxs)(t.p,{children:[`Give any `,(0,p.jsx)(t.code,{children:`SelectOption`}),` a `,(0,p.jsx)(t.code,{children:`group: string`}),` to render it under a heading.
Options sharing a group must be contiguous in the `,(0,p.jsx)(t.code,{children:`options`}),` array — the
heading is emitted whenever `,(0,p.jsx)(t.code,{children:`group`}),` changes between consecutive options, so
a non-contiguous group renders its heading more than once.`]}),`
`,(0,p.jsx)(t.h2,{id:`icons`,children:`Icons`}),`
`,(0,p.jsxs)(t.p,{children:[`Give any `,(0,p.jsx)(t.code,{children:`SelectOption`}),` an `,(0,p.jsx)(t.code,{children:`icon`}),` (leading, also mirrored on the closed
trigger for the selected option) and/or a `,(0,p.jsx)(t.code,{children:`rightIcon`}),` (trailing, list-only).
The leading `,(0,p.jsx)(t.code,{children:`icon`}),` column is only reserved — so labels line up whether or not
a given option in that array has one — when at least one option in `,(0,p.jsx)(t.code,{children:`options`}),`
actually has an `,(0,p.jsx)(t.code,{children:`icon`}),`; a `,(0,p.jsx)(t.code,{children:`Select`}),` whose options never set `,(0,p.jsx)(t.code,{children:`icon`}),` renders no
extra column at all. Both `,(0,p.jsx)(t.code,{children:`icon`}),` and `,(0,p.jsx)(t.code,{children:`rightIcon`}),` are sized to 16px
automatically via a CSS rule targeting any SVG child, so you don't need to
size your own icon components. Neither participates in `,(0,p.jsx)(t.code,{children:`searchable`}),` text
matching.`]}),`
`,(0,p.jsx)(t.h2,{id:`searchable`,children:`Searchable`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`searchable`}),` adds a text filter pinned above the option list. Matching
checks, in order, `,(0,p.jsx)(t.code,{children:`option.searchText`}),`, then `,(0,p.jsx)(t.code,{children:`option.label`}),` if it's a plain
string, then `,(0,p.jsx)(t.code,{children:`option.value`}),` — so options with a rich (non-string) `,(0,p.jsx)(t.code,{children:`label`}),`
still narrow via their `,(0,p.jsx)(t.code,{children:`value`}),` unless you supply `,(0,p.jsx)(t.code,{children:`searchText`}),` for a better
match. `,(0,p.jsx)(t.code,{children:`searchPlaceholder`}),` and `,(0,p.jsx)(t.code,{children:`emptyText`}),` are overridable.`]}),`
`,(0,p.jsx)(t.h2,{id:`label-addons`,children:`Label addons`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`labelAddons`}),` renders content on the label row, to the right of the label
text — e.g. an info tooltip trigger. It's rendered as a sibling of the
`,(0,p.jsx)(t.code,{children:`<label>`}),` element, not a child, so an interactive addon never steals focus
into the trigger when clicked.`]}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`Select`}),` forwards its ref to the trigger `,(0,p.jsx)(t.code,{children:`<button>`}),` element. Its root DOM
node is the wrapping `,(0,p.jsx)(t.code,{children:`<div>`}),` (label + trigger + listbox + helper/error
text), which is where `,(0,p.jsx)(t.code,{children:`dataTestId`}),` is applied as `,(0,p.jsx)(t.code,{children:`data-test-id`}),`.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};
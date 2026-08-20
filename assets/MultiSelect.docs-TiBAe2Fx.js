import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-DIoW-LAR.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-eh44YEoF.js";import{t as c}from"./mdx-react-shim-BKjJsHpQ.js";import{n as l,t as u}from"./MultiSelect.stories-dMYVgZMM.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`multiselect`,children:`MultiSelect`}),`
`,(0,p.jsxs)(t.p,{children:[`A chip/token multi-select combobox — the multi-value cousin of `,(0,p.jsx)(t.code,{children:`Select`}),`.
Chosen options render as removable chips inline with a type-to-filter
input; a dropdown lists the remaining options. Options can carry an
avatar, a description line and a chip badge, so the same API covers both a
plain tag input and a rich people picker.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`controlled-only`,children:`Controlled only`}),`
`,(0,p.jsxs)(t.p,{children:[`Unlike `,(0,p.jsx)(t.code,{children:`Select`}),`, `,(0,p.jsx)(t.code,{children:`MultiSelect`}),` has no uncontrolled mode — `,(0,p.jsx)(t.code,{children:`value`}),` (an array
of option values, `,(0,p.jsx)(t.code,{children:`string | number`}),`) and `,(0,p.jsx)(t.code,{children:`onChange`}),` are both required:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`const [value, setValue] = useState<(string | number)[]>([]);
<MultiSelect options={options} value={value} onChange={setValue} />;
`})}),`
`,(0,p.jsx)(t.h2,{id:`options`,children:`Options`}),`
`,(0,p.jsxs)(t.p,{children:[`Each `,(0,p.jsx)(t.code,{children:`MultiSelectOption`}),` is data-agnostic:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`interface MultiSelectOption {
  value: string | number;
  label: ReactNode;
  searchText?: string; // matched against when label isn't a plain string
  description?: string; // second line in the dropdown row
  avatarSrc?: string; // shown on the chip and the dropdown row
  disabled?: boolean; // non-selectable, dimmed
  badge?: ReactNode; // small tag on the chip, e.g. "You"
  group?: string; // heading this option renders under
}
`})}),`
`,(0,p.jsx)(t.h2,{id:`keyboard-interaction`,children:`Keyboard interaction`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`↓`}),` opens the dropdown, or moves the active option while it's open`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`↑`}),` moves the active option`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`Enter`}),` selects the active option`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`Esc`}),` closes the dropdown`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`Backspace`}),` on an empty input removes the last removable chip`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`locking-and-limits`,children:`Locking and limits`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`lockedValues`}),` marks selected values whose chips can't be removed (no `,(0,p.jsx)(t.code,{children:`X`}),`
button rendered). `,(0,p.jsx)(t.code,{children:`max`}),` caps the number of selections — once reached, the
input disables and the placeholder switches to `,(0,p.jsx)(t.code,{children:`Limit {max} reached`}),`.`]}),`
`,(0,p.jsx)(t.h2,{id:`non-searchable-mode`,children:`Non-searchable mode`}),`
`,(0,p.jsxs)(t.p,{children:[`Set `,(0,p.jsx)(t.code,{children:`searchable={false}`}),` for a click-to-open picker with no text filter —
the input becomes read-only and the dropdown always shows the full
remaining option list under `,(0,p.jsx)(t.code,{children:`suggestionsLabel`}),`.`]}),`
`,(0,p.jsx)(t.h2,{id:`rich-labels`,children:`Rich labels`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`label`}),` accepts any `,(0,p.jsx)(t.code,{children:`ReactNode`}),` — an icon, a two-line layout, translated
rich text — not just plain strings. When `,(0,p.jsx)(t.code,{children:`label`}),` isn't a plain string, give
the option a `,(0,p.jsx)(t.code,{children:`searchText`}),` so type-to-filter still has something to match
against; without one, that option is excluded from search results rather
than matched against its stringified value. Chips and dropdown rows always
render the full `,(0,p.jsx)(t.code,{children:`label`}),` node, not a coerced string form.`]}),`
`,(0,p.jsx)(t.h2,{id:`grouped-options`,children:`Grouped options`}),`
`,(0,p.jsxs)(t.p,{children:[`Give any `,(0,p.jsx)(t.code,{children:`MultiSelectOption`}),` a `,(0,p.jsx)(t.code,{children:`group: string`}),` to render it under a
heading in the dropdown. Options sharing a group must be contiguous in the
(filtered) list — the heading is emitted whenever `,(0,p.jsx)(t.code,{children:`group`}),` changes between
consecutive visible options, so a non-contiguous group renders its heading
more than once.`]}),`
`,(0,p.jsx)(t.h2,{id:`loading`,children:`Loading`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`loading`}),` shows a spinner in the trailing edge of the chip row and blocks
opening the dropdown — it does not set the native `,(0,p.jsx)(t.code,{children:`disabled`}),` attribute.`]}),`
`,(0,p.jsx)(t.h2,{id:`validation-state`,children:`Validation state`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`error`}),` (boolean) switches the chip row to the danger border/ring styles;
`,(0,p.jsx)(t.code,{children:`errorText`}),` does the same and also renders below the control in place of
`,(0,p.jsx)(t.code,{children:`helperText`}),`.`]}),`
`,(0,p.jsx)(t.h2,{id:`label-addons`,children:`Label addons`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`labelAddons`}),` renders content on the label row, to the right of the label
text and required marker — e.g. an info tooltip trigger. It's rendered as
a sibling of the `,(0,p.jsx)(t.code,{children:`<label>`}),` element, not a child, so an interactive addon
never steals focus into the field when clicked.`]}),`
`,(0,p.jsx)(t.h2,{id:`granular-addremove-callbacks`,children:`Granular add/remove callbacks`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`onChange`}),` always fires with the full next `,(0,p.jsx)(t.code,{children:`value`}),` array. `,(0,p.jsx)(t.code,{children:`onAdd(option)`}),`
and `,(0,p.jsx)(t.code,{children:`onRemove(value)`}),` fire alongside it — never instead of it — for
consumers who want to react to a single selection change (e.g. an audit
log) without diffing the array themselves.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<MultiSelect
  options={options}
  value={value}
  onChange={setValue}
  onAdd={(option) => track('reviewer_added', { id: option.value })}
  onRemove={(value) => track('reviewer_removed', { id: value })}
/>
`})}),`
`,(0,p.jsx)(t.h2,{id:`avatars`,children:`Avatars`}),`
`,(0,p.jsxs)(t.p,{children:[`Options with an `,(0,p.jsx)(t.code,{children:`avatarSrc`}),` always show an avatar. Set `,(0,p.jsx)(t.code,{children:`showAvatars`}),` to
render one for every option, even those without an image — `,(0,p.jsx)(t.code,{children:`Avatar`}),`
falls back to initials (with a color hashed from the name) derived from
`,(0,p.jsx)(t.code,{children:`searchText`}),` when present, or from `,(0,p.jsx)(t.code,{children:`label`}),` when it's a plain string.
A rich (non-string) `,(0,p.jsx)(t.code,{children:`label`}),` with no `,(0,p.jsx)(t.code,{children:`searchText`}),` has no string to derive
initials from, so it gets `,(0,p.jsx)(t.code,{children:`Avatar`}),`'s generic fallback icon instead.`]}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`MultiSelect`}),` forwards its ref to the inner text `,(0,p.jsx)(t.code,{children:`<input>`}),`. Its root DOM
node is the wrapping `,(0,p.jsx)(t.code,{children:`<div>`}),` (label + chip row + dropdown + helper/error
text), which is where `,(0,p.jsx)(t.code,{children:`dataTestId`}),` is applied as `,(0,p.jsx)(t.code,{children:`data-test-id`}),`. It
composes with `,(0,p.jsx)(t.code,{children:`Avatar`}),` for chip and dropdown-row avatars.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};